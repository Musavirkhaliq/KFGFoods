"use client";

import React from "react";
import { AlertCircle, FileText, ArrowDownRight, Activity } from "lucide-react";
import { REGIONAL_HEALTH_STATS } from "@/data/healthChallenge";

export default function HealthChallengeSection() {
  return (
    <section id="health-challenge" className="py-16 lg:py-24 bg-white border-b border-[#E8EEE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DC2626] mb-3 font-semibold bg-red-50 px-3 py-1 rounded-full border border-red-200">
            <Activity className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Public Health & Dietary Context</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B5E20] leading-tight mb-4">
            Why Kashmir Needs a Better Everyday Food Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-[#565e55] leading-relaxed">
            In Kashmiri households, tea-time is sacred. Morning and afternoon cups of Noon Chai and Kehwa are traditionally accompanied by beloved staples like <span className="text-[#242923] font-medium italic">tsot, kulcha, sweet biscuits, and tea-pastries</span>. However, conventional commercial bakery production has become predominantly dependent on ultra-refined flour (Maida), high sucrose additions, and hydrogenated vegetable shortening.
          </p>
        </div>

        {/* Editorial Data Visualization Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {REGIONAL_HEALTH_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E8EEE6] hover:border-[#CBD5E1] transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Metric value with JetBrains Mono tabular styling */}
                <div className="flex items-baseline justify-between mb-3">
                  <span
                    className={`font-mono text-4xl sm:text-5xl font-black tracking-tight ${
                      stat.accent === "red"
                        ? "text-[#DC2626]"
                        : stat.accent === "amber"
                        ? "text-[#D97706]"
                        : "text-[#1B5E20]"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-[#565e55] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-[#E8EEE6]">
                    Cohort Data
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#242923] mb-2 leading-snug">
                  {stat.label}
                </h3>

                <p className="text-xs sm:text-sm text-[#565e55] leading-relaxed">
                  {stat.detail}
                </p>
              </div>

              {/* Source attribution citation */}
              <div className="mt-6 pt-4 border-t border-[#E8EEE6] flex items-start gap-1.5 text-[11px] font-mono text-[#768075]">
                <FileText className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#D97706]" />
                <span className="leading-tight">{stat.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Scientific Disclaimer Box */}
        <div className="bg-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-[#E8EEE6] mb-12 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#565e55] leading-relaxed">
            <strong className="text-[#242923] font-semibold">Methodology & Health Attribution Context:</strong>{" "}
            The epidemiological indicators presented above are drawn from peer-reviewed public health literature, including the ICMR-INDIAB national cohort study. They are provided for general educational awareness regarding regional metabolic health patterns. KFG Foods does not assert that conventional bakery consumption is the sole cause of these chronic metabolic conditions, nor do FreshBic products claim to prevent, diagnose, or cure any clinical disorder.
          </div>
        </div>

        {/* Transition statement to Section 5 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-lg">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D97706] font-bold">
              The Path Forward
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
              “Better food choices begin with better ingredients.”
            </h3>
            <p className="text-sm sm:text-base text-emerald-100 mt-2">
              By replacing ultra-processed carbohydrates with indigenous water chestnut flour, diverse ancient millets, and clean natural sweetness, FreshBic helps families protect their cherished traditions while taking thoughtful care of their metabolic health.
            </p>
          </div>

          <a
            href="#science"
            className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-white text-[#1B5E20] font-semibold text-sm px-6 py-3.5 rounded-full shadow transition-all active:scale-95 whitespace-nowrap self-stretch sm:self-auto justify-center"
          >
            <span>Explore Our Science</span>
            <ArrowDownRight className="w-4 h-4 text-[#1B5E20]" />
          </a>
        </div>

      </div>
    </section>
  );
}
