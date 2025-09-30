import React from 'react';
import { Play } from 'lucide-react';

const VideoTestimonials: React.FC = () => {
  const videoTestimonials = [
    {
      videoUrl: "https://www.youtube.com/embed/CntSUPkChp8",
      name: "Denis Ciampicali",
      title: "Inhaber Wing Tsun Korntal",
    },
    {
      videoUrl: "https://www.youtube.com/embed/TBMvGJ-em_U",
      name: "Emrah Oral",
      title: "Inhaber von KMRSD",
    },
    {
      videoUrl: "https://www.youtube.com/embed/dDowv0Uq2TA?rel=0",
      name: "Emre Menemenci",
      title: "Inhaber von Grappling Fight School Frankfurt",
    },
    {
      videoUrl: "https://www.youtube.com/embed/zfHzlnUJa0g",
      name: "Patrick Krüger",
      title: "Inhaber von Fit and Fight 38",
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#8d3cca] to-gray-900 bg-clip-text text-transparent mb-6">
            Was unsere Kunden über die Zusammenarbeit sagen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-4 xl:gap-6">
          {videoTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:opacity-100 ${
                index === 0 || index === videoTestimonials.length - 1 
                  ? 'opacity-100 lg:opacity-50' 
                  : 'opacity-100'
              }`}
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 overflow-hidden hover:shadow-xl hover:bg-white transition-all duration-300 group">
                {/* Video Thumbnail */}
                <div className="relative aspect-video w-full mx-auto">
                  {testimonial.videoUrl ? (
                    <iframe
                      src={testimonial.videoUrl}
                      title={testimonial.name}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={testimonial.thumbnail}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                       loading="lazy"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-[#8d3cca] group-hover:bg-opacity-100 transition-all duration-300 animate-pulse group-hover:animate-none">
                          <Play className="w-7 h-7 text-gray-800 group-hover:text-white ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm sm:text-base">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;