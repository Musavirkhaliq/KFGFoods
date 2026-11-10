"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  ShieldAlert,
  Send,
  Heart,
  Package,
} from "lucide-react";
import { getAssessmentWhatsAppUrl } from "@/lib/whatsapp";

interface RecommendationResult {
  title: string;
  badge: string;
  tagline: string;
  rationale: string;
  highlightedItems: string[];
  image: string;
  planKey: string;
}

export default function HealthAssessment() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    bakeryFrequency: "",
    priority: "",
    preference: "",
  });

  const step1Options = [
    {
      label: "Daily / Frequently",
      sub: "We enjoy tea with traditional bakery (tsot, kulcha, biscuits) once or twice every day.",
    },
    {
      label: "Occasionally",
      sub: "2 to 3 times a week, especially during weekend mornings or family tea gatherings.",
    },
    {
      label: "Rarely / Never",
      sub: "We have largely cut down traditional bakery due to health or sugar concerns.",
    },
  ];

  const step2Options = [
    {
      label: "Making more informed choices around blood sugar",
      sub: "Looking for low-GI flours, resistant starch, and zero added cane sugar alternatives.",
    },
    {
      label: "Supporting long-term heart and lifestyle wellness",
      sub: "Prioritizing zero trans-fats, soluble oat beta-glucans, and clean lipid sources.",
    },
    {
      label: "Healthier snacks for children",
      sub: "Wholesome tiffin and evening bites without artificial chemicals or sugar crashes.",
    },
    {
      label: "Weight-conscious and fibre-rich food choices",
      sub: "High-satiety functional millets and digestive-friendly seed formulations.",
    },
  ];

  const step3Options = [
    {
      label: "Yes, show me monthly subscription options",
      sub: "Regular door-delivered monthly care box for continuous household routine.",
    },
    {
      label: "I would prefer to try a starter sample pack",
      sub: "A curated introductory variety pack to experience taste and texture first.",
    },
  ];

  const getRecommendation = (): RecommendationResult => {
    if (answers.priority.includes("blood sugar")) {
      return {
        title: "KFGFoods Diabetic Care Monthly Box",
        badge: "Metabolic Awareness Match",
        tagline: "Designed specifically for mindful carbohydrate & low-GI routine.",
        rationale:
          "Because your household prioritizes blood sugar mindfulness and conscious daily staples, this selection replaces conventional maida biscuits with water chestnut cookies, oat beta-glucan biscuits, and pure date laddoos formulated without refined cane sugar.",
        highlightedItems: [
          "Water Chestnut (Singhara) Cookies",
          "Heart-Healthy Rolled Oat Biscuits",
          "Pure Medjool Date Laddoos",
          "High-Fibre Low-GI Bakery Staples",
        ],
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
        planKey: "Diabetic Care Monthly Box",
      };
    }

    if (answers.priority.includes("children") || answers.priority.includes("heart")) {
      return {
        title: "Family Smart Bakery Box",
        badge: "Household Favorite Match",
        tagline: "Wholesome tea-time & snack alternative for all generations.",
        rationale:
          "Because you are seeking nourishing, kid-approved snacks and cleaner fats for the whole family, this curation features multi-grain millet cookies, walnut-rich specialty bakes, and roasted channa & date spheres.",
        highlightedItems: [
          "Multi-Grain Millet Cookies",
          "Kashmiri Walnut Specialty Cookies",
          "Roasted Channa & Date Energy Spheres",
          "Children's Healthy Snack Bites",
        ],
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
        planKey: "Family Smart Bakery Box",
      };
    }

    return {
      title: "Millet & Nutri Starter Pack",
      badge: "High-Fibre Discovery Match",
      tagline: "Complete pantry kit with ready premixes & artisanal cookies.",
      rationale:
        "Because you are eager to explore diverse ancient millets and high-satiety functional staples, this pack combines 15-minute millet khichdi, millet upma premix, dry fruit balls, and crisp Singhara cookies.",
      highlightedItems: [
        "Millet Khichdi 15-Min Premix",
        "Millet Upma Breakfast Premix",
        "Singhara Crisp Cookies",
        "Dry Fruit & Kashmiri Walnut Balls",
      ],
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
      planKey: "Millet & Nutri Starter Pack",
    };
  };

  const handleRestart = () => {
    setAnswers({
      bakeryFrequency: "",
      priority: "",
      preference: "",
    });
    setCurrentStep(1);
  };

  const recommendation = currentStep === 4 ? getRecommendation() : null;

  return (
    <section id="assessment" className="py-16 lg:py-24 bg-[#08120A]/85 backdrop-blur-sm border-b border-emerald-950/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F59E0B] mb-3 font-semibold bg-[#0D2213] px-3.5 py-1 rounded-full border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Food Preference Assessment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            Find Your KFGFoods Food Match
          </h2>
          <p className="text-sm sm:text-base text-[#A1B0A4]">
            Answer three quick questions (60 seconds) to discover a curated food selection tailored to your household’s dietary preferences and routine.
          </p>
        </div>

        {/* Assessment Card Frame */}
        <div className="glass-card-dark rounded-3xl p-6 sm:p-10 border border-amber-500/25 shadow-2xl relative overflow-hidden">
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-mono mb-2 text-[#A1B0A4]">
              <span className="font-bold text-[#F59E0B]">
                {currentStep <= 3 ? `Step 0${currentStep} of 03` : "Recommendation Ready"}
              </span>
              <span>
                {currentStep === 1
                  ? "Dietary Frequency"
                  : currentStep === 2
                  ? "Household Priority"
                  : currentStep === 3
                  ? "Format Preference"
                  : "Completed"}
              </span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full transition-all duration-300 shadow-[0_0_10px_#F59E0B]"
                style={{
                  width:
                    currentStep === 1
                      ? "33%"
                      : currentStep === 2
                      ? "66%"
                      : "100%",
                }}
              />
            </div>
          </div>

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-200">
              <span className="text-xs font-mono uppercase text-[#F59E0B] font-bold block mb-1">
                Question 01
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                How often does your household consume traditional bakery items such as tsot, kulcha, biscuits, and pastries made with refined flour and sugar?
              </h3>
              <p className="text-xs sm:text-sm text-[#A1B0A4] mb-6">
                This helps us estimate your current exposure to high-GI refined bakery flours.
              </p>

              <div className="space-y-3 mb-8">
                {step1Options.map((opt, i) => {
                  const isSelected = answers.bakeryFrequency === opt.label;
                  return (
                    <div
                      key={i}
                      onClick={() => setAnswers({ ...answers, bakeryFrequency: opt.label })}
                      className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between ${
                        isSelected
                          ? "bg-[#0E2616] border-amber-500/60 shadow-[0_0_15px_rgba(217,119,6,0.2)]"
                          : "bg-black/30 hover:bg-black/50 border-white/10"
                      }`}
                    >
                      <div className="pr-4">
                        <div className="font-serif font-bold text-base text-white">
                          {opt.label}
                        </div>
                        <div className="text-xs text-[#A1B0A4] mt-1">{opt.sub}</div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected
                            ? "border-amber-400 bg-amber-400 text-black"
                            : "border-gray-600 bg-transparent"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end">
                <button
                  disabled={!answers.bakeryFrequency}
                  onClick={() => setCurrentStep(2)}
                  className={`inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all ${
                    answers.bakeryFrequency
                      ? "gold-gradient-btn text-black cursor-pointer shadow-lg"
                      : "bg-white/10 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-200">
              <span className="text-xs font-mono uppercase text-[#F59E0B] font-bold block mb-1">
                Question 02
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                What is your primary food and wellness priority?
              </h3>
              <p className="text-xs sm:text-sm text-[#A1B0A4] mb-6">
                Choose the focus area most meaningful to your family&apos;s nutritional goals.
              </p>

              <div className="space-y-3 mb-8">
                {step2Options.map((opt, i) => {
                  const isSelected = answers.priority === opt.label;
                  return (
                    <div
                      key={i}
                      onClick={() => setAnswers({ ...answers, priority: opt.label })}
                      className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between ${
                        isSelected
                          ? "bg-[#0E2616] border-amber-500/60 shadow-[0_0_15px_rgba(217,119,6,0.2)]"
                          : "bg-black/30 hover:bg-black/50 border-white/10"
                      }`}
                    >
                      <div className="pr-4">
                        <div className="font-serif font-bold text-base text-white">
                          {opt.label}
                        </div>
                        <div className="text-xs text-[#A1B0A4] mt-1">{opt.sub}</div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected
                            ? "border-amber-400 bg-amber-400 text-black"
                            : "border-gray-600 bg-transparent"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  disabled={!answers.priority}
                  onClick={() => setCurrentStep(3)}
                  className={`inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all ${
                    answers.priority
                      ? "gold-gradient-btn text-black cursor-pointer shadow-lg"
                      : "bg-white/10 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-200">
              <span className="text-xs font-mono uppercase text-[#F59E0B] font-bold block mb-1">
                Question 03
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                Would you prefer to explore maida-free, low-GI baked goods made using ingredients such as regional Singhara and millets?
              </h3>
              <p className="text-xs sm:text-sm text-[#A1B0A4] mb-6">
                Tell us how you would like to initiate your KFGFoods experience.
              </p>

              <div className="space-y-3 mb-8">
                {step3Options.map((opt, i) => {
                  const isSelected = answers.preference === opt.label;
                  return (
                    <div
                      key={i}
                      onClick={() => setAnswers({ ...answers, preference: opt.label })}
                      className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between ${
                        isSelected
                          ? "bg-[#0E2616] border-amber-500/60 shadow-[0_0_15px_rgba(217,119,6,0.2)]"
                          : "bg-black/30 hover:bg-black/50 border-white/10"
                      }`}
                    >
                      <div className="pr-4">
                        <div className="font-serif font-bold text-base text-white">
                          {opt.label}
                        </div>
                        <div className="text-xs text-[#A1B0A4] mt-1">{opt.sub}</div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected
                            ? "border-amber-400 bg-amber-400 text-black"
                            : "border-gray-600 bg-transparent"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  disabled={!answers.preference}
                  onClick={() => setCurrentStep(4)}
                  className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all ${
                    answers.preference
                      ? "gold-gradient-btn text-black cursor-pointer shadow-[0_0_20px_#F59E0B]"
                      : "bg-white/10 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Generate My Food Match</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: RESULTS SCREEN */}
          {currentStep === 4 && recommendation && (
            <div className="animate-in fade-in zoom-in-95 duration-300">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>{recommendation.badge}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                {recommendation.title}
              </h3>

              <p className="text-sm font-medium text-[#F59E0B] mb-6">
                {recommendation.tagline}
              </p>

              {/* Split recommendation layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8 bg-black/40 p-5 sm:p-6 rounded-2xl border border-white/10">
                <div className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow">
                  <Image
                    src={recommendation.image}
                    alt={recommendation.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="md:col-span-7 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    {recommendation.rationale}
                  </p>

                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#F59E0B] font-semibold block mb-2">
                      Suggested Assortment Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {recommendation.highlightedItems.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs font-medium text-emerald-300 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA and Restart Options */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-6">
                <a
                  href={getAssessmentWhatsAppUrl({
                    bakeryFrequency: answers.bakeryFrequency,
                    priority: answers.priority,
                    preference: answers.preference,
                    recommendedBox: recommendation.title,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 gold-gradient-btn text-black font-bold text-sm px-7 py-4 rounded-full shadow-xl transition-all"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Get My Recommended Box on WhatsApp</span>
                </a>

                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Assessment</span>
                </button>
              </div>

              {/* Mandatory Medical Disclaimer */}
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-left flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-200/90 leading-relaxed">
                  <strong>Assessment Guidance Disclaimer:</strong> This tool is for general food preference guidance only. It does not diagnose medical conditions, evaluate biometric parameters, or provide individualized medical nutrition therapy. Individuals managing clinical diabetes, cardiovascular diseases, or metabolic disorders should consult their primary healthcare physician or certified clinical dietitian.
                </p>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
