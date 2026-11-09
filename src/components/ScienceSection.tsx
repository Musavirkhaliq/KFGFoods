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
        "Indigenous Singhara harvested from Kashmiri water bodies",
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
    <section id="science" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8EEE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D97706] mb-3 font-semibold">
            <BookOpen className="w-4 h-4 text-[#1B5E20]" />
            <span>Preventive Food-Tech Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B5E20] leading-tight mb-4">
            Traditional Ingredients. Thoughtful Food Innovation.
          </h2>
          <p className="text-base sm:text-lg text-[#565e55]">
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
                className="bg-white rounded-3xl overflow-hidden border border-[#E8EEE6] hover:border-[#2E7D32]/50 transition-all hover:shadow-xl flex flex-col group"
              >
                {/* Image preview with badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={pillar.image}
                    alt={pillar.name}
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#1B5E20] border border-white">
                    {pillar.badge}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E8EEE6] text-[#1B5E20] flex items-center justify-center mb-4 group-hover:bg-[#1B5E20] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#242923] mb-1">
                      {pillar.name}
                    </h3>
                    <div className="text-xs font-mono text-[#D97706] font-semibold mb-3">
                      {pillar.tagline}
                    </div>

                    <p className="text-xs text-[#565e55] leading-relaxed mb-4">
                      {pillar.summary}
                    </p>

                    <div className="space-y-2 mb-4 pt-3 border-t border-[#E8EEE6]">
                      {pillar.keyAspects.map((aspect, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-[#242923]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] mt-1 flex-shrink-0" />
                          <span>{aspect}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E8EEE6] bg-[#FAF8F5] -mx-6 -mb-6 p-4 text-[11px] text-[#565e55] font-sans italic leading-tight">
                    <strong className="text-[#1B5E20] not-italic block font-mono text-[10px] uppercase tracking-wider mb-1">
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
                className="bg-white rounded-2xl border border-[#E8EEE6] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveMobilePillar(isOpen ? "" : pillar.id)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#E8EEE6] text-[#1B5E20] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-base text-[#242923]">
                          {pillar.name}
                        </span>
                        <span className="text-[10px] font-mono bg-[#E8EEE6] text-[#1B5E20] px-2 py-0.5 rounded-full font-semibold">
                          {pillar.badge}
                        </span>
                      </div>
                      <span className="text-xs text-[#565e55] block mt-0.5">
                        {pillar.tagline}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#565e55] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#1B5E20]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 border-t border-[#E8EEE6] animate-in fade-in duration-200">
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3.5">
                      <Image
                        src={pillar.image}
                        alt={pillar.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <p className="text-xs text-[#242923] leading-relaxed mb-3">
                      {pillar.summary}
                    </p>

                    <div className="space-y-1.5 mb-3 bg-[#FAF8F5] p-3 rounded-xl border border-[#E8EEE6]">
                      {pillar.keyAspects.map((aspect, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#565e55]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] mt-1.5 flex-shrink-0" />
                          <span>{aspect}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-[#565e55] italic bg-white p-2.5 rounded-lg border border-[#E8EEE6]">
                      <strong className="text-[#1B5E20] not-italic font-mono text-[11px] block uppercase">
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
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8EEE6] shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1B5E20] font-bold">
              Consumer Health Literacy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242923] mt-1 mb-2">
              Food Science, Made Understandable
            </h3>
            <p className="text-xs sm:text-sm text-[#565e55]">
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
                      ? "bg-[#1B5E20] text-white border-[#1B5E20] shadow-md"
                      : "bg-[#FAF8F5] hover:bg-[#E8EEE6] text-[#242923] border-[#E8EEE6]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-emerald-200" : "text-[#D97706]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded ${
                        isSelected ? "bg-white/20 text-white" : "bg-white text-[#565e55]"
                      }`}
                    >
                      Concept
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-sm sm:text-base leading-snug mb-1">
                    {concept.term}
                  </h4>

                  <p
                    className={`text-xs font-sans mb-3 line-clamp-2 ${
                      isSelected ? "text-emerald-100" : "text-[#565e55]"
                    }`}
                  >
                    {concept.simpleDefinition}
                  </p>

                  <div
                    className={`text-[11px] pt-3 border-t leading-relaxed ${
                      isSelected
                        ? "border-white/20 text-white/90"
                        : "border-[#E8EEE6] text-[#242923]"
                    }`}
                  >
                    {concept.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Educational Disclaimer */}
          <div className="mt-8 pt-4 border-t border-[#E8EEE6] flex items-center gap-2.5 text-xs text-[#565e55]">
            <Info className="w-4 h-4 text-[#D97706] flex-shrink-0" />
            <span>
              <strong>Scientific Disclaimer:</strong> FreshBic products are functional food items designed to support balanced eating. They are not pharmaceuticals, medical foods, or therapies, and are not intended to diagnose, treat, prevent, or cure diabetes or any cardiovascular disease.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
