import React from 'react';
import { Brain, Layers, GitBranch, Trophy, Code2, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0b0c10] border-b border-white/10 relative overflow-hidden">
      {/* Structural layout container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with category kicker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#E5FE40]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#E5FE40] uppercase">
            ABOUT ME
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Editorial Heading & Prose */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-display mb-8">
              HI, I'M ARYAN.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-white/80 leading-relaxed font-light">
              <p className="text-xl sm:text-2xl text-white font-normal leading-snug">
                I am a third-year Computer Science Engineering student with experience in AI/ML, full-stack development, hackathons, project management, collaborative development, and Git.
              </p>

              <p>
                My focus centers on architecting practical technology solutions that bridge complex machine learning models with responsive, real-world web interfaces. Whether designing real-time computer vision pipelines with MediaPipe and TensorFlow or engineering full-stack web applications with React and Next.js, I prioritize robust system logic and direct utility.
              </p>

              <p>
                Thriving in agile hackathon environments, I leverage collaborative development practices, proactive Git workflows, and structured problem-solving to transform challenging technical briefs into production-ready software.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-8 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="w-5 h-5 text-[#285CF6]" />
                  <h3 className="text-sm font-bold uppercase text-white font-mono">
                    AI / ML & Vision
                  </h3>
                </div>
                <p className="text-xs text-white/60 leading-normal">
                  Keras MLP networks, MediaPipe hand landmark tracking, coordinate normalization, and intelligent classification.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Layers className="w-5 h-5 text-[#E5FE40]" />
                  <h3 className="text-sm font-bold uppercase text-white font-mono">
                    Full-Stack Systems
                  </h3>
                </div>
                <p className="text-xs text-white/60 leading-normal">
                  React, Next.js, TypeScript, Flask REST APIs, Redis caching layers, and NoSQL/Firestore databases.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-[#E5FE40]" />
                  <h3 className="text-sm font-bold uppercase text-white font-mono">
                    Team Collaboration
                  </h3>
                </div>
                <p className="text-xs text-white/60 leading-normal">
                  Hackathon leadership, sprint execution, code reviews, and structured Git repository management.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-5 h-5 text-[#285CF6]" />
                  <h3 className="text-sm font-bold uppercase text-white font-mono">
                    Problem Solving
                  </h3>
                </div>
                <p className="text-xs text-white/60 leading-normal">
                  Transforming ambiguous real-world problems into testable mathematical models and scalable applications.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Verified Stat Area */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Stat Card 1: 03+ Major Projects */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 relative overflow-hidden group hover:border-[#285CF6]/50 transition-colors">
              <div className="flex items-baseline justify-between">
                <span className="text-6xl sm:text-7xl font-black text-white font-display tracking-tight tabular-nums">
                  03+
                </span>
                <span className="w-3 h-3 rounded-full bg-[#285CF6]" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase font-display tracking-wide mt-2">
                Major Projects Built
              </h3>
              <p className="text-xs text-white/60 mt-1">
                From real-time sign language recognition to smart agriculture microservices and AI career guidance.
              </p>
            </div>

            {/* Stat Card 2: AI / ML FOCUS */}
            <div className="p-7 rounded-2xl bg-[#285CF6] text-white relative overflow-hidden shadow-lg shadow-blue-600/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold tracking-widest text-blue-100 uppercase">
                  CORE SPECIALIZATION
                </span>
                <Brain className="w-5 h-5 text-[#E5FE40]" />
              </div>
              <p className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight">
                AI / ML FOCUS
              </p>
              <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                Computer vision models, coordinate normalizations, deep learning classifiers, and speech synthesis pipelines.
              </p>
            </div>

            {/* Stat Card 3: FULL-STACK DEVELOPMENT */}
            <div className="p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#E5FE40] uppercase">
                  CAPABILITY
                </span>
                <Layers className="w-5 h-5 text-white/60" />
              </div>
              <p className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
                FULL-STACK DEVELOPMENT
              </p>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Modern responsive client applications coupled with performant Python microservices and cloud databases.
              </p>
            </div>

            {/* Stat Card 4: HACKATHON EXPERIENCE */}
            <div className="p-7 rounded-2xl bg-[#E5FE40] text-black">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-black tracking-widest text-black/70 uppercase">
                  COMPETITIVE RECORD
                </span>
                <Trophy className="w-5 h-5 text-black" />
              </div>
              <p className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight">
                HACKATHON EXPERIENCE
              </p>
              <p className="text-xs text-black/80 mt-2 font-medium leading-relaxed">
                Ranked 4th in Pune at Yi Future 6.0 hackathon, validating high-velocity prototyping and solution delivery.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
