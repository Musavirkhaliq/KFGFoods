"use client";

import React, { useState } from "react";
import {
  BookOpen,
  ExternalLink,
  ChevronDown,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  Check,
  X,
} from "lucide-react";
import {
  FORMULATION_COMPARISON,
  SCIENTIFIC_REFERENCES,
  ScientificReference,
} from "@/data/evidence";

export default function ScientificEvidence() {
  const [researchAccordionOpen, setResearchAccordionOpen] = useState(false);
  const [selectedReference, setSelectedReference] = useState<number | null>(null);

  return (
    <section id="evidence" className="py-16 lg:py-24 bg-[#08120A] border-b border-emerald-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F59E0B] mb-3 font-semibold bg-[#0D2213] px-3.5 py-1 rounded-full border border-emerald-500/30">
            <FileCheck2 className="w-4 h-4 text-emerald-400" />
            <span>Evidence-Informed Methodology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Built on Research. Driven by Transparency.
          </h2>
          <p className="text-sm sm:text-base text-[#A1B0A4]">
            Explore the peer-reviewed nutritional literature and biochemical principles that guide how we formulate our flours, alternative sweetening matrix, and functional staples.
          </p>
        </div>

        {/* COMPARISON TABLE: TRADITIONAL VS FRESHBIC */}
        <div className="glass-card-dark rounded-3xl border border-amber-500/25 shadow-2xl overflow-hidden mb-14">
          <div className="p-6 sm:p-8 bg-[#09180E] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] font-bold">
                Formulation Architecture
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                Conventional Commercial Bakery vs. FreshBic Formulation Approach
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-800/40 self-start sm:self-auto">
              6 Core Formulation Benchmarks
            </span>
          </div>

          {/* Responsive Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-black/40 text-xs font-mono uppercase tracking-wider text-gray-400">
                  <th className="py-4 px-6 w-1/4">Formulation Dimension</th>
                  <th className="py-4 px-6 w-1/3 text-gray-400">Conventional Approach</th>
                  <th className="py-4 px-6 w-1/3 text-emerald-300 bg-emerald-950/30">FreshBic Formulation Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {FORMULATION_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-white align-top">
                      {row.dimension}
                      <span className="block text-[11px] font-sans font-normal text-[#A1B0A4] mt-1">
                        {row.scientificContext}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-400 align-top bg-black/20">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{row.traditionalApproach}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-200 font-medium align-top bg-emerald-950/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{row.freshBicApproach}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-black/40 border-t border-white/10 text-center text-[11px] text-gray-400">
            <strong className="text-gray-300">Note:</strong> Formulation profiles vary across individual recipe SKUs. Individual ingredient profiles are explicitly declared on corresponding packaging.
          </div>
        </div>

        {/* RESEARCH ACCORDION */}
        <div className="glass-card-dark rounded-3xl border border-amber-500/25 shadow-2xl overflow-hidden mb-12">
          <button
            onClick={() => setResearchAccordionOpen(!researchAccordionOpen)}
            className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
            aria-expanded={researchAccordionOpen}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] font-bold">
                  Peer-Reviewed Citations & Bibliographic Evidence
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                  For Doctors, Nutritionists & Researchers
                </h3>
                <p className="text-xs text-[#A1B0A4] mt-1">
                  Access 9 landmark clinical and biochemical studies underpinning low-GI flours, prebiotic fibres, and sugar alternatives.
                </p>
              </div>
            </div>

            <ChevronDown
              className={`w-6 h-6 text-[#F59E0B] transition-transform duration-300 ${
                researchAccordionOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {researchAccordionOpen && (
            <div className="px-6 pb-8 pt-2 border-t border-white/10 bg-black/40 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {SCIENTIFIC_REFERENCES.map((ref: ScientificReference) => {
                  return (
                    <div
                      key={ref.id}
                      className="glass-card-dark rounded-2xl p-5 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-lg"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-[#F59E0B] mb-2 font-bold">
                          <span>Ref #{ref.id} • {ref.year}</span>
                          <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800/40 px-2 py-0.5 rounded">
                            Peer Reviewed
                          </span>
                        </div>

                        <h4 className="font-serif font-bold text-sm text-white mb-1.5 leading-snug">
                          {ref.title}
                        </h4>

                        <div className="text-xs text-emerald-300 font-medium mb-1">
                          {ref.authors}
                        </div>

                        <div className="text-xs font-mono text-gray-400 italic mb-3">
                          {ref.journal}
                        </div>

                        <p className="text-xs text-gray-300 leading-relaxed mb-4 bg-black/50 p-2.5 rounded-xl border border-white/10">
                          <strong className="text-[#F59E0B] block text-[11px] font-mono not-italic uppercase mb-0.5">
                            Relevance to Formulation:
                          </strong>
                          {ref.relevance}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-gray-400 truncate max-w-[150px]">
                          DOI: {ref.doi}
                        </span>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F59E0B] hover:text-amber-300 font-bold hover:underline"
                        >
                          <span>Read Paper</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Responsible Scientific Disclaimer */}
        <div className="p-6 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-3.5 text-left">
          <AlertCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
            <strong className="font-semibold text-white">General Scientific Background & Clinical Trial Distinction:</strong>{" "}
            The scientific studies referenced above are published academic investigations in medical journals regarding general human physiology, the glycemic index of unrefined grains, short-chain fatty acids, and the cardiometabolic impact of trans-fats and sucrose. KFG Foods does not claim that these third-party publications constitute direct clinical trials of FreshBic finished products, nor do they imply that FreshBic baked goods replace prescribed medications or personalized clinical care.
          </div>
        </div>

      </div>
    </section>
  );
}
