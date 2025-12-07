import React from 'react';
import { Star } from 'lucide-react';

const VereinsReviews: React.FC = () => {
  const reviews = [
    {
      company: "Enatoms",
      reviewer: "Vishal Soni",
      text: "Ich war wirklich beeindruckt von der gründlichen Arbeit von Dawid, er hat sich die Zeit genommen tief in unsere geschäftlichen Bedürfnisse und Ziele einzutauchen.",
      image: "/images/Vishal-Soni.webp"
    },
    {
      company: "Fit and Fight 38",
      reviewer: "Thorsten Windusch",
      text: "Unsere Wünsche wurden immer schnellstmöglich umgesetzt und Dawid hat uns mit seinen Ideen geholfen, unsere Vorstellung umzusetzen.",
      image: "/images/ThorstenWindusch.webp"
    },
    {
      company: "No Limit Fight Club",
      reviewer: "Moncef Mhadbi",
      text: "Dawid unterstützt uns nicht nur bei der Website, sondern auch bei allen anderen Online-Themen, seit der Zusammenarbeit Wächst unser Studio wie nie zuvor.",
      image: "/images/moncef.jpg"
    },
    {
      company: "KMRSD",
      reviewer: "Emrah Oral",
      text: "Tatsächlich ist es deutlich mehr geworden, ich habe allein gestern und heute schon 3–4 Anfragen fürs Probetraining bekommen, also ist echt saugeil.",
      image: "/images/Emrah Face.webp"
    },
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Kundenbewertungen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg hover:border-purple-300 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
                  {review.image ? (
                    <img
                      src={review.image}
                      alt={review.reviewer}
                      className="w-12 h-12 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center bg-purple-100">
                      <span className="text-purple-600 font-bold text-sm">
                        {review.company.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {review.company}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {review.reviewer}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {renderStars()}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VereinsReviews;
