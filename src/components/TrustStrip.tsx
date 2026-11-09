"use client";

import React from "react";
import { ShieldCheck, MapPin, Wheat, FlaskConical, Truck } from "lucide-react";

export default function TrustStrip() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Food Safety",
      desc: "FSSAI Licensed",
      highlight: "LIC: 11023470000115",
    },
    {
      icon: MapPin,
      title: "Industrial Unit",
      desc: "Kashmir Innovation",
      highlight: "SIDCO Lassipora",
    },
    {
      icon: Wheat,
      title: "Valley Agronomy",
      desc: "Regional Sourcing",
      highlight: "Singhara & Millets",
    },
    {
      icon: FlaskConical,
      title: "Evidence-Informed",
      desc: "Functional Food-Tech",
      highlight: "Low-GI Formulations",
    },
    {
      icon: Truck,
      title: "Pan-India Reach",
      desc: "Distribution Network",
      highlight: "Haleeb's Glaxy Partner",
    },
  ];

  return (
    <section className="bg-[#050D06] py-10 border-b border-emerald-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Dark Glass Curved Strip */}
        <div className="glass-card-dark rounded-3xl p-5 sm:p-6 border border-amber-500/25 shadow-xl">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4 items-center">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 group p-2 rounded-2xl transition-all hover:bg-white/5"
                >
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex-shrink-0 flex items-center justify-center transition-all group-hover:scale-105 group-hover:bg-emerald-500/25 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#F59E0B] font-semibold">
                      {item.highlight}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#A1B0A4] leading-tight mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
