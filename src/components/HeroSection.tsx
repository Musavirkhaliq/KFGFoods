"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  MapPin,
  Heart,
  Droplets,
  Leaf,
  FlaskConical,
  Eye,
  Users,
  Star,
  Play,
  X,
  Sparkles,
  Award,
} from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      {/* =========================================================================
          HERO SECTION (Dark Luxury Editorial Botanical)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-[#071109] pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-emerald-950/70">
        
        {/* Atmospheric Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full bg-emerald-900/15 blur-[100px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 sm:left-10 w-64 sm:w-[450px] h-64 sm:h-[450px] rounded-full bg-amber-600/10 blur-[100px] sm:blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D2213]/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium tracking-tight mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-bold">FSSAI LIC: 11023470000115</span>
                <span className="text-emerald-700">|</span>
                <span className="hidden sm:inline text-emerald-200">KASHMIR&apos;S PREVENTIVE FOOD-TECH INITIATIVE</span>
                <span className="sm:hidden text-emerald-200">FOOD-TECH INITIATIVE</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
                Sweetness for Life <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] italic font-serif">
                  Without Sugar
                  {/* Golden curved flourish underglow line */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#D97706] opacity-80"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C80 2 220 2 298 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Emotional Quote Callout */}
              <div className="mt-4 mb-4">
                <p className="text-base sm:text-lg font-serif italic text-gray-200 font-medium leading-relaxed">
                  <span className="text-emerald-400 font-serif text-2xl mr-1">“</span>
                  When you indulge, it&apos;s not your sugar that spikes. It&apos;s your joy.
                  <span className="text-emerald-400 font-serif text-2xl ml-1">”</span>
                </p>
              </div>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base text-[#A1B0A4] leading-relaxed mb-8 max-w-xl font-sans">
                Discover a new way to enjoy everyday favourites. <strong className="text-white font-semibold">KFGFoods</strong> brings together regional ingredients, millet-based formulations, and thoughtful food innovation to create a more conscious bakery and nutrition experience.
              </p>

              {/* Dual Action CTAs */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 gold-gradient-btn text-[#08120A] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all active:scale-95 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 fill-current text-[#08120A]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.58 1.942.923 3.149.923 3.182 0 5.767-2.587 5.767-5.766 0-3.18-2.586-5.765-5.767-5.765zm0 10.354c-1.026 0-1.936-.312-2.731-.861l-.196-.134-1.393.366.372-1.358-.128-.204c-.615-.978-.941-1.897-.94-2.797 0-2.518 2.048-4.566 4.568-4.566 2.519 0 4.568 2.048 4.568 4.566 0 2.519-2.049 4.567-4.568 4.567zm4.254-2.812c-.234-.117-1.385-.683-1.6-.761-.215-.078-.372-.117-.528.117-.156.234-.607.761-.744.918-.137.156-.274.176-.508.059-.234-.117-.988-.364-1.882-1.161-.696-.621-1.166-1.388-1.303-1.622-.137-.234-.015-.36.103-.477.106-.105.234-.274.351-.411.117-.137.156-.234.234-.391.078-.156.039-.293-.02-.411-.059-.117-.528-1.272-.724-1.742-.191-.458-.385-.396-.528-.403l-.45-.008c-.156 0-.411.059-.626.293-.215.234-.822.803-.822 1.958s.841 2.271.958 2.428c.117.156 1.656 2.528 4.012 3.545.56.242.998.386 1.34.495.563.179 1.075.154 1.48.093.451-.067 1.385-.566 1.58-1.113.195-.547.195-1.016.137-1.113-.058-.098-.214-.156-.448-.273z" />
                  </svg>
                  <span>Order on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#08120A]" />
                </a>

                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 gold-outline-btn font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all active:scale-95"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                </a>
              </div>

              {/* Horizontal Micro-Proof Strip */}
              <div className="w-full pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A1B0A4] font-sans">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Registered SIDCO Lassipora</span>
                </span>
                <span className="text-gray-700 hidden sm:inline">•</span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Regional Singhara & Millets</span>
                </span>
                <span className="text-gray-700 hidden sm:inline">•</span>
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#F59E0B]" />
                  <span>Distributor: Haleeb&apos;s Glaxy</span>
                </span>
              </div>

            </div>

            {/* Right Column: Dark Luxury Product Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Floating Calligraphy Accent */}
                <div className="text-right mb-2 pr-4">
                  <span className="font-cursive text-2xl sm:text-3xl text-amber-300 drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)]">
                    Healthy Choice... Happier You!
                  </span>
                </div>

                {/* Hero Dish Visual Frame with Glowing Golden Border */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/30 bg-[#0A1A0E] group">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/dark-hero-dish.jpg"
                      alt="FreshBic Packaging & Artisanal Cookies on Rustic Wood"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071109] via-transparent to-transparent opacity-80" />

                    {/* Location Badge (Top Right) */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-lg">
                      <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Pulwama, J&K</span>
                    </div>

                    {/* Floating Frosted Pill Badge (Bottom Right of Platter) */}
                    <div className="absolute bottom-5 right-5 left-5 sm:left-auto bg-black/75 backdrop-blur-md px-4 py-2 rounded-2xl border border-amber-500/40 shadow-xl flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                          <Leaf className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-white">100% Maida-Free</div>
                          <div className="text-[10px] text-gray-300">Conscious bakery staples</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* =========================================================================
              FOUR PHILOSOPHY CARDS (Dark Glassmorphic Row)
             ========================================================================= */}
          <div className="mt-14 pt-8 border-t border-emerald-950/70">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              
              {/* Card 1 */}
              <div className="glass-card-dark rounded-2xl p-4 sm:p-5 hover:border-[#F59E0B] transition-all hover:-translate-y-1 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-1">
                  100% Maida-Free
                </h4>
                <p className="text-xs text-[#A1B0A4] leading-relaxed">
                  Formulated exclusively with water chestnut, millets, and rolled oats.
                </p>
              </div>

              {/* Card 2 */}
              <div className="glass-card-dark rounded-2xl p-4 sm:p-5 hover:border-[#F59E0B] transition-all hover:-translate-y-1 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-1">
                  Zero Refined Sugar
                </h4>
                <p className="text-xs text-[#A1B0A4] leading-relaxed">
                  Naturally sweetened with pure date puree and non-glycemic alternatives.
                </p>
              </div>

              {/* Card 3 */}
              <div className="glass-card-dark rounded-2xl p-4 sm:p-5 hover:border-[#F59E0B] transition-all hover:-translate-y-1 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-1">
                  Zero Hydrogenated Fats
                </h4>
                <p className="text-xs text-[#A1B0A4] leading-relaxed">
                  Strict avoidance of industrial trans-fats and chemical shorteners.
                </p>
              </div>

              {/* Card 4 */}
              <div className="glass-card-dark rounded-2xl p-4 sm:p-5 hover:border-[#F59E0B] transition-all hover:-translate-y-1 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-1">
                  Full Transparency
                </h4>
                <p className="text-xs text-[#A1B0A4] leading-relaxed">
                  Clear ingredient disclosures and verified batch nutritional profiles.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          "OUR MISSION / A HEALTHIER TOMORROW TOGETHER" (Matching reference layout)
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#050D06] border-b border-emerald-950/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Mission Narrative & Stats */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
                  Our Mission
                </span>
                <span className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                A Healthier <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] italic font-serif">
                  Tomorrow Together
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#A1B0A4] leading-relaxed mb-8 max-w-xl">
                Join thousands who choose KFGFoods for better nutrition, mindful indulgence, and natural goodness. Crafted in the pristine valleys of Kashmir, bridging ancient wisdom with food science.
              </p>

              {/* Three Metric Pillars inside a Dark Glass Pill Card */}
              <div className="glass-card-dark rounded-2xl p-5 mb-8 border border-amber-500/20 max-w-lg">
                <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
                  <div className="px-2">
                    <div className="flex justify-center text-[#F59E0B] mb-1">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="font-mono text-2xl sm:text-3xl font-black text-white">
                      10K+
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      Happy Customers
                    </div>
                  </div>

                  <div className="px-2">
                    <div className="flex justify-center text-[#F59E0B] mb-1">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div className="font-mono text-2xl sm:text-3xl font-black text-white">
                      4.9/5
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      Customer Rating
                    </div>
                  </div>

                  <div className="px-2">
                    <div className="flex justify-center text-emerald-400 mb-1">
                      <Leaf className="w-5 h-5 fill-current" />
                    </div>
                    <div className="font-mono text-2xl sm:text-3xl font-black text-white">
                      100%
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      Natural Goodness
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission CTA Button */}
              <a
                href="#about"
                className="inline-flex items-center gap-2.5 gold-gradient-btn text-[#08120A] text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg active:scale-95 transition-all"
              >
                <span>Learn More About Our Mission</span>
                <ArrowRight className="w-4 h-4 text-[#08120A]" />
              </a>
            </div>

            {/* Right: Scenic Kashmir Lake Story Card with Video Modal */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/30 group">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/dark-story-scene.jpg"
                    alt="Scenic Kashmir Alpine Valley and Lake"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Cursive Tagline */}
                  <div className="absolute top-4 left-6">
                    <span className="font-cursive text-2xl sm:text-3xl text-amber-300 drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
                      Pure Goodness from Kashmir
                    </span>
                  </div>

                  {/* Play Action Badge */}
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/70 hover:bg-black/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-amber-400/40 shadow-xl cursor-pointer group/btn transition-all"
                    aria-label="Watch Our Journey"
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-black flex items-center justify-center shadow-md group-hover/btn:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">Our Story</div>
                      <div className="text-[10px] text-gray-300">Watch Our Journey</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* STORY / VIDEO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0B1E10] text-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-amber-500/30 shadow-2xl relative">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono uppercase text-[#F59E0B] font-bold">
              KFG Foods Documentary
            </span>
            <h3 className="font-serif text-2xl font-bold mt-1 mb-4 text-white">
              The KFGFoods Journey: From Lassipora to Kashmir&apos;s Homes
            </h3>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mb-4 border border-white/10 shadow-2xl">
              <video
                src="/chef-craftsmanship.mp4"
                poster="/chef-poster.jpg"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>FSSAI Lic: 11023470000115</span>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F59E0B] hover:underline font-bold"
              >
                Inquire via WhatsApp Desk →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
