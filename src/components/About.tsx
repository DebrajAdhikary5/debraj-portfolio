import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { User, GraduationCap, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  const profileDetails = [
    { icon: <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />, label: 'Role Focus', value: 'Aspiring Data Analyst' },
    { icon: <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />, label: 'Education', value: 'BBA (Honors) • 9.2 SGPA' },
    { icon: <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />, label: 'Location', value: 'Howrah, West Bengal, India' },
    { icon: <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />, label: 'Availability', value: 'Immediate Joiner' },
  ];

  const highlights = [
    { metric: '300+', label: 'Analytical Coding Hours' },
    { metric: '4+', label: 'Major Case Studies' },
    { metric: '10+', label: 'BI Dashboards Created' },
    { metric: '3+', label: 'Industry Certifications' },
  ];

  return (
    <section
      id="about"
      className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-850 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
          <span className="hd-label">Professional Overview</span>
          <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h3>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Storytelling text */}
          <div className="lg:col-span-7 space-y-5">
            <h4 className="text-base sm:text-lg font-sans font-bold text-slate-800 dark:text-slate-100 leading-snug">
              {PERSONAL_INFO.about.intro}
            </h4>
            
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-xs sm:text-sm">
              {PERSONAL_INFO.about.journey}
            </p>

            <blockquote className="border-l-3 border-blue-600 bg-blue-50/40 dark:bg-blue-950/10 p-3 rounded-r">
              <p className="text-xs sm:text-sm font-sans italic text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                "{PERSONAL_INFO.about.passions}"
              </p>
            </blockquote>

            <div className="pt-2">
              <span className="hd-label">Career Objectives</span>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-xs">
                {PERSONAL_INFO.about.careerObjectives}
              </p>
            </div>
          </div>

          {/* Column 2: Specific profile facts & KPI metrics */}
          <div className="lg:col-span-5 space-y-6">
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-850 p-3 rounded border border-slate-200/60 dark:border-slate-800/80 text-center"
                >
                  <span className="block text-xl sm:text-2xl font-mono font-bold text-blue-600 dark:text-blue-400">
                    {item.metric}
                  </span>
                  <span className="block text-[10px] font-sans text-slate-500 dark:text-slate-400 font-medium mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Structured Profile Cards */}
            <div className="hd-card space-y-3">
              <span className="hd-label">Key Recruiting Facts</span>
              <div className="space-y-3 pt-1">
                {profileDetails.map((detail, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="p-1.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200/50 dark:border-slate-700/50 h-fit">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none">
                        {detail.label}
                      </span>
                      <span className="block text-xs font-sans font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
