import React, { useState, useEffect } from "react";
// Link is removed so the logo is no longer a hyperlink back to the Landing Page
import logo from "../assets/images/floodguard-logo.png";

const TopNav = ({ onLoginClick, setActiveTab, activeTab }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Easter Egg State
  const [isShaking, setIsShaking] = useState(false);

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
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemStyle = (tab) => `
    cursor-pointer font-medium text-[20px] transition-colors pb-1 border-b-2
    ${
      activeTab === tab
        ? "text-[#005ec6] border-[#005ec6]"
        : "text-gray-900 border-transparent hover:text-[#005ec6]"
    }
  `;

  // 👇 1. Logout Confirmation Logic 👇
  const handleLogoutClick = () => {
    const confirmLogout = window.confirm("Are you sure that you want to log out?");
    if (confirmLogout) {
      onLoginClick(); // Triggers the actual logout redirect if they click OK
    }
  };

  // 👇 2. Easter Egg Animation Trigger 👇
  const handleLogoClick = () => {
    if (!isShaking) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // Shakes for half a second, then resets
    }
  };

  return (
    <header
      className={`w-full bg-white py-4 shadow-sm sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ── CUSTOM CSS FOR THE EASTER EGG SHAKE ── */}
      <style>
        {`
          @keyframes shakeEasterEgg {
            0%, 100% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(-15deg) scale(1.15); }
            50% { transform: rotate(15deg) scale(1.15); }
            75% { transform: rotate(-15deg) scale(1.15); }
          }
          .animate-shake {
            animation: shakeEasterEgg 0.5s ease-in-out;
          }
        `}
      </style>

      <div
        className="max-w-[1920px] mx-auto px-6 md:px-8 xl:px-[280px] h-[85px] flex items-center justify-between relative"
        style={{ paddingLeft: "280px", paddingRight: "280px" }}
      >
        {/* ================= LEFT SIDE ================= */}
        <div className="flex items-center gap-6 xl:gap-12">
          
          {/* Logo container - no longer a <Link>! */}
          <div 
            onClick={handleLogoClick} 
            className={`flex-shrink-0 ml-5 cursor-pointer ${isShaking ? 'animate-shake' : ''}`}
          >
            <img
              src={logo}
              alt="FloodGuard Logo"
              className="h-14 w-14 object-contain"
            />
          </div>

          <nav className="hidden xl:flex items-center gap-10">
            <button
              onClick={() => setActiveTab("overview")}
              className={navItemStyle("overview")}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("prediction")}
              className={navItemStyle("prediction")}
            >
              Prediction Tool
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={navItemStyle("reports")}
            >
              Reports
            </button>
            <button
              onClick={() => setActiveTab("status")}
              className={navItemStyle("status")}
            >
              Status
            </button>
          </nav>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogoutClick} // 👈 Wired up to the confirmation dialog
            className="hidden xl:block bg-[#005ec6] text-white w-[163px] h-[55px] leading-none rounded-md font-medium text-[20px] tracking-wide hover:bg-blue-800 transition-colors mr-[280px]"
          >
            Log out
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-[#005ec6] hover:text-blue-800 focus:outline-none p-2"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;