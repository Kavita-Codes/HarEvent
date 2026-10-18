import React from 'react';
import { Mail, Phone, MapPin, Clock, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { whatsappDisplayNumber, whatsappNumber } from '../config';

const Contact = () => {
  const defaultWhatsappMessage = "Hello HarEvent! I want to inquire about event planning services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;

  return (
    <div className="bg-[#FFFDF9] font-['Poppins',sans-serif] min-h-screen flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="py-12 lg:py-20 grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
              <span className="text-[#9B1340] text-xs">♥️</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
            </div>

            <p className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase mb-1">
              Reach Out To Us
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
              Let's Plan Your <span className="text-[#9B1340]">Dream Event</span>
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-3 max-w-xl mx-auto leading-relaxed font-medium">
              Have questions or need assistance finding top-tier vendors? Connect with the HarEvent team anytime.
            </p>
          </div>

          {/* Contact Details Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* 1. Direct Call Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#F0E8DD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#9B1340]/10 flex items-center justify-center mb-4 border border-[#9B1340]/20 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6 text-[#9B1340]" />
              </div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Call Us Directly
              </h3>
              <p className="text-base font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
                {whatsappDisplayNumber}
              </p>
              <p className="text-[11px] text-gray-500 mt-2">
                Mon - Sat, 10:00 AM to 7:00 PM
              </p>
            </div>

            {/* 2. WhatsApp Support Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#F0E8DD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-4 border border-[#25D366]/20 group-hover:scale-105 transition-transform">
                <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Instant Chat
              </h3>
              <p className="text-base font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
                WhatsApp Support
              </p>
              <p className="text-[11px] text-gray-500 mt-2">
                Fast responses for vendor bookings
              </p>
            </div>

            {/* 3. Email Inquiries Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#F0E8DD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center mb-4 border border-[#D4AF37]/30 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Email Inquiries
              </h3>
              <p className="text-base font-bold font-['Playfair_Display',serif] text-[#1A1A1A] truncate max-w-full">
                support@harevent.com
              </p>
              <p className="text-[11px] text-gray-500 mt-2">
                We reply within 24 hours
              </p>
            </div>

            {/* 4. Headquarters Location Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#F0E8DD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#9B1340]/10 flex items-center justify-center mb-4 border border-[#9B1340]/20 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-[#9B1340]" />
              </div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Our Office
              </h3>
              <p className="text-base font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
                HarEvent HQ
              </p>
              <p className="text-[11px] text-gray-500 mt-2">
                Meerut, Uttar Pradesh, India
              </p>
            </div>

          </div>

          {/* Large Interactive WhatsApp Call-To-Action Banner */}
          <div className="bg-gradient-to-r from-[#9B1340] via-[#850D35] to-[#7E0E32] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-3 text-center md:text-left max-w-xl z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Connect</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif]">
                Prefer to Talk on WhatsApp?
              </h2>

              <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                Connect directly with our event coordination experts to discover venues, compare prices, and finalize services seamlessly.
              </p>
            </div>

            {/* Action Button */}
            <div className="shrink-0 z-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#9B1340] hover:bg-[#FFFDF9] px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                <span>Chat on {whatsappDisplayNumber}</span>
              </a>
            </div>

            {/* Subtle Decorative Backdrop Circle */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
          </div>

        </div>
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default Contact;