import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] border-t border-white/10 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <span className="text-2xl sm:text-3xl font-black uppercase font-display tracking-tight text-white">
              ARYAN SHINDE
            </span>
            <p className="text-xs font-mono text-white/50 tracking-widest uppercase mt-1">
              AI/ML ENGINEER • FULL-STACK DEVELOPER
            </p>
          </div>

          {/* Social & Contact Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/70">
            <a
              href="https://github.com/Eclipse1911"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5FE40] transition-colors"
            >
              GitHub
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://www.linkedin.com/in/aryan-shinde-045441380"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5FE40] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-white/20">·</span>
            <a
              href="mailto:shindearyan1911@gmail.com"
              className="hover:text-[#E5FE40] transition-colors"
            >
              Email
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#E5FE40] text-white group-hover:text-black flex items-center justify-center transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-mono gap-4">
          <p>© 2026 Aryan Shinde. All rights reserved.</p>
          <p>MIT World Peace University — Pune, India</p>
        </div>
      </div>
    </footer>
  );
};
