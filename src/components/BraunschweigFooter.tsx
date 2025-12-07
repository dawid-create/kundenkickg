import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const BraunschweigFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-black text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large purple glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-[#8d3cca]/25 via-[#8d3cca]/12 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-radial from-[#7a35b3]/20 via-[#7a35b3]/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-radial from-[#6b2d9e]/22 via-[#6b2d9e]/11 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-radial from-[#8d3cca]/18 via-[#8d3cca]/9 to-transparent rounded-full blur-2xl animate-pulse delay-1500"></div>
        
        {/* Mobile glows */}
        <div className="lg:hidden absolute top-10 right-10 w-32 h-32 bg-gradient-radial from-[#8d3cca]/30 via-[#8d3cca]/15 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="lg:hidden absolute bottom-10 left-10 w-40 h-40 bg-gradient-radial from-[#7a35b3]/25 via-[#7a35b3]/12 to-transparent rounded-full blur-xl animate-pulse delay-800"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 relative z-10">
            <div className="flex items-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20 w-56 h-24 flex items-center justify-center hover:bg-white transition-all duration-300">
                <img 
                  src="/images/Logo KundenKick.png" 
                  alt="KundenKick Logo" 
                  className="h-45 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Ihre Online Marketing Agentur in Braunschweig für mehr Sichtbarkeit und Leads.
            </p>
          </div>

          {/* Internal Navigation Links */}
          <div className="space-y-4 relative z-10">
            <h3 className="text-lg font-semibold text-white">Schnellnavigation</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="text-gray-300 hover:text-[#8d3cca] hover:font-medium transition-all duration-200">
                Startseite
              </a>
              <a href="#methode" className="text-gray-300 hover:text-[#8d3cca] hover:font-medium transition-all duration-200">
                Unsere Methode
              </a>
              <a href="#services" className="text-gray-300 hover:text-[#8d3cca] hover:font-medium transition-all duration-200">
                Leistungen
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-[#8d3cca] hover:font-medium transition-all duration-200">
                Erfolgsgeschichten
              </a>
              <a href="#video-testimonials" className="text-gray-300 hover:text-[#8d3cca] hover:font-medium transition-all duration-200">
                Kundenstimmen
              </a>
              <a href="#faq" className="text-gray-300 hover:text-[#8d3cca] hover:font-medium transition-all duration-200">
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact & Social Media */}
          <div className="space-y-4 relative z-10">
            <h3 className="text-lg font-semibold text-white">Kontakt & Social Media</h3>
            
            {/* Contact Information */}
            <div className="space-y-2">
              <p className="text-gray-200 text-sm font-medium">
                <span className="font-medium">Email:</span> Dawid@KundenKick.de
              </p>
              <p className="text-gray-200 text-sm font-medium">
                <span className="font-medium">Telefon:</span> +49 1605440500
              </p>
              <p className="text-gray-200 text-sm font-medium">
                <span className="font-medium">Standort:</span> Braunschweig, Deutschland
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/aventisweb/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] rounded-full flex items-center justify-center hover:from-[#7a35b3] hover:to-[#6b2d9e] transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dawid-nawojczyk-298b81292/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] rounded-full flex items-center justify-center hover:from-[#7a35b3] hover:to-[#6b2d9e] transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="text-gray-300 text-sm mb-4 md:mb-0 font-medium">
            © 2025 KundenKick.de - Online Marketing Agentur Braunschweig
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/" className="text-gray-300 hover:text-[#8d3cca] hover:font-medium transition-all duration-200">
              Hauptseite
            </a>
            <a href="/impressum" className="text-gray-300 hover:text-[#8d3cca] hover:font-medium transition-all duration-200">
              Impressum
            </a>
            <a href="/datenschutz" className="text-gray-300 hover:text-[#8d3cca] hover:font-medium transition-all duration-200">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BraunschweigFooter;