import React from 'react';
import { Project } from '../data/projects';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Check } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative rounded-3xl bg-[#12141c] border border-white/10 hover:border-[#285CF6]/60 transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(40,92,246,0.15)]"
    >
      {/* Background Subtle Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accentBg} opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`}
        aria-hidden="true"
      />

      {/* Top Meta Bar: Number & Category */}
      <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl sm:text-4xl font-black text-white/40 group-hover:text-[#E5FE40] transition-colors duration-300 font-display tabular-nums tracking-tighter">
            {project.number}
          </span>
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/50">
            {project.role}
          </span>
        </div>

        {/* Interactive Action Indicator */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs font-mono font-bold text-white/70 group-hover:text-white transition-colors">
            DETAILS
          </span>
          <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#E5FE40] text-white group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Main Content Info */}
      <div className="relative z-10 my-6">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white font-display tracking-tight group-hover:text-[#E5FE40] transition-colors">
          {project.name}
        </h3>
        
        <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed font-light line-clamp-2">
          {project.description}
        </p>

        {/* Clean Metadata Technologies (Anti-Pill compliant) */}
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-blue-200/80 font-mono">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <React.Fragment key={tech}>
              <span>{tech}</span>
              {idx < 4 && <span className="text-white/30">/</span>}
            </React.Fragment>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-white/40">+{project.technologies.length - 5} more</span>
          )}
        </div>
      </div>

      {/* Abstract Bespoke UI Visual Stage */}
      <div className="relative z-10 w-full h-56 sm:h-64 rounded-2xl bg-[#090a0f] border border-white/10 overflow-hidden p-4 flex flex-col justify-between group-hover:border-white/30 transition-colors">
        
        {project.id === 'signbridge' && (
          /* SignBridge Abstract Computer Vision HUD */
          <div className="relative w-full h-full flex flex-col justify-between select-none">
            {/* HUD Status Header */}
            <div className="flex items-center justify-between text-[11px] font-mono text-white/70 border-b border-white/10 pb-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                CAM STREAM ACTIVE · 60 FPS
              </span>
              <span className="text-blue-300">21 3D LANDMARKS NORMALIZED</span>
            </div>

            {/* Hand Skeleton Landmark Visualization */}
            <div className="relative my-auto flex items-center justify-center h-28">
              <svg className="w-48 h-28 text-blue-400" viewBox="0 0 160 100" fill="none">
                {/* Wrist anchor */}
                <circle cx="80" cy="85" r="4" fill="#E5FE40" />
                <text x="88" y="88" fill="#E5FE40" fontSize="7" fontFamily="monospace">Wrist (0,0,0)</text>
                
                {/* Palm bones */}
                <line x1="80" y1="85" x2="45" y2="55" stroke="#3b82f6" strokeWidth="1.5" />
                <line x1="80" y1="85" x2="65" y2="45" stroke="#3b82f6" strokeWidth="1.5" />
                <line x1="80" y1="85" x2="80" y2="40" stroke="#3b82f6" strokeWidth="1.5" />
                <line x1="80" y1="85" x2="95" y2="45" stroke="#3b82f6" strokeWidth="1.5" />
                <line x1="80" y1="85" x2="115" y2="55" stroke="#3b82f6" strokeWidth="1.5" />

                {/* Finger bones */}
                <line x1="45" y1="55" x2="35" y2="35" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="65" y1="45" x2="60" y2="20" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="80" y1="40" x2="80" y2="15" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="95" y1="45" x2="100" y2="20" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="115" y1="55" x2="125" y2="35" stroke="#60a5fa" strokeWidth="1.5" />

                {/* Joint Nodes */}
                {[
                  [45, 55], [35, 35],
                  [65, 45], [60, 20],
                  [80, 40], [80, 15],
                  [95, 45], [100, 20],
                  [115, 55], [125, 35]
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="2.5" fill="#ffffff" />
                ))}
              </svg>
            </div>

            {/* Inference Result HUD */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono">
              <span className="text-white/80">
                CLASS: <strong className="text-white font-bold">NAMASTE (35 CLASSES)</strong>
              </span>
              <span className="text-[#E5FE40] font-bold">CONF: 98.6%</span>
            </div>
          </div>
        )}

        {project.id === 'fasalmitra' && (
          /* FasalMitra Abstract Microservice Architecture HUD */
          <div className="relative w-full h-full flex flex-col justify-between select-none">
            <div className="flex items-center justify-between text-[11px] font-mono text-white/70 border-b border-white/10 pb-2">
              <span className="text-emerald-400">MICROSERVICE CLUSTER</span>
              <span className="text-white/50">REDIS CACHE &bull; &lt;1MS</span>
            </div>

            {/* Microservice Topology Diagram */}
            <div className="grid grid-cols-3 gap-2 my-auto text-center font-mono">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <span className="block text-[10px] text-white/40 uppercase">GATEWAY</span>
                <span className="text-xs font-bold text-white">Flask API</span>
              </div>
              <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40">
                <span className="block text-[10px] text-emerald-400 uppercase">INFERENCE</span>
                <span className="text-xs font-bold text-emerald-200">DL Engine</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <span className="block text-[10px] text-white/40 uppercase">STORAGE</span>
                <span className="text-xs font-bold text-white">MongoDB</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-white/70">
              <span>AGRONOMIC ANALYSIS PIPELINE</span>
              <span className="text-emerald-400 font-bold">HEALTH: 99.9%</span>
            </div>
          </div>
        )}

        {project.id === 'careercompass-ai' && (
          /* CareerCompass AI Roadmap Nodes HUD */
          <div className="relative w-full h-full flex flex-col justify-between select-none">
            <div className="flex items-center justify-between text-[11px] font-mono text-white/70 border-b border-white/10 pb-2">
              <span className="text-purple-400">GEMINI AI INTEGRATION</span>
              <span className="text-white/50">FIREBASE PERSISTENCE</span>
            </div>

            {/* Career Step Progression Path */}
            <div className="my-auto flex items-center justify-between px-2 text-center font-mono">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold mb-1 shadow-sm">
                  1
                </div>
                <span className="text-[10px] text-white/60">Skills Audit</span>
              </div>
              <div className="h-[2px] flex-1 bg-purple-500/40 mx-2" />
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-[#E5FE40] text-black flex items-center justify-center text-xs font-bold mb-1 shadow-sm">
                  2
                </div>
                <span className="text-[10px] text-white font-bold">Gemini Path</span>
              </div>
              <div className="h-[2px] flex-1 bg-purple-500/40 mx-2" />
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold mb-1">
                  3
                </div>
                <span className="text-[10px] text-white/60">Milestone</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-white/70">
              <span>DYNAMIC LEARNING ROADMAPS</span>
              <span className="text-purple-300 font-bold">ACTIVE ENGINE</span>
            </div>
          </div>
        )}

      </div>

      {/* Footer CTA & Action */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#E5FE40] uppercase tracking-wider transition-colors"
        >
          <span>VIEW PROJECT BREAKDOWN</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          title="View GitHub Repository"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
