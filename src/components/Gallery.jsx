import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './react-bits/Magnetic';
import { useApp } from '../context/AppContext';
import GradientText from './react-bits/GradientText';

const staticCategories = ['All', 'Branding', 'UI Design', 'Motion Design', 'Photography'];

const galleryItems = [
  {
    id: 1,
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 2,
    category: 'UI Design',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 3,
    category: 'Motion Design',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 4,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    category: 'UI Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 md:col-span-2 row-span-1',
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const { t } = useApp();

  const items = galleryItems.map((item) => {
    const titleTrans = t.gallery.items[item.id] || '';
    const catIdx = staticCategories.indexOf(item.category);
    const displayCategory = catIdx !== -1 && t.gallery.categories[catIdx]
      ? t.gallery.categories[catIdx]
      : item.category;

    return {
      ...item,
      title: titleTrans,
      displayCategory: displayCategory,
    };
  });

  const filteredItems = filter === 'All'
    ? items
    : items.filter(item => item.category === filter);

  return (
    <section id="gallery" className="relative w-full py-24 md:py-32 bg-dark-bg overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[20%] left-[5%] w-[25vw] h-[25vw] bg-accent-blue/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">{t.gallery.tag}</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight leading-tight">
              {t.gallery.headline} <GradientText>{t.gallery.headlineAccent}</GradientText>
            </h2>
          </div>
          
          {/* Category Filter buttons */}
          <div className="flex flex-wrap gap-3">
            {staticCategories.map((cat, idx) => {
              const label = t.gallery.categories[idx] || cat;
              return (
                <Magnetic key={cat} range={20} strength={0.2}>
                  <button
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all cursor-pointer ${
                      filter === cat
                        ? 'border-accent-blue bg-accent-blue text-white shadow-[0_0_15px_rgba(37,99,235,0.25)]'
                        : 'border-border-subtle text-text-secondary hover:border-text-primary hover:text-text-primary bg-dark-card/30'
                    }`}
                  >
                    {label}
                  </button>
                </Magnetic>
              );
            })}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative group overflow-hidden rounded-2xl border border-border-subtle bg-dark-card ${item.spanClass}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Info Text Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350 ease-out z-10">
                  <span className="text-[10px] font-bold tracking-wider text-accent-blue uppercase mb-1.5 block">
                    {item.displayCategory}
                  </span>
                  <h3 className="font-display font-bold text-base md:text-lg text-text-primary">
                    {item.title}
                  </h3>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
}

