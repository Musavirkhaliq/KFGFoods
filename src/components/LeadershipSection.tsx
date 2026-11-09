"use client";

import React from "react";
import { Users, GraduationCap, Compass, Briefcase, Award } from "lucide-react";
import { EXECUTIVE_TEAM, ADVISORY_BOARD, Leader, Advisor } from "@/data/leadership";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8EEE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D97706] mb-3 font-semibold bg-white px-3.5 py-1 rounded-full border border-[#E8EEE6]">
            <Users className="w-3.5 h-3.5 text-[#1B5E20]" />
            <span>Governance & Domain Stewardship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B5E20] leading-tight mb-4">
            Driven by Vision. Guided by Experience.
          </h2>
          <p className="text-base sm:text-lg text-[#565e55]">
            Combining decades of educational leadership, engineering rigor, industrial consulting, and culinary innovation to build Kashmir’s premier preventive food enterprise.
          </p>
        </div>

        {/* CORE EXECUTIVE TEAM */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E8EEE6]">
            <h3 className="font-serif text-2xl font-bold text-[#242923]">
              Core Executive Leadership
            </h3>
            <span className="text-xs font-mono text-[#565e55] bg-white px-3 py-1 rounded-full border border-[#E8EEE6]">
              Board of Directors
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXECUTIVE_TEAM.map((exec: Leader, idx: number) => {
              // Extract initials
              const initials = exec.name
                .split(" ")
                .filter(Boolean)
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-[#E8EEE6] hover:border-[#1B5E20]/40 transition-all hover:shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    {/* Respectful Initials Badge Avatar */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#E8EEE6] text-[#1B5E20] font-serif font-black text-xl flex items-center justify-center group-hover:bg-[#1B5E20] group-hover:text-white transition-colors border border-[#CBD5E1]/60">
                        {initials}
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-[#FAF8F5] text-[#D97706] font-bold px-2 py-0.5 rounded border border-[#E8EEE6]">
                        {exec.tag}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-xl text-[#242923] mb-1 group-hover:text-[#1B5E20] transition-colors">
                      {exec.name}
                    </h4>

                    <div className="text-xs font-mono text-[#1B5E20] font-semibold mb-0.5">
                      {exec.role}
                    </div>

                    <div className="text-xs font-mono text-[#768075] mb-4">
                      {exec.department}
                    </div>

                    <p className="text-xs text-[#565e55] leading-relaxed">
                      {exec.background}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8EEE6] text-[10px] font-mono text-[#768075]">
                    KFG Foods Private Limited
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MENTORS & DOMAIN ADVISORY BOARD */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E8EEE6]">
            <h3 className="font-serif text-2xl font-bold text-[#242923]">
              Mentors & Domain Advisory Board
            </h3>
            <span className="text-xs font-mono text-[#565e55] bg-white px-3 py-1 rounded-full border border-[#E8EEE6]">
              Academic & Industrial Mentors
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVISORY_BOARD.map((adv: Advisor, idx: number) => {
              const initials = adv.name
                .replace(/(Prof\.|Mr\.|Er\.|Dr\.)/g, "")
                .trim()
                .split(" ")
                .filter(Boolean)
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-[#E8EEE6] hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#242923] font-serif font-bold text-base flex items-center justify-center mb-4 border border-[#E8EEE6]">
                      {initials}
                    </div>

                    <h4 className="font-serif font-bold text-base text-[#242923] mb-1">
                      {adv.name}
                    </h4>

                    <div className="text-xs font-mono text-[#D97706] font-semibold mb-1">
                      {adv.designation}
                    </div>

                    <div className="text-xs font-medium text-[#1B5E20] mb-3">
                      {adv.organization}
                    </div>

                    <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8EEE6] text-xs text-[#565e55]">
                      <span className="text-[10px] font-mono uppercase text-[#768075] block font-semibold mb-0.5">
                        Domain Mentorship:
                      </span>
                      {adv.domain}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8EEE6] text-[10px] font-mono text-[#768075]">
                    Advisory Council
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
