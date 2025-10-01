import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <header className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled 
            ? 'h-16' 
            : 'h-20 lg:h-24'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/images/Logo KundenKick.png" 
                alt="KundenKick Logo" 
               className={`w-auto transition-all duration-300 hover:scale-105 ${
                 isScrolled 
                   ? 'h-40' 
                  : 'h-40 lg:h-44'
               }`}
               loading="eager"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="/#method-timeline" className="text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium">
              Methode
            </a>
            <a href="/referenzen" className="text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium">
              Referenzen
            </a>
            <a href="/ueber-uns" className="text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium">
              Über Uns
            </a>
            <a href="/roi-rechner" className="text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium">
              ROI Rechner
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
                href="/" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium py-2"
              >
                Home
              </a>
              <a 
                href="/#method-timeline" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium py-2"
              >
                Methode
              </a>
              <a 
                href="/referenzen" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium py-2"
              >
                Referenzen
              </a>
              <a 
                href="/ueber-uns" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium py-2"
              >
                Über Uns
              </a>
              <a 
                href="/roi-rechner" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-[#8d3cca] transition-colors duration-200 font-medium py-2"
              >
                ROI Rechner
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

export default Header;