"use client";

import React from "react";
import Image from "next/image";
import { Mountain, Heart, Users, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#071109] border-b border-emerald-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F59E0B] mb-3 font-semibold bg-[#0D2213] px-3.5 py-1 rounded-full border border-emerald-500/30">
            <Mountain className="w-4 h-4 text-emerald-400" />
            <span>KFGFoods • Founded in Kashmir</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            From Kashmir’s Kitchens to Every Home.
          </h2>
          <p className="text-lg text-emerald-200/90 font-serif italic">
            Good Food. Better Choices. Stronger Partnerships.
          </p>
        </div>

        {/* Split Screen Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Editorial Image with Kashmiri Heritage Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/30 bg-[#0A1A0E]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                  alt="Scenic Kashmir Valley Agricultural Landscape and Water Bodies"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                {/* Kashmir Origin Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 shadow flex items-center gap-2 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Lassipora, Pulwama Unit</span>
                </div>

                {/* Cultural overlay caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-widest font-mono text-[#F59E0B]">
                    Regional Agricultural Stewardship
                  </p>
                  <p className="font-serif text-lg font-bold mt-1 text-white leading-snug">
                    Sourcing water chestnuts (Singhara) from Kashmir’s pristine wetlands and indigenous millet crops.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Brand Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-card-dark rounded-2xl p-4 shadow-2xl border border-amber-500/30 max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-500/40 flex-shrink-0 bg-[#0B1E10]">
                  <Image
                    src="/logo.png"
                    alt="KFGFoods Brand"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-black text-white">KFGFoods</div>
                  <div className="text-[11px] text-[#A1B0A4]">Wholesome Food, Happier You</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Storytelling & Prominent Pull Quote */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans">
              Born from personal experiences with diabetes and metabolic health challenges,{" "}
              <strong className="text-white font-semibold">KFG Foods Private Limited</strong> was founded to address an important challenge: how can people enjoy beloved everyday bakery staples and traditional foods while making more thoughtful dietary choices?
            </p>

            <p className="text-sm sm:text-base text-[#A1B0A4] leading-relaxed">
              Under its flagship brand <strong className="text-[#F59E0B]">FreshBic</strong>, KFG Foods is developing an ecosystem connecting regional farmers, food scientists, home chefs, distribution partners, retailers, and health-conscious households across Jammu & Kashmir and beyond.
            </p>

            {/* Prominent Pull Quote */}
            <div className="relative my-4 glass-card-dark p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-xl">
              <span className="absolute -top-4 left-6 text-5xl text-[#F59E0B] font-serif leading-none select-none">
                “
              </span>
              <blockquote className="font-serif text-xl sm:text-2xl text-white font-semibold italic leading-snug pt-2">
                Food may be optional, but dessert is essential. Life’s too short to skip dessert — especially when it loves you back.
              </blockquote>
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-gray-400 border-t border-white/10 pt-3">
                <span className="text-[#F59E0B] font-bold">— FreshBic Brand Philosophy</span>
                <span>Fayaz Anjum Wani, Founder</span>
              </div>
            </div>

            {/* Three Pillar Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-card-dark border border-white/10 flex flex-col">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Farmers First</span>
                </div>
                <p className="text-[12px] text-[#A1B0A4] leading-normal">
                  Direct sourcing of regional Singharas & millets, supporting local agri-livelihoods.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card-dark border border-white/10 flex flex-col">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Scientifically Backed</span>
                </div>
                <p className="text-[12px] text-[#A1B0A4] leading-normal">
                  Rigorously crafted to reduce rapid glucose spikes and deliver sustained nourishment.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card-dark border border-white/10 flex flex-col">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sister&apos;s Recipes</span>
                </div>
                <p className="text-[12px] text-[#A1B0A4] leading-normal">
                  Preserving soulful family warmth through Soni&apos;s authentic Kashmiri home dining.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
