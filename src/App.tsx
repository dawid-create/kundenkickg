import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LogosSection from './components/LogosSection';
import ProblemsSection from './components/ProblemsSection';
import TestimonialsCase from './components/TestimonialsCase';
import VideoTestimonials from './components/VideoTestimonials';
import CustomerReviews from './components/CustomerReviews';
import MethodSteps from './components/MethodSteps';
import KCSHighlight from './components/KCSHighlight';
import NextSteps from './components/NextSteps';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Referenzen from './components/Referenzen';
import UeberUns from './components/UeberUns';
import Datenschutz from './components/Datenschutz';
import ROICalculator from './components/ROICalculator';

const HomePage = () => (
  <>
    {useEffect(() => {
      document.title = 'Studios: Mehr Probetrainings & Mitgliedschaften | KundenKick';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Mehr Anfragen, mehr Termine, mehr Mitglieder. KundenKick skaliert Studios mit Performance-Ads & Landingpages. Case: 64 Probetrainings/Monat bei 337€ Budget.');
      }
    }, [])}
    <Header />
    
    {/* Hero Section */}
    <div className="bg-gradient-to-b from-white via-purple-50 to-purple-100">
      <Hero />
    </div>
    
    {/* Logos Section */}
    <div className="bg-white">
      <LogosSection />
    </div>
    
    {/* Problems Section */}
    <div className="bg-white">
      <ProblemsSection />
    </div>
    
    {/* Testimonials Case */}
    <div className="bg-white">
      <TestimonialsCase showCTAButton={true} />
    </div>
    
    {/* Video Testimonials */}
    <div className="bg-white">
      <VideoTestimonials />
    </div>
    
    {/* Customer Reviews */}
    <div className="bg-gray-50">
      <CustomerReviews />
    </div>
    
    {/* Method Steps */}
    <div className="bg-white">
      <MethodSteps />
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
    <div className="bg-gray-50">
      <FAQ />
    </div>
    
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/roi-rechner" element={<ROICalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;