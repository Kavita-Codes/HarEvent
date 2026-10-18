import React from 'react';
import { Link } from 'react-router-dom';

const Subscription = () => {
  return (
    <section className="relative w-full bg-[#9B1340] text-white overflow-hidden font-['Poppins',sans-serif] py-10 lg:py-12">
      {/* Subtle Background Pattern Decorative Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Side Text Content & Action Buttons */}
        <div className="max-w-2xl text-center lg:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Playfair_Display',serif] text-white leading-tight">
            Ready to Plan Your Dream Event?
          </h2>
          
          <p className="text-xs sm:text-sm lg:text-base text-gray-200 font-light">
            Join HarEvent today and make your celebration unforgettable.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            {/* Explore Vendors Gold Button */}
            <Link
              to="/vendor-category"
              className="bg-[#D4AF37] hover:bg-[#C5A028] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Explore Vendors
            </Link>

            {/* Join as Vendor Outline Button */}
            <Link
              to="/vendor-category"
              className="border border-white/60 hover:bg-white/10 text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap backdrop-blur-xs"
            >
              Join as Vendor
            </Link>
          </div>
        </div>

        {/* Right Side Phone / App Mockup Frame */}
        <div className="relative shrink-0 flex justify-center items-center">
          <div className="w-48 sm:w-56 lg:w-64 bg-white rounded-[32px] p-2.5 shadow-2xl border-4 border-[#3D0014]/30 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Inner Phone Screen */}
            <div className="w-full bg-[#FFFDF9] rounded-[24px] p-4 flex flex-col items-center justify-center text-center space-y-3 border border-[#F0E8DD]">
              <div className="w-10 h-1.5 bg-gray-300 rounded-full mb-1"></div>
              
              {/* App Logo/Icon Representation */}
              <img
                src="/logo.png"
                alt="HarEvent Logo"
                className="h-12 w-auto object-contain my-2"
              />
              
              <p className="text-[10px] font-semibold text-[#9B1340] uppercase tracking-widest">
                HarEvent App
              </p>
              
              <p className="text-[11px] text-gray-600 line-clamp-2 px-1">
                Plan, connect, and book the best vendors easily.
              </p>
              
              <div className="w-full bg-[#9B1340] text-white py-1.5 rounded-lg text-[10px] font-medium mt-1">
                Get Started
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Subscription;