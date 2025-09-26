import React from 'react';
interface ServiceCardProps {
  title: string;
  description: string;
  emoji: string;
  className?: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  emoji,
  className = ""
}) => {
  return <article className={`bg-card border border-border/50 flex w-full flex-col overflow-hidden items-center px-4 py-2 rounded-2xl max-md:max-w-full hover:shadow-[0px_10px_30px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${className}`}>
      <h3 className="text-4xl font-medium">{title}</h3>
      <p className="text-lg self-stretch mt-3 max-md:max-w-full text-center">
        {description}
      </p>
      <div className="text-[64px] mt-2 max-md:text-[40px]">
        {emoji}
      </div>
    </article>;
};
const Services: React.FC = () => {
  const services = [{
    title: "Kinek ajánljuk?",
    description: "Mindenkinek, aki gyors, megbízható szolgáltatást keres.\nAutósoknak és cégeknek egyaránt segítünk az ügyintézésben.",
    emoji: "🤔"
  }, {
    title: "Mit nyújtunk?",
    description: "Precíz és gördülékeny munkát kínálunk kedvező\u00A0áron. Legfőbb célunk problémákat megoldani, nem okozni.",
    emoji: "💼"
  }, {
    title: "Tapasztalat?",
    description: "Cégünk mögött több éves tapasztalat áll ezen a szakterületen.\nÜgyfeleinknek mindig gyors és megbízható segítséget nyújtunk.",
    emoji: "⭐️"
  }];
  return <section 
      id="services" 
      className="relative flex w-full flex-col overflow-hidden items-center text-foreground justify-center px-20 py-12 max-md:max-w-full max-md:px-5"
      style={{
        backgroundImage: `url('/lovable-uploads/1bb35f80-a3d5-463e-a939-4cea42e4e1b5.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Decorative top accent */}
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="relative z-10 flex w-[822px] max-w-full flex-col items-stretch ml-2.5">
        <header>
          <h2 className="text-7xl font-bold max-md:max-w-full max-md:text-[40px] text-center text-white">
            Amit kínálunk Neked!
          </h2>
        </header>
        
        <div className="self-center w-[480px] max-w-full font-normal mt-6 space-y-4">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} emoji={service.emoji} className={index === 1 ? "px-[57px] max-md:px-5" : index === 2 ? "px-[9px]" : ""} />)}
        </div>
      </div>
    </section>;
};
export default Services;