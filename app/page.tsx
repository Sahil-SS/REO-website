"use client";

import React, { useState } from "react";
import BenefitsSection from "@/components/BenefitsSection";
import HeroSection from "@/components/HeroSection";
// import AboutBrief from '@/components/AboutBrief'
// import KeyHighlights from '@/components/KeyHighlights'
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
// import LoadingSpinner from '@/components/LoadingSpinner'
import TestimonialsSection from "@/components/TestimonialsSection";
// import Gallery from '@/components/Gallery'
import EnquireNowButton from "@/components/EnquireNowButton";
import AboutREODevelopments from "@/components/About-REODevelopmentsCard";
import TradingviewWidget from "@/components/tradingview-widget";
import TrustedCompanies from "@/components/TrustedCompanies";
import ReoLogoVideo from "@/components/ReoLogoVideo";

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 👈 Track navbar menu state

  return (
    <main>
      {/* Navbar with menu state setter */}
      <Navbar setMenuOpen={setMenuOpen} />

      <HeroSection />
      <TradingviewWidget />
      {/* <Gallery /> */}
      {/* <AboutBrief /> */}
      {/* <KeyHighlights /> */}
      <ReoLogoVideo />
      <BenefitsSection />
      <AboutREODevelopments />
      <PortfolioSection />
      <TestimonialsSection />
      <TrustedCompanies />
      <Footer />
      <ScrollToTop />

      {/* Hide Enquire Button if navbar menu is open */}
      {!menuOpen && <EnquireNowButton />}

      {/* <LoadingSpinner /> */}
    </main>
  );
};

export default Page;
