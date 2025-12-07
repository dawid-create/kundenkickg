import React from 'react';
import { useEffect } from 'react';
import BraunschweigHeader from './BraunschweigHeader';
import BraunschweigHero from './BraunschweigHero';
import LogosSection from './LogosSection';
import BraunschweigProblems from './BraunschweigProblems';
import BraunschweigTestimonials from './BraunschweigTestimonials';
import VideoTestimonials from './VideoTestimonials';
import CustomerReviews from './CustomerReviews';
import BraunschweigMethodSteps from './BraunschweigMethodSteps';
import BraunschweigServices from './BraunschweigServices';
import KCSHighlight from './KCSHighlight';
import NextSteps from './NextSteps';
import BraunschweigFAQ from './BraunschweigFAQ';
import BraunschweigFooter from './BraunschweigFooter';

const BraunschweigLanding: React.FC = () => {
  useEffect(() => {
    document.title = 'Online Marketing Agentur Braunschweig | SEO, Google Ads & Webdesign für lokale Unternehmen';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'KundenKick ist deine Online Marketing Agentur in Braunschweig. Wir helfen lokalen Unternehmen, mit SEO, Google Ads und professionellen Websites mehr Kunden & Leads zu gewinnen.');
    }

    // Add LocalBusiness Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "KundenKick.de",
      "image": "https://kundenkick.de/images/Logo%20KundenKick.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Braunschweig",
        "addressRegion": "Niedersachsen",
        "postalCode": "38100",
        "addressCountry": "DE"
      },
      "url": "https://kundenkick.de/online-marketing-agentur-braunschweig",
      "telephone": "+49 1605440500",
      "email": "Dawid@KundenKick.de",
      "priceRange": "€€",
      "sameAs": [
        "https://www.instagram.com/aventisweb/",
        "https://www.linkedin.com/in/dawid-nawojczyk-298b81292/"
      ],
      "serviceArea": "Braunschweig",
      "description": "Online Marketing Agentur in Braunschweig für SEO, Google Ads und Webdesign. Wir helfen lokalen Unternehmen dabei, mehr Kunden und Leads zu gewinnen.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Online Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Suchmaschinenoptimierung (SEO)",
              "description": "Lokale SEO für bessere Google Rankings in Braunschweig"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Ads Management",
              "description": "Performance-Kampagnen mit messbaren Ergebnissen"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Erstellung",
              "description": "Moderne, schnelle Websites die verkaufen"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <BraunschweigHeader />
      
      {/* Hero Section */}
      <div id="hero" className="bg-gradient-to-b from-white via-purple-50 to-purple-100">
        <BraunschweigHero />
      </div>
      
      {/* Logos Section */}
      <div className="bg-white">
        <LogosSection />
      </div>
      
      {/* Problems Section */}
      <div className="bg-white">
        <BraunschweigProblems />
      </div>
      
      {/* Testimonials Case */}
      <div id="testimonials" className="bg-white">
        <BraunschweigTestimonials />
      </div>
      
      {/* Video Testimonials */}
      <div id="video-testimonials" className="bg-white">
        <VideoTestimonials />
      </div>
      
      {/* Customer Reviews */}
      <div className="bg-gray-50">
        <CustomerReviews />
      </div>
      
      {/* Method Steps */}
      <div id="methode" className="bg-white">
        <BraunschweigMethodSteps />
      </div>
      
      {/* Services Overview */}
      <div id="services" className="bg-gray-50">
        <BraunschweigServices />
      </div>
      
      {/* KCS Highlight */}
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900">
        <KCSHighlight />
      </div>
      
      {/* Next Steps */}
      <div className="bg-white">
        <NextSteps />
      </div>
      
      {/* FAQ */}
      <div id="faq" className="bg-gray-50">
        <BraunschweigFAQ />
      </div>
      
      <BraunschweigFooter />
    </div>
  );
};

export default BraunschweigLanding;