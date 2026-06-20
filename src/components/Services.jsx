import React from 'react';
import { Terminal, PenTool, Video, CheckCircle2 } from 'lucide-react';
import CardSwap, { Card } from './react-bits/CardSwap';
import Magnetic from './react-bits/Magnetic';
import GradientText from './react-bits/GradientText';

const servicesList = [
  {
    title: 'Web Development',
    icon: Terminal,
    description: 'Engineering fast, responsive, and secure digital products and database architectures from scratch.',
    bullets: [
      'Interactive React & Next.js frontends',
      'Robust Laravel / CodeIgniter backends',
      'Database schema & query optimization',
      'SEO audit & semantic HTML5 structures',
    ],
    colorClass: 'text-[#2563eb] border-[#2563eb]/10 bg-[#2563eb]/5',
    glowColor: 'rgba(37, 99, 235, 0.12)',
  },
  {
    title: 'Graphic Design',
    icon: PenTool,
    description: 'Crafting premium brand identity suites, design systems, and visual communication templates.',
    bullets: [
      'Corporate logos & brand guidelines',
      'High-fidelity vector illustration layout',
      'Stunning product mockup layouts',
      'Social media content layout grids',
    ],
    colorClass: 'text-amber-500 border-amber-500/10 bg-amber-500/5',
    glowColor: 'rgba(245, 158, 11, 0.12)',
  },
  {
    title: 'Video & Motion',
    icon: Video,
    description: 'Directing editorial post-production, commercial reels, and kinetic text animations.',
    bullets: [
      'Promo video edits & viral reels editing',
      'Kinetic motion graphics typography',
      'Color grading & LUT correction',
      'Post-production audio mixing & SFX',
    ],
    colorClass: 'text-[#7c3aed] border-[#7c3aed]/10 bg-[#7c3aed]/5',
    glowColor: 'rgba(124, 58, 237, 0.12)',
  },
];

export default function Services() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative w-full py-24 md:py-32 bg-[#070709] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[10%] w-[25vw] h-[25vw] bg-[#2563eb]/5 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] bg-[#7c3aed]/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: text description */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">WHAT I OFFER</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight mb-6">
              Premium Digital <GradientText>Services</GradientText>
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#94a3b8] mb-8 leading-relaxed">
              I deliver end-to-end digital solutions that marry clean code architecture with high-fidelity branding and editing.
            </p>

            <div className="flex flex-col gap-4">
              {servicesList.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0e0e12]/30">
                    <div className={`p-2.5 rounded-lg border ${service.colorClass}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs md:text-sm text-white">{service.title}</h4>
                      <p className="font-sans text-[11px] text-[#64748b]">{service.description.slice(0, 50)}...</p>
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
              {servicesList.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={idx}
                    className="p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl"
                  >
                    <div>
                      {/* Icon badge */}
                      <div className={`p-4 rounded-2xl border w-fit mb-8 ${service.colorClass}`}>
                        <Icon size={24} />
                      </div>

                      {/* Title & description */}
                      <h3 className="font-display font-bold text-lg md:text-xl text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-[#94a3b8] leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Bullet points */}
                      <ul className="flex flex-col gap-3.5 mb-8">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-3 text-xs md:text-sm text-white">
                            <CheckCircle2 size={16} className="text-[#2563eb] shrink-0" />
                            <span className="font-sans text-[#cbd5e1]">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA button */}
                    <div className="mt-auto pt-6 border-t border-white/5">
                      <Magnetic range={30} strength={0.2}>
                        <a
                          href="#contact"
                          onClick={handleScrollToContact}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/10 group-hover:border-[#2563eb] group-hover:bg-[#2563eb]/10 text-white transition-all duration-300"
                        >
                          Enquire Project
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
