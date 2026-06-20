import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const words = ["DESIGN", "DEVELOP", "EDIT", "MOTION", "CREATE"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = 'hidden';
    
    // Progress counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            document.body.style.overflow = '';
          }, 600); // short delay after hitting 100%
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    
    // Word cycler
    const wordTimer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 150);

    return () => clearInterval(wordTimer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#070709] p-8 md:p-16 select-none"
        >
          {/* Top Row: Brand & Status */}
          <div className="flex justify-between items-start">
            <span className="font-display font-bold text-lg tracking-wider text-white">RADITYA.DEV</span>
            <span className="text-sm font-sans tracking-widest text-[#94a3b8] uppercase">SYSTEM ONLINE</span>
          </div>

          {/* Middle Row: Large Word Indicator */}
          <div className="flex flex-col items-center">
            <div className="h-16 overflow-hidden relative w-full flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute font-display font-extrabold text-3xl md:text-5xl tracking-[0.2em] text-[#2563eb]"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Row: Percentage Counter & Bar */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <span className="text-xs md:text-sm tracking-widest text-[#64748b]">INITIALIZING CORE ASSETS</span>
              <span className="font-display font-bold text-5xl md:text-7xl tabular-nums text-white">
                {progress}%
              </span>
            </div>
            <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed]" 
                style={{ width: `${progress}%` }}
                layout
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
