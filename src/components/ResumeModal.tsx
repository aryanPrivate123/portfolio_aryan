import React, { useEffect, useState } from 'react';
import { X, Download, ExternalLink, Printer, FileText, Check, Award, GraduationCap, Briefcase, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'doc'>('preview');
  const [copied, setCopied] = useState(false);

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

  const pdfUrl = '/assets/Aryan_Shinde_Resume.pdf';

  const handlePrint = () => {
    window.open(pdfUrl, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shindearyan1911@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Aryan Shinde Resume"
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl h-[92vh] max-h-[920px] bg-[#11131a] rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#0d0e14]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E5FE40]/10 border border-[#E5FE40]/30 flex items-center justify-center text-[#E5FE40]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-wide font-display flex items-center gap-2">
                <span>Aryan_Shinde_Resume.pdf</span>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded">
                  Official CV
                </span>
              </h2>
              <p className="text-[11px] text-white/50 hidden sm:block">
                Third-Year CSE · AI/ML & Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5 mr-2">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'preview' 
                    ? 'bg-white/20 text-white font-semibold' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                PDF View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('doc')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'doc' 
                    ? 'bg-white/20 text-white font-semibold' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Document
              </button>
            </div>

            {/* Direct Open in New Tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-colors border border-white/10"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#E5FE40]" />
              <span className="hidden md:inline">Open Tab</span>
            </a>

            {/* Download Button */}
            <a
              href={pdfUrl}
              download="Aryan_Shinde_Resume.pdf"
              className="px-3 py-1.5 rounded-lg bg-[#E5FE40] hover:bg-[#d8f030] text-black text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors border border-white/10 ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-neutral-900/90 overflow-y-auto">
          {activeTab === 'preview' ? (
            <div className="w-full h-full relative min-h-[500px]">
              {/* Native PDF Viewer Iframe */}
              <iframe
                src={`${pdfUrl}#view=FitH&toolbar=1`}
                title="Aryan Shinde Resume PDF"
                className="w-full h-full border-none"
              />
            </div>
          ) : (
            /* Rendered Document View */
            <div className="max-w-3xl mx-auto my-6 p-6 sm:p-10 bg-white text-neutral-900 rounded-xl shadow-xl font-sans text-xs sm:text-sm">
              {/* Header */}
              <div className="border-b border-neutral-200 pb-5 mb-5">
                <h1 className="text-3xl font-extrabold text-[#0284c7] tracking-tight uppercase">
                  ARYAN SHINDE
                </h1>
                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-neutral-600 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0284c7]" />
                    Pune, India 400067
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
                    +91 9004723743
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 cursor-pointer hover:text-black" onClick={handleCopyEmail}>
                    <Mail className="w-3.5 h-3.5 text-[#0284c7]" />
                    shindearyan1911@gmail.com
                    {copied && <span className="text-[10px] text-emerald-600 font-bold ml-1">Copied!</span>}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <section className="mb-6">
                <h3 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider border-b border-[#0284c7]/30 pb-1 mb-2">
                  SUMMARY
                </h3>
                <p className="text-neutral-700 leading-relaxed text-xs">
                  Third-year Computer Science Engineering student with experience in AI/ML, full-stack development, and hackathons. Skilled in developing web applications and applying machine learning techniques to solve real-world problems. Strong team player with experience in project management, collaborative development, and version control using Git. Passionate about building innovative, scalable, and practical technology solutions.
                </p>
              </section>

              {/* Skills & Profiles */}
              <section className="mb-6">
                <h3 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider border-b border-[#0284c7]/30 pb-1 mb-3">
                  SKILLS & PROFILES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1.5">Technical Skills</h4>
                    <ul className="space-y-1 text-neutral-700 list-disc list-inside">
                      <li>Web development</li>
                      <li>Full-stack development</li>
                      <li>Machine learning techniques</li>
                      <li>Version control systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1.5">Core Competencies</h4>
                    <ul className="space-y-1 text-neutral-700 list-disc list-inside">
                      <li>Team management</li>
                      <li>Leadership skills</li>
                      <li>Critical thinking</li>
                      <li>Team collaboration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1.5">Profiles</h4>
                    <p className="text-neutral-600 mb-1">
                      <span className="font-semibold text-neutral-800">LinkedIn:</span><br />
                      <a href="https://www.linkedin.com/in/aryan-shinde-045441380" target="_blank" rel="noreferrer" className="text-[#0284c7] hover:underline break-all text-[11px]">
                        linkedin.com/in/aryan-shinde-045441380
                      </a>
                    </p>
                    <p className="text-neutral-600">
                      <span className="font-semibold text-neutral-800">GitHub:</span><br />
                      <a href="https://github.com/Eclipse1911" target="_blank" rel="noreferrer" className="text-[#0284c7] hover:underline text-[11px]">
                        github.com/Eclipse1911
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="mb-6">
                <h3 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider border-b border-[#0284c7]/30 pb-1 mb-2.5">
                  EDUCATION AND TRAINING
                </h3>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-neutral-800 text-xs">Bachelor Of Technology: Computer Science Engineering</h4>
                      <p className="text-neutral-600 text-[11px]">MIT World Peace University - Pune</p>
                    </div>
                    <span className="font-bold text-[#0284c7] text-xs">2028</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-neutral-800 text-xs">Junior College (HSC)</h4>
                      <p className="text-neutral-600 text-[11px]">Pace Junior College - Kandivali, Mumbai</p>
                    </div>
                    <span className="font-bold text-[#0284c7] text-xs">2024</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-neutral-800 text-xs">High School (ICSE)</h4>
                      <p className="text-neutral-600 text-[11px]">Oxford Public School - Mumbai</p>
                    </div>
                    <span className="font-bold text-[#0284c7] text-xs">2022</span>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="mb-6">
                <h3 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider border-b border-[#0284c7]/30 pb-1 mb-2.5">
                  PROJECTS
                </h3>
                <div className="space-y-3.5 text-xs">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-neutral-900">SignBridge</span>
                      <span className="text-neutral-500 text-[11px]">| Python, ML, Computer Vision, ANN, MediaPipe, React</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700 mt-1 text-[11px] leading-relaxed">
                      <li>Developed a real-time Indian Sign Language (ISL) recognition system using MediaPipe hand landmarks and a Keras MLP model.</li>
                      <li>Trained the MVP to recognize 35 static ISL classes (A-Z, 1–9) from camera input.</li>
                      <li>Implemented wrist relative landmark normalization to create a lightweight 42-feature representation for classification.</li>
                      <li>Integrated AI-based sentence reconstruction to convert recognized sign sequences into meaningful text with English, Hindi, and Marathi TTS.</li>
                      <li>Built an interactive ISL Learn Mode for users to learn and practice supported signs.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-neutral-900">FasalMitra</span>
                      <span className="text-neutral-500 text-[11px]">| Python, Flask, MongoDB, Redis, ResNet Deep Learning</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700 mt-1 text-[11px] leading-relaxed">
                      <li>Developed a smart architecture platform using microservices and a ResNet deep-learning model for agricultural analysis.</li>
                      <li>Built Flask ML APIs with MongoDB/Redis authentication and integrated services through an Nginx API gateway.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-neutral-900">CareerCompass AI</span>
                      <span className="text-neutral-500 text-[11px]">| TypeScript, Next.js, React, Firebase, Gemini API</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700 mt-1 text-[11px] leading-relaxed">
                      <li>Developed an AI-powered career guidance platform that recommends career paths, skills, and personalized learning roadmaps.</li>
                      <li>Integrated Google Gemini via Genkit for interactive career guidance and implemented Firebase authentication to securely store user profiles.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Achievement */}
              <section>
                <h3 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider border-b border-[#0284c7]/30 pb-1 mb-2">
                  ACHIEVEMENT
                </h3>
                <p className="text-neutral-800 text-xs font-medium flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  Ranked 4th in Pune for Yi Future 6.0
                </p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
