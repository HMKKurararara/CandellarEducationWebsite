'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Sparkles, Award, Users, BookOpen, GraduationCap, Globe } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function Partners() {
  const t = useTranslations('partners')

  // Placeholder partners - will be replaced with actual logos
  const partners = [
    {
      name: 'Cambridge Assessment',
      description: 'Official Cambridge English Qualifications',
      icon: Award,
      color: 'from-primary/10 to-primary/20',
      iconColor: 'text-primary',
      borderColor: 'border-primary/20'
    },
    {
      name: 'British Council',
      description: 'International Education and Cultural Relations',
      icon: Globe,
      color: 'from-accent/10 to-accent/20',
      iconColor: 'text-accent-dark',
      borderColor: 'border-accent/20'
    },
    {
      name: 'Singapore MOE',
      description: 'Ministry of Education Singapore',
      icon: GraduationCap,
      color: 'from-neutral-100 to-neutral-200',
      iconColor: 'text-neutral-700',
      borderColor: 'border-neutral-200'
    },
    {
      name: 'Educational Publishers',
      description: 'Official Singapore Textbook Partners',
      icon: BookOpen,
      color: 'from-primary/10 to-primary/20',
      iconColor: 'text-primary',
      borderColor: 'border-primary/20'
    }
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
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
              Our Partners
            </span>
          </motion.div>
          
          <motion.h2
            variants={fadeUp}
            className="text-gradient mb-8 text-balance"
          >
            Trusted by Leading Educational Organizations
          </motion.h2>
          
          <motion.p
            variants={fadeUp}
            className="text-lead max-w-4xl mx-auto text-balance"
          >
            We work with prestigious educational institutions and organizations to provide the highest quality education and resources for our students.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="card-premium group relative overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ backgroundImage: `linear-gradient(135deg, ${partner.color.split(' ')[1]}, ${partner.color.split(' ')[3]})` }} />
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${partner.color} ${partner.borderColor} border rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <partner.icon className={`w-10 h-10 ${partner.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {partner.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mt-16"
        >
          <div className="card-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="relative z-10 p-12">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-semibold text-gradient mb-6">
                Partner with Us
              </h3>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
                Interested in partnering with Candellar? We're always looking to collaborate with educational institutions and organizations that share our commitment to excellence.
              </p>
              <motion.a
                href="mailto:partnerships@candellarsg.com"
                className="btn-primary inline-flex items-center space-x-3 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Our Partnership Team</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
