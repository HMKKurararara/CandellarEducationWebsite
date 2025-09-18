'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { User, Mail, Linkedin } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function Team() {
  const t = useTranslations('team')

  const teamMembers = [
    {
      name: t('khine'),
      role: t('khineRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-primary/10'
    },
    {
      name: t('nyan'),
      role: t('nyanRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-accent/10'
    },
    {
      name: t('phoo'),
      role: t('phooRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-slate-100'
    },
    {
      name: t('lin'),
      role: t('linRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-primary/10'
    },
    {
      name: t('whut'),
      role: t('whutRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-accent/10'
    },
    {
      name: t('htut'),
      role: t('htutRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-slate-100'
    },
    {
      name: t('koko'),
      role: t('kokoRole'),
      image: '/api/placeholder/300/300',
      color: 'bg-primary/10'
    }
  ]

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
            Meet our dedicated team of educators and administrators who are passionate about student success.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
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
              
              <div className="flex justify-center space-x-2">
                <button className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-slate-600" />
                </button>
                <button className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
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
              Join Our Team
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate educators who share our commitment to student success.
            </p>
            <a
              href="mailto:info@candellarmm.com"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
