import AboutBrief from '@/components/AboutBrief'
import BenefitsSection from '@/components/BenefitsSection'
import HeroSection from '@/components/HeroSection'
import KeyHighlights from '@/components/KeyHighlights'
import Navbar from '@/components/Navbar'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import React from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import TestimonialsSection from '@/components/TestimonialsSection'
import Gallery from '@/components/Gallery'
import AboutREODevelopments from '@/components/About REO DevelopmentsCard'

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <Gallery />
      <AboutBrief />
      <KeyHighlights />
      <BenefitsSection />
      <AboutREODevelopments />
      <PortfolioSection />
      <Footer />
      <ScrollToTop />
      {/* <LoadingSpinner /> */}
    </main>
  )
}

export default page