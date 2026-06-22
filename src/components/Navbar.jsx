import React from 'react';
import CardNav from './react-bits/CardNav';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { t } = useApp();

  const navItems = [
    {
      label: t.navbar.profile,
      bgColor: "#13131c",
      textColor: "#fff",
      links: [
        { label: t.navbar.home, href: "#home", ariaLabel: "Home Section" },
        { label: t.navbar.about, href: "#about", ariaLabel: "About Me Section" }
      ]
    },
    {
      label: t.navbar.portfolio,
      bgColor: "#0d131f",
      textColor: "#fff",
      links: [
        { label: t.navbar.projects, href: "#projects", ariaLabel: "Projects Section" },
        { label: t.navbar.experience, href: "#experience", ariaLabel: "Experience Section" },
        { label: t.navbar.gallery, href: "#gallery", ariaLabel: "Gallery Section" }
      ]
    },
    {
      label: t.navbar.connect,
      bgColor: "#0a1916",
      textColor: "#fff",
      links: [
        { label: t.navbar.services, href: "#services", ariaLabel: "Services Section" },
        { label: t.navbar.contact, href: "#contact", ariaLabel: "Contact Section" },
        { label: "Instagram", href: "https://www.instagram.com/radityaabib", ariaLabel: "Instagram Profile" }
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
      logo="/favicon.svg"
      logoAlt="Raditya.Dev Logo"
      items={navItems}
      baseColor="rgba(7, 7, 9, 0.7)"
      menuColor="#ffffff"
      buttonBgColor="#2563eb"
      buttonTextColor="#ffffff"
      ctaText={t.navbar.cta}
      onCtaClick={handleCtaClick}
      ease="power3.out"
    />
  );
}

