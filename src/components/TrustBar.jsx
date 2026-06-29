import React from 'react';
import LogoLoop from './react-bits/LogoLoop';
import { useApp } from '../context/AppContext';

const technologies = [
  { name: 'React.js', color: 'border-cyan-500/20 text-cyan-400 bg-cyan-950/10', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Laravel', color: 'border-red-500/20 text-red-400 bg-red-950/10', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
  { name: 'CodeIgniter', color: 'border-orange-500/20 text-orange-400 bg-orange-950/10', icon: 'https://cdn.simpleicons.org/codeigniter/EE4326' },
  { name: 'Tailwind CSS', color: 'border-teal-500/20 text-teal-400 bg-teal-950/10', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Adobe Photoshop', color: 'border-blue-600/20 text-blue-400 bg-blue-950/10', icon: 'https://svgl.app/library/photoshop.svg' },
  { name: 'Adobe Illustrator', color: 'border-amber-600/20 text-amber-400 bg-amber-950/10', icon: 'https://svgl.app/library/illustrator.svg' },
  { name: 'Adobe Premiere Pro', color: 'border-purple-600/20 text-purple-400 bg-purple-950/10', icon: 'https://svgl.app/library/premiere.svg' },
  { name: 'Adobe After Effects', color: 'border-indigo-600/20 text-indigo-400 bg-indigo-950/10', icon: 'https://svgl.app/library/after-effects.svg' },
  { name: 'JavaScript', color: 'border-yellow-500/20 text-yellow-400 bg-yellow-950/10', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'PHP', color: 'border-slate-500/20 text-slate-400 bg-slate-950/10', icon: 'https://cdn.simpleicons.org/php/777BB4' },
];

export default function TrustBar() {
  const { lang } = useApp();

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
    <section className="w-full py-12 border-y border-white/5 bg-[#0a0a0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Title */}
        <div className="shrink-0 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-[#64748b] uppercase block">
            {lang === 'en' ? "CORE TECH" : "TEKNOLOGI UTAMA"}
          </span>
          <span className="text-sm font-semibold text-[#f8fafc]">
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
            fadeOutColor="#0a0a0e"
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

