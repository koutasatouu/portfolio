import React from 'react';
import { AppContextProvider } from '../context/AppContext';
import Loading from './Loading';
import Navbar from './Navbar';
import Hero from './Hero';
import TrustBar from './TrustBar';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Services from './Services';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

export default function PortfolioApp() {
  return (
    <AppContextProvider>
      {/* Introduction Loader */}
      <Loading />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Layout Sections */}
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        {/* <Gallery /> */}
        <Contact />
      </main>

      {/* Bottom Footer Section */}
      <Footer />

      {/* Floating Control Bar for Language & Theme Switching */}
      <ThemeToggle />
    </AppContextProvider>
  );
}
