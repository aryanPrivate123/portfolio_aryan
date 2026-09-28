import React, { useState, useEffect } from 'react';
import { PROJECTS, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { X, Github, ExternalLink, Check, Layers, Cpu, Code2, AlertCircle } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#0b0c10] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E5FE40]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#E5FE40] uppercase">
                PORTFOLIO SHOWCASE
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-display">
              SELECTED WORK
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
            Engineered systems demonstrating computer vision inference, microservices architecture, and generative AI roadmaps. Click any project to inspect technical architecture.
          </p>
        </div>

        {/* 3-Column Editorial Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Fullscreen High-Fidelity Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#10121a] border border-white/20 rounded-3xl overflow-y-auto shadow-2xl p-6 sm:p-10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#E5FE40] uppercase tracking-wider mb-1">
                  <span>PROJECT {selectedProject.number}</span>
                  <span>•</span>
                  <span>{selectedProject.role}</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-display text-white">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-8 space-y-8">
              
              {/* Short Summary */}
              <p className="text-lg sm:text-xl text-blue-100 font-normal leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block mb-2">
                    THE PROBLEM
                  </span>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-mono font-bold text-[#E5FE40] uppercase tracking-wider block mb-2">
                    THE SOLUTION
                  </span>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Features Checklist */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/50 mb-4">
                  VERIFIED IMPLEMENTATION FEATURES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <Check className="w-4 h-4 text-[#E5FE40] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-white/80 font-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/50 mb-3">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-blue-900/30 border border-blue-500/30 text-blue-200 text-xs font-mono font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                  </a>

                  <span className="text-xs text-white/40 font-mono">
                    Project source verified on GitHub
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-white/60 hover:text-white transition-colors"
                >
                  Close Window (Esc)
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
