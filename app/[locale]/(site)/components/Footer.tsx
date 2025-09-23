'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight, Sparkles } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import Logo from './Logo'

export default function Footer() {
  const t = useTranslations('footer')

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const quickLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'About Us', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' }
  ]

  return (
    <footer id="contact" className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              variants={fadeUp}
              className="mb-8"
            >
              <Logo size="lg" variant="dark" />
            </motion.div>
            
            <motion.p
              variants={fadeUp}
              className="text-neutral-300 mb-8 max-w-lg text-lg leading-relaxed"
            >
              Your gateway to Singapore education success. We provide affordable, high-quality tuition and exam preparation for AEIS, iPSLE, CEQ, and Cambridge pathways.
            </motion.p>

            {/* Newsletter Signup */}
            <motion.div
              variants={fadeUp}
              className="mb-8"
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-accent mr-2" />
                Stay Updated
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
                <button className="btn-primary px-6 py-3 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-neutral-800 hover:bg-primary hover:scale-110 rounded-xl flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Myanmar Office */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-1"
          >
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <MapPin className="w-5 h-5 text-primary mr-2" />
              {t('myanmar')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-neutral-300">
                  <div className="font-medium">43/1003, Phoe Yar Zar St</div>
                  <div>North Dagon, Yangon, Myanmar</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+959988434188" className="text-neutral-300 hover:text-white transition-colors">
                  {t('phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@candellarsg.com" className="text-neutral-300 hover:text-white transition-colors">
                  {t('email')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Singapore Office */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-1"
          >
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <MapPin className="w-5 h-5 text-accent mr-2" />
              {t('singapore')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-neutral-300">
                  <div className="font-medium">Singapore</div>
                  <div>Full Support & Coordination</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+6561234567" className="text-neutral-300 hover:text-white transition-colors">
                  +65 6123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:contact@candellarsg.com" className="text-neutral-300 hover:text-white transition-colors">
                  {t('email')}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="border-t border-neutral-700 pt-8 mb-8"
        >
          <div className="flex flex-wrap gap-8 justify-center">
            {quickLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="border-t border-neutral-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2024 Candellar. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-neutral-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
