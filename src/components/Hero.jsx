import React from 'react';
import { motion } from 'framer-motion';
import { Film, Code, Compass, ArrowRight } from 'lucide-react';

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
import BlurText from './react-bits/BlurText';
import GradientText from './react-bits/GradientText';
import RotatingText from './react-bits/RotatingText';

export default function Hero() {
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

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#070709] pt-32 pb-24"
      style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      {/* Background Radial Glow Effects */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-[#2563eb]/10 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-[#7c3aed]/10 rounded-full glow-blur pointer-events-none" />

      {/* Grid lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

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
            className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#94a3b8]"
          >
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            <span>Hello I'm </span>
            <RotatingText
              texts={[
                'Graphics Designer',
                'UI/UX Designer',
                'Web Developer',
                'Translator',
                'Videographer',
                'Photographer',
                'Video Editor',
                'Photo Editor'
              ]}
              mainClassName="text-[#2563eb] font-bold inline-flex px-2 py-0.5 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/20 ml-1"
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
          <h1 className="font-display font-black tracking-tight text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-center w-full flex flex-col items-center justify-center">
            <SplitText
              text="Raditya Abib"
              className="inline-block"
              stagger={0.08}
            />
            <GradientText className="inline-flex mt-2">
              <BlurText
                text="Video Editor."
                delay={0.6}
                stagger={0.06}
              />
            </GradientText>
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={childVariants}
            className="max-w-2xl text-base md:text-xl text-[#94a3b8] font-sans leading-relaxed mb-10"
          >
            I craft immersive digital experiences by blending clean frontend development, premium visual design, and cinematic motion graphics.
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
                className="group px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wide bg-white text-black hover:bg-[#2563eb] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg shadow-white/5 hover:shadow-[#2563eb]/20"
              >
                View Selected Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic range={30} strength={0.2}>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide border border-white/10 hover:border-white/30 text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </a>
            </Magnetic>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={childVariants} className="flex gap-6 items-center">
            <Magnetic range={25} strength={0.3}>
              <a
                href="https://github.com/radityaabib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
            </Magnetic>
            <Magnetic range={25} strength={0.3}>
              <a
                href="https://linkedin.com/in/radityaabib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </Magnetic>
            <Magnetic range={25} strength={0.3}>
              <a
                href="https://www.instagram.com/radityaabib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-white transition-colors"
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
          className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel text-[#2563eb]"
        >
          <Code size={18} />
          <span className="text-xs font-bold text-white tracking-widest uppercase">React.js</span>
        </motion.div>
      </div>

      <div className="absolute top-[35%] right-[8%] hidden xl:block pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel text-[#7c3aed]"
        >
          <Compass size={18} />
          <span className="text-xs font-bold text-white tracking-widest uppercase">Design</span>
        </motion.div>
      </div>

      <div className="absolute bottom-[25%] left-[12%] hidden xl:block pointer-events-none">
        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel text-fuchsia-500"
        >
          <Film size={18} />
          <span className="text-xs font-bold text-white tracking-widest uppercase">Motion</span>
        </motion.div>
      </div>
    </section>
  );
}
