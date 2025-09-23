'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { BookOpen, Award, GraduationCap, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { 
  CalculatorDoodle, 
  PencilDoodle, 
  BookStackDoodle, 
  StarDoodle,
  GlobeDoodle,
  DNADoodle
} from './EducationDoodles'

export default function Programs() {
  const t = useTranslations('programs')

  const programs = [
    {
      icon: BookOpen,
      title: t('aeis'),
      description: t('aeisDesc'),
      features: ['Exam Preparation', 'Mock Tests', 'Study Materials'],
      color: 'from-primary/10 to-primary/20',
      iconColor: 'text-primary',
      borderColor: 'border-primary/20'
    },
    {
      icon: Award,
      title: t('cambridge'),
      description: t('cambridgeDesc'),
      features: ['Cambridge Curriculum', 'Certified Teachers', 'International Standards'],
      color: 'from-accent/10 to-accent/20',
      iconColor: 'text-accent-dark',
      borderColor: 'border-accent/20'
    },
    {
      icon: GraduationCap,
      title: t('core'),
      description: t('coreDesc'),
      features: ['Core Subjects', 'Skill Building', 'Academic Support'],
      color: 'from-neutral-100 to-neutral-200',
      iconColor: 'text-neutral-700',
      borderColor: 'border-neutral-200'
    }
  ]

  return (
    <section id="programs" className="section-padding bg-white relative overflow-hidden">
      {/* Enhanced Background Elements with Education Doodles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/3 rounded-full blur-xl opacity-60" />
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-accent/3 rounded-full blur-xl opacity-60" />
        
        {/* Education Doodles */}
        <CalculatorDoodle 
          className="large floating" 
          style={{ top: '15%', left: '12%', transform: 'rotate(25deg)' }} 
        />
        <PencilDoodle 
          className="floating-delayed" 
          style={{ top: '30%', right: '15%', transform: 'rotate(-30deg)' }} 
        />
        <BookStackDoodle 
          className="floating-slow" 
          style={{ bottom: '20%', left: '18%', transform: 'rotate(15deg)' }} 
        />
        <StarDoodle 
          className="small floating" 
          style={{ top: '60%', right: '25%', transform: 'rotate(-45deg)' }} 
        />
        <GlobeDoodle 
          className="floating-delayed" 
          style={{ bottom: '35%', right: '8%', transform: 'rotate(35deg)' }} 
        />
        <DNADoodle 
          className="small floating-slow" 
          style={{ top: '75%', left: '35%', transform: 'rotate(-20deg)' }} 
        />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 to-orange-200/20 border border-accent/30 mb-8 glow-accent"
          >
            <Sparkles className="w-5 h-5 text-accent mr-2" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase text-glow">
              Our Programs
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
            We provide a one-stop solution for Singapore education for international students, offering comprehensive programs designed to help students succeed in Singapore's competitive academic environment.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-12 mb-20"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="card-premium group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ backgroundImage: `linear-gradient(135deg, ${program.color.split(' ')[1]}, ${program.color.split(' ')[3]})` }} />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${program.color} ${program.borderColor} border rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className={`w-10 h-10 ${program.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-lg mb-6">
                    {program.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="/register"
                  className="btn-outline w-full flex items-center justify-center space-x-2 group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Call to Action */}
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
                <GraduationCap className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-semibold text-gradient mb-6">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
                Join hundreds of students who have successfully prepared for Singapore's top schools with our proven programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="/register"
                  className="btn-primary inline-flex items-center space-x-3 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Register Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
                
                <motion.a
                  href="#why"
                  className="btn-secondary inline-flex items-center space-x-3 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Why Choose Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
