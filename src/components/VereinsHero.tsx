import React from 'react';
import { useState } from 'react';
import { Zap, TrendingUp, Rocket, Lock } from 'lucide-react';
import ContactModal from './ContactModal';

const VereinsHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: Zap,
      label: 'Sichtbarkeit in deiner Region'
    },
    {
      icon: TrendingUp,
      label: 'Mehr Probetrainings'
    },
    {
      icon: Rocket,
      label: 'Website fertig in wenigen Tagen'
    },
    {
      icon: Lock,
      label: 'DSGVO sicher'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Main Content */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Deine neue Website steht in <span className="text-purple-600 font-black">7 Tagen</span> und bringt dir neue Mitglieder, ab <span className="text-purple-600 font-black">85 Euro im Monat</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Perfekt für Vereine und kleine Studios, die professionell auftreten wollen ohne Stress, ohne teure Agentur und ohne technisches Chaos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="#pricing" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Pakete ansehen
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
              >
                Beispiel ansehen
              </button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-200/50 hover:border-purple-400 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      {benefit.label}
                    </p>
                  </div>
                </div>
              );
            })}
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

export default VereinsHero;
