import React, { useState } from 'react';
import { Calendar, MessageCircle, CheckCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const NextSteps: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      number: "01",
      icon: <Calendar className="w-8 h-8 text-[#8d3cca]" />,
      title: "Buche eine Beratung",
      description: "Vereinbare jetzt ein unverbindliches Erstgespräch über unser Formular"
    },
    {
      number: "02",
      icon: <MessageCircle className="w-8 h-8 text-[#8d3cca]" />,
      title: "Teile mir deine Situation",
      description: "Wir kontaktieren dich und besprechen deine aktuelle Situation, Wünsche sowie Erwartungen"
    },
    {
      number: "03",
      icon: <CheckCircle className="w-8 h-8 text-[#8d3cca]" />,
      title: "Plan umsetzen",
      description: "30–60-min Video-Call, Analyse & persönliche Strategie (kostenlos)"
    }
  ];

  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6">
              Die nächsten Schritte zu deinem kostenlosen Beratungsgespräch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/30 p-8 text-center shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-[#8d3cca] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mx-auto mb-6 mt-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] text-white px-8 py-4 rounded-full font-semibold hover:from-[#7a35b3] hover:to-[#6b2d9e] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Jetzt kostenloses Beratungsgespräch vereinbaren
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

export default NextSteps;