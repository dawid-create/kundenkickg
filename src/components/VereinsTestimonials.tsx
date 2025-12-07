import React from 'react';

const VereinsTestimonials: React.FC = () => {
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-gray-600">
            Erfolgreiche Studios vertrauen auf unsere Expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {videoTestimonials.map((testimonial, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-xl hover:border-purple-300 transition-all duration-300">
                <div className="relative aspect-video w-full">
                  <iframe
                    src={testimonial.videoUrl}
                    title={testimonial.name}
                    className="w-full h-full"
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VereinsTestimonials;
