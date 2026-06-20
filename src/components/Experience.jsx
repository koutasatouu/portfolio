import React, { useState } from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from './react-bits/GradientText';

const experiencesList = [
  {
    role: 'Software Engineer Intern',
    company: 'PT. Indo Techno Medic',
    period: 'June 2023 - January 2024',
    description: 'Helped build and maintain custom web applications used by medical facilities. Day-to-day work involved full-stack development, managing sensitive hospital databases, and working directly with staff to resolve technical issues.',
    highlights: [
      'Developed and updated custom medical websites using PHP, Laravel, and React to support daily hospital operations.',
      'Managed large-scale medical records in MySQL/SQL Server, ensuring high data accuracy and strict patient confidentiality.',
      'Investigated and fixed user-reported software bugs to keep internal healthcare systems stable and functional.',
      'Provided hands-on technical support and training to hospital staff when deploying new application features.',
    ],
    tech: ['PHP', 'Laravel', 'React.js', 'MySQL', 'SQL Server'],
  },
  {
    role: 'Designer (Part-Time)',
    company: 'CV Solobeat International',
    period: 'June - July 2024',
    description: 'Created visual assets for marketing campaigns and maintained the company\'s digital presence across social media and web platforms.',
    highlights: [
      'Designed high-quality product mockups for client presentations and marketing materials.',
      'Photographed products and designed visual layouts for daily Instagram feed posts to drive social media engagement.',
      'Shot and edited high-resolution video content for Instagram Reels using Adobe Premiere Pro and After Effects.',
      'Maintained and optimized the company website, updating product catalogs and services using front-end web technologies.',
    ],
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Premiere Pro', 'After Effects', 'React.js'],
  },
  {
    role: 'Volunteer Art Director',
    company: 'Karsa - PYFM2022',
    period: 'December 2022',
    description: 'Led the visual direction for the production, ensuring all design elements and environments aligned with the overarching narrative and director\'s vision.',
    highlights: [
      'Conceptualized and designed immersive visual environments to enhance the project\'s storytelling.',
      'Collaborated directly with the director and production team to integrate visual elements seamlessly into the storyline.',
      'Conducted quality assurance checks on all visual assets to maintain design consistency and accuracy throughout the production lifecycle.',
    ],
    tech: ['Art Direction', 'Visual Design', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
  {
    role: 'Student Software Engineer',
    company: 'Wikrama 1 Jepara High School',
    period: 'July 2021 - June 2024',
    description: 'Designed and implemented web-based software, managed databases, and developed interactive frontends as part of the core software engineering curriculum and client productions.',
    highlights: [
      'Programmed custom library catalog systems and POS interfaces using PHP and CodeIgniter.',
      'Styled responsive, lightweight student portals and landing pages using CSS and Tailwind CSS.',
      'Designed print materials, banners, and layout vectors using Adobe Photoshop and Illustrator.',
    ],
    tech: ['PHP', 'CodeIgniter', 'Tailwind CSS', 'MySQL', 'Photoshop', 'Illustrator'],
  },
];

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="relative w-full py-24 md:py-32 bg-[#070709] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[30%] left-[5%] w-[25vw] h-[25vw] bg-[#2563eb]/5 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[30vw] h-[30vw] bg-[#7c3aed]/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">CAREER ROADMAP</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Professional <GradientText>Journey</GradientText>
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Interactive Timeline List */}
          <div className="lg:col-span-5 flex flex-col gap-4 relative">
            {/* Connecting line */}
            <div className="absolute left-[29px] top-6 bottom-6 w-[2px] bg-white/5 hidden md:block" />
            
            {experiencesList.map((exp, index) => {
              const isActive = activeExp === index;
              return (
                <button
                  key={`${exp.role}-${index}`}
                  onClick={() => setActiveExp(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-6 relative z-10 ${
                    isActive
                      ? 'border-white/10 bg-white/5 shadow-xl shadow-black/30'
                      : 'border-white/5 bg-[#0e0e12]/30 hover:border-white/10 hover:bg-[#0e0e12]/50'
                  }`}
                >
                  {/* Timeline indicator bullet */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'border-[#2563eb] bg-[#2563eb]/20 text-white'
                        : 'border-white/10 bg-[#070709] text-[#64748b]'
                    }`}
                  >
                    <Briefcase size={14} />
                  </div>
                  
                  {/* Title Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-display font-bold text-sm md:text-base truncate transition-colors ${isActive ? 'text-[#2563eb]' : 'text-white'}`}>
                      {exp.role}
                    </h3>
                    <span className="text-xs text-[#94a3b8] font-medium tracking-wide block truncate">{exp.company}</span>
                  </div>

                  {/* Calendar Period */}
                  <div className="text-right shrink-0 hidden sm:block">
                    <span className="text-[10px] md:text-xs text-[#64748b] font-medium tracking-wider flex items-center gap-1.5 justify-end">
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
              className="glass-panel rounded-3xl p-8 border border-white/5 bg-[#0e0e12]/50 relative"
            >
              {/* Period badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] font-bold tracking-wider text-[#94a3b8] uppercase mb-6">
                <Calendar size={12} className="text-[#2563eb]" />
                {experiencesList[activeExp].period}
              </div>

              {/* Title Header */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl md:text-3xl text-white mb-2">
                  {experiencesList[activeExp].role}
                </h3>
                <span className="text-sm md:text-base font-semibold text-[#2563eb]">
                  @{experiencesList[activeExp].company}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-xs md:text-sm leading-relaxed text-[#94a3b8] mb-8">
                {experiencesList[activeExp].description}
              </p>

              {/* Highlights Bullet Points */}
              <div className="mb-8">
                <h4 className="text-xs font-bold tracking-widest text-[#64748b] uppercase mb-4">Core Deliverables</h4>
                <ul className="flex flex-col gap-3">
                  {experiencesList[activeExp].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-xs md:text-sm text-white">
                      <ChevronRight size={16} className="text-[#2563eb] shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-sans">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Badges */}
              <div>
                <h4 className="text-xs font-bold tracking-widest text-[#64748b] uppercase mb-4">Skills Demonstrated</h4>
                <div className="flex flex-wrap gap-2.5">
                  {experiencesList[activeExp].tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider font-display uppercase bg-white/5 text-white border border-white/5"
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
