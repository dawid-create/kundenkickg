import React, { useState } from 'react';
import ContactModal from './ContactModal';

const KCSHighlight: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Title - Always first on mobile */}
            <div className="lg:hidden">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                290% mehr Probetrainings in 2 Monaten
              </h2>
            </div>

            {/* Image - Second on mobile, last on desktop */}
            <div className="relative order-2 lg:order-last -mx-4 sm:-mx-6 lg:mx-0">
              <img
                src="/images/FAF CTA.webp"
                alt="Fit and Fight 38 Success Story"
                className="w-full h-80 object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
               loading="lazy"
              />
            </div>

            {/* Text Content - Third on mobile, first on desktop */}
            <div className="space-y-6 order-3 lg:order-first">
              {/* Title - Hidden on mobile, shown on desktop */}
              <h2 className="hidden lg:block text-3xl lg:text-4xl font-bold leading-tight text-left">
                290% mehr Probetrainings in 2 Monaten
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed lg:text-left">
                Entdecke, wie wir Fit and Fight 38 in 90 Tagen 3X mehr Probetrainings verschafft haben 
                (trotz starker Konkurrenz).
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] text-white px-8 py-4 rounded-full font-semibold hover:from-[#7a35b3] hover:to-[#6b2d9e] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mx-auto lg:mx-0 block lg:inline-block"
              >
                Kostenloses Erstgespräch vereinbaren
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default KCSHighlight;