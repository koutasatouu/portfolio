import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Layers, Terminal, ChevronDown } from 'lucide-react';
import SpotlightCard from './react-bits/SpotlightCard';
import ProfileCard from './react-bits/ProfileCard';
import GradientText from './react-bits/GradientText';
import { useApp } from '../context/AppContext';

export default function About() {
  const [openPhilosophy, setOpenPhilosophy] = useState(0);
  const { t, lang } = useApp();

  const philoIcons = [Layers, Terminal, Award];
  const philoItems = (t.about.philosophies || []).map((item, index) => ({
    ...item,
    icon: philoIcons[index] || Layers
  }));

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-dark-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[40%] right-[5%] w-[25vw] h-[25vw] bg-accent-purple/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <ProfileCard
              name="Raditya Abib"
              title={lang === 'en' ? "Designer & Developer" : "Desainer & Developer"}
              handle="radityaabib"
              status={lang === 'en' ? "Available" : "Tersedia"}
              contactText={t.navbar.cta}
              avatarUrl="/me.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const section = document.querySelector('#contact');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              behindGlowEnabled={true}
              behindGlowColor="rgba(37, 99, 235, 0.4)"
              innerGradient="linear-gradient(145deg, rgba(37, 99, 235, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)"
            />
          </div>

          {/* Right Column: Bio / Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">{t.about.tag}</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary mb-6 tracking-tight leading-tight">
              {t.about.headline} <GradientText>{t.about.headlineAccent}</GradientText>
            </h2>

            <p className="font-sans text-base md:text-lg text-text-secondary mb-8 leading-relaxed">
              {t.about.desc}
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <SpotlightCard className="p-4 md:p-5 flex flex-col justify-center text-center">
                <span className="font-display font-black text-2xl md:text-4xl text-text-primary block">4+</span>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-text-muted uppercase mt-2">{t.about.stat1}</span>
              </SpotlightCard>
              <SpotlightCard className="p-4 md:p-5 flex flex-col justify-center text-center">
                <span className="font-display font-black text-2xl md:text-4xl text-accent-blue block">25+</span>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-text-muted uppercase mt-2">{t.about.stat2}</span>
              </SpotlightCard>
              <SpotlightCard className="p-4 md:p-5 flex flex-col justify-center text-center">
                <span className="font-display font-black text-2xl md:text-4xl text-text-primary block">15+</span>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-text-muted uppercase mt-2">{t.about.stat3}</span>
              </SpotlightCard>
            </div>

            {/* Philosophies Accordion */}
            <div className="flex flex-col gap-3">
              {philoItems.map((philo, index) => {
                const Icon = philo.icon;
                const isOpen = openPhilosophy === index;
                return (
                  <div
                    key={philo.title}
                    className={`squircle-sm border transition-all duration-300 ${isOpen
                      ? 'border-border-subtle bg-dark-card/50'
                      : 'border-border-subtle/50 bg-dark-card/20 hover:border-border-subtle'
                      }`}
                  >
                    <button
                      onClick={() => setOpenPhilosophy(isOpen ? -1 : index)}
                      className="w-full px-5 py-4 flex justify-between items-center text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 squircle-sm ${isOpen ? 'bg-accent-blue/20 text-accent-blue' : 'bg-dark-card/40 text-text-secondary'}`}>
                          <Icon size={18} />
                        </div>
                        <span className="font-display font-bold text-sm md:text-base text-text-primary">{philo.title}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-text-primary' : ''}`}
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
                          <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-1 pl-[3.25rem]">
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

