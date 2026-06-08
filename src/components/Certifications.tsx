import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATIONS } from '../data';
import { Certification } from '../types';
import { Award, Calendar, Link2, Eye, X, AwardIcon, Sparkles } from 'lucide-react';

export default function Certifications() {
  const [activePreview, setActivePreview] = useState<Certification | null>(null);

  const handleOpenPreview = (cert: Certification) => {
    if (cert.isUpcoming) return;
    setActivePreview(cert);
  };

  return (
    <section
      id="certifications"
      className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-850 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
          <span className="hd-label">Professional Accreditations</span>
          <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Training
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Verifiable credentials validating rigorous training across data engineering, business intelligence, and scientific structures.
          </p>
        </div>

        {/* Certifications Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert: Certification, idx) => {
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`hd-card flex flex-col justify-between h-full !p-0 ${
                  cert.isUpcoming ? 'opacity-60 bg-dashed' : 'hover:shadow-md transition-all group'
                }`}
              >
                <div>
                  {/* Photo area */}
                  <div className="h-32 bg-slate-50 dark:bg-slate-800 relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
                    <img
                      src={cert.imageSrc}
                      alt={cert.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        cert.isUpcoming ? 'filter blur-[1px]' : 'group-hover:scale-101 font-bold'
                      }`}
                      referrerPolicy="no-referrer"
                    />

                    {cert.isUpcoming ? (
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex flex-col items-center justify-center text-white p-2">
                        <Sparkles className="w-4 h-4 text-blue-450 mb-0.5" />
                        <span className="font-mono text-[9px] uppercase font-bold tracking-wider">Upcoming Initiative</span>
                      </div>
                    ) : (
                      // Interactive Action Icon Overlays
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-1.5">
                        <button
                          onClick={() => handleOpenPreview(cert)}
                          className="bg-white hover:bg-slate-100 text-slate-900 p-2 rounded shadow transition-all scale-95 cursor-pointer border border-slate-200"
                          title="View Certificate Preview"
                          aria-label="View Certificate Preview"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded shadow transition-all scale-95 flex items-center h-fit border border-blue-700"
                            title="Open URL Verification"
                            aria-label="Open URL Verification"
                          >
                            <Link2 className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Body textual content */}
                  <div className="p-3">
                    <div className="flex items-start space-x-1.5 mb-1">
                      <Award className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <h4 className="font-sans font-bold text-xs sm:text-xs text-slate-900 dark:text-white leading-tight">
                        {cert.name}
                      </h4>
                    </div>
                    <span className="block text-[10px] font-sans text-slate-500 dark:text-slate-400 font-medium ml-5">
                      {cert.organization}
                    </span>
                  </div>
                </div>

                {/* Footer section of certificate cards */}
                <div className="p-3 pt-0">
                  <div className="flex items-center space-x-1.5 text-slate-400 dark:text-slate-500 text-[10px] font-mono mb-3 border-t border-slate-200/55 dark:border-slate-800 pt-2 ml-1">
                    <Calendar className="w-3 h-3" />
                    <span>Completed {cert.issueDate}</span>
                  </div>

                  {!cert.isUpcoming ? (
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => handleOpenPreview(cert)}
                        className="hd-btn-sm flex-1 justify-center py-1.5 text-[10px]"
                        id={`btn-preview-cert-${cert.id}`}
                      >
                        Preview
                      </button>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hd-btn-sm hd-btn-accent flex-1 justify-center py-1.5 text-[10px] text-center"
                          id={`lnk-verify-cert-${cert.id}`}
                        >
                          Verify Link
                        </a>
                      )}
                    </div>
                  ) : (
                    <button
                      disabled
                      className="w-full py-1 bg-slate-100 dark:bg-slate-850 text-slate-405 dark:text-slate-600 text-[10px] font-semibold rounded text-center cursor-not-allowed uppercase tracking-wider border-none"
                    >
                      In Queue
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Previews Model Layer */}
        <AnimatePresence>
          {activePreview && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded w-full max-w-2xl overflow-hidden shadow-xl"
              >
                {/* Visual Header */}
                <div className="p-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AwardIcon className="w-4 h-4 text-blue-600" />
                    <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">Credentials Document Preview</span>
                  </div>
                  <button
                    onClick={() => setActivePreview(null)}
                    className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer border-none"
                    aria-label="Close Preview"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Simulated Certificate Graphic Layout */}
                <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-950 text-center flex flex-col items-center justify-between aspect-[1.414/1] relative border-b border-slate-205 dark:border-slate-800">
                  {/* Ornate styled border corner decorations */}
                  <div className="absolute top-4 left-4 border-t border-l border-blue-500 w-8 h-8" />
                  <div className="absolute top-4 right-4 border-t border-r border-blue-500 w-8 h-8" />
                  <div className="absolute bottom-4 left-4 border-b border-l border-blue-500 w-8 h-8" />
                  <div className="absolute bottom-4 right-4 border-b border-r border-blue-500 w-8 h-8" />

                  <div className="my-auto space-y-3 sm:space-y-4">
                    <span className="font-mono text-[10px] tracking-widest text-blue-600 uppercase font-semibold">Verification Certificate of Training</span>
                    <div>
                      <h4 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mt-1">
                        {activePreview.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">Issued to: <span className="font-semibold text-slate-800 dark:text-slate-300">Debraj Adhikary</span></p>
                    </div>

                    <div className="w-12 h-0.5 bg-slate-300 dark:bg-slate-800 mx-auto" />

                    <p className="text-xs sm:text-sm font-sans text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                      Assigned by <span className="font-semibold text-slate-800 dark:text-slate-205">{activePreview.organization}</span> for successfully compiling full coursework, labs, and interactive database inquiries.
                    </p>

                    <div className="flex items-center justify-center space-x-6 pt-2">
                      <div>
                        <span className="block text-[8px] text-slate-400 font-mono uppercase tracking-wider">Issue Date</span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{activePreview.issueDate}</span>
                      </div>
                      <div className="border-l border-slate-300 dark:border-slate-800 h-5" />
                      <div>
                        <span className="block text-[8px] text-slate-400 font-mono uppercase tracking-wider">Status Badge</span>
                        <span className="text-xs font-semibold text-emerald-500 uppercase font-mono tracking-widest">★ Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form controls footer */}
                <div className="p-3 bg-slate-50 dark:bg-slate-850 flex justify-end space-x-1.5">
                  <button
                    onClick={() => setActivePreview(null)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-605 dark:text-slate-400 hover:text-slate-800 transition-colors bg-white hover:bg-slate-100 border border-slate-200 rounded cursor-pointer"
                  >
                    Close Preview
                  </button>
                  {activePreview.credentialUrl && (
                    <a
                      href={activePreview.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hd-btn-sm hd-btn-accent text-center px-4"
                    >
                      Verify Credentials URL
                    </a>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
