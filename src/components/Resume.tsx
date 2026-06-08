import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Eye, FileText, CheckCircle, Award, BookOpen, Clock, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Resume() {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  const education = [
    {
      degree: 'Bachelor of Business Administration (BBA) Honors',
      institution: 'TECHNO MAIN SALT LAKE',
      period: '2018 - 2021',
      detail: 'Graduated with an exceptional SGPA score of 9.2/10. Active focus on business informatics, quantitative models, and market operations.'
    },
    {
      degree: 'Data Science with Machine Learning & AI Diploma',
      institution: 'IVY Professional School',
      period: '2023 - 2025',
      detail: 'In-depth analytical training covering exploratory modeling, regression algorithms, scikit-learn libraries, and dashboard design.'
    },
    {
      degree: 'Programming in C, C++, Java, Python, and Unix Systems',
      institution: 'Ramkrishna Mission',
      period: '2022 - 2023',
      detail: 'Structured computer programming, object-oriented concepts, CLI tooling, and Unix environment processing paradigms.'
    }
  ];

  const coreStrengths = [
    'Clean Data Cleansing & ETL Pipelines',
    'Relational Star Schema Modeling',
    'Exploratory Data Analysis (EDA)',
    'Time-Series Trend Forecasting',
    'DAX & Power Query Calculations',
    'Hypothesis Validation (Regression, ANOVA)',
    'Interactive Business Intelligence Storytelling'
  ];

  const handleDownloadMock = () => {
    alert("Resume download triggered! In production, this link will download Debraj Adhikary's CV.");
  };

  return (
    <section
      id="resume"
      className="py-12 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-850 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-8 pb-4 border-b border-slate-200/60 dark:border-slate-800">
          <span className="hd-label">Professional Document</span>
          <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curriculum Vitae
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Scan a structured resume preview or acquire the official copy for organizational assessment files.
          </p>
        </div>

        {/* Resume Preview layout */}
        <div className="max-w-4xl mx-auto">
          {/* Main Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-white dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">Debraj_Adhikary_CV.pdf</span>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => setIsFullscreenOpen(true)}
                className="hd-btn-sm flex-1 sm:flex-initial justify-center"
                id="btn-view-resume-fullscreen"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </button>
              <button
                onClick={handleDownloadMock}
                className="hd-btn-sm hd-btn-accent flex-1 sm:flex-initial justify-center"
                id="btn-download-resume-pdf"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Interactive Paper Resume Container */}
          <div className="hd-card relative overflow-hidden text-left !p-6 sm:!p-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600" />
            
            {/* CV Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h4 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-white leading-tight">
                  {PERSONAL_INFO.name}
                </h4>
                <p className="text-blue-600 font-mono text-xs uppercase font-bold tracking-wider mt-0.5">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-slate-400 dark:text-slate-500 text-[10px] font-mono mt-1">
                  7-Month SEO Intern experience at MarketingBeku applying datametrics
                </p>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono space-y-0.5">
                <p>Email: {PERSONAL_INFO.email}</p>
                <p>GitHub: DebrajAdhikary5</p>
                <p>LinkedIn: linkedin.com/in/debrajadhikary5</p>
                <p>Location: {PERSONAL_INFO.location}</p>
              </div>
            </div>

            {/* Resume core outline */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
              
              {/* Left Column */}
              <div className="md:col-span-4 space-y-6">
                <div>
                  <h5 className="font-mono text-[11px] uppercase tracking-wider font-extrabold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Education Qualifications</span>
                  </h5>
                  <div className="space-y-4">
                    {education.map((edu, idx) => (
                      <div key={idx} className="space-y-1">
                        <h6 className="font-sans font-bold text-slate-800 dark:text-white text-xs">
                          {edu.degree}
                        </h6>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{edu.institution}</p>
                        <p className="text-[9px] font-mono text-blue-500">{edu.period}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed pt-0.5">{edu.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-mono text-[11px] uppercase tracking-wider font-extrabold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Technical & Soft Skills</span>
                  </h5>
                  <ul className="space-y-1.5">
                    {coreStrengths.map((strength, index) => (
                      <li key={index} className="flex gap-1.5 items-start text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-8 space-y-6 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 md:pl-6 pt-4 md:pt-0">
                <div>
                  <h5 className="font-mono text-[11px] uppercase tracking-wider font-extrabold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Structured Case Studies & Experience</span>
                  </h5>
                  
                  <div className="space-y-5">
                    <div>
                      <h6 className="font-sans font-bold text-slate-900 dark:text-white text-sm">
                        Naukri.com Job Market Analysis
                      </h6>
                      <span className="text-[9px] font-mono text-slate-500 dark:text-slate-450">Python • Pandas • NumPy • Matplotlib • Seaborn</span>
                      <ul className="list-disc list-outside text-xs text-slate-600 dark:text-slate-300 pl-4 space-y-1 mt-1">
                        <li>Cleaned and transformed listing data converting unstructured salary/experience notations into numerical targets.</li>
                        <li>Found that metro cities offered higher average pay ranges and required broader experience levels compared to smaller cities.</li>
                      </ul>
                    </div>

                    <div>
                      <h6 className="font-sans font-bold text-slate-900 dark:text-white text-sm">
                        Online Gaming Loyalty & Rewards Analysis
                      </h6>
                      <span className="text-[9px] font-mono text-slate-500 dark:text-slate-450">MySQL • Advanced Window Queries • CTEs • CASE • RANK</span>
                      <ul className="list-disc list-outside text-xs text-slate-600 dark:text-slate-300 pl-4 space-y-1 mt-1">
                        <li>Analyzed player behaviors compiling points across deposits, withdrawals, and game launches.</li>
                        <li>Designed an equitable ₹50,000 bonus distribution model (70% based on loyalty points, 30% on active games).</li>
                      </ul>
                    </div>

                    <div>
                      <h6 className="font-sans font-bold text-slate-900 dark:text-white text-sm">
                        Russian Tweets & 2016 US Election Engagement
                      </h6>
                      <span className="text-[9px] font-mono text-slate-500 dark:text-slate-450">Python • Exploratory Data Analysis (EDA) • Matplotlib</span>
                      <ul className="list-disc list-outside text-xs text-slate-600 dark:text-slate-300 pl-4 space-y-1 mt-1">
                        <li>Calculated hourly message frequencies to isolate bot-coordinated political engagements.</li>
                        <li>Discovered high correlation peaks in politically motivated tweets during the specific election week.</li>
                      </ul>
                    </div>

                    <div>
                      <h6 className="font-sans font-bold text-slate-900 dark:text-white text-sm">
                        Tesla Stock Price Prediction Model
                      </h6>
                      <span className="text-[9px] font-mono text-slate-500 dark:text-slate-450">Python • Random Forest Regressor • scikit-learn • Time Series</span>
                      <ul className="list-disc list-outside text-xs text-slate-600 dark:text-slate-300 pl-4 space-y-1 mt-1">
                        <li>Normalized decadal time series data and built a regression pipeline tracking trends.</li>
                        <li>Achieved high short-term predictability but validated inherent limits in long-range intervals.</li>
                      </ul>
                    </div>

                    <div>
                      <h6 className="font-sans font-bold text-slate-900 dark:text-white text-sm">
                        Hungary Meterological & Weather History Analysis
                      </h6>
                      <span className="text-[9px] font-mono text-slate-500 dark:text-slate-450">R • ANOVA • Linear Regressions • Decision Trees</span>
                      <ul className="list-disc list-outside text-xs text-slate-600 dark:text-slate-300 pl-4 space-y-1 mt-1">
                        <li>Mapped thermodynamic variables proving average 1.2°C summer anomaly changes over 30 years.</li>
                        <li>Extracted indicators showing extreme temperature transitions correlate heavily to air humidity.</li>
                      </ul>
                    </div>

                    <div className="border-t border-slate-200/50 dark:border-slate-800 pt-3">
                      <h6 className="font-sans font-bold text-slate-900 dark:text-white text-xs">
                        SEO Analytics Intern • MarketingBeku
                      </h6>
                      <p className="text-[9px] font-mono text-blue-500">7 Months Internship (Academic Period)</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        Applied keyword analytical patterns and landing page engagement metrics to improve client search ranks and optimize organic acquisition loops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Fullscreen resume model */}
        <AnimatePresence>
          {isFullscreenOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded w-full max-w-5xl h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col justify-between"
              >
                {/* Header operations */}
                <div className="p-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">Fullscreen Analytical CV Viewer</span>
                  <button
                    onClick={() => setIsFullscreenOpen(false)}
                    className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer border-none"
                    aria-label="Close Fullscreen"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Main page reproduction */}
                <div className="p-6 sm:p-10 md:p-14 flex-1 text-left bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200">
                  <div className="max-w-3xl mx-auto space-y-6">
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                      <h2 className="text-2xl font-extrabold font-sans text-slate-900 dark:text-white">{PERSONAL_INFO.name}</h2>
                      <p className="text-blue-500 font-mono text-xs tracking-wider uppercase mt-1">{PERSONAL_INFO.title}</p>
                      <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mt-2">
                        <span>Email: {PERSONAL_INFO.email}</span>
                        <span>•</span>
                        <span>Github: DebrajAdhikary5</span>
                        <span>•</span>
                        <span>LinkedIn: linkedin.com/in/debrajadhikary5</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-mono text-[10px] uppercase tracking-wider font-extrabold text-blue-500 mb-1.5">Education Focus</h4>
                          {education.map((edu, idx) => (
                            <div key={idx} className="mb-3">
                              <p className="font-sans font-bold text-xs text-slate-900 dark:text-white leading-tight">{edu.degree}</p>
                              <p className="text-[10px] text-slate-500">{edu.institution} ({edu.period})</p>
                            </div>
                          ))}
                        </div>
                        <div>
                          <h4 className="font-mono text-[10px] uppercase tracking-wider font-extrabold text-blue-500 mb-1.5">Technical Toolset</h4>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                            C, C++, Java, R, SQL, MySQL, Power BI, Excel (Advanced), Tableau, VBA, Oracle Data Platform, Pandas, NumPy, scikit-learn, Matplotlib, Seaborn.
                          </p>
                        </div>
                      </div>

                      <div className="col-span-2 space-y-4">
                        <h4 className="font-mono text-[10px] uppercase tracking-wider font-extrabold text-blue-600">Analytical Projects Detail</h4>
                        <div className="space-y-4 text-xs">
                          <div>
                            <h5 className="font-sans font-bold text-xs text-slate-900 dark:text-white">Naukri.com Job Market Analysis</h5>
                            <p className="text-slate-500 dark:text-slate-400 mt-0.5">Automated extraction of salary listings using Python regular expressions, parsing unstructured ranges into metrics to map salary parameters across Indian tech metro hubs.</p>
                          </div>
                          <div>
                            <h5 className="font-sans font-bold text-xs text-slate-900 dark:text-white">Online Gaming Platform Rewards Analysis</h5>
                            <p className="text-slate-500 dark:text-slate-400 mt-0.5">Queried player behavior repositories with complex CASE statements, GROUP BY aggregations, and ROW_NUMBER partitions to architect a fair ₹50,050 bonus dispersal.</p>
                          </div>
                          <div>
                            <h5 className="font-sans font-bold text-xs text-slate-900 dark:text-white">Russian Tweets US Election EDA</h5>
                            <p className="text-slate-500 dark:text-slate-400 mt-0.5">Identified spike patterns and frequency waves across massive tweet logs, proving heavy increases during critical US election days.</p>
                          </div>
                          <div>
                            <h5 className="font-sans font-bold text-xs text-slate-900 dark:text-white">Tesla Forecasting & Weather R Analysis</h5>
                            <p className="text-slate-500 dark:text-slate-400 mt-0.5">Developed machine learning regressions in Python and ANOVA/Decision Trees in R to isolate major temperature and price drivers.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer operations */}
                <div className="p-3 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex justify-end space-x-1.5">
                  <button
                    onClick={() => setIsFullscreenOpen(false)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-800 transition-colors bg-white hover:bg-slate-100 border border-slate-200 rounded cursor-pointer"
                  >
                    Close Fullscreen
                  </button>
                  <button
                    onClick={() => { setIsFullscreenOpen(false); handleDownloadMock(); }}
                    className="hd-btn-sm hd-btn-accent px-4 py-1.5"
                  >
                    Download CV
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
