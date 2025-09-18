'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { MapPin, Building2, Target } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

export default function About() {
  const t = useTranslations('about')

  return (
    <section className="py-16 lg:py-24 bg-white">
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
            {t('mission')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Myanmar Office */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="card group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Myanmar Office
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('mm')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Singapore Office */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="card group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Singapore Office
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('sg')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {t('mission')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
