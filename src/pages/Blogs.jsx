import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Tag, Bookmark } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { whatsappNumber } from '../config';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultWhatsappMessage = "Hello HarEvent! I am reading your blogs and need help planning my event.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;

  const categories = ['All', 'Wedding Trends', 'Budgeting', 'Venues', 'Photography', 'Decor & Theme'];

  const blogs = [
    {
      id: 1,
      title: 'Top 10 Indian Wedding Decoration Trends to Watch in 2026',
      excerpt: 'From fairy light canopies to eco-friendly floral mandates, discover the luxury decor styles defining modern celebrations.',
      category: 'Decor & Theme',
      author: 'HarEvent Style Team',
      date: 'Oct 12, 2026',
      readTime: '5 min read',
      image: '/decoration.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'How to Allocate Your Wedding Budget Efficiently Without Compromise',
      excerpt: 'Learn expert tips on balancing costs across catering, venues, and photography while maintaining a premium experience.',
      category: 'Budgeting',
      author: 'Ananya Sharma',
      date: 'Oct 08, 2026',
      readTime: '4 min read',
      image: '/couple.png',
      featured: false,
    },
    {
      id: 3,
      title: 'Choosing the Perfect Banquet Venue: Questions You Must Ask',
      excerpt: 'Avoid last-minute surprises by checking these essential venue capacity, power backup, and catering parameters.',
      category: 'Venues',
      author: 'HarEvent Team',
      date: 'Sep 29, 2026',
      readTime: '6 min read',
      image: '/venues.jpeg',
      featured: false,
    },
    {
      id: 4,
      title: 'Must-Have Wedding Photoshoot Poses & Shots for Couples',
      excerpt: 'A comprehensive shot checklist for candid photography, bridal portraits, and pre-wedding couple sessions.',
      category: 'Photography',
      author: 'Vikram Mehta',
      date: 'Sep 21, 2026',
      readTime: '4 min read',
      image: '/photography.png',
      featured: false,
    },
    {
      id: 5,
      title: 'Trending Bridal Mehndi & Jewellery Styling Tips',
      excerpt: 'Explore traditional yet contemporary jewellery pairing and intricate mehndi design patterns for modern brides.',
      category: 'Wedding Trends',
      author: 'Priya Verma',
      date: 'Sep 15, 2026',
      readTime: '5 min read',
      image: '/bride-jwellery.webp',
      featured: false,
    },
    {
      id: 6,
      title: 'Curating the Ultimate Banquet Menu for Corporate & Family Celebrations',
      excerpt: 'Delight your guests with live food stations, fusion cuisines, and festive dessert bars tailored for every guest list.',
      category: 'Wedding Trends',
      author: 'HarEvent Catering Desk',
      date: 'Sep 05, 2026',
      readTime: '7 min read',
      image: '/catering.avif',
      featured: false,
    },
  ];

  // Filter Logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogs.find((b) => b.featured) || blogs[0];

  return (
    <div className="bg-[#FFFDF9] font-['Poppins',sans-serif] min-h-screen flex flex-col justify-between">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Blog Area */}
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
              Inspiration & Ideas
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A]">
              HarEvent <span className="text-[#9B1340]">Journal</span>
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-3 leading-relaxed max-w-xl mx-auto">
              Explore expert planning guides, luxury wedding trends, and vendor selection tips curated just for you.
            </p>
          </div>

          {/* Search Bar & Categories Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white p-4 rounded-3xl border border-[#F0E8DD] shadow-xs">
            
            {/* Category Pills */}
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
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#F0E8DD] bg-[#FFFDF9] text-xs sm:text-sm outline-none focus:border-[#9B1340]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            </div>

          </div>

          {/* Featured Post Card (Visible when 'All' category is selected & search is empty) */}
          {selectedCategory === 'All' && !searchQuery && (
            <div className="bg-white rounded-3xl border border-[#F0E8DD] shadow-xs overflow-hidden mb-14 hover:shadow-md transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Image (7 cols) */}
                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#9B1340] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Featured Story
                  </div>
                </div>

                {/* Content (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="text-[#D4AF37] font-semibold uppercase tracking-wider">
                        {featuredPost.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#9B1340]" />
                        {featuredPost.date}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#1A1A1A] leading-snug mb-3 hover:text-[#9B1340] transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0E8DD] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                      <User className="w-3.5 h-3.5 text-[#9B1340]" />
                      <span>{featuredPost.author}</span>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9B1340] hover:text-[#7E0E32] transition-colors"
                    >
                      <span>Read & Discuss</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-3xl border border-[#F0E8DD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#9B1340] text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-xs">
                    {blog.category}
                  </span>
                </div>

                {/* Article Body */}
                <div className="p-6 flex flex-col justify-between grow space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold font-['Playfair_Display',serif] text-[#1A1A1A] line-clamp-2 leading-snug group-hover:text-[#9B1340] transition-colors mb-2">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-normal">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-[#F0E8DD] flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-medium truncate max-w-[140px]">
                      {blog.author}
                    </span>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#9B1340] font-bold text-xs hover:underline"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {/* Quick Help Banner */}
          <div className="bg-gradient-to-r from-[#9B1340] to-[#7E0E32] rounded-3xl p-8 sm:p-10 text-white shadow-xl text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif]">
                Need Personal Guidance for Your Event?
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 font-light">
                Chat directly with HarEvent experts to get custom vendor suggestions and ideas.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-[#9B1340] hover:bg-[#FFFDF9] px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 shadow-md"
            >
              <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
              <span>Ask HarEvent Team</span>
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Blogs;