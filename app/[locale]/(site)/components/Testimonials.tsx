'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Star, Sparkles, ZoomIn, X, ChevronRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { useState } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const t = useTranslations('testimonials')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  // Real student testimonial images
  const testimonialImages = [
    'photo_2025-09-22_12-51-31.jpg',
    'photo_2025-09-22_12-51-34.jpg',
    'photo_2025-09-22_12-51-43.jpg',
    'photo_2025-09-22_12-51-47.jpg',
    'photo_2025-09-22_12-51-50.jpg',
    'photo_2025-09-22_12-51-59.jpg',
    'photo_2025-09-22_12-52-02.jpg',
    'photo_2025-09-22_12-52-04.jpg',
    'photo_2025-09-22_12-52-16.jpg',
    'photo_2025-09-22_12-52-40.jpg',
    'photo_2025-09-22_12-52-46.jpg',
    'photo_2025-09-22_12-52-49.jpg',
    'photo_2025-09-22_12-52-51.jpg',
    'photo_2025-09-22_12-52-53.jpg',
    'photo_2025-09-22_12-52-54.jpg',
    'photo_2025-09-22_12-52-57.jpg',
    'photo_2025-09-22_12-52-58.jpg'
  ]

  const displayImages = showAll ? testimonialImages : testimonialImages.slice(0, 8)

  return (
    <section id="testimonials" className="section-padding bg-neutral-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-2xl opacity-70 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-orange-300/10 rounded-full blur-xl opacity-50" />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 to-yellow-300/10 border border-accent/30 mb-8 glow-accent"
          >
            <Sparkles className="w-5 h-5 text-accent mr-2" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase text-glow">
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
            See real testimonials and success stories from our students and parents who have achieved their educational goals with Candellar.
          </motion.p>
        </motion.div>

        {/* Simplified Testimonial Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {displayImages.map((image, index) => (
              <motion.div
                key={`testimonial-${index}-${image}`}
                variants={fadeUp}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-white shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-yellow-300/10 to-orange-300/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src={`/Student Testimonial/${image}`}
                  alt={`Student testimonial ${index + 1}`}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl flex items-center justify-center z-20">
                  <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
                {/* Enhanced glow border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/60 rounded-2xl transition-all duration-300 shadow-lg shadow-transparent group-hover:shadow-accent/20" />
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="btn-accent inline-flex items-center space-x-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{showAll ? 'Show Less' : `Show All ${testimonialImages.length} Testimonials`}</span>
              <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </motion.button>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          <div className="card-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-yellow-300/5" />
            <div className="relative z-10 p-8 sm:p-12">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent/20 to-yellow-300/20 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-accent/30 glow-accent">
                <Star className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gradient mb-4 sm:mb-6">
                Join Our Success Stories
              </h3>
              <p className="text-lg sm:text-xl text-neutral-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
                Ready to become our next success story? Join hundreds of students who have achieved their educational dreams with Candellar.
              </p>
              <motion.a
                href="/register"
                className="btn-accent inline-flex items-center space-x-3 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Journey</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/Student Testimonial/${selectedImage}`}
              alt="Student testimonial"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-100 transition-colors group"
            >
              <X className="w-6 h-6 text-neutral-600 group-hover:text-neutral-800" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
