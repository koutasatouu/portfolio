import React from 'react';
import { Code2, Palette, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './react-bits/SpotlightCard';
import GradientText from './react-bits/GradientText';

const skillsCategories = [
  {
    title: 'Development',
    icon: Code2,
    color: 'text-blue-400 border-blue-500/10 bg-blue-950/10',
    skills: [
      { name: 'React.js', level: 90, icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Tailwind CSS', level: 95, icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'JavaScript (ES6+)', level: 85, icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'Laravel Framework', level: 80, icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
      { name: 'CodeIgniter', level: 75, icon: 'https://cdn.simpleicons.org/codeigniter/EE4326' },
      { name: 'PHP OOP', level: 80, icon: 'https://cdn.simpleicons.org/php/777BB4' },
      { name: 'MySQL Databases', level: 85, icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    color: 'text-amber-400 border-amber-500/10 bg-amber-950/10',
    skills: [
      { name: 'Adobe Photoshop', level: 90, icon: 'https://svgl.app/library/photoshop.svg' },
      { name: 'Adobe Illustrator', level: 95, icon: 'https://svgl.app/library/illustrator.svg' },
      { name: 'UI/UX Design', level: 85, icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Product Mockups', level: 90, icon: 'https://cdn.simpleicons.org/sketch/F5A623' },
      { name: 'Typography Layout', level: 80, icon: 'https://svgl.app/library/indesign.svg' },
      { name: 'Vector Assets', level: 90, icon: 'https://cdn.simpleicons.org/inkscape/000000' },
    ],
  },
  {
    title: 'Video & Motion',
    icon: Video,
    color: 'text-purple-400 border-purple-500/10 bg-purple-950/10',
    skills: [
      { name: 'Adobe Premiere Pro', level: 95, icon: 'https://svgl.app/library/premiere.svg' },
      { name: 'Adobe After Effects', level: 85, icon: 'https://svgl.app/library/after-effects.svg' },
      { name: 'Color Grading', level: 80, icon: 'https://cdn.simpleicons.org/davinciresolve/1A1A1A' },
      { name: 'Keyframe Animation', level: 85, icon: 'https://cdn.simpleicons.org/blender/F5792A' },
      { name: 'Sound Design', level: 75, icon: 'https://cdn.simpleicons.org/audacity/0000CC' },
      { name: 'Social Media Formats', level: 95, icon: 'https://cdn.simpleicons.org/tiktok/000000' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 md:py-32 bg-[#0a0a0d] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[10%] w-[25vw] h-[25vw] bg-[#7c3aed]/5 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[25vw] h-[25vw] bg-[#2563eb]/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">EXPERTISE MATRIX</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Capabilities & <GradientText>Proficiencies</GradientText>
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#94a3b8] mt-4 leading-relaxed">
            I continuously refine my tech stack and design workflow to match modern industry demands.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <SpotlightCard
                key={category.title}
                className="p-8 border border-white/5 bg-[#0e0e12]/60 flex flex-col h-full"
              >
                {/* Header Icon + Label */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl border ${category.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-white tracking-wide uppercase">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="flex flex-col gap-6 flex-1">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          {skill.icon && (
                            <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded p-0.5 border border-white/5 shrink-0">
                              <img
                                src={skill.icon}
                                alt={`${skill.name} logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}
                          <span className="text-xs md:text-sm font-sans font-bold text-white tracking-wide">{skill.name}</span>
                        </div>
                        <span className="text-[10px] md:text-xs font-display font-bold text-[#64748b]">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Line */}
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-5%" }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            catIndex === 0
                              ? 'from-[#2563eb] to-[#3b82f6]'
                              : catIndex === 1
                              ? 'from-amber-500 to-amber-400'
                              : 'from-[#7c3aed] to-fuchsia-500'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
