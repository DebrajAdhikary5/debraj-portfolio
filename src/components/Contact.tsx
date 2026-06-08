import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (emailStr: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Real-time error clearance
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!form.message.trim()) {
      newErrors.message = 'Message content cannot be blank.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters for detailed analysis requests.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate database write or email dispatch latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setForm({ name: '', email: '', subject: '', message: '' });
    setSubmitSuccess(false);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-850 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
          <span className="hd-label">Inquiry Channel</span>
          <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect With Me
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Seeking to collaborate, discuss recruitment openings, or consult on a data integration problem? Send a direct message below.
          </p>
        </div>

        {/* Form & Channels wrapper grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto">
          
          {/* Left panel: Direct coordinate links */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-sans font-bold text-slate-900 dark:text-white text-base">
              Contact Channels
            </h4>
            <p className="text-slate-500 dark:text-slate-350 text-xs leading-relaxed">
              Recruiters are welcome to trigger communication via email or view social footprints on LinkedIn and GitHub repositories.
            </p>

            {/* Visual link pill list */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-3 p-3 rounded bg-slate-50 hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800 transition-colors group cursor-pointer"
                id="contact-email-link"
              >
                <div className="p-2 bg-white dark:bg-slate-900 rounded text-blue-600 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[8px] uppercase font-mono text-slate-400 font-bold">Direct Delivery</span>
                  <span className="block text-xs font-sans font-bold text-slate-700 dark:text-slate-200 truncate max-w-[180px] sm:max-w-[240px]">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded bg-slate-50 hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800 transition-colors group cursor-pointer"
                id="contact-linkedin-link"
              >
                <div className="p-2 bg-white dark:bg-slate-900 rounded text-blue-600 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[8px] uppercase font-mono text-slate-400 font-bold">LinkedIn Profile</span>
                  <span className="flex items-center font-sans font-bold text-slate-700 dark:text-slate-200 text-xs">
                    <span>debrajadhikary5</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 ml-1 inline" />
                  </span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded bg-slate-50 hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800 transition-colors group cursor-pointer"
                id="contact-github-link"
              >
                <div className="p-2 bg-white dark:bg-slate-900 rounded text-slate-800 dark:text-white transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[8px] uppercase font-mono text-slate-400 font-bold">GitHub Repository Hub</span>
                  <span className="flex items-center font-sans font-bold text-slate-700 dark:text-slate-200 text-xs">
                    <span>DebrajAdhikary5</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 ml-1 inline" />
                  </span>
                </div>
              </a>

              <div className="flex items-center space-x-3 p-3 rounded bg-slate-50 dark:bg-slate-850 border border-slate-200/50 dark:border-slate-800">
                <div className="p-2 bg-white dark:bg-slate-900 rounded text-blue-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[8px] uppercase font-mono text-slate-400 font-bold">Geographic Zone</span>
                  <span className="block text-xs font-sans font-bold text-slate-700 dark:text-slate-200">
                    India (Remote Work Capable)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Active Form console */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-850 p-5 sm:p-6 rounded border border-slate-200 dark:border-slate-800">
            <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm mb-4 text-left">
              Send an Analytical Inquiry
            </h4>

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form-el"
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left"
                >
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-form-name" className="block text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 pb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-form-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded border py-2 px-3 text-xs focus:outline-none ${
                        errors.name
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <div className="flex items-center space-x-1 text-red-500 text-[10px] font-mono mt-0.5">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-form-email" className="block text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 pb-1">
                      Your Corporate Email
                    </label>
                    <input
                      type="email"
                      id="contact-form-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="janedoe@company.com"
                      className={`w-full bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded border py-2 px-3 text-xs focus:outline-none ${
                        errors.email
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center space-x-1 text-red-500 text-[10px] font-mono mt-0.5">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="contact-form-subject" className="block text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 pb-1">
                      Subject Matter
                    </label>
                    <input
                      type="text"
                      id="contact-form-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Data Analyst Opportunity / Collaboration Query"
                      className={`w-full bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded border py-2 px-3 text-xs focus:outline-none ${
                        errors.subject
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.subject && (
                      <div className="flex items-center space-x-1 text-red-500 text-[10px] font-mono mt-0.5">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-form-message" className="block text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 pb-1">
                      Inquiry Description
                    </label>
                    <textarea
                      id="contact-form-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Enter details of your requirement, technology environment, or analytical objectives here..."
                      className={`w-full bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded border py-2 px-3 text-xs focus:outline-none ${
                        errors.message
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <div className="flex items-center space-x-1 text-red-500 text-[10px] font-mono mt-0.5">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Form Submit Trigger button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="hd-btn-sm hd-btn-accent w-full justify-center py-2.5 uppercase"
                    id="contact-form-submit-button"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Dispatching Packet...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // Detailed visual feedback panel on successful delivery
                <motion.div
                  key="contact-success-panel"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-6 space-y-4 flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/20 text-emerald-500 flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-slate-900 dark:text-white text-sm">
                      Insight Dispatch Successful!
                    </h5>
                    <p className="text-slate-500 dark:text-slate-400 text-xs max-w-sm mx-auto mt-1 leading-relaxed">
                      Deep calculations completed! Your message has been routed. Debraj Adhikary will evaluate the analytical indices and return feedback shortly.
                    </p>
                  </div>

                  {/* Summary of sent fields mock */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-3 text-left w-full space-y-2 max-w-md">
                    <span className="block text-[8px] font-mono uppercase text-slate-400 font-bold border-b pb-1">
                      Submitted Message Metadata:
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400"><strong className="text-slate-850 dark:text-slate-350">Originator:</strong> {form.name} ({form.email})</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400"><strong className="text-slate-850 dark:text-slate-350">Topic Index:</strong> {form.subject}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 truncate"><strong className="text-slate-850 dark:text-slate-350">Snippet:</strong> "{form.message}"</p>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="hd-btn-sm hd-btn-accent px-5 py-2 uppercase"
                  >
                    Write Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
