"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, MessageSquare, Clock, Check } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, Product, ProductCategory } from "@/data/products";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";

export default function ProductPortfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activeCategoryMeta = useMemo(() => {
    return PRODUCT_CATEGORIES.find((c) => c.id === activeCategory) || PRODUCT_CATEGORIES[0];
  }, [activeCategory]);

  return (
    <section id="products" className="py-16 lg:py-24 bg-[#050D06]/85 backdrop-blur-sm border-b border-emerald-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F59E0B] mb-3 font-semibold bg-[#0D2213] px-3.5 py-1 rounded-full border border-emerald-500/30">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Thoughtful Everyday Indulgence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              Discover Something Delicious
            </h2>
            <p className="text-sm sm:text-base text-[#A1B0A4]">
              One ecosystem. Five distinctive food experiences — from water chestnut cookies and date laddoos to authentic Kashmiri Harisa and upcoming innovations.
            </p>
          </div>

          <div className="text-xs font-mono text-emerald-300 bg-[#0A1F10] px-4 py-2.5 rounded-full border border-emerald-500/30 flex items-center gap-2 self-start md:self-auto shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Batch Dispatch via WhatsApp Desk</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2.5 min-w-max" role="tablist" aria-label="Product categories">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all focus:outline-none ${
                    isActive
                      ? "gold-gradient-btn text-[#08120A] shadow-[0_0_15px_rgba(217,119,6,0.4)]"
                      : "bg-[#091A0E] text-gray-300 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Meta Context Banner */}
        <div className="glass-card-dark p-5 sm:p-6 rounded-3xl border border-amber-500/20 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                {activeCategoryMeta.name}
              </h3>
              {activeCategoryMeta.tagline && (
                <span className="text-xs font-serif italic text-[#F59E0B] bg-amber-950/60 px-3 py-0.5 rounded-full border border-amber-500/30">
                  {activeCategoryMeta.tagline}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#A1B0A4] mt-1 max-w-3xl">
              {activeCategoryMeta.description}
            </p>
          </div>
          <span className="text-xs font-mono text-[#F59E0B] font-semibold bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 whitespace-nowrap">
            {filteredProducts.length} Selections Available
          </span>
        </div>

        {/* Product Cards Grid in Dark Luxury Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-card-dark rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col group"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <Image
                  src={product.image}
                  alt={`FreshBic ${product.name} — 100% Maida-Free Sugar-Free Healthy Bakery Kashmir`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E10] via-black/20 to-transparent" />

                {/* Badge Overlay */}
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-mono font-semibold shadow-md backdrop-blur-md border ${
                      product.comingSoon
                        ? "bg-amber-950/90 text-amber-300 border-amber-500/40"
                        : "bg-black/75 text-emerald-300 border-emerald-500/40"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Category Pill */}
                <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-xs text-gray-300 border border-white/10 px-2.5 py-1 rounded-md">
                  {product.category === "sonis"
                    ? "Soni's Kitchen"
                    : product.category === "bakery"
                    ? "FreshBic Bakery"
                    : product.category === "nutri"
                    ? "Nutri Foods"
                    : product.category === "premix"
                    ? "Millet Premix"
                    : "Pipeline"}
                </div>
              </div>

              {/* Product Information Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#F59E0B] transition-colors">
                    {product.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#A1B0A4] leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Verified Formulation Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.attributes.map((attr, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-medium bg-[#0A1A0E] text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-900/40"
                      >
                        {attr}
                      </span>
                    ))}
                  </div>

                  {/* Ingredient Disclosure Snippet */}
                  <div className="pt-3 border-t border-white/10 mb-5">
                    <span className="text-[11px] font-mono uppercase text-[#F59E0B] block mb-1 font-semibold">
                      Key Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-1 text-[11px] text-gray-300">
                      {product.ingredients.join(" • ")}
                    </div>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-4 border-t border-white/10">
                  {product.comingSoon ? (
                    <a
                      href={getProductWhatsAppUrl(`Upcoming Item: ${product.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 text-xs font-semibold transition-all"
                    >
                      <Clock className="w-4 h-4 text-[#F59E0B]" />
                      <span>Inquire About Launch & Sampling</span>
                    </a>
                  ) : (
                    <a
                      href={getProductWhatsAppUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full gold-outline-btn text-xs sm:text-sm font-semibold transition-all active:scale-98"
                      aria-label={`Enquire about ${product.name} on WhatsApp`}
                    >
                      <MessageSquare className="w-4 h-4 text-[#F59E0B]" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Custom Request Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-card-dark border border-amber-500/20 text-center max-w-2xl mx-auto">
          <h4 className="font-serif font-bold text-lg text-white mb-2">
            Looking for Custom Dietary Formulations or Institutional Supply?
          </h4>
          <p className="text-xs sm:text-sm text-[#A1B0A4] mb-5">
            We work closely with wellness clinics, schools, corporate caterers, and individuals with personalized nutritional requirements.
          </p>
          <a
            href={getProductWhatsAppUrl("Custom Dietary & Bulk Packaging Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold gold-gradient-btn text-[#08120A] px-6 py-3 rounded-full transition-all"
          >
            <span>Request Custom Formulation Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
