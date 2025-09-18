'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { User, Mail, Linkedin, X } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { useState } from 'react'

export default function Team() {
  const t = useTranslations('team')
  const [selectedMember, setSelectedMember] = useState<any>(null)

  const teamMembers = [
    {
      name: t('koko'),
      role: t('kokoRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-primary/10',
      slug: 'ko-ko',
      isFounder: true,
      bio: t('kokoBio'),
      email: 'koko@candellarmm.com',
      linkedin: 'https://www.linkedin.com/in/ko-ko'
    },
    {
      name: t('khine'),
      role: t('khineRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-accent/10',
      slug: 'khine-htet-oo',
      bio: t('khineBio'),
      email: 'khine@candellarmm.com',
      linkedin: 'https://www.linkedin.com/in/khine-htet-oo'
    },
    {
      name: t('nyan'),
      role: t('nyanRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-slate-100',
      slug: 'nyan',
      bio: t('nyanBio'),
      email: 'nyan@candellarmm.com',
      linkedin: 'https://www.linkedin.com/in/nyan'
    },
    {
      name: t('phoo'),
      role: t('phooRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-primary/10',
      slug: 'phoo-pwint',
      bio: t('phooBio'),
      email: 'phoo@candellarmm.com',
      linkedin: 'https://www.linkedin.com/in/phoo-pwint'
    },
    {
      name: t('lin'),
      role: t('linRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-accent/10',
      slug: 'lin-lat-aung',
      bio: t('linBio'),
      email: 'lin@candellarmm.com',
      linkedin: 'https://www.linkedin.com/in/lin-lat-aung'
    },
    {
      name: t('whut'),
      role: t('whutRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-slate-100',
      slug: 'whut',
      bio: t('whutBio'),
      email: 'whut@candellarmm.com',
      linkedin: 'https://www.linkedin.com/in/whut'
    },
    {
      name: t('htut'),
      role: t('htutRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-primary/10',
      slug: 'htut-loon-eain',
      bio: t('htutBio'),
      email: 'htut@candellarmm.com',
      linkedin: 'https://www.linkedin.com/in/htut-loon-eain'
    }
  ]

  const openModal = (member: any) => {
    setSelectedMember(member)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }

  return (
    <section id="team" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.slug}
              variants={fadeUp}
              className={`card group transition-all duration-300 text-center hover:-translate-y-1 hover:ring-2 hover:ring-primary/20 hover:shadow-lg cursor-pointer ${
                member.isFounder ? 'lg:col-span-3 lg:row-start-1' : ''
              }`}
              onClick={() => openModal(member)}
            >
              <div className="relative mb-6">
                <div className={`w-24 h-24 ${member.color} rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <User className="w-12 h-12 text-slate-600" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {member.name}
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                {member.role}
              </p>

              <div className="text-sm text-primary hover:text-primary-dark transition-colors">
                View Details →
              </div>

              {/* Socials */}
              <div className="flex justify-center space-x-2 mt-4">
                <button 
                  className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(`mailto:${member.email}`)
                  }}
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                </button>
                <button 
                  className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(member.linkedin, '_blank')
                  }}
                >
                  <Linkedin className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              {t('joinTeamTitle')}
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              {t('joinTeamDesc')}
            </p>
            <a
              href="mailto:info@candellarmm.com"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>{t('getInTouch')}</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 ${selectedMember.color} rounded-full flex items-center justify-center`}>
                  <User className="w-8 h-8 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedMember.name}</h3>
                  <p className="text-slate-600">{selectedMember.role}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            <div className="prose prose-lg max-w-none text-slate-700 mb-6">
              <p>{selectedMember.bio}</p>
            </div>

            <div className="flex space-x-4">
              <a
                href={`mailto:${selectedMember.email}`}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}