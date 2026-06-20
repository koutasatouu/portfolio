import React from 'react';
import { Star, Quote } from 'lucide-react';
import SpotlightCard from './react-bits/SpotlightCard';
import GradientText from './react-bits/GradientText';

const testimonialsList = [
  {
    quote: "Aria is a rare multidisciplinary talent. He didn't just write clean, optimized code for our online coffee store; he also directed the branding and edited our social reels. His work dramatically boosted our conversion rate.",
    author: "Marcus Vance",
    role: "Founder, Tetra Coffee House",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    quote: "The web-based Point of Sale system Aria developed in CodeIgniter was outstanding. The dashboard is modern, checkout is twice as fast, and our team loves using it. The coding architecture is clean and robust.",
    author: "Sarah Kurniawan",
    role: "Operations Manager, Velo Retail",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    quote: "We commissioned Aria for a product launch campaign. His Premiere Pro and After Effects skills are exceptional. The kinetic typography and sound integration made the video go viral, pulling over 1.2M views.",
    author: "David Lawson",
    role: "Creative Director, MediaVibe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#0a0a0d] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[30%] right-[10%] w-[25vw] h-[25vw] bg-[#7c3aed]/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">FEEDBACK</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Client <GradientText>Endorsements</GradientText>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((t, idx) => (
            <SpotlightCard
              key={idx}
              className="p-8 md:p-10 border border-white/5 bg-[#0e0e12]/60 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-2xl h-full"
            >
              {/* Quote Icon Background */}
              <Quote size={120} className="absolute -top-4 -right-4 text-white/2 pointer-events-none" />

              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Quote Content */}
                <blockquote className="font-sans text-sm md:text-base text-[#e2e8f0] leading-relaxed mb-6 font-medium">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author Block */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <cite className="font-display font-bold text-xs md:text-sm text-white not-italic block">
                    {t.author}
                  </cite>
                  <span className="text-[11px] text-[#94a3b8] font-medium tracking-wide">
                    {t.role}
                  </span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
