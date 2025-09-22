import { useTranslations } from 'next-intl'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import WhyUs from './components/WhyUs'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyUs />
      <Team />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  )
}
