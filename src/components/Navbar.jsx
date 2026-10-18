import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(null); // 'vendor' | 'customer' | null
  
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Category', href: '/event-category' },
    { name: 'Vendor Category', href: '/vendor-category' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About HarEvent', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FFFDF9] shadow-sm font-['Poppins',sans-serif]">
        {/* Top Dark Bar */}
        <div className="h-[6px] bg-[#181124] w-full"></div>

        {/* Main Navbar */}
        <nav className="border-b border-[#F0E8DD]">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-22 py-1">
              
              {/* Logo on Left - Clicking redirects to Home */}
              <Link to="/" className="flex items-center shrink-0 cursor-pointer">
                <img 
                  src="/logo.png" 
                  alt="HarEvent Logo" 
                  className="h-16 lg:h-20 w-auto object-contain" 
                />
              </Link>

              {/* Nav Links Right Aligned with Perfect Spacing */}
              <div className="hidden lg:flex items-center ml-auto mr-10 space-x-8 xl:space-x-12">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`relative text-[15px] font-semibold whitespace-nowrap transition-colors duration-200 py-2 ${
                        active ? 'text-[#9B1340]' : 'text-[#1A1A1A] hover:text-[#9B1340]'
                      }`}
                    >
                      {link.name}
                      {active && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#9B1340] rounded-full"></span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop Login Buttons */}
              <div className="hidden lg:flex items-center space-x-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setLoginModal('vendor')}
                  className="inline-flex items-center gap-2 bg-[#9B1340] hover:bg-[#7E0E32] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm whitespace-nowrap cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>Login as Vendor</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLoginModal('customer')}
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8952B] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm whitespace-nowrap cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>Login as Customer</span>
                </button>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="lg:hidden flex items-center pr-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-[#9B1340] focus:outline-none p-2 cursor-pointer"
                  aria-label="Toggle Menu"
                >
                  {isOpen ? (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="lg:hidden bg-[#FFFDF9] border-b border-[#F0E8DD] px-4 pt-2 pb-6 space-y-3 transition-all">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-semibold ${
                      active ? 'text-[#9B1340] bg-gray-100' : 'text-[#1A1A1A] hover:text-[#9B1340]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 flex flex-col gap-3 border-t border-[#F0E8DD]">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setLoginModal('vendor');
                  }}
                  className="flex items-center justify-center gap-2 bg-[#9B1340] text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm w-full cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>Login as Vendor</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setLoginModal('customer');
                  }}
                  className="flex items-center justify-center gap-2 bg-[#D4AF37] text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm w-full cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>Login as Customer</span>
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* --- LOGIN POPUP / MODAL --- */}
      {loginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FFFDF9] w-full max-w-md rounded-2xl shadow-2xl border border-[#F0E8DD] overflow-hidden relative transition-all transform scale-100">
            <button
              onClick={() => setLoginModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#9B1340] p-2 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 pb-4 border-b border-[#F0E8DD] text-center">
              <img src="/logo.png" alt="Logo" className="h-12 mx-auto mb-3 object-contain" />
              <h2 className="text-xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
                Welcome Back
              </h2>
              <p className="text-xs text-gray-500 mt-1">Please sign in to continue to your account</p>

              <div className="flex bg-[#F7F3EB] p-1 rounded-xl mt-4">
                <button
                  type="button"
                  onClick={() => setLoginModal('vendor')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    loginModal === 'vendor'
                      ? 'bg-[#9B1340] text-white shadow-xs'
                      : 'text-gray-600 hover:text-[#9B1340]'
                  }`}
                >
                  Vendor Login
                </button>
                <button
                  type="button"
                  onClick={() => setLoginModal('customer')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    loginModal === 'customer'
                      ? 'bg-[#D4AF37] text-white shadow-xs'
                      : 'text-gray-600 hover:text-[#D4AF37]'
                  }`}
                >
                  Customer Login
                </button>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {loginModal === 'vendor' ? 'Vendor Business Email / Mobile' : 'Email Address / Mobile'}
                </label>
                <input
                  type="text"
                  placeholder={loginModal === 'vendor' ? 'vendor@business.com' : 'you@example.com'}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#9B1340] focus:ring-1 focus:ring-[#9B1340] outline-none text-sm transition-all bg-white"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-semibold text-gray-700">Password</label>
                  <a href="#forgot" className="text-xs text-[#9B1340] hover:underline font-medium">Forgot?</a>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#9B1340] focus:ring-1 focus:ring-[#9B1340] outline-none text-sm transition-all bg-white"
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-lg text-white font-semibold text-sm transition-all shadow-md mt-2 cursor-pointer ${
                  loginModal === 'vendor'
                    ? 'bg-[#9B1340] hover:bg-[#7E0E32]'
                    : 'bg-[#D4AF37] hover:bg-[#B8952B]'
                }`}
              >
                Sign In as {loginModal === 'vendor' ? 'Vendor' : 'Customer'}
              </button>

              <p className="text-center text-xs text-gray-500 mt-3">
                Don't have an account?{' '}
                <a href="#register" className="font-semibold text-[#9B1340] hover:underline">
                  Register Now
                </a>
              </p>
            </form>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;