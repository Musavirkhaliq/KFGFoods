"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Wheat,
  Sparkles,
  ShieldAlert,
  SearchCheck,
  ChevronDown,
  Info,
  BookOpen,
} from "lucide-react";
import { EDUCATIONAL_CONCEPTS } from "@/data/healthChallenge";

interface Pillar {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  icon: typeof Wheat;
  image: string;
  summary: string;
  keyAspects: string[];
  scientificRationale: string;
}

export default function ScienceSection() {
  const [activeMobilePillar, setActiveMobilePillar] = useState<string>("smart-flours");
  const [activeConceptIndex, setActiveConceptIndex] = useState<number | null>(0);

  const pillars: Pillar[] = [
    {
      id: "smart-flours",
      name: "SmartFlours",
      tagline: "Indigenous Wetland & Millet Grains",
      badge: "100% Maida-Free",
      icon: Wheat,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop",
      summary:
        "Replacing ultra-refined wheat flour with regional water chestnut (Singhara), whole rolled oats, and ancient millets (foxtail, finger, pearl).",
      keyAspects: [
        "Naturally higher dietary fibre density",
        "Abundant resistant starch structure",
        "Indigenous Singhara harvested from Kashmiri wetlands",
        "Preserved grain germ and micronutrient matrix",
      ],
      scientificRationale:
        "Whole seed flours slow amylase breakdown in the upper GI tract, helping moderate postprandial glucose surges compared to refined starches.",
    },
    {
      id: "smart-sweet",
      name: "SmartSweet",
      tagline: "Natural Fruit & Non-Glycemic Matrix",
      badge: "Zero Refined Sugar",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop",
      summary:
        "A customized proprietary sugar-replacement matrix combining whole Arabian date pastes, erythritol, and natural botanical extracts.",
      keyAspects: [
        "Completely free of refined white cane sugar",
        "Formula tailored product-by-product",
        "Rich in natural potassium, iron, and trace minerals from dates",
        "Gentle taste profile without metallic artificial aftertaste",
      ],
      scientificRationale:
        "Alternative functional sweetening ingredients avoid the steep osmotic and glycemic stress caused by traditional sucrose-dense confectionery.",
    },
    {
      id: "smart-fats",
      name: "SmartFats",
      tagline: "Cold-Pressed Quality & Zero Trans-Fats",
      badge: "Clean Lipid Profile",
      icon: ShieldAlert,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
      summary:
        "A strict formulation philosophy committed to excluding partially hydrogenated vegetable shortening (Vanaspati) and unstable industrial fats.",
      keyAspects: [
        "Strictly 0g industrial trans-fatty acids",
        "Cold-pressed plant oils and natural seed fats",
        "Inclusion of Kashmiri walnut fats rich in alpha-linolenic acid",
        "Careful thermal management during slow baking",
      ],
      scientificRationale:
        "Removing industrial trans-fats supports arterial endothelial health, while whole-food seed lipids provide essential polyunsaturated fatty acids.",
    },
    {
      id: "smart-zero",
      name: "SmartZero",
      tagline: "Uncompromising Nutritional Transparency",
      badge: "Verified Disclosures",
      icon: SearchCheck,
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop",
      summary:
        "Full ingredient disclosures, clear carbohydrate exchange details, product-specific laboratory testing, and FSSAI regulatory compliance.",
      keyAspects: [
        "100% full ingredient list on every pack",
        "No hidden starches or undisclosed bulking agents",
        "Transparent nutritional information panels",
        "Compliant with FSSAI manufacturing protocols",
      ],
      scientificRationale:
        "True metabolic empowerment requires total clarity, allowing individuals and dietary consultants to make verified dietary decisions.",
    },
  ];

  return (
    <section id="science" className="py-16 lg:py-24 bg-[#08120A]/85 backdrop-blur-sm border-b border-emerald-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F59E0B] mb-3 font-semibold bg-[#0D2213] px-3.5 py-1 rounded-full border border-emerald-500/30">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Preventive Food-Tech Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Traditional Ingredients. Thoughtful Food Innovation.
          </h2>
          <p className="text-sm sm:text-base text-[#A1B0A4]">
            Four pillars behind the FreshBic formulation philosophy — engineered to retain the deep comfort of bakery treats while respecting metabolic biology.
          </p>
        </div>

        {/* Desktop 4-Column Layout */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="glass-card-dark rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all hover:shadow-2xl flex flex-col group"
              >
                {/* Image preview with badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <Image
                    src={pillar.image}
                    alt={pillar.name}
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E10] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-emerald-300 border border-emerald-500/30">
                    {pillar.badge}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-[#F59E0B] transition-colors">
                      {pillar.name}
                    </h3>
                    <div className="text-xs font-mono text-[#F59E0B] font-semibold mb-3">
                      {pillar.tagline}
                    </div>

                    <p className="text-xs text-[#A1B0A4] leading-relaxed mb-4">
                      {pillar.summary}
                    </p>

                    <div className="space-y-2 mb-4 pt-3 border-t border-white/10">
                      {pillar.keyAspects.map((aspect, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 flex-shrink-0" />
                          <span>{aspect}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 bg-black/40 -mx-6 -mb-6 p-4 text-[11px] text-gray-300 font-sans italic leading-tight">
                    <strong className="text-[#F59E0B] not-italic block font-mono text-[10px] uppercase tracking-wider mb-1">
                      Scientific Rationale:
                    </strong>
                    {pillar.scientificRationale}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden space-y-3 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isOpen = activeMobilePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className="glass-card-dark rounded-2xl border border-white/10 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveMobilePillar(isOpen ? "" : pillar.id)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-base text-white">
                          {pillar.name}
                        </span>
                        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/40 px-2 py-0.5 rounded-full font-semibold">
                          {pillar.badge}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 block mt-0.5">
                        {pillar.tagline}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#F59E0B]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 border-t border-white/10 animate-in fade-in duration-200">
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3.5">
                      <Image
                        src={pillar.image}
                        alt={pillar.name}
                        fill
                        className="object-cover opacity-80"
                      />
                    </div>

                    <p className="text-xs text-gray-200 leading-relaxed mb-3">
                      {pillar.summary}
                    </p>

                    <div className="space-y-1.5 mb-3 bg-black/40 p-3 rounded-xl border border-white/10">
                      {pillar.keyAspects.map((aspect, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                          <span>{aspect}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-gray-300 italic bg-black/60 p-2.5 rounded-lg border border-white/10">
                      <strong className="text-[#F59E0B] not-italic font-mono text-[11px] block uppercase">
                        Scientific Rationale:
                      </strong>
                      {pillar.scientificRationale}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SECONDARY SUBSECTION: FOOD SCIENCE, MADE UNDERSTANDABLE */}
        <div className="glass-card-dark rounded-3xl p-6 sm:p-10 border border-amber-500/25 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
              Consumer Health Literacy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
              Food Science, Made Understandable
            </h3>
            <p className="text-xs sm:text-sm text-[#A1B0A4]">
              Demystifying the biological mechanics behind carbohydrates, satiety, and gut nourishment in plain everyday language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {EDUCATIONAL_CONCEPTS.map((concept, index) => {
              const isSelected = activeConceptIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveConceptIndex(isSelected ? null : index)}
                  className={`cursor-pointer rounded-2xl p-4 transition-all border ${
                    isSelected
                      ? "bg-gradient-to-b from-[#11311A] to-[#0A2211] text-white border-amber-500/60 shadow-[0_0_20px_rgba(217,119,6,0.25)]"
                      : "bg-black/40 hover:bg-black/60 text-gray-200 border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-[#F59E0B]" : "text-gray-400"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded ${
                        isSelected ? "bg-amber-500/20 text-[#F59E0B]" : "bg-white/5 text-gray-400"
                      }`}
                    >
                      Concept
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-sm sm:text-base leading-snug mb-1 text-white">
                    {concept.term}
                  </h4>

                  <p
                    className={`text-xs font-sans mb-3 line-clamp-2 ${
                      isSelected ? "text-emerald-200" : "text-gray-400"
                    }`}
                  >
                    {concept.simpleDefinition}
                  </p>

                  <div
                    className={`text-[11px] pt-3 border-t leading-relaxed ${
                      isSelected
                        ? "border-amber-500/30 text-gray-200"
                        : "border-white/10 text-gray-400"
                    }`}
                  >
                    {concept.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Educational Disclaimer */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2.5 text-xs text-gray-400">
            <Info className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
            <span>
              <strong className="text-gray-300">Scientific Disclaimer:</strong> FreshBic products are functional food items designed to support balanced eating. They are not pharmaceuticals, medical foods, or therapies, and are not intended to diagnose, treat, prevent, or cure diabetes or any cardiovascular disease.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
