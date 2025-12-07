import React, { useState } from 'react';
import { Search, MousePointer, Globe, BarChart3 } from 'lucide-react';
import ContactModal from './ContactModal';

const BraunschweigServices: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: <Search className="w-8 h-8 text-[#8d3cca]" />,
      title: "Suchmaschinenoptimierung (SEO Braunschweig)",
      description: "Lokale Rankings, mehr Klicks, mehr Kunden. Werde bei Google gefunden, wenn deine Zielgruppe nach deinen Dienstleistungen sucht.",
      features: [
        "Lokale SEO für Braunschweig",
        "Keyword-Optimierung",
        "Google My Business Optimierung",
        "Technische SEO"
      ]
    },
    {
      icon: <MousePointer className="w-8 h-8 text-[#8d3cca]" />,
      title: "Google Ads Agentur Braunschweig",
      description: "Performance-Kampagnen mit messbaren Ergebnissen. Sofortige Sichtbarkeit und qualifizierte Leads für dein Unternehmen.",
      features: [
        "Google Ads Setup & Management",
        "Lokale Kampagnen für Braunschweig",
        "Landing Page Optimierung",
        "Conversion Tracking"
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-[#8d3cca]" />,
      title: "Website erstellen lassen Braunschweig",
      description: "Moderne, schnelle Websites, die verkaufen. Professionelle Webauftritte, die deine Kunden überzeugen und konvertieren.",
      features: [
        "Responsive Webdesign",
        "SEO-optimierte Struktur",
        "Schnelle Ladezeiten",
        "Conversion-Optimierung"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#8d3cca]" />,
      title: "Online Marketing Gesamtstrategie",
      description: "Wir bringen alles zusammen, was wirkt. Eine durchdachte Strategie, die SEO, Ads und Website perfekt kombiniert.",
      features: [
        "Ganzheitliche Marketingstrategie",
        "Multi-Channel Ansatz",
        "Performance Monitoring",
        "Kontinuierliche Optimierung"
      ]
    }
  ];

  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6">
              SEO & Google Ads für Braunschweig: So wirst du online gefunden
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Unsere Services sind speziell auf lokale Unternehmen in Braunschweig zugeschnitten. 
              Von der ersten Analyse bis zur kontinuierlichen Optimierung – wir sorgen für deine Online-Sichtbarkeit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:border-[#8d3cca]/30"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-[#8d3cca]/10 rounded-full mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#8d3cca] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#8d3cca]/10 to-[#7a35b3]/10 rounded-2xl border border-[#8d3cca]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Lass uns deine Online-Sichtbarkeit in Braunschweig auf das nächste Level bringen.
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Kostenlose Analyse deines aktuellen Marketings + konkrete Handlungsempfehlungen.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] text-white px-8 py-4 rounded-full font-semibold hover:from-[#7a35b3] hover:to-[#6b2d9e] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Jetzt kostenloses Beratungsgespräch sichern
            </button>
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

export default BraunschweigServices;