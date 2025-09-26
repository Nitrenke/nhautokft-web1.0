import React from 'react';

const Contact: React.FC = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+36205000444";
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:nhautokft@gmail.com";
  };
  return <section id="contact" className="bg-white w-full overflow-hidden text-4xl text-white font-normal max-md:max-w-full">
      <div className="bg-black w-full max-md:max-w-full">
        <div className="flex flex-col relative min-h-[800px] w-full items-center justify-center px-20 py-16 max-md:max-w-full max-md:px-5">
          <img src="https://api.builder.io/api/v1/image/assets/d3401f44e5724561a8b5caffaf91c198/d8276a57e7cc104df7537fb32066e302137d8837?placeholderIfAbsent=true" alt="Contact background" className="absolute h-full w-full object-cover inset-0" />
          <div className="relative flex w-full max-w-[1022px] flex-col items-center max-md:max-w-full">
            <header>
              <h2 className="self-stretch max-md:max-w-full font-bold text-center text-5xl">
                Keress minket bizalommal!
              </h2>
            </header>
            
            <div className="space-y-6 text-center mt-6">
              <div className="cursor-pointer hover:text-[rgba(168,255,53,1)] transition-colors duration-200 max-md:flex max-md:flex-col max-md:items-center" onClick={handlePhoneCall}>
                <span className="hidden max-md:block mb-2">📞</span>
                <div><span className="max-md:hidden">📞</span>06/20-500-0444<span className="max-md:hidden">📞</span></div>
                <span className="hidden max-md:block mt-2">📞</span>
              </div>
              
              <div className="cursor-pointer hover:text-[rgba(168,255,53,1)] transition-colors duration-200 max-md:max-w-full max-md:flex max-md:flex-col max-md:items-center" onClick={handleEmailClick}>
                <span className="hidden max-md:block mb-2">✉️</span>
                <div><span className="max-md:hidden">✉️</span>nhautokft@gmail.com<span className="max-md:hidden">✉️</span></div>
                <span className="hidden max-md:block mt-2">✉️</span>
              </div>
              
              <address className="not-italic max-md:max-w-full max-md:flex max-md:flex-col max-md:items-center">
                <span className="hidden max-md:block mb-2">📍</span>
                <div><span className="max-md:hidden">📍</span>2100 Gödöllő, Dózsa György út 162.<span className="max-md:hidden">📍</span></div>
                <span className="hidden max-md:block mt-2">📍</span>
              </address>
            </div>
            
            <img src="https://api.builder.io/api/v1/image/assets/d3401f44e5724561a8b5caffaf91c198/aaa2798f861b1e4e7d077c77bce8d9df8362af1b?placeholderIfAbsent=true" alt="Location map" className="aspect-[1.5] object-contain w-[600px] max-w-full mt-6 rounded-lg shadow-lg" />
            
            <p className="self-stretch ml-[50px] mr-[51px] mt-6 max-md:max-w-full max-md:mx-5 text-center">
              A bejárat az Ottó Ferenc utca felől közelíthető meg!
            </p>
            
            {/* Opening Hours */}
            <div className="mt-8 mb-8 w-full max-w-md">
              <h3 className="text-2xl font-bold text-center mb-4">Nyitvatartás</h3>
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="space-y-2 text-lg">
                  <div className="flex justify-between">
                    <span>Hétfő</span>
                    <span>7:00–16:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kedd</span>
                    <span>7:00–16:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Szerda</span>
                    <span>7:00–16:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Csütörtök</span>
                    <span>7:00–16:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Péntek</span>
                    <span>7:00–15:00</span>
                  </div>
                  <div className="flex justify-between text-red-300">
                    <span>Szombat</span>
                    <span>Zárva</span>
                  </div>
                  <div className="flex justify-between text-red-300">
                    <span>Vasárnap</span>
                    <span>Zárva</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;