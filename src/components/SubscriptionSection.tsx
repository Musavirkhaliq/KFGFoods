"use client";

import React from "react";
import Image from "next/image";
import { Check, Calendar, ArrowRight, MessageSquare, ShieldCheck, Heart } from "lucide-react";
import { SUBSCRIPTION_PLANS, SubscriptionPlan } from "@/data/subscriptions";
import { getSubscriptionWhatsAppUrl } from "@/lib/whatsapp";

export default function SubscriptionSection() {
  return (
    <section id="subscriptions" className="py-16 lg:py-24 bg-white border-b border-[#E8EEE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D97706] mb-3 font-semibold bg-[#FAF8F5] px-3.5 py-1 rounded-full border border-[#E8EEE6]">
            <Calendar className="w-3.5 h-3.5 text-[#1B5E20]" />
            <span>Monthly Wellness Ritual</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B5E20] leading-tight mb-4">
            Good Food, Delivered to Your Door.
          </h2>
          <p className="text-base sm:text-lg text-[#565e55]">
            Make thoughtful food choices part of your everyday routine. Freshly baked in small batches at our Lassipora industrial unit and delivered directly to your home.
          </p>
        </div>

        {/* 3 Subscription Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan: SubscriptionPlan) => {
            const isHighlighted = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? "bg-[#FAF8F5] border-2 border-[#1B5E20] shadow-2xl relative scale-102 z-10"
                    : "bg-[#FAF8F5] border border-[#E8EEE6] hover:border-[#CBD5E1] shadow-md"
                }`}
              >
                {/* Popular / Recommended Pill */}
                {plan.badge && (
                  <div
                    className={`text-center py-2 text-xs font-mono font-bold tracking-wider uppercase ${
                      isHighlighted
                        ? "bg-[#1B5E20] text-white"
                        : "bg-[#E8EEE6] text-[#1B5E20]"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header & Image */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Visual Preview */}
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                      <Image
                        src={plan.image}
                        alt={plan.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#242923] mb-1">
                      {plan.name}
                    </h3>

                    <p className="text-xs font-mono text-[#D97706] font-semibold mb-3">
                      {plan.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#565e55] leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    {/* Ideal For Note */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#E8EEE6] mb-6">
                      <span className="text-[10px] font-mono uppercase text-[#768075] font-semibold block mb-0.5">
                        Ideal Household Profile:
                      </span>
                      <p className="text-xs text-[#242923] font-medium leading-snug">
                        {plan.idealFor}
                      </p>
                    </div>

                    {/* Curated Contents */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-mono uppercase text-[#1B5E20] font-bold block mb-2">
                        Box Inclusions:
                      </span>
                      {plan.curatedContents.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-[#242923]">
                          <Check className="w-4 h-4 text-[#2E7D32] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Formulation Pillars */}
                    <div className="pt-4 border-t border-[#E8EEE6] mb-6">
                      <span className="text-[10px] font-mono uppercase text-[#768075] block mb-2 font-semibold">
                        Formulation Standards:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {plan.formulationPillars.map((p, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono bg-white text-[#1B5E20] px-2 py-0.5 rounded border border-[#E8EEE6]"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing / Plan CTA Notice */}
                  <div>
                    <div className="bg-white/80 p-3 rounded-xl border border-[#E8EEE6] text-[11px] text-[#565e55] text-center mb-4">
                      Customized box sizes, weekly batches, and tailored deliveries arranged directly with our nutritionist concierge.
                    </div>

                    <a
                      href={getSubscriptionWhatsAppUrl(plan.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] ${
                        isHighlighted
                          ? "bg-[#1B5E20] hover:bg-[#144718] text-white shadow"
                          : "bg-white hover:bg-[#E8EEE6] text-[#1B5E20] border border-[#CBD5E1]"
                      }`}
                      aria-label={`Enquire for ${plan.name} on WhatsApp`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enquire for Monthly Subscription</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantee Strip */}
        <div className="mt-14 p-6 rounded-3xl bg-[#FAF8F5] border border-[#E8EEE6] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="w-6 h-6 text-[#1B5E20] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#242923]">Small-Batch Baking</div>
              <div className="text-[11px] text-[#565e55]">Baked fresh upon subscription schedule</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Heart className="w-6 h-6 text-[#D97706] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#242923]">Flexible Household Pause</div>
              <div className="text-[11px] text-[#565e55]">Pause or adjust frequency via WhatsApp anytime</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Calendar className="w-6 h-6 text-[#2E7D32] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#242923]">Pan-Kashmir Doorstep</div>
              <div className="text-[11px] text-[#565e55]">Direct logistics from SIDCO Lassipora</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
