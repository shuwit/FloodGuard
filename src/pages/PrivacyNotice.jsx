import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import logo from '../assets/images/floodguard-logo.png';
import LoginModal from '../components/LoginModal';

function PrivacyNotice() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // 1. CHANGED: overflow-x-hidden to overflow-x-clip so sticky works!
    <div className="min-h-screen font-sans text-black scroll-smooth flex flex-col overflow-x-clip bg-[#dfeeff]" >

      {/* --- 1. TOP NAVIGATION --- */}
      <TopNav onLoginClick={() => setIsLoginOpen(true)} />

      {/* 👇 ADD THIS RIGHT HERE! 👇 */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />

      <style>{`
        @keyframes floodUp { 0% { transform: translateY(100vh); } 100% { transform: translateY(0); } }
        .anim-flood { animation: floodUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes popIn { 0% { transform: scale(0.6); opacity: 0; } 65% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        .anim-pop-logo { opacity: 0; animation: popIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; animation-delay: 1.0s; }
        .anim-pop-title { opacity: 0; animation: popIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; animation-delay: 1.2s; }
        @keyframes fadeSlideUp { 0% { opacity: 0; transform: translateY(50px); } 100% { opacity: 1; transform: translateY(0); } }
        .anim-fade { opacity: 0; animation: fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: 1.8s; }
        .w1 { animation: wv 32s linear infinite; }
        .w2 { animation: wv 24s linear infinite; animation-delay: -8s; }
        .w3 { animation: wv 28s linear infinite; animation-delay: -14s; }
        @keyframes wv { 0% { transform: translateX(0); } 100% { transform: translateX(-1440px); } }
      `}</style>

      <div className="anim-flood flex flex-col flex-grow" style={{ paddingTop: '100px' }}>

        <section className="w-full pt-24 pb-0 flex flex-col items-center justify-center relative">
          <img src={logo} alt="FloodGuard Shield" className="anim-pop-logo h-24 w-24 object-contain mb-6 drop-shadow-md" style={{marginBottom:'20px'}} />
          <h1 className="anim-pop-title text-[40px] md:text-[55px] font-bold text-[#005ec6] mb-12 tracking-tight text-center px-4" style={{marginBottom:'50px'}}>
            FloodGuard™ Privacy Notice
          </h1>

          <div className="w-full leading-none z-10 -mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 540 1440 440" preserveAspectRatio="none" className="w-full h-[150px] md:h-[250px] block bg-transparent">
              <g className="w1"><path fill="#86b4e8" d="M0,580 C131,580 229,545 360,545 C491,545 589,580 720,580 C851,580 949,618 1080,618 C1211,618 1309,580 1440,580 C1571,580 1669,545 1800,545 C1931,545 2029,580 2160,580 C2291,580 2389,618 2520,618 C2651,618 2749,580 2880,580 L2880,980 L0,980 Z"/></g>
              <g className="w2"><path fill="#3f86d5" d="M0,645 C131,645 229,605 360,605 C491,605 589,645 720,645 C851,645 949,685 1080,685 C1211,685 1309,645 1440,645 C1571,645 1669,605 1800,605 C1931,605 2029,645 2160,645 C2291,645 2389,685 2520,685 C2651,685 2749,645 2880,645 L2880,980 L0,980 Z"/></g>
              <g className="w3"><path fill="#005ec6" d="M0,710 C131,710 229,665 360,665 C491,665 589,710 720,710 C851,710 949,755 1080,755 C1211,755 1309,710 1440,710 C1571,710 1669,665 1800,665 C1931,665 2029,710 2160,710 C2291,710 2389,755 2520,755 C2651,755 2749,710 2880,710 L2880,980 L0,980 Z"/></g>
            </svg>
          </div>
        </section>

        {/* 2. CHANGED: Removed the style={{ overflow: 'hidden' }} that was breaking the sticky effect */}
        <main className="flex-grow w-full bg-[#005ec6] text-white py-16 px-6 relative z-10"
        style={{ paddingBottom: '100px', paddingRight: '250px', paddingLeft: '250px' }}>
          
          <div className="anim-fade max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 text-[17px] leading-relaxed relative">

            {/* 3. CHANGED: Added `self-start sticky top-32` directly to the aside wrapper */}
            <aside className="hidden lg:block w-[280px] shrink-0 self-start sticky top-32">
              <div className=" p-6 rounded-[4px] border border-white/10 shadow-lg">
                <h3 className="text-xl font-bold mb-4 tracking-tight text-white  pb-4"
                style={{marginLeft:'20px', marginTop:'20px', marginBottom:'20px'}}>Privacy Notice</h3>
                <nav className="flex flex-col  text-[15px] font-medium text-white "
                style={{marginLeft:'20px', marginTop:'20px', marginBottom:'20px'}}>
                  <a href="#section-1" className="hover:text-white hover:translate-x-1 transition-all duration-300">1. Personal Info We Collect</a>
                  <a href="#section-2" className="hover:text-white hover:translate-x-1 transition-all duration-300">2. How We Use Your Info</a>
                  <a href="#section-3" className="hover:text-white hover:translate-x-1 transition-all duration-300">3. Data Visualization & Risk Mapping</a>
                  <a href="#section-4" className="hover:text-white hover:translate-x-1 transition-all duration-300">4. Third-Party Services</a>
                  <a href="#section-5" className="hover:text-white hover:translate-x-1 transition-all duration-300">5. Security</a>
                  <a href="#section-6" className="hover:text-white hover:translate-x-1 transition-all duration-300">6. Contact Us</a>
                </nav>
              </div>
            </aside>

            {/* --- RIGHT SIDE: MAIN CONTENT --- */}
            <div className="flex-1 flex flex-col gap-10 min-w-0">

              <div>
                <p className="font-bold mb-4">Last Modified: <span className="font-normal">October 24, 2025</span></p>
                <p className="mb-4">
                  Welcome to FloodGuard AI. We are committed to protecting the privacy of our users as we work to build
                  disaster resilience in the National Capital Region (NCR). This Privacy Notice explains what info we
                  collect when you use our forecasting system and risk maps, and how we use that data.
                </p>
              </div>

              {/* --- MAIN PAGE TABLE OF CONTENTS (Always Visible) --- */}
              <div>
                <h2 className="text-2xl font-bold mb-4 tracking-tight">Table of Contents</h2>
                <ol className="list-decimal pl-6 space-y-2 font-medium" style={{marginLeft:'40px', marginTop:'20px'}}>
                  <li><a href="#section-1" className="hover:text-gray-300 hover:underline transition-all">Personal Info We Collect</a></li>
                  <li><a href="#section-2" className="hover:text-gray-300 hover:underline transition-all">How We Use Your Info</a></li>
                  <li><a href="#section-3" className="hover:text-gray-300 hover:underline transition-all">Data Visualization & Risk Mapping</a></li>
                  <li><a href="#section-4" className="hover:text-gray-300 hover:underline transition-all">Third-Party Services</a></li>
                  <li><a href="#section-5" className="hover:text-gray-300 hover:underline transition-all">Security</a></li>
                  <li><a href="#section-6" className="hover:text-gray-300 hover:underline transition-all">Contact Us</a></li>
                </ol>
              </div>

              <div id="section-1" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-4">1. Personal Info We Collect</h2>
                <p className="mb-4"><strong>Summary:</strong> We collect very limited personal info. Most of the data we process is environmental (elevation, rainfall) rather than personal.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Information You Provide:</strong> If you register for alerts or save specific locations, we may collect your email address or account credentials.</li>
                  <li><strong>Automatic Collection:</strong> When you access our maps, we automatically collect your IP address (to provide localized flood data) and basic device info (browser type and operating system).</li>
                  <li><strong>Location Data:</strong> With your permission, we may collect precise GPS data to show your current position relative to high-risk flood zones.</li>
                </ul>
              </div>

              <div id="section-2" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Info</h2>
                <p className="mb-4"><strong>Summary:</strong> We use your info to run the system, improve our machine learning models, and keep you safe.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide real-time flood forecasting for your specific area.</li>
                  <li>Send emergency alerts if you are in a "High Risk" zone.</li>
                  <li>Validate our Random Forest Tree models by comparing predicted hazards against user-reported flooding.</li>
                </ul>
              </div>

              <div id="section-3" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-4">3. Data Visualization & Risk Mapping</h2>
                <p className="mb-4"><strong>Summary:</strong> Our color-coded maps (Low, Moderate, High) are based on public and environmental data.</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Elevation & Drainage:</strong> Geolocation data provided by the system.</li>
                  <li><strong>Weather Patterns:</strong> Real-time rainfall data.</li>
                  <li><strong>Historical Trends:</strong> Past flood data in the NCR.</li>
                </ul>
                <p className="italic text-[15px] text-gray-200">Note: Your personal location is never publicly displayed on our risk maps to other users.</p>
              </div>

              <div id="section-4" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
                <p className="mb-4"><strong>Summary:</strong> We use external tools to make our maps work, but we don't sell your data to them.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Map Providers:</strong> (e.g., Google Maps or Leaflet) to display the NCR terrain.</li>
                  <li><strong>Weather APIs:</strong> To pull real-time rainfall statistics.</li>
                  <li><strong>Analytics:</strong> To understand how many people are using the system during a storm.</li>
                </ul>
              </div>

              <div id="section-5" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-4">5. Security</h2>
                <p className="mb-4"><strong>Summary:</strong> We use industry-standard protections to keep your account and location data safe.</p>
                <p>We use encryption for data in transit and follow OWASP best practices to prevent unauthorized access to our database. However, no system is 100% secure, and we encourage users to use unique passwords for their accounts.</p>
              </div>

              <div id="section-6" className="scroll-mt-32" style={{paddingBottom:'100px'}}>
                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                <p className="mb-4">If you have questions about this notice or how FloodGuard™ handles your data, please contact the development team:</p>
                <address className="not-italic font-medium border-l-4 border-[#00D9DA] pl-4 py-2 bg-black/10 rounded-r-lg">
                  <strong className="text-lg">FloodGuard Project Team</strong><br />
                  Manila, Philippines<br />
                  <a href="mailto:FloodGuardAI@gmail.com" className="text-[#00D9DA] hover:text-white transition-colors mt-2 inline-block">
                    FloodGuardAI@gmail.com
                  </a>
                </address>
              </div>

            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyNotice;