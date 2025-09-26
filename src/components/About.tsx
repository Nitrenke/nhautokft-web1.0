import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white flex w-full flex-col overflow-hidden items-center text-black font-bold justify-center px-20 py-12 max-md:max-w-full max-md:px-5">
      <div className="w-full max-w-[1140px] text-center">
        <header>
          <h2 className="text-7xl max-md:max-w-full max-md:text-[40px]">
            Ismerj meg minket!
          </h2>
        </header>
        
        <div className="flex flex-col text-[32px] mt-8 px-[74px] max-md:max-w-full max-md:mt-6 max-md:px-5">
          <p className="text-2xl font-normal text-center max-md:max-w-full">
            A Nátó&Hollósy Autó Kft-nél a minőség és
            <br />
            a kedvező ár jár kéz a kézben, mindezt
            <br />
            gördülékeny ügyintézéssel szolgáltatjuk.
            <br />
            A Tormay Autóházban várunk szeretettel a
            <br />
            Gödöllő Dózsa György út 162. szám alatt.
          </p>
          
          <img
            src="https://api.builder.io/api/v1/image/assets/d3401f44e5724561a8b5caffaf91c198/d7d41332db0e139812b5acb0f58714609570c631?placeholderIfAbsent=true"
            alt="Company statistics visualization"
            className="aspect-[0.99] object-contain w-[273px] self-center max-w-full mt-[18px]"
          />
          
          <div className="space-y-8 max-md:space-y-6 text-center">
            <div className="self-stretch mt-[9px] max-md:max-w-full flex items-center justify-center gap-3">
              <Check className="text-blue-500 w-8 h-8 flex-shrink-0" strokeWidth={3} />
              1500+ visszatérő vendég évente
            </div>
            <div className="flex items-center justify-center gap-3">
              <Check className="text-blue-500 w-8 h-8 flex-shrink-0" strokeWidth={3} />
              Korszerű gépek
            </div>
            <div className="flex items-center justify-center gap-3">
              <Check className="text-blue-500 w-8 h-8 flex-shrink-0" strokeWidth={3} />
              Kiváló minőség
            </div>
            <div className="flex items-center justify-center gap-3">
              <Check className="text-blue-500 w-8 h-8 flex-shrink-0" strokeWidth={3} />
              Kedvező ár
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
