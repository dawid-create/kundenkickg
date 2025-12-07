import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';

const VereinsHeader: React.FC = () => {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 border-b border-purple-200 ${
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
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center"
            >
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
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Pakete
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Ablauf
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Referenzen
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden lg:block bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Kostenloses Gespräch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors duration-200"
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
          <div className="lg:hidden border-t border-purple-200 bg-white">
            <nav className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('pricing')}
                className="w-full text-left text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2"
              >
                Pakete
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="w-full text-left text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2"
              >
                Ablauf
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="w-full text-left text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2"
              >
                Referenzen
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="w-full text-left text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2"
              >
                FAQ
              </button>
              <button
                onClick={handleCTAClick}
                className="w-full text-left bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-purple-600 transition-all duration-200 shadow-lg mt-4"
              >
                KOSTENLOSES GESPRÄCH
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

export default VereinsHeader;
