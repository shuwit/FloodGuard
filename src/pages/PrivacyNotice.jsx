import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import logo from '../assets/images/floodguard-logo.png';

function PrivacyNotice() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const layer = document.getElementById('ocean-layer');
    if (!layer) return;

    const fishColors    = ['#1a7fe8','#0048a8','#3d9de0','#0a52b8','#5bb8f5','#003d8c'];
    const garbageColors = ['#1a7fe8','#0048a8','#2d6bb5','#4a9fd4','#003d8c'];
    const rc = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const fish = (color) => `
      <svg width="108" height="56" viewBox="0 0 54 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="28" cy="14" rx="20" ry="10" fill="${color}"/>
        <polygon points="0,4 14,14 0,24" fill="${color}"/>
        <circle cx="38" cy="10" r="2.5" fill="#005ec6"/>
      </svg>`;

    const plasticBag = (color) => `
      <svg width="64" height="84" viewBox="0 0 32 42" fill="none">
        <path d="M10 8 Q8 2 16 2 Q24 2 22 8" stroke="${color}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M6 8 Q4 20 6 30 Q8 40 16 40 Q24 40 26 30 Q28 20 26 8 Z" fill="${color}"/>
        <line x1="12" y1="16" x2="10" y2="32" stroke="#005ec6" stroke-width="1.5" opacity="0.5"/>
        <line x1="20" y1="16" x2="22" y2="32" stroke="#005ec6" stroke-width="1.5" opacity="0.5"/>
      </svg>`;

    const bottle = (color) => `
      <svg width="22" height="48" viewBox="0 0 22 48" fill="none">
        <rect x="7" y="0" width="8" height="8" rx="2" fill="${color}"/>
        <path d="M5 8 Q2 12 2 16 L2 42 Q2 46 11 46 Q20 46 20 42 L20 16 Q20 12 17 8 Z" fill="${color}"/>
        <rect x="2" y="20" width="18" height="3" rx="1" fill="#005ec6" opacity="0.4"/>
        <rect x="2" y="26" width="18" height="3" rx="1" fill="#005ec6" opacity="0.3"/>
      </svg>`;

    const can = (color) => `
      <svg width="26" height="36" viewBox="0 0 26 36" fill="none">
        <rect x="2" y="4" width="22" height="28" rx="4" fill="${color}"/>
        <ellipse cx="13" cy="4" rx="11" ry="3.5" fill="${color}"/>
        <ellipse cx="13" cy="32" rx="11" ry="3.5" fill="${color}"/>
        <rect x="2" y="10" width="22" height="2" fill="#005ec6" opacity="0.4"/>
        <rect x="2" y="24" width="22" height="2" fill="#005ec6" opacity="0.4"/>
      </svg>`;

    const tire = (color) => `
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="17" stroke="${color}" stroke-width="7" fill="none"/>
        <circle cx="19" cy="19" r="7" fill="${color}"/>
      </svg>`;

    const types = [
  () => ({ html: fish(rc(fishColors)),          anim: 'swimR', w: 108, h: 56  }),
  () => ({ html: fish(rc(fishColors)),          anim: 'swim',  w: 108, h: 56  }),
  () => ({ html: fish(rc(fishColors)),          anim: 'swimR', w: 76,  h: 40  }),
  () => ({ html: fish(rc(fishColors)),          anim: 'swim',  w: 76,  h: 40  }),
  () => ({ html: plasticBag(rc(garbageColors)), anim: 'drift', w: 64,  h: 84  }),
  () => ({ html: bottle(rc(garbageColors)),     anim: 'drift', w: 44,  h: 96  }),
  () => ({ html: can(rc(garbageColors)),        anim: 'drift', w: 52,  h: 72  }),
  () => ({ html: tire(rc(garbageColors)),       anim: 'drift', w: 76,  h: 76  }),
];

    for (let i = 0; i < 28; i++) {
      const t      = types[Math.floor(Math.random() * types.length)]();
      const el     = document.createElement('div');
      const top    = Math.random() * 92;
      const dur    = 12 + Math.random() * 20;
      const delay  = Math.random() * -25;
      const bobDur = 2  + Math.random() * 3;

      el.style.cssText = `
        position: absolute;
        top: ${top}%;
        left: 0;
        opacity: ${0.15 + Math.random() * 0.2};
        animation: swim-anim-${t.anim} ${dur}s ${delay}s linear infinite,
                   bob ${bobDur}s ease-in-out infinite;
        width: ${t.w}px;
        height: ${t.h}px;
      `;
      el.innerHTML = t.html;
      layer.appendChild(el);
    }

    return () => { layer.innerHTML = ''; };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-black scroll-smooth flex flex-col overflow-x-hidden">

      <TopNav onLoginClick={() => setIsLoginOpen(true)} />

      {/* ============ ALL ANIMATION STYLES ============ */}
      <style>{`

        /* === STAGE 1: Page floods up === */
        @keyframes floodUp {
          0%   { transform: translateY(100vh); }
          100% { transform: translateY(0); }
        }
        .anim-flood {
          animation: floodUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* === STAGE 2: Logo & Title pop in === */
        @keyframes popIn {
          0%   { transform: scale(0.6); opacity: 0; }
          65%  { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .anim-pop-logo {
          opacity: 0;
          animation: popIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 1.0s;
        }
        .anim-pop-title {
          opacity: 0;
          animation: popIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 1.2s;
        }

        /* === STAGE 3: Content fades in === */
        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .anim-fade {
          opacity: 0;
          animation: fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.8s;
        }

        /* === SVG wave loops === */
        .w1 { animation: wv 32s linear infinite; }
        .w2 { animation: wv 24s linear infinite; animation-delay: -8s; }
        .w3 { animation: wv 28s linear infinite; animation-delay: -14s; }
        @keyframes wv {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-1440px); }
        }

        /* === Underwater creatures === */
        @keyframes swim-anim-swim {
          0%   { transform: translateX(-120px); }
          100% { transform: translateX(calc(100vw + 120px)); }
        }
        @keyframes swim-anim-swimR {
          0%   { transform: translateX(calc(100vw + 120px)) scaleX(-1); }
          100% { transform: translateX(-120px) scaleX(-1); }
        }
        @keyframes swim-anim-drift {
          0%   { transform: translateX(-80px) rotate(0deg); }
          100% { transform: translateX(calc(100vw + 80px)) rotate(25deg); }
        }
        @keyframes bob {
          0%, 100% { margin-top: 0px; }
          50%       { margin-top: 14px; }
        }
      `}</style>

      {/* ============ STAGE 1: FLOOD WRAPPER ============ */}
      <div className="anim-flood bg-[#dfeeff] flex flex-col flex-grow"
      style={{ paddingTop: '100px', }}>

        {/* HERO — Light Blue */}
        <section className="w-full  pt-24 pb-0 flex flex-col items-center justify-center relative">

          {/* STAGE 2A: Logo */}
          <img
            src={logo}
            alt="FloodGuard Shield"
            className="anim-pop-logo h-24 w-24 object-contain mb-6 drop-shadow-md"
            style={{marginBottom:'20px'}}
          />

          {/* STAGE 2B: Title */}
          <h1 className="anim-pop-title text-[40px] md:text-[55px] font-bold text-[#005ec6] mb-12 tracking-tight text-center px-4"
          style={{marginBottom:'50px'}}>
            FloodGuard™ Privacy Notice
          </h1>

          {/* SVG Waves */}
          <div className="w-full leading-none z-10 -mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 540 1440 440"
              preserveAspectRatio="none"
              className="w-full h-[150px] md:h-[250px] block bg-transparent"
            >
              <g className="w1">
                <path fill="#86b4e8" d="M0,580 C131,580 229,545 360,545 C491,545 589,580 720,580 C851,580 949,618 1080,618 C1211,618 1309,580 1440,580 C1571,580 1669,545 1800,545 C1931,545 2029,580 2160,580 C2291,580 2389,618 2520,618 C2651,618 2749,580 2880,580 L2880,980 L0,980 Z"/>
              </g>
              <g className="w2">
                <path fill="#3f86d5" d="M0,645 C131,645 229,605 360,605 C491,605 589,645 720,645 C851,645 949,685 1080,685 C1211,685 1309,645 1440,645 C1571,645 1669,605 1800,605 C1931,605 2029,645 2160,645 C2291,645 2389,685 2520,685 C2651,685 2749,645 2880,645 L2880,980 L0,980 Z"/>
              </g>
              <g className="w3">
                <path fill="#005ec6" d="M0,710 C131,710 229,665 360,665 C491,665 589,710 720,710 C851,710 949,755 1080,755 C1211,755 1309,710 1440,710 C1571,710 1669,665 1800,665 C1931,665 2029,710 2160,710 C2291,710 2389,755 2520,755 C2651,755 2749,710 2880,710 L2880,980 L0,980 Z"/>
              </g>
            </svg>
          </div>
        </section>

        {/* STAGE 3: MAIN CONTENT — Dark Blue with underwater bg */}
        <main
          className="flex-grow w-full bg-[#005ec6] text-white py-16 px-6"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Underwater animation layer — behind everything */}
          <div
            id="ocean-layer"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              overflow: 'hidden',
              zIndex: 0,
            }}
          />

          {/* Content — always on top */}
          <div
            className="anim-fade max-w-[1920px] mx-auto flex flex-col gap-10 text-[17px] leading-relaxed"
            style={{ position: 'relative', zIndex: 1,paddingLeft:'500px', paddingRight:'500px' }}
          >

            {/* Intro */}
            <div>
              <p className="font-bold mb-4">Last Modified: <span className="font-normal">October 24, 2025</span></p>
              <p className="mb-4"
              style={{marginTop:'20px'}}>
                Welcome to FloodGuard AI. We are committed to protecting the privacy of our users as we work to build
                disaster resilience in the National Capital Region (NCR). This Privacy Notice explains what info we
                collect when you use our forecasting system and risk maps, and how we use that data.
              </p>
            </div>

            {/* Table of Contents */}
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-2 font-medium"
              style={{marginLeft:'40px', marginTop:'20px'}}>
                <li><a href="#section-1" className="hover:text-gray-300 hover:underline transition-all">Personal Info We Collect</a></li>
                <li><a href="#section-2" className="hover:text-gray-300 hover:underline transition-all">How We Use Your Info</a></li>
                <li><a href="#section-3" className="hover:text-gray-300 hover:underline transition-all">Data Visualization & Risk Mapping</a></li>
                <li><a href="#section-4" className="hover:text-gray-300 hover:underline transition-all">Third-Party Services</a></li>
                <li><a href="#section-5" className="hover:text-gray-300 hover:underline transition-all">Security</a></li>
                <li><a href="#section-6" className="hover:text-gray-300 hover:underline transition-all">Contact Us</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="section-1" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">1. Personal Info We Collect</h2>
              <p className="mb-4" style={{marginTop:'20px'}} ><strong>Summary:</strong> We collect very limited personal info. Most of the data we process is environmental (elevation, rainfall) rather than personal.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Information You Provide:</strong> If you register for alerts or save specific locations, we may collect your email address or account credentials.</li>
                <li><strong>Automatic Collection:</strong> When you access our maps, we automatically collect your IP address (to provide localized flood data) and basic device info (browser type and operating system).</li>
                <li><strong>Location Data:</strong> With your permission, we may collect precise GPS data to show your current position relative to high-risk flood zones.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Info</h2>
              <p className="mb-4" style={{marginTop:'20px'}}><strong>Summary:</strong> We use your info to run the system, improve our machine learning models, and keep you safe.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide real-time flood forecasting for your specific area.</li>
                <li>Send emergency alerts if you are in a "High Risk" zone.</li>
                <li>Validate our Random Forest Tree models by comparing predicted hazards against user-reported flooding.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">3. Data Visualization & Risk Mapping</h2>
              <p className="mb-4" style={{marginTop:'20px'}}><strong>Summary:</strong> Our color-coded maps (Low, Moderate, High) are based on public and environmental data.</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Elevation & Drainage:</strong> Geolocation data provided by the system.</li>
                <li><strong>Weather Patterns:</strong> Real-time rainfall data.</li>
                <li><strong>Historical Trends:</strong> Past flood data in the NCR.</li>
              </ul>
              <p className="italic text-[15px] text-gray-200">Note: Your personal location is never publicly displayed on our risk maps to other users.</p>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
              <p className="mb-4" style={{marginTop:'20px'}}><strong>Summary:</strong> We use external tools to make our maps work, but we don't sell your data to them.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Map Providers:</strong> (e.g., Google Maps or Leaflet) to display the NCR terrain.</li>
                <li><strong>Weather APIs:</strong> To pull real-time rainfall statistics.</li>
                <li><strong>Analytics:</strong> To understand how many people are using the system during a storm.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">5. Security</h2>
              <p className="mb-4" style={{marginTop:'20px'}}><strong>Summary:</strong> We use industry-standard protections to keep your account and location data safe.</p>
              <p>We use encryption for data in transit and follow OWASP best practices to prevent unauthorized access to our database. However, no system is 100% secure, and we encourage users to use unique passwords for their accounts.</p>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="scroll-mt-32"
            style={{paddingBottom:'100px'}}>
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="mb-4" style={{marginTop:'20px'}}>If you have questions about this notice or how FloodGuard™ handles your data, please contact the development team:</p>
              <address className="not-italic font-medium border-l-4 border-[#00D9DA] pl-4 py-2 bg-black/10 rounded-r-lg">
                <strong className="text-lg">FloodGuard Project Team</strong><br />
                Manila, Philippines<br />
                <a href="mailto:FloodGuardAI@gmail.com" className="text-[#00D9DA] hover:text-white transition-colors mt-2 inline-block">
                  FloodGuardAI@gmail.com
                </a>
              </address>
            </div>

          </div>
        </main>

      </div>
      <Footer />
    </div>
  );
}

export default PrivacyNotice;