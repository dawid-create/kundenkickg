import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface TestimonialsCaseProps {
  showCTAButton?: boolean;
}

const TestimonialsCase: React.FC<TestimonialsCaseProps> = ({ showCTAButton = false }) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const cases = [
    {
      company: "No Limit Fight Club",
      quote: "64 neue Probetrainings in nur einem Monat – sowas hatten wir noch nie!",
      intro: "Strategisches PPC-Setup auf Google Ads mit maßgeschneiderten Landingpages und laufender Optimierung der Kampagnen.",
      kpis: [
        "64 neue Probetrainings in nur 30 Tagen",
        "Ad Budget: 337 €",
        "Finaler Cost-per-Probetraining: nur 5,25 €",
        "+300 % mehr organische Klicks zusätzlich, ganz ohne Ads"
      ],
      image: "/images/NLFC Results.webp",
      logo: "/images/9.png"
    },
    {
      company: "Fit and Fight 38",
      quote: "Wir haben endlich eine konstante Flut an neuen Leads – komplett ohne Ads!",
      intro: "Website-Relaunch mit Keyword-Optimierung, technischer SEO und zielgruppenorientierten Inhalten – ergänzt durch kurze Blogartikel.",
      kpis: [
        "182 zusätzliche Leads in 6 Monaten",
        "+202 % mehr Probetrainings → Ø +36,4 Leads/Monat",
        "+306 % mehr Website-Besucher",
        "Blogartikel auf Platz 1 deutschlandweit → 50.000+ Aufrufe & 1.400+ Klicks"
      ],
      image: "/images/FAF Results.webp",
      logo: "/images/Fit and Fight logo narrow.png"
    },
    {
      company: "KMRSD",
      quote: "Innerhalb von 2 Monaten war mein Studio voll – und ich musste sogar umziehen!",
      intro: "Leadstruktur neu aufgebaut, Texte emotionalisiert und keyword-optimiert; Website-Relaunch mit klarer Botschaft.",
      kpis: [
        "+142 % mehr Probetrainings im ersten Monat",
        "+233 % mehr verkaufte Verträge im zweiten Monat",
        "Studio voll → Umzug in größere Location"
      ],
      image: "/images/KMRSD Results.webp",
      logo: "/images/5.png"
    },
    {
      company: "Grappling Fight School Frankfurt",
      quote: "Von 5 auf 32 Probetrainings in einem Monat – mein Studio ist jetzt in ganz Frankfurt sichtbar!",
      intro: "Gezielte Google Ads + lokale SEO, kombiniert mit Conversion-optimierten Landingpages.",
      kpis: [
        "Probetrainings von 5 auf 32 in nur einem Monat (+540 %)",
        "Ad Budget: 410 €",
        "+50 % mehr organische Websitebesuche",
        "Marktanteil, Reichweite & Autorität in Frankfurt gesteigert"
      ],
      image: "/images/GFF Results.webp",
      logo: "/images/3.png"
    }
  ];

  const openFullscreen = (imageSrc: string) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6">
              Vor denselben Problemen – heute mit klaren Ergebnissen.
            </h2>
          </div>

          <div className="space-y-12">
            {cases.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 lg:p-12 hover:bg-white/90 hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Mobile Title - Only visible on mobile, positioned above everything */}
                  <div className="lg:hidden col-span-1 order-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      "{caseStudy.quote}"
                    </h3>
                  </div>

                  {/* Image - Second on mobile, last on desktop */}
                  <div className="order-2 lg:order-last">
                    <div className="relative">
                      <img
                        src={caseStudy.image}
                        alt={`${caseStudy.company} Analytics`}
                        className="w-full h-64 lg:h-80 object-contain rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
                        onClick={() => openFullscreen(caseStudy.image)}
                       loading="lazy"
                      />
                    </div>
                    
                    {/* Clickable text below image */}
                    <div className="text-center mt-3">
                      <button
                        onClick={() => openFullscreen(caseStudy.image)}
                        className="text-sm text-gray-500 hover:text-[#8d3cca] transition-colors duration-200 cursor-pointer"
                      >
                        Hier klicken, um die Grafik zu vergrößern.
                      </button>
                    </div>
                  </div>

                  {/* Text Content - Third on mobile, first on desktop */}
                  <div className="space-y-6 order-3 lg:order-first">
                    <div>
                      {/* Desktop Title - Only visible on desktop */}
                      <h3 className="hidden lg:block text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        "{caseStudy.quote}"
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {caseStudy.intro}
                      </p>
                    </div>

                    {/* KPIs */}
                    <div className="space-y-3">
                      {caseStudy.kpis.map((kpi, kpiIndex) => (
                        <div key={kpiIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-[#8d3cca] rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-gray-700 font-medium">{kpi}</p>
                        </div>
                      ))}
                    </div>

                    <div className="">
                      <div className="w-16 h-1 bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] rounded-full mb-4"></div>
                      <img 
                        src={caseStudy.logo} 
                        alt="Client Logo"
                        className="h-28 w-auto object-contain"
                       loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button - Only shown when showCTAButton is true */}
          {showCTAButton && (
            <div className="text-center mt-12">
              <a
                href="/referenzen"
                className="inline-block bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] text-white px-8 py-4 rounded-full font-semibold hover:from-[#7a35b3] hover:to-[#6b2d9e] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Noch mehr Kundenstimmen ansehen
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 overflow-auto">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeFullscreen}
              className="fixed top-4 right-4 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200 z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Fullscreen image */}
            <img
              src={fullscreenImage}
              alt="Fullscreen Analytics"
              className="max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] object-contain rounded-lg"
             loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsCase;