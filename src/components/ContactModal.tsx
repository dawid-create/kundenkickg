import React from 'react';
import { useState } from 'react';
import { X } from 'lucide-react';
import { supabase, type ContactSubmission } from '../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const formData = new FormData(e.currentTarget);
    
    const submission: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'> = {
      full_name: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      website: formData.get('website') as string,
      services_interested: formData.get('servicesInterested') as string,
      help_needed: formData.get('helpNeeded') as string,
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([submission]);

      if (error) {
        throw error;
      }

      setSubmitMessage({
        type: 'success',
        text: 'Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns bald bei Ihnen.'
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
        setSubmitMessage(null);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-[#8d3cca] hover:to-[#7a35b3] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group"
        >
          <X className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
        </button>

        <div className="p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-1 bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] rounded-full mx-auto mb-6"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6">
              Schnapp dir deine kostenlose Analyse
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-xl mx-auto">
              Hol dir deine kostenlose 20-minütige Face-to-Face-Beratung und erfahre was der nächstbeste Schritt ist um mehr Mitglieder zu gewinnen!
            </p>
            
            {/* Success/Error Message */}
            {submitMessage && (
              <div className={`p-4 rounded-xl ${
                submitMessage.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitMessage.text}
              </div>
            )}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3 tracking-wide">
                Vollständiger Name *
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Andre Müller"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8d3cca] focus:border-[#8d3cca] outline-none transition-all duration-300 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3 tracking-wide">
                Email Adresse *
              </label>
              <input
                type="email"
                name="email"
                placeholder="user@website.com"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8d3cca] focus:border-[#8d3cca] outline-none transition-all duration-300 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
              />
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3 tracking-wide">
                Telefonnummer *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+49 123456789"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8d3cca] focus:border-[#8d3cca] outline-none transition-all duration-300 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3 tracking-wide">
                Website *
              </label>
              <input
                type="url"
                name="website"
                placeholder="https://example.com"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8d3cca] focus:border-[#8d3cca] outline-none transition-all duration-300 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
              />
            </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3 tracking-wide">
                Dienstleistungen, die dich interessieren könnten. *
              </label>
              <select
                name="servicesInterested"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8d3cca] focus:border-[#8d3cca] outline-none transition-all duration-300 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
              >
                <option value="">Bitte wählen...</option>
                <option value="webdesign-entwicklung">Webdesign & Entwicklung</option>
                <option value="google-seo">Google Optimierung (SEO)</option>
                <option value="conversion-optimierung">Conversion-Optimierung</option>
                <option value="email-sms-marketing">E-Mail- & SMS-Marketing</option>
                <option value="bezahlte-werbung">Bezahlte Werbung</option>
                <option value="automatisierung">Automatisierung</option>
              </select>
            </div>

            {/* Help */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3 tracking-wide">
                Wie kann ich dir helfen? *
              </label>
              <select
                name="helpNeeded"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8d3cca] focus:border-[#8d3cca] outline-none transition-all duration-300 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
              >
                <option value="">Bitte wählen...</option>
                <option value="mehr-mitglieder">Mehr Mitglieder gewinnen</option>
                <option value="bessere-conversion">Bessere Conversion-Rate</option>
                <option value="marketing-automatisierung">Marketing automatisieren</option>
                <option value="studio-wachstum">Studio-Wachstum planen</option>
                <option value="konkurrenz-abheben">Von der Konkurrenz abheben</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#8d3cca] to-[#7a35b3] text-white py-5 px-8 rounded-xl font-semibold hover:from-[#7a35b3] hover:to-[#6b2d9e] transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl text-lg tracking-wide"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Kostenlose Beratung sichern'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;