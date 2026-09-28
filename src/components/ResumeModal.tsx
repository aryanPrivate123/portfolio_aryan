import React, { useEffect } from 'react';
import { X, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Aryan Shinde Resume"
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl h-[95vh] max-h-[960px] bg-[#11131a] rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#0d0e14] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E5FE40]/10 border border-[#E5FE40]/30 flex items-center justify-center text-[#E5FE40]">
              <FileText className="w-4 h-4" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-wide font-display uppercase">
              ARYAN SHINDE RESUME
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors border border-white/10 cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Content Area - Full White Document Container */}
        <div className="flex-1 bg-[#090a0f] overflow-y-auto p-3 sm:p-6 lg:p-8 block">
          <div className="w-full max-w-[800px] mx-auto bg-white text-[#1f2937] p-6 sm:p-10 md:p-14 shadow-2xl rounded-lg font-sans h-auto min-h-fit selection:bg-[#0284c7]/20 selection:text-black">
            
            {/* Header: Name and Contact */}
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-[#0284c7] tracking-normal font-sans leading-tight">
                ARYAN SHINDE
              </h1>
              <p className="text-xs sm:text-[13px] text-[#4b5563] mt-2 font-normal">
                Pune, India 400067 &nbsp;|&nbsp; 9004723743 &nbsp;|&nbsp; shindearyan1911@gmail.com
              </p>
            </div>

            {/* SUMMARY Section */}
            <div className="mb-6">
              <h2 className="text-xs sm:text-[13px] font-bold text-[#0284c7] uppercase tracking-wider mb-1.5">
                SUMMARY
              </h2>
              <p className="text-[11px] sm:text-xs text-[#374151] leading-relaxed text-left">
                Third-year Computer Science Engineering student with experience in AI/ML, full-stack development, and hackathons. Skilled in developing web applications and applying machine learning techniques to solve real-world problems. Strong team player with experience in project management, collaborative development, and version control using Git. Passionate about building innovative, scalable, and practical technology solutions.
              </p>
            </div>

            {/* SKILLS & PROFILES Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
              {/* SKILLS */}
              <div className="md:col-span-8">
                <h2 className="text-xs sm:text-[13px] font-bold text-[#0284c7] uppercase tracking-wider mb-2">
                  SKILLS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px] sm:text-xs text-[#374151]">
                  <ul className="space-y-1">
                    <li className="flex items-start gap-1.5 text-[#374151]">
                      <span className="text-[#374151] leading-none mt-0.5">•</span>
                      <span>Web development</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[#374151]">
                      <span className="text-[#374151] leading-none mt-0.5">•</span>
                      <span>Full-stack development</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[#374151]">
                      <span className="text-[#374151] leading-none mt-0.5">•</span>
                      <span>Machine learning techniques</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[#374151]">
                      <span className="text-[#374151] leading-none mt-0.5">•</span>
                      <span>Version control systems</span>
                    </li>
                  </ul>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-1.5 text-[#374151]">
                      <span className="text-[#374151] leading-none mt-0.5">•</span>
                      <span>Team management</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[#374151]">
                      <span className="text-[#374151] leading-none mt-0.5">•</span>
                      <span>Leadership skills</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[#374151]">
                      <span className="text-[#374151] leading-none mt-0.5">•</span>
                      <span>Critical thinking</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[#374151]">
                      <span className="text-[#374151] leading-none mt-0.5">•</span>
                      <span>Team collaboration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* PROFILES */}
              <div className="md:col-span-4">
                <h2 className="text-xs sm:text-[13px] font-bold text-[#0284c7] uppercase tracking-wider mb-2">
                  PROFILES
                </h2>
                <div className="text-[11px] sm:text-xs text-[#374151] space-y-2">
                  <div>
                    <span className="flex items-center gap-1 font-semibold text-[#1f2937]">
                      <span>•</span> LinkedIn:
                    </span>
                    <a
                      href="https://www.linkedin.com/in/aryan-shinde-045441380"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] hover:underline break-all pl-3 block text-[11px]"
                    >
                      www.linkedin.com/in/aryan-shinde-045441380
                    </a>
                  </div>
                  <div>
                    <span className="flex items-center gap-1 font-semibold text-[#1f2937]">
                      <span>•</span> GitHub:
                    </span>
                    <a
                      href="https://github.com/Eclipse1911"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] hover:underline break-all pl-3 block text-[11px]"
                    >
                      https://github.com/Eclipse1911
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* EDUCATION AND TRAINING */}
            <div className="mb-6">
              <h2 className="text-xs sm:text-[13px] font-bold text-[#0284c7] uppercase tracking-wider mb-2.5">
                EDUCATION AND TRAINING
              </h2>
              <div className="space-y-3 text-[11px] sm:text-xs">
                <div className="grid grid-cols-12 gap-2 sm:gap-4 items-start">
                  <span className="font-bold text-[#1f2937] col-span-2 sm:col-span-1">2028</span>
                  <div className="col-span-10 sm:col-span-11">
                    <p className="font-bold text-[#1f2937]">Bachelor Of Technology: Computer Science Engineering</p>
                    <p className="text-[#6b7280]">MIT World Peace University - Pune</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 sm:gap-4 items-start">
                  <span className="font-bold text-[#1f2937] col-span-2 sm:col-span-1">2024</span>
                  <div className="col-span-10 sm:col-span-11">
                    <p className="font-bold text-[#1f2937]">Junior College</p>
                    <p className="text-[#6b7280]">Pace Junior College - Kandivali, Mumbai</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 sm:gap-4 items-start">
                  <span className="font-bold text-[#1f2937] col-span-2 sm:col-span-1">2022</span>
                  <div className="col-span-10 sm:col-span-11">
                    <p className="font-bold text-[#1f2937]">High School</p>
                    <p className="text-[#6b7280]">Oxford Public School - Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start">
                <h2 className="text-xs sm:text-[13px] font-bold text-[#0284c7] uppercase tracking-wider sm:col-span-2">
                  PROJECTS
                </h2>

                <div className="sm:col-span-10 space-y-4 text-[11px] sm:text-xs text-[#374151]">
                  {/* SignBridge */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-1.5 font-bold text-[#1f2937]">
                      <span className="text-[#111827]">SignBridge</span>
                      <span className="text-[#9ca3af] font-normal">|</span>
                      <span className="font-normal text-[#4b5563]">Python, ML, Computer Vision, ANN, MediaPipe</span>
                    </div>
                    <ul className="mt-1 space-y-1 text-[#374151]">
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Developed a real-time Indian Sign Language (ISL) recognition system using MediaPipe hand landmarks and a Keras MLP model.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Trained the MVP to recognize 35 static ISL classes (A-Z, 1-9) from camera input.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Implemented wrist relative landmark normalization to create a lightweight 42-feature representation for classification.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Integrated AI-based sentence reconstruction to convert recognized sign sequences into meaningful text.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Added English, Hindi and Marathi language output with optional browser-based Text-to-Speech.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Built an interactive ISL Learn Mode for users to learn and practice supported signs.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Developed the platform using React, Vite, Tailwind CSS, Python, Flask, MediaPipe and TensorFlow/Keras.</span>
                      </li>
                    </ul>
                  </div>

                  {/* FasalMitra */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-1.5 font-bold text-[#1f2937]">
                      <span className="text-[#111827]">FasalMitra</span>
                      <span className="text-[#9ca3af] font-normal">|</span>
                      <span className="font-normal text-[#4b5563]">Python, Flask, MongoDB, Redis</span>
                    </div>
                    <ul className="mt-1 space-y-1 text-[#374151]">
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Developed a smart architecture platform using microservices and a ResNet deep-learning model for agricultural analysis.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Built Flask ML APIs with MongoDB/Redis authentication and integrated services through an Nginx API gateway</span>
                      </li>
                    </ul>
                  </div>

                  {/* CareerCompass AI */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-1.5 font-bold text-[#1f2937]">
                      <span className="text-[#111827]">CareerCompass AI</span>
                      <span className="text-[#9ca3af] font-normal">|</span>
                      <span className="font-normal text-[#4b5563]">TypeScript, Next.js, React, Firebase, Gemini API</span>
                    </div>
                    <ul className="mt-1 space-y-1 text-[#374151]">
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Developed an AI-powered career guidance platform that recommends career paths, skills, and personalized learning roadmaps based on user interests and preferences.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-[#374151]">
                        <span className="text-[#374151] leading-none mt-0.5">•</span>
                        <span>Integrated Google Gemini via Genkit for interactive career guidance and implemented Firebase authentication to securely store user profiles and career progress</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENT */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start pt-1">
              <h2 className="text-xs sm:text-[13px] font-bold text-[#0284c7] uppercase tracking-wider sm:col-span-2">
                ACHIEVEMENT
              </h2>
              <div className="sm:col-span-10 text-[11px] sm:text-xs text-[#374151] flex items-start gap-1.5">
                <span className="text-[#374151] leading-none mt-0.5">•</span>
                <span>Ranked 4th in Pune for Yi Future 6.0</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
