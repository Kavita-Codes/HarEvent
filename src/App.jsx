import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

// Import ScrollToTop Component
import ScrollToTop from './components/ScrollToTop';

// Import Pages
import Home from './pages/Home';
import EventCategory from './pages/EventCategory';
import VendorCategory from './pages/VendorCategory';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import { whatsappNumber } from './config';

function App() {
  const defaultMessage = "Hello HarEvent! I am interested in your event planning services.";

  return (
    <Router>
      {/* Page change hone par automatically top par scroll karne ke liye */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#FFFDF9] font-['Poppins',sans-serif] text-[#1A1A1A] antialiased relative">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event-category" element={<EventCategory />} />
            <Route path="/vendor-category" element={<VendorCategory />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#9B1340] hover:bg-[#7E0E32] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-bounce"
        >
          <FaWhatsapp className="w-8 h-8 text-white" />
        </a>
      </div>
    </Router>
  );
}

export default App;