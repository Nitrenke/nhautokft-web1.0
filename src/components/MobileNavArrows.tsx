import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavArrowsProps {
  sections: string[];
}

const MobileNavArrows: React.FC<MobileNavArrowsProps> = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setCurrentSection(i);
            break;
          }
        }
      }

    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      const element = document.getElementById(sections[index]);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const goToPrevious = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  const goToNext = () => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2 md:hidden">
      {/* Up Arrow */}
      <Button
        variant="secondary"
        size="icon"
        onClick={goToPrevious}
        disabled={currentSection === 0}
        className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <ChevronUp className="h-5 w-5 text-foreground" />
      </Button>

      {/* Section Indicator */}
      <div className="flex flex-col gap-1 px-2 py-1">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Down Arrow */}
      <Button
        variant="secondary"
        size="icon"
        onClick={goToNext}
        disabled={currentSection === sections.length - 1}
        className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <ChevronDown className="h-5 w-5 text-foreground" />
      </Button>
    </div>
  );
};

export default MobileNavArrows;