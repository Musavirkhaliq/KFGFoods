"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Handshake,
  Store,
  Building2,
  HeartPulse,
  UtensilsCrossed,
  ChefHat,
  Truck,
  CheckCircle2,
  AlertCircle,
  Send,
  ArrowRight,
} from "lucide-react";
import { getB2BWhatsAppUrl, isValidIndianPhone, B2BInquiryData } from "@/lib/whatsapp";

export default function PartnershipSection() {
  const [formData, setFormData] = useState<B2BInquiryData>({
    fullName: "",
    businessName: "",
    districtCity: "",
    phone: "",
    partnershipCategory: "Distributor",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof B2BInquiryData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    {
      id: "distribution",
      title: "Distribution Partners",
      desc: "District and regional master distributors with temperature-managed transport and warehousing infrastructure.",
      icon: Truck,
      tag: "Master Network",
    },
    {
      id: "retail",
      title: "Retail & Departmental Stores",
      desc: "Supermarkets, gourmet food stores, and local grocers looking to provide healthy bakery shelves.",
      icon: Store,
      tag: "D2C Shelves",
    },
    {
      id: "pharmacy",
      title: "Pharmacies & Wellness Stores",
      desc: "Medical stores and diabetic lifestyle clinics seeking credible, compliant sugar-free snacks.",
      icon: HeartPulse,
      tag: "Diabetic Care",
    },
    {
      id: "institutional",
      title: "Hospitals & Institutional Buyers",
      desc: "In-patient dietary departments, corporate wellness programmes, and institutional cafeterias.",
      icon: Building2,
      tag: "Healthcare",
    },
    {
      id: "horeca",
      title: "Hotels, Cafes & Restaurants",
      desc: "High-end tea lounges, heritage houseboats, and cafes wishing to serve conscious bakery & Harisa.",
      icon: UtensilsCrossed,
      tag: "Hospitality",
    },
    {
      id: "chefs",
      title: "Home Chefs & Culinary Entrepreneurs",
      desc: "Collaborative network under Soni's Home Delicious and KFG Home Chef incubator.",
      icon: ChefHat,
      tag: "Community",
    },
  ];

  const validate = () => {
    const errs: Partial<Record<keyof B2BInquiryData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name";
    if (!formData.businessName.trim()) errs.businessName = "Please enter your organization or business name";
    if (!formData.districtCity.trim()) errs.districtCity = "Please provide your district or city (e.g. Srinagar, Pulwama, Jammu)";
    if (!formData.phone.trim()) {
      errs.phone = "Contact number is required";
    } else if (!isValidIndianPhone(formData.phone)) {
      errs.phone = "Please enter a valid 10-digit Indian phone/WhatsApp number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const targetUrl = getB2BWhatsAppUrl(formData);

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <section id="partnership" className="py-16 lg:py-24 bg-[#050D06] border-b border-emerald-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F59E0B] mb-3 font-semibold bg-[#0D2213] px-3.5 py-1 rounded-full border border-emerald-500/30">
            <Handshake className="w-3.5 h-3.5 text-emerald-400" />
            <span>B2B Commercial & Institutional Alliance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Grow With KFG Foods
          </h2>
          <p className="text-sm sm:text-base text-[#A1B0A4]">
            Building a stronger, healthier food ecosystem across Jammu & Kashmir. We collaborate with visionary retailers, institutions, distributors, and culinary entrepreneurs.
          </p>
        </div>

        {/* Strategic Distribution Partner Spotlight */}
        <div className="glass-card-dark rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 mb-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] font-bold">
                Strategic Distribution Partner
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
                Haleeb’s Glaxy Food Industry
              </h3>
              <p className="text-xs sm:text-sm text-[#A1B0A4] leading-relaxed">
                KFG Foods is proud to partner with <strong className="text-white">Haleeb’s Glaxy Food Industry</strong> as our primary distribution ally. Together, we are establishing cold-chain access, rapid retail replenishment, and verified trade terms across urban and rural markets in the region.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <div className="p-3 bg-black/40 rounded-xl border border-white/10 flex items-center gap-3">
                <Truck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-200">Reliable Valley-Wide Logistics</span>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-200">FSSAI Batch Traceability</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Partnership Categories */}
        <div className="mb-16">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6">
            Partnership Tracks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="glass-card-dark rounded-3xl p-6 border border-white/10 hover:border-amber-500/40 transition-all hover:shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-emerald-950 text-emerald-300 border border-emerald-800/40 font-bold px-2 py-0.5 rounded">
                        {cat.tag}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-white mb-2">
                      {cat.title}
                    </h4>

                    <p className="text-xs text-[#A1B0A4] leading-relaxed mb-4">
                      {cat.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        partnershipCategory: cat.title,
                      }));
                      const formEl = document.getElementById("b2b-form");
                      formEl?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs font-mono text-[#F59E0B] font-semibold flex items-center justify-between sm:justify-start gap-1.5 hover:underline py-2.5 min-h-[44px] border-t border-white/10 cursor-pointer w-full transition-colors"
                  >
                    <span>Inquire for this track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* B2B INQUIRY FORM */}
        <div id="b2b-form" className="glass-card-dark rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] font-bold">
              Institutional & Distribution Desk
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
              Submit a Partnership Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#A1B0A4]">
              Fill in your commercial details below. Your structured proposal routes directly to the KFG Foods executive team on WhatsApp for prompt evaluation and direct dispatch terms.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase font-mono tracking-wider mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Tariq Ahmad"
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.fullName ? "border-red-500" : "border-white/15"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase font-mono tracking-wider mb-2">
                  Business / Organization Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Valley Supermart / Al-Shifa Pharmacy"
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.businessName ? "border-red-500" : "border-white/15"
                  }`}
                />
                {errors.businessName && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.businessName}</span>
                  </p>
                )}
              </div>

              {/* District / City */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase font-mono tracking-wider mb-2">
                  District / City <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.districtCity}
                  onChange={(e) => setFormData({ ...formData, districtCity: e.target.value })}
                  placeholder="e.g. Srinagar, Pulwama, Baramulla, Anantnag"
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.districtCity ? "border-red-500" : "border-white/15"
                  }`}
                />
                {errors.districtCity && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.districtCity}</span>
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase font-mono tracking-wider mb-2">
                  Phone / WhatsApp Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.phone ? "border-red-500" : "border-white/15"
                  }`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Partnership Category */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase font-mono tracking-wider mb-2">
                Partnership Category <span className="text-red-400">*</span>
              </label>
              <select
                value={formData.partnershipCategory}
                onChange={(e) => setFormData({ ...formData, partnershipCategory: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Distributor" className="bg-[#0B1E10]">Distributor / Wholesaler</option>
                <option value="Retail Dealer" className="bg-[#0B1E10]">Retail Dealer / Supermarket</option>
                <option value="Institutional Buyer" className="bg-[#0B1E10]">Institutional Buyer / Hospital / Corporate</option>
                <option value="Home Chef" className="bg-[#0B1E10]">Home Chef / Culinary Partner</option>
                <option value="Hotel & Cafe" className="bg-[#0B1E10]">Hotel, Cafe & Restaurant (HoReCa)</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase font-mono tracking-wider mb-2">
                Message / Brief Requirement (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your anticipated monthly volume, retail counter locations, or questions about wholesale pricing..."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gold-gradient-btn text-black font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all active:scale-98 cursor-pointer focus:outline-none"
              >
                <Send className="w-4 h-4 text-black" />
                <span>Submit Partnership Inquiry on WhatsApp</span>
              </button>

              <div className="text-[11px] font-mono text-gray-400 text-center sm:text-right">
                Direct route to Director&apos;s Desk (+91 6006922754)
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
