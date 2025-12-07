import React from 'react';

const LogosSection: React.FC = () => {
  const logos = [
    {
      name: "Client 1",
      src: "/images/Client Logos/1.png",
      alt: "Client 1 Logo"
    },
    {
      name: "Client 2",
      src: "/images/Client Logos/2.png",
      alt: "Client 2 Logo"
    },
    {
      name: "Client 3",
      src: "/images/Client Logos/3.png",
      alt: "Client 3 Logo"
    },
    {
      name: "Client 4",
      src: "/images/Client Logos/4.png",
      alt: "Client 4 Logo"
    },
    {
      name: "Client 5",
      src: "/images/Client Logos/5.png",
      alt: "Client 5 Logo"
    },
    {
      name: "Client 6",
      src: "/images/Client Logos/6.png",
      alt: "Client 6 Logo"
    },
    {
      name: "Client 7",
      src: "/images/Client Logos/7.png",
      alt: "Client 7 Logo"
    },
    {
      name: "Client 8",
      src: "/images/Client Logos/8.png",
      alt: "Client 8 Logo"
    },
    {
      name: "Client 9",
      src: "/images/Client Logos/9.png",
      alt: "Client 9 Logo"
    },
    {
      name: "Client 10",
      src: "/images/Client Logos/10.png",
      alt: "Client 10 Logo"
    },
    {
      name: "Client 11",
      src: "/images/Client Logos/11.png",
      alt: "Client 11 Logo"
    },
    {
      name: "Client 12",
      src: "/images/Client Logos/12.png",
      alt: "Client 12 Logo"
    },
    {
      name: "Client 13",
      src: "/images/Client Logos/13.png",
      alt: "Client 13 Logo"
    },
    {
      name: "Client 14",
      src: "/images/Client Logos/14.png",
      alt: "Client 14 Logo"
    },
    {
      name: "Client 15",
      src: "/images/Client Logos/15.png",
      alt: "Client 15 Logo"
    },
    {
      name: "Client 16",
      src: "/images/Client Logos/16.png",
      alt: "Client 16 Logo"
    },
    {
      name: "Client 17",
      src: "/images/Client Logos/17.png",
      alt: "Client 17 Logo"
    },
    {
      name: "Client 18",
      src: "/images/Client Logos/18 copy.png",
      alt: "Client 18 Logo"
    },
    {
      name: "Client 19",
      src: "/images/Client Logos/19.png",
      alt: "Client 19 Logo"
    }
  ];

  return (
    <>
      {/* First Logos Section - With Text */}
      <section className="pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left Column - Title */}
            <div className="col-span-12 lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                Diese Kunden vertrauen auf unsere Expertise
              </h3>
            </div>

            {/* Right Column - Logo Marquee */}
            <div className="col-span-12 lg:col-span-9">
              <div className="relative overflow-hidden">
                {/* Left fade overlay */}
                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                
                {/* Right fade overlay */}
                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                
                {/* Logo Marquee Container */}
                <div className="flex animate-marquee hover:pause-marquee">
                  {/* First set of logos */}
                  {logos.slice(0, 9).map((logo, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex-shrink-0 mx-2 sm:mx-8 transition-all duration-300"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-16 sm:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {logos.slice(0, 9).map((logo, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 mx-2 sm:mx-8 transition-all duration-300"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-16 sm:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Logos Section - Without Text */}
      <section className="pt-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Full Width Logo Marquee */}
            <div className="col-span-12">
              <div className="relative overflow-hidden">
                {/* Left fade overlay */}
                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                
                {/* Right fade overlay */}
                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                
                {/* Logo Marquee Container */}
                <div className="flex animate-marquee hover:pause-marquee">
                  {/* First set of logos */}
                  {logos.slice(9).map((logo, index) => (
                    <div
                      key={`third-${index}`}
                      className="flex-shrink-0 mx-2 sm:mx-8 transition-all duration-300"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-16 sm:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {logos.slice(9).map((logo, index) => (
                    <div
                      key={`fourth-${index}`}
                      className="flex-shrink-0 mx-2 sm:mx-8 transition-all duration-300"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-16 sm:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogosSection;