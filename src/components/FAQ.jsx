import React from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappDisplayNumber, whatsappNumber } from '../config';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const defaultMessage = "Hello! I have a question regarding HarEvent services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const faqs = [
    {
      question: 'How do I book a vendor through HarEvent?',
      answer:
        'You can browse through our Vendor Category, compare prices, check reviews, and directly connect or request a quote with the vendor of your choice.',
    },
    {
      question: 'How can I get instant support or ask questions on WhatsApp?',
      answer:
        `You can directly chat with us on WhatsApp anytime at ${whatsappDisplayNumber} for instant assistance, vendor inquiries, or booking help.`,
      isWhatsapp: true,
    },
    {
      question: 'Are all listed vendors verified?',
      answer:
        'Yes, all vendors listed on HarEvent undergo a strict verification process to ensure authenticity and quality service for your events.',
    },
    {
      question: 'Can I plan events other than weddings?',
      answer:
        'Absolutely! We support all types of events including Birthdays, Corporate Events, Baby Showers, Engagements, and private celebrations.',
    },
    {
      question: 'Is there any fee for customers to use HarEvent?',
      answer:
        'No, searching, comparing, and contacting vendors on HarEvent is completely free for customers.',
    },
    {
      question: 'How can vendors register their business here?',
      answer:
        'Vendors can click on the "Login as Vendor" button in the navigation bar or "Join as Vendor" in the subscription section to register and create a profile.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-[#FFFDF9] font-['Poppins',sans-serif] border-b border-[#F0E8DD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
            <span className="text-[#9B1340] text-xs">♥️</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Have questions? We are here to help you plan your event seamlessly.{' '}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border overflow-hidden shadow-xs transition-all duration-300 ${
                  faq.isWhatsapp ? 'border-[#9B1340]/30 bg-[#9B1340]/5' : 'border-[#F0E8DD]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1A1A1A] hover:text-[#9B1340] transition-colors cursor-pointer"
                >
                  <span className="font-['Playfair_Display',serif] flex items-center gap-2">
                    {faq.isWhatsapp && <FaWhatsapp className="w-5 h-5 text-[#25D366] shrink-0" />}
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9B1340] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-[#F0E8DD]/50 space-y-3">
                    <p>{faq.answer}</p>
                    
                    {faq.isWhatsapp && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#9B1340] hover:bg-[#7E0E32] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>Start WhatsApp Chat ({whatsappDisplayNumber})</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;