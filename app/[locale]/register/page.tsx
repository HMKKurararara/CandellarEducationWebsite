'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import RegisterForm from './components/RegisterForm'

export default function RegisterPage() {
  const t = useTranslations('form')
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="flex items-center space-x-2 text-slate-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </a>
            <div className="h-6 w-px bg-slate-300" />
            <h1 className="text-2xl font-bold text-slate-900">Candellar</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-600">
            Get started on your Singapore education journey today. We'll contact you within 24 hours.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Thank You!
            </h3>
            <p className="text-slate-600 mb-8">
              {t('success')}
            </p>
            <a
              href="/"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Return to Home</span>
            </a>
          </motion.div>
        ) : (
          <RegisterForm onSuccess={() => setIsSubmitted(true)} />
        )}
      </div>
    </main>
  )
}
