import React from 'react';
import { Search, Scale, MessageSquare, CalendarCheck, PartyPopper } from 'lucide-react';

const Work = () => {
  const steps = [
    {
      num: '1',
      title: 'Search',
      desc: 'Search for vendors or events in your city.',
      icon: <Search className="w-7 h-7 text-[#9B1340]" />,
    },
    {
      num: '2',
      title: 'Compare',
      desc: 'Compare prices, reviews and services.',
      icon: <Scale className="w-7 h-7 text-[#9B1340]" />,
    },
    {
      num: '3',
      title: 'Connect',
      desc: 'Connect with vendors and discuss your needs.',
      icon: <MessageSquare className="w-7 h-7 text-[#9B1340]" />,
    },
    {
      num: '4',
      title: 'Book',
      desc: 'Book your favorite vendor with ease.',
      icon: <CalendarCheck className="w-7 h-7 text-[#9B1340]" />,
    },
    {
      num: '5',
      title: 'Celebrate',
      desc: 'Enjoy your event hassle-free!',
      icon: <PartyPopper className="w-7 h-7 text-[#9B1340]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 bg-[#FFFDF9] font-['Poppins',sans-serif] border-b border-[#F0E8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Ornament */}
        <div className="flex items-center justify-center space-x-3 mb-2">
          <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
          <span className="text-[#9B1340] text-xs">♥️</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A] mb-10">
          How HarEvent Works
        </h2>

        {/* Steps Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative group">
              
              {/* Circular Icon Wrapper with Number Badge */}
              <div className="relative w-24 h-24 rounded-full bg-[#9B1340]/5 flex items-center justify-center mb-4 border border-[#9B1340]/15 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                {step.icon}
                <span className="absolute top-1 right-1 w-6 h-6 rounded-full bg-[#9B1340] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                  {step.num}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg font-bold font-['Playfair_Display',serif] text-[#1A1A1A] mb-1.5">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-gray-600 max-w-[210px] leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;