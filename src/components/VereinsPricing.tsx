import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

const VereinsPricing: React.FC = () => {
  const [expandedOffer, setExpandedOffer] = useState<number | null>(null);

  const offers = [
    {
      tier: 'Offer 1',
      title: 'Rundumsorglos',
      tagline: 'Für Studios, die schnell und günstig eine saubere Website wollen, die mehr Anfragen reinbringt.',
      price: '1.000 €',
      priceNote: '= 85 € x 12 Monate',
      benefits: [
        'Professionelles Design, das deine Schule stark präsentiert.',
        'Verkaufsoptimierte Texte, die mehr Probetrainings bringen.',
        'Laufender Support mit Updates und 2–3 Anpassungen pro Monat.',
      ],
      details: [
        'Onboarding Call mit gezielten Fragen zu Positionierung und Zielgruppe.',
        'Professionelles Copywriting für Startseite und Kernthemen.',
        'Einbau der Texte in ein klares, modernes Layout.',
        'Feinschliff von Design und Text bis alles stimmig ist.',
        'Launch der Website auf deiner Domain.',
        'Einrichtung von Impressum, Datenschutz und Compliance Einstellungen.',
      ],
      featured: false,
      guarantee: null,
    },
    {
      tier: 'Offer 2',
      title: 'Vertriebssystem',
      tagline: 'Für Studios, die bei Google nach oben wollen.',
      price: '1.500 €',
      priceNote: '= 125 € x 12 Monate',
      benefits: [
        'SEO Struktur, die Google versteht und nach vorne schiebt.',
        'Keyword Optimierung für dein Einzugsgebiet.',
        'Messbare Rankings, mehr Sichtbarkeit, mehr Anfragen.',
      ],
      details: [
        'Alles aus Offer 1 + folgende Zusätze:',
        'Auswahl und Optimierung relevanter Keywords für deine Region und deinen Stil.',
        'On Page SEO Optimierung (Titel, Meta, Überschriften, interne Verlinkung).',
        'Einrichtung von Lokalem SEO freundlicher Seitenstruktur und URLs.',
        'Setup von Analytics und Tracking zur Auswertung der Besucherzahlen.',
        'Erstellung und Einbindung einer Sitemap für Google.',
      ],
      featured: true,
      guarantee: 'Dein Ranking steigt. Fertig.',
    },
    {
      tier: 'Offer 3',
      title: 'Google Dominator',
      tagline: 'Für Studios, die konstant mehr Probetrainings wollen.',
      price: '1.750 €',
      priceNote: '= 145 € x 12 Monate',
      benefits: [
        'Google Business Profil auf Probetrainings optimiert.',
        'Website und Profil arbeiten zusammen wie ein System.',
        'Mehr Sichtbarkeit, mehr Anfragen, langfristig.',
      ],
      details: [
        'Alles aus Offer 1 und 2 + folgende Zusätze:',
        'Optimierung deines Google Business Profils auf Sichtbarkeit und Probetrainings.',
        'Abgestimmte Texte und Bilder, die dein Dojo stark und vertrauenswürdig wirken lassen.',
        'Verknüpfung zwischen Website und Google Profil für einen nahtlosen Weg zur Anfrage.',
        'Google-Maps Konkurrenzanalyse und Optimierung, um klar vor der Konkurrenz zu stehen.',
      ],
      featured: false,
      guarantee: 'Mehr Probetrainings, sonst arbeite ich weiter ohne Zusatzkosten.',
    },
  ];

  const globalBenefits = [
    'Start mit einer professionellen Website ab 85 Euro im Monat, Einstiegshürde minimal, Wirkung maximal.',
    'Glasklares Alleinstellungsmerkmal für deine Schule, damit du dich von anderen Gyms abhebst.',
    'Texte basierend auf Marktführern im Bereich Kampfsport und Kampfkunst, auf Abschluss optimiert.',
    'System, das bereits bei über 10 Kampfkunst und Kampfsportschulen in Deutschland funktioniert hat.',
    'Analytics, Tracking und Zielgruppenverständnis werden für dich eingerichtet, keine Technik Kopfschmerzen.',
    'Website die schnell lädt, professionell wirkt und auf jedem Handy perfekt nutzbar ist.',
    'Seitenstruktur, die speziell auf Kampfsportschulen optimiert ist, nicht generisch.',
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              In 7 Tagen steht deine neue Website
            </h2>
            <p className="text-lg text-gray-300">
              die dir langfristig neue Mitglieder bringt, <span className="text-purple-400 font-bold">ab 85 Euro im Monat</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  offer.featured
                    ? 'border-2 border-purple-500 shadow-2xl shadow-purple-500/20 transform md:scale-105'
                    : 'border border-gray-700 hover:border-purple-500/50'
                } bg-gray-800 hover:bg-gray-750 group`}
              >
                <div className="p-6 lg:p-8 h-full flex flex-col">
                  {offer.featured && (
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs font-bold rounded-full">
                        Populär
                      </span>
                    </div>
                  )}

                  <div className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2">
                    {offer.tier}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {offer.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-6 min-h-12">
                    {offer.tagline}
                  </p>

<div className="mb-6">
  <div className="text-3xl font-bold text-white">
    {offer.price}
  </div>
  <div className="text-sm text-gray-400">
    {offer.priceNote}
  </div>
  <div className="text-sm text-gray-400 mt-1">
    Einmalige Einrichtungsgebühr von 300 €
  </div>
</div>


                  <ul className="space-y-3 mb-6 flex-grow">
                    {offer.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {offer.guarantee && (
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 mb-6">
                      <p className="text-xs font-bold text-purple-300 mb-1">
                        GARANTIE:
                      </p>
                      <p className="text-sm text-purple-200">
                        {offer.guarantee}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() =>
                      setExpandedOffer(expandedOffer === index ? null : index)
                    }
                    className="w-full py-2 px-4 border border-purple-500/30 text-purple-400 font-medium rounded-lg hover:bg-purple-500/10 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {expandedOffer === index ? (
                      <>
                        Weniger lesen
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Mehr lesen
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {expandedOffer === index && (
                    <div className="mt-6 pt-6 border-t border-gray-700 space-y-3">
                      <h4 className="text-sm font-bold text-purple-400">
                        Was ist enthalten:
                      </h4>
                      <ul className="space-y-2">
                        {offer.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span className="text-xs text-gray-300">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-gray-700">
            <div className="text-center mb-8">
              <p className="text-xl text-white font-semibold">
                Egal welches Paket du wählst, du profitierst immer von:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {globalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8">
            <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Jetzt Paket wählen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VereinsPricing;
