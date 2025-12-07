import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';

const BraunschweigHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    setIsModalOpen(true);
    closeMobileMenu();
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img 
                  src="/images/Logo KundenKick.png" 
                  alt="KundenKick Logo" 
                  className="h-12 w-auto transition-all duration-300 hover:scale-105"
                  loading="eager"
                />
              </a>
            </div>

            {/* Internal Links - Desktop */}
            <nav className="hidden lg:flex space-x-6">
              <a href="#hero" className="text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium">
                Startseite
              </a>
              <a href="#methode" className="text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium">
                Unsere Methode
              </a>
              <a href="#services" className="text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium">
                Leistungen
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium">
                Erfolgsgeschichten
              </a>
              <a href="#faq" className="text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium">
                FAQ
              </a>
            </nav>

            {/* CTA Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:block bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] text-white px-6 py-2 rounded-full font-medium hover:from-[#7a35b3] hover:to-[#6b2d9e] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Jetzt Beratung sichern
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#8d3cca] transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white">
              <nav className="px-4 py-4 space-y-4">
                <a 
                  href="#hero" 
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium py-2"
                >
                  Startseite
                </a>
                <a 
                  href="#methode" 
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium py-2"
                >
                  Unsere Methode
                </a>
                <a 
                  href="#services" 
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium py-2"
                >
                  Leistungen
                </a>
                <a 
                  href="#testimonials" 
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium py-2"
                >
                  Erfolgsgeschichten
                </a>
                <a 
                  href="#faq" 
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium py-2"
                >
                  FAQ
                </a>
                <button 
                  onClick={handleCTAClick}
                  className="w-full text-left bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] text-white px-4 py-3 rounded-lg font-medium hover:from-[#7a35b3] hover:to-[#6b2d9e] transition-all duration-200 shadow-lg mt-4"
                >
                  JETZT BERATUNG SICHERN
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default BraunschweigHeader;