"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Sparkles,
  ChefHat,
  ShieldCheck,
  Flame,
  ArrowRight,
} from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function CraftsmanshipVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Play video smoothly when scrolled into view; pause when out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => setIsPlaying(true))
                  .catch(() => {
                    // Autoplay with sound restricted, ensure muted
                    if (videoRef.current) {
                      videoRef.current.muted = true;
                      setIsMuted(true);
                      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
                    }
                  });
              }
            }
          } else {
            setIsVisible(false);
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Artisanal Kitchen Craftsmanship"
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#050D06] border-y border-emerald-950/80"
    >
      {/* Background Video Canvas with Dark Luxury Vignettes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/chef-craftsmanship.mp4"
          poster="/chef-poster.jpg"
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 ${
            videoLoaded ? "opacity-60 lg:opacity-50" : "opacity-0"
          }`}
        />

        {/* Fallback poster while video is buffering */}
        {!videoLoaded && (
          <Image
            src="/chef-poster.jpg"
            alt="Artisanal Chef preparing Kashmiri healthy bakery"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-40"
          />
        )}

        {/* Cinematic Multi-Layer Dark Botanical Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D06] via-[#050D06]/40 to-[#050D06]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050D06]/95 via-[#050D06]/60 to-[#050D06]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#050D06_80%)]" />

        {/* Atmospheric Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Live Kitchen Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D2413]/85 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium tracking-tight mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <ChefHat className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="font-bold text-white">LIVE FROM OUR KITCHEN</span>
              <span className="text-emerald-700">|</span>
              <span className="text-emerald-200">SIDCO Lassipora, Pulwama</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              Where Himalayan Heritage <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] italic font-serif">
                Meets Modern Nutrition
              </span>
            </h2>

            {/* Hand-lettered Cursive Flourish */}
            <div className="mb-4">
              <span className="font-cursive text-2xl sm:text-3xl text-amber-300 drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
                Handcrafted in small fresh batches...
              </span>
            </div>

            {/* Storytelling Description */}
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mb-8 font-sans">
              Watch our food artisans formulate conscious bakery favourites in real time. We replace refined maida with indigenous water chestnut (Singhara) and mountain millets, gently sweetened with pure Medjool dates and zero refined sugar.
            </p>

            {/* Micro Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-8">
              <div className="glass-card-dark rounded-2xl p-3.5 border border-amber-500/20 backdrop-blur-md">
                <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Maida-Free</span>
                </div>
                <p className="text-xs text-gray-300">Singhara & Himalayan millet dough</p>
              </div>

              <div className="glass-card-dark rounded-2xl p-3.5 border border-amber-500/20 backdrop-blur-md">
                <div className="text-[11px] font-mono text-[#F59E0B] font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Zero White Sugar</span>
                </div>
                <p className="text-xs text-gray-300">Naturally sweet date puree</p>
              </div>

              <div className="glass-card-dark rounded-2xl p-3.5 border border-amber-500/20 backdrop-blur-md">
                <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Trans Fats</span>
                </div>
                <p className="text-xs text-gray-300">Cold-pressed & authentic fats</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getGeneralWhatsAppUrl("Hello KFGFoods! I saw your kitchen craftsmanship video and would like to order freshly baked batches.")}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-btn text-[#08120A] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-xl flex items-center gap-2 active:scale-95 transition-all"
              >
                <span>Order Fresh From This Batch</span>
                <ArrowRight className="w-4 h-4 text-[#08120A]" />
              </a>

              <a
                href="#products"
                className="gold-outline-btn text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-full transition-all active:scale-95"
              >
                Explore Recipe SKUs
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Video Controller Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="glass-card-dark rounded-3xl p-5 sm:p-6 border border-amber-500/30 shadow-2xl backdrop-blur-xl w-full max-w-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {isPlaying ? "Playing In Background" : "Video Paused"}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                  1080p FHD
                </span>
              </div>

              {/* Video Controls Bar */}
              <div className="bg-[#050D06] rounded-2xl p-3 border border-white/10 flex items-center justify-between gap-3 mb-4">
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-all active:scale-95 cursor-pointer"
                  aria-label={isPlaying ? "Pause background video" : "Play background video"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 text-[#F59E0B]" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current text-[#F59E0B]" />
                      <span>Play</span>
                    </>
                  )}
                </button>

                {/* Sound Button */}
                <button
                  onClick={toggleMute}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all active:scale-95 cursor-pointer ${
                    isMuted
                      ? "bg-white/10 text-gray-300 hover:text-white"
                      : "bg-emerald-500 text-black font-bold shadow-[0_0_12px_#22C55E]"
                  }`}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-gray-400" />
                      <span>Sound Off</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 fill-current text-black" />
                      <span>Sound On</span>
                    </>
                  )}
                </button>
              </div>

              {/* Batch Metadata */}
              <div className="space-y-2 text-xs text-gray-300 font-sans border-t border-white/10 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white font-medium">IGC SIDCO Lassipora</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Key Ingredient:</span>
                  <span className="text-amber-300 font-medium">Singhara (Gaad) Flour</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Sweetening:</span>
                  <span className="text-emerald-300 font-medium">Zero Refined Sugar</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
