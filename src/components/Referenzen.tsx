import React from 'react';
import Header from './Header';
import PageHero from './PageHero';
import Footer from './Footer';
import TestimonialsCase from './TestimonialsCase';
import VideoTestimonials from './VideoTestimonials';

const Referenzen: React.FC = () => {
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