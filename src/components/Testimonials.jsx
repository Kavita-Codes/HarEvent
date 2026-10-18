import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Rohan & Ananya',
      event: 'Wedding in Delhi',
      rating: 5,
      review:
        'HarEvent made our wedding planning so smooth! We found the best photographer and decorator within our budget without any hassle.',
      image: '/couple.png',
    },
    {
      name: 'Priya Sharma',
      event: 'Birthday Party in Jaipur',
      rating: 5,
      review:
        'Comparing vendor prices and connecting directly helped us save a lot of time. Highly recommended for any event planning!',
      image: '/makeup-artist.jpg',
    },
    {
      name: 'Vikram Mehta',
      event: 'Corporate Gala in Gurgaon',
      rating: 5,
      review:
        'Great experience finding top-notch caterers and venue options. The platform interface is very clean and easy to use.',
      image: '/corporate.jpg',
    },
  ];

  return (
    <section className="py-14 bg-[#FFFDF9] font-['Poppins',sans-serif] border-b border-[#F0E8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Ornament & Header */}
        <div className="flex items-center justify-center space-x-3 mb-2">
          <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
          <span className="text-[#9B1340] text-xs">♥️</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A] mb-2">
          Happy Stories & Testimonials
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-10 max-w-lg mx-auto">
          See how couples and event hosts planned their dream celebrations with us.
        </p>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#F0E8DD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-[#F0E8DD]/60">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/40"
                />
                <div>
                  <h3 className="text-sm font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-gray-500">{item.event}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;