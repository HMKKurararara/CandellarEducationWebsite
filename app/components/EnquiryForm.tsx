'use client'
import { FormEvent, useEffect, useState } from 'react'

declare global { interface Window { candellarTurnstile?: (token:string) => void } }

export default function EnquiryForm() {
  const [state, setState] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState('')
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  useEffect(() => {
    if (!siteKey) return
    window.candellarTurnstile = setTurnstileToken
    const script = document.createElement('script'); script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'; script.async = true; script.defer = true; document.head.appendChild(script)
    return () => { delete window.candellarTurnstile; script.remove() }
  }, [siteKey])
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState('sending')
    const form = event.currentTarget
    try {
      if (siteKey && !turnstileToken) throw new Error()
      const res = await fetch('/api/enquiry', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(Object.fromEntries(new FormData(form))) })
      if (!res.ok) throw new Error(); form.reset(); setState('success')
    } catch { setState('error') }
  }
  return <form onSubmit={submit} className="card grid" aria-label="Parent enquiry form">
    <div className="grid grid-2"><label>Parent or guardian name<input name="parentName" required /></label><label>Email address<input name="email" type="email" required /></label></div>
    <div className="grid grid-2"><label>Phone number<input name="phone" /></label><label>Student level/age<input name="studentLevel" placeholder="e.g. Primary 4" /></label></div>
    <label>How can we help?<select name="interest" defaultValue=""><option value="" disabled>Select an area</option><option>School pathway guidance</option><option>AEIS & S-AEIS preparation</option><option>English or Maths classes</option><option>Other</option></select></label>
    <label>Message<textarea name="message" rows={4} /></label>
    <input className="hidden" name="companyWebsite" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <input type="hidden" name="turnstileToken" value={turnstileToken} />
    {siteKey && <div className="cf-turnstile" data-sitekey={siteKey} data-callback="candellarTurnstile" />}
    <label className="!flex !items-start !gap-2 !font-normal"><input className="!mt-1 !w-auto" name="marketingConsent" type="checkbox" />I agree that Candellar Education may contact me about this enquiry.</label>
    <button className="button button-primary" disabled={state==='sending'}>{state==='sending'?'Sending…':'Send enquiry'}</button>
    {state==='success' && <p role="status">Thank you. Our admissions team will be in touch shortly.</p>}
    {state==='error' && <p role="alert">We could not send your enquiry. Please try again or contact us directly.</p>}
  </form>
}
