import React, { useState } from 'react';
import { Search, MapPin, Star, Phone, MessageSquare, Filter, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { whatsappNumber } from '../config';

const VendorCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultWhatsappMessage = "Hello HarEvent! I want to inquire about vendor bookings.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;

  // Available vendor categories
  const categories = [
    'All',
    'Venues',
    'Photographers',
    'Catering',
    'Decoration',
    'Makeup Artist',
    'Mehndi Artist',
    'Groom Jewellery',
    'Bride Jewellery',
  ];

  // Dummy Vendor Data (Aap images baad me replace kar sakti hain)
  const vendors = [
    {
      id: 1,
      name: 'Royal Palace & Banquet',
      category: 'Venues',
      location: 'Meerut, UP',
      rating: 4.9,
      reviewsCount: 128,
      price: '₹1,50,000 / day',
      image: '/venues.jpeg', // Aap yahan apni image laga sakti hain
      verified: true,
    },
    {
      id: 2,
      name: 'Candid Moments Studio',
      category: 'Photographers',
      location: 'Delhi NCR',
      rating: 4.8,
      reviewsCount: 95,
      price: '₹45,000 / event',
      image: '/photography.png',
      verified: true,
    },
    {
      id: 3,
      name: 'Gourmet Feast Caterers',
      category: 'Catering',
      location: 'Meerut, UP',
      rating: 4.9,
      reviewsCount: 210,
      price: '₹850 / plate',
      image: '/catering.avif',
      verified: true,
    },
    {
      id: 4,
      name: 'Dream Decorators',
      category: 'Decoration',
      location: 'Noida, UP',
      rating: 4.7,
      reviewsCount: 64,
      price: '₹60,000 / setup',
      image: '/decoration.jpg',
      verified: true,
    },
    {
      id: 5,
      name: 'Glow Bridal Makeover',
      category: 'Makeup Artist',
      location: 'Meerut, UP',
      rating: 4.9,
      reviewsCount: 88,
      price: '₹15,000 / session',
      image: '/makeup-artist.jpg',
      verified: true,
    },
    {
      id: 6,
      name: 'Henna Arts by Priya',
      category: 'Mehndi Artist',
      location: 'Delhi NCR',
      rating: 4.8,
      reviewsCount: 72,
      price: '₹5,000 onwards',
      image: '/mehndi-artist.jpeg',
      verified: true,
    },
    {
      id: 7,
      name: 'Imperial Groom Collection',
      category: 'Groom Jewellery',
      location: 'Meerut, UP',
      rating: 4.7,
      reviewsCount: 41,
      price: '₹20,000 onwards',
      image: '/groom-jwellery.webp',
      verified: false,
    },
    {
      id: 8,
      name: 'Shine Bridal Jewels',
      category: 'Bride Jewellery',
      location: 'Jaipur, RJ',
      rating: 4.9,
      reviewsCount: 156,
      price: '₹35,000 onwards',
      image: '/bride-jwellery.webp',
      verified: true,
    },
    {
      id: 9,
      name: 'Luxury Royal Lawn (Dummy Vendor)',
      category: 'Venues',
      location: 'Meerut, UP',
      rating: 4.6,
      reviewsCount: 30,
      price: '₹1,20,000 / day',
      image: '/dummy-vendor.jpg', // Dummy Image Path
      verified: false,
    },
  ];

  // Filter Logic
  const filteredVendors = vendors.filter((v) => {
    const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FFFDF9] font-['Poppins',sans-serif] min-h-screen flex flex-col justify-between">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="py-12 lg:py-18 grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
              <span className="text-[#9B1340] text-xs">♥️</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
            </div>

            <p className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase mb-1">
              Top Rated Professionals
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
              Vendor <span className="text-[#9B1340]">Categories</span>
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-3 leading-relaxed max-w-xl mx-auto">
              Find and connect with verified venues, photographers, caterers, decorators, and artists for your dream event.
            </p>
          </div>

          {/* Search & Category Filter Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white p-4 rounded-3xl border border-[#F0E8DD] shadow-xs">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#9B1340] text-white shadow-xs'
                      : 'bg-[#FFFDF9] text-gray-700 hover:bg-[#9B1340]/10 hover:text-[#9B1340] border border-[#F0E8DD]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <input
                type="text"
                placeholder="Search vendor or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#F0E8DD] bg-[#FFFDF9] text-xs sm:text-sm outline-none focus:border-[#9B1340]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            </div>

          </div>

          {/* Vendors Showcase Grid */}
          {filteredVendors.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#F0E8DD]">
              <p className="text-base font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
                No Vendors Found
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Try searching for another category or city name.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredVendors.map((vendor) => (
                <div
                  key={vendor.id}
                  className="bg-white rounded-3xl border border-[#F0E8DD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Image Header */}
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      onError={(e) => {
                        e.target.src = '/venues.jpeg'; // Fallback image agar file na mile
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#9B1340] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                      {vendor.category}
                    </span>

                    {/* Verified Badge */}
                    {vendor.verified && (
                      <span className="absolute top-3 right-3 bg-[#9B1340] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                        <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>

                  {/* Vendor Details */}
                  <div className="p-6 flex flex-col justify-between grow space-y-4">
                    <div>
                      {/* Name & Location */}
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-base font-bold font-['Playfair_Display',serif] text-[#1A1A1A] group-hover:text-[#9B1340] transition-colors">
                          {vendor.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#9B1340] shrink-0" />
                        <span>{vendor.location}</span>
                      </div>

                      {/* Rating & Reviews */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1 bg-[#D4AF37]/15 text-[#9B1340] px-2 py-0.5 rounded-md text-xs font-bold">
                          <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                          <span>{vendor.rating}</span>
                        </div>
                        <span className="text-[11px] text-gray-500">
                          ({vendor.reviewsCount} reviews)
                        </span>
                      </div>

                      {/* Starting Price */}
                      <div className="bg-[#FFFDF9] p-3 rounded-xl border border-[#F0E8DD]">
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Starting From</p>
                        <p className="text-sm font-bold text-[#9B1340]">{vendor.price}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 border-t border-[#F0E8DD] flex items-center gap-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#9B1340] hover:bg-[#7E0E32] text-white py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
                      >
                        <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                        <span>Inquire Now</span>
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Custom Vendor Callout Banner */}
          <div className="bg-gradient-to-r from-[#9B1340] to-[#7E0E32] rounded-3xl p-8 sm:p-10 text-white shadow-xl text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif]">
                Are You an Event Service Provider or Vendor?
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 font-light">
                Join HarEvent today to showcase your services to hundreds of clients in your city.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#9B1340] hover:bg-[#FFFDF9] px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 shadow-md"
            >
              <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
              <span>Register as Vendor</span>
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default VendorCategory;