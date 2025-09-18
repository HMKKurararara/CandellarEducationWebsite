'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { useState, useEffect } from 'react'

export default function Testimonials() {
  const t = useTranslations('testimonials')
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent of AEIS Student',
      content: 'Candellar helped my daughter prepare for the AEIS exam and she got accepted into her dream school. The teachers are amazing and the small class sizes really made a difference.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Cambridge English Student',
      content: 'The Cambridge English preparation course was excellent. I passed my PET exam with flying colors thanks to the dedicated teachers and quality materials.',
      rating: 5
    },
    {
      name: 'Aung Min',
      role: 'iPSLE Student',
      content: 'The iPSLE preparation program was comprehensive and well-structured. The teachers provided individual attention and helped me understand difficult concepts easily.',
      rating: 5
    },
    {
      name: 'Lisa Wong',
      role: 'Parent of Math Student',
      content: 'My son struggled with math, but the teachers at Candellar helped him improve significantly. The affordable pricing made quality education accessible for our family.',
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
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
            Hear from parents and students who have experienced success with our programs.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-slate-300" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg lg:text-xl text-slate-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-slate-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-slate-600">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-slate-900">
                  {testimonial.name}
                </div>
                <div className="text-slate-600 text-sm">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
