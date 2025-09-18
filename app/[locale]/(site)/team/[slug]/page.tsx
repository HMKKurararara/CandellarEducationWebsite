import { notFound } from 'next/navigation'
import Link from 'next/link'

const members: Record<string, { name: string; role: string; bio: string }> = {
  'khine-htet-oo': {
    name: 'Khine Htet Oo',
    role: 'General Regional Manager',
    bio: 'Khine oversees regional operations and ensures program excellence across locations.'
  },
  'nyan': {
    name: 'Nyan',
    role: 'Sales & Marketing Head',
    bio: 'Nyan leads marketing strategy and partnerships to grow Candellar’s impact.'
  },
  'phoo-pwint': {
    name: 'Phoo Pwint',
    role: 'Admin & Marketing',
    bio: 'Phoo supports operations and marketing execution to deliver great student experiences.'
  },
  'lin-lat-aung': {
    name: 'Lin Lat Aung',
    role: 'English Teacher',
    bio: 'Lin specializes in Cambridge English and communication skills development.'
  },
  'whut': {
    name: 'Whut',
    role: 'English Teacher',
    bio: 'Whut focuses on foundational through advanced English for test preparation.'
  },
  'htut-loon-eain': {
    name: 'Htut Loon Eain',
    role: 'Math Teacher',
    bio: 'Htut helps students master math concepts with clarity and confidence.'
  },
  'ko-ko': {
    name: 'Ko Ko',
    role: 'Founder',
    bio: 'Ko Ko co-founded Candellar to provide accessible, credible, skills-based learning.'
  }
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js 15 passes params as a promise
  const { slug } = await params

  const member = members[slug]
  if (!member) return notFound()

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="../" className="text-sm text-slate-600 hover:text-primary">← Back to Team</Link>
        <div className="mt-6 bg-slate-50 rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-slate-900">{member.name}</h1>
          <p className="text-slate-600 mt-1">{member.role}</p>
          <div className="mt-6 text-slate-700 leading-relaxed">
            {member.bio}
          </div>
        </div>
      </div>
    </main>
  )
}

