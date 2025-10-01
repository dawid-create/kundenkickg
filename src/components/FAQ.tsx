import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Auf welchen Kanälen könnt ihr Ads für mich schalten?",
      answer: "Die erfolgreichsten Strategien entstehen, wenn Push- und Pull-Marketing kombiniert werden. Unser Schwerpunkt liegt dabei auf Meta (Facebook und Instagram) sowie Google (Google und YouTube). Mit dieser Kombination erreichen wir deine Zielgruppe effektiv aus beiden Richtungen."
    },
    {
      question: "Funktioniert die MattenMagnet-Methode auch für kleine Studios?",
      answer: "Absolut! Unsere Methode ist speziell darauf ausgelegt, auch kleineren Studios zu helfen. Viele unserer erfolgreichsten Kunden haben mit weniger als 100 Mitgliedern gestartet und konnten ihre Zahlen verdoppeln oder verdreifachen."
    },
    {
      question: "Muss ich zusätzlich Geld für Werbung ausgeben?",
      answer: "Das kommt auf deine Ziele an. Viele unserer Strategien funktionieren komplett ohne bezahlte Werbung (SEO, Content Marketing). Für schnellere Ergebnisse empfehlen wir oft eine Kombination aus organischen Methoden und gezielten Ads mit kleinem Budget."
    },
    {
      question: "Wann kann ich mit den ersten Ergebnissen rechnen?",
      answer: "Das hängt von deiner Ausgangssituation und dem Bereich ab, in dem wir dich unterstützen. Mit bezahlten Werbeanzeigen lassen sich erste Resultate oft quasi auf Knopfdruck erzielen. Im Bereich Social Media oder Content-Strategie brauchst du etwas mehr Geduld, hier werden messbare Ergebnisse in der Regel nach einigen Wochen sichtbar."
    },
    {
      question: "Funktioniert eure Methode auch, wenn ich schon alles versucht habe?",
      answer: "Gerade wenn du denkst, schon alles probiert zu haben, bist du bei uns richtig. Wir kennen den Studioalltag und seine Herausforderungen aus eigener Erfahrung und setzen dieses Praxiswissen gezielt ein. Dazu analysieren wir dein Einzugsgebiet und deine Zielgruppe gründlich, um dir endlich das Wachstum zu ermöglichen, das dein Studio verdient. Mit unserem Ansatz führen wir dich nachhaltig und effektiv zum Erfolg."
    },
    {
      question: "Was kostet eine Zusammenarbeit mit euch?",
      answer: "Das hängt von deiner Ausgangssituation und deinen Zielen ab. Am besten buchst du dir ein kostenloses und unverbindliches Beratungsgespräch. Dort besprichst du mit einem unserer Experten, welche Lösung für dich sinnvoll ist und wie eine Zusammenarbeit aussehen könnte."
    },
    {
      question: "Lohnt sich derartiges Marketing auch im Sommer?",
      answer: "Ob es in deiner Region sinnvoll ist, auch im Sommer oder im Dezember Werbung zu schalten, lässt sich nicht pauschal sagen. Genau das prüfen wir im Verlauf der Zusammenarbeit. Wenn es strategisch klüger ist, pausieren wir in diesen Zeiträumen flexibel und setzen danach wieder an."
    },
    {
      question: "Warum bietet ihr das Erstgespräch kostenlos an?",
      answer: "Viele haben noch keine klare Vorstellung davon, wie eine Zusammenarbeit mit uns konkret aussieht. Genau deshalb bieten wir kostenlose Beratungsgespräche an. In diesen Gesprächen erlebst du direkt, wie wir arbeiten und wie eine langfristige Betreuung aussehen könnte. Natürlich führen wir diese Gespräche mit dem Ziel, dass sich Teilnehmer im Anschluss für eine Zusammenarbeit entscheiden – aber das passiert nur, wenn wir ihre Erwartungen erfüllen und sie wirklich überzeugt sind."
    },
    {
      question: "Wie viel Zeit muss ich selbst investieren?",
      answer: "Wir übernehmen den Großteil der Arbeit für dich. Du investierst etwa 2-3 Stunden pro Woche für Abstimmungen, Content-Freigaben und die Betreuung der neuen Leads. Den Rest erledigen wir."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6">
            FAQ - Hast du noch Fragen?
          </h2>
          <p className="text-lg text-gray-600">
            Hier findest du Antworten auf die wichtigsten Fragen zur MattenMagnet-Methode
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

export default FAQ;