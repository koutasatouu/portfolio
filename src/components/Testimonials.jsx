import React from 'react';
import { Star, Quote } from 'lucide-react';
import SpotlightCard from './react-bits/SpotlightCard';
import { useApp } from '../context/AppContext';
import GradientText from './react-bits/GradientText';

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
  const { t } = useApp();

  const items = testimonialsList.map((item, idx) => {
    const translation = t.testimonials.items[idx] || {};
    return {
      ...item,
      quote: translation.quote || '',
      author: translation.author || '',
      role: translation.role || '',
    };
  });

  return (
    <section className="relative w-full py-24 md:py-32 bg-dark-bg-alt overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[30%] right-[10%] w-[25vw] h-[25vw] bg-accent-purple/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">{t.testimonials.tag}</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight leading-tight">
            {t.testimonials.headline} <GradientText>{t.testimonials.headlineAccent}</GradientText>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <SpotlightCard
              key={idx}
              className="p-8 md:p-10 border border-border-subtle bg-dark-card/60 squircle-lg relative overflow-hidden flex flex-col justify-between shadow-2xl h-full"
            >
              {/* Quote Icon Background */}
              <Quote size={120} className="absolute -top-4 -right-4 text-text-primary/5 pointer-events-none" />

              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Quote Content */}
                <blockquote className="font-sans text-sm md:text-base text-text-secondary leading-relaxed mb-6 font-medium">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author Block */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.author}
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
          ))}
        </div>


      </div>
    </section>
  );
}

