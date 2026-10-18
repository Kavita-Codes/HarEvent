import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { whatsappDisplayNumber, whatsappNumber } from '../config';

const Footer = () => {
  const defaultMessage = "Hello HarEvent! I want to inquire about event planning services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
  const linkedinUrl = "https://www.linkedin.com/in/harevent-company-20772a428/";

  return (
    <footer className="bg-[#3D0014] text-[#FFFDF9] font-['Poppins',sans-serif] pt-16 pb-8 border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Column 1: Brand Info & Social Icons */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/logo.png" 
                alt="HarEvent Logo" 
                className="h-16 w-auto object-contain" 
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              HarEvent (Founded in June 2025) is your premier platform to find trusted wedding vendors, venues, caterers, photographers, and decorators all in one place.
            </p>
            
            {/* Bright White Social Media Icons */}
            <div className="pt-2 flex items-center space-x-3">
              
              {/* Facebook -> Redirects to WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#D4AF37] text-white hover:text-[#3D0014] flex items-center justify-center transition-all shadow-xs"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              {/* Instagram -> Redirects to WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#D4AF37] text-white hover:text-[#3D0014] flex items-center justify-center transition-all shadow-xs"
              >
                <FaInstagram className="w-4.5 h-4.5" />
              </a>

              {/* LinkedIn -> Links to exact LinkedIn profile */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#D4AF37] text-white hover:text-[#3D0014] flex items-center justify-center transition-all shadow-xs"
              >
                <FaLinkedinIn className="w-4.5 h-4.5" />
              </a>

              {/* YouTube -> Redirects to WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#D4AF37] text-white hover:text-[#3D0014] flex items-center justify-center transition-all shadow-xs"
              >
                <FaYoutube className="w-4.5 h-4.5" />
              </a>

            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#D4AF37] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/event-category" className="hover:text-[#D4AF37] transition-colors">Event Categories</Link>
              </li>
              <li>
                <Link to="/vendor-category" className="hover:text-[#D4AF37] transition-colors">Vendor Categories</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-[#D4AF37] transition-colors">Blogs & Articles</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition-colors">About HarEvent</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Categories */}
          <div>
            <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#D4AF37] mb-4">
              Top Vendor Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/vendor-category" className="hover:text-[#D4AF37] transition-colors">Wedding Venues</Link>
              </li>
              <li>
                <Link to="/vendor-category" className="hover:text-[#D4AF37] transition-colors">Photographers & Videographers</Link>
              </li>
              <li>
                <Link to="/vendor-category" className="hover:text-[#D4AF37] transition-colors">Catering Services</Link>
              </li>
              <li>
                <Link to="/vendor-category" className="hover:text-[#D4AF37] transition-colors">Decoration & Mandap</Link>
              </li>
              <li>
                <Link to="/vendor-category" className="hover:text-[#D4AF37] transition-colors">Bridal Makeup Artists</Link>
              </li>
              <li>
                <Link to="/vendor-category" className="hover:text-[#D4AF37] transition-colors">Mehndi Artists</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#D4AF37] mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Amravati, Maharashtra, India</span>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#D4AF37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href={`tel:+${whatsappNumber}`} className="hover:text-[#D4AF37] transition-colors">{whatsappDisplayNumber}</a>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#D4AF37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:support@harevent.com" className="hover:text-[#D4AF37] transition-colors">support@harevent.com</a>
              </p>
            </div>

            {/* Newsletter Input */}
            <div className="pt-2">
              <label className="block text-xs text-gray-300 font-medium mb-1.5">
                Subscribe for offers & event trends:
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                <input 
                  type="email" 
                  placeholder="Enter email..." 
                  className="w-full px-3 py-2 text-xs bg-white/10 text-white rounded-l-lg border border-white/20 focus:outline-none focus:border-[#D4AF37]"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#D4AF37] hover:bg-[#B8952B] text-[#3D0014] font-semibold text-xs px-3.5 py-2 rounded-r-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Terms */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>© {new Date().getFullYear()} HarEvent (Est. June 2025). All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a>
            <a href="#sitemap" className="hover:text-[#D4AF37] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;