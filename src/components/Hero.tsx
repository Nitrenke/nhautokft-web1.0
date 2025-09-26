import React from 'react';
import { Phone, Mail, Facebook } from 'lucide-react';
import Navigation from './Navigation';
import CallToAction from './CallToAction';
import FeatureCard from './FeatureCard';

const Hero: React.FC = () => {
  const socialIcons = [
    {
      Icon: Phone,
      href: "tel:+36205000444",
      ariaLabel: "Call 06/20-500-0444",
      size: 20
    },
    {
      Icon: Mail,
      href: "mailto:nhautokft@gmail.com",
      ariaLabel: "Email nhautokft@gmail.com",
      size: 20
    },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/godollovizsgabazis",
      ariaLabel: "Open our Facebook page",
      external: true,
      size: 18
    }
  ];

  const features = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/d3401f44e5724561a8b5caffaf91c198/4371ea885e0720c7158babe521c76872144f45ec?placeholderIfAbsent=true",
      title: "gyors ügyintézés"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/d3401f44e5724561a8b5caffaf91c198/1ff10987d85d42ce12964b2c1b484a09ab41191c?placeholderIfAbsent=true",
      title: "fantasztikus árak"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/d3401f44e5724561a8b5caffaf91c198/44523debba3447ec8a20716855efad6fb142e959?placeholderIfAbsent=true",
      title: "precíz munka"
    }
  ];

  return (
    <section id="home" className="bg-white w-full overflow-hidden max-md:max-w-full">
      <div className="bg-black w-full max-md:max-w-full">
        <div className="flex flex-col relative min-h-[678px] w-full items-center pt-6 pb-16 px-20 max-md:max-w-full max-md:pb-16 max-md:px-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/d3401f44e5724561a8b5caffaf91c198/c6a0034a4d5b104c337f62fcae316721b5e26e3d?placeholderIfAbsent=true"
            alt="Hero background"
            className="absolute h-full w-full object-cover inset-0"
          />
          <div className="relative flex w-full max-w-[1140px] flex-col items-center -mb-6 max-md:max-w-full max-md:mb-2.5">
            <header className="self-stretch flex w-full items-center justify-between max-md:max-w-full max-md:flex-col max-md:gap-4">
              {/* Mobile: Company name at top center */}
              <div className="text-white text-2xl font-bold text-center flex-shrink-0 max-md:text-xs max-md:order-1">
                Nátó & Hollósy
                <br />
                Autó Kft.
              </div>
              
              {/* Mobile: Icons in middle, Desktop: Navigation in center */}
              <div className="flex-1 flex justify-center max-md:order-2 max-md:flex-none">
                <Navigation className="self-stretch my-auto max-md:hidden" />
                <div className="hidden max-md:flex min-h-5 items-center gap-2.5 my-auto">
                  {socialIcons.map((icon, index) => {
                    const { Icon } = icon;
                    return (
                      <a
                        key={index}
                        href={icon.href}
                        aria-label={icon.ariaLabel}
                        title={icon.ariaLabel}
                        target={icon.external ? "_blank" : undefined}
                        rel={icon.external ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-[rgba(168,255,53,1)] hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        <Icon size={icon.size} />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              {/* Desktop: Icons on right */}
              <div className="self-stretch flex min-h-5 items-center gap-2.5 my-auto flex-shrink-0 max-md:hidden">
                <div className="flex items-center gap-2.5">
                  {socialIcons.map((icon, index) => {
                    const { Icon } = icon;
                    return (
                      <a
                        key={index}
                        href={icon.href}
                        aria-label={icon.ariaLabel}
                        title={icon.ariaLabel}
                        target={icon.external ? "_blank" : undefined}
                        rel={icon.external ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-[rgba(168,255,53,1)] hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        <Icon size={icon.size} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </header>
            
            <main className="flex flex-col items-center text-center">
              <h1 className="text-white text-4xl font-bold uppercase ml-3 mt-12 max-md:max-w-full max-md:mt-8">
                Műszaki és eredetiség
              </h1>
              <h2 className="text-white text-4xl font-bold uppercase ml-3 mt-2 max-md:max-w-full">
                vizsgálat
              </h2>
              <p className="text-white text-lg font-normal text-center ml-3 mt-8 max-md:max-w-full max-md:mt-6">
                A legjobb árak mellett profi eszközökkel és gyors ügyintézéssel dolgozunk.
                <br />
                A műszaki vizsgát kényelmes, klimatizált, WIFI-vel felszerelt ügyfélvárónkban akár meg is várhatja.
              </p>
              
              <CallToAction className="mt-12 max-md:mt-8">
                Hívjon MOST!
              </CallToAction>
              
              <div className="flex items-center gap-[40px_80px] flex-wrap mt-16 max-md:max-w-full max-md:mt-8 max-md:justify-center max-md:ml-3">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    className="self-stretch my-auto"
                  />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
