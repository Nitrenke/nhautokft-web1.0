import React from 'react';

interface CallToActionProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  children, 
  onClick,
  className = "" 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - scroll to contact or call
      window.location.href = "tel:+36205000444";
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[rgba(168,255,53,1)] shadow-[0px_0px_25px_rgba(168,255,53,0.5)] w-[180px] max-w-full overflow-hidden text-lg text-black font-bold text-center rounded-[40px] hover:shadow-[0px_0px_35px_rgba(168,255,53,0.7)] transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      <div className="bg-[rgba(168,255,53,1)] shadow-[0px_0px_25px_rgba(168,255,53,0.5)] overflow-hidden px-[27px] py-[18px] rounded-[40px] max-md:px-5">
        {children}
      </div>
    </button>
  );
};

export default CallToAction;
