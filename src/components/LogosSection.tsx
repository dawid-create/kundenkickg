import React from 'react';

const LogosSection: React.FC = () => {
  // Local logo files from /public/images
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

  return (
    <section className="py-16">
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
                {logos.map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 mx-4 sm:mx-8 transition-all duration-300"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {logos.map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 mx-4 sm:mx-8 transition-all duration-300"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        }

        .pause-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogosSection;