import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, Layers, Terminal, ChevronDown } from 'lucide-react';
import SpotlightCard from './react-bits/SpotlightCard';
import ProfileCard from './react-bits/ProfileCard';
import GradientText from './react-bits/GradientText';

const philosophies = [
  {
    title: 'Code + Motion + Design',
    icon: Layers,
    description: 'I believe digital products shouldn\'t just work—they should feel alive. By combining backend structure, frontend interactive layers, and motion graphics, I create memorable experiences.',
  },
  {
    title: 'Engineered Precision',
    icon: Terminal,
    description: 'With my academic background in Software Engineering and Informatics, I write clean, modular, and optimized code that powers seamless, lightning-fast animations.',
  },
  {
    title: 'Aesthetic Focus',
    icon: Award,
    description: 'No details are minor. I refine shadows, micro-interactions, font-weight scales, and layout alignments to create Apple-grade editorial digital designs.',
  },
];

export default function About() {
  const [openPhilosophy, setOpenPhilosophy] = useState(0);

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#070709] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[40%] right-[5%] w-[25vw] h-[25vw] bg-[#7c3aed]/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <ProfileCard
              name="Raditya Abib"
              title="Designer & Developer"
              handle="radityaabib"
              status="Available for Projects"
              contactText="Let's Talk"
              avatarUrl="/me.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const section = document.querySelector('#contact');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              behindGlowEnabled={true}
              behindGlowColor="rgba(53, 134, 209, 0.76)"
              innerGradient="linear-gradient(145deg, rgba(37, 99, 235, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)"
            />
          </div>

          {/* Right Column: Bio / Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">ABOUT ME</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 tracking-tight leading-tight">
              Bridging the Gap Between <GradientText>Logic & Aesthetics</GradientText>
            </h2>

            <p className="font-sans text-base md:text-lg text-[#94a3b8] mb-8 leading-relaxed">
              With a background in Software Engineering and currently pursuing Informatics, I position myself at the intersection of technical architecture and visual design. I don't just develop layouts; I create digital systems that blend premium interactive frontends with clean, robust backend code and high-end video animations.
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <SpotlightCard className="p-4 md:p-5 flex flex-col justify-center text-center">
                <span className="font-display font-black text-2xl md:text-4xl text-white block">4+</span>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#64748b] uppercase mt-2">Years Active</span>
              </SpotlightCard>
              <SpotlightCard className="p-4 md:p-5 flex flex-col justify-center text-center">
                <span className="font-display font-black text-2xl md:text-4xl text-[#2563eb] block">25+</span>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#64748b] uppercase mt-2">Projects Done</span>
              </SpotlightCard>
              <SpotlightCard className="p-4 md:p-5 flex flex-col justify-center text-center">
                <span className="font-display font-black text-2xl md:text-4xl text-white block">15+</span>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#64748b] uppercase mt-2">Happy Clients</span>
              </SpotlightCard>
            </div>

            {/* Philosophies Accordion */}
            <div className="flex flex-col gap-3">
              {philosophies.map((philo, index) => {
                const Icon = philo.icon;
                const isOpen = openPhilosophy === index;
                return (
                  <div
                    key={philo.title}
                    className={`rounded-xl border transition-all duration-300 ${isOpen
                      ? 'border-white/15 bg-white/5'
                      : 'border-white/5 bg-[#0e0e12]/30 hover:border-white/10'
                      }`}
                  >
                    <button
                      onClick={() => setOpenPhilosophy(isOpen ? -1 : index)}
                      className="w-full px-5 py-4 flex justify-between items-center text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${isOpen ? 'bg-[#2563eb]/20 text-[#2563eb]' : 'bg-white/5 text-[#94a3b8]'}`}>
                          <Icon size={18} />
                        </div>
                        <span className="font-display font-bold text-sm md:text-base text-white">{philo.title}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-[#64748b] transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#94a3b8] leading-relaxed border-t border-white/5 mt-1 pl-[3.25rem]">
                            {philo.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
