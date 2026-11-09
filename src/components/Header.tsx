"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface HeaderProps {
  onOpenMobileMenu?: () => void;
}

export default function Header({}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Health Challenge", href: "#health-challenge" },
    { label: "Our Science", href: "#science" },
    { label: "Food Match Quiz", href: "#assessment" },
    { label: "Subscriptions", href: "#subscriptions" },
    { label: "Clinical Evidence", href: "#evidence" },
    { label: "Partnership", href: "#partnership" },
    { label: "Leadership", href: "#leadership" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro-bar for regulatory credibility */}
      <div className="bg-[#144718] text-[#FAF8F5] text-xs py-1.5 px-4 text-center tracking-wider font-mono flex items-center justify-center gap-2 border-b border-[#2E7D32]/40">
        <ShieldCheck className="w-3.5 h-3.5 text-[#D97706] inline" />
        <span className="hidden sm:inline opacity-90">GOVERNMENT REGISTERED UNIT</span>
        <span className="opacity-60 hidden sm:inline">•</span>
        <span className="font-semibold text-emerald-200">FSSAI LIC: 11023470000115</span>
        <span className="opacity-60">•</span>
        <span className="truncate">KASHMIR'S PREVENTIVE FOOD-TECH INITIATIVE</span>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E2E8E0]"
            : "bg-[#FAF8F5] border-b border-[#E8EEE6]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2E7D32] rounded-xl p-1"
            aria-label="KFGFoods Home"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-[#1B5E20]/30 bg-white group-hover:scale-105 transition-transform flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="KFGFoods Logo — Wholesome Food, Happier You"
                fill
                priority
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-black tracking-tight text-[#1B5E20]">
                  KFGFoods
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase bg-[#E8EEE6] text-[#1B5E20] px-2 py-0.5 rounded-full font-bold">
                  FreshBic
                </span>
              </div>
              <span className="text-[11px] font-sans text-[#565e55] tracking-wide -mt-0.5 flex items-center gap-1.5">
                <span>Wholesome Food, Happier You</span>
                <span className="text-gray-400 hidden sm:inline">•</span>
                <span className="text-[#D97706] font-medium hidden sm:inline">Kashmir</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-[#242923] hover:text-[#1B5E20] hover:bg-[#E8EEE6]/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1B5E20] hover:bg-[#144718] text-white text-xs sm:text-sm font-medium px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all shadow-sm hover:shadow active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
              aria-label="Order on WhatsApp (+91 6006922754)"
            >
              <svg
                className="w-4 h-4 fill-current text-[#4ADE80]"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.58 1.942.923 3.149.923 3.182 0 5.767-2.587 5.767-5.766 0-3.18-2.586-5.765-5.767-5.765zm0 10.354c-1.026 0-1.936-.312-2.731-.861l-.196-.134-1.393.366.372-1.358-.128-.204c-.615-.978-.941-1.897-.94-2.797 0-2.518 2.048-4.566 4.568-4.566 2.519 0 4.568 2.048 4.568 4.566 0 2.519-2.049 4.567-4.568 4.567zm4.254-2.812c-.234-.117-1.385-.683-1.6-.761-.215-.078-.372-.117-.528.117-.156.234-.607.761-.744.918-.137.156-.274.176-.508.059-.234-.117-.988-.364-1.882-1.161-.696-.621-1.166-1.388-1.303-1.622-.137-.234-.015-.36.103-.477.106-.105.234-.274.351-.411.117-.137.156-.234.234-.391.078-.156.039-.293-.02-.411-.059-.117-.528-1.272-.724-1.742-.191-.458-.385-.396-.528-.403l-.45-.008c-.156 0-.411.059-.626.293-.215.234-.822.803-.822 1.958s.841 2.271.958 2.428c.117.156 1.656 2.528 4.012 3.545.56.242.998.386 1.34.495.563.179 1.075.154 1.48.093.451-.067 1.385-.566 1.58-1.113.195-.547.195-1.016.137-1.113-.058-.098-.214-.156-.448-.273z" />
              </svg>
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-lg text-[#242923] hover:text-[#1B5E20] hover:bg-[#E8EEE6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down navigation drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF8F5] border-b border-[#E2E8E0] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            {/* Brand Card in Drawer */}
            <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#E8EEE6] mb-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-xs border border-[#1B5E20]/20 flex-shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="KFGFoods Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-[#1B5E20] leading-none">
                  KFGFoods
                </div>
                <div className="text-[11px] text-[#565e55] mt-1 font-sans">
                  Wholesome Food, Happier You
                </div>
                <div className="text-[10px] font-mono text-[#D97706] font-semibold">
                  Flagship Brand: FreshBic
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1 pb-4 border-b border-[#E8EEE6]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 text-base font-medium text-[#242923] hover:text-[#1B5E20] hover:bg-[#E8EEE6] rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#565e55]" />
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-2.5">
              <div className="text-xs font-mono text-[#565e55] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                WhatsApp Concierge Active: +91 6006922754
              </div>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full text-center bg-[#1B5E20] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 shadow"
              >
                <span>Chat Directly with KFGFoods</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
