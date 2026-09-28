import React from 'react';
import { Trophy, Award } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-[#0d0e14] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#E5FE40]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#E5FE40] uppercase">
            HONORS & RECOGNITION
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-display mb-16">
          ACHIEVEMENTS
        </h2>

        {/* High-Impact Editorial Achievement Display */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#285CF6] via-blue-700 to-indigo-900 p-8 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl border border-blue-400/30">
          
          {/* Subtle background trophy watermark */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none" aria-hidden="true">
            <Trophy className="w-96 h-96 text-white stroke-[1]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-mono font-bold uppercase tracking-widest mb-6">
              <Award className="w-4 h-4 text-[#E5FE40]" />
              <span>HACKATHON EXCELLENCE</span>
            </div>

            {/* Massive Heading as specified */}
            <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight font-display leading-[0.85] text-white">
              RANKED 4TH<br />
              <span className="text-[#E5FE40]">IN PUNE</span>
            </p>

            {/* Subtitle as specified */}
            <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold uppercase tracking-wide font-display text-blue-50">
                  Yi Future 6.0
                </p>
                <p className="text-sm text-blue-100/80 font-normal mt-1">
                  Competitive technology hackathon evaluating innovation, engineering rigor, and execution.
                </p>
              </div>

              <div className="shrink-0 text-left sm:text-right font-mono text-xs text-blue-200">
                <span className="block text-[#E5FE40] font-bold">VERIFIED RECOGNITION</span>
                <span>PUNE, MAHARASHTRA</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
