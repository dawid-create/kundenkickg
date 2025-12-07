import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const BraunschweigTestimonials: React.FC = () => {
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
      logo: "/images/Client Logos/9.png",
      alt: "Google Ads Kampagne Braunschweig Beispiel - 64 neue Leads in 30 Tagen"
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
      logo: "/images/Fit and Fight logo narrow.png",
      alt: "SEO Optimierung Braunschweig - Lokale Google Platzierungen verbessern"
    },
    {
      company: "KMRSD",
      quote: "Innerhalb von 2 Monaten war mein Studio voll – und ich musste sogar umziehen!",
      intro: "Texte emotionalisiert und keyword-optimiert; Website-Relaunch mit klarem Alleinstellungsmerkmal.",
      kpis: [
        "Mitglieder Zahl verdreifacht von 20 auf 60 innerhalb 7 Monate",
        "+233 % mehr verkaufte Verträge bereits ab Monat zwei",
        "Studio voll → Umzug in größere Location + Preise erhöht"
      ],
      image: "/images/KMRSD Results.webp",
      logo: "/images/Client Logos/5.png",
      alt: "Website Design für Braunschweiger Unternehmen - Conversion Optimierung"
    },
    {
      company: "Grappling Fight School Frankfurt",
      quote: "Von 5 auf 32 Probetrainings in einem Monat, mein Studio ist jetzt in ganz Frankfurt sichtbar!",
      intro: "Hybrid aus Google Ads + lokale SEO, kombiniert mit Conversion-optimierter Landingpage.",
      kpis: [
        "Probetrainings von 5 auf 32 in nur einem Monat (+540 %)",
        "Mit einem Ad Budget von 410€ und somit 12 Euro pro Probetraining",
        "Nach 3 Monaten Ads pausiert – Wachstum trotzdem von 5 auf 25 Probetrainings pro Monat",
        "Sichtbarkeit, Marktanteil und Autorität in Frankfurt spürbar erhöht"
      ],
      image: "/images/GFF Results.webp",
      logo: "/images/Client Logos/3.png",
      alt: "Lokale SEO Braunschweig - Online Marketing Erfolg für lokale Unternehmen"
    },
    {
      company: "World Of Defense",
      quote: "Zuerst war ich Skeptisch aber die Anfragen haben sich spürbar erhöht!",
      intro: "Mehr Autorität und klares Alleinstellungsmerkmal dank Website Relaunch ohne Ads.",
      kpis: [
        "Bereits im ersten Monat Anfragen Verdoppelt von 20 auf 42",
        "Platz #1 für die wichtigsten Keywörter in Essen",
        "Studio als beste Wahl positioniert und Konkurrenz inhaltlich abgehängt"
      ],
      image: "/images/world-of-defense-resultate.png",
      logo: "/images/Client Logos/14.png",
      alt: "Website Design für Braunschweiger Unternehmen - Conversion Optimierung"
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
      <section className="py-16 relative overflow-hidden">
        {/* Background Glow Effects - Simplified for mobile */}
        <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-radial from-[#8d3cca]/30 via-[#8d3cca]/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-gradient-radial from-[#6b2d9e]/30 via-[#6b2d9e]/15 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Simple mobile background */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6">
              Echte Ergebnisse: 182 Leads in nur 6 Monaten
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stell dir vor, diese Ergebnisse wären in Braunschweig. Unsere bewährte Methode funktioniert für lokale Unternehmen deutschlandweit.
            </p>
          </div>

          <div className="space-y-12 relative z-10">
            {cases.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30 p-8 lg:p-12 hover:bg-white/95 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300"
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
                        alt={caseStudy.alt}
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
                        alt={`${caseStudy.company} Logo - Online Marketing Kunde`}
                        className="h-28 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              alt="Fullscreen Analytics - Online Marketing Ergebnisse"
              className="max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] object-contain rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BraunschweigTestimonials;