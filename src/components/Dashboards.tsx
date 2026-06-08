import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { POWER_BI_DASHBOARDS, TABLEAU_DASHBOARDS } from '../data';
import { Dashboard } from '../types';
import { BarChart3, PieChart, Eye, X, Sparkles } from 'lucide-react';

export default function Dashboards() {
  const [activeTab, setActiveTab] = useState<'powerbi' | 'tableau'>('powerbi');
  const [selectedDashboard, setSelectedDashboard] = useState<Dashboard | null>(null);

  const handleOpenDetail = (dash: Dashboard) => {
    if (dash.comingSoon) return;
    setSelectedDashboard(dash);
  };

  const currentDashboardsList = activeTab === 'powerbi' ? POWER_BI_DASHBOARDS : TABLEAU_DASHBOARDS;

  return (
    <section
      id="dashboards"
      className="py-12 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-850 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Gallery Heading */}
        <div className="text-left mb-8 pb-4 border-b border-slate-200/60 dark:border-slate-800">
          <span className="hd-label">Business Intelligence Showcases</span>
          <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-white tracking-tight">
            Interactive BI Dashboards
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Review live strategic metrics, calculated fields, and relational star schemas developed in Power BI and Tableau.
          </p>
        </div>

        {/* Horizontal Navigation Tabs (High Density Setup) */}
        <div className="flex justify-start mb-8">
          <div className="inline-flex bg-white dark:bg-slate-900 p-1 rounded border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => { setActiveTab('powerbi'); setSelectedDashboard(null); }}
              className={`flex items-center space-x-1 px-4 py-1.5 rounded text-[11px] font-bold cursor-pointer transition-all ${
                activeTab === 'powerbi'
                  ? 'bg-blue-600 text-white dark:bg-blue-500 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Power BI Gallery</span>
            </button>
            <button
              onClick={() => { setActiveTab('tableau'); setSelectedDashboard(null); }}
              className={`flex items-center space-x-1 px-4 py-1.5 rounded text-[11px] font-bold cursor-pointer transition-all ${
                activeTab === 'tableau'
                  ? 'bg-blue-600 text-white dark:bg-blue-500 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <PieChart className="w-3.5 h-3.5" />
              <span>Tableau Gallery</span>
            </button>
          </div>
        </div>

        {/* Dashboards Representation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentDashboardsList.map((dash: Dashboard, idx) => {
            if (dash.comingSoon) {
              return (
                <motion.div
                  key={dash.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-slate-50 dark:bg-slate-900/40 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg p-5 flex flex-col justify-between h-full text-left relative"
                  tabIndex={0}
                >
                  {/* Glassmorphic platform watermark tag */}
                  <span className="absolute top-3 right-3 bg-slate-900 text-white font-mono text-[9px] font-semibold px-2 py-0.5 rounded">
                    {dash.platform} Block
                  </span>

                  <div className="space-y-4">
                    {/* Interactive Blueprint Mockup Graphic */}
                    <div className="h-32 rounded bg-slate-100 dark:bg-slate-950 flex flex-col justify-between p-3 border border-slate-200/50 dark:border-slate-850 shadow-inner overflow-hidden relative">
                      <div className="flex justify-between items-center border-b border-slate-200/30 dark:border-indigo-900/30 pb-1.5">
                        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider">Currently Modeling Schema</span>
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                      
                      {/* Blueprint Bar chart shapes */}
                      <div className="flex items-end justify-center space-x-1.5 h-12 pt-2 opacity-30">
                        <span className="w-3 h-4 bg-slate-400 dark:bg-slate-700 rounded-t" />
                        <span className="w-3 h-8 bg-slate-400 dark:bg-slate-700 rounded-t" />
                        <span className="w-3 h-10 bg-blue-500 rounded-t" />
                        <span className="w-3 h-6 bg-slate-400 dark:bg-slate-700 rounded-t" />
                        <span className="w-3 h-3 bg-slate-400 dark:bg-slate-700 rounded-t" />
                      </div>

                      {/* Path Tag */}
                      <span className="text-[9px] font-mono text-blue-500 text-center block bg-white dark:bg-slate-900 py-0.5 border border-slate-100 dark:border-slate-800 rounded">
                        📷 Thumbnail path: /public/{dash.id}.png
                      </span>
                    </div>

                    <div>
                      <span className="inline-flex items-center text-[10px] font-mono text-blue-600 dark:text-blue-450 uppercase font-bold tracking-wider mb-1">
                        🛠️ Active Development
                      </span>
                      <h4 className="text-sm font-sans font-bold text-slate-800 dark:text-slate-200 leading-snug">
                        {dash.title}
                      </h4>
                      <p className="text-slate-400 dark:text-slate-500 text-xs leading-relaxed mt-1">
                        {dash.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/40 dark:border-slate-800 flex flex-wrap gap-1 mt-4">
                    {dash.toolsUsed.map((tool) => (
                      <span key={tool} className="text-[9px] font-mono text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 px-1.5 py-0.5 border border-slate-200/50 dark:border-slate-800 rounded">
                        #{tool}
                      </span>
                    ))}
                    <span className="text-[9px] font-mono text-blue-500 font-bold self-center ml-auto">
                      Slots Active
                    </span>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={dash.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => handleOpenDetail(dash)}
                className="hd-card flex flex-col justify-between h-full !p-0 hover:shadow-md cursor-pointer group"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleOpenDetail(dash); }}
              >
                {/* Visual Preview Area */}
                <div className="relative h-40 bg-slate-50 dark:bg-slate-800 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                  <img
                    src={dash.imageSrc}
                    alt={dash.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Glassmorphic platform watermark tag */}
                  <span className="absolute top-2.5 right-2.5 bg-slate-950/85 border border-slate-800/60 text-white font-mono text-[9px] font-semibold px-2 py-0.5 rounded">
                    {dash.platform}
                  </span>

                  {/* Hover Peek overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="bg-white text-slate-900 px-3 py-1.5 rounded text-[11px] font-bold flex items-center space-x-1 shadow">
                      <Eye className="w-3.5 h-3.5 text-blue-605" />
                      <span>Interactive Breakdown</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Details info card */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-sans font-bold text-slate-900 dark:text-white leading-snug mb-1.5">
                      {dash.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-350 text-xs leading-relaxed mb-3">
                      {dash.description}
                    </p>

                    {/* Dashboard KPIs metrics snapshot */}
                    {dash.kpis && (
                      <div className="mb-3 bg-slate-50 dark:bg-slate-850 p-2 border border-slate-200/50 dark:border-slate-800 space-y-1">
                        <span className="hd-label !mb-1 !text-[8px]">
                          Key Indicators In Dashboard
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {dash.kpis.slice(0, 2).map((kpi, kIdx) => (
                            <span key={kIdx} className="text-[10px] bg-blue-50 text-blue-800 dark:bg-blue-950/20 dark:text-blue-400 font-sans font-bold px-1.5 py-0.5 rounded border border-blue-105/50 dark:border-blue-900/30">
                              {kpi}
                            </span>
                          ))}
                          {dash.kpis.length > 2 && (
                            <span className="text-[9px] text-slate-400 font-mono self-center ml-1">
                              +{dash.kpis.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Metadata technology list */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1">
                    {dash.toolsUsed.map((tool) => (
                      <span key={tool} className="text-[9px] font-mono text-slate-450 dark:text-slate-400 bg-slate-50 dark:bg-slate-850 px-1.5 py-0.5 border border-slate-200/40 dark:border-slate-800 rounded">
                        #{tool}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Immersive Analyst interrogation console */}
        <AnimatePresence>
          {selectedDashboard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl"
               id="dashboard-telemetry-modal"
              >
                {/* Header controls bar */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850/50 rounded-t">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 bg-blue-600 text-white rounded">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="hd-label !mb-0 text-[10px]">
                        {selectedDashboard.platform} Analyst Exploration
                      </span>
                      <h4 className="font-sans font-extrabold text-slate-900 dark:text-white text-base">
                        {selectedDashboard.title}
                      </h4>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDashboard(null)}
                    className="p-1.5 rounded text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700 cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Content Panel Grid */}
                <div className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left grid */}
                  <div className="lg:col-span-7 space-y-3">
                    <span className="hd-label">Dashboard Schematics</span>
                    <div className="relative border border-slate-200 dark:border-slate-850 rounded overflow-hidden bg-slate-100 dark:bg-slate-950 p-4 aspect-[16/10] flex flex-col justify-between shadow-inner">
                      {/* Grid representation & header */}
                      <div className="flex items-center justify-between border-b border-slate-200/30 dark:border-slate-800/30 pb-2.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E97627]">{selectedDashboard.title}</span>
                        <div className="flex space-x-1">
                          <span className="w-2 h-1 bg-blue-500 rounded" />
                          <span className="w-2 h-1 bg-emerald-500 rounded" />
                        </div>
                      </div>

                      {/* Mock Chart Layout representing a stunning BI workspace */}
                      <div className="grid grid-cols-3 gap-2.5 my-3 flex-1 items-center">
                        <div className="col-span-2 h-full bg-white dark:bg-slate-900 rounded border border-slate-200/60 dark:border-slate-800 p-2.5 flex flex-col justify-between">
                          <span className="text-[8px] font-mono text-slate-400">Quarterly Trends (Calculated Mean)</span>
                          <div className="w-full h-14 flex items-end justify-between px-2 pt-2">
                            <span className="w-3.5 h-5 bg-blue-500/80 rounded-t" />
                            <span className="w-3.5 h-11 bg-blue-600/80 rounded-t" />
                            <span className="w-3.5 h-7 bg-emerald-500/80 rounded-t" />
                            <span className="w-3.5 h-12 bg-blue-700/80 rounded-t" />
                            <span className="w-3.5 h-9 bg-blue-400/80 rounded-t" />
                          </div>
                        </div>
                        <div className="col-span-1 h-full flex flex-col gap-2 justify-between">
                          <div className="bg-white dark:bg-slate-900 rounded border border-slate-200/60 dark:border-slate-800 p-2 text-center flex-1 flex flex-col justify-center">
                            <span className="text-[7px] font-mono text-slate-400">Active Retain</span>
                            <span className="text-xs font-bold text-emerald-500">88.4%</span>
                          </div>
                          <div className="bg-white dark:bg-slate-900 rounded border border-slate-200/60 dark:border-slate-800 p-2 text-center flex-1 flex flex-col justify-center">
                            <span className="text-[7px] font-mono text-slate-400">Delta Ratio</span>
                            <span className="text-xs font-bold text-blue-500">+12%</span>
                          </div>
                        </div>
                      </div>

                      {/* bottom metrics indicators */}
                      <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 pt-2 border-t border-slate-200/20">
                        <span>Database: SQL Star-Schema Pipeline</span>
                        <span>Platform: Desktop 2.124v</span>
                      </div>
                    </div>
                  </div>

                  {/* Right grid */}
                  <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                    <div>
                      <span className="hd-label">Problem & Analytical Focus</span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        This dashboard serves enterprise stakeholder analytics. It integrates data from relational structures, aggregates KPIs on runtime, and is fully responsive to drill-downs. 
                      </p>

                      <span className="hd-label">Calculated Key Indicators</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {selectedDashboard.kpis?.map((kpi, index) => (
                          <div
                            key={index}
                            className="bg-slate-50 dark:bg-slate-850 p-2 rounded border border-slate-200/40 dark:border-slate-800"
                          >
                            <span className="text-[11px] font-sans font-bold text-slate-800 dark:text-slate-200">
                              {kpi}
                            </span>
                          </div>
                        ))}
                      </div>

                      <span className="hd-label">ETL & Star Schema Modeling</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedDashboard.toolsUsed.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-400 text-[9px] font-mono border border-blue-100/40 dark:border-blue-900/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedDashboard(null)}
                      className="hd-btn-sm hd-btn-accent w-full justify-center py-2 uppercase mt-4"
                    >
                      Acknowledge & Close
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
