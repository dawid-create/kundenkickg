import React from 'react';

const LogoShowcase: React.FC = () => {
  const logos = [
    {
      name: "World Of Defense",
      src: "/images/WorldOfDefense.png",
      alt: "World Of Defense Logo"
    },
    {
      name: "NLFC",
      src: "/images/NLFC.png",
      alt: "NLFC Logo"
    },
    {
      name: "KMRSD",
      src: "/images/KMRSD.png",
      alt: "KMRSD Logo"
    },
    {
      name: "Kampfsport Winter",
      src: "/images/KampfsportWinter.png",
      alt: "Kampfsport Winter Logo"
    },
    {
      name: "Kali Silat Evolution",
      src: "/images/Kali Silat Evolution.png",
      alt: "Kali Silat Evolution Logo"
    },
    {
      name: "EWTO",
      src: "/images/EWTO.png",
      alt: "EWTO Logo"
    },
    {
      name: "CrossFit Böblingen",
      src: "/images/CrossFitBöblingen.png",
      alt: "CrossFit Böblingen Logo"
    },
    {
      name: "Come Back Sports",
      src: "/images/ComeBackSports.png",
      alt: "Come Back Sports Logo"
    },
    {
 
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