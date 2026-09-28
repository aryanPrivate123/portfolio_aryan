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

      {/* Key Features Quick List */}
      <div className="relative z-10 my-4 space-y-2">
        {project.features.slice(0, 3).map((feat, idx) => (
          <div key={idx} className="flex items-start gap-2 text-xs text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5FE40] mt-1.5 shrink-0" />
            <span className="line-clamp-1">{feat}</span>
          </div>
        ))}
      </div>

      {/* Footer CTA & Action */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#E5FE40] uppercase tracking-wider transition-colors cursor-pointer"
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
