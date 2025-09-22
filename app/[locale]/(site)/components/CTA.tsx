'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Sparkles, Award, Users, Star } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function CTA() {
  const t = useTranslations('cta')

  const benefits = [
    'Small class sizes for personalized attention',
    'Affordable pricing starting from $130/month',
    'Qualified and experienced teachers',
    'Proven track record of student success'
  ]

  const stats = [
    { number: "300+", label: "Students Helped", icon: Users },
    { number: "95%", label: "Success Rate", icon: Star },
    { number: "8+", label: "Years Experience", icon: Award }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary-950 text-white relative overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/3 rounded-full blur-xl opacity-50" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-xl opacity-50" />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 mb-8"
          >
            <Sparkles className="w-5 h-5 text-accent mr-2" />
            <span className="text-white font-semibold text-sm tracking-wide uppercase">
              Start Your Journey
            </span>
          </motion.div>
          
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance"
          >
            {t('band')}
          </motion.h2>
          
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-blue-100 mb-16 leading-relaxed text-balance max-w-4xl mx-auto"
          >
            Join hundreds of students who have achieved their educational goals with Candellar's proven programs.
          </motion.p>

          {/* Premium Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 border border-white/20">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Benefits List */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
                Why Choose Candellar?
              </h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-blue-100 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Premium CTA Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold mb-6 text-center">Ready to Start?</h3>
                <p className="text-blue-100 mb-8 text-lg text-center leading-relaxed">
                  Register your interest today and take the first step towards Singapore education success.
                </p>
                
                <div className="space-y-4">
                  <motion.a
                    href="/register"
                    className="w-full bg-white text-primary px-8 py-5 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center space-x-3 group hover:scale-105 active:scale-95 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href="mailto:info@candellarmm.com"
                    className="w-full border-2 border-white/30 text-white px-8 py-5 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center space-x-3 group hover:scale-105 active:scale-95"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Contact Us</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="/register"
              className="btn-accent inline-flex items-center space-x-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              href="mailto:info@candellarmm.com"
              className="btn-outline text-white border-white hover:bg-white hover:text-primary inline-flex items-center space-x-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
