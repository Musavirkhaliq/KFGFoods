import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import CraftsmanshipVideoSection from "@/components/CraftsmanshipVideoSection";
import AboutSection from "@/components/AboutSection";
import HealthChallengeSection from "@/components/HealthChallengeSection";
import ScienceSection from "@/components/ScienceSection";
import ProductPortfolio from "@/components/ProductPortfolio";
import HealthAssessment from "@/components/HealthAssessment";
import SubscriptionSection from "@/components/SubscriptionSection";
import ScientificEvidence from "@/components/ScientificEvidence";
import PartnershipSection from "@/components/PartnershipSection";
import LeadershipSection from "@/components/LeadershipSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#071109] text-[#F3F4F6] relative selection:bg-[#D97706] selection:text-[#08120A]">
      {/* Sticky Header with FSSAI top-bar and responsive navigation */}
      <Header />

      {/* Main Page Landmark */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero Experience & Product Philosophy Strip */}
        <HeroSection />

        {/* Section 2: Brand Trust Strip */}
        <TrustStrip />

        {/* Cinematic Scroll-Reveal Artisanal Kitchen Video Showcase */}
        <CraftsmanshipVideoSection />

        {/* Section 3: About KFG Foods */}
        <AboutSection />

        {/* Section 4: The Health Challenge & Regional Statistics */}
        <HealthChallengeSection />

        {/* Section 5: The FreshBic Science & Educational Concepts */}
        <ScienceSection />

        {/* Section 6: Product Discovery Experience (Filterable 5 Categories) */}
        <ProductPortfolio />

        {/* Section 7: Interactive Health & Food Preference Assessment */}
        <HealthAssessment />

        {/* Section 8: Monthly Subscription Experience */}
        <SubscriptionSection />

        {/* Section 9: Scientific Evidence & Research Citations */}
        <ScientificEvidence />

        {/* Section 10: Business Partnership & Distribution (B2B) */}
        <PartnershipSection />

        {/* Section 11: Leadership & Domain Advisory Board */}
        <LeadershipSection />
      </main>

      {/* Section 12: Comprehensive Footer with Legal & Accreditation */}
      <Footer />

      {/* Floating WhatsApp Concierge Action (Desktop & Mobile) */}
      <FloatingWhatsApp />

      {/* Persistent Mobile Bottom Action Bar */}
      <MobileBottomBar />
    </div>
  );
}
