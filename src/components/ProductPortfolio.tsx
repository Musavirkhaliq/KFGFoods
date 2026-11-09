"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, MessageSquare, Clock, Check } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, Product, ProductCategory } from "@/data/products";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";

export default function ProductPortfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activeCategoryMeta = useMemo(() => {
    return PRODUCT_CATEGORIES.find((c) => c.id === activeCategory) || PRODUCT_CATEGORIES[0];
  }, [activeCategory]);

  return (
    <section id="products" className="py-16 lg:py-24 bg-white border-b border-[#E8EEE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D97706] mb-3 font-semibold">
              <Sparkles className="w-4 h-4 text-[#1B5E20]" />
              <span>Thoughtful Everyday Indulgence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B5E20] leading-tight mb-3">
              Discover Something Delicious
            </h2>
            <p className="text-base sm:text-lg text-[#565e55]">
              One ecosystem. Five distinctive food experiences — from water chestnut cookies and date laddoos to authentic Kashmiri Harisa and upcoming innovations.
            </p>
          </div>

          <div className="text-xs font-mono text-[#565e55] bg-[#FAF8F5] px-4 py-2.5 rounded-2xl border border-[#E8EEE6] flex items-center gap-2 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Batch Dispatch via WhatsApp Desk</span>
          </div>
        </div>

        {/* Filter Tabs (Horizontal Scrollable on Mobile, Wrap on Desktop) */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max" role="tablist" aria-label="Product categories">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#2E7D32] ${
                    isActive
                      ? "bg-[#1B5E20] text-white shadow-md"
                      : "bg-[#FAF8F5] text-[#242923] hover:bg-[#E8EEE6] border border-[#E8EEE6]"
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Meta Context Banner */}
        <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#E8EEE6] mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#242923]">
                {activeCategoryMeta.name}
              </h3>
              {activeCategoryMeta.tagline && (
                <span className="text-xs font-serif italic text-[#D97706] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {activeCategoryMeta.tagline}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#565e55] mt-1 max-w-3xl">
              {activeCategoryMeta.description}
            </p>
          </div>
          <span className="text-xs font-mono text-[#1B5E20] font-semibold bg-white px-3 py-1.5 rounded-xl border border-[#E8EEE6] whitespace-nowrap">
            {filteredProducts.length} Selections Available
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#E8EEE6] hover:border-[#2E7D32]/50 transition-all hover:shadow-xl flex flex-col group"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge Overlay */}
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-mono font-semibold shadow-xs backdrop-blur-md border ${
                      product.comingSoon
                        ? "bg-amber-100/95 text-amber-900 border-amber-300"
                        : "bg-white/95 text-[#1B5E20] border-white"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Category Pill */}
                <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-xs text-white px-2.5 py-1 rounded-md">
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
                  <h4 className="font-serif text-xl font-bold text-[#242923] mb-2 leading-snug group-hover:text-[#1B5E20] transition-colors">
                    {product.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#565e55] leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Verified Formulation Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.attributes.map((attr, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-medium bg-white text-[#1B5E20] px-2.5 py-1 rounded-md border border-[#E8EEE6]"
                      >
                        {attr}
                      </span>
                    ))}
                  </div>

                  {/* Ingredient Disclosure Snippet */}
                  <div className="pt-3 border-t border-[#E8EEE6] mb-5">
                    <span className="text-[11px] font-mono uppercase text-[#768075] block mb-1.5 font-semibold">
                      Key Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-1 text-[11px] text-[#242923]">
                      {product.ingredients.join(" • ")}
                    </div>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-4 border-t border-[#E8EEE6]">
                  {product.comingSoon ? (
                    <a
                      href={getProductWhatsAppUrl(`Upcoming Item: ${product.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white hover:bg-[#E8EEE6] text-[#242923] border border-[#CBD5E1] text-xs font-semibold transition-all"
                    >
                      <Clock className="w-4 h-4 text-[#D97706]" />
                      <span>Inquire About Launch & Sampling</span>
                    </a>
                  ) : (
                    <a
                      href={getProductWhatsAppUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#1B5E20] hover:bg-[#144718] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                      aria-label={`Enquire about ${product.name} on WhatsApp`}
                    >
                      <MessageSquare className="w-4 h-4 text-[#4ADE80]" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Custom Request Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8EEE6] text-center max-w-2xl mx-auto">
          <h4 className="font-serif font-bold text-lg text-[#242923] mb-2">
            Looking for Custom Dietary Formulations or Institutional Supply?
          </h4>
          <p className="text-xs sm:text-sm text-[#565e55] mb-5">
            We work closely with wellness clinics, schools, corporate caterers, and individuals with personalized nutritional requirements.
          </p>
          <a
            href={getProductWhatsAppUrl("Custom Dietary & Bulk Packaging Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1B5E20] hover:text-[#144718] bg-white px-5 py-2.5 rounded-full border border-[#CBD5E1] hover:border-[#1B5E20] transition-colors"
          >
            <span>Request Custom Formulation Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
