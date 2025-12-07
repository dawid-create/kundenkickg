import React from 'react';
import { useState } from 'react';
import { Check } from 'lucide-react';
import ContactModal from './ContactModal';

const BraunschweigHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Centered Content */}
          <div className="text-center space-y-8 max-w-6xl mx-auto">
            {/* H1 Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Deine{' '}
              <span className="text-[#8d3cca]">Online Marketing Agentur</span>{' '}
              in Braunschweig – Mehr Kunden. Mehr Sichtbarkeit. Mehr Umsatz.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Du willst, dass dein lokales Unternehmen online sichtbar wird? Unsere KundenKick Methode zieht dir Woche für Woche neue Anfragen über Google, SEO und smarte Werbung – ganz ohne Marketing-Chaos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Video */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                {/* Braunschweig City Image */}
                <img 
                  src="https://aventisweb.com/wp-content/uploads/2025/09/braunschweig-7213476_1280.jpg"
                  alt="Schloss Braunschweig - Online Marketing Agentur für lokale Unternehmen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Online Marketing für Braunschweig</h3>
                    <p className="text-sm opacity-90">Vom Schloss bis zur Innenstadt - lokale Sichtbarkeit für dein Unternehmen</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#8d3cca] rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#8d3cca] rounded-full opacity-10"></div>
            </div>

            {/* Right Side - Benefits List */}
            <div className="space-y-6 flex flex-col justify-center h-full min-h-[400px]">
              {/* Benefits List */}
              <div className="flex items-start space-x-4 py-1">
                <div className="flex-shrink-0 w-6 h-6 bg-[#8d3cca] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">
                    Lokale Sichtbarkeit in Braunschweig
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Werde bei Google gefunden, wenn deine Kunden nach deinen Dienstleistungen suchen – direkt in Braunschweig.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 py-1">
                <div className="flex-shrink-0 w-6 h-6 bg-[#8d3cca] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">
                    Planbare Kundengewinnung
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Keine Zufälle mehr: Mit unserer Methode bekommst du konstant neue Anfragen und Leads.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 py-1">
                <div className="flex-shrink-0 w-6 h-6 bg-[#8d3cca] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">
                    Messbare Ergebnisse
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    In nur 6 Monaten bis zu 182 neue Leads – und das mit messbarer Planungssicherheit.
                  </p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] text-white px-6 py-3 rounded-full font-semibold hover:from-[#7a35b3] hover:to-[#6b2d9e] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Kostenloses Erstgespräch vereinbaren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default BraunschweigHero;