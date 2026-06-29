import React from 'react';
import CardNav from './react-bits/CardNav';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { t, theme } = useApp();

  const isLight = theme === 'light';

  const navItems = [
    {
      label: t.navbar.profile,
      bgColor: isLight ? '#e0f2fe' : '#13131c',
      textColor: isLight ? '#0369a1' : '#fff',
      links: [
        { label: t.navbar.home, href: "#home", ariaLabel: "Home Section" },
        { label: t.navbar.about, href: "#about", ariaLabel: "About Me Section" }
      ]
    },
    {
      label: t.navbar.portfolio,
      bgColor: isLight ? '#f3e8ff' : '#0d131f',
      textColor: isLight ? '#6b21a8' : '#fff',
      links: [
        { label: t.navbar.projects, href: "#projects", ariaLabel: "Projects Section" },
        { label: t.navbar.experience, href: "#experience", ariaLabel: "Experience Section" }
      ]
    },
    {
      label: t.navbar.connect,
      bgColor: isLight ? '#dcfce7' : '#0a1916',
      textColor: isLight ? '#15803d' : '#fff',
      links: [
        { label: t.navbar.services, href: "#services", ariaLabel: "Services Section" },
        { label: t.navbar.contact, href: "#contact", ariaLabel: "Contact Section" },
        { label: "Instagram", href: "https://www.instagram.com/radityaabib/", ariaLabel: "Instagram Profile" }
      ]
    }
  ];

  const handleCtaClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CardNav
      items={navItems}
      baseColor={isLight ? 'rgba(255, 255, 255, 0.75)' : 'rgba(7, 7, 9, 0.7)'}
      menuColor={isLight ? '#0f172a' : '#ffffff'}
      buttonBgColor="#2563eb"
      buttonTextColor="#ffffff"
      ctaText={t.navbar.cta}
      onCtaClick={handleCtaClick}
      ease="power3.out"
    />
  );
}

