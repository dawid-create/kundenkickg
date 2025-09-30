import React from 'react';
import { Dumbbell, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 w-56 h-24 flex items-center justify-center">
                <img 
                  src="/images/Logo KundenKick.png" 
                  alt="KundenKick Logo" 
                  className="h-45 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-gray-400 hover:text-[#8d3cca] transition-colors duration-200">
                Home
              </a>
              <a href="/#method-timeline" className="text-gray-400 hover:text-[#8d3cca] transition-colors duration-200">
                Methode
              </a>
              <a href="/referenzen" className="text-gray-400 hover:text-[#8d3cca] transition-colors duration-200">
                Referenzen
              </a>
              <a href="/ueber-uns" className="text-gray-400 hover:text-[#8d3cca] transition-colors duration-200">
                Über Uns
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Folge uns</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/aventisweb/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#8d3cca] transition-all duration-200 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dawid-nawojczyk-298b81292/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#8d3cca] transition-all duration-200 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-2 mt-6">
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Email:</span> Dawid@KundenKick.de
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Telefon:</span> +49 1605440500
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 KundenKick.de by AventisWeb
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/impressum" className="text-gray-400 hover:text-[#8d3cca] transition-colors duration-200">
              Impressum
            </a>
            <a href="/datenschutz" className="text-gray-400 hover:text-[#8d3cca] transition-colors duration-200">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;