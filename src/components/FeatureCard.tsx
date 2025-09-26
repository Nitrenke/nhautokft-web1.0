import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, className = "" }) => {
  return (
    <div className={`shadow-[7px_7px_5px_rgba(0,0,0,0.5)] min-w-60 w-[250px] hover:transform hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="bg-[rgba(24,24,24,1)] shadow-[7px_7px_5px_rgba(0,0,0,0.5)] flex items-stretch gap-3.5 px-5 py-[18px] max-md:py-3 hover:bg-[rgba(34,34,34,1)] transition-colors duration-300">
        <img
          src={icon}
          alt={title}
          className="aspect-[1] object-contain w-[45px] shrink-0"
        />
        <div className="grow shrink w-[142px] my-auto text-lg text-white font-normal text-center">
          {title}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
