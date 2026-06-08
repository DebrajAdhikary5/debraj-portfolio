import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Play, Database, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[#f8fafc] dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-850 transition-colors duration-300"
    >
      {/* Subtle Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-4 text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-1.5 bg-green-50/80 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400 px-2.5 py-1 rounded border border-emerald-100 dark:border-emerald-900/30 text-[10px] font-mono font-bold tracking-wider w-fit"
            >
              <Database className="w-3 h-3 text-emerald-600 animate-pulse" />
              <span>OPEN TO OPPORTUNITIES • READY TO HIRE</span>
            </motion.div>

            <div className="space-y-1">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xs font-mono text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider"
              >
                Data Analyst Profile
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                id="hero-developer-name"
                className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-slate-900 dark:text-white tracking-tight"
              >
                {PERSONAL_INFO.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-lg sm:text-xl font-sans font-bold text-blue-600 dark:text-blue-400"
              >
                {PERSONAL_INFO.title}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-slate-500 dark:text-slate-350 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Micro Terminal Showcase for Analysts */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden sm:block w-full max-w-xl bg-slate-900 text-slate-200 rounded p-3 font-mono text-[11px] shadow border border-slate-800"
            >
              <div className="flex items-center space-x-1.5 pb-1.5 border-b border-slate-800 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                <span className="text-slate-500 pl-2 text-[9px]">query_insights.py</span>
              </div>
              <p className="text-slate-500"># Query Postgres and predict trends with Pandas</p>
              <p className="text-blue-400">import <span className="text-white">pandas</span> as <span className="text-white">pd</span></p>
              <p className="text-indigo-400"><span className="text-blue-400">df = pd.</span>read_sql(<span className="text-emerald-400">"SELECT * FROM customer_retaining"</span>, <span className="text-blue-400">conn</span>)</p>
              <p className="text-slate-450">results = df.groupby(<span className="text-emerald-400">'loyalty_tier'</span>)[<span className="text-emerald-400">'point_balance'</span>].mean()</p>
              <p className="text-emerald-500">print(<span className="text-slate-300">f"Database insights unlocked: {"{len(results)}"} metrics."</span>)</p>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="hd-btn-sm hd-btn-accent group !py-2 !px-4"
                id="hero-cta-view-projects"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => handleScrollTo('resume')}
                className="hd-btn-sm !py-2 !px-4"
                id="hero-cta-view-resume"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="hd-btn-sm !py-2 !px-4"
                id="hero-cta-contact"
              >
                <Mail className="w-3.5 h-3.5 text-blue-650" />
                <span>Contact Me</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
            >
              {/* Spinning gradient outer glow ring - minimal blue highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-indigo-500 to-slate-400 rounded opacity-10 blur-md" />
              
              {/* Profile Image card layout */}
              <div className="relative w-full h-full bg-slate-100 dark:bg-slate-900 rounded-md overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 p-1.5">
                <div className="w-full h-full rounded overflow-hidden relative">
                  <img
                    src="https://picsum.photos/seed/debraj-adhikary/600/600"
                    alt="Debraj Adhikary - Professional Headshot"
                    className="w-full h-full object-cover grayscale transition-all duration-700 hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Float metrics absolute badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-900/90 backdrop-blur-sm p-2 rounded border border-slate-800/80 text-white flex items-center justify-between">
                    <div>
                      <span className="block font-mono text-[8px] uppercase tracking-wider text-slate-400">Active Toolkit</span>
                      <span className="block font-sans text-[10px] font-bold text-blue-400">Python • SQL • Power BI</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <Play className="w-2.5 h-2.5 text-blue-400 fill-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
