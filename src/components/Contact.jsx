import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
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
  const { t } = useApp();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Message from ${formData.name} via Portfolio`,
          from_name: "Portfolio Contact Form"
        })
      });

      const result = await response.json();
      if (response.status === 200 || result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Web3Forms submission failed:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-dark-bg-alt overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-[30%] left-[10%] w-[35vw] h-[35vw] bg-accent-blue/5 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-accent-purple/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: CTA Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">{t.contact.tag}</span>
            <h2 className="font-display font-black text-4xl md:text-6xl text-text-primary mb-6 tracking-tight leading-tight">
              {t.contact.headline} <GradientText>{t.contact.headlineAccent}</GradientText>
            </h2>
            <p className="font-sans text-base md:text-lg text-text-secondary mb-10 leading-relaxed">
              {t.contact.desc}
            </p>

            {/* Quick Contact links */}
            <div className="flex flex-col gap-6">

              {/* Mail */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 squircle-sm border border-border-subtle bg-dark-card/60 hover:bg-accent-blue/20 text-text-secondary group-hover:text-text-primary group-hover:border-accent-blue/20 flex items-center justify-center transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-text-muted uppercase block">{t.contact.emailLabel}</span>
                  <a href="mailto:radityaabib511@gmail.com" className="text-sm font-semibold text-text-primary hover:text-accent-blue transition-colors">
                    radityaabib511@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <Magnetic range={25} strength={0.3}>
                  <a
                    href="https://github.com/koutasatouu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 squircle-sm border border-border-subtle bg-dark-card/60 hover:bg-dark-card hover:border-border-subtle/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={20} />
                  </a>
                </Magnetic>
                <Magnetic range={25} strength={0.3}>
                  <a
                    href="https://www.linkedin.com/in/radityaabib/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 squircle-sm border border-border-subtle bg-dark-card/60 hover:bg-accent-blue/20 hover:border-accent-blue/30 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                </Magnetic>
                <Magnetic range={25} strength={0.3}>
                  <a
                    href="https://www.instagram.com/radityaabib/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 squircle-sm border border-border-subtle bg-dark-card/60 hover:bg-accent-blue/20 hover:border-accent-blue/30 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300"
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
            <SpotlightCard className="p-8 md:p-10 squircle-lg shadow-2xl relative">

              <AnimatePresence mode="wait">

                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue flex items-center justify-center mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-text-primary mb-2">{t.contact.successHeadline}</h3>
                    <p className="font-sans text-sm text-text-secondary max-w-sm">
                      {t.contact.successDesc}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-6 py-2.5 rounded-full border border-border-subtle text-xs font-semibold text-text-secondary hover:text-text-primary hover:border-border-subtle/30 transition-all cursor-pointer bg-dark-card"
                    >
                      {t.contact.btnReset}
                    </button>
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-6">
                      <AlertCircle size={32} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-text-primary mb-2">{t.contact.errorHeadline}</h3>
                    <p className="font-sans text-sm text-text-secondary max-w-sm">
                      {t.contact.errorDesc}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-6 py-2.5 rounded-full border border-border-subtle text-xs font-semibold text-text-secondary hover:text-text-primary hover:border-border-subtle/30 transition-all cursor-pointer bg-dark-card"
                    >
                      {t.contact.btnReset}
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
                      <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
                        {t.contact.formLabelName}
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        placeholder={t.contact.formPlaceholderName}
                        className="w-full px-5 py-4 squircle-sm border border-border-subtle bg-dark-card/20 focus:bg-dark-card/40 focus:border-accent-blue/50 text-text-primary placeholder-text-muted/50 font-sans text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
                        {t.contact.formLabelEmail}
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        placeholder={t.contact.formPlaceholderEmail}
                        className="w-full px-5 py-4 squircle-sm border border-border-subtle bg-dark-card/20 focus:bg-dark-card/40 focus:border-accent-blue/50 text-text-primary placeholder-text-muted/50 font-sans text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
                        {t.contact.formLabelMessage}
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        placeholder={t.contact.formPlaceholderMessage}
                        className="w-full px-5 py-4 squircle-sm border border-border-subtle bg-dark-card/20 focus:bg-dark-card/40 focus:border-accent-blue/50 text-text-primary placeholder-text-muted/50 font-sans text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4">
                      <Magnetic range={30} strength={0.15}>
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wider uppercase bg-text-primary text-dark-bg hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto shadow-md shadow-text-primary/5 cursor-pointer disabled:opacity-50"
                        >
                          {status === 'sending' ? (
                            <>
                              {t.contact.btnSubmitting}
                              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            </>
                          ) : (
                            <>
                              {t.contact.btnSubmit}
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


