"use client";

import React from "react";
import Image from "next/image";
import { Check, Calendar, ArrowRight, MessageSquare, ShieldCheck, Heart } from "lucide-react";
import { SUBSCRIPTION_PLANS, SubscriptionPlan } from "@/data/subscriptions";
import { getSubscriptionWhatsAppUrl } from "@/lib/whatsapp";

export default function SubscriptionSection() {
  return (
    <section id="subscriptions" className="py-16 lg:py-24 bg-[#050D06]/85 backdrop-blur-sm border-b border-emerald-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F59E0B] mb-3 font-semibold bg-[#0D2213] px-3.5 py-1 rounded-full border border-emerald-500/30">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Monthly Wellness Ritual</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Good Food, Delivered to Your Door.
          </h2>
          <p className="text-sm sm:text-base text-[#A1B0A4]">
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
                    ? "glass-card-dark border-2 border-amber-500/80 shadow-[0_0_30px_rgba(217,119,6,0.3)] relative scale-102 z-10"
                    : "glass-card-dark border border-white/10 hover:border-amber-500/30 shadow-xl"
                }`}
              >
                {/* Popular / Recommended Pill */}
                {plan.badge && (
                  <div
                    className={`text-center py-2.5 text-xs font-mono font-bold tracking-wider uppercase ${
                      isHighlighted
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-md"
                        : "bg-white/5 text-gray-300 border-b border-white/10"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header & Image */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Visual Preview */}
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-black/40">
                      <Image
                        src={plan.image}
                        alt={plan.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E10] via-transparent to-transparent" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white mb-1">
                      {plan.name}
                    </h3>

                    <p className="text-xs font-mono text-[#F59E0B] font-semibold mb-3">
                      {plan.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#A1B0A4] leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    {/* Ideal For Note */}
                    <div className="bg-black/40 p-3.5 rounded-xl border border-white/10 mb-6">
                      <span className="text-[10px] font-mono uppercase text-[#F59E0B] font-semibold block mb-0.5">
                        Ideal Household Profile:
                      </span>
                      <p className="text-xs text-gray-200 font-medium leading-snug">
                        {plan.idealFor}
                      </p>
                    </div>

                    {/* Curated Contents */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-mono uppercase text-emerald-400 font-bold block mb-2">
                        Box Inclusions:
                      </span>
                      {plan.curatedContents.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Formulation Pillars */}
                    <div className="pt-4 border-t border-white/10 mb-6">
                      <span className="text-[10px] font-mono uppercase text-gray-400 block mb-2 font-semibold">
                        Formulation Standards:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {plan.formulationPillars.map((p, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono bg-[#0D2213] text-emerald-300 px-2 py-0.5 rounded border border-emerald-900/50"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing / Plan CTA Notice */}
                  <div>
                    <div className="bg-black/50 p-3 rounded-xl border border-white/10 text-[11px] text-[#A1B0A4] text-center mb-4">
                      Customized box sizes, weekly batches, and tailored deliveries arranged directly with our nutritionist concierge.
                    </div>

                    <a
                      href={getSubscriptionWhatsAppUrl(plan.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm transition-all active:scale-98 ${
                        isHighlighted
                          ? "gold-gradient-btn text-black shadow-lg"
                          : "gold-outline-btn"
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
        <div className="mt-14 p-6 rounded-3xl glass-card-dark border border-amber-500/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Small-Batch Baking</div>
              <div className="text-[11px] text-[#A1B0A4]">Baked fresh upon subscription schedule</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Heart className="w-6 h-6 text-[#F59E0B] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Flexible Household Pause</div>
              <div className="text-[11px] text-[#A1B0A4]">Pause or adjust frequency via WhatsApp anytime</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Calendar className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Pan-Kashmir Doorstep</div>
              <div className="text-[11px] text-[#A1B0A4]">Direct logistics from SIDCO Lassipora</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
