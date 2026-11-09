"use client";

import React from "react";
import { Users, GraduationCap, Compass, Briefcase, Award } from "lucide-react";
import { EXECUTIVE_TEAM, ADVISORY_BOARD, Leader, Advisor } from "@/data/leadership";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-16 lg:py-24 bg-[#08120A] border-b border-emerald-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F59E0B] mb-3 font-semibold bg-[#0D2213] px-3.5 py-1 rounded-full border border-emerald-500/30">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>Governance & Domain Stewardship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Driven by Vision. Guided by Experience.
          </h2>
          <p className="text-sm sm:text-base text-[#A1B0A4]">
            Combining decades of educational leadership, engineering rigor, industrial consulting, and culinary innovation to build Kashmir’s premier preventive food enterprise.
          </p>
        </div>

        {/* CORE EXECUTIVE TEAM */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <h3 className="font-serif text-2xl font-bold text-white">
              Core Executive Leadership
            </h3>
            <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/40">
              Board of Directors
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXECUTIVE_TEAM.map((exec: Leader, idx: number) => {
              const initials = exec.name
                .split(" ")
                .filter(Boolean)
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

              return (
                <div
                  key={idx}
                  className="glass-card-dark rounded-3xl p-6 border border-white/10 hover:border-amber-500/40 transition-all hover:shadow-2xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Initials Badge Avatar */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0F2D17] to-[#0A1F10] text-[#F59E0B] font-serif font-black text-xl flex items-center justify-center group-hover:scale-105 transition-transform border border-amber-500/30 shadow-md">
                        {initials}
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-black/50 text-[#F59E0B] font-bold px-2 py-0.5 rounded border border-amber-500/30">
                        {exec.tag}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-xl text-white mb-1 group-hover:text-[#F59E0B] transition-colors">
                      {exec.name}
                    </h4>

                    <div className="text-xs font-mono text-emerald-400 font-semibold mb-0.5">
                      {exec.role}
                    </div>

                    <div className="text-xs font-mono text-gray-400 mb-4">
                      {exec.department}
                    </div>

                    <p className="text-xs text-[#A1B0A4] leading-relaxed">
                      {exec.background}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 text-[10px] font-mono text-gray-400">
                    KFG Foods Private Limited
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MENTORS & DOMAIN ADVISORY BOARD */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <h3 className="font-serif text-2xl font-bold text-white">
              Mentors & Domain Advisory Board
            </h3>
            <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/40">
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
                  className="glass-card-dark rounded-3xl p-6 border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-black/40 text-gray-200 font-serif font-bold text-base flex items-center justify-center mb-4 border border-white/10">
                      {initials}
                    </div>

                    <h4 className="font-serif font-bold text-base text-white mb-1">
                      {adv.name}
                    </h4>

                    <div className="text-xs font-mono text-[#F59E0B] font-semibold mb-1">
                      {adv.designation}
                    </div>

                    <div className="text-xs font-medium text-emerald-300 mb-3">
                      {adv.organization}
                    </div>

                    <div className="bg-black/50 p-3 rounded-xl border border-white/10 text-xs text-[#A1B0A4]">
                      <span className="text-[10px] font-mono uppercase text-gray-400 block font-semibold mb-0.5">
                        Domain Mentorship:
                      </span>
                      {adv.domain}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-gray-400">
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
