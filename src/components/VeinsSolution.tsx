import React from 'react';
import { Target, Zap, Headphones } from 'lucide-react';

const VeinsSolution: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Optimiert für Anfragen',
      description: 'Layouts die Besucher direkt zu konkreten Handlungen führen, speziell für Kampfkunststudios.'
    },
    {
      icon: Zap,
      title: 'Schnell, modern, DSGVO sicher',
      description: 'Pagespeed, Datenschutz und mobile Optimierung sind direkt inklusive.'
    },
    {
      icon: Headphones,
      title: 'Keine Technik. Kein Stress.',
      description: 'Wir kümmern uns um alles. Du konzentrierst dich auf dein Training.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Eine neue Website, die für dich arbeitet, nicht andersrum
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wir bauen dir eine fertig verkaufsoptimierte Website, die Anfragen holt, Vertrauen aufbaut und dir jeden Monat neue Trainingsinteressenten bringt.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white border border-purple-100 rounded-2xl p-8 h-full hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-purple-200 group-hover:to-purple-100 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeinsSolution;
