import React from 'react';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Sparkles, Terminal } from 'lucide-react';
import { ProfileImage } from './ProfileImage';
import { MARQUEE_ITEMS } from '../data/skills';

export const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-6 flex flex-col justify-between overflow-hidden bg-[#0b0c10]">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Main Electric Blue Stage Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-auto relative z-10">
        <div className="relative rounded-3xl bg-[#285CF6] overflow-hidden shadow-[0_25px_70px_rgba(40,92,246,0.25)] border border-blue-400/30">
          
          {/* Subtle Ambient Radial Glow on Blue */}
          <div 
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-950/30 blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Grid Layout: Left Typography, Center Portrait, Right Headline & Social */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-end pt-5 sm:pt-6 lg:pt-8 px-6 sm:px-10 lg:px-12 min-h-[580px] lg:min-h-[660px]">
            
            {/* LEFT COLUMN: Lead Title & Intro Bio */}
            <div className="lg:col-span-4 z-20 flex flex-col justify-between pb-8 sm:pb-12 text-white">
              <div>
                {/* Lead Headline: Hi, I am (small) & Aryan Shinde (big) */}
                <div>
                  <span className="block text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide text-blue-100 font-sans mb-1">
                    Hi, I am
                  </span>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[92px] xl:text-[104px] font-black leading-[0.85] tracking-tight uppercase font-display text-white drop-shadow-sm">
                    ARYAN<br />
                    SHINDE
                  </h1>
                </div>
              </div>

              {/* Bio & Intro Block */}
              <div className="mt-8 lg:mt-12 pt-6 border-t border-white/20 max-w-sm">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E5FE40] mb-2 font-mono">
                  BUILDING INTELLIGENT DIGITAL EXPERIENCES
                </p>
                <p className="text-sm text-blue-50/90 leading-relaxed font-normal">
                  Third-year Computer Science Engineering student with experience in AI/ML, full-stack development, and hackathons. I build practical technology solutions using machine learning, modern web technologies, and collaborative development.
                </p>

                {/* Supporting Tagline */}
                <div className="mt-4 flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-[#E5FE40]">
                  <span>AI</span>
                  <span>•</span>
                  <span>MACHINE LEARNING</span>
                  <span>•</span>
                  <span>FULL-STACK</span>
                </div>

                {/* Primary CTA */}
                <div className="mt-6">
                  <a
                    href="#projects"
                    onClick={handleScrollToProjects}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E5FE40] hover:bg-[#d8f030] text-black text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-black/20"
                  >
                    <span>VIEW MY WORK</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN: Large Portrait Silhouette / Cutout Slot */}
            <div className="lg:col-span-4 z-30 flex justify-center items-end mt-8 lg:mt-0">
              <div className="w-full flex flex-col items-center">
                <ProfileImage />

                {/* Social links directly underneath portrait */}
                <div className="flex items-center justify-center gap-3.5 py-4 w-full border-t border-white/20 bg-blue-700/30 backdrop-blur-xs rounded-b-2xl">
                  <a
                    href="https://github.com/Eclipse1911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#E5FE40] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <span className="text-white/40">·</span>
                  <a
                    href="https://www.linkedin.com/in/aryan-shinde-045441380"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#E5FE40] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-white/40">·</span>
                  <a
                    href="https://www.instagram.com/aryan_shinde1234?stkn=bGdzMXZ1a2diaGty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#E5FE40] transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Follow Me & Massive Full-Stack Typography */}
            <div className="lg:col-span-4 z-20 flex flex-col justify-between items-start lg:items-end text-left lg:text-right pb-8 sm:pb-12 mt-8 lg:mt-0 text-white">
              
              {/* Follow Me & Quick Info Card */}
              <div className="w-full lg:max-w-[280px] bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between lg:justify-end gap-3 mb-3">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/90 font-mono">
                    FOLLOW ME
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/Eclipse1911"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#285CF6] flex items-center justify-center transition-all"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aryan-shinde-045441380"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#285CF6] flex items-center justify-center transition-all"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/aryan_shinde1234?stkn=bGdzMXZ1a2diaGty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#285CF6] flex items-center justify-center transition-all"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-blue-100 leading-relaxed font-light">
                  Focused on computer vision, intelligent systems, and end-to-end full stack architecture.
                </p>
              </div>

              {/* Massive Right Headline: Mirroring the Reference Image */}
              <div className="mt-8 lg:mt-12">
                <p className="text-xs sm:text-sm font-mono tracking-widest text-blue-100 uppercase mb-1">
                  SPECIALIZATION
                </p>
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black leading-[0.88] tracking-tight uppercase font-display text-white drop-shadow-sm">
                  AI / ML<br />
                  ENGINEER
                </h2>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Infinite Animated Marquee Ribbon */}
      <div className="w-full mt-8 py-3 bg-[#11131a] border-y border-white/10 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 text-xs sm:text-sm font-bold tracking-widest text-white/70 uppercase font-mono px-4">
            {MARQUEE_ITEMS.map((item, idx) => (
              <React.Fragment key={`marquee-1-${idx}`}>
                <span className="hover:text-[#E5FE40] transition-colors">{item}</span>
                <span className="text-[#285CF6] font-black">✦</span>
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-8 text-xs sm:text-sm font-bold tracking-widest text-white/70 uppercase font-mono px-4" aria-hidden="true">
            {MARQUEE_ITEMS.map((item, idx) => (
              <React.Fragment key={`marquee-2-${idx}`}>
                <span className="hover:text-[#E5FE40] transition-colors">{item}</span>
                <span className="text-[#285CF6] font-black">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
