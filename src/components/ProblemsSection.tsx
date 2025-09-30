import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ProblemsSection: React.FC = () => {
  const problems = [
    "Nicht genug Online-Anfragen und Leads.",
    "Du kämpfst mit Technologie und hast einfach nicht die Zeit, alles alleine zu lernen.",
    "Du hast versucht, selbst Werbung oder Social-Media-Kampagnen zu erstellen, aber weißt nicht, was du schreiben sollst.",
    "Du wurdest enttäuscht von überteuerten Marketingagenturen oder Coaches, die ihre Versprechen nicht gehalten haben."
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-white via-[#8d3cca] to-white bg-clip-text text-transparent mb-6">
            Kennst du diese Probleme als Studioleiter?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 bg-gray-700/50"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
                </div>
                <p className="text-gray-200 leading-relaxed">{problem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;