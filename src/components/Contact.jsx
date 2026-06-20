import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from './react-bits/GradientText';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import SpotlightCard from './react-bits/SpotlightCard';
import Magnetic from './react-bits/Magnetic';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulate API request delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-[#0a0a0d] overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-[30%] left-[10%] w-[35vw] h-[35vw] bg-[#2563eb]/5 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-[#7c3aed]/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: CTA Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">GET IN TOUCH</span>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-6 tracking-tight leading-tight">
              Let's Build Something <GradientText>Extraordinary</GradientText>
            </h2>
            <p className="font-sans text-base md:text-lg text-[#94a3b8] mb-10 leading-relaxed">
              Have a web system, brand layout, or creative campaign video that needs premium execution? Reach out and let's craft a memorable digital product.
            </p>

            {/* Quick Contact links */}
            <div className="flex flex-col gap-6">
              
              {/* Mail */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl border border-white/5 bg-[#0e0e12]/60 hover:bg-[#2563eb]/20 text-[#94a3b8] group-hover:text-white group-hover:border-[#2563eb]/20 flex items-center justify-center transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#64748b] uppercase block">Email Me</span>
                  <a href="mailto:radityaabib511@gmail.com" className="text-sm font-semibold text-white hover:text-[#2563eb] transition-colors">
                    radityaabib511@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <Magnetic range={25} strength={0.3}>
                  <a
                    href="https://github.com/radityaabib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-white/5 bg-[#0e0e12]/60 hover:bg-white/5 hover:border-white/20 text-[#94a3b8] hover:text-white flex items-center justify-center transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={20} />
                  </a>
                </Magnetic>
                <Magnetic range={25} strength={0.3}>
                  <a
                    href="https://linkedin.com/in/radityaabib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-white/5 bg-[#0e0e12]/60 hover:bg-[#2563eb]/20 hover:border-[#2563eb]/30 text-[#94a3b8] hover:text-white flex items-center justify-center transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                </Magnetic>
                <Magnetic range={25} strength={0.3}>
                  <a
                    href="https://www.instagram.com/radityaabib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-white/5 bg-[#0e0e12]/60 hover:bg-[#2563eb]/20 hover:border-[#2563eb]/30 text-[#94a3b8] hover:text-white flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram Profile"
                  >
                    <InstagramIcon size={20} />
                  </a>
                </Magnetic>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 md:p-10 border border-white/5 bg-[#0e0e12]/60 rounded-3xl shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb] flex items-center justify-center mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
                    <p className="font-sans text-sm text-[#94a3b8] max-w-sm">
                      Thank you for reaching out. I've received your query and will reply within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-6 py-2.5 rounded-full border border-white/10 text-xs font-semibold text-[#94a3b8] hover:text-white hover:border-white/20 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-[#64748b] uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        placeholder="Your name"
                        className="w-full px-5 py-4 rounded-xl border border-white/5 bg-white/2 focus:bg-white/5 focus:border-[#2563eb]/50 text-white placeholder-slate-700 font-sans text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold tracking-widest text-[#64748b] uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        placeholder="hello@example.com"
                        className="w-full px-5 py-4 rounded-xl border border-white/5 bg-white/2 focus:bg-white/5 focus:border-[#2563eb]/50 text-white placeholder-slate-700 font-sans text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[10px] font-bold tracking-widest text-[#64748b] uppercase">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        placeholder="Hi Aria, let's collaborate on..."
                        className="w-full px-5 py-4 rounded-xl border border-white/5 bg-white/2 focus:bg-white/5 focus:border-[#2563eb]/50 text-white placeholder-slate-700 font-sans text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4">
                      <Magnetic range={30} strength={0.15}>
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wider uppercase bg-white text-black hover:bg-[#2563eb] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto shadow-md shadow-white/5 cursor-pointer disabled:opacity-50"
                        >
                          {status === 'sending' ? (
                            <>
                              Sending Message...
                              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send size={16} />
                            </>
                          )}
                        </button>
                      </Magnetic>
                    </div>

                  </motion.form>
                )}

              </AnimatePresence>

            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
