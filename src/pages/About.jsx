import React from 'react';
import { Heart, ShieldCheck, Sparkles, Award, Users, Target, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { whatsappNumber } from '../config';

const About = () => {
  const defaultWhatsappMessage = "Hello HarEvent! I would like to know more about your planning services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;

  const stats = [
    { label: 'Verified Vendors', value: '500+' },
    { label: 'Happy Celebrations', value: '1,200+' },
    { label: 'Cities Covered', value: '25+' },
    { label: 'Customer Rating', value: '4.9 ★' },
  ];

  const values = [
    {
      title: 'Trusted Quality',
      desc: 'We strictly verify every vendor profile to ensure top-notch quality and authenticity for your big day.',
      icon: <ShieldCheck className="w-6 h-6 text-[#9B1340]" />,
    },
    {
      title: 'Effortless Planning',
      desc: 'Simplify your event planning experience with interactive vendor listings, direct chats, and price comparisons.',
      icon: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      title: 'Customer Centric',
      desc: 'Your dream event is our priority. Our dedicated support team is always ready to guide you at every step.',
      icon: <Users className="w-6 h-6 text-[#9B1340]" />,
    },
  ];

  return (
    <div className="bg-[#FFFDF9] font-['Poppins',sans-serif] min-h-screen flex flex-col justify-between">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="py-12 lg:py-20 grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
              <span className="text-[#9B1340] text-xs">♥️</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
            </div>

            <p className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase mb-1">
              About HarEvent
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
              Crafting Unforgettable <span className="text-[#9B1340]">Celebrations</span>
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
              HarEvent is your premier full-stack event and wedding planning marketplace, connecting couples and event hosts with verified top-tier vendors seamlessly.
            </p>
          </div>

          {/* Hero Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Left Image Wrapper */}
            <div className="relative group">
              <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-[#F0E8DD] shadow-md">
                <img
                  src="/weddings.webp"
                  alt="HarEvent Story"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Badge Overlay */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 z-20 bg-white p-4 rounded-2xl border border-[#F0E8DD] shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#9B1340]/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#9B1340]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">Luxury Event Planning</h4>
                  <p className="text-[11px] text-gray-500">Trusted by hundreds of families</p>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9B1340]/10 text-[#9B1340] text-xs font-semibold">
                <Target className="w-3.5 h-3.5" />
                <span>Our Mission</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A] leading-tight">
                Bringing Your Vision to Life with Precision & Grace
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Planning a wedding or event should be a joyful experience, not a stressful task. At <strong>HarEvent</strong>, we bridge the gap between clients and trusted local service providers-ranging from stunning venues and artistic photographers to gourmet caterers and creative decorators.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Hand-picked & verified professional vendors',
                  'Transparent pricing with instant quotes',
                  'Personalized assistance via direct WhatsApp support',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#9B1340] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="bg-white rounded-3xl p-8 border border-[#F0E8DD] shadow-xs mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#F0E8DD]">
              {stats.map((stat, i) => (
                <div key={i} className={i !== 0 ? 'pt-4 md:pt-0' : ''}>
                  <p className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#9B1340]">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
                Why Choose HarEvent?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                We are committed to delivering excellence and peace of mind for every event.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 border border-[#F0E8DD] shadow-xs hover:shadow-md transition-all duration-300 text-center flex flex-col items-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FFFDF9] border border-[#F0E8DD] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold font-['Playfair_Display',serif] text-[#1A1A1A] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-action Banner */}
          <div className="bg-gradient-to-r from-[#9B1340] to-[#7E0E32] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Playfair_Display',serif]">
              Ready to Start Planning Your Next Event?
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 max-w-xl mx-auto font-light">
              Connect with our team directly on WhatsApp to get personalized recommendations and hassle-free assistance.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-[#9B1340] hover:bg-[#FFFDF9] px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                <span>Chat with HarEvent Experts</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default About;