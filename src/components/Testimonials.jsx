import React, { useState, useEffect } from 'react';
import { Star, Quote, Plus, X, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './react-bits/SpotlightCard';
import { useApp } from '../context/AppContext';
import GradientText from './react-bits/GradientText';
import Magnetic from './react-bits/Magnetic';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const UserIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const testimonialsList = [
  {
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  const { t, lang } = useApp();
  const [dynamicReviews, setDynamicReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle | sending | success | error

  // Carousel & Responsive state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const [form, setForm] = useState({
    name: '',
    role: '',
    company: '',
    platform: 'none',
    handle: '',
    rating: 5,
    quote: ''
  });

  const isId = lang === 'id';

  const platforms = [
    { id: 'github', label: 'GitHub', icon: GithubIcon },
    { id: 'twitter', label: 'Twitter/X', icon: TwitterIcon },
    { id: 'instagram', label: 'Instagram', icon: InstagramIcon },
  ];

  // Translate fallback items
  const fallbackItems = testimonialsList.map((item, idx) => {
    const translation = t.testimonials.items[idx] || {};
    return {
      ...item,
      quote: translation.quote || '',
      author: translation.author || '',
      role: translation.role || '',
    };
  });

  // Fetch approved testimonials
  useEffect(() => {
    const apiURL = import.meta.env.PUBLIC_TESTIMONIALS_API_URL;
    if (!apiURL) {
      setLoading(false);
      return;
    }

    fetch(apiURL)
      .then((res) => {
        if (!res.ok) throw new Error("API response error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((item) => {
            let avatar = '';
            if (item.platform && item.platform !== 'none' && item.handle) {
              const cleanedHandle = item.handle.replace(/^@/, '').trim();
              avatar = `https://unavatar.io/${item.platform.toLowerCase()}/${cleanedHandle}`;
            } else {
              avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=2563eb&color=fff&bold=true`;
            }
            return {
              author: item.name,
              role: item.company ? `${item.role} @ ${item.company}` : item.role,
              quote: item.quote,
              rating: parseInt(item.rating) || 5,
              avatar: avatar,
            };
          });
          setDynamicReviews(formatted);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch testimonials:", err);
        setLoading(false);
      });
  }, []);

  // Window resize listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const nextState = { ...prev, [name]: value };
      if (name === 'company' && value.trim() === '') {
        nextState.role = '';
      }
      return nextState;
    });
  };

  const handleRatingChange = (newRating) => {
    setForm((prev) => ({ ...prev, rating: newRating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiURL = import.meta.env.PUBLIC_TESTIMONIALS_API_URL;
    if (!apiURL) {
      alert(isId ? "URL API Google Sheets belum diatur di .env!" : "Google Sheets API URL is not set in .env!");
      return;
    }

    setSubmitStatus('sending');

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      });

      setSubmitStatus('success');
      setForm({
        name: '',
        role: '',
        company: '',
        platform: '',
        handle: '',
        rating: 5,
        quote: ''
      });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus('error');
    }
  };

  const reviewsToDisplay = dynamicReviews;

  // Responsive Carousel variables
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const itemsPerPage = isMobile ? 1 : (isTablet ? 2 : 3);
  const totalItems = reviewsToDisplay.length;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Reset index if screen width changes list lengths
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex]);

  return (
    <section className="relative w-full py-24 md:py-32 bg-dark-bg-alt overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[30%] right-[10%] w-[25vw] h-[25vw] bg-accent-purple/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">
            {t.testimonials.tag}
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight leading-tight">
            {t.testimonials.headline} <GradientText>{t.testimonials.headlineAccent}</GradientText>
          </h2>
        </div>

        {/* Testimonials Grid / Carousel */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-8 h-8 border-2 border-accent-blue border-t-transparent rounded-full animate-spin" />
          </div>
        ) : totalItems === 0 ? (
          <div className="text-center py-12 mb-16 text-text-muted text-sm font-medium">
            {isId ? "Belum ada ulasan yang disetujui." : "No approved reviews yet."}
          </div>
        ) : totalItems <= 3 ? (
          /* Centered flex list for 1 to 3 reviews */
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 mb-16 max-w-5xl mx-auto">
            {reviewsToDisplay.map((item, idx) => (
              <div key={idx} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.3px)] shrink-0">
                <SpotlightCard className="p-8 md:p-10 squircle-lg relative overflow-hidden flex flex-col justify-between shadow-2xl h-full">
                  <Quote size={120} className="absolute -top-4 -right-4 text-text-primary/5 pointer-events-none" />
                  <div>
                    <div className="flex gap-1 mb-6 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <blockquote className="font-sans text-sm md:text-base text-text-secondary leading-relaxed mb-6 font-medium">
                      "{item.quote}"
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.author)}&background=2563eb&color=fff&bold=true`;
                      }}
                      className="w-10 h-10 rounded-full object-cover border border-border-subtle"
                    />
                    <div>
                      <cite className="font-display font-bold text-xs md:text-sm text-text-primary not-italic block">
                        {item.author}
                      </cite>
                      <span className="text-[11px] text-text-muted font-medium tracking-wide">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        ) : (
          /* Sliding Carousel wrapper for more than 3 reviews */
          <div className="relative w-full overflow-hidden mb-16">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {reviewsToDisplay.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 md:px-4"
                >
                  <SpotlightCard className="p-8 md:p-10 squircle-lg relative overflow-hidden flex flex-col justify-between shadow-2xl h-full">
                    <Quote size={120} className="absolute -top-4 -right-4 text-text-primary/5 pointer-events-none" />
                    <div>
                      <div className="flex gap-1 mb-6 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <blockquote className="font-sans text-sm md:text-base text-text-secondary leading-relaxed mb-6 font-medium">
                        "{item.quote}"
                      </blockquote>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.author)}&background=2563eb&color=fff&bold=true`;
                        }}
                        className="w-10 h-10 rounded-full object-cover border border-border-subtle"
                      />
                      <div>
                        <cite className="font-display font-bold text-xs md:text-sm text-text-primary not-italic block">
                          {item.author}
                        </cite>
                        <span className="text-[11px] text-text-muted font-medium tracking-wide">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Controls (Arrows & Submission Button) */}
        <div className="flex justify-center items-center gap-6">
          {totalItems > 3 && (
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-primary hover:bg-border-subtle transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <Magnetic range={25} strength={0.15}>
            <button
              onClick={() => {
                setSubmitStatus('idle');
                setShowModal(true);
              }}
              className="px-6 py-3.5 rounded-full font-sans font-bold text-xs md:text-sm tracking-wider uppercase bg-text-primary text-dark-bg hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-text-primary/5 cursor-pointer"
            >
              <Plus size={16} />
              {isId ? "Berikan Ulasan Anda" : "Leave a Review"}
            </button>
          </Magnetic>

          {totalItems > 3 && (
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-primary hover:bg-border-subtle transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

      </div>

      {/* Review Modal Form */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{
                type: 'spring',
                duration: 0.5,
                layout: { type: 'spring', stiffness: 350, damping: 32 }
              }}
              className="relative w-full max-w-lg bg-dark-card border border-border-subtle squircle-lg shadow-2xl p-6 md:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-1 rounded-full text-text-muted hover:text-text-primary hover:bg-border-subtle transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary tracking-tight mb-2">
                {isId ? "Tulis Ulasan Baru" : "Write a Review"}
              </h3>
              <p className="text-xs text-text-muted mb-6 leading-relaxed">
                {isId
                  ? "Ulasan Anda akan dikirim dan akan tampil setelah disetujui."
                  : "Your review will be sent and will display once approved."}
              </p>

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 text-green-500 rounded-full mb-4">
                    <CheckCircle size={28} />
                  </div>
                  <h4 className="font-display font-bold text-lg text-text-primary mb-2">
                    {isId ? "Review Terkirim!" : "Review Submitted!"}
                  </h4>
                  <p className="text-sm text-text-secondary max-w-xs mx-auto mb-6 leading-relaxed">
                    {isId
                      ? "Terima kasih atas ulasan Anda! Ulasan akan ditinjau segera sebelum ditampilkan."
                      : "Thank you for your feedback! The review will be moderated before showing up."}
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2.5 rounded-full font-sans font-semibold text-xs tracking-wider uppercase border border-border-subtle hover:border-text-primary transition-all cursor-pointer text-text-primary"
                  >
                    {isId ? "Tutup" : "Close"}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-name" className="text-[10px] font-bold tracking-widest text-text-muted uppercase flex items-center">
                      <span>{isId ? "Nama Anda" : "Your Name"}</span>
                      <span className="text-red-500 font-extrabold text-sm ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder={isId ? "Contoh: John Doe" : "e.g., John Doe"}
                      className="w-full px-4 py-3 squircle-sm border border-border-subtle bg-dark-card/20 focus:bg-dark-card/40 focus:border-accent-blue/50 text-text-primary placeholder-text-muted/50 font-sans text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Company & Role Group */}
                  <div className="flex flex-col">
                    {/* Company Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-company" className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
                        {isId ? "Nama Perusahaan" : "Company"}
                      </label>
                      <input
                        type="text"
                        id="form-company"
                        name="company"
                        value={form.company}
                        onChange={handleInputChange}
                        placeholder={isId ? "Contoh: Texere Studio" : "e.g., Texere Studio"}
                        className="w-full px-4 py-3 squircle-sm border border-border-subtle bg-dark-card/20 focus:bg-dark-card/40 focus:border-accent-blue/50 text-text-primary placeholder-text-muted/50 font-sans text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Role Input (Only shows when Company is filled) */}
                    <AnimatePresence>
                      {form.company.trim() !== '' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0, y: -10 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 16, y: 0 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0, y: -10 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="flex flex-col gap-1.5 overflow-hidden"
                        >
                          <label htmlFor="form-role" className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
                            {isId ? "Jabatan / Peran di Perusahaan" : "Role / Title at Company"}
                          </label>
                          <input
                            type="text"
                            id="form-role"
                            name="role"
                            value={form.role}
                            onChange={handleInputChange}
                            placeholder={isId ? "Contoh: CEO, Developer" : "e.g., CEO, Developer"}
                            className="w-full px-4 py-3 squircle-sm border border-border-subtle bg-dark-card/20 focus:bg-dark-card/40 focus:border-accent-blue/50 text-text-primary placeholder-text-muted/50 font-sans text-sm outline-none transition-all"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Social Platform & Username Group */}
                  <div className="flex flex-col">
                    {/* Social Platform Grid Selection */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
                        {isId ? "Platform Media Sosial-mu" : "Your Social Media Platform"}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {platforms.map((p) => {
                          const Icon = p.icon;
                          const isSelected = form.platform === p.id;
                          return (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => {
                                setForm(prev => {
                                  const newPlatform = prev.platform === p.id ? 'none' : p.id;
                                  return {
                                    ...prev,
                                    platform: newPlatform,
                                    handle: newPlatform === 'none' ? '' : prev.handle
                                  };
                                });
                              }}
                              className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border text-[11px] font-semibold tracking-wide transition-all cursor-pointer ${isSelected
                                ? 'bg-accent-blue/15 border-accent-blue text-accent-blue shadow-lg shadow-accent-blue/5'
                                : 'bg-dark-card/20 border-border-subtle text-text-muted hover:text-text-primary hover:border-border-subtle/80'
                                }`}
                            >
                              <Icon size={14} />
                              <span>{p.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Social Username (Only shows when a platform is active) */}
                    <AnimatePresence>
                      {form.platform !== 'none' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0, y: -10 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 16, y: 0 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0, y: -10 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="flex flex-col gap-1.5 overflow-hidden"
                        >
                          <label htmlFor="form-handle" className="text-[10px] font-bold tracking-widest text-text-muted uppercase flex items-center">
                            <span>{isId ? "Username Sosmed" : "Social Username"}</span>
                            <span className="text-red-500 font-extrabold text-sm ml-1">*</span>
                          </label>
                          <input
                            type="text"
                            id="form-handle"
                            name="handle"
                            required
                            value={form.handle}
                            onChange={handleInputChange}
                            placeholder="@username"
                            className="w-full px-4 py-3 squircle-sm border border-border-subtle bg-dark-card/20 focus:bg-dark-card/40 focus:border-accent-blue/50 text-text-primary placeholder-text-muted/50 font-sans text-sm outline-none transition-all"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Star Rating Select */}
                  <div className="flex flex-col gap-1.5 items-center my-1">
                    <label className="text-[10px] font-bold tracking-widest text-text-muted uppercase flex items-center">
                      <span>{isId ? "Rating Anda" : "Your Rating"}</span>
                    </label>
                    <div className="flex justify-center gap-3 py-1.5 w-full">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <button
                          key={starValue}
                          type="button"
                          onClick={() => handleRatingChange(starValue)}
                          className="text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            size={28}
                            fill={starValue <= form.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quote Review TextArea */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-quote" className="text-[10px] font-bold tracking-widest text-text-muted uppercase flex items-center">
                      <span>{isId ? "Ulasan / Umpan Balik" : "Review Quote"}</span>
                      <span className="text-red-500 font-extrabold text-sm ml-1">*</span>
                    </label>
                    <textarea
                      id="form-quote"
                      name="quote"
                      required
                      rows={3}
                      value={form.quote}
                      onChange={handleInputChange}
                      placeholder={isId ? "Tuliskan pengalaman kerja sama dengan Raditya..." : "Describe your experience working with Raditya..."}
                      className="w-full px-4 py-3 squircle-sm border border-border-subtle bg-dark-card/20 focus:bg-dark-card/40 focus:border-accent-blue/50 text-text-primary placeholder-text-muted/50 font-sans text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submission Button */}
                  <div className="mt-2 flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-5 py-2.5 rounded-full font-sans font-bold text-xs tracking-wider uppercase border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-border-subtle transition-all cursor-pointer"
                    >
                      {isId ? "Batal" : "Cancel"}
                    </button>
                    <button
                      type="submit"
                      disabled={submitStatus === 'sending'}
                      className="px-6 py-2.5 rounded-full font-sans font-bold text-xs tracking-wider uppercase bg-text-primary text-dark-bg hover:bg-accent-blue hover:text-white transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                    >
                      {submitStatus === 'sending' ? (
                        <>
                          {isId ? "Mengirim..." : "Submitting..."}
                          <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        </>
                      ) : (
                        isId ? "Kirim Ulasan" : "Submit Review"
                      )}
                    </button>
                  </div>

                  {submitStatus === 'error' && (
                    <p className="text-xs text-red-500 mt-1">
                      {isId ? "Ulasan gagal dikirim. Silakan coba lagi!" : "Failed to submit review. Please try again!"}
                    </p>
                  )}

                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
