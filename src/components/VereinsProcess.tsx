import React from 'react';
import { MessageSquare, Code, Rocket } from 'lucide-react';

const VereinsProcess: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: '1',
      title: 'Kurzes Gespräch',
      description: 'Wir klären was deine Schule einzigartig macht und welche Ziele du hast.',
      details: '~30 Minuten • Kostenlos • Unverbindlich'
    },
    {
      icon: Code,
      number: '2',
      title: 'Umsetzung in wenigen Tagen',
      description: 'Du bekommst die ersten Entwürfe und wir optimieren bis es perfekt passt.',
      details: '3-7 Tage • Mehrere Iterationen • Deine Feedback wird eingebaut'
    },
    {
      icon: Rocket,
      number: '3',
      title: 'Launch und Wachstum',
      description: 'Die Website geht live und du bekommst mehr Sichtbarkeit und Anfragen.',
      details: 'Sofort aktiv • Mit Analytics • Support inklusive'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              So läuft es ab
            </h2>
            <p className="text-lg text-gray-600">
              Von der Idee zur Live-Website in wenigen Tagen
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 left-1/2 w-full h-1 bg-gradient-to-r from-purple-300 to-purple-200 transform translate-y-0" style={{
                      left: 'calc(50% + 2rem)',
                      right: 'calc(-50% + 2rem)',
                      width: 'calc(100% - 4rem)'
                    }}>
                    </div>
                  )}

                  {/* Card */}
                  <div className="relative bg-white border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-lg transition-all duration-300 h-full">
                    {/* Step Number Circle */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="pt-4 border-t border-purple-100">
                        <p className="text-sm text-purple-600 font-medium">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-8 lg:p-12 text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Bereit, deine erste Website zu starten?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Lass uns in einem unverbindlichen Gespräch klären, wie wir dein Studio voranbringen können.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Jetzt Erstgespräch buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VereinsProcess;
