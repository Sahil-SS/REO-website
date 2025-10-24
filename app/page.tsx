import AboutBrief from '@/components/AboutBrief'
import HeroSection from '@/components/HeroSection'
import KeyHighlights from '@/components/KeyHighlights'
import Navbar from '@/components/Navbar'
import PortfolioSection from '@/components/PortfolioSection'
import React from 'react'

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutBrief />
      <KeyHighlights />
      <PortfolioSection />
    </main>
  )
}

export default page