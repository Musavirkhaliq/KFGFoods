"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  ChefHat,
  Sparkles,
  ShieldCheck,
  Flame,
  ArrowRight,
  MapPin,
  Clock,
  Heart,
  Droplets,
  Award,
} from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

const TOTAL_FRAMES = 120;

export default function CraftsmanshipVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const animFrameId = useRef<number | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFrameDisplay, setActiveFrameDisplay] = useState(1);
  const [isReady, setIsReady] = useState(false);

  // Helper for frame path
  const getFramePath = useCallback((index: number) => {
    const pad = String(index).padStart(4, "0");
    return `/frames/frame_${pad}.jpg`;
  }, []);

  // Draw frame with object-fit: cover
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find closest loaded frame fallback
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = imagesRef.current[Math.max(0, frameIndex - 1 - offset)];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[Math.min(TOTAL_FRAMES - 1, frameIndex - 1 + offset)];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Preload frames progressively
  useEffect(() => {
    let isMounted = true;

    // Load Frame 1 immediately
    const firstImg = new window.Image();
    firstImg.src = getFramePath(1);
    firstImg.onload = () => {
      if (!isMounted) return;
      imagesRef.current[0] = firstImg;
      setIsReady(true);
      renderFrame(1);
    };

    // Preload remaining frames in smooth background batches
    const loadBatch = async () => {
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        if (!isMounted) break;
        const img = new window.Image();
        img.src = getFramePath(i);
        img.onload = () => {
          if (!isMounted) return;
          imagesRef.current[i - 1] = img;
        };
        if (i % 6 === 0) {
          await new Promise((r) => setTimeout(r, 16));
        }
      }
    };

    loadBatch();

    return () => {
      isMounted = false;
    };
  }, [getFramePath, renderFrame]);

  // High-DPI canvas resizing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  // Smooth scroll listener & interpolation loop (lerp)
  useEffect(() => {
    let ticking = false;

    const animate = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.25;
        const roundedFrame = Math.round(currentFrameRef.current);
        renderFrame(roundedFrame);
        setActiveFrameDisplay(roundedFrame);
      }
      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const container = containerRef.current;
          if (container) {
            const rect = container.getBoundingClientRect();
            const totalScrollable = rect.height - window.innerHeight;

            if (totalScrollable > 0) {
              const rawProgress = -rect.top / totalScrollable;
              const progress = Math.min(1, Math.max(0, rawProgress));
              setScrollProgress(progress);

              const target = Math.min(
                TOTAL_FRAMES,
                Math.max(1, Math.floor(progress * (TOTAL_FRAMES - 1)) + 1)
              );
              targetFrameRef.current = target;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [renderFrame]);

  // Compute active narrative chapter
  const getActiveChapter = () => {
    if (scrollProgress < 0.25) return 0;
    if (scrollProgress < 0.55) return 1;
    if (scrollProgress < 0.80) return 2;
    return 3;
  };

  const activeChapter = getActiveChapter();

  return (
    <section
      ref={containerRef}
      id="craftsmanship"
      aria-label="Artisanal Kitchen Craftsmanship"
      className="relative w-full h-[320vh] bg-[#071109]"
    >
      {/* Sticky Full-Viewport Cinematic Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Full-Bleed Living Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
          style={{
            width: "100vw",
            height: "100vh",
            filter: "contrast(1.08) saturate(1.15) brightness(0.96)",
          }}
        />

        {/* Directional Vignette: Left side dark for razor-sharp text; Right side 100% clear for chef footage */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071109]/95 via-[#071109]/60 to-transparent hidden lg:block pointer-events-none" />
        
        {/* Mobile Vertical Gradient: Top clear for video; Bottom dark for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071109]/95 via-[#071109]/60 to-transparent lg:hidden pointer-events-none" />

        {/* Subtle Top & Bottom Edge Blends */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#071109] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#071109] to-transparent pointer-events-none" />

        {/* Foreground Editorial Storytelling (Floating on the Left) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Story Container (Left 7 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left pt-12 sm:pt-0">
              
              {/* Kitchen Origin Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D2413]/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium tracking-tight mb-4 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <ChefHat className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span className="font-bold text-white">ARTISANAL KITCHEN</span>
                <span className="text-emerald-700">|</span>
                <span className="text-emerald-200">SIDCO Lassipora, Pulwama</span>
              </div>

              {/* Dynamic Chapter Content with Silky Cross-Fade */}
              <div className="relative min-h-[260px] sm:min-h-[280px] w-full">
                
                {/* Chapter 0: Indigenous Flours (Frames 1-30) */}
                <div
                  className={`transition-all duration-500 ease-out absolute inset-0 ${
                    activeChapter === 0
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-2 block">
                    Phase 1 • Himalayan Ingredients
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    Pure Water Chestnut <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] italic font-serif">
                      & Mountain Millets
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl mb-5 font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    We replace refined commercial maida with indigenous water chestnut (Singhara) sourced from Kashmir&apos;s pristine wetlands and stone-ground Himalayan millets.
                  </p>
                  <div className="inline-flex items-center gap-3 text-xs font-mono text-emerald-300 bg-[#061208]/85 px-4 py-2 rounded-full border border-emerald-500/30 backdrop-blur-md">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% Maida-Free • Zero Wheat Gluten</span>
                  </div>
                </div>

                {/* Chapter 1: Natural Sweetening (Frames 31-65) */}
                <div
                  className={`transition-all duration-500 ease-out absolute inset-0 ${
                    activeChapter === 1
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold mb-2 block">
                    Phase 2 • Conscious Sweetening
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    Sweetness for Life <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] italic font-serif">
                      Without Sugar
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl mb-5 font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    Zero refined white sugar. Every single batch is gently sweetened with pure Medjool date puree, providing rich dietary fibre, minerals, and sustained energy without rapid glucose spikes.
                  </p>
                  <div className="inline-flex items-center gap-3 text-xs font-mono text-amber-300 bg-[#061208]/85 px-4 py-2 rounded-full border border-amber-500/30 backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                    <span>0g Refined Sugar • Low Glycemic Response</span>
                  </div>
                </div>

                {/* Chapter 2: Artisan Hand-Kneading (Frames 66-95) */}
                <div
                  className={`transition-all duration-500 ease-out absolute inset-0 ${
                    activeChapter === 2
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-2 block">
                    Phase 3 • Handcrafted Technique
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    Hand-Kneaded in <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] italic font-serif">
                      Small Fresh Batches
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl mb-5 font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    Watch our food artisans shape dough using authentic Kashmiri techniques. No industrial extruders or automated factories — just pure mindful culinary patience and cold-pressed authentic fats.
                  </p>
                  <div className="inline-flex items-center gap-3 text-xs font-mono text-emerald-300 bg-[#061208]/85 px-4 py-2 rounded-full border border-emerald-500/30 backdrop-blur-md">
                    <Flame className="w-4 h-4 text-emerald-400" />
                    <span>Zero Hydrogenated Trans Fats</span>
                  </div>
                </div>

                {/* Chapter 3: Fresh Baked & Ready (Frames 96-120) */}
                <div
                  className={`transition-all duration-500 ease-out absolute inset-0 ${
                    activeChapter === 3
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold mb-2 block">
                    Phase 4 • Fresh From Our Oven
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    Wholesome Food, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] italic font-serif">
                      Happier You!
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl mb-6 font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    Aromatic, crisp, and golden. FreshBic conscious bakery favourites are delivered fresh across Jammu & Kashmir and across India directly from our Lassipora facility.
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={getGeneralWhatsAppUrl("Hello KFGFoods! I saw your kitchen craftsmanship video and would like to order fresh batches.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-gradient-btn text-[#08120A] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-2 active:scale-95 transition-all"
                    >
                      <span>Order Fresh From This Batch</span>
                      <ArrowRight className="w-4 h-4 text-[#08120A]" />
                    </a>

                    <a
                      href="#products"
                      className="gold-outline-btn text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-full transition-all active:scale-95"
                    >
                      Explore All 22 SKUs
                    </a>
                  </div>
                </div>

              </div>

              {/* Scroll Scrub Helper Prompt */}
              {activeChapter < 3 ? (
                <div className="mt-8 sm:mt-10 hidden sm:flex items-center gap-2 text-xs font-mono text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                  <span>Scroll down to continue the kitchen story</span>
                  <span className="text-amber-400">↓</span>
                </div>
              ) : (
                <div className="mt-8 sm:mt-10 hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Scroll to explore full product catalogue & science</span>
                  <span className="text-emerald-400">↓</span>
                </div>
              )}

            </div>

            {/* Right Column (Open Viewport for the Chef) */}
            <div className="hidden lg:flex lg:col-span-5 flex-col items-end justify-end pointer-events-none">
              <div className="bg-[#050D06]/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3">
                <ChefHat className="w-4 h-4 text-[#F59E0B]" />
                <div className="text-right">
                  <div className="text-[11px] font-mono font-bold text-white">
                    PULWAMA ARTISANAL KITCHEN
                  </div>
                  <div className="text-[10px] text-gray-300 font-mono">
                    Frame {activeFrameDisplay}/120 • 60 FPS Scroll Scrub
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Minimalist Gold Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-amber-300 transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

      </div>
    </section>
  );
}
