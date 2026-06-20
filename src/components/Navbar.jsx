import React from 'react';
import CardNav from './react-bits/CardNav';

const navItems = [
  {
    label: "Profile",
    bgColor: "#13131c",
    textColor: "#fff",
    links: [
      { label: "Home", href: "#home", ariaLabel: "Home Section" },
      { label: "About Me", href: "#about", ariaLabel: "About Me Section" },
      { label: "Skills", href: "#skills", ariaLabel: "Skills Section" }
    ]
  },
  {
    label: "Portfolio",
    bgColor: "#0d131f",
    textColor: "#fff",
    links: [
      { label: "Projects", href: "#projects", ariaLabel: "Projects Section" },
      { label: "Experience", href: "#experience", ariaLabel: "Experience Section" },
      { label: "Gallery", href: "#gallery", ariaLabel: "Gallery Section" }
    ]
  },
  {
    label: "Connect",
    bgColor: "#0a1916",
    textColor: "#fff",
    links: [
      { label: "Services", href: "#services", ariaLabel: "Services Section" },
      { label: "Contact", href: "#contact", ariaLabel: "Contact Section" },
      { label: "Instagram", href: "https://www.instagram.com/radityaabib", ariaLabel: "Instagram Profile" }
    ]
  }
];

export default function Navbar() {
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
      baseColor="#070709"
      menuColor="#ffffff"
      buttonBgColor="#2563eb"
      buttonTextColor="#ffffff"
      ctaText="Let's Talk"
      onCtaClick={handleCtaClick}
      ease="power3.out"
    />
  );
}
