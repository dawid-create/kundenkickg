import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VereinsExamples: React.FC = () => {
  const examples = [
    {
      title: 'Professionelle Hero Section',
      description: 'Beeindrucke Besucher sofort mit einer modernen Hero Section, die dein Studio ins beste Licht rückt.',
      gif: '/images/kmrsd.gif'
    },
    {
      title: 'Mobile optimiert',
      description: 'Perfekt auf allen Geräten: Deine Website sieht auf Smartphone, Tablet und Desktop großartig aus.',
      gif: '/images/kampfsport_winter.gif'
    },
    {
      title: 'Einfache Kontakt Formulare',
      description: 'Klare Call-to-Actions führen Interessierte direkt zu Probetraining Anfragen und Anmeldungen.',
      gif: '/images/world_of_defense.gif'
    }
  ];

  const [playingStates, setPlayingStates] = useState<boolean[]>(
    new Array(examples.length).fill(false)
  );

  const togglePlay = (index: number) => {
    setPlayingStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              So sieht deine neue Website aus
            </h2>
            <p className="text-lg text-gray-600">
              Moderne Designs, die funktionieren und neue Mitglieder bringen
            </p>
          </div>

          {/* Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="group">
                <div
                  className="relative rounded-2xl aspect-video mb-4 overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl cursor-pointer"
                  onClick={() => togglePlay(index)}
                >
                  {playingStates[index] ? (
                    <>
                      <img
                        src={example.gif}
                        alt={example.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Pause Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-all duration-300 opacity-0 hover:opacity-100">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                          <Pause className="w-7 h-7 text-blue-600" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110">
                          <Play className="w-9 h-9 text-blue-600 ml-1" fill="currentColor" />
                        </div>
                        <p className="text-white text-sm font-medium">
                          Klicken zum Abspielen
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {example.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {example.description}
                </p>
              </div>
            ))}
          </div>

          {/* Info Text */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              Diese Beispiele zeigen verschiedene Layouts aus unseren erfolgreichen Website-Projekten für Studios und Vereine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VereinsExamples;
