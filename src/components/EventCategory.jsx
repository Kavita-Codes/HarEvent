import React from 'react';
import { Link } from 'react-router-dom';

const EventCategory = () => {
  // Ditshepetšo tša diswantšho go tšwa go foleitara ya gago ya public
  const events = [
    {
      name: 'Weddings',
      image: '/weddings.webp',
    },
    {
      name: 'Engagement',
      image: '/engegment.jpg',
    },
    {
      name: 'Birthday Parties',
      image: '/birthday.jpg',
    },
    {
      name: 'Corporate Events',
      image: '/corporate.jpg',
    },
    {
      name: 'Baby Showers',
      image: '/baby-shower.webp',
    },
    {
      name: 'Other Events',
      image: '/other-events.jpeg',
    },
  ];

  return (
    <section className="py-10 bg-[#FFFDF9] font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Hlogo ya Karolo */}
        <div className="flex items-center justify-center space-x-3 mb-2">
          <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
          <span className="text-[#9B1340] text-xs">♥️</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A] mb-8">
          Event Category
        </h2>

        {/* Giriti ya Dikarete tša Dimmapa */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {events.map((event, index) => (
            <Link
              key={index}
              to="/event-category"
              className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-[#F0E8DD] transition-all duration-300 flex flex-col items-center pb-3"
            >
              <div className="w-full h-32 sm:h-36 overflow-hidden bg-gray-100">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 px-2">
                <span className={`text-xs sm:text-sm font-semibold transition-colors truncate block ${index === 0 ? 'text-[#9B1340]' : 'text-[#1A1A1A] group-hover:text-[#9B1340]'}`}>
                  {event.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Konope ya View All Events */}
        <div>
          <Link
            to="/event-category"
            className="inline-block bg-[#9B1340] hover:bg-[#7E0E32] text-white px-7 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg"
          >
            View All Events
          </Link>
        </div>

      </div>
    </section>
  );
};

export default EventCategory;