import React, { useState } from 'react';
import { Search, Calendar, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { whatsappNumber } from '../config';

const EventCategory = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultWhatsappMessage = "Hello HarEvent! I want to plan an event and need assistance.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;

  const filters = ['All', 'Weddings', 'Social Events', 'Corporate', 'Parties'];

  // Event Categories Data (Aap apni images baad me replace kar sakti hain)
  const events = [
    {
      id: 1,
      title: 'Grand Weddings & Reception',
      type: 'Weddings',
      tagline: 'Complete End-to-End Wedding Planning',
      desc: 'From regal palace venues and luxury floral decorations to candid photography and royal catering services.',
      image: '/weddings.webp', // Image reference mapped
      popularServices: ['Venue Selection', 'Decor & Theme', 'Photography', 'Bridal Makeup', 'Catering'],
      startingPackage: 'Customized Packages',
    },
    {
      id: 2,
      title: 'Engagement & Roka Ceremonies',
      type: 'Social Events',
      tagline: 'Intimate & Stylish Pre-Wedding Functions',
      desc: 'Elegant ring ceremony setups, stage decor, traditional music arrangements, and gourmet dinner spreads.',
      image: '/engegment.jpg',
      popularServices: ['Stage Setup', 'Ring Platter Decor', 'Catering', 'Mehndi Artists'],
      startingPackage: 'Starting from ₹50,000',
    },
    {
      id: 3,
      title: 'Birthday Celebrations',
      type: 'Parties',
      tagline: 'Themed Parties for All Ages',
      desc: 'Creative balloon theme setups, live entertainment, custom cakes, sound systems, and fun activities.',
      image: '/birthday.jpg',
      popularServices: ['Theme Balloon Decor', 'DJ & Sound', 'Magic Show & Anchors', 'Custom Cakes'],
      startingPackage: 'Starting from ₹15,000',
    },
    {
      id: 4,
      title: 'Corporate Galas & Conferences',
      type: 'Corporate',
      tagline: 'Professional Event Management Solutions',
      desc: 'Seamless execution for annual summits, product launches, corporate dinners, award nights, and exhibitions.',
      image: '/corporate.jpg',
      popularServices: ['AV & Tech Setup', 'Branding & Backdrop', 'Corporate Catering', 'Guest Management'],
      startingPackage: 'Custom Quote Available',
    },
    {
      id: 5,
      title: 'Baby Showers & Naming Ceremonies',
      type: 'Social Events',
      tagline: 'Warm & Memorable Family Gatherings',
      desc: 'Pastel-themed floral decorations, photo booths, specialized catering, and welcoming family rituals.',
      image: '/baby-shower.webp',
      popularServices: ['Pastel Decor', 'Custom Backdrop', 'Photography', 'Return Gifts'],
      startingPackage: 'Starting from ₹25,000',
    },
    {
      id: 6,
      title: 'Anniversaries & Private Parties',
      type: 'Parties',
      tagline: 'Exclusive & Customized Celebrations',
      desc: 'Rooftop dining setups, live acoustic music, candle-light decor, and boutique catering for private parties.',
      image: '/other-events.jpeg',
      popularServices: ['Lighting Decor', 'Live Musicians', 'Boutique Catering', 'Cocktail Setup'],
      startingPackage: 'Starting from ₹30,000',
    },
  ];

  // Filter Logic
  const filteredEvents = events.filter((e) => {
    const matchesFilter = selectedFilter === 'All' || e.type === selectedFilter;
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-[#FFFDF9] font-['Poppins',sans-serif] min-h-screen flex flex-col justify-between">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="py-12 lg:py-18 grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
              <span className="text-[#9B1340] text-xs">♥️</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
            </div>

            <p className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase mb-1">
              Celebrations & Special Occasions
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
              Event <span className="text-[#9B1340]">Categories</span>
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-3 leading-relaxed max-w-xl mx-auto">
              Explore bespoke planning services for weddings, corporate events, birthday parties, and intimate family celebrations with HarEvent.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white p-4 rounded-3xl border border-[#F0E8DD] shadow-xs">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedFilter === filter
                      ? 'bg-[#9B1340] text-white shadow-xs'
                      : 'bg-[#FFFDF9] text-gray-700 hover:bg-[#9B1340]/10 hover:text-[#9B1340] border border-[#F0E8DD]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <input
                type="text"
                placeholder="Search event type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#F0E8DD] bg-[#FFFDF9] text-xs sm:text-sm outline-none focus:border-[#9B1340]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            </div>

          </div>

          {/* Event Cards Grid */}
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#F0E8DD]">
              <p className="text-base font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
                No Event Categories Found
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Try clearing your search query or selecting another filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredEvents.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-[#F0E8DD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Event Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.target.src = '/weddings.webp'; // Fallback image
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Type Tag */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#9B1340] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                      {item.type}
                    </span>
                  </div>

                  {/* Details Area */}
                  <div className="p-6 flex flex-col justify-between grow space-y-4">
                    <div>
                      <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#1A1A1A] group-hover:text-[#9B1340] transition-colors mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#D4AF37] mb-2">
                        {item.tagline}
                      </p>

                      <p className="text-xs text-gray-600 leading-relaxed font-normal mb-4">
                        {item.desc}
                      </p>

                      {/* Included Services Bullets */}
                      <div className="space-y-1.5 pt-2 border-t border-[#F0E8DD]">
                        <p className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Popular Services:
                        </p>
                        {item.popularServices.map((service, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#9B1340] shrink-0" />
                            <span className="text-xs text-gray-600">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & WhatsApp Inquiry */}
                    <div className="pt-4 border-t border-[#F0E8DD] flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Estimate</p>
                        <p className="text-xs font-bold text-[#9B1340]">{item.startingPackage}</p>
                      </div>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#9B1340] hover:bg-[#7E0E32] text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                      >
                        <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                        <span>Plan This Event</span>
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Customized Event Banner */}
          <div className="bg-gradient-to-r from-[#9B1340] via-[#850D35] to-[#7E0E32] rounded-3xl p-8 sm:p-10 text-white shadow-xl text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif]">
                Planning a Customized or Multi-Day Event?
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 font-light">
                Talk directly with HarEvent experts on WhatsApp to design a custom package suited to your budget.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-[#9B1340] hover:bg-[#FFFDF9] px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 shadow-md"
            >
              <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
              <span>Get Free Quote</span>
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default EventCategory;