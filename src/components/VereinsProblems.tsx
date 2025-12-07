import React from 'react';

const VereinsProblems: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Viele Vereine und Studios scheitern nicht am Training sondern an der Website
            </h2>
          </div>

          {/* Problems Description */}
          <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-2xl p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Alte Websites, langsame Ladezeiten, kein Google Ranking und schlechte mobile Ansicht kosten dich jeden Monat Mitglieder.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mt-6">
              Es muss nicht kompliziert sein. Und es muss vor allem nicht teuer sein.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VereinsProblems;
