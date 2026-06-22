import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('raditya-portfolio-theme') || 'dark';
      const savedLang = localStorage.getItem('raditya-portfolio-lang') || 'en';
      setTheme(savedTheme);
      setLang(savedLang);

      if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('raditya-portfolio-theme', newTheme);
      if (newTheme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    }
  };

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'id' : 'en';
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('raditya-portfolio-lang', newLang);
    }
  };

  const t = translations[lang];

  return (
    <AppContext.Provider value={{ theme, lang, toggleTheme, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    // fallback values to avoid breaking if rendered outside context during SSR/Hydration
    return {
      theme: 'dark',
      lang: 'en',
      toggleTheme: () => {},
      toggleLang: () => {},
      t: translations.en
    };
  }
  return context;
}
