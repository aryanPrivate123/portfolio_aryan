import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES, ALL_SKILLS, SkillItem } from '../data/skills';
import {
  Code2,
  Globe,
  Brain,
  Database,
  Wrench,
  Layers,
  Search,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

type TabId = 'all' | 'programming' | 'web-development' | 'ai-ml' | 'database-cloud' | 'tools-platforms';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkillHover, setActiveSkillHover] = useState<string | null>(null);

  const tabs: { id: TabId; label: string; count: number }[] = [
    { id: 'all', label: 'ALL SKILLS', count: ALL_SKILLS.length },
    { id: 'programming', label: 'Programming', count: SKILL_CATEGORIES[0].skills.length },
    { id: 'web-development', label: 'Web Development', count: SKILL_CATEGORIES[1].skills.length },
    { id: 'ai-ml', label: 'AI & ML', count: SKILL_CATEGORIES[2].skills.length },
    { id: 'database-cloud', label: 'Database & Cloud', count: SKILL_CATEGORIES[3].skills.length },
    { id: 'tools-platforms', label: 'Tools & Platforms', count: SKILL_CATEGORIES[4].skills.length },
  ];

  const getTabIcon = (id: TabId) => {
    switch (id) {
      case 'all':
        return <Layers className="w-4 h-4" />;
      case 'programming':
        return <Code2 className="w-4 h-4" />;
      case 'web-development':
        return <Globe className="w-4 h-4" />;
      case 'ai-ml':
        return <Brain className="w-4 h-4" />;
      case 'database-cloud':
        return <Database className="w-4 h-4" />;
      case 'tools-platforms':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  // Filter skills based on tab and search query
  const displayedSkills = useMemo(() => {
    let list: SkillItem[] = [];
    if (activeTab === 'all') {
      list = ALL_SKILLS;
    } else {
      const category = SKILL_CATEGORIES.find((c) => c.id === activeTab);
      list = category ? category.skills : [];
    }

    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase().trim();
    return list.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        (s.tag && s.tag.toLowerCase().includes(q))
    );
  }, [activeTab, searchQuery]);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#0d0e14] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E5FE40]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#E5FE40] uppercase">
                TECHNICAL CAPABILITIES & PROFICIENCY
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-display">
              WHAT I WORK WITH
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Live Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Filter skills (e.g. RAG, React)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#285CF6] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <p className="text-xs sm:text-sm text-white/50 font-mono">
              <span className="text-[#E5FE40] font-bold">{ALL_SKILLS.length}</span> Verified Competencies
            </p>
          </div>
        </div>

        {/* Category Segmented Tabs (Including 'ALL SKILLS') */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-black/40 rounded-2xl border border-white/10 mb-8 w-fit">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                }}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#285CF6] text-white shadow-md shadow-blue-600/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {getTabIcon(tab.id)}
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Container Stage */}
        <div className="rounded-3xl bg-[#12141d] border border-white/10 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Header of Active View */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-8 border-b border-white/10 gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-[#E5FE40] tracking-widest uppercase">
                {activeTab === 'all'
                  ? 'COMPREHENSIVE MULTI-DOMAIN STACK'
                  : `DOMAIN: ${tabs.find((t) => t.id === activeTab)?.label.toUpperCase()}`}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-display tracking-wide mt-1">
                {activeTab === 'all'
                  ? 'ALL SKILLS & TECHNOLOGIES'
                  : SKILL_CATEGORIES.find((c) => c.id === activeTab)?.title}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-white/50 font-normal">
              {activeTab === 'all'
                ? `Showing ${displayedSkills.length} of ${ALL_SKILLS.length} competencies across all disciplines`
                : SKILL_CATEGORIES.find((c) => c.id === activeTab)?.subtitle}
            </p>
          </div>

          {/* Grouped View for 'ALL' tab when no search query is active */}
          {activeTab === 'all' && !searchQuery.trim() ? (
            <div className="space-y-10">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.id} className="pt-2">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E5FE40]" />
                      <h4 className="text-lg font-bold text-white uppercase font-display tracking-wide">
                        {category.title}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-white/40">
                      {category.skills.length} Items
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.skills.map((skill) => {
                      const isHovered = activeSkillHover === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setActiveSkillHover(skill.name)}
                          onMouseLeave={() => setActiveSkillHover(null)}
                          className={`p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                            isHovered
                              ? 'bg-white/[0.08] border-[#285CF6] translate-y-[-2px]'
                              : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-base sm:text-lg font-bold text-white tracking-wide font-display">
                              {skill.name}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#285CF6] mt-1.5" />
                          </div>

                          <div className="flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/5">
                            <span className="font-mono text-blue-200/70 truncate max-w-[150px]">
                              {skill.tag}
                            </span>
                            <span className="text-[10px] text-white/40 uppercase">Active</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Single Category Grid OR Filtered Search Results */
            <>
              {displayedSkills.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-white/60 text-sm font-mono">
                    No skills found matching "{searchQuery}"
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-3 text-xs text-[#E5FE40] hover:underline font-bold"
                  >
                    Clear search filter
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                  {displayedSkills.map((skill) => {
                    const isHovered = activeSkillHover === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setActiveSkillHover(skill.name)}
                        onMouseLeave={() => setActiveSkillHover(null)}
                        className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                          isHovered
                            ? 'bg-white/[0.08] border-[#285CF6] translate-y-[-2px]'
                            : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-lg sm:text-xl font-bold text-white tracking-wide font-display block">
                              {skill.name}
                            </span>
                            {activeTab === 'all' && (
                              <span className="text-[10px] font-mono text-[#E5FE40] uppercase tracking-wider">
                                {skill.category}
                              </span>
                            )}
                          </div>
                          <span className="w-2 h-2 rounded-full bg-[#E5FE40]" />
                        </div>

                        <div className="flex items-center justify-between text-xs text-white/50 pt-3 border-t border-white/5">
                          <span className="font-mono text-blue-200/70">{skill.tag}</span>
                          <span className="text-[11px] text-white/40">Verified In-Use</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {/* Quick Context Terminal Footer */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Full technology stack: 52 verified skills across AI, full-stack, cloud & systems</span>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-[#E5FE40] hover:underline font-bold"
            >
              <span>See applied implementations in projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
