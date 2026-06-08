import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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

  const footerLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Dashboards', id: 'dashboards' },
    { label: 'Certificates', id: 'certifications' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-400 py-10 border-t border-slate-850">
      
      {/* Decorative Wave Top Overlay with High Density blue theme */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot top layout splits */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-slate-800 pb-6 mb-6 text-center md:text-left">
          
          {/* Logo / Title specs */}
          <div className="md:col-span-5 space-y-2">
            <button
              onClick={() => handleScrollTo('hero')}
              className="flex items-center justify-center md:justify-start space-x-2 bg-transparent border-none cursor-pointer group animate-none"
            >
              <span className="font-mono text-base font-extrabold text-white transition-colors group-hover:text-blue-400">
                ⚡ Debraj Adhikary
              </span>
            </button>
            <p className="text-[11px] text-slate-500 max-w-sm font-sans mx-auto md:mx-0">
              Aspiring Data Analyst skilled in leveraging relational databases, predictive mathematical logic, and enterprise BI canvases to support strategic decision-making.
            </p>
          </div>

          {/* Nav Links grid */}
          <div className="md:col-span-4">
            <nav className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1.5">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Accent social icons */}
          <div className="md:col-span-3 flex justify-center md:justify-end space-x-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded hover:bg-slate-700 hover:text-white transition-all text-slate-400"
              aria-label="GitHub Profile"
              id="footer-github-link"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded hover:bg-slate-700 hover:text-blue-400 transition-all text-slate-400"
              aria-label="LinkedIn Profile"
              id="footer-linkedin-link"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 bg-slate-800 rounded hover:bg-slate-700 hover:text-blue-450 transition-all text-slate-400"
              aria-label="Direct Email Link"
              id="footer-email-link"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Foot bottom copyright layouts - HIGH DENSITY */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-center gap-4 text-[11px] font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Debraj Adhikary. All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-1 text-slate-500">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            <span>for Strategic Decisions.</span>
          </p>
        </div>

      </div>

      {/* Floating back-to-top widget - COMPACT HD STYLE */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 p-2 rounded bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 z-50 cursor-pointer border-none"
          title="Scroll up"
          aria-label="Scroll up to top of page"
          id="btn-scroll-to-top"
        >
          <ArrowUp className="w-3.5 h-3.5 stroke-[3px]" />
        </button>
      )}

    </footer>
  );
}
