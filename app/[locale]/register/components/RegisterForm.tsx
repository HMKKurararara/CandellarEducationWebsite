'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { AlertCircle, Loader2 } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

interface RegisterFormProps {
  onSuccess: () => void
}

export default function RegisterForm({ onSuccess }: RegisterFormProps) {
  const t = useTranslations('form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const programs = [
    'AEIS & iPSLE Prep',
    'Cambridge English Qualifications',
    'Core Subjects (Math, Science, English)',
    'Other'
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    }

    if (!formData.program) {
      newErrors.program = 'Please select a program'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Try server action first
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        onSuccess()
      } else {
        // Fallback to Formspree
        const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            program: formData.program,
            _subject: 'New Registration from Candellar Website'
          }),
        })

        if (formspreeResponse.ok) {
          onSuccess()
        } else {
          throw new Error('Failed to submit form')
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'Failed to submit form. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            {t('name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
              errors.name ? 'border-red-300' : 'border-slate-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <div className="flex items-center space-x-2 mt-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            {t('email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
              errors.email ? 'border-red-300' : 'border-slate-300'
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <div className="flex items-center space-x-2 mt-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            {t('phone')} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
              errors.phone ? 'border-red-300' : 'border-slate-300'
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <div className="flex items-center space-x-2 mt-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.phone}</span>
            </div>
          )}
        </div>

        {/* Program Field */}
        <div>
          <label htmlFor="program" className="block text-sm font-medium text-slate-700 mb-2">
            {t('program')} *
          </label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
              errors.program ? 'border-red-300' : 'border-slate-300'
            }`}
          >
            <option value="">Select a program</option>
            {programs.map((program) => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>
          {errors.program && (
            <div className="flex items-center space-x-2 mt-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.program}</span>
            </div>
          )}
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="flex items-center space-x-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.submit}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>{t('submit')}</span>
          )}
        </button>
      </form>
    </motion.div>
  )
}
