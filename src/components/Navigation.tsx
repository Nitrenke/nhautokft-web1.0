import React, { useState } from 'react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Kezdőlap", href: "#home" },
    { label: "Rólunk", href: "#about" },
    { label: "Szolgáltatások", href: "#services" },
    { label: "Árak", href: "#pricing" },
    { label: "Kontakt", href: "#contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`flex items-center gap-4 md:gap-8 text-xs text-white font-normal whitespace-nowrap justify-center md:justify-start md:ml-[-100px] ${className}`}>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="hover:text-[rgba(168,255,53,1)] hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
