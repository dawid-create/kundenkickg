import React, { useState, useEffect } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Header from './Header';
import PageHero from './PageHero';
import Footer from './Footer';

const ROICalculator: React.FC = () => {
  useEffect(() => {
    document.title = 'ROI Rechner - Studio Potenzial berechnen | KundenKick';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Berechnen Sie das Umsatzpotenzial Ihres Studios mit unserem ROI-Rechner. Basierend auf echten Kundenergebnissen - kostenlos & unverbindlich.');
    }
  }, []);

  const [inputs, setInputs] = useState({
    closingRate: 30,
    memberValue: 165,
    averageLifetime: 12,
    newLeads: 50,
    bufferNumber: 5
  });

  const [results, setResults] = useState({
    newMembers: 0,
    additionalMRR: 0,
    additionalAnnualRevenue: 0
  });

  // Calculate results whenever inputs change
  useEffect(() => {
    const newMembers = Math.floor((inputs.newLeads * inputs.closingRate) / 100) - inputs.bufferNumber;
    const additionalMRR = newMembers * inputs.memberValue;
    const additionalAnnualRevenue = additionalMRR * inputs.averageLifetime;

    setResults({
      newMembers: Math.max(0, newMembers),
      additionalMRR: Math.max(0, additionalMRR),
      additionalAnnualRevenue: Math.max(0, additionalAnnualRevenue)
    });
  }, [inputs]);

  const updateInput = (field: keyof typeof inputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: Math.max(0, value)
    }));
  };

  const InputField = ({ 
    label, 
    value, 
    field, 
    prefix = '', 
    suffix = '',
    step = 1,
    tooltip = ''
  }: {
    label: string;
    value: number;
    field: keyof typeof inputs;
    prefix?: string;
    suffix?: string;
    step?: number;
    tooltip?: string;
  }) => (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#8d3cca]/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-sm font-semibold text-gray-700">{label}</h3>
          {tooltip && (
            <div className="group relative">
              <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {tooltip}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <button
          onClick={() => updateInput(field, value - step)}
          className="w-10 h-10 bg-gray-100 hover:bg-[#8d3cca] hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 group"
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="number"
              value={value}
              onChange={(e) => updateInput(field, parseInt(e.target.value) || 0)}
              className="w-full text-center text-2xl font-bold text-gray-900 bg-gray-50 rounded-lg py-3 px-4 border-0 focus:ring-2 focus:ring-[#8d3cca] focus:bg-white transition-all duration-200"
            />
            {prefix && (
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-500">
                {prefix}
              </span>
            )}
            {suffix && (
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg font-medium text-gray-500">
                {suffix}
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={() => updateInput(field, value + step)}
          className="w-10 h-10 bg-gray-100 hover:bg-[#8d3cca] hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 group"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const ResultField = ({ 
    label, 
    value, 
    prefix = '', 
    isHighlight = false,
    tooltip = ''
  }: {
    label: string;
    value: number;
    prefix?: string;
    isHighlight?: boolean;
    tooltip?: string;
  }) => (
    <div className={`rounded-xl border-2 p-6 transition-all duration-300 ${
      isHighlight 
        ? 'bg-gradient-to-br from-[#8d3cca] to-[#7a35b3] border-[#8d3cca] text-white' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h3 className={`text-sm font-semibold ${isHighlight ? 'text-white/90' : 'text-gray-700'}`}>
            {label}
          </h3>
          {tooltip && (
            <div className="group relative">
              <HelpCircle className={`w-4 h-4 cursor-help ${isHighlight ? 'text-white/70' : 'text-gray-400'}`} />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {tooltip}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="text-center">
        <div className={`text-3xl font-bold ${isHighlight ? 'text-white' : 'text-gray-900'}`}>
          {prefix}{value.toLocaleString('de-DE', { 
            minimumFractionDigits: prefix === '€' ? 2 : 0,
            maximumFractionDigits: prefix === '€' ? 2 : 0
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero 
        title="ROI Rechner" 
        subtitle="Berechne das Potenzial deines Studios mit der MattenMagnet-Methode"
      />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div>
                <div className="mb-3">
                  <img 
                    src="/images/logo big.png" 
                    alt="KundenKick Logo" 
                    className="h-22 lg:h-28 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Unser durchschnittlicher Kunde sieht 15-30 neue Interessenten 
                  innerhalb des ersten Monats
                </p>
              </div>
              
              {/* Additional Info */}
              <div className="bg-gradient-to-r from-[#8d3cca]/10 to-[#7a35b3]/10 rounded-2xl p-6 border border-[#8d3cca]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Warum dieser Rechner?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8d3cca] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Realistische Einschätzung deines Studio-Potenzials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8d3cca] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Basiert auf echten Kundenergebnissen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8d3cca] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Berücksichtigt Pufferzone für konservative Schätzung</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Calculator */}
            <div className="space-y-4">
              {/* Top Row - Closing Rate */}
              <div className="grid grid-cols-1">
                <InputField
                  label="Abschlussrate"
                  value={inputs.closingRate}
                  field="closingRate"
                  suffix="%"
                  tooltip="Wie viele Probetrainings werden zu Mitgliedschaften?"
                />
              </div>

              {/* Second Row - Member Value & Average Lifetime */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Mitgliedsbeitrag"
                  value={inputs.memberValue}
                  field="memberValue"
                  prefix="€"
                  step={5}
                  tooltip="Monatlicher Beitrag pro Mitglied"
                />
                <InputField
                  label="Durchschnittliche Verweildauer"
                  value={inputs.averageLifetime}
                  field="averageLifetime"
                  tooltip="Wie lange bleibt ein Mitglied durchschnittlich? (Monate)"
                />
              </div>

              {/* Third Row - New Leads & Buffer Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Neue Leads"
                  value={inputs.newLeads}
                  field="newLeads"
                  step={5}
                  tooltip="Anzahl neuer Leads pro Monat"
                />
                <InputField
                  label="Pufferzahl"
                  value={inputs.bufferNumber}
                  field="bufferNumber"
                  tooltip="Sicherheitspuffer für konservative Schätzung"
                />
              </div>

              {/* Results Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <ResultField
                  label="Neue Mitglieder"
                  value={results.newMembers}
                  tooltip="Neue Mitglieder nach Abzug des Puffers"
                />
                <ResultField
                  label="Zusätzlicher MRR"
                  value={results.additionalMRR}
                  prefix="€"
                  tooltip="Zusätzliche monatlich wiederkehrende Einnahmen"
                />
              </div>

              {/* Bottom Row - Annual Revenue */}
              <div className="grid grid-cols-1">
                <ResultField
                  label="Zusätzlicher Jahresumsatz"
                  value={results.additionalAnnualRevenue}
                  prefix="€"
                  isHighlight={true}
                  tooltip="Zusätzliche jährliche Einnahmen basierend auf der durchschnittlichen Mitgliedsdauer"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ROICalculator;