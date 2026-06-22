import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Magnetic from './react-bits/Magnetic';

export default function ThemeToggle() {
  const { theme, lang, toggleTheme, toggleLang } = useApp();

  return (
    <div className="fixed bottom-6 left-6 z-[700] flex items-center gap-3 px-4 py-2.5 rounded-full glass-panel border border-white/10 shadow-2xl transition-all duration-300 bg-slate-950/80 backdrop-blur-md">
      
      {/* Language Switch */}
      <div className="flex items-center gap-1 bg-black/30 p-0.5 rounded-full border border-white/5">
        <button
          onClick={toggleLang}
          disabled={lang === 'en'}
          className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider font-display uppercase transition-all duration-350 cursor-pointer ${
            lang === 'en'
              ? 'bg-white text-black shadow-sm'
              : 'text-[#94a3b8] hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          onClick={toggleLang}
          disabled={lang === 'id'}
          className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider font-display uppercase transition-all duration-350 cursor-pointer ${
            lang === 'id'
              ? 'bg-white text-black shadow-sm'
              : 'text-[#94a3b8] hover:text-white'
          }`}
        >
          ID
        </button>
      </div>

      {/* Vertical Divider */}
      <div className="h-5 w-[1px] bg-white/10" />

      {/* Theme Switch */}
      <Magnetic range={20} strength={0.25}>
        <button
          onClick={toggleTheme}
          className="w-7 h-7 rounded-full border border-white/5 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Toggle theme mode"
        >
          {theme === 'dark' ? (
            <Sun size={13} className="text-amber-400" />
          ) : (
            <Moon size={13} className="text-sky-400" />
          )}
        </button>
      </Magnetic>
    </div>
  );
}
