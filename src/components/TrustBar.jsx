import React from 'react';
import LogoLoop from './react-bits/LogoLoop';
import { useApp } from '../context/AppContext';

const technologies = [
  { name: 'React.js', lightColor: 'border-cyan-200 text-cyan-600 bg-cyan-50', darkColor: 'border-cyan-500/20 text-cyan-400 bg-cyan-950/20', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Laravel', lightColor: 'border-red-200 text-red-600 bg-red-50', darkColor: 'border-red-500/20 text-red-400 bg-red-950/20', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
  { name: 'CodeIgniter', lightColor: 'border-orange-200 text-orange-600 bg-orange-50', darkColor: 'border-orange-500/20 text-orange-400 bg-orange-950/20', icon: 'https://cdn.simpleicons.org/codeigniter/EE4326' },
  { name: 'Tailwind CSS', lightColor: 'border-teal-200 text-teal-600 bg-teal-50', darkColor: 'border-teal-500/20 text-teal-400 bg-teal-950/20', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Adobe Photoshop', lightColor: 'border-blue-200 text-blue-600 bg-blue-50', darkColor: 'border-blue-500/20 text-blue-400 bg-blue-950/20', icon: 'https://svgl.app/library/photoshop.svg' },
  { name: 'Adobe Illustrator', lightColor: 'border-amber-200 text-amber-700 bg-amber-50', darkColor: 'border-amber-600/20 text-amber-400 bg-amber-950/20', icon: 'https://svgl.app/library/illustrator.svg' },
  { name: 'Adobe Premiere Pro', lightColor: 'border-purple-200 text-purple-600 bg-purple-50', darkColor: 'border-purple-600/20 text-purple-400 bg-purple-950/20', icon: 'https://svgl.app/library/premiere.svg' },
  { name: 'Adobe After Effects', lightColor: 'border-indigo-200 text-indigo-600 bg-indigo-50', darkColor: 'border-indigo-600/20 text-indigo-400 bg-indigo-950/20', icon: 'https://svgl.app/library/after-effects.svg' },
  { name: 'JavaScript', lightColor: 'border-yellow-200 text-yellow-700 bg-yellow-50', darkColor: 'border-yellow-500/20 text-yellow-400 bg-yellow-950/20', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'PHP', lightColor: 'border-slate-200 text-slate-600 bg-slate-50', darkColor: 'border-slate-500/20 text-slate-400 bg-slate-950/20', icon: 'https://cdn.simpleicons.org/php/777BB4' },
];

export default function TrustBar() {
  const { lang, theme } = useApp();

  const isLight = theme === 'light';

  const renderTechItem = (tech) => (
    <div
      className={`px-5 py-2.5 rounded-full border text-xs font-semibold tracking-wider font-display uppercase whitespace-nowrap shadow-sm flex items-center gap-2.5 ${isLight ? tech.lightColor : tech.darkColor}`}
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

