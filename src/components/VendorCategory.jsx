import React from 'react';
import { Link } from 'react-router-dom';

const VendorCategory = () => {
  // Public folder ki images mapping as shown in your VS Code Explorer
  const categories = [
    {
      name: 'Venues',
      image: '/venues.jpeg',
      icon: (
        <svg className="w-4 h-4 text-[#9B1340]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4" />
        </svg>
      )
    },
    {
      name: 'Photography',
      image: '/photography.png',
      icon: (
        <svg className="w-4 h-4 text-[#9B1340]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h0.93a2 2 0 001.664-.89l0.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l0.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      name: 'Catering',
      image: '/catering.avif',
      icon: (
        <svg className="w-4 h-4 text-[#9B1340]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: 'Decoration',
      image: '/decoration.jpg',
      icon: (
        <svg className="w-4 h-4 text-[#9B1340]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: 'Makeup Artist',
      image: '/makeup-artist.jpg',
      icon: (
        <svg className="w-4 h-4 text-[#9B1340]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Mehndi Artist',
      image: '/mehndi-artist.jpeg',
      icon: (
        <svg className="w-4 h-4 text-[#9B1340]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-10 bg-[#FFFDF9] font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header with Ornament Decor */}
        <div className="flex items-center justify-center space-x-3 mb-2">
          <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
          <span className="text-[#9B1340] text-xs">♥️</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A] mb-8">
          Vendor Category
        </h2>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          
          {/* Standard Single Image Category Cards */}
          {categories.map((cat, index) => (
            <Link
              key={index}
              to="/vendor-category"
              className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-[#F0E8DD] transition-all duration-300 flex flex-col items-center pb-3"
            >
              <div className="w-full h-32 sm:h-36 overflow-hidden bg-gray-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 flex items-center space-x-1.5 px-2">
                {cat.icon}
                <span className="text-xs sm:text-sm font-semibold text-[#1A1A1A] group-hover:text-[#9B1340] transition-colors truncate">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}

          {/* Special Double Card: Groom & Jewellery */}
          <Link
            to="/vendor-category"
            className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-[#F0E8DD] transition-all duration-300 flex flex-col items-center pb-3 col-span-2 sm:col-span-1"
          >
            <div className="w-full h-32 sm:h-36 grid grid-cols-2 gap-0.5 bg-gray-100 overflow-hidden">
              <img
                src="/groom-jwellery.webp"
                alt="Groom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <img
                src="/bride-jwellery.webp"
                alt="Jewellery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="mt-3 flex items-center justify-between w-full px-3 text-[11px] sm:text-xs font-semibold text-[#1A1A1A]">
              <span className="flex items-center space-x-1 group-hover:text-[#9B1340]">
                <span>🤵</span>
                <span>Groom</span>
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center space-x-1 group-hover:text-[#9B1340]">
                <span>💍</span>
                <span>Jewellery</span>
              </span>
            </div>
          </Link>

        </div>

        {/* View All Vendors Button */}
        <div>
          <Link
            to="/vendor-category"
            className="inline-block bg-[#9B1340] hover:bg-[#7E0E32] text-white px-7 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg"
          >
            View All Vendors
          </Link>
        </div>

      </div>
    </section>
  );
};

export default VendorCategory;