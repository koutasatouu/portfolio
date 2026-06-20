import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './react-bits/Magnetic';
import GradientText from './react-bits/GradientText';

const categories = ['All', 'Branding', 'UI Design', 'Motion Design', 'Photography'];

const galleryItems = [
  {
    id: 1,
    category: 'Branding',
    title: 'Minimalist Package Design',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 2,
    category: 'UI Design',
    title: 'Financial SaaS Dashboard',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 3,
    category: 'Motion Design',
    title: 'Commercial Post Production',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 4,
    category: 'Photography',
    title: 'Minimal Architectural Curves',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    category: 'Branding',
    title: 'Karsa Stationary Mockup',
    image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    category: 'UI Design',
    title: 'Mobile Analytics Interface',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    spanClass: 'col-span-1 md:col-span-2 row-span-1',
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="relative w-full py-24 md:py-32 bg-[#070709] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[20%] left-[5%] w-[25vw] h-[25vw] bg-[#2563eb]/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">VISUAL VAULT</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Creative <GradientText>Gallery</GradientText>
            </h2>
          </div>
          
          {/* Category Filter buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Magnetic key={cat} range={20} strength={0.2}>
                <button
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all cursor-pointer ${
                    filter === cat
                      ? 'border-[#2563eb] bg-[#2563eb] text-white shadow-[0_0_15px_rgba(37,99,235,0.25)]'
                      : 'border-white/10 text-[#94a3b8] hover:border-white/20 hover:text-white bg-[#0e0e12]/30'
                  }`}
                >
                  {cat}
                </button>
              </Magnetic>
            ))}
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
                className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-[#0e0e12] ${item.spanClass}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/20 to-transparent opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Info Text Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350 ease-out z-10">
                  <span className="text-[10px] font-bold tracking-wider text-[#2563eb] uppercase mb-1.5 block">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-base md:text-lg text-white">
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
