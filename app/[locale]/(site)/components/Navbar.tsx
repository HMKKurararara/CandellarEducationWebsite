'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { cn, getOppositeLocale } from '@/lib/utils'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLocale = getOppositeLocale(locale)
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.replace(newPath)
    
    // Set locale cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
  }

  const navItems = [
    { key: 'programs', href: '#programs' },
    { key: 'why', href: '#why' },
    { key: 'team', href: '#team' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' },
  ]

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled 
        ? 'glass-effect shadow-medium border-b border-white/20' 
        : 'bg-transparent'
    )}>
      <div className="container-premium">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="group hover:opacity-80 transition-all duration-300">
              <Logo size="md" />
            </a>
          </div>

          {/* Premium Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="nav-link px-4 py-2 text-base font-medium tracking-wide relative group"
                >
                  {t(item.key as any)}
                </a>
              ))}
            </div>
          </div>

          {/* Premium Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <Globe className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-semibold text-primary tracking-wide">
                {locale === 'en' ? 'MY' : 'EN'}
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-3 rounded-full text-neutral-700 hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Premium Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-effect rounded-2xl shadow-large mt-4 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="nav-link block px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(item.key as any)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  )
}
