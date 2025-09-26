import React from 'react';

interface PriceItemProps {
  price: string;
  description: string;
  className?: string;
}

const PriceItem: React.FC<PriceItemProps> = ({ price, description, className = "" }) => {
  return (
    <div className={className}>
      <div className="font-bold">{price}</div>
      <div className="text-lg font-normal mt-3">{description}</div>
    </div>
  );
};

interface PriceTableProps {
  title: string;
  items: Array<{ price: string; description: string }>;
  className?: string;
}

const PriceTable: React.FC<PriceTableProps> = ({ title, items, className = "" }) => {
  return (
    <article className={`bg-white flex min-w-60 flex-col overflow-hidden items-stretch w-[360px] px-[30px] py-[52px] rounded-2xl max-md:px-5 hover:shadow-[0px_10px_30px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-105 ${className}`}>
      <h3 className="font-normal mx-4 max-md:mx-2.5">{title}</h3>
      <div className="border shrink-0 h-px mt-[15px] border-black border-solid" />
      <div className="font-bold mt-[38px] space-y-3">
        {items.map((item, index) => (
          <PriceItem
            key={index}
            price={item.price}
            description={item.description}
            className="mt-3"
          />
        ))}
      </div>
    </article>
  );
};

const Pricing: React.FC = () => {
  const technicalInspectionPrices = [
    { price: "45,000Ft", description: "Személyautó (m1)" },
    { price: "47,000Ft", description: "Teherautó 3,5 tonna alatt (n1)" },
    { price: "25,000Ft", description: "Utánfutó" },
    { price: "22,000Ft", description: "Motorkerékpár" },
    { price: "+9,000Ft", description: "Összkerék-meghajtás" }
  ];

  const authenticityInspectionPrices = [
    { price: "23,000Ft", description: "1400cm3-ig" },
    { price: "25,000Ft", description: "1400 és 2000cm3 között" },
    { price: "27,000Ft", description: "2000cm3 fölött" },
    { price: "27,000Ft", description: "Teherautó minden esetben" }
  ];

  return (
    <section id="pricing" className="bg-white w-full overflow-hidden text-white max-md:max-w-full">
      <div className="bg-black w-full max-md:max-w-full">
        <div className="flex flex-col relative min-h-[1024px] w-full items-center justify-center px-20 py-[75px] max-md:max-w-full max-md:px-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/d3401f44e5724561a8b5caffaf91c198/09c9b693b80d804321dfdccdd83657bc0fa4cc14?placeholderIfAbsent=true"
            alt="Pricing background"
            className="absolute h-full w-full object-cover inset-0"
          />
          <div className="relative flex w-[848px] max-w-full flex-col items-center">
            <header>
              <h2 className="text-7xl font-bold max-md:text-[40px]">Árak</h2>
            </header>
            
            <div className="flex items-stretch gap-[40px_50px] text-4xl text-black flex-wrap mt-[29px] max-md:max-w-full justify-center">
              <PriceTable
                title="Műszaki vizsga"
                items={technicalInspectionPrices}
                className="self-stretch h-full"
              />
              <PriceTable
                title="Eredetiség vizsga"
                items={authenticityInspectionPrices}
                className="self-stretch h-full"
              />
            </div>
            
            <footer className="text-lg font-normal self-stretch mt-[51px] max-md:max-w-full max-md:mt-10">
              <p>
                *Fontos dokumentumok:
                <br />
                Magánszemély esetén – személy igazolvány, forgalmi engedély, biztosítást igazoló irat
                <br />
                Cég esetén – aláírási címpéldány és tárolt cégkivonat, forgalmiengedély, biztosítást igazoló irat
              </p>
              <div className="mt-4 space-y-3">
                <p className="text-lg font-normal">
                  *Letölthető meghatalmazások:
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <a
                    href="/meghati_magan_vizsga.doc"
                    download="meghatalmazas_magan_vizsga.doc"
                    className="text-lg font-normal underline hover:no-underline hover:text-[rgba(168,255,53,1)] hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    Magán vizsga meghatalmazás
                  </a>
                  <a
                    href="/megh_jogi_szem.doc"
                    download="meghatalmazas_jogi_szemely.doc"
                    className="text-lg font-normal underline hover:no-underline hover:text-[rgba(168,255,53,1)] hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    Jogi személy meghatalmazás
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
