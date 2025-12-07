import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const VereinsFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Wie lange dauert es, bis meine Website live geht?",
      answer: "Mit unserem Standard-Prozess brauchen wir 3-7 Tage, um deine Website vom Gespräch bis zum Launch fertig zu stellen. Du bekommst Entwürfe, kannst Feedback geben, und wir optimieren bis alles perfekt passt."
    },
    {
      question: "Kann ich die Website später selbst ändern?",
      answer: "Du bekommst einen einfachen Editor für deine Website. Du kannst Texte, Bilder und Termine selbst ändern. Komplexere Änderungen machen wir für dich – das ist im Support enthalten."
    },
    {
      question: "Funktioniert die Website auch auf Handys?",
      answer: "100%. Alle unsere Websites sind vollständig mobil optimiert. Sie sehen auf Smartphones, Tablets und Desktops perfekt aus. Das ist nicht optional – das ist Standard."
    },
    {
      question: "Was ist mit Datenschutz und DSGVO?",
      answer: "Datenschutz ist in allen Paketen von Anfang an inklusive. Impressum, Datenschutzerklärung, Cookie-Banner – alles ist korrekt eingebaut. Du brauchst dir da keine Gedanken machen."
    },
    {
      question: "Wie viele Anfragen bekomme ich mit einer neuen Website?",
      answer: "Das hängt von deiner Region, Zielgruppe und wie gut deine Website optimiert ist, ab. Mit dem Scale Angebot haben Kunden durchschnittlich 30-50% mehr Anfragen im ersten Monat bemerkt."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-600">
            Alles, was du über deine neue Website wissen musst
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-purple-100 rounded-lg overflow-hidden hover:border-purple-300 transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50 transition-colors duration-200"
              >
                <h3 className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 bg-purple-50/30 border-t border-purple-100">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-lg text-gray-600">
            Deine Frage ist nicht dabei?
          </p>
          <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Schreib uns eine Nachricht
          </a>
        </div>
      </div>
    </section>
  );
};

export default VereinsFAQ;
