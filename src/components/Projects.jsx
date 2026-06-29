import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SpotlightCard from './react-bits/SpotlightCard';
import CardTilt from './react-bits/CardTilt';
import { useApp } from '../context/AppContext';
import GradientText from './react-bits/GradientText';

const projectsList = [
  {
    image: 'https://api.microlink.io/?url=https%3A%2F%2Ftetracoffee.vercel.app%2F&screenshot=true&embed=screenshot.url',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://tetracoffee.vercel.app/',
  },
  {
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fkarsacoffee.vercel.app%2F&screenshot=true&embed=screenshot.url',
    technologies: ['React.js', 'Vite', 'Tailwind CSS'],
    link: 'https://karsacoffee.vercel.app/',
  },
  {
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fburaburacoffee.vercel.app%2F&screenshot=true&embed=screenshot.url',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://buraburacoffee.vercel.app/',
  },
  {
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fbentocoffee.vercel.app%2F&screenshot=true&embed=screenshot.url',
    technologies: ['React.js', 'Vite', 'Tailwind CSS'],
    link: 'https://bentocoffee.vercel.app/',
  },
  {
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fzanoid.vercel.app%2F&screenshot=true&embed=screenshot.url',
    technologies: ['React.js', 'Vite', 'Tailwind CSS'],
    link: 'https://zanoid.vercel.app/',
  },
  {
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fkopiwetpule.vercel.app%2F&screenshot=true&embed=screenshot.url',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://kopiwetpule.vercel.app/',
  },
];

export default function Projects() {
  const { t } = useApp();

  const items = projectsList.map((project, idx) => {
    const translation = t.projects.items[idx + 1] || {};
    return {
      ...project,
      title: translation.title || '',
      category: translation.category || '',
      description: translation.description || '',
      result: translation.result || '',
    };
  });

  return (
    <section id="projects" className="relative w-full py-24 md:py-32 bg-dark-bg-alt overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] bg-accent-blue/5 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-[30vw] h-[30vw] bg-accent-purple/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">{t.projects.tag}</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight leading-tight">
              {t.projects.headline} <GradientText>{t.projects.headlineAccent}</GradientText>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-text-secondary font-sans">
            {t.projects.desc}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((project, index) => (
            <CardTilt key={project.title} className="h-full">
              <a
                href={project.link}
                target={project.link !== '#' ? "_blank" : undefined}
                rel={project.link !== '#' ? "noopener noreferrer" : undefined}
                className="block h-full cursor-pointer"
              >
                <SpotlightCard className="h-full flex flex-col justify-between group hover:bg-dark-card-hover/60 transition-colors duration-500">

                  {/* Upper Half: Image & Tag */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[19px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg-alt via-transparent to-transparent opacity-40" />

                    {/* Category Tag overlay */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-dark-bg/80 backdrop-blur-md text-text-primary border border-border-subtle">
                      {project.category}
                    </span>
                  </div>

                  {/* Lower Half: Body */}
                  <div className="p-6 flex flex-col justify-between flex-1">

                    {/* Title & Description */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display font-bold text-lg md:text-xl text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                          {project.title}
                        </h3>
                        <ArrowUpRight size={18} className="text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <p className="font-sans text-xs md:text-sm text-text-secondary leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Technical details & KPIs */}
                    <div className="mt-auto pt-6 border-t border-border-subtle flex flex-col gap-4">
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-dark-card text-text-secondary border border-border-subtle"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* KPI Result block */}
                      <div className="flex justify-between items-center bg-dark-card/50 p-3 squircle-sm border border-border-subtle">
                        <span className="text-[9px] font-bold tracking-widest text-text-muted uppercase">{t.projects.kpiLabel}</span>
                        <span className="text-[11px] font-bold text-accent-blue font-display uppercase tracking-wider">{project.result}</span>
                      </div>
                    </div>

                  </div>

                </SpotlightCard>
              </a>
            </CardTilt>
          ))}
        </div>


      </div>
    </section>
  );
}

