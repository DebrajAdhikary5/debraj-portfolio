import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { 
  Github, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Database, 
  BookOpen, 
  Sparkles, 
  X, 
  BarChart3, 
  Terminal,
  Play
} from 'lucide-react';

export default function Projects() {
  const [selectedTool, setSelectedTool] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [activeSimulationProject, setActiveSimulationProject] = useState<Project | null>(null);

  const filterableTools = ['All', 'Python', 'MySQL', 'R', 'Star Schema Modeler', 'Power BI'];

  // Select the absolute strongest project as our hero Featured Project
  const featuredProject = PROJECTS.find((p) => p.id === 'sql-loyalty-bonus') || PROJECTS[0];

  // Filtrable list (excluding the top featured project structure or retaining it with a search trigger)
  const filteredProjects = PROJECTS.filter((p) => {
    // If we have selected a tool or entered query, we match all, otherwise we show other projects in current list
    const matchesTool =
      selectedTool === 'All' ||
      p.tools.some((t) => t.toLowerCase().includes(selectedTool.toLowerCase()));
    
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTool && matchesSearch;
  });

  const toggleExpandCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Simulation handler for direct SQL query or Pandas script live trial
  const triggerLiveDemoSimulation = (project: Project) => {
    setActiveSimulationProject(project);
  };

  return (
    <section
      id="projects"
      className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-850 transition-colors duration-300"
      aria-label="Case Studies and Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-10 pb-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-baseline flex-wrap gap-2">
          <div>
            <span className="hd-label">Selected Portfolio Work</span>
            <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-white tracking-tight">
              Case Studies & Analytical Projects
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
              Concrete application of SQL querying, database modeling, and predictive programming to solve actual business and organizational needs.
            </p>
          </div>
          <span className="inline-flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 px-2 py-1 rounded">
            ● Recruiter-ready
          </span>
        </div>

        {/* 1. Flagship Featured Case Study block */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-450 animate-pulse" />
            <h4 className="font-sans font-extrabold text-xs sm:text-sm text-slate-900 dark:text-slate-200 uppercase tracking-widest leading-none">
              Flagship Selected Case Study
            </h4>
          </div>

          <div className="bg-slate-50 dark:bg-slate-850 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 lg:p-10 rounded-lg shadow-sm hover:shadow transition-shadow flex flex-col lg:flex-row gap-8 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-650 via-indigo-650 to-[#E97627]" />
            
            {/* Project Screenshot / Thumbnail Area with Easy Replacement instructions */}
            <div className="lg:w-5/12 shrink-0 flex flex-col justify-between">
              <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 overflow-hidden shadow-inner group">
                <img
                  src={featuredProject.imageSrc}
                  alt={`Screenshot preview of ${featuredProject.title}`}
                  className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-101"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Easy local file replacement indicator */}
                <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-sm text-white font-mono text-[9px] px-2 py-0.5 rounded border border-slate-800">
                  📷 /public/gaming_loyalty.png
                </div>

                <div className="absolute bottom-2 right-2 bg-blue-600 text-white font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded shadow">
                  ★ Flagship Featured
                </div>
              </div>

              {/* Upload instructions helper */}
              <div className="mt-3 p-2 bg-slate-200/30 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/60 rounded text-[10px] text-slate-500 dark:text-slate-400 font-mono text-center">
                <span>🔧 Developer tip: Drop local image files in </span>
                <code className="text-blue-600 dark:text-blue-400 font-bold">public/</code>
                <span> to configure thumbnails</span>
              </div>
            </div>

            {/* Core Project Details info */}
            <div className="flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase font-bold block">
                    {featuredProject.subtitle}
                  </span>
                  <h5 className="text-lg sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-white leading-tight">
                    {featuredProject.title}
                  </h5>
                </div>

                <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-sm leading-relaxed font-sans">
                  {featuredProject.description}
                </p>

                {/* Key Findings section (Direct view metrics) */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-4 rounded space-y-2">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Analytical Insights & Actionable Takeaways</span>
                  </span>
                  <ul className="space-y-2">
                    {featuredProject.keyInsights.map((insight, index) => (
                      <li key={index} className="flex gap-2 items-start text-xs text-slate-650 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Badged tools list */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredProject.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/25 text-blue-800 dark:text-blue-400 text-[10px] font-mono border border-blue-100/50 dark:border-blue-900/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsive Operations Footer Buttons */}
              <div className="flex flex-wrap gap-2.5 border-t border-slate-200 dark:border-slate-800 pt-4">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hd-btn-sm hd-btn-accent px-4 py-2 text-xs font-bold"
                  id="flagship-github-btn"
                >
                  <Github className="w-4 h-4" />
                  <span>Code Repository</span>
                </a>
                
                <button
                  onClick={() => triggerLiveDemoSimulation(featuredProject)}
                  className="hd-btn-sm bg-slate-900 text-white hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-750 px-4 py-2 text-xs font-bold"
                  id="flagship-demo-btn"
                >
                  <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
                  <span>Try Live Query Demo</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Secondary Filterable Projects Area */}
        <div className="text-left mb-6">
          <h4 className="font-sans font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mb-1">
            Browse All Case Studies
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Use the dynamic query filter to scan project profiles by core technologies or keywords.
          </p>
        </div>

        {/* Filters and Search dashboard */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-8 bg-slate-50 dark:bg-slate-850 p-3 rounded border border-slate-200 dark:border-slate-800">
          {/* Tool Filter pills */}
          <div className="flex flex-wrap gap-1 w-full md:w-auto">
            {filterableTools.map((tool) => (
              <button
                key={tool}
                onClick={() => setSelectedTool(tool)}
                className={`px-3 py-1.5 rounded text-[11px] font-bold cursor-pointer transition-colors ${
                  selectedTool === tool
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800'
                }`}
              >
                {tool}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
              <Search className="w-3.5 h-3.5 text-slate-400" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keywords (e.g. Pandas, R)"
              className="w-full bg-white dark:bg-slate-900 text-slate-850 dark:text-white rounded border border-slate-200 dark:border-slate-800 py-1.5 pl-8 pr-3 text-xs font-sans focus:outline-none focus:border-blue-500"
              aria-label="Filter case studies"
            />
          </div>
        </div>

        {/* Empty Search Output */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-10 bg-slate-50 dark:bg-slate-850 border border-slate-200/50 dark:border-slate-800 rounded">
            <p className="text-slate-500 dark:text-slate-400 text-xs">
              No specific case studies matched your query "{searchQuery}".
            </p>
            <button
              onClick={() => { setSelectedTool('All'); setSearchQuery(''); }}
              className="text-blue-600 dark:text-blue-400 font-mono text-xs mt-2 underline cursor-pointer border-none bg-transparent"
            >
              Reset view variables
            </button>
          </div>
        )}

        {/* Dynamic Project Grid - slightly larger cards for recruiter-first scannability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project, idx) => {
            const isExpanded = expandedCards[project.id] ?? false;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="hd-card flex flex-col justify-between group h-full !p-0 hover:border-slate-300 dark:hover:border-slate-700 transition-all border border-slate-200 dark:border-slate-850 overflow-hidden"
              >
                {/* Image Area with Lazy Loading and placeholder reference */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-805">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101 select-none"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {project.id === 'sql-loyalty-bonus' && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded shadow">
                      ★ Flagship
                    </span>
                  )}

                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white font-mono text-[9px] px-2 py-0.5 rounded border border-slate-800">
                    📷 /{project.id === 'sql-loyalty-bonus' ? 'gaming_loyalty' : project.id === 'naukri-job-market' ? 'naukri_eda' : project.id === 'russian-tweets' ? 'russian_trolls' : project.id === 'tesla-stock' ? 'tsla_ml' : 'climate_r'}.png
                  </div>

                  <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white font-mono text-[9px] uppercase px-1.5 py-0.5 rounded">
                    {project.tools[0]} • {project.tools[1] || 'Core'}
                  </span>
                </div>

                {/* Info and operations */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[9px] font-mono tracking-wider text-slate-400 dark:text-slate-500 uppercase block mb-0.5">
                      {project.subtitle}
                    </span>
                    <h5 className="text-base sm:text-lg font-sans font-extrabold text-slate-950 dark:text-white leading-snug">
                      {project.title}
                    </h5>
                    <p className="text-slate-500 dark:text-slate-350 text-xs leading-relaxed mt-2">
                      {project.description}
                    </p>

                    {/* Tools list */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tools.map((t) => (
                        <span
                          key={t}
                          className="px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-300 text-[10px] font-mono border border-slate-200/45 dark:border-slate-700/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Detailed expanded checklist toggled gracefully */}
                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                      <button
                        onClick={() => toggleExpandCard(project.id)}
                        className="flex items-center space-x-1.5 text-xs font-semibold text-blue-650 dark:text-blue-400 hover:text-blue-700 bg-transparent border-none cursor-pointer p-0 select-none mb-1.5"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Key Takeaways' : 'View Key Takeaways'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.2 }}
                          className="space-y-1.5 mt-2 bg-slate-50 dark:bg-slate-850 p-2.5 rounded border border-slate-200/50"
                        >
                          {project.keyInsights.map((insight, index) => (
                            <div key={index} className="flex gap-2 items-start text-[11px] text-slate-600 dark:text-slate-350">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{insight}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hd-btn-sm text-xs font-semibold flex-1 justify-center py-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                      id={`project-github-link-${project.id}`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                    
                    <button
                      onClick={() => toggleExpandCard(project.id)}
                      className="hd-btn-sm text-xs font-medium py-2 px-3 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                      title="Inspect insights"
                      aria-label="Inspect insights"
                    >
                      <span>Insights</span>
                    </button>

                    <button
                      onClick={() => triggerLiveDemoSimulation(project)}
                      className="hd-btn-sm hd-btn-accent text-xs font-semibold flex-1 justify-center py-2"
                    >
                      <Play className="w-3 h-3 text-white fill-white" />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. SIMULATION DRAWER MODAL - Interactive Demo simulator for recruiters */}
        <AnimatePresence>
          {activeSimulationProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col"
              >
                {/* Header */}
                <div className="p-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-805 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-blue-600" />
                    <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
                      Interactive Analytical Sandbox: {activeSimulationProject.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveSimulationProject(null)}
                    className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer border-none bg-transparent"
                    aria-label="Close Simulation"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Simulation contents based on project ID */}
                <div className="p-6 text-left space-y-4 max-h-[75vh] overflow-y-auto">
                  <h5 className="font-sans font-extrabold text-sm text-slate-900 dark:text-white">
                    Live Demo: Project Simulation & Output Matrix
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    This sandbox runs real mock variables calculated in {activeSimulationProject.tools.slice(0, 3).join(', ')} modeling pipelines to represent core dataset summaries.
                  </p>

                  {/* SQL loyalty segment demonstration */}
                  {activeSimulationProject.id === 'sql-loyalty-bonus' && (
                    <div className="space-y-3">
                      <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-[10px] space-y-1 shadow-inner overflow-x-auto border border-slate-850">
                        <span className="text-slate-400">-- CTE segmenting gaming points & ₹50,000 bonus allocation</span>
                        <p><span className="text-purple-400">WITH</span> PlayerPoints <span className="text-purple-400">AS</span> (</p>
                        <p className="pl-4">SELECT user_id, SUM(points) as loy_pts,</p>
                        <p className="pl-8">ROW_NUMBER() OVER(ORDER BY SUM(points) DESC) as pts_rank</p>
                        <p className="pl-4">FROM player_events GROUP BY user_id</p>
                        <p>)</p>
                        <p><span className="text-purple-400">SELECT</span> user_id, loy_pts, pts_rank, </p>
                        <p className="pl-4">CASE WHEN pts_rank &lt;= 10 THEN 'Elite VIP' ELSE 'Active Regular' END as tier</p>
                        <p className="text-slate-400">  -- 70% points share distribution baseline</p>
                        <p className="pl-4">FROM PlayerPoints LIMIT 4;</p>
                      </div>

                      <div className="space-y-1">
                        <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">Query Execution Output Matrix (Loyalty segments):</span>
                        <div className="border border-slate-200 dark:border-slate-800 rounded overflow-hidden text-xs">
                          <table className="w-full text-left font-mono text-[11px]">
                            <thead>
                              <tr className="bg-slate-100 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800">
                                <th className="p-1.5 text-slate-600 dark:text-slate-400 font-bold">user_id</th>
                                <th className="p-1.5 text-slate-600 dark:text-slate-400 font-bold">loy_pts</th>
                                <th className="p-1.5 text-slate-600 dark:text-slate-400 font-bold">pts_rank</th>
                                <th className="p-1.5 text-slate-600 dark:text-slate-400 font-bold">tier</th>
                                <th className="p-1.5 text-slate-600 dark:text-slate-400 font-bold">bonus_share</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="p-1.5 text-blue-600 dark:text-blue-400 font-bold">#US_2041</td>
                                <td className="p-1.5">4,850 Pts</td>
                                <td className="p-1.5">1</td>
                                <td className="p-1.5"><span className="bg-emerald-50 dark:bg-emerald-950/35 text-emerald-800 dark:text-emerald-400 px-1 py-0.5 rounded text-[10px]">Elite VIP</span></td>
                                <td className="p-1.5 font-sans font-bold text-slate-900 dark:text-white">₹3,450</td>
                              </tr>
                              <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="p-1.5 text-blue-600 dark:text-blue-400 font-bold">#US_3025</td>
                                <td className="p-1.5">2,910 Pts</td>
                                <td className="p-1.5">2</td>
                                <td className="p-1.5"><span className="bg-emerald-50 dark:bg-emerald-950/35 text-emerald-800 dark:text-emerald-400 px-1 py-0.5 rounded text-[10px]">Elite VIP</span></td>
                                <td className="p-1.5 font-sans font-bold text-slate-900 dark:text-white">₹2,840</td>
                              </tr>
                              <tr className="border-b border-slate-200 dark:border-slate-800">
                                <td className="p-1.5 text-blue-600 dark:text-blue-400 font-bold">#US_1850</td>
                                <td className="p-1.5">1,240 Pts</td>
                                <td className="p-1.5">15</td>
                                <td className="p-1.5"><span className="bg-blue-50 dark:bg-blue-950/35 text-blue-800 dark:text-blue-400 px-1 py-0.5 rounded text-[10px]">Active Regular</span></td>
                                <td className="p-1.5 font-sans font-bold text-slate-900 dark:text-white">₹780</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Naukri Job market segment demonstration */}
                  {activeSimulationProject.id === 'naukri-job-market' && (
                    <div className="space-y-3">
                      <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-[10px] space-y-1 shadow-inner overflow-x-auto">
                        <span className="text-slate-400"># Python regex extraction script testing</span>
                        <p><span className="text-orange-400">import</span> re</p>
                        <p><span className="text-orange-400">def</span> <span className="text-blue-400">parse_salary</span>(raw_str):</p>
                        <p className="pl-4">nums = [int(s) <span className="text-orange-400">for</span> s <span className="text-orange-400">in</span> re.findall(<span className="text-emerald-400">r'\d+'</span>, raw_str.replace(<span className="text-emerald-400">','</span>, <span className="text-emerald-400">''</span>))]</p>
                        <p className="pl-4"><span className="text-orange-400">return</span> sum(nums)/len(nums) <span className="text-orange-400">if</span> nums <span className="text-orange-400">else</span> None</p>
                        <p className="text-slate-400 pl-4"># Test Input:</p>
                        <p className="pl-4">print(parse_salary(<span className="text-emerald-400">"Rs 6,00,000 - 10,00,000 P.A."</span>))</p>
                      </div>

                      <div className="bg-slate-950 text-emerald-400 p-3 rounded font-mono text-xs border border-slate-900 shadow-inner">
                        <p className="text-slate-500">Executing parsed pipeline in python memory space...</p>
                        <p className="text-white font-bold">&gt;&gt;&gt; Calculated Average: 800000.0 INR (8.0 LPA)</p>
                        <p className="text-slate-300">Successfully matched Salary distribution boundaries inside Naukri listings dataset.</p>
                      </div>
                    </div>
                  )}

                  {/* Russian tweets simulator */}
                  {activeSimulationProject.id === 'russian-tweets' && (
                    <div className="space-y-3">
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Below is a mock representation of detected coordinate spikes during 2016 electoral operations:</p>
                      <div className="border border-slate-200 dark:border-slate-800 p-4 rounded bg-slate-50 dark:bg-slate-900 relative">
                        <div className="h-28 flex items-end justify-between px-6 pt-2">
                          <div className="flex flex-col items-center"><span className="text-[9px] text-slate-400 mb-1">Sep</span><span className="w-8 h-8 bg-blue-500 rounded-t" /></div>
                          <div className="flex flex-col items-center"><span className="text-[9px] text-slate-400 mb-1">Oct</span><span className="w-8 h-12 bg-blue-600 rounded-t" /></div>
                          <div className="flex flex-col items-center"><span className="text-[9px] text-slate-400 mb-1">Nov (Peak)</span><span className="w-8 h-24 bg-red-500 rounded-t animate-pulse" /></div>
                          <div className="flex flex-col items-center"><span className="text-[9px] text-slate-400 mb-1">Dec</span><span className="w-8 h-6 bg-slate-400 rounded-t" /></div>
                        </div>
                        <p className="text-[10px] text-center font-mono text-slate-400 mt-2 border-t pt-2">Spike Coefficient: +412% hourly coordinate bots volume boost</p>
                      </div>
                    </div>
                  )}

                  {/* fallback dynamic case */}
                  {!['sql-loyalty-bonus', 'naukri-job-market', 'russian-tweets'].includes(activeSimulationProject.id) && (
                    <div className="border border-slate-200 dark:border-slate-800 rounded p-4 text-center font-mono text-xs py-10">
                      <span className="block text-slate-450 dark:text-slate-500">Currently preparing the telemetry demo engine...</span>
                      <span className="block text-blue-500 font-bold mt-1">Status: Offline / Awaiting SQL schemas connection</span>
                    </div>
                  )}

                </div>

                {/* Footer buttons */}
                <div className="p-3 bg-slate-50 dark:bg-slate-850 border-t border-slate-205 dark:border-slate-805 flex justify-end space-x-1.5">
                  <button
                    onClick={() => setActiveSimulationProject(null)}
                    className="px-4 py-1.5 text-xs font-semibold text-slate-650 dark:text-slate-404 hover:text-slate-850 transition-colors bg-white hover:bg-slate-100 border border-slate-200 rounded cursor-pointer"
                  >
                    Close Demo View
                  </button>
                  <a
                    href={activeSimulationProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hd-btn-sm hd-btn-accent px-4 py-1.5"
                  >
                    Browse GitHub Code
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
