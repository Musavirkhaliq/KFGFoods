"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Heart,
  ExternalLink,
  ChevronRight,
  X,
  FileText,
} from "lucide-react";
import { getGeneralWhatsAppUrl, DISPLAY_PHONE } from "@/lib/whatsapp";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "disclaimer" | null>(null);

  const productLinks = [
    { name: "Singhara Water Chestnut Cookies", href: "#products" },
    { name: "Multi-Grain Millet Cookies", href: "#products" },
    { name: "Heart-Healthy Oat Biscuits", href: "#products" },
    { name: "Pure Dates & Channa Laddoos", href: "#products" },
    { name: "Millet Khichdi & Upma Premix", href: "#products" },
    { name: "Authentic Kashmiri Harisa", href: "#products" },
  ];

  const quickLinks = [
    { name: "About KFG Foods", href: "#about" },
    { name: "The Health Challenge", href: "#health-challenge" },
    { name: "Four Science Pillars", href: "#science" },
    { name: "Food Preference Match", href: "#assessment" },
    { name: "Monthly Subscription Boxes", href: "#subscriptions" },
    { name: "Clinical Evidence & Studies", href: "#evidence" },
    { name: "B2B Distribution & Retail", href: "#partnership" },
    { name: "Leadership & Advisory", href: "#leadership" },
  ];

  return (
    <footer className="bg-[#040A05] text-white pt-16 pb-28 xl:pb-16 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[#0B1E10] border-2 border-amber-500/40 flex-shrink-0 shadow-xl">
                <Image
                  src="/logo.png"
                  alt="KFGFoods Brand Emblem"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-black tracking-tight text-white block">
                  KFGFoods
                </span>
                <span className="text-[11px] font-mono tracking-wider text-emerald-300 uppercase -mt-0.5 block">
                  KFG Foods Private Limited • FreshBic
                </span>
                <span className="text-[11px] font-serif italic text-[#F59E0B] block">
                  Wholesome Food, Happier You
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A1B0A4] leading-relaxed">
              Kashmir’s pioneering preventive food-tech ecosystem. Crafting 100% maida-free, sugar-free healthy bakery, functional millet premixes, and soulful regional culinary treasures.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-[#0D2213] px-3.5 py-1.5 rounded-full text-xs font-mono text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span>FSSAI LIC: 11023470000115</span>
              </div>
            </div>

            {/* Social media handles */}
            <div className="pt-2 text-xs text-gray-400 font-mono flex flex-col space-y-1">
              <span>Official Channels:</span>
              <div className="flex gap-4 text-emerald-300">
                <span>@kfgfoods_official</span>
                <span>•</span>
                <span>@kfgfoodsindia</span>
              </div>
            </div>
          </div>

          {/* Col 2: Product Discoveries (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
              <span>Our Creations</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {productLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-base text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
              <span>Explore</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {quickLinks.slice(0, 6).map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Registered Addresses & Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-serif font-bold text-base text-white mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
              <span>Locations & Orders</span>
            </h4>

            {/* Industrial Unit */}
            <div className="flex items-start gap-2.5 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-sans">Manufacturing & Registered Unit:</strong>
                <span className="text-[#A1B0A4]">IGC SIDCO Industrial Area, Lassipora, Pulwama, Jammu & Kashmir</span>
              </div>
            </div>

            {/* Regional Office */}
            <div className="flex items-start gap-2.5 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-sans">Regional Office:</strong>
                <span className="text-[#A1B0A4]">100 KVA CLY, Shakwara Wagoora, Baramulla – 193101, Jammu & Kashmir</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gold-gradient-btn text-black px-5 py-2.5 rounded-full text-xs font-bold shadow-md transition-all active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>WhatsApp: {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Mandatory Health Disclaimer Box */}
        <div className="py-6 border-b border-white/10 text-[11px] text-gray-400 leading-relaxed">
          <strong className="text-gray-200">Health & Food Standard Notice:</strong> FreshBic products by KFG Foods Private Limited are formulated using wholesome regional flours (such as water chestnut) and selected alternative sweetening ingredients designed for thoughtful everyday nutrition. They are not intended to diagnose, treat, prevent, or cure diabetes mellitus, coronary artery disease, or any medical disorder. Nutritional and glycemic parameters may vary across specific preparations. Consumers with specific medical diagnoses or therapeutic dietary restrictions should consult their treating physician or certified dietitian.
        </div>

        {/* Bottom Legal, Policy & Agency Credit Strip */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <div>
            © {new Date().getFullYear()} KFG Foods Private Limited. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-emerald-300">
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-white underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-white underline cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal("disclaimer")}
              className="hover:text-white underline cursor-pointer"
            >
              Food Disclaimer
            </button>
          </div>

          {/* Attribution Credit */}
          <div className="text-center md:text-right">
            Digital Presence Powered by{" "}
            <a
              href="https://www.educasheer.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F59E0B] hover:text-amber-300 font-bold underline inline-flex items-center gap-1"
            >
              <span>EduCasheer Private Limited</span>
              <ExternalLink className="w-3 h-3 inline" />
            </a>
          </div>
        </div>

      </div>

      {/* POLICY MODALS IN DARK LUXURY */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card-dark text-white rounded-3xl p-6 sm:p-8 max-w-xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-amber-500/30 relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5 rounded-lg transition-colors bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === "privacy" && (
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Privacy Policy
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#A1B0A4] leading-relaxed">
                  <p>
                    KFG Foods Private Limited and its brand FreshBic respect your privacy. Any personal information shared with us through WhatsApp orders, food preference assessments, or B2B inquiries—including names, contact numbers, and delivery addresses—is used strictly for processing food orders, responding to commercial inquiries, and customer service fulfillment.
                  </p>
                  <p>
                    We do not sell, rent, or trade customer contact details with third-party advertisers. All WhatsApp communication complies with standard end-to-end messaging protocols.
                  </p>
                  <p>
                    For inquiries regarding stored communications, contact our registered office in Lassipora, Pulwama.
                  </p>
                </div>
              </div>
            )}

            {activeModal === "terms" && (
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Terms & Conditions
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#A1B0A4] leading-relaxed">
                  <p>
                    All bakery products, nutritional snacks, and premixes offered under FreshBic and Soni&apos;s Home Delicious are produced in compliance with FSSAI regulations (Lic: 11023470000115) at our Lassipora, Pulwama industrial unit.
                  </p>
                  <p>
                    Pricing, batch availability, and delivery timelines are confirmed directly through our WhatsApp order desk. Because our products are baked in small fresh batches with minimal artificial preservatives, consumption within recommended expiry windows is advised.
                  </p>
                  <p>
                    B2B and distribution agreements are governed by the commercial laws of Jammu and Kashmir, India.
                  </p>
                </div>
              </div>
            )}

            {activeModal === "disclaimer" && (
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Food & Health Disclaimer
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#A1B0A4] leading-relaxed">
                  <p>
                    FreshBic products represent thoughtful formulation choices—including water chestnut flours, millets, and alternative sweeteners. However, individual glycemic reactions and caloric requirements differ based on personal metabolic factors and medication.
                  </p>
                  <p>
                    The educational content and scientific references on this website are provided for general health literacy and do not constitute individualized medical nutrition advice.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="gold-gradient-btn text-black px-6 py-2 rounded-full text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
