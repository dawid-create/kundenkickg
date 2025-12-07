import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const BraunschweigFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Funktioniert das auch für kleine lokale Unternehmen in Braunschweig?",
      answer: "Absolut! Unsere Methode ist speziell darauf ausgelegt, auch kleineren lokalen Unternehmen zu helfen. Viele unserer erfolgreichsten Kunden haben als kleine Betriebe gestartet und konnten ihre Online-Sichtbarkeit und Kundenanzahl deutlich steigern. Gerade in Braunschweig gibt es viele Chancen für lokale Unternehmen, sich online zu positionieren."
    },
    {
      question: "Wann kann ich mit den ersten Ergebnissen rechnen?",
      answer: "Das hängt von deiner Ausgangssituation und dem Bereich ab, in dem wir dich unterstützen. Mit Google Ads können erste Ergebnisse oft innerhalb weniger Tage sichtbar werden. Bei SEO-Maßnahmen dauert es in der Regel 2-4 Monate, bis deutliche Verbesserungen in den lokalen Suchergebnissen für Braunschweig sichtbar werden."
    },
    {
      question: "Was kostet eine Zusammenarbeit mit euch?",
      answer: "Das hängt von deiner Ausgangssituation und deinen Zielen ab. Jedes Unternehmen in Braunschweig hat unterschiedliche Bedürfnisse. Am besten buchst du dir ein kostenloses und unverbindliches Beratungsgespräch. Dort besprechen wir mit dir, welche Lösung für dein lokales Business sinnvoll ist und wie eine Zusammenarbeit aussehen könnte."
    },
    {
      question: "Warum ist das Erstgespräch kostenlos?",
      answer: "Viele lokale Unternehmer haben noch keine klare Vorstellung davon, wie Online Marketing konkret funktioniert und wie eine Zusammenarbeit aussieht. Genau deshalb bieten wir kostenlose Beratungsgespräche an. In diesen Gesprächen erlebst du direkt, wie wir arbeiten und bekommst bereits erste wertvolle Tipps für dein Business in Braunschweig."
    },
    {
      question: "Arbeitet ihr nur mit Unternehmen aus Braunschweig?",
      answer: "Nein, wir arbeiten deutschlandweit mit lokalen Unternehmen zusammen. Unsere Expertise in lokalem Online Marketing hilft Unternehmen in ganz Deutschland dabei, in ihrer jeweiligen Stadt sichtbar zu werden. Braunschweig ist dabei ein wichtiger Fokus, aber nicht unsere einzige Zielregion."
    },
    {
      question: "Wie viel Zeit muss ich selbst investieren?",
      answer: "Wir übernehmen den Großteil der Arbeit für dich. Du investierst etwa 2-3 Stunden pro Woche für Abstimmungen, Content-Freigaben und die Betreuung der neuen Leads. Den Rest – von der technischen Umsetzung bis zur laufenden Optimierung – erledigen wir für dich."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6">
            Der nächste Schritt: Kostenlose Erstberatung sichern
          </h2>
          <p className="text-lg text-gray-600">
            Häufige Fragen zur Online Marketing Betreuung für Braunschweiger Unternehmen
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl overflow-hidden hover:bg-white/95 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#8d3cca] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BraunschweigFAQ;