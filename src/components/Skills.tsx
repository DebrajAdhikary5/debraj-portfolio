import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../data';
import { Skill } from '../types';
import * as Icons from 'lucide-react';

// Dynamic icon mapper utilizing standard Lucide icons
function SkillIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.Code className={className || "w-4 h-4"} />;
  }
  return <IconComponent className={className || "w-4 h-4"} />;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Programming' | 'Analytics & Visualization' | 'Other Tools'>('All');

  const categories = ['All', 'Programming', 'Analytics & Visualization', 'Other Tools'] as const;

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-12 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-850 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-8 pb-4 border-b border-slate-200/60 dark:border-slate-800">
          <span className="hd-label">Technological Competence</span>
          <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skill Inventory
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Categorized technical capabilities and workflow practices essential for data analytics.
          </p>
        </div>

        {/* Category Filter Pills (High Density Styling) */}
        <div className="flex flex-wrap justify-start gap-1.5 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded text-[11px] font-bold cursor-pointer transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white dark:bg-blue-500 border border-blue-600 dark:border-blue-500'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-850'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Competencies Progress Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill: Skill, idx) => {
            // High Density custom tags matching Category types
            let tagElement = <span className="hd-pbi-tag">{skill.category}</span>;
            if (skill.category === 'Programming') {
              tagElement = <span className="hd-python-tag">Programming</span>;
            } else if (skill.category === 'Other Tools') {
              tagElement = <span className="hd-sql-tag">Other Tools</span>;
            }

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="hd-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-1.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                        <SkillIcon name={skill.iconName} className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-slate-800 dark:text-white text-sm leading-snug">
                          {skill.name}
                        </h4>
                        <div className="mt-0.5">
                          {tagElement}
                        </div>
                      </div>
                    </div>
 
                    <div className="text-right flex flex-col items-end gap-1">
                      <span className={`inline-flex items-center text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                        skill.level === 'Advanced'
                           ? 'bg-emerald-50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/35'
                          : skill.level === 'Intermediate'
                           ? 'bg-blue-50 text-blue-700 border-blue-200/50 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/35'
                          : 'bg-slate-50 text-slate-700 border-slate-200/50 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800'
                      }`}>
                        {skill.level}
                      </span>
                      {skill.yearsOfExp && (
                        <span className="block text-[9px] text-slate-400 font-mono">
                          {skill.yearsOfExp}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
