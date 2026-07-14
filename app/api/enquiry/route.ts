import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { Resend } from 'resend'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export async function POST(request: Request) {
  const data = await request.json()
  if (data.companyWebsite) return NextResponse.json({error:'Invalid form'}, {status:400})
  if (!data.parentName || !data.email || typeof data.email !== 'string' || !data.email.includes('@')) return NextResponse.json({error:'Invalid form'}, {status:400})
  if (process.env.TURNSTILE_SECRET_KEY) {
    const check = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body:new URLSearchParams({secret:process.env.TURNSTILE_SECRET_KEY,response:String(data.turnstileToken || '')}) })
    const result = await check.json() as {success?:boolean}
    if (!result.success) return NextResponse.json({error:'Spam verification failed'}, {status:400})
  }
  const enquiry = {
    _type:'enquiry', parentName:String(data.parentName).slice(0,120), email:data.email.slice(0,160), phone:String(data.phone || '').slice(0,60),
    studentLevel:String(data.studentLevel || '').slice(0,100), interest:String(data.interest || '').slice(0,160), message:String(data.message || '').slice(0,2000),
    marketingConsent:Boolean(data.marketingConsent), status:'New', receivedAt:new Date().toISOString(),
  }
  const tasks: Promise<unknown>[] = []
  if (process.env.SANITY_API_WRITE_TOKEN && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) tasks.push(createClient({projectId,dataset,apiVersion,token:process.env.SANITY_API_WRITE_TOKEN,useCdn:false}).create(enquiry))
  if (process.env.RESEND_API_KEY && process.env.ADMISSIONS_EMAIL) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    tasks.push(resend.emails.send({ from:process.env.RESEND_FROM_EMAIL || 'Candellar Education <onboarding@resend.dev>', to:process.env.ADMISSIONS_EMAIL, subject:`New parent enquiry: ${enquiry.parentName}`, text:`Email: ${enquiry.email}\nPhone: ${enquiry.phone}\nStudent: ${enquiry.studentLevel}\nInterest: ${enquiry.interest}\n\n${enquiry.message}` }))
  }
  await Promise.allSettled(tasks)
  return NextResponse.json({ok:true})
}
