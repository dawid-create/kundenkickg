import React from 'react';
import { useEffect } from 'react';
import Header from './Header';
import PageHero from './PageHero';
import Footer from './Footer';
import TestimonialsCase from './TestimonialsCase';
import VideoTestimonials from './VideoTestimonials';

const Referenzen: React.FC = () => {
  useEffect(() => {
    document.title = 'Referenzen & Erfolgsgeschichten | KundenKick';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Echte Erfolgsgeschichten: Wie Studios mit KundenKick 64+ Probetrainings/Monat erreichen. Sehen Sie unsere Case Studies und Kundenstimmen.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero 
        title="Referenzen" 
        subtitle="Entdecke, wie wir anderen Studios zu nachhaltigem Wachstum verholfen haben"
      />
      
      <main className="pt-8">
        {/* Testimonials Case Section */}
        <div className="bg-white">
          <TestimonialsCase />
        </div>
        
        {/* Video Testimonials Section */}
        <div className="bg-gray-50">
          <VideoTestimonials />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Referenzen;