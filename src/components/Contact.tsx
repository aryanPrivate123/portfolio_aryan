import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, ArrowUpRight, Copy, Check, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const email = 'shindearyan1911@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/aryan-shinde-045441380';
  const githubUrl = 'https://github.com/Eclipse1911';
  const instagramUrl = 'https://www.instagram.com/aryan_shinde1234?stkn=bGdzMXZ1a2diaGty';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#090a0e] relative overflow-hidden">
      {/* Background Accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#E5FE40]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#E5FE40] uppercase">
            LET'S COLLABORATE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Massive Headline & Supporting Text */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-display leading-[0.88] mb-8">
              LET'S BUILD<br />
              <span className="text-[#285CF6]">SOMETHING</span><br />
              <span className="text-[#E5FE40]">USEFUL.</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/80 max-w-xl font-light leading-relaxed">
              Interested in AI/ML, full-stack development, or innovative technology projects? Let's connect.
            </p>

            {/* Direct Mailto Primary Button */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#E5FE40] hover:bg-[#d8f030] text-black text-sm font-black tracking-wider uppercase transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-yellow-400/10"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#E5FE40]" />
                    <span className="text-[#E5FE40]">COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Connection Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            
            {/* Email Card */}
            <a
              href={`mailto:${email}`}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#285CF6] transition-all group flex items-start justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider mb-1.5">
                  <Mail className="w-4 h-4 text-[#285CF6]" />
                  <span>DIRECT EMAIL</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5FE40] transition-colors break-all">
                  {email}
                </p>
                <span className="text-xs text-blue-300/70 mt-0.5 block">
                  Click to launch mail client
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#285CF6] transition-all group flex items-start justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider mb-1.5">
                  <Linkedin className="w-4 h-4 text-[#285CF6]" />
                  <span>LINKEDIN NETWORK</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5FE40] transition-colors">
                  Aryan Shinde
                </p>
                <span className="text-xs text-white/40 font-mono mt-0.5 block">
                  linkedin.com/in/aryan-shinde-045441380
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#285CF6] transition-all group flex items-start justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider mb-1.5">
                  <Github className="w-4 h-4 text-[#285CF6]" />
                  <span>GITHUB CODEBASE</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5FE40] transition-colors">
                  Eclipse1911
                </p>
                <span className="text-xs text-white/40 font-mono mt-0.5 block">
                  github.com/Eclipse1911
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Instagram Card */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#285CF6] transition-all group flex items-start justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider mb-1.5">
                  <Instagram className="w-4 h-4 text-[#285CF6]" />
                  <span>INSTAGRAM</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5FE40] transition-colors">
                  @aryan_shinde1234
                </p>
                <span className="text-xs text-white/40 font-mono mt-0.5 block">
                  instagram.com/aryan_shinde1234
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
