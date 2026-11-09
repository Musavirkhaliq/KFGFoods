"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Heart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Notice Micro-Bar */}
      <div className="bg-[#050D06] text-[#A1B0A4] text-[11px] sm:text-xs py-2 px-4 border-b border-emerald-950/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
          <div className="flex items-center gap-2 font-medium tracking-wide truncate">
            <span className="text-[#F59E0B] text-xs">📢</span>
            <span className="font-semibold text-emerald-200 hidden sm:inline">
              Kashmir&apos;s Preventive Food-Tech Initiative
            </span>
            <span className="opacity-40 hidden sm:inline">|</span>
            <span className="text-emerald-400 font-mono font-bold">
              FSSAI LIC: 11023470000115
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-emerald-300/80 text-xs font-medium">
            <span className="text-emerald-400">💚</span>
            <span>Healthy Today • Healthier Tomorrow</span>
          </div>
        </div>
      </div>

      {/* Floating Dark Glass Header Container */}
      <div className="sticky top-0 z-40 w-full px-3 sm:px-6 pt-2.5 pb-2.5 bg-[#071109]/90 backdrop-blur-md transition-colors">
        <header
          className={`max-w-7xl mx-auto transition-all duration-300 rounded-full border ${
            scrolled
              ? "bg-[#0A1A0E]/95 backdrop-blur-xl shadow-2xl border-amber-500/40 py-2 sm:py-2.5 px-4 sm:px-6"
              : "bg-[#09160D]/90 backdrop-blur-xl shadow-2xl border-white/15 py-2.5 sm:py-3 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D97706] rounded-full p-0.5"
              aria-label="KFGFoods Home"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-lg border-2 border-amber-500/40 bg-[#0B1E10] group-hover:scale-105 transition-transform flex-shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="KFGFoods Logo"
                  fill
                  priority
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#F59E0B] transition-colors">
                    KFGFoods
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 px-1.5 py-0.5 rounded-full font-bold">
                    Kashmir
                  </span>
                </div>
                <span className="text-[10px] text-[#A1B0A4] font-sans -mt-0.5 hidden sm:inline">
                  Wholesome Food, Happier You
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
              <a
                href="#"
                className="px-3 py-1.5 text-xs font-semibold text-white hover:text-[#F59E0B] transition-colors relative"
              >
                <span>Home</span>
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F59E0B] rounded-full shadow-[0_0_8px_#F59E0B]"></span>
              </a>

              {/* About Us dropdown */}
              <div className="relative" onMouseLeave={() => setAboutDropdown(false)}>
                <button
                  onMouseEnter={() => setAboutDropdown(true)}
                  onClick={() => setAboutDropdown(!aboutDropdown)}
                  className="px-3 py-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-white rounded-full transition-colors inline-flex items-center gap-1"
                >
                  <span>About Us</span>
                  <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
                </button>
                {aboutDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-[#0B1E10] rounded-2xl shadow-2xl border border-amber-500/25 p-2 z-50 animate-in fade-in duration-150 backdrop-blur-xl">
                    <a
                      href="#about"
                      onClick={() => setAboutDropdown(false)}
                      className="block px-3 py-2 text-xs font-medium text-gray-200 hover:bg-emerald-950/60 hover:text-[#F59E0B] rounded-xl"
                    >
                      Our Story & Origins
                    </a>
                    <a
                      href="#leadership"
                      onClick={() => setAboutDropdown(false)}
                      className="block px-3 py-2 text-xs font-medium text-gray-200 hover:bg-emerald-950/60 hover:text-[#F59E0B] rounded-xl"
                    >
                      Leadership & Advisory
                    </a>
                  </div>
                )}
              </div>

              {/* Our Products dropdown */}
              <div className="relative" onMouseLeave={() => setProductsDropdown(false)}>
                <button
                  onMouseEnter={() => setProductsDropdown(true)}
                  onClick={() => setProductsDropdown(!productsDropdown)}
                  className="px-3 py-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-white rounded-full transition-colors inline-flex items-center gap-1"
                >
                  <span>Our Products</span>
                  <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
                </button>
                {productsDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-[#0B1E10] rounded-2xl shadow-2xl border border-amber-500/25 p-2 z-50 animate-in fade-in duration-150 backdrop-blur-xl">
                    <a
                      href="#products"
                      onClick={() => setProductsDropdown(false)}
                      className="block px-3 py-2 text-xs font-medium text-gray-200 hover:bg-emerald-950/60 hover:text-[#F59E0B] rounded-xl"
                    >
                      FreshBic Healthy Bakery
                    </a>
                    <a
                      href="#products"
                      onClick={() => setProductsDropdown(false)}
                      className="block px-3 py-2 text-xs font-medium text-gray-200 hover:bg-emerald-950/60 hover:text-[#F59E0B] rounded-xl"
                    >
                      FreshBic Nutri Foods (Laddoos)
                    </a>
                    <a
                      href="#products"
                      onClick={() => setProductsDropdown(false)}
                      className="block px-3 py-2 text-xs font-medium text-gray-200 hover:bg-emerald-950/60 hover:text-[#F59E0B] rounded-xl"
                    >
                      FreshBic Millet Premixes
                    </a>
                    <a
                      href="#products"
                      onClick={() => setProductsDropdown(false)}
                      className="block px-3 py-2 text-xs font-medium text-gray-200 hover:bg-emerald-950/60 hover:text-[#F59E0B] rounded-xl"
                    >
                      Soni&apos;s Home Delicious (Harisa)
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#health-challenge"
                className="px-3 py-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-white transition-colors"
              >
                Health Challenge
              </a>

              <a
                href="#science"
                className="px-3 py-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-white transition-colors"
              >
                Our Science
              </a>

              {/* Food Match Quiz with "New" badge */}
              <a
                href="#assessment"
                className="px-3 py-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Food Match Quiz</span>
                <span className="text-[9px] font-mono font-bold bg-emerald-500 text-black px-1.5 py-0.2 rounded-full uppercase tracking-tight shadow-[0_0_8px_#22C55E]">
                  New
                </span>
              </a>

              <a
                href="#subscriptions"
                className="px-3 py-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-white transition-colors"
              >
                Subscriptions
              </a>

              <a
                href="#evidence"
                className="px-3 py-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-white transition-colors"
              >
                Clinical Evidence
              </a>

              <a
                href="#partnership"
                className="px-3 py-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-white transition-colors"
              >
                Partnership
              </a>

              <a
                href="#leadership"
                className="px-3 py-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-white transition-colors"
              >
                Leadership
              </a>
            </nav>

            {/* Right Action: Gold Outlined Order on WhatsApp Pill */}
            <div className="flex items-center gap-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0C1E11]/80 hover:bg-[#F59E0B] hover:text-[#08120A] text-[#F3F4F6] text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all border border-amber-500/50 hover:border-[#F59E0B] shadow-[0_0_15px_rgba(217,119,6,0.2)] active:scale-95 group focus:outline-none"
                aria-label="Order on WhatsApp (+91 6006922754)"
              >
                <svg
                  className="w-4 h-4 fill-current text-[#4ADE80] group-hover:text-[#08120A] transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.58 1.942.923 3.149.923 3.182 0 5.767-2.587 5.767-5.766 0-3.18-2.586-5.765-5.767-5.765zm0 10.354c-1.026 0-1.936-.312-2.731-.861l-.196-.134-1.393.366.372-1.358-.128-.204c-.615-.978-.941-1.897-.94-2.797 0-2.518 2.048-4.566 4.568-4.566 2.519 0 4.568 2.048 4.568 4.566 0 2.519-2.049 4.567-4.568 4.567zm4.254-2.812c-.234-.117-1.385-.683-1.6-.761-.215-.078-.372-.117-.528.117-.156.234-.607.761-.744.918-.137.156-.274.176-.508.059-.234-.117-.988-.364-1.882-1.161-.696-.621-1.166-1.388-1.303-1.622-.137-.234-.015-.36.103-.477.106-.105.234-.274.351-.411.117-.137.156-.234.234-.391.078-.156.039-.293-.02-.411-.059-.117-.528-1.272-.724-1.742-.191-.458-.385-.396-.528-.403l-.45-.008c-.156 0-.411.059-.626.293-.215.234-.822.803-.822 1.958s.841 2.271.958 2.428c.117.156 1.656 2.528 4.012 3.545.56.242.998.386 1.34.495.563.179 1.075.154 1.48.093.451-.067 1.385-.566 1.58-1.113.195-.547.195-1.016.137-1.113-.058-.098-.214-.156-.448-.273z" />
                </svg>
                <span>Order on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B] group-hover:text-[#08120A]" />
              </a>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-full text-gray-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          {mobileMenuOpen && (
            <div className="xl:hidden mt-3 pt-3 border-t border-emerald-900/60 pb-4 animate-in slide-in-from-top duration-200">
              <div className="flex items-center gap-3 p-3 bg-[#050D06] rounded-2xl mb-3 border border-amber-500/20">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500/30 flex-shrink-0 bg-white">
                  <Image src="/logo.jpeg" alt="KFGFoods" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-serif font-black text-sm text-white">KFGFoods</div>
                  <div className="text-[11px] text-[#A1B0A4]">Wholesome Food, Happier You</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200"
                >
                  About Us
                </a>
                <a
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200"
                >
                  Our Products
                </a>
                <a
                  href="#health-challenge"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200"
                >
                  Health Challenge
                </a>
                <a
                  href="#science"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200"
                >
                  Our Science
                </a>
                <a
                  href="#assessment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#F59E0B] font-bold flex items-center justify-between"
                >
                  <span>Food Match Quiz</span>
                  <span className="text-[9px] bg-emerald-500 text-black px-1.5 rounded-full font-bold">New</span>
                </a>
                <a
                  href="#subscriptions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200"
                >
                  Subscriptions
                </a>
                <a
                  href="#evidence"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200"
                >
                  Clinical Evidence
                </a>
                <a
                  href="#partnership"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200"
                >
                  Partnership
                </a>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
