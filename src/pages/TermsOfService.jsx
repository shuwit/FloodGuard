import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import logo from '../assets/images/floodguard-logo.png';

function TermsOfService() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const layer = document.getElementById('ocean-layer');
    if (!layer) return;

    const fishColors    = ['#1a7fe8','#0048a8','#3d9de0','#0a52b8','#5bb8f5','#003d8c'];
    const garbageColors = ['#1a7fe8','#0048a8','#2d6bb5','#4a9fd4','#003d8c'];
    const rc = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const fish = (color) => `
      <svg width="100%" height="100%" viewBox="0 0 54 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="28" cy="14" rx="20" ry="10" fill="${color}"/>
        <polygon points="0,4 14,14 0,24" fill="${color}"/>
        <circle cx="38" cy="10" r="2.5" fill="#005ec6"/>
      </svg>`;

    const plasticBag = (color) => `
      <svg width="100%" height="100%" viewBox="0 0 32 42" fill="none">
        <path d="M10 8 Q8 2 16 2 Q24 2 22 8" stroke="${color}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M6 8 Q4 20 6 30 Q8 40 16 40 Q24 40 26 30 Q28 20 26 8 Z" fill="${color}"/>
        <line x1="12" y1="16" x2="10" y2="32" stroke="#005ec6" stroke-width="1.5" opacity="0.5"/>
        <line x1="20" y1="16" x2="22" y2="32" stroke="#005ec6" stroke-width="1.5" opacity="0.5"/>
      </svg>`;

    const bottle = (color) => `
      <svg width="100%" height="100%" viewBox="0 0 22 48" fill="none">
        <rect x="7" y="0" width="8" height="8" rx="2" fill="${color}"/>
        <path d="M5 8 Q2 12 2 16 L2 42 Q2 46 11 46 Q20 46 20 42 L20 16 Q20 12 17 8 Z" fill="${color}"/>
        <rect x="2" y="20" width="18" height="3" rx="1" fill="#005ec6" opacity="0.4"/>
        <rect x="2" y="26" width="18" height="3" rx="1" fill="#005ec6" opacity="0.3"/>
      </svg>`;

    const can = (color) => `
      <svg width="100%" height="100%" viewBox="0 0 26 36" fill="none">
        <rect x="2" y="4" width="22" height="28" rx="4" fill="${color}"/>
        <ellipse cx="13" cy="4" rx="11" ry="3.5" fill="${color}"/>
        <ellipse cx="13" cy="32" rx="11" ry="3.5" fill="${color}"/>
        <rect x="2" y="10" width="22" height="2" fill="#005ec6" opacity="0.4"/>
        <rect x="2" y="24" width="22" height="2" fill="#005ec6" opacity="0.4"/>
      </svg>`;

    const tire = (color) => `
      <svg width="100%" height="100%" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="17" stroke="${color}" stroke-width="7" fill="none"/>
        <circle cx="19" cy="19" r="7" fill="${color}"/>
      </svg>`;

    const types = [
      () => ({ html: fish(rc(fishColors)),          anim: 'swimR', w: 54,  h: 28 }),
      () => ({ html: fish(rc(fishColors)),          anim: 'swim',  w: 54,  h: 28 }),
      () => ({ html: fish(rc(fishColors)),          anim: 'swimR', w: 38,  h: 20 }),
      () => ({ html: fish(rc(fishColors)),          anim: 'swim',  w: 38,  h: 20 }),
      () => ({ html: plasticBag(rc(garbageColors)), anim: 'drift', w: 32,  h: 42 }),
      () => ({ html: bottle(rc(garbageColors)),     anim: 'drift', w: 22,  h: 48 }),
      () => ({ html: can(rc(garbageColors)),        anim: 'drift', w: 26,  h: 36 }),
      () => ({ html: tire(rc(garbageColors)),       anim: 'drift', w: 38,  h: 38 }),
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

      <style>{`
        @keyframes floodUp {
          0%   { transform: translateY(100vh); }
          100% { transform: translateY(0); }
        }
        .anim-flood { animation: floodUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

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

        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .anim-fade {
          opacity: 0;
          animation: fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.8s;
        }

        .w1 { animation: wv 32s linear infinite; }
        .w2 { animation: wv 24s linear infinite; animation-delay: -8s; }
        .w3 { animation: wv 28s linear infinite; animation-delay: -14s; }
        @keyframes wv {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-1440px); }
        }

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

      <div className="anim-flood flex flex-col flex-grow">

        {/* HERO */}
        <section className="w-full bg-[#dfeeff] pt-24 pb-0 flex flex-col items-center justify-center relative"
        style={{ paddingTop: '100px', }}>
          <img
            src={logo}
            alt="FloodGuard Shield"
            className="anim-pop-logo h-24 w-24 object-contain mb-6 drop-shadow-md"
            style={{marginBottom:'20px'}}
          />
          <h1 className="anim-pop-title text-[40px] md:text-[55px] font-bold text-[#005ec6] mb-12 tracking-tight text-center px-4"
          style={{marginBottom:'50px'}}>
            FloodGuard™ Terms of Service
          </h1>

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

        {/* MAIN CONTENT */}
        <main
          className="flex-grow w-full bg-[#005ec6] text-white py-16 px-6"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <div
            id="ocean-layer"
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}
          />

          <div
            className="anim-fade max-w-[1920px] mx-auto flex flex-col gap-10 text-[17px] leading-relaxed"
            style={{ position: 'relative', zIndex: 1 , paddingRight:'500px', paddingLeft:'500px'}}
          >

            {/* Intro */}
            <div>
              <p className="font-bold mb-4">Last Modified: <span className="font-normal">March 28, 2026</span></p>
              <p className="mb-4" style={{marginTop:'20px'}}>
                Welcome to FloodGuard AI. By accessing our platform, you agree to these terms. Our system is designed
                to support the Prevention, Mitigation, and Early Warning of flood hazards in the National Capital
                Region (NCR). Please read these terms carefully to understand our service protocols and your
                responsibilities as a user.
              </p>
            </div>

            {/* Table of Contents */}
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-2 font-medium text-left"
              style={{marginLeft:'40px', marginTop:'20px'}}>
                <li><a href="#section-1" className="hover:text-gray-300 hover:underline transition-all">Scope of Service (Prevention & Mitigation)</a></li>
                <li><a href="#section-2" className="hover:text-gray-300 hover:underline transition-all">Early Warning System (EWS) Protocols</a></li>
                <li><a href="#section-3" className="hover:text-gray-300 hover:underline transition-all">Safety & Liability Disclaimer</a></li>
                <li><a href="#section-4" className="hover:text-gray-300 hover:underline transition-all">User Conduct & Data Integrity</a></li>
                <li><a href="#section-5" className="hover:text-gray-300 hover:underline transition-all">Intellectual Property & Trademark</a></li>
                <li><a href="#section-6" className="hover:text-gray-300 hover:underline transition-all">Governing Law</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="section-1" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4" >1. Scope of Service</h2>
              <p className="mb-4" style={{ marginTop:'20px'}}><strong>Summary:</strong > We provide specialized tools for disaster prevention and mitigation.</p>
              <p>
                Flood Guard AI™ uses machine learning to assess flood probabilities based on elevation, drainage, and
                rainfall. These tools are intended to assist users in the Prevention and Mitigation phases of disaster
                management by identifying long-term risks and infrastructure vulnerabilities across the NCR.
              </p>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">2. Early Warning System (EWS) Protocols</h2>
              <p className="mb-4" style={{ marginTop:'20px'}}><strong>Summary:</strong> Our alerts are based on real-time data but depend on network connectivity.</p>
              <p className="mb-4">Our Early Warning System provides automated notifications based on current rainfall intensity and historical flood patterns.</p>
              <ul className="list-disc pl-6 space-y-2 text-left">
                <li><strong>Notification Delivery:</strong> We do not guarantee 100% delivery of alerts due to potential internet or telecommunication outages during severe weather.</li>
                <li><strong>Risk Levels:</strong> Our color-coded warnings (Low, Moderate, High) are generated by AI models and should be treated as high-probability forecasts, not absolute certainties.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">3. Safety & Liability Disclaimer</h2>
              <p className="mb-4" style={{ marginTop:'20px'}} ><strong>Summary:</strong> We provide the data; you provide the action. Always follow official government orders.</p>
              <p className="mb-4"><strong>IMPORTANT:</strong> While Flood Guard AI™ is a tool for Prevention and Mitigation, it is not a replacement for official government directives.</p>
              <ul className="list-disc pl-6 space-y-2 text-left">
                <li><strong>No Guarantee of Accuracy:</strong> Machine learning models have a margin of error. Flood Guard AI is not liable for property damage or personal injury resulting from reliance on our forecasts.</li>
                <li><strong>Official Sources:</strong> In the event of a contradiction, always prioritize instructions from PAGASA, NDRRMC, or your local NCR LGU.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">4. User Conduct & Data Integrity</h2>
              <p className="mb-4"style={{ marginTop:'20px'}} ><strong>Summary:</strong> Don't mess with our sensors or data.</p>
              <p className="mb-4">To ensure the effectiveness of our <strong>Early Warning System</strong>, users are prohibited from:</p>
              <ul className="list-disc pl-6 space-y-2 text-left">
                <li>Submitting false "Ground Truth" reports (fake flood sightings) that could calibrate the machine learning model incorrectly.</li>
                <li>Attempting to reverse-engineer our drainage and elevation datasets.</li>
                <li>Disrupting the API services that power our real-time visualizations.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property & Trademark</h2>
              <p className="mb-4" style={{ marginTop:'20px'}}><strong>Summary:</strong> Flood Guard AI is our brand and technical property.</p>
              <p>
                The "Flood Guard AI" name, its underlying machine learning algorithms, and the visual risk-mapping
                interface are protected under trademark and copyright. © 2025–2026 FloodGuardAI™. All Rights Reserved.
              </p>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="scroll-mt-32"
            style={{paddingBottom:'100px'}}>
              <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
              <p className="mb-4" style={{ marginTop:'20px'}} ><strong>Summary:</strong> We operate under Philippine Law.</p>
              <p>
                These terms are governed by the laws of the Republic of the Philippines. Any legal concerns regarding
                the deployment of this system within the NCR will be settled in the appropriate courts of Metro Manila.
              </p>
            </div>

          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default TermsOfService;