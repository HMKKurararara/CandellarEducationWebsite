'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
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
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Cambridge English Student',
      content: 'The Cambridge English preparation course was excellent. I passed my PET exam with flying colors thanks to the dedicated teachers and quality materials.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Aung Min',
      role: 'iPSLE Student',
      content: 'The iPSLE preparation program was comprehensive and well-structured. The teachers provided individual attention and helped me understand difficult concepts easily.',
      rating: 5,
      avatar: 'AM'
    },
    {
      name: 'Lisa Wong',
      role: 'Parent of Math Student',
      content: 'My son struggled with math, but the teachers at Candellar helped him improve significantly. The affordable pricing made quality education accessible for our family.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'David Kim',
      role: 'O-Level Student',
      content: 'The comprehensive O-Level preparation program helped me achieve excellent results. The personalized approach and expert guidance made all the difference.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Maria Santos',
      role: 'Parent of Cambridge Student',
      content: 'Outstanding quality of education with caring teachers who go above and beyond. My daughter\'s confidence and academic performance improved dramatically.',
      rating: 5,
      avatar: 'MS'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Student Success Stories
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
            Hear from parents and students who have experienced success with our programs and achieved their educational goals.
          </motion.p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative max-w-6xl mx-auto mb-20"
        >
          <div className="card-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="relative z-10 p-12 lg:p-16">
              <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
              
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl lg:text-3xl text-neutral-700 mb-12 leading-relaxed text-balance font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-neutral-900 text-xl">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-neutral-600 text-lg">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-neutral-300 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="card-premium group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>
                
                <blockquote className="text-neutral-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center space-x-4 pt-6 border-t border-neutral-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </div>
                    <div className="text-neutral-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
