import React, { useState } from 'react';
import ContactModal from './ContactModal';

const VereinsCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            Dein Verein verdient eine professionelle Website
          </h2>

          <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Lass uns in einem kostenlosen, unverbindlichen Gespräch klären, wie wir dein Studio mit einer neuen Website voranbringen können.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-white">
              <div className="text-2xl font-bold mb-1">7 Tage</div>
              <div className="text-sm opacity-90">Website fertig</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold mb-1">85 €/Monat</div>
              <div className="text-sm opacity-90">Günstig starten</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold mb-1">0 €</div>
              <div className="text-sm opacity-90">Für das Erstgespräch</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Kostenloses Gespräch buchen
            </button>
            <a
              href="#pricing"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Pakete noch mal sehen
            </a>
          </div>

          <div className="text-white/80 text-sm pt-4">
            <p>Über 10 erfolgreiche Websites für Studios und Vereine gebaut</p>
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

export default VereinsCTA;
