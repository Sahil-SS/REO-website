import AboutBrief from '@/components/AboutBrief'
import HeroSection from '@/components/HeroSection'
import KeyHighlights from '@/components/KeyHighlights'
import Navbar from '@/components/Navbar'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import React from 'react'
import AboutRERIGroup from '@/components/ui/AboutRERIGroup' // Import is correct

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      
      {/* The existing brief About Us component
      */}
      <AboutBrief />
      
      {/* *** ADD THE NEW SPLIT CARD COMPONENT HERE *** */}
      <AboutRERIGroup /> 
      
      <KeyHighlights />
      <PortfolioSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default page