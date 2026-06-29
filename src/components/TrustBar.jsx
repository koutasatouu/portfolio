import React from 'react';
import LogoLoop from './react-bits/LogoLoop';
import { useApp } from '../context/AppContext';

const technologies = [
  { name: 'React.js', color: 'border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/25', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Laravel', color: 'border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/25', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
  { name: 'CodeIgniter', color: 'border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/25', icon: 'https://cdn.simpleicons.org/codeigniter/EE4326' },
  { name: 'Tailwind CSS', color: 'border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/25', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Adobe Photoshop', color: 'border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/25', icon: 'https://svgl.app/library/photoshop.svg' },
  { name: 'Adobe Illustrator', color: 'border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/25', icon: 'https://svgl.app/library/illustrator.svg' },
  { name: 'Adobe Premiere Pro', color: 'border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/25', icon: 'https://svgl.app/library/premiere.svg' },
  { name: 'Adobe After Effects', color: 'border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/25', icon: 'https://svgl.app/library/after-effects.svg' },
  { name: 'JavaScript', color: 'border-yellow-200 dark:border-yellow-500/20 text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/25', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'PHP', color: 'border-slate-200 dark:border-slate-500/20 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/25', icon: 'https://cdn.simpleicons.org/php/777BB4' },
];

export default function TrustBar() {
  const { lang, theme } = useApp();

  const renderTechItem = (tech) => (
    <div
      className={`px-5 py-2.5 rounded-full border text-xs font-semibold tracking-wider font-display uppercase whitespace-nowrap shadow-sm flex items-center gap-2.5 ${tech.color}`}
    >
      {tech.icon && (
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="object-contain"
          style={{ width: '18px', height: '18px' }}
        />
      )}
      {tech.name}
    </div>
  );

  return (
    <section className="w-full py-12 border-y border-border-subtle bg-dark-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Title */}
        <div className="shrink-0 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-[#64748b] uppercase block">
            {lang === 'en' ? "CORE TECH" : "TEKNOLOGI UTAMA"}
          </span>
          <span className="text-sm font-semibold text-text-primary">
            {lang === 'en' ? "STACK & TOOLS" : "STACK & PIRANTI"}
          </span>
        </div>

        {/* Marquee Container */}
        <div className="flex-1 w-full overflow-hidden text-text-secondary">
          <LogoLoop
            logos={technologies}
            speed={40}
            direction="left"
            logoHeight={38}
            gap={16}
            fadeOut
            fadeOutColor={theme === 'light' ? '#f1f5f9' : '#0a0a0d'}
            scaleOnHover
            pauseOnHover={true}
            renderItem={renderTechItem}
            ariaLabel="Technology stack and tools"
          />
        </div>
      </div>
    </section>
  );
}

