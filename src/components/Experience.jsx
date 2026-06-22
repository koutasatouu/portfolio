import React, { useState } from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import GradientText from './react-bits/GradientText';

const experiencesList = [
  {
    tech: ['PHP', 'Laravel', 'React.js', 'MySQL', 'SQL Server'],
  },
  {
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Premiere Pro', 'After Effects', 'React.js'],
  },
  {
    tech: ['Art Direction', 'Visual Design', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
  {
    tech: ['PHP', 'CodeIgniter', 'Tailwind CSS', 'MySQL', 'Photoshop', 'Illustrator'],
  },
];

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);
  const { t } = useApp();

  const items = experiencesList.map((exp, idx) => {
    const translation = t.experience.items[idx] || {};
    return {
      ...exp,
      role: translation.role || '',
      company: translation.company || '',
      period: translation.period || '',
      description: translation.description || '',
      highlights: translation.highlights || [],
    };
  });

  const activeItem = items[activeExp] || items[0] || {};

  return (
    <section id="experience" className="relative w-full py-24 md:py-32 bg-dark-bg overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[30%] left-[5%] w-[25vw] h-[25vw] bg-accent-blue/5 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[30vw] h-[30vw] bg-accent-purple/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">{t.experience.tag}</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight leading-tight">
            {t.experience.headline} <GradientText>{t.experience.headlineAccent}</GradientText>
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Interactive Timeline List */}
          <div className="lg:col-span-5 flex flex-col gap-4 relative">
            {/* Connecting line */}
            {/* <div className="absolute left-[36px] top-8 bottom-6 w-[2px] bg-border-subtle hidden md:block" /> */}

            {items.map((exp, index) => {
              const isActive = activeExp === index;
              return (
                <button
                  key={`${exp.role}-${index}`}
                  onClick={() => setActiveExp(index)}
                  className={`w-full text-left p-5 squircle-md border transition-all duration-300 flex items-center gap-6 relative z-10 ${isActive
                    ? 'border-border-subtle bg-dark-card/50 shadow-xl shadow-black/10'
                    : 'border-border-subtle/50 bg-dark-card/20 hover:border-border-subtle hover:bg-dark-card-hover/40'
                    }`}
                >
                  {/* Timeline indicator bullet */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border shrink-0 transition-all duration-300 ${isActive
                      ? 'border-accent-blue bg-accent-blue/20 text-text-primary'
                      : 'border-border-subtle bg-dark-bg text-text-muted'
                      }`}
                  >
                    <Briefcase size={14} />
                  </div>

                  {/* Title Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-display font-bold text-sm md:text-base truncate transition-colors ${isActive ? 'text-accent-blue' : 'text-text-primary'}`}>
                      {exp.role}
                    </h3>
                    <span className="text-xs text-text-secondary font-medium tracking-wide block truncate">{exp.company}</span>
                  </div>

                  {/* Calendar Period */}
                  <div className="text-right shrink-0 hidden sm:block">
                    <span className="text-[10px] md:text-xs text-text-muted font-medium tracking-wider flex items-center gap-1.5 justify-end">
                      <Calendar size={12} />
                      {exp.period.split(' ')[0]} {exp.period.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Experience Details Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeExp}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="glass-panel squircle-lg p-8 border border-border-subtle bg-dark-card/55 relative"
            >
              {/* Period badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-dark-card/30 text-[10px] font-bold tracking-wider text-text-secondary uppercase mb-6">
                <Calendar size={12} className="text-accent-blue" />
                {activeItem.period}
              </div>

              {/* Title Header */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl md:text-3xl text-text-primary mb-2">
                  {activeItem.role}
                </h3>
                <span className="text-sm md:text-base font-semibold text-accent-blue">
                  @{activeItem.company}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-xs md:text-sm leading-relaxed text-text-secondary mb-8">
                {activeItem.description}
              </p>

              {/* Highlights Bullet Points */}
              <div className="mb-8">
                <h4 className="text-xs font-bold tracking-widest text-text-muted uppercase mb-4">{t.experience.deliverablesLabel}</h4>
                <ul className="flex flex-col gap-3">
                  {(activeItem.highlights || []).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-xs md:text-sm text-text-primary">
                      <ChevronRight size={16} className="text-accent-blue shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-sans">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Badges */}
              <div>
                <h4 className="text-xs font-bold tracking-widest text-text-muted uppercase mb-4">{t.experience.skillsLabel}</h4>
                <div className="flex flex-wrap gap-2.5">
                  {(activeItem.tech || []).map((technology) => (
                    <span
                      key={technology}
                      className="px-3.5 py-1.5 squircle-sm text-xs font-semibold tracking-wider font-display uppercase bg-dark-card text-text-primary border border-border-subtle"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>


        </div>

      </div>
    </section>
  );
}

