'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

export default function CTA() {
  const t = useTranslations('cta')

  const benefits = [
    'Small class sizes for personalized attention',
    'Affordable pricing starting from $130/month',
    'Qualified and experienced teachers',
    'Proven track record of student success'
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('band')}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Join hundreds of students who have achieved their educational goals with Candellar.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start?</h3>
              <p className="text-blue-100 mb-6">
                Register your interest today and take the first step towards Singapore education success.
              </p>
              <a
                href="/register"
                className="bg-white text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2 group"
              >
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/register"
              className="bg-white text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-200 inline-flex items-center space-x-2 group hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="mailto:info@candellarmm.com"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-200 inline-flex items-center space-x-2 group hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Us</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
