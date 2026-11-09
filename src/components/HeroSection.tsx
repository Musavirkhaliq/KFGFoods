"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Leaf, HeartHandshake, Award } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-[#E8EEE6]">
      {/* Background architectural glow accents */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#E8EEE6]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 rounded-full bg-[#D97706]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Brand Logo & Regulatory Eyebrow Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1]/60 shadow-xs">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#1B5E20]/20 flex-shrink-0">
                  <Image
                    src="/logo.jpeg"
                    alt="KFGFoods Official Brand Emblem"
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
                <span className="font-serif font-black text-sm text-[#1B5E20] tracking-tight">
                  KFGFoods
                </span>
                <span className="w-1 h-1 rounded-full bg-emerald-600"></span>
                <span className="text-[11px] font-serif italic text-[#D97706]">
                  Wholesome Food, Happier You
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8EEE6] border border-[#CBD5E1]/50 text-[#1B5E20] text-xs font-mono font-medium tracking-tight">
                <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse"></span>
                <span>FSSAI LIC: 11023470000115</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1B5E20] leading-[1.15] mb-5">
              Sweetness for Life <br className="hidden sm:inline" />
              <span className="text-[#D97706] italic font-serif">Without Sugar</span>
            </h1>

            {/* Emotional Tagline */}
            <div className="border-l-2 border-[#D97706] pl-4 mb-5">
              <p className="text-base sm:text-lg font-serif italic text-[#242923] font-medium leading-relaxed">
                “When you indulge, it’s not your sugar that spikes. It’s your joy.”
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#565e55] leading-relaxed mb-8 max-w-2xl font-sans">
              Welcome to <strong className="text-[#1B5E20] font-semibold">KFGFoods</strong>. Through our flagship brand <strong className="text-[#1B5E20] font-semibold">FreshBic</strong>, we bring together Kashmiri water chestnut flours, ancient millets, and thoughtful food innovation to create a conscious bakery and preventive nutrition experience.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1B5E20] hover:bg-[#144718] text-white font-medium text-base px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
              >
                <svg
                  className="w-5 h-5 fill-current text-[#4ADE80]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.58 1.942.923 3.149.923 3.182 0 5.767-2.587 5.767-5.766 0-3.18-2.586-5.765-5.767-5.765zm0 10.354c-1.026 0-1.936-.312-2.731-.861l-.196-.134-1.393.366.372-1.358-.128-.204c-.615-.978-.941-1.897-.94-2.797 0-2.518 2.048-4.566 4.568-4.566 2.519 0 4.568 2.048 4.568 4.566 0 2.519-2.049 4.567-4.568 4.567zm4.254-2.812c-.234-.117-1.385-.683-1.6-.761-.215-.078-.372-.117-.528.117-.156.234-.607.761-.744.918-.137.156-.274.176-.508.059-.234-.117-.988-.364-1.882-1.161-.696-.621-1.166-1.388-1.303-1.622-.137-.234-.015-.36.103-.477.106-.105.234-.274.351-.411.117-.137.156-.234.234-.391.078-.156.039-.293-.02-.411-.059-.117-.528-1.272-.724-1.742-.191-.458-.385-.396-.528-.403l-.45-.008c-.156 0-.411.059-.626.293-.215.234-.822.803-.822 1.958s.841 2.271.958 2.428c.117.156 1.656 2.528 4.012 3.545.56.242.998.386 1.34.495.563.179 1.075.154 1.48.093.451-.067 1.385-.566 1.58-1.113.195-.547.195-1.016.137-1.113-.058-.098-.214-.156-.448-.273z" />
                </svg>
                <span>Order on WhatsApp</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-1">Direct</span>
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#E8EEE6] text-[#242923] border border-[#CBD5E1] font-medium text-base px-6 py-3.5 rounded-full transition-all active:scale-98"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 text-[#1B5E20]" />
              </a>
            </div>

            {/* Micro proof points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#565e55] font-sans">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#2E7D32]" />
                Registered SIDCO Lassipora Unit
              </span>
              <span className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-[#2E7D32]" />
                Regional Singhara & Millets
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#D97706]" />
                Distributor: Haleeb&apos;s Glaxy
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format&fit=crop"
                    alt="KFGFoods FreshBic Artisanal Water Chestnut and Millet Baked Cookies"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Subtle Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-[#1B5E20] shadow-sm flex items-center gap-2 border border-white">
                    <div className="relative w-5 h-5 rounded-full overflow-hidden">
                      <Image
                        src="/logo.jpeg"
                        alt="KFGFoods Icon"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>Singhara & Millet Formulations</span>
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider font-mono text-emerald-200">
                      Crafted in Kashmir by KFGFoods
                    </p>
                    <h3 className="font-serif text-lg font-bold text-white drop-shadow">
                      Water Chestnut (Singhara) Artisanal Crisp
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial/Metric Pill with Logo Emblem */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-[#E2E8E0] max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#1B5E20]/20 flex-shrink-0">
                    <Image
                      src="/logo.jpeg"
                      alt="KFGFoods Badge"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#242923]">100% Maida-Free</div>
                    <div className="text-[11px] text-[#565e55]">KFGFoods Conscious Bakery</div>
                  </div>
                </div>
              </div>

              {/* Floating Regional Origin Pill */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl py-2 px-3.5 shadow-lg border border-[#E2E8E0] hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1B5E20]"></span>
                <span className="text-xs font-mono font-medium text-[#242923]">Pulwama, J&K</span>
              </div>

            </div>
          </div>

        </div>

        {/* SECTION 1 PRODUCT PHILOSOPHY STRIP */}
        <div className="mt-14 pt-8 border-t border-[#E8EEE6]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="bg-white p-4 rounded-2xl border border-[#E8EEE6] shadow-xs flex flex-col justify-between">
              <div className="flex items-center gap-2 text-[#1B5E20] font-bold text-sm sm:text-base font-serif mb-1">
                <span className="w-6 h-6 rounded-full bg-[#E8EEE6] flex items-center justify-center text-xs font-mono">1</span>
                <span>100% Maida-Free</span>
              </div>
              <p className="text-xs text-[#565e55] leading-relaxed">
                Formulated exclusively with water chestnut, millets, and rolled oats.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#E8EEE6] shadow-xs flex flex-col justify-between">
              <div className="flex items-center gap-2 text-[#1B5E20] font-bold text-sm sm:text-base font-serif mb-1">
                <span className="w-6 h-6 rounded-full bg-[#E8EEE6] flex items-center justify-center text-xs font-mono">2</span>
                <span>Zero Refined Sugar</span>
              </div>
              <p className="text-xs text-[#565e55] leading-relaxed">
                Naturally sweetened with pure date purees and non-glycemic alternatives.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#E8EEE6] shadow-xs flex flex-col justify-between">
              <div className="flex items-center gap-2 text-[#1B5E20] font-bold text-sm sm:text-base font-serif mb-1">
                <span className="w-6 h-6 rounded-full bg-[#E8EEE6] flex items-center justify-center text-xs font-mono">3</span>
                <span>Zero Hydrogenated Fats</span>
              </div>
              <p className="text-xs text-[#565e55] leading-relaxed">
                Strict avoidance of industrial trans-fats and chemical shorteners.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#E8EEE6] shadow-xs flex flex-col justify-between">
              <div className="flex items-center gap-2 text-[#1B5E20] font-bold text-sm sm:text-base font-serif mb-1">
                <span className="w-6 h-6 rounded-full bg-[#E8EEE6] flex items-center justify-center text-xs font-mono">4</span>
                <span>Full Transparency</span>
              </div>
              <p className="text-xs text-[#565e55] leading-relaxed">
                Clear ingredient disclosures and verified batch nutritional profiles.
              </p>
            </div>

          </div>

          {/* Explicit Regulatory & Formulation Note */}
          <div className="mt-4 text-center">
            <p className="text-[11px] text-[#565e55] font-sans">
              <strong className="text-[#242923]">Formulation Note:</strong> The statements above reflect KFGFoods and FreshBic brand formulation standards and ingredient benchmarks, verified against our recipe profiles, and are not intended as clinical guarantees or medical advice.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
