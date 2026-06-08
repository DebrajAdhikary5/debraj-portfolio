import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Business Administration (BBA) Honors',
      institution: 'Techno Main Salt Lake',
      location: 'Kolkata, West Bengal, India',
      period: '2018 - 2021',
      score: '9.2 / 10.0 SGPA',
      scoreLabel: 'CGPA',
      coursework: [
        'Business Mathematics',
        'Quantitative Techniques',
        'Financial Management',
        'Systems & Informatics',
        'Marketing Operations',
        'Statistical Applications'
      ],
      description: 'Acquired core competencies in business models, quantitative techniques, and operational analytics. Built a strong analytical foundation for translating organizational data into structured decision-making indicators.'
    },
    {
      degree: 'Diploma in Data Science with ML & AI',
      institution: 'IVY Professional School',
      location: 'Kolkata, West Bengal, India',
      period: '2023 - 2025',
      score: 'A+ Grade',
      scoreLabel: 'Rating',
      coursework: [
        'Exploratory Data Analysis (EDA)',
        'Regression & Classification Algorithms',
        'Supervised & Unsupervised ML',
        'Feature Engineering & Pipelines',
        'Dashboard & Report Orchestration',
        'SQL Data Extraction'
      ],
      description: 'Extensive technical training focused on data manipulation, predictive modeling pipelines with Python / scikit-learn, database ETL querying, and interactive BI storytelling.'
    },
    {
      degree: 'Programming Certificate (C, C++, Java, Python, & Unix)',
      institution: 'Ramkrishna Mission Shilpamandira',
      location: 'Belur Math, Howrah, India',
      period: '2022 - 2023',
      score: 'First Class',
      scoreLabel: 'Outcome',
      coursework: [
        'Structured Computer Programming',
        'Object-Oriented Concepts (OOP)',
        'Unix File System & Terminal CLI',
        'Data Structures & Algorithms',
        'Scripting Automation'
      ],
      description: 'Completed essential training in structured code, computer science fundamentals, CLI administration, and multi-language development logic.'
    }
  ];

  return (
    <section
      id="education"
      className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-850 transition-colors duration-300"
      aria-label="Education History"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-10 pb-4 border-b border-slate-100 dark:border-slate-800">
          <span className="hd-label">Academic Background</span>
          <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Academic Training
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Formal business administration degree combined with professional specialized programs in analytics, database management, and programming.
          </p>
        </div>

        {/* Timeline Grid layout */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 rounded shadow-sm hover:shadow transition-shadow focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 text-left relative overflow-hidden"
              tabIndex={0}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 dark:bg-blue-500" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                {/* School Description */}
                <div className="flex-1 space-y-3">
                  <div className="space-y-1">
                    <span className="inline-flex items-center space-x-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider">
                      <GraduationCap className="w-3 h-3 mr-0.5" />
                      {edu.degree}
                    </span>
                    <h4 className="text-base sm:text-lg font-sans font-extrabold text-slate-900 dark:text-white pt-1">
                      {edu.institution}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {edu.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-sm leading-relaxed max-w-3xl">
                    {edu.description}
                  </p>

                  {/* Coursework Container */}
                  <div className="pt-2">
                    <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      <span>Relevant Coursework & Competencies</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-[11px] font-sans border border-slate-200 dark:border-slate-800"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Score badge at the right */}
                <div className="shrink-0 md:text-right flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2 border-t md:border-t-0 border-slate-200/50 dark:border-slate-800 pt-3 md:pt-0">
                  <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider md:leading-none">
                    Academic {edu.scoreLabel}
                  </span>
                  <div className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 px-3 py-1.5 rounded font-mono font-bold text-xs sm:text-sm shadow-sm">
                    <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{edu.score}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
