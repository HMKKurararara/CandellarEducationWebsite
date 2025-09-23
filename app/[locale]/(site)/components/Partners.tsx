'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Sparkles, Award, Users, BookOpen, GraduationCap, Globe } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function Partners() {
  const t = useTranslations('partners')

  // Educational collaborations and standards we follow
  const partners = [
    {
      name: 'British Council',
      description: 'Certified Training Partner for English Language Education',
      icon: Globe,
      color: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      logo: '/logos/british-council-logo.png' // Placeholder for actual logo
    },
    {
      name: 'Cambridge Assessment',
      description: 'Authorized Cambridge English Partner Centre',
      icon: Award,
      color: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200',
      logo: '/logos/cambridge-logo.png' // Placeholder for actual logo
    },
    {
      name: 'MES-Dawei',
      description: 'Singapore Math Olympiad School Partnership',
      icon: Users,
      color: 'from-purple-50 to-purple-100',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      logo: '/logos/mes-dawei-logo.png' // Placeholder for actual logo
    },
    {
      name: 'Singapore MOE',
      description: 'Following Ministry of Education Singapore Guidelines',
      icon: GraduationCap,
      color: 'from-red-50 to-red-100',
      iconColor: 'text-red-600',
      borderColor: 'border-red-200',
      logo: '/logos/singapore-moe-logo.png' // Placeholder for actual logo
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
            Our Educational Collaborations
          </motion.h2>
          
          <motion.p
            variants={fadeUp}
            className="text-lead max-w-4xl mx-auto text-balance"
          >
            We collaborate with leading educational organizations and follow international standards to provide the highest quality education for our students.
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
                  {/* Logo will be added here when available */}
                  <partner.icon className={`w-10 h-10 ${partner.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {partner.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {partner.description}
                </p>
                <div className="mt-4 text-xs text-neutral-500">
                  {partner.name === 'Singapore MOE' ? 'Following Guidelines' : 
                   partner.name === 'MES-Dawei' ? 'Educational Partnership' : 
                   'Certified Partner'}
                </div>
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
                Educational Excellence Through Collaboration
              </h3>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
                Our partnerships and adherence to international standards ensure that students receive world-class education and preparation for Singapore's academic system.
              </p>
              <motion.a
                href="mailto:contact@candellarsg.com"
                className="btn-primary inline-flex items-center space-x-3 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More About Our Programs</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
