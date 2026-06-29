import React from 'react';
import { ArrowUp } from 'lucide-react';
import Magnetic from './react-bits/Magnetic';
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

export default function Footer() {
  const { t } = useApp();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { key: 'home', label: t.navbar.home },
    { key: 'about', label: t.navbar.about },
    { key: 'projects', label: t.navbar.projects },
    { key: 'experience', label: t.navbar.experience },
    { key: 'contact', label: t.navbar.contact }
  ];

  return (
    <footer className="w-full bg-dark-bg border-t border-border-subtle py-12 md:py-16 overflow-hidden relative z-[700]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left: Brand logo & copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="font-display font-black text-lg tracking-wider text-text-primary"
          >
            <img src="/logo-transparent-blue.png" alt="Raditya.Dev Logo" className="h-8 w-auto object-contain" />
          </a>
          <span className="text-xs font-sans text-text-muted tracking-wide">
            © {new Date().getFullYear()} Raditya Abib. {t.footer.copyright}
          </span>
        </div>

        {/* Center: Quick navigation links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {links.map((link) => (
            <a
              key={link.key}
              href={`#${link.key}`}
              onClick={(e) => handleLinkClick(e, `#${link.key}`)}
              className="text-xs font-sans font-semibold tracking-wider text-text-secondary hover:text-text-primary uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Social handles & Back to top */}
        <div className="flex items-center gap-6">
          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/koutasatouu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/radityaabib/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://www.instagram.com/radityaabib/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>

          {/* Magnetic Back to Top */}
          <Magnetic range={25} strength={0.3}>
            <button
              onClick={handleScrollToTop}
              className="w-10 h-10 rounded-full border border-border-subtle hover:border-border-subtle/50 bg-dark-card/60 hover:bg-dark-card-hover/40 text-text-primary flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </Magnetic>
        </div>

      </div>
    </footer>
  );

}

