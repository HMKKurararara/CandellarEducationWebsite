'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Sparkles, Award, Users } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import Logo from './Logo'

export default function Hero() {
  const t = useTranslations('hero')
  const tCta = useTranslations('cta')

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-accent/15 rounded-full blur-lg"
        />
      </div>
      
      <div className="container-premium relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto"
        >
          {/* Logo with Premium Animation */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <Logo size="xl" showText={false} />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-primary/20 rounded-full border-dashed"
              />
            </motion.div>
          </motion.div>
          
          {/* Premium Headline */}
          <motion.div
            variants={fadeUp}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                Premium Education Center
              </span>
            </motion.div>
            
            <motion.h1
              variants={fadeUp}
              className="text-gradient mb-6 text-balance leading-tight"
            >
              {t('title')}
            </motion.h1>
            
            <motion.p
              variants={fadeUp}
              className="text-lead mb-12 max-w-4xl mx-auto text-balance"
            >
              {t('subtitle')}
            </motion.p>
          </motion.div>
          
          {/* Premium CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="/register"
              className="btn-primary inline-flex items-center space-x-3 group relative"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="relative z-10">{tCta('join')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary rounded-full opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="#programs"
              className="btn-secondary inline-flex items-center space-x-3 group relative"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>{tCta('learnMore')}</span>
            </motion.a>
          </motion.div>
          
          {/* Premium Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Award, label: "8+ Years", sublabel: "Experience" },
              { icon: Users, label: "300+", sublabel: "Students" },
              { icon: Sparkles, label: "95%", sublabel: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4 border border-primary/20">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-1">{stat.label}</div>
                <div className="text-neutral-600 font-medium">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-neutral-500 hover:text-primary transition-colors cursor-pointer"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center mb-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </div>
          <span className="text-xs font-medium tracking-wide">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
