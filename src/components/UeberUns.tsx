import React from 'react';
import Header from './Header';
import PageHero from './PageHero';
import Footer from './Footer';
import { Users, Target, Award, Heart } from 'lucide-react';

const UeberUns: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero 
        title="Über Uns" 
        subtitle="Lerne das Team hinter der MattenMagnet-Methode kennen"
      />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Unsere Mission
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] rounded-full"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Wir glauben, dass jedes Studio das Potenzial hat zu wachsen. Mit unserer MattenMagnet-Methode helfen wir Studioinhabern, ihre Leidenschaft in nachhaltigen Geschäftserfolg zu verwandeln.
Seit Jahren unterstützen wir Studios dabei, ihre Online-Präsenz zu stärken, mehr qualifizierte Leads zu generieren und ihre Conversion-Rate zu optimieren.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Seit Jahren unterstützen wir Studios dabei, ihre Online-Präsenz zu stärken, 
                mehr qualifizierte Leads zu generieren und ihre Conversion-Rate zu optimieren.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/Kampfsport-stock.webp"
                alt="Team bei der Arbeit"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
               loading="lazy"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Unsere Werte
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#8d3cca]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Zielorientiert</h3>
                <p className="text-gray-600">
                  Wir fokussieren uns auf Ergebnisse, die man schwarz auf weiß sieht; Leads, Buchungen, Mitgliederwachstum.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#8d3cca]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Partnerschaftlich</h3>
                <p className="text-gray-600">
                  Wir arbeiten eng mit Studiobesitzern zusammen, verstehen ihre Herausforderungen und entwickeln Lösungen, die zu ihrem Alltag passen.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#8d3cca]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Qualität</h3>
                <p className="text-gray-600">
                  Bei uns gibt es keine halben Sachen. Ob Strategie, Ads oder Umsetzung, wir liefern Standards, die Ergebnisse sichern.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#8d3cca]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Leidenschaft</h3>
                <p className="text-gray-600">
                  Wir lieben, was wir tun und wir brennen dafür, Studios beim Wachsen zu unterstützen.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Unser Team
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/HeadshotDawid.png" 
                    alt="Dawid Nawojczyk"
                    className="w-full h-full object-cover"
                   loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dawid Nawojczyk</h3>
                <p className="text-[#8d3cca] font-medium mb-4">Gründer & Geschäftsführer</p>
                <p className="text-gray-600 leading-relaxed">
                  Mit über 5 Jahren Erfahrung im digitalen Marketing und einer Leidenschaft 
                  für den Kampfsport, versteht Dawid die Herausforderungen von Studioinhabern 
                  aus erster Hand.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Expertise</h4>
                  <p className="text-gray-600">
                    Spezialisiert auf Performance Marketing, SEO und Conversion-Optimierung 
                    für Fitness- Sport- und Kampfsportstudios.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Erfolge</h4>
                  <p className="text-gray-600">
                    Über 50 erfolgreiche Kampagnen und mehr als 15 Studios beim Wachstum unterstützt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UeberUns;