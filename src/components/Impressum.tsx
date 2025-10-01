import React from 'react';
import { useEffect } from 'react';
import Header from './Header';
import PageHero from './PageHero';
import Footer from './Footer';

const Impressum: React.FC = () => {
  useEffect(() => {
    document.title = 'Impressum | KundenKick';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Impressum und rechtliche Informationen von KundenKick - Ihre Agentur für Studio-Marketing und Mitgliedergewinnung.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero 
        title="Impressum" 
        subtitle="Rechtliche Informationen und Kontaktdaten"
      />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">AventisWeb</h2>
                <p>Dawid Nawojczyk</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Kontakt:</h2>
                <p>Telefon: +49 160 5440500</p>
                <p>E-Mail: dawid@aventisweb.com</p>
                <p>Website: <a href="https://aventisweb.com" className="text-[#8d3cca] hover:text-[#7a35b3] transition-colors">https://aventisweb.com</a></p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h2>
                <p>Dawid Nawojczyk</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Umsatzsteuer-ID:</h2>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: folgt</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Streitschlichtung</h2>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
                <p><a href="https://ec.europa.eu/consumers/odr/" className="text-[#8d3cca] hover:text-[#7a35b3] transition-colors">https://ec.europa.eu/consumers/odr/</a></p>
                <p>Unsere E-Mail-Adresse findest du oben im Impressum.</p>
                <p>Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Inhalte</h2>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Links</h2>
                <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Urheberrecht</h2>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;