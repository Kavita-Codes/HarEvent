import React from 'react';
import { ShieldCheck, Tag, Zap, Layers, Headphones } from 'lucide-react';

const WhyHarEvent = () => {
  const features = [
    {
      title: 'Trusted Vendors',
      desc: 'Only verified and trusted professionals.',
      icon: <ShieldCheck className="w-7 h-7 text-[#9B1340]" />,
    },
    {
      title: 'Best Prices',
      desc: 'Compare and get the best deals.',
      icon: <Tag className="w-7 h-7 text-[#9B1340]" />,
    },
    {
      title: 'Easy & Quick',
      desc: 'Plan your event in a few simple steps.',
      icon: <Zap className="w-7 h-7 text-[#9B1340]" />,
    },
    {
      title: 'All in One Place',
      desc: 'Everything you need for your perfect event.',
      icon: <Layers className="w-7 h-7 text-[#9B1340]" />,
    },
    {
      title: 'Customer Support',
      desc: 'We are always here to help you.',
      icon: <Headphones className="w-7 h-7 text-[#9B1340]" />,
    },
  ];

  return (
    <section className="py-14 bg-[#FFFDF9] font-['Poppins',sans-serif] border-b border-[#F0E8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header Ornament */}
        <div className="flex items-center justify-center space-x-3 mb-2">
          <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
          <span className="text-[#9B1340] text-xs">♥️</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A] mb-10">
          Why Select HarEvent?
        </h2>

        {/* 5 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#F0E8DD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#9B1340]/5 border border-[#9B1340]/15 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold font-['Playfair_Display',serif] text-[#1A1A1A] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyHarEvent;