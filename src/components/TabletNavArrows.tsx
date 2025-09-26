import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TabletNavArrowsProps {
  sections: string[];
}

const TabletNavArrows: React.FC<TabletNavArrowsProps> = ({ sections }) => {
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
    <>
      {/* Left Arrow */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block lg:hidden">
        <Button
          variant="secondary"
          size="icon"
          onClick={goToPrevious}
          disabled={currentSection === 0}
          className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </Button>
      </div>

      {/* Right Arrow */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block lg:hidden">
        <Button
          variant="secondary"
          size="icon"
          onClick={goToNext}
          disabled={currentSection === sections.length - 1}
          className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </Button>
      </div>

      {/* Section Indicator for Tablet */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block lg:hidden">
        <div className="flex gap-2 bg-background/90 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-lg">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSection 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TabletNavArrows;