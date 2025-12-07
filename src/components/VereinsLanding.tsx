import React from 'react';
import { useEffect } from 'react';
import VereinsHeader from './VereinsHeader';
import VereinsHero from './VereinsHero';
import LogosSection from './LogosSection';
import VereinsProblems from './VereinsProblems';
import VeinsSolution from './VeinsSolution';
import VereinsExamples from './VereinsExamples';
import VereinsProcess from './VereinsProcess';
import VereinsPricing from './VereinsPricing';
import VereinsTestimonials from './VereinsTestimonials';
import TestimonialsCase from './TestimonialsCase';
import VereinsReviews from './VereinsReviews';
import VereinsFAQ from './VereinsFAQ';
import VereinsCTA from './VereinsCTA';
import VereinsFooter from './VereinsFooter';

const VereinsLanding: React.FC = () => {
  useEffect(() => {
    document.title = 'Website für Vereine & Kampfkunststudios ab 85€/Monat | KundenKick';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionelle Website für dein Studio in 7 Tagen. Ab 85€/Monat. Keine Agentur-Kosten, kein technisches Chaos. Mehr Mitglieder, mehr Anfragen, mehr Erfolg.');
    }
  }, []);

  return (
    <>
      <VereinsHeader />

      {/* Hero Section */}
      <VereinsHero />

      {/* Logos Section */}
      <div className="bg-white">
        <LogosSection />
      </div>

      {/* Problems Section */}
      <VereinsProblems />

      {/* Solution Section */}
      <VeinsSolution />

      {/* Examples Section */}
      <VereinsExamples />

      {/* Process Section */}
      <div id="process">
        <VereinsProcess />
      </div>

      {/* Pricing Section */}
      <VereinsPricing />

      {/* Video Testimonials Section */}
      <div id="testimonials">
        <VereinsTestimonials />
      </div>

      {/* Success Stories Section */}
      <TestimonialsCase />

      {/* Customer Reviews Section */}
      <VereinsReviews />

      {/* FAQ Section */}
      <VereinsFAQ />

      {/* Final CTA Section */}
      <VereinsCTA />

      <VereinsFooter />
    </>
  );
};

export default VereinsLanding;
