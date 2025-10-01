import React, { useState } from 'react';
import { Calendar, MessageCircle, CheckCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const NextSteps: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      number: "1",
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Buche eine Beratung",
      description: "Vereinbare jetzt ein unverbindliches Erstgespräch über unser Formular"
    },
    {
      number: "2",
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Teile mir deine Situation",
      description: "Wir kontaktieren dich und besprechen deine aktuelle Situation, Wünsche sowie Erwartungen"
    },
    {
      number: "3",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Plan umsetzen",
      description: "30–60-min Video-Call, Analyse & persönliche Strategie (kostenlos)"
    }
  ];

  return (
    <>
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Glow Effects */}
        <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large glow - top left */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-[#8d3cca]/20 via-[#8d3cca]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          
          {/* Medium glow - top right */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-radial from-[#7a35b3]/15 via-[#7a35b3]/8 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          {/* Small glow - center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-[#6b2d9e]/12 via-[#6b2d9e]/6 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
          
          {/* Large glow - bottom right */}
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-radial from-[#8d3cca]/18 via-[#8d3cca]/9 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Medium glow - bottom left */}
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-radial from-[#7a35b3]/14 via-[#7a35b3]/7 to-transparent rounded-full blur-2xl animate-pulse delay-1500"></div>
          
          {/* Mobile responsive smaller glows */}
        </div>

        {/* Simple mobile background */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6 leading-tight relative z-10">
              Die nächsten Schritte zu deinem kostenlosen Beratungsgespräch
            </h2>
          </div>

          {/* Steps with curved dotted path */}
          <div className="relative">
            {/* Curved dotted path - hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute top-2.5 left-0 right-0 h-32">
              <svg className="w-full h-full" viewBox="0 0 800 120" preserveAspectRatio="none">
                {/* First curve: 1 to 2 */}
                <path
                  d="M 150 20 Q 300 -10 400 20"
                  stroke="rgba(141, 60, 202, 0.4)"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  fill="none"
                  className="animate-pulse"
                />
                {/* Second curve: 2 to 3 */}
                <path
                  d="M 400 20 Q 550 50 650 20"
                  stroke="rgba(141, 60, 202, 0.4)"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="text-center relative z-10"
                >
                  {/* Step Number Box */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
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