'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Users, DollarSign, Award, BookOpen, Target } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function WhyUs() {
  const t = useTranslations('why')

  const features = [
    {
      icon: Users,
      title: t('smallClasses'),
      description: t('smallClassesDesc'),
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: DollarSign,
      title: t('affordable'),
      description: t('affordableDesc'),
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: Award,
      title: t('qualified'),
      description: t('qualifiedDesc'),
      color: 'bg-slate-100 text-slate-700'
    },
    {
      icon: BookOpen,
      title: t('partnerships'),
      description: t('partnershipsDesc'),
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Target,
      title: t('success'),
      description: t('successDesc'),
      color: 'bg-accent/10 text-accent'
    }
  ]

  return (
    <section id="why" className="py-16 lg:py-24 bg-white">
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
            We're committed to providing the best educational experience for every student.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-20 bg-slate-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-slate-600">Students Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-700 mb-2">5+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
