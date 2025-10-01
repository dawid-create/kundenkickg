import React from 'react';
import { useEffect } from 'react';
import Header from './Header';
import PageHero from './PageHero';
import Footer from './Footer';

const Datenschutz: React.FC = () => {
  useEffect(() => {
    document.title = 'Datenschutzerklärung | KundenKick';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Datenschutzerklärung von KundenKick - Informationen zum Schutz Ihrer persönlichen Daten und zur DSGVO-konformen Datenverarbeitung.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero 
        title="Datenschutzerklärung" 
        subtitle="Informationen zum Schutz Ihrer persönlichen Daten"
      />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <p className="mb-6">
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer Datenschutzerklärung weiter unten.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenerfassung auf dieser Website</h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p className="mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten finden Sie weiter unten im Abschnitt „Hinweis zur verantwortlichen Stelle".
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Wie erfassen wir Ihre Daten?</h4>
                <p className="mb-4">
                  Ihre Daten werden einerseits dadurch erhoben, dass Sie uns diese mitteilen (z. B. durch Eingabe in ein Kontaktformular).
                </p>
                <p className="mb-4">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Dabei handelt es sich hauptsächlich um technische Daten (z. B. Internetbrowser, Betriebssystem, Uhrzeit des Seitenaufrufs).
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Wofür nutzen wir Ihre Daten?</h4>
                <p className="mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p className="mb-4">
                  Sie haben das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie können außerdem die Berichtigung oder Löschung dieser Daten verlangen.
                </p>
                <p className="mb-4">
                  Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit für die Zukunft widerrufen. Des Weiteren haben Sie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hosting</h2>
                <p className="mb-4">Diese Website wird bei folgendem Anbieter gehostet:</p>
                <p className="mb-4 font-medium">
                  Hostinger International Ltd.<br />
                  61 Lordou Vironos Street, 6023 Larnaca, Zypern
                </p>
                <p className="mb-4">
                  Die personenbezogenen Daten werden auf den Servern des Hosters gespeichert. Dies erfolgt zur Vertragserfüllung und aus berechtigtem Interesse an einer sicheren, schnellen und effizienten Bereitstellung unserer Online-Angebote.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenschutz</h3>
                <p className="mb-4">
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften. Dennoch kann die Datenübertragung im Internet Sicherheitslücken aufweisen.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p className="mb-4 font-medium">
                  Dawid Nawojczyk<br />
                  AventisWeb<br />
                  38120 Braunschweig<br />
                  Telefon: +49 01605440500<br />
                  E-Mail: dawid@aventisweb.com
                </p>
                <p className="mb-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Speicherdauer</h3>
                <p className="mb-4">
                  Ihre personenbezogenen Daten verbleiben bei uns, bis der Zweck für die Datenverarbeitung entfällt oder Sie ein Löschersuchen stellen. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ihre Rechte</h3>
                <p className="mb-4">
                  Sie haben das Recht auf Auskunft, Berichtigung, Einschränkung, Löschung sowie Datenübertragbarkeit. Außerdem haben Sie das Recht, der Verarbeitung Ihrer Daten zu widersprechen.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontaktformular</h3>
                <p className="mb-4">
                  Wenn Sie uns über ein Kontaktformular kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Anfrage per E-Mail oder Telefon</h3>
                <p className="mb-4">
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, speichern wir Ihre Angaben zur Bearbeitung der Anfrage.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Newsletter</h2>
                <p className="mb-4">
                  Wenn Sie unseren Newsletter abonnieren, wird Ihre E-Mail-Adresse gespeichert, bis Sie sich abmelden. Die Abmeldung ist jederzeit über einen Link im Newsletter möglich.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Plugins und Tools</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">YouTube</h3>
                <p className="mb-4">
                  Unsere Website nutzt YouTube-Videos im erweiterten Datenschutzmodus. Betreiber ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="mb-4">
                  Beim Abspielen eines Videos kann YouTube Daten über Sie erfassen. Mehr dazu in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" className="text-[#8d3cca] hover:text-[#7a35b3] transition-colors" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;