import React, { useEffect, useState } from 'react';
import { Search, Target, TrendingUp } from 'lucide-react';

const MethodSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('method-timeline');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;

      // Calculate progress through the section
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight)));
      
      // Determine active step based on scroll progress
      if (progress < 0.33) {
        setActiveStep(0);
      } else if (progress < 0.66) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-[#8d3cca]" />,
      title: "Analyse & Benchmarking",
      description: "Wir analysieren dein Studio, deine Stärken und Zielgruppe und entwickeln daraus ein klares Alleinstellungsmerkmal gegenüber deiner Konkurrenz.",
      image: "/images/StockImageMagnifyingGlass.png"
    },
    {
      icon: <Target className="w-8 h-8 text-[#8d3cca]" />,
      title: "Erst Hot Traffic, dann Cold Traffic.",
      description: "Erst aktive Suchende abholen, danach passive Zielgruppen für zusätzlich qualifizierte Kunden erschließen.",
      image: "/images/Stock Image Goolge.png"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#8d3cca]" />,
      title: "Skalierung & Automatisierung",
      description: "A/B-Testing und laufende Optimierung der Strategien. Anschließend Automatisierungen zur Zeiteinsparung und stabilen Skalierung.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="method-timeline" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6">
            Die MattenMagnet-Methode
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Aus 30+ Studio-Analysen und 50 Kampagnen entstand eine Methode, die bis zu 36 neue Anmeldungen pro Monat bringt.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-1 h-full bg-gray-200 rounded-full">
            {/* Active Progress Line */}
            <div 
              className="w-full bg-gradient-to-b from-[#8d3cca] to-[#7a35b3] rounded-full transition-all duration-500 ease-out"
              style={{ height: `${((activeStep + 1) / 3) * 100}%` }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                    index <= activeStep 
                      ? 'bg-[#8d3cca] border-[#8d3cca] shadow-lg shadow-[#8d3cca]/30' 
                      : 'bg-white border-gray-300'
                  }`}>
                    {index <= activeStep && (
                      <div className="absolute inset-0 rounded-full bg-[#8d3cca] animate-ping opacity-20" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  {/* Text Content */}
                  <div className={`space-y-4 lg:space-y-6 pl-16 lg:pl-0 ${
                    index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'
                  }`}>
                    <div className={`transform transition-all duration-700 ${
                      index <= activeStep 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-60'
                    }`}>
                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg border border-gray-100 mb-4 lg:mb-6">
                        {step.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                        {step.description}
                      </p>

                      {/* Step Number */}
                      <div className="inline-flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 bg-[#8d3cca] text-white rounded-full text-xs lg:text-sm font-bold mt-3 lg:mt-4">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${
                    index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16 lg:col-start-1'
                  }`}>
                    <div className={`transform transition-all duration-700 delay-200 ${
                      index <= activeStep 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : 'translate-y-8 opacity-60 scale-95'
                    }`}>
                      <div className="relative overflow-hidden rounded-2xl shadow-xl">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-48 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
                         loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSteps;