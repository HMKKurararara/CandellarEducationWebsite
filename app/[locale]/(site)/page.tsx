import { redirect } from 'next/navigation'

// The legacy bilingual landing page has been superseded by the CMS-managed site.
export default function LegacyHome() { redirect('/') }
