"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, ChevronRight, Sparkles, Box, Store } from "lucide-react";
import {
  getGeneralWhatsAppUrl,
  getProductWhatsAppUrl,
  getSubscriptionWhatsAppUrl,
  createWhatsAppUrl,
} from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [openConcierge, setOpenConcierge] = useState(false);

  const quickOptions = [
    {
      title: "Explore Products & Pricing",
      desc: "Water chestnut cookies, dates laddoos & premixes",
      url: getGeneralWhatsAppUrl(),
      icon: Box,
    },
    {
      title: "Monthly Subscription Inquiry",
      desc: "Diabetic Care, Family Box or Millet Combo",
      url: getSubscriptionWhatsAppUrl("Monthly Box Subscription"),
      icon: Sparkles,
    },
    {
      title: "B2B / Retail Distribution",
      desc: "Wholesale, supermarkets, hospital & clinic supply",
      url: createWhatsAppUrl("Hello KFG Foods, I would like to discuss a business/retail distribution partnership."),
      icon: Store,
    },
  ];

  return (
    <aside
      aria-label="WhatsApp Concierge"
      className="fixed bottom-20 xl:bottom-8 right-4 xl:right-8 z-40 flex flex-col items-end"
    >
      {/* Mini concierge modal / popover */}
      {openConcierge && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-[#E2E8E0] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#1B5E20] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/40 flex-shrink-0 bg-white">
                <Image
                  src="/logo.jpeg"
                  alt="KFGFoods Desk"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-sm">KFGFoods Direct Desk</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Lassipora, Pulwama • FreshBic Active
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpenConcierge(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Close concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF8F5]">
            <p className="text-xs text-[#565e55] mb-3 leading-relaxed">
              Welcome to KFG Foods! How can our food-tech team assist you today?
            </p>

            <div className="space-y-2">
              {quickOptions.map((opt, i) => {
                const IconComponent = opt.icon;
                return (
                  <a
                    key={i}
                    href={opt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpenConcierge(false)}
                    className="p-2.5 bg-white hover:bg-[#E8EEE6] rounded-xl border border-[#E8EEE6] flex items-center justify-between transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#E8EEE6] text-[#1B5E20] flex items-center justify-center group-hover:bg-[#1B5E20] group-hover:text-white transition-colors">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-semibold text-[#242923]">{opt.title}</div>
                        <div className="text-[10px] text-[#565e55] truncate max-w-[170px]">
                          {opt.desc}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#565e55] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                );
              })}
            </div>

            <div className="mt-3 pt-3 border-t border-[#E8EEE6] text-[10px] text-center text-[#565e55] font-mono">
              FSSAI Lic: 11023470000115 • Direct Dispatch
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <button
          onClick={() => setOpenConcierge(!openConcierge)}
          className="w-14 h-14 rounded-full bg-[#1B5E20] hover:bg-[#144718] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-600/30 border-2 border-white"
          aria-label="Open WhatsApp Concierge"
        >
          {openConcierge ? (
            <X className="w-6 h-6" />
          ) : (
            <svg
              className="w-7 h-7 fill-current text-[#4ADE80]"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.58 1.942.923 3.149.923 3.182 0 5.767-2.587 5.767-5.766 0-3.18-2.586-5.765-5.767-5.765zm0 10.354c-1.026 0-1.936-.312-2.731-.861l-.196-.134-1.393.366.372-1.358-.128-.204c-.615-.978-.941-1.897-.94-2.797 0-2.518 2.048-4.566 4.568-4.566 2.519 0 4.568 2.048 4.568 4.566 0 2.519-2.049 4.567-4.568 4.567zm4.254-2.812c-.234-.117-1.385-.683-1.6-.761-.215-.078-.372-.117-.528.117-.156.234-.607.761-.744.918-.137.156-.274.176-.508.059-.234-.117-.988-.364-1.882-1.161-.696-.621-1.166-1.388-1.303-1.622-.137-.234-.015-.36.103-.477.106-.105.234-.274.351-.411.117-.137.156-.234.234-.391.078-.156.039-.293-.02-.411-.059-.117-.528-1.272-.724-1.742-.191-.458-.385-.396-.528-.403l-.45-.008c-.156 0-.411.059-.626.293-.215.234-.822.803-.822 1.958s.841 2.271.958 2.428c.117.156 1.656 2.528 4.012 3.545.56.242.998.386 1.34.495.563.179 1.075.154 1.48.093.451-.067 1.385-.566 1.58-1.113.195-.547.195-1.016.137-1.113-.058-.098-.214-.156-.448-.273z" />
            </svg>
          )}
        </button>

        {/* Desktop floating hover badge */}
        {!openConcierge && (
          <span className="hidden xl:inline-block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#242923] text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            Quick WhatsApp Order & Inquiry
          </span>
        )}
      </div>
    </aside>
  );
}
