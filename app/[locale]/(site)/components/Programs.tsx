'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { BookOpen, Award, GraduationCap } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function Programs() {
  const t = useTranslations('programs')

  const programs = [
    {
      icon: BookOpen,
      title: t('aeis'),
      description: t('aeisDesc'),
      color: 'bg-primary/10 text-primary',
      hoverColor: 'group-hover:bg-primary/20'
    },
    {
      icon: Award,
      title: t('cambridge'),
      description: t('cambridgeDesc'),
      color: 'bg-accent/10 text-accent',
      hoverColor: 'group-hover:bg-accent/20'
    },
    {
      icon: GraduationCap,
      title: t('core'),
      description: t('coreDesc'),
      color: 'bg-slate-100 text-slate-700',
      hoverColor: 'group-hover:bg-slate-200'
    }
  ]

  return (
    <section id="programs" className="py-16 lg:py-24 bg-slate-50">
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
            Comprehensive educational programs designed to help students succeed in Singapore's competitive academic environment.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${program.color} ${program.hoverColor} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300`}>
                  <program.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have successfully prepared for Singapore's top schools with our proven programs.
            </p>
            <a
              href="/register"
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>Register Now</span>
              <BookOpen className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
