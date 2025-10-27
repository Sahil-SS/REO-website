// import AboutBrief from '@/components/AboutBrief'
import BenefitsSection from '@/components/BenefitsSection'
import HeroSection from '@/components/HeroSection'
// import KeyHighlights from '@/components/KeyHighlights'
import Navbar from '@/components/Navbar'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import React from 'react'
// import LoadingSpinner from '@/components/LoadingSpinner'
import TestimonialsSection from '@/components/TestimonialsSection'
// import Gallery from '@/components/Gallery'
import AboutREODevelopments from '@/components/About REO DevelopmentsCard'
import TradingviewWidget from '@/components/tradingview-widget'
import TrustedCompanies from '@/components/TrustedCompanies'

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TradingviewWidget />
      {/* <Gallery /> */}
      {/* <AboutBrief /> */}
      {/* <KeyHighlights /> */}
      <BenefitsSection />
      <AboutREODevelopments />
      <PortfolioSection />
      {/* <TrustedCompanies /> */}
      <TestimonialsSection />
      <Footer />
      <ScrollToTop />
      {/* <LoadingSpinner /> */}
    </main>
  )
}

export default page