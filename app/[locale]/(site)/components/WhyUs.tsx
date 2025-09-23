'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Users, DollarSign, Award, BookOpen, Target, Sparkles, CheckCircle, Star } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function WhyUs() {
  const t = useTranslations('why')

  const features = [
    {
      icon: Users,
      title: t('smallClasses'),
      description: t('smallClassesDesc'),
      color: 'from-primary/10 to-primary/20',
      iconColor: 'text-primary',
      borderColor: 'border-primary/20'
    },
    {
      icon: DollarSign,
      title: t('affordable'),
      description: t('affordableDesc'),
      color: 'from-accent/10 to-accent/20',
      iconColor: 'text-accent-dark',
      borderColor: 'border-accent/20'
    },
    {
      icon: Award,
      title: t('qualified'),
      description: 'Cambridge-trained teachers and British Council certified educators. Our math teachers are Singapore Math specialists.',
      color: 'from-neutral-100 to-neutral-200',
      iconColor: 'text-neutral-700',
      borderColor: 'border-neutral-200'
    },
    {
      icon: BookOpen,
      title: 'Official Materials',
      description: 'We use official Singapore textbooks and educational materials to ensure curriculum alignment.',
      color: 'from-primary/10 to-primary/20',
      iconColor: 'text-primary',
      borderColor: 'border-primary/20'
    },
    {
      icon: Target,
      title: t('success'),
      description: t('successDesc'),
      color: 'from-accent/10 to-accent/20',
      iconColor: 'text-accent-dark',
      borderColor: 'border-accent/20'
    },
    {
      icon: Users,
      title: 'Personalized Support',
      description: '1-on-1 progress reports and monthly parent meetings to track your child\'s development.',
      color: 'from-primary/10 to-primary/20',
      iconColor: 'text-primary',
      borderColor: 'border-primary/20'
    }
  ]

  const stats = [
    { number: "300+", label: "Students Helped", icon: Users },
    { number: "95%", label: "Success Rate", icon: Star },
    { number: "8+", label: "Years Experience", icon: Award }
  ]

  return (
    <section id="why" className="section-padding section-bg relative overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/3 rounded-full blur-xl opacity-60" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/3 rounded-full blur-xl opacity-60" />
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
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 to-yellow-300/10 border border-accent/30 mb-8 glow-accent"
          >
            <Sparkles className="w-5 h-5 text-accent mr-2" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase text-glow">
              Why Choose Us
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
            We're committed to providing the best educational experience for every student with proven results and personalized attention.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="card-premium group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ backgroundImage: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }} />
              
              <div className="relative z-10 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} ${feature.borderColor} border rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Stats Section */}
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
              <h3 className="text-3xl font-semibold text-gradient mb-12">
                Our Track Record
              </h3>
              
              <div className="grid md:grid-cols-3 gap-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4 border border-primary/20">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                    <div className="text-neutral-600 font-medium text-lg">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
