import React from 'react';
import { Star } from 'lucide-react';

const CustomerReviews: React.FC = () => {
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
      company: "Merch Attack",
      reviewer: "Michael Siewert",
      text: "Die Zusammenarbeit mit Dawid war hervorragend – meine Wünsche wurden optimal umgesetzt und seine Vorschläge haben zu besseren Ergebnissen geführt.",
      image: "/images/Client Logos/11.png"
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
    // Add more reviews here - they will automatically be included in the marquee
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6">
            Kundenbewertungen
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 w-8 lg:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 w-8 lg:w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Reviews Container */}
        <div className="flex animate-marquee-reverse hover:pause-marquee overflow-x-auto lg:overflow-x-visible scrollbar-hide snap-x snap-mandatory lg:snap-none -mr-4 lg:mr-0">
          {/* First set of reviews */}
          {reviews.map((review, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 ml-4 mr-2 lg:mx-4 w-80 transition-all duration-300 snap-center lg:snap-align-none"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6 hover:shadow-xl hover:bg-white transition-all duration-300 h-full">
                {/* Profile Image */}
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 mx-auto overflow-hidden">
                  {review.image ? (
                    <img 
                      src={review.image} 
                      alt={review.reviewer}
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-gray-600 font-bold text-sm">{review.company.charAt(0)}</span>
                  )}
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars()}
                </div>

                {/* Company Name */}
                <h4 className="font-bold text-gray-900 text-center mb-2 text-lg">
                  {review.company}
                </h4>

                {/* Reviewer */}
                <p className="text-sm text-gray-600 text-center mb-4 font-medium">
                  {review.reviewer}
                </p>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed text-center">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop - only on desktop */}
          <div className="lg:flex hidden">
          {reviews.map((review, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-4 w-80 transition-all duration-300"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6 hover:shadow-xl hover:bg-white transition-all duration-300 h-full">
                {/* Profile Image */}
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 mx-auto overflow-hidden">
                  {review.image ? (
                    <img 
                      src={review.image} 
                      alt={review.reviewer}
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-gray-600 font-bold text-sm">{review.company.charAt(0)}</span>
                  )}
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars()}
                </div>

                {/* Company Name */}
                <h4 className="font-bold text-gray-900 text-center mb-2 text-lg">
                  {review.company}
                </h4>

                {/* Reviewer */}
                <p className="text-sm text-gray-600 text-center mb-4 font-medium">
                  {review.reviewer}
                </p>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed text-center">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;