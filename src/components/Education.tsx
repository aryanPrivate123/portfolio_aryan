import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  isCurrent?: boolean;
}

const EDUCATION_DATA: EducationItem[] = [
  {
    period: '2024 — PRESENT',
    degree: 'Bachelor of Technology: Computer Science Engineering',
    institution: 'MIT World Peace University',
    location: 'Pune, Maharashtra',
    isCurrent: true
  },
  {
    period: '2022',
    degree: 'Junior College',
    institution: 'Pace Junior College',
    location: 'Kandivali, Mumbai',
    isCurrent: false
  },
  {
    period: 'FOUNDATIONAL',
    degree: 'High School',
    institution: 'Oxford Public School',
    location: 'Mumbai, Maharashtra',
    isCurrent: false
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-[#0b0c10] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#E5FE40]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#E5FE40] uppercase">
            ACADEMIC BACKGROUND
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-display">
            EDUCATION
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
            Formal engineering grounding at MIT-WPU Pune paired with foundational science schooling in Mumbai.
          </p>
        </div>

        {/* Clean Editorial Timeline */}
        <div className="relative border-l border-white/15 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {EDUCATION_DATA.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  item.isCurrent
                    ? 'bg-[#E5FE40] border-[#0b0c10] ring-4 ring-[#E5FE40]/20'
                    : 'bg-white/40 border-[#0b0c10]'
                }`}
              />

              {/* Item Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                
                {/* Year Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded ${
                    item.isCurrent
                      ? 'bg-[#285CF6] text-white'
                      : 'bg-white/10 text-white/80'
                  }`}>
                    {item.period}
                  </span>
                  
                  {item.isCurrent && (
                    <span className="text-xs font-mono text-[#E5FE40] font-semibold">
                      CURRENT ENROLLMENT (3RD YEAR)
                    </span>
                  )}
                </div>

                {/* Degree / Program */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-display tracking-wide mt-2">
                  {item.degree}
                </h3>

                {/* Institution & Location */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-3 text-sm text-white/70">
                  <div className="flex items-center gap-2 font-medium text-white/90">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/50 text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
