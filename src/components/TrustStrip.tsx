"use client";

import React from "react";
import { ShieldCheck, MapPin, Wheat, FlaskConical, Truck } from "lucide-react";

export default function TrustStrip() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "FSSAI Licensed",
      desc: "Lic. No. 11023470000115",
      highlight: "Food Safety Compliant",
    },
    {
      icon: MapPin,
      title: "Kashmir Innovation",
      desc: "IGC SIDCO Lassipora, Pulwama",
      highlight: "Industrial Unit",
    },
    {
      icon: Wheat,
      title: "Regional Sourcing",
      desc: "Water Chestnut & Ancient Millets",
      highlight: "Valley Agronomy",
    },
    {
      icon: FlaskConical,
      title: "Functional Food-Tech",
      desc: "Low-GI & Preventive Formulations",
      highlight: "Evidence-Informed",
    },
    {
      icon: Truck,
      title: "Distribution Network",
      desc: "Partner: Haleeb's Glaxy Food",
      highlight: "Pan-J&K Reach",
    },
  ];

  return (
    <section className="bg-white border-b border-[#E8EEE6] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-start">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 group p-2 rounded-xl transition-colors hover:bg-[#FAF8F5]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E8EEE6] text-[#1B5E20] flex-shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#1B5E20] group-hover:text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D97706] font-semibold">
                    {item.highlight}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#242923]">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#565e55] leading-tight mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
