import React from 'react';
import { useState } from 'react';
import { Check, Play, Volume2, VolumeX } from 'lucide-react';
import ContactModal from './ContactModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const iframe = document.getElementById('hero-youtube-video') as HTMLIFrameElement;
    if (iframe) {
      const currentSrc = iframe.src;
      if (isMuted) {
        // Unmute: change mute=1 to mute=0
        iframe.src = currentSrc.replace('mute=1', 'mute=0');
      } else {
        // Mute: change mute=0 to mute=1
        iframe.src = currentSrc.replace('mute=0', 'mute=1');
      }
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Centered Content */}
          <div className="text-center space-y-8 max-w-6xl mx-auto">
            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Wie auch du in nur{' '}
              <span className="text-[#8d3cca]">6 Monaten</span>{' '}
              <span className="text-[#8d3cca]">182 zusätzliche</span>{' '}
              Probetrainings für dein Studio generieren kannst.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Unsere MattenMagnet-Methode zieht Studios 7 extra Probetrainings die Woche, mit oder ohne bezahlte Werbung und ist genau das Richtige für dich, wenn du…
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Video */}
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                {/* YouTube Video */}
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/y1ypLpwH5Ug?si=NjJvm0Lkc4S8Ji6y&controls=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                 loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#8d3cca] rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#8d3cca] rounded-full opacity-10"></div>
            </div>

            {/* Right Side - Benefits List */}
            <div className="space-y-6 flex flex-col justify-center h-full min-h-[400px]">
              {/* Benefits List */}
              <div className="flex items-start space-x-4 py-1">
                <div className="flex-shrink-0 w-6 h-6 bg-[#8d3cca] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">
                    Weißt, dass dein Training für sich spricht
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dir fehlen nicht die Skills, dir fehlen die Probetrainings. Wir bringen dir bis zu 31 im Monat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 py-1">
                <div className="flex-shrink-0 w-6 h-6 bg-[#8d3cca] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">
                    Planungssicherheit suchst, mit konstanten Leads
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Weniger Auf und Ab, ob im Januar-Boom oder Sommerloch: Dein Studio bekommt verlässlich frische Anfragen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 py-1">
                <div className="flex-shrink-0 w-6 h-6 bg-[#8d3cca] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">
                    Leads brauchst, die auch wirklich erscheinen
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Schluss mit No-Shows: Du erreichst Menschen, die Termine ernst nehmen und trainieren wollen.
                  </p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] text-white px-6 py-3 rounded-full font-semibold hover:from-[#7a35b3] hover:to-[#6b2d9e] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Kostenloses Erstgespräch vereinbaren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;