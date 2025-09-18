'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import Logo from './Logo'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo size="lg" variant="dark" />
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Your gateway to Singapore education success. We provide affordable, high-quality tuition and exam preparation for AEIS, iPSLE, CEQ, and Cambridge pathways.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Myanmar Office */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('myanmar')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  V5PJ+PRV, Pho Yarzar St<br />
                  Yangon, Myanmar
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="tel:+959123456789" className="text-slate-300 text-sm hover:text-white transition-colors">
                  +95 9 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="mailto:info@candellarmm.com" className="text-slate-300 text-sm hover:text-white transition-colors">
                  info@candellarmm.com
                </a>
              </div>
            </div>
          </div>

          {/* Singapore Office */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('singapore')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  8 Somapah Rd, #01-310<br />
                  Singapore 487372
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="tel:+6561234567" className="text-slate-300 text-sm hover:text-white transition-colors">
                  +65 6123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="mailto:info@candellarsg.com" className="text-slate-300 text-sm hover:text-white transition-colors">
                  info@candellarsg.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="border-t border-slate-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Candellar. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
