'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { MapPin, Building2, Target, Sparkles, Award, Users } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function About() {
  const t = useTranslations('about')

  return (
    <section className="section-padding section-bg relative overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/3 rounded-full blur-xl opacity-60" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/3 rounded-full blur-xl opacity-60" />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              About Candellar
            </span>
          </motion.div>
          
          <motion.h2
            variants={fadeUp}
            className="text-gradient mb-8 text-balance"
          >
            {t('title')}
          </motion.h2>
          
          <motion.p
            variants={fadeUp}
            className="text-lead max-w-4xl mx-auto text-balance"
          >
            {t('mission')}
          </motion.p>
        </motion.div>

        {/* Premium Office Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Myanmar Office */}
          <motion.div
            variants={fadeUp}
            className="card-premium group"
          >
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Myanmar Office
                </h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {t('address')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Singapore Office */}
          <motion.div
            variants={fadeUp}
            className="card-premium group"
          >
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/20">
                  <Building2 className="w-10 h-10 text-accent-dark" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Singapore Office
                </h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Singapore
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Mission Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          <div className="card-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
                <Target className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-semibold text-gradient mb-6">
                Our Mission
              </h3>
              <p className="text-xl text-neutral-600 max-w-5xl mx-auto leading-relaxed text-balance">
                {t('mission')}
              </p>
              
              {/* Mission Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-neutral-200">
                {[
                  { icon: Award, label: "8+ Years", sublabel: "Educational Excellence" },
                  { icon: Users, label: "300+", sublabel: "Successful Students" },
                  { icon: Sparkles, label: "95%", sublabel: "Success Rate" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4 border border-primary/20">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-2">{stat.label}</div>
                    <div className="text-neutral-600 font-medium">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
