import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SpotlightCard from './react-bits/SpotlightCard';
import CardTilt from './react-bits/CardTilt';
import Magnetic from './react-bits/Magnetic';
import GradientText from './react-bits/GradientText';

const projectsList = [
  {
    title: 'Tetra Coffee House',
    category: 'Web Dev & Design',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    description: 'A premium, high-end e-commerce landing page and booking system built for an artisanal coffee roaster.',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    result: '+45% Conversion Lift',
    link: '#',
  },
  {
    title: 'E-Library Knowledge Hub',
    category: 'Software System',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
    description: 'A cloud-based digital reading and library catalogue portal enabling access to over 10,000 journals.',
    technologies: ['Laravel', 'React.js', 'MySQL'],
    result: '12k+ Active Readers',
    link: '#',
  },
  {
    title: 'Velo POS System',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    description: 'A high-speed cash register and real-time stock inventory dashboard for small-to-medium retail outlets.',
    technologies: ['CodeIgniter', 'Tailwind', 'ChartJS'],
    result: '2.3x Faster Checkout',
    link: '#',
  },
  {
    title: 'Karsa Identity System',
    category: 'Branding & Graphic Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'An editorial visual identity, brand guideline system, and stationery suite crafted for an architecture firm.',
    technologies: ['Photoshop', 'Illustrator', 'Branding'],
    result: 'Cohesive Identity System',
    link: '#',
  },
  {
    title: 'Teman Nonkrong Campaign',
    category: 'Social Media Strategy',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    description: 'A curated visual layout grid, video reels, and promotional copy generated for a coffee shop launch.',
    technologies: ['Photoshop', 'Lightroom', 'Copywriting'],
    result: '300k+ Impressions Reach',
    link: '#',
  },
  {
    title: 'Zanoid Commercial Reel',
    category: 'Video Editing & Motion',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    description: 'A 60-second high-energy product launch advertisement featuring fluid transitions and sound design.',
    technologies: ['Premiere Pro', 'After Effects'],
    result: '1.2M Views Viral Reel',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 md:py-32 bg-[#0a0a0d] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] bg-[#2563eb]/5 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-[30vw] h-[30vw] bg-[#7c3aed]/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">CASE STUDIES</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Featured <GradientText>Productions</GradientText>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#94a3b8] font-sans">
            A selective display of software systems, web applications, brand campaigns, and motion design reels that I have designed, engineered, and shipped.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <CardTilt key={project.title} className="h-full">
              <SpotlightCard className="h-full flex flex-col justify-between group cursor-pointer border border-white/5 bg-[#0e0e12]/60 hover:bg-[#16161c]/60 transition-colors duration-500">
                
                {/* Upper Half: Image & Tag */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-transparent to-transparent opacity-40" />
                  
                  {/* Category Tag overlay */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#070709]/80 backdrop-blur-md text-white border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Lower Half: Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  
                  {/* Title & Description */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-[#2563eb] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight size={18} className="text-[#64748b] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="font-sans text-xs md:text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technical details & KPIs */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-white/5 text-[#94a3b8] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* KPI Result block */}
                    <div className="flex justify-between items-center bg-white/2 p-3 rounded-lg border border-white/5">
                      <span className="text-[9px] font-bold tracking-widest text-[#64748b] uppercase">RESULT / KPI</span>
                      <span className="text-[11px] font-bold text-[#2563eb] font-display uppercase tracking-wider">{project.result}</span>
                    </div>
                  </div>

                </div>

              </SpotlightCard>
            </CardTilt>
          ))}
        </div>

      </div>
    </section>
  );
}
