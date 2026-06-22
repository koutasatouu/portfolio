import React from 'react';
import { Terminal, PenTool, Video, CheckCircle2 } from 'lucide-react';
import CardSwap, { Card } from './react-bits/CardSwap';
import Magnetic from './react-bits/Magnetic';
import { useApp } from '../context/AppContext';
import GradientText from './react-bits/GradientText';

const servicesList = [
  {
    icon: Terminal,
    colorClass: 'text-[#2563eb] border-[#2563eb]/10 bg-[#2563eb]/5',
    glowColor: 'rgba(37, 99, 235, 0.12)',
  },
  {
    icon: PenTool,
    colorClass: 'text-amber-500 border-amber-500/10 bg-amber-500/5',
    glowColor: 'rgba(245, 158, 11, 0.12)',
  },
  {
    icon: Video,
    colorClass: 'text-[#7c3aed] border-[#7c3aed]/10 bg-[#7c3aed]/5',
    glowColor: 'rgba(124, 58, 237, 0.12)',
  },
];

export default function Services() {
  const { t } = useApp();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = servicesList.map((service, idx) => {
    const translation = t.services.items[idx] || {};
    return {
      ...service,
      title: translation.title || '',
      description: translation.description || '',
      bullets: translation.bullets || [],
    };
  });

  return (
    <section id="services" className="relative w-full py-24 md:py-32 bg-dark-bg overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[10%] w-[25vw] h-[25vw] bg-accent-blue/5 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] bg-accent-purple/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: text description */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">{t.services.tag}</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight leading-tight mb-6">
              {t.services.headline} <GradientText>{t.services.headlineAccent}</GradientText>
            </h2>
            <p className="font-sans text-xs md:text-sm text-text-secondary mb-8 leading-relaxed">
              {t.services.desc}
            </p>

            <div className="flex flex-col gap-4">
              {items.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="flex items-center gap-4 p-4 squircle-sm border border-border-subtle bg-dark-card/30">
                    <div className={`p-2.5 squircle-sm border ${service.colorClass}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs md:text-sm text-text-primary">{service.title}</h4>
                      <p className="font-sans text-[11px] text-text-muted">{service.description.slice(0, 50)}...</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: CardSwap Stack */}
          <div className="lg:col-span-7 flex justify-center items-center h-[520px] overflow-visible relative">
            <CardSwap
              width={400}
              height="auto"
              cardDistance={25}
              verticalDistance={30}
              delay={5000}
              pauseOnHover={true}
              easing="elastic"
            >
              {items.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={idx}
                    className="p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl bg-dark-card border border-border-subtle"
                  >
                    <div>
                      {/* Icon badge */}
                      <div className={`p-4 squircle-md border w-fit mb-8 ${service.colorClass}`}>
                        <Icon size={24} />
                      </div>

                      {/* Title & description */}
                      <h3 className="font-display font-bold text-lg md:text-xl text-text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-text-secondary leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Bullet points */}
                      <ul className="flex flex-col gap-3.5 mb-8">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-3 text-xs md:text-sm text-text-primary">
                            <CheckCircle2 size={16} className="text-accent-blue shrink-0" />
                            <span className="font-sans text-text-secondary">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA button */}
                    <div className="mt-auto pt-6 border-t border-border-subtle">
                      <Magnetic range={30} strength={0.2}>
                        <a
                          href="#contact"
                          onClick={handleScrollToContact}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-border-subtle hover:border-accent-blue hover:bg-accent-blue/10 text-text-primary transition-all duration-300"
                        >
                          {t.services.cta}
                        </a>
                      </Magnetic>
                    </div>
                  </Card>
                );
              })}
            </CardSwap>
          </div>

        </div>
      </div>
    </section>
  );

}

