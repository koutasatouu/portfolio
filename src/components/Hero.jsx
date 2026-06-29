import React from 'react';
import { motion } from 'framer-motion';
import { Film, Code, Compass, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import Magnetic from './react-bits/Magnetic';
import SplitText from './react-bits/SplitText';
import RotatingText from './react-bits/RotatingText';

export default function Hero() {
  const { t, lang } = useApp();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roles = lang === 'en'
    ? [
      'Graphic Designer',
      'UI/UX Designer',
      'Web Developer',
      'Translator',
      'Videographer',
      'Photographer',
      'Video Editor',
      'Photo Editor'
    ]
    : [
      'Desainer Grafis',
      'Desainer UI/UX',
      'Developer Web',
      'Penerjemah',
      'Videografer',
      'Fotografer',
      'Editor Video',
      'Editor Foto'
    ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg body-pattern pt-32 pb-32"
    >
      {/* Background Radial Glow Effects */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-accent-blue/10 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-accent-purple/10 rounded-full glow-blur pointer-events-none" />

      {/* Grid lines overlay */}
      <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subtitle Badge */}
          <motion.div
            variants={childVariants}
            className="mb-6 px-4 py-1.5 rounded-full border border-border-subtle bg-dark-card/30 backdrop-blur-md flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-text-secondary"
          >
            <span className="w-2 h-2 rounded-md bg-accent-blue animate-pulse" />
            <span>{lang === 'en' ? "Hello I'm " : "Halo Saya "}</span>
            <RotatingText
              texts={roles}
              mainClassName="text-accent-blue font-bold inline-flex px-2 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 ml-1"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.015}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </motion.div>

          {/* Large Hero Headline */}
          <h1 className="font-display font-black tracking-tight text-text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-center w-full flex flex-col mb-5">
            <SplitText
              text="Raditya Abib"
              className="inline-block"
              stagger={0.08}
            />
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={childVariants}
            className="max-w-2xl text-base md:text-xl text-text-secondary font-sans leading-relaxed mb-10"
          >
            {t.hero.description}
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
          >
            <Magnetic range={30} strength={0.2}>
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="group px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wide bg-text-primary text-dark-bg hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg shadow-text-primary/5 hover:shadow-accent-blue/20"
              >
                {t.hero.ctaWork}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic range={30} strength={0.2}>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide border border-border-subtle hover:border-border-subtle/30 text-text-primary bg-dark-card/30 hover:bg-dark-card/50 transition-colors"
              >
                {t.hero.ctaTalk}
              </a>
            </Magnetic>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={childVariants} className="flex gap-6 items-center">
            <Magnetic range={25} strength={0.3}>
              <a
                href="https://github.com/koutasatouu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
            </Magnetic>
            <Magnetic range={25} strength={0.3}>
              <a
                href="https://www.linkedin.com/in/radityaabib/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </Magnetic>
            <Magnetic range={25} strength={0.3}>
              <a
                href="https://www.instagram.com/radityaabib/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating 3D/Parallax Creative Icons */}
      <div className="absolute top-[25%] left-[8%] hidden xl:block pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel text-accent-blue"
        >
          <Code size={18} />
          <span className="text-xs font-bold text-text-primary tracking-widest uppercase">React.js</span>
        </motion.div>
      </div>

      <div className="absolute top-[35%] right-[8%] hidden xl:block pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel text-accent-purple"
        >
          <Compass size={18} />
          <span className="text-xs font-bold text-text-primary tracking-widest uppercase">{lang === 'en' ? "Design" : "Desain"}</span>
        </motion.div>
      </div>

      <div className="absolute bottom-[25%] left-[12%] hidden xl:block pointer-events-none">
        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel text-fuchsia-500"
        >
          <Film size={18} />
          <span className="text-xs font-bold text-text-primary tracking-widest uppercase">{lang === 'en' ? "Motion" : "Gerak"}</span>
        </motion.div>
      </div>
    </section>
  );

}

