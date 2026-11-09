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
    <section id="evidence" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8EEE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D97706] mb-3 font-semibold">
            <FileCheck2 className="w-4 h-4 text-[#1B5E20]" />
            <span>Evidence-Informed Methodology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B5E20] leading-tight mb-4">
            Built on Research. Driven by Transparency.
          </h2>
          <p className="text-base sm:text-lg text-[#565e55]">
            Explore the peer-reviewed nutritional literature and biochemical principles that guide how we formulate our flours, alternative sweetening matrix, and functional staples.
          </p>
        </div>

        {/* COMPARISON TABLE: TRADITIONAL VS FRESHBIC */}
        <div className="bg-white rounded-3xl border border-[#E8EEE6] shadow-sm overflow-hidden mb-14">
          <div className="p-6 sm:p-8 bg-[#FAF8F5] border-b border-[#E8EEE6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#1B5E20] font-bold">
                Formulation Architecture
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#242923] mt-1">
                Conventional Commercial Bakery vs. FreshBic Formulation Approach
              </h3>
            </div>
            <span className="text-xs font-mono text-[#565e55] bg-white px-3 py-1.5 rounded-xl border border-[#E8EEE6] self-start sm:self-auto">
              6 Core Formulation Benchmarks
            </span>
          </div>

          {/* Responsive Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#E8EEE6] bg-white text-xs font-mono uppercase tracking-wider text-[#565e55]">
                  <th className="py-4 px-6 w-1/4">Formulation Dimension</th>
                  <th className="py-4 px-6 w-1/3 text-gray-500">Conventional Approach</th>
                  <th className="py-4 px-6 w-1/3 text-[#1B5E20] bg-emerald-50/50">FreshBic Formulation Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EEE6] text-xs sm:text-sm">
                {FORMULATION_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5]/80 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-[#242923] align-top">
                      {row.dimension}
                      <span className="block text-[11px] font-sans font-normal text-[#768075] mt-1">
                        {row.scientificContext}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[#565e55] align-top bg-gray-50/40">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{row.traditionalApproach}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#1B5E20] font-medium align-top bg-emerald-50/30">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                        <span>{row.freshBicApproach}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#FAF8F5] border-t border-[#E8EEE6] text-center text-[11px] text-[#565e55]">
            <strong>Note:</strong> Formulation profiles vary across individual recipe SKUs. Individual ingredient profiles are explicitly declared on corresponding packaging.
          </div>
        </div>

        {/* RESEARCH ACCORDION: FOR DOCTORS, NUTRITIONISTS & RESEARCHERS */}
        <div className="bg-white rounded-3xl border border-[#E8EEE6] shadow-sm overflow-hidden mb-12">
          <button
            onClick={() => setResearchAccordionOpen(!researchAccordionOpen)}
            className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-[#FAF8F5] transition-colors focus:outline-none"
            aria-expanded={researchAccordionOpen}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#E8EEE6] text-[#1B5E20] flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#D97706] font-bold">
                  Peer-Reviewed Citations & Bibliographic Evidence
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#242923] mt-0.5">
                  For Doctors, Nutritionists & Researchers
                </h3>
                <p className="text-xs text-[#565e55] mt-1">
                  Access 9 landmark clinical and biochemical studies underpinning low-GI flours, prebiotic fibres, and sugar alternatives.
                </p>
              </div>
            </div>

            <ChevronDown
              className={`w-6 h-6 text-[#1B5E20] transition-transform duration-300 ${
                researchAccordionOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {researchAccordionOpen && (
            <div className="px-6 pb-8 pt-2 border-t border-[#E8EEE6] bg-[#FAF8F5] animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {SCIENTIFIC_REFERENCES.map((ref: ScientificReference) => {
                  const isExpanded = selectedReference === ref.id;

                  return (
                    <div
                      key={ref.id}
                      className="bg-white rounded-2xl p-5 border border-[#E8EEE6] hover:border-[#1B5E20]/40 transition-all flex flex-col justify-between shadow-xs"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-[#D97706] mb-2 font-bold">
                          <span>Ref #{ref.id} • {ref.year}</span>
                          <span className="text-[10px] bg-[#E8EEE6] text-[#1B5E20] px-2 py-0.5 rounded">
                            Peer Reviewed
                          </span>
                        </div>

                        <h4 className="font-serif font-bold text-sm text-[#242923] mb-1.5 leading-snug">
                          {ref.title}
                        </h4>

                        <div className="text-xs text-[#1B5E20] font-medium mb-1">
                          {ref.authors}
                        </div>

                        <div className="text-xs font-mono text-[#768075] italic mb-3">
                          {ref.journal}
                        </div>

                        <p className="text-xs text-[#565e55] leading-relaxed mb-4 bg-[#FAF8F5] p-2.5 rounded-xl border border-[#E8EEE6]">
                          <strong className="text-[#242923] block text-[11px] font-mono not-italic uppercase mb-0.5">
                            Relevance to Formulation:
                          </strong>
                          {ref.relevance}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E8EEE6] flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#768075] truncate max-w-[150px]">
                          DOI: {ref.doi}
                        </span>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#1B5E20] hover:text-[#144718] font-bold hover:underline"
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
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3.5 text-left">
          <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#78350f] leading-relaxed">
            <strong className="font-semibold text-[#242923]">General Scientific Background & Clinical Trial Distinction:</strong>{" "}
            The scientific studies referenced above are published academic investigations in medical journals regarding general human physiology, the glycemic index of unrefined grains, short-chain fatty acids, and the cardiometabolic impact of trans-fats and sucrose. KFG Foods does not claim that these third-party publications constitute direct clinical trials of FreshBic finished products, nor do they imply that FreshBic baked goods replace prescribed medications or personalized clinical care.
          </div>
        </div>

      </div>
    </section>
  );
}
