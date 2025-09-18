'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

declare global {
  interface Window {
    FB: any
  }
}

export default function FacebookFeed() {
  const t = useTranslations('social')

  useEffect(() => {
    // Load Facebook SDK
    if (typeof window !== 'undefined' && !window.FB) {
      const script = document.createElement('script')
      script.src = 'https://connect.facebook.net/en_US/sdk.js'
      script.async = true
      script.defer = true
      script.crossOrigin = 'anonymous'
      document.body.appendChild(script)

      script.onload = () => {
        if (window.FB) {
          window.FB.init({
            xfbml: true,
            version: 'v18.0'
          })
        }
      }
    }
  }, [])

  return (
    <section id="social" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
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
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex justify-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 relative overflow-hidden">
            {/* Auto-scroll indicator */}
            <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Live Updates</span>
              </div>
            </div>
            
            <div 
              className="fb-page" 
              data-href="https://www.facebook.com/candellartuition/" 
              data-tabs="timeline"
              data-width="500"
              data-height="600"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
              data-hide-cta="false"
            >
              <blockquote 
                cite="https://www.facebook.com/candellartuition/" 
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/candellartuition/" className="text-primary hover:text-primary-dark transition-colors">
                  Candellar Education
                </a>
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Fallback for when Facebook doesn't load */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mt-8"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Candellar Education</h3>
                <p className="text-slate-600">Follow us for the latest updates</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6">
              Stay connected with our latest news, student achievements, and educational insights.
            </p>
            <a
              href="https://www.facebook.com/candellartuition/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>{t('visitFacebook')}</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for Facebook widget styling and auto-scroll */}
      <style jsx global>{`
        .fb-page {
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
        }
        
        .fb-page iframe {
          border-radius: 1rem !important;
          animation: smoothScroll 20s linear infinite;
        }
        
        /* Auto-scroll animation */
        @keyframes smoothScroll {
          0% { transform: translateY(0); }
          25% { transform: translateY(-10px); }
          50% { transform: translateY(-20px); }
          75% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        
        /* Pause animation on hover */
        .fb-page:hover iframe {
          animation-play-state: paused;
        }
        
        /* Custom styling for Facebook widget */
        .fb-page .fb_iframe_widget {
          border-radius: 1rem;
          overflow: hidden;
        }
        
        .fb-page .fb_iframe_widget iframe {
          border-radius: 1rem !important;
          border: none !important;
        }
        
        /* Ensure seamless integration */
        .fb-page .fb_iframe_widget span {
          border-radius: 1rem;
          overflow: hidden;
        }
        
        /* Live indicator animation */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}
