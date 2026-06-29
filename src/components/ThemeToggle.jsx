import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Magnetic from './react-bits/Magnetic';

export default function ThemeToggle() {
  const { theme, lang, toggleTheme, toggleLang } = useApp();

  const isLight = theme === 'light';

  return (
    <div 
      className={`fixed bottom-6 left-6 z-[700] flex items-center gap-3 px-4 py-2.5 rounded-full border shadow-2xl transition-all duration-300 backdrop-blur-md ${
        isLight 
          ? 'bg-white/85 border-slate-200/80 text-slate-800' 
          : 'bg-slate-950/85 border-white/10 text-white'
      }`}
    >
      
      {/* Language Switch */}
      <div 
        className={`flex items-center gap-1 p-0.5 rounded-full border transition-colors ${
          isLight 
            ? 'bg-slate-100 border-slate-200/50' 
            : 'bg-black/30 border-white/5'
        }`}
      >
        <button
          onClick={toggleLang}
          disabled={lang === 'en'}
          className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider font-display uppercase transition-all duration-350 cursor-pointer ${
            lang === 'en'
              ? isLight ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-black shadow-sm'
              : isLight ? 'text-slate-500 hover:text-slate-800' : 'text-[#94a3b8] hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          onClick={toggleLang}
          disabled={lang === 'id'}
          className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider font-display uppercase transition-all duration-350 cursor-pointer ${
            lang === 'id'
              ? isLight ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-black shadow-sm'
              : isLight ? 'text-slate-500 hover:text-slate-800' : 'text-[#94a3b8] hover:text-white'
          }`}
        >
          ID
        </button>
      </div>

      {/* Vertical Divider */}
      <div className={`h-5 w-[1px] transition-colors ${isLight ? 'bg-slate-200' : 'bg-white/10'}`} />

      {/* Theme Switch */}
      <Magnetic range={20} strength={0.25}>
        <button
          onClick={toggleTheme}
          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
            isLight 
              ? 'border-slate-200 hover:border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800' 
              : 'border-white/5 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white'
          }`}
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
