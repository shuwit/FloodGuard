import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/floodguard-logo.png';

const TopNav = ({ onLoginClick }) => {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (isScrollingUp || currentScrollPos < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
        setIsSocialOpen(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-white py-4 shadow-sm sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 xl:px-[280px] h-[100px] flex items-center justify-between relative"
      style={{ paddingLeft: '280px', paddingRight: '280px' }}>
        

        {/* ================= LEFT SIDE ================= */}
        <div className="flex items-center gap-6 xl:gap-12">

          <Link to="/" className="flex-shrink-0 ml-5">
            <img src={logo} alt="FloodGuard Logo" className="h-14 w-14 object-contain" />
          </Link>

          <nav className="hidden xl:flex items-center gap-10">
            <a href="/" className="text-gray-900 font-medium text-[20px] hover:text-[#005ec6] transition-colors">Home</a>
            <a href="/news" className="text-gray-900 font-medium text-[20px] hover:text-[#005ec6] transition-colors">News</a>
            <a href="/achievement" className="text-gray-900 font-medium text-[20px] hover:text-[#005ec6] transition-colors">Achievement</a>

            <div
              className="relative"
              onMouseEnter={() => setIsSocialOpen(true)}
              onMouseLeave={() => setIsSocialOpen(false)}
            >
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-gray-900 font-medium text-[20px] hover:text-[#005ec6] transition-colors">
                Our Socials
                <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isSocialOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isSocialOpen && (
                <div className="absolute top-full left-0 mt-1 w-65 h-58 bg-[#E8F1FD] border-t-[6px] border-[#005ec6] shadow-lg flex flex-col py-2 z-50 animate-fadeIn">
                  <a href="#x"         className="ml-10 mt-3 px-5 py-2 text-gray-600 font-normal hover:text-[#005ec6] transition-colors text-[20px] uppercase tracking-wide" style={{marginLeft:'20px', marginTop:'10px'}}  >X</a>
                  <a href="#youtube"   className="ml-10 mt-3 px-5 py-2 text-gray-600 font-normal hover:text-[#005ec6] transition-colors text-[20px] uppercase tracking-wide" style={{marginLeft:'20px', marginTop:'10px'}}>YouTube</a>
                  <a href="#facebook"  className="ml-10 mt-3 px-5 py-2 text-gray-600 font-normal hover:text-[#005ec6] transition-colors text-[20px] uppercase tracking-wide" style={{marginLeft:'20px', marginTop:'10px'}}>Facebook</a>
                  <a href="#instagram" className="ml-10 mt-3 px-5 py-2 text-gray-600 font-normal hover:text-[#005ec6] transition-colors text-[20px] uppercase tracking-wide" style={{marginLeft:'20px', marginTop:'10px'}}>Instagram</a>
                  <a href="#discord"   className="ml-10 mt-3 px-5 py-2 text-gray-600 font-normal hover:text-[#005ec6] transition-colors text-[20px] uppercase tracking-wide" style={{marginLeft:'20px', marginTop:'10px'}}>Discord</a>
                </div>
              )}
            </div>

            <a href="#achievement" className="text-gray-900 font-medium text-[20px] hover:text-[#005ec6] transition-colors">About</a>
          </nav>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-4">
          <button
            onClick={onLoginClick}
            className="hidden xl:block bg-[#005ec6] text-white w-[163px] h-[55px] leading-none rounded-md font-medium text-[20px] tracking-wide hover:bg-blue-800 transition-colors mr-[280px]"
          >
            Log In
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-[#005ec6] hover:text-blue-800 focus:outline-none p-2"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-[100px] left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-8 animate-fadeIn">
          <a href="#news"        onClick={() => setIsMobileMenuOpen(false)} className="ml-5 py-4 text-gray-900 font-medium text-[20px] border-b border-gray-100">News</a>
          <a href="#achievement" onClick={() => setIsMobileMenuOpen(false)} className="ml-5 py-4 text-gray-900 font-medium text-[20px] border-b border-gray-100">Achievement</a>

          <div className="py-4 border-b border-gray-100 flex flex-col">
            <button
              onClick={() => setIsSocialOpen(!isSocialOpen)}
              className="ml-5 flex justify-between items-center text-gray-900 font-medium text-[20px] w-full text-left"
            >
              Our Social
              <svg className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isSocialOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isSocialOpen && (
              <div className="flex flex-col mt-4 pl-4 space-y-4 border-l-4 border-[#005ec6]">
                <a href="#x"         className="text-gray-600 font-medium text-[18px] hover:text-[#005ec6]">X</a>
                <a href="#youtube"   className="text-gray-600 font-medium text-[18px] hover:text-[#005ec6]">YouTube</a>
                <a href="#facebook"  className="text-gray-600 font-medium text-[18px] hover:text-[#005ec6]">Facebook</a>
                <a href="#instagram" className="text-gray-600 font-medium text-[18px] hover:text-[#005ec6]">Instagram</a>
                <a href="#discord"   className="text-gray-600 font-medium text-[18px] hover:text-[#005ec6]">Discord</a>
              </div>
            )}
          </div>

          <a href="#achievement" className="text-gray-900 font-medium text-[20px] hover:text-[#005ec6] transition-colors">About</a>


          <button
            onClick={() => { setIsMobileMenuOpen(false); onLoginClick(); }}
            className="mt-8 bg-[#005ec6] text-white py-4 rounded-md font-bold text-[20px] tracking-wide hover:bg-blue-800 transition-colors w-full"
          >
            Log In
          </button>
        </div>
      )}
    </header>
  );
};

export default TopNav;