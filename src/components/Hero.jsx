import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden font-['Poppins',sans-serif] min-h-[460px] sm:min-h-[500px] lg:min-h-[550px] flex items-center border-b border-[#F0E8DD]">
      
      {/* Background Image - Full Edge-to-Edge Cover */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/couple.png"
          alt="HarEvent Hero Banner"
          className="w-full h-full object-cover object-right sm:object-center"
        />
      </div>

      {/* Left Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-md sm:max-w-lg lg:max-w-xl space-y-5 text-left">
          
          {/* Tagline */}
          <p className="text-[#D4AF37] font-semibold text-xs sm:text-sm tracking-widest uppercase">
            Plan. Connect. Celebrate.
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-['Playfair_Display',serif] text-[#1A1A1A] leading-tight sm:leading-snug">
            Every Celebration{' '}
            <span className="text-[#9B1340] block sm:inline">
              Starts with the Right Choice.
            </span>
          </h1>

          {/* Sub-description */}
          <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed max-w-md font-medium">
            Find trusted vendors, compare services and plan your perfect wedding or event – all in one place.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <Link
              to="/vendor-category"
              className="bg-[#9B1340] hover:bg-[#7E0E32] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              Explore Vendors
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#9B1340] hover:bg-[#F7F3EB] px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap bg-white/90 shadow-xs"
            >
              <span className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#D4AF37]/20 text-[#9B1340] flex items-center justify-center">
                <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span>How It Works</span>
            </a>
          </div>

          {/* Stats Counters Section */}
          <div className="pt-5 border-t border-[#F0E8DD]/80 flex items-center gap-6 sm:gap-10">
            
            {/* Stat 1: Vendors */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-2xl bg-[#9B1340]/10 flex items-center justify-center shrink-0 border border-[#9B1340]/20">
                <svg className="w-5 h-5 text-[#9B1340]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-600 font-medium">Trusted Vendors</p>
                <p className="text-lg sm:text-xl font-bold text-[#1A1A1A] font-['Playfair_Display',serif]">500+</p>
              </div>
            </div>

            {/* Vertical Separator Line */}
            <div className="h-8 w-[1px] bg-gray-300"></div>

            {/* Stat 2: Cities */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-600 font-medium">Cities Covered</p>
                <p className="text-lg sm:text-xl font-bold text-[#1A1A1A] font-['Playfair_Display',serif]">300+</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;