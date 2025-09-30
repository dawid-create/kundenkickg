import React from 'react';

const LogoShowcase: React.FC = () => {
  // Reuse the same logos from LogosSection
  const logos = [
    {
      name: "Logo 1",
      src: "/images/15.png",
      alt: "Client Logo 1"
    },
    {
      name: "Logo 2",
      src: "/images/2.png",
      alt: "Client Logo 2"
    },
    {
      name: "Logo 3",
      src: "/images/3.png",
      alt: "Client Logo 3"
    },
    {
      name: "Logo 4",
      src: "/images/8.png",
      alt: "Client Logo 4"
    },
    {
      name: "Logo 5",
      src: "/images/5.png",
      alt: "Client Logo 5"
    },
    {
      name: "Logo 12",
      src: "/images/12.png",
      alt: "Client Logo 12"
    },
    {
      name: "Logo 13",
      src: "/images/10.png",
      alt: "Client Logo 13"
    },
    {
      name: "Logo 6",
      src: "/images/9.png",
      alt: "Client Logo 6"
    },
    {
      name: "Logo 14",
      src: "/images/14.png",
      alt: "Client Logo 14"
    },
    {
      name: "Logo 15",
      src: "/images/13.png",
      alt: "Client Logo 15"
    },
    {
      name: "Logo 7",
      src: "/images/7.png",
      alt: "Client Logo 7"
    },
    {
      name: "Logo 8",
      src: "/images/4.png",
      alt: "Client Logo 8"
    },
    {
      name: "Logo 9",
      src: "/images/6.png",
      alt: "Client Logo 9"
    },
    {
      name: "Logo 10",
      src: "/images/1.png",
      alt: "Client Logo 10"
    },
    {
      name: "Logo 11",
      src: "/images/11.png",
      alt: "Client Logo 11"
    }
  ];

  // Select specific logos for different positions
  const topRowLogos = [logos[0], logos[1]]; // First 2 for top row
  const heroLogo = logos[2]; // Third logo as hero
  const gridLogos = logos.slice(3); // Remaining logos for grid

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by 15+ Martial Arts Gyms
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] rounded-full mx-auto"></div>
        </div>

        {/* Top Row - 2 Logos */}
        <div className="flex justify-center items-center gap-16 lg:gap-24 mb-12">
          {topRowLogos.map((logo, index) => (
            <div
              key={`top-${index}`}
              className="transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 lg:h-20 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Big Center Logo */}
        <div className="flex justify-center mb-16">
          <div className="transition-all duration-300 hover:scale-110">
            <img
              src={heroLogo.src}
              alt={heroLogo.alt}
              className="h-24 lg:h-32 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Grid of Remaining Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
          {gridLogos.map((logo, index) => (
            <div
              key={`grid-${index}`}
              className="transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-14 lg:h-18 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;