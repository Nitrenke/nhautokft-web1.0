import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import MobileNavArrows from '@/components/MobileNavArrows';
import TabletNavArrows from '@/components/TabletNavArrows';

const Index: React.FC = () => {
  const sections = ['home', 'about', 'services', 'pricing', 'contact'];

  return (
    <div className="min-h-screen bg-white">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      {/* Navigation Arrows for Mobile and Tablet */}
      <MobileNavArrows sections={sections} />
      <TabletNavArrows sections={sections} />
    </div>
  );
};

export default Index;
