'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Sparkles, Award, Users } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import Logo from './Logo'
import { 
  LightBulbDoodle, 
  MathFormulaDoodle, 
  AtomDoodle, 
  BookStackDoodle, 
  GraduationCapDoodle, 
  CalculatorDoodle, 
  PencilDoodle, 
  GlobeDoodle, 
  DNADoodle, 
  StarDoodle 
} from './EducationDoodles'

export default function Hero() {
  const t = useTranslations('hero')
  const tCta = useTranslations('cta')

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Enhanced Background Elements with Yellow/Orange Hues */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/10" />
      
      {/* Enhanced Background Elements with Education Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-70 animate-pulse" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-orange-300/20 rounded-full blur-xl opacity-80 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-amber-300/15 rounded-full blur-lg opacity-50" />
        
        {/* Enhanced SVG Education Doodles */}
        <LightBulbDoodle 
          className="large floating" 
          style={{ top: '15%', left: '8%', transform: 'rotate(15deg)' }} 
        />
        <PencilDoodle 
          className="floating-delayed" 
          style={{ top: '25%', right: '12%', transform: 'rotate(-20deg)' }} 
        />
        <StarDoodle 
          className="small floating-slow" 
          style={{ top: '45%', left: '15%', transform: 'rotate(45deg)' }} 
        />
        <GraduationCapDoodle 
          className="large floating" 
          style={{ top: '60%', right: '25%', transform: 'rotate(-10deg)' }} 
        />
        <MathFormulaDoodle 
          className="floating-delayed" 
          style={{ top: '30%', left: '25%', transform: 'rotate(25deg)' }} 
        />
        <CalculatorDoodle 
          className="floating-slow" 
          style={{ bottom: '20%', right: '15%', transform: 'rotate(-15deg)' }} 
        />
        <AtomDoodle 
          className="large floating" 
          style={{ bottom: '30%', left: '20%', transform: 'rotate(30deg)' }} 
        />
        <BookStackDoodle 
          className="floating-delayed" 
          style={{ top: '70%', left: '5%', transform: 'rotate(-25deg)' }} 
        />
        <DNADoodle 
          className="small floating-slow" 
          style={{ top: '10%', right: '30%', transform: 'rotate(-30deg)' }} 
        />
        <GlobeDoodle 
          className="floating" 
          style={{ bottom: '15%', left: '35%', transform: 'rotate(40deg)' }} 
        />
        <StarDoodle 
          className="small floating-delayed" 
          style={{ top: '80%', right: '8%', transform: 'rotate(60deg)' }} 
        />
        <LightBulbDoodle 
          className="small floating-slow" 
          style={{ bottom: '40%', right: '35%', transform: 'rotate(-45deg)' }} 
        />
      </div>
      
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 lg:py-20">
          {/* Content Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-1 lg:order-1"
          >
            {/* Enhanced Logo */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center mb-8 lg:mb-12"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 relative">
                  <Logo size="xl" showText={false} />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-yellow-300/30 rounded-full blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Headline */}
            <motion.div
              variants={fadeUp}
              className="mb-8"
            >
              <motion.h1
                variants={fadeUp}
                className="text-gradient mb-6 text-balance leading-tight"
                style={{ textShadow: '0 0 30px rgba(251, 191, 36, 0.3)' }}
              >
                {t('title')}
              </motion.h1>
              
              <motion.p
                variants={fadeUp}
                className="text-lead mb-8 text-balance"
              >
                {t('subtitle')}
              </motion.p>
            </motion.div>
            
            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 lg:mb-12"
            >
              <motion.a
                href="/register"
                className="btn-primary inline-flex items-center space-x-3 group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)' }}
              >
                <span className="relative z-10">{tCta('join')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </motion.a>
              
              <motion.a
                href="#programs"
                className="btn-secondary inline-flex items-center space-x-3 group relative border-2 border-accent/50 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
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
            
            {/* Enhanced Stats */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-md mx-auto lg:mx-0"
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
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent/20 to-yellow-300/20 rounded-xl mb-2 sm:mb-3 border border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">{stat.label}</div>
                  <div className="text-neutral-600 font-medium text-xs sm:text-sm">{stat.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="order-2 lg:order-2 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group max-w-lg mx-auto lg:max-w-none">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-yellow-300 to-orange-300 rounded-2xl sm:rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-[2px] bg-white rounded-2xl sm:rounded-3xl"></div>
              
              {/* Video container */}
              <div className="relative z-10 aspect-video rounded-2xl sm:rounded-3xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/CANDELLAR Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video overlay with subtle branding */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-primary">Candellar Education</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements around video */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full blur-sm opacity-60 animate-bounce"></div>
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-300 rounded-full blur-sm opacity-50 animate-bounce" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
