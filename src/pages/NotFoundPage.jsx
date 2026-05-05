import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Asset Imports
import logo from '../assets/images/floodguard-logo.png';

function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#dfeeff] font-sans text-black flex flex-col overflow-x-clip">
      
      {/* ── CSS ANIMATIONS ── */}
      <style>{`
        @keyframes float { 
          0% { transform: translateY(0px); } 
          50% { transform: translateY(-15px); } 
          100% { transform: translateY(0px); } 
        }
        .anim-float { animation: float 4s ease-in-out infinite; }
        .w1 { animation: wv 32s linear infinite; }
        .w2 { animation: wv 24s linear infinite; animation-delay: -8s; }
        .w3 { animation: wv 28s linear infinite; animation-delay: -14s; }
        @keyframes wv { 0% { transform: translateX(0); } 100% { transform: translateX(-1440px); } }
      `}</style>

      {/* ── MAIN 404 CONTENT ── */}
      <main className="flex-grow flex flex-col items-center justify-center relative pt-12 pb-20 text-center z-10 px-6">
        
        {/* Floating Logo */}
        <div className="anim-float relative mb-8" style={{marginBottom:'40px'}}>
          <img src={logo} alt="FloodGuard Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl relative z-10" />
          {/* Big background '404' text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-black text-[#005ec6]/10 -z-10 select-none">
            4&nbsp;&nbsp;&nbsp;4
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-[#005ec6] tracking-tight mb-4"
        style={{marginBottom:'20px'}}>
          Oops! Looks like a dry zone.
        </h1>
        
        <p className="text-lg md:text-xl text-[#075985] font-medium max-w-[600px] mb-10"
        style={{marginBottom:'40px'}}>
          The page you are looking for has been washed away or doesn't exist. Let's get you back to safety.
        </p>

        <Link 
          to="/" 
          className="bg-[#005ec6] text-white w-full max-w-[200px] mx-auto px-8 py-4 rounded-[8px] font-bold text-[20px] tracking-wide hover:bg-blue-800 transition-all shadow-[0_10px_25px_-5px_rgba(0,94,198,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(0,94,198,0.6)] hover:-translate-y-1"
        >
          Return to Home
        </Link>

      </main>

      {/* ── ANIMATED WAVES BOTTOM ── */}
      <div className="w-full leading-none z-0 mt-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 540 1440 440" preserveAspectRatio="none" className="w-full h-[150px] md:h-[250px] block bg-transparent">
          <g className="w1"><path fill="#86b4e8" d="M0,580 C131,580 229,545 360,545 C491,545 589,580 720,580 C851,580 949,618 1080,618 C1211,618 1309,580 1440,580 C1571,580 1669,545 1800,545 C1931,545 2029,580 2160,580 C2291,580 2389,618 2520,618 C2651,618 2749,580 2880,580 L2880,980 L0,980 Z"/></g>
          <g className="w2"><path fill="#3f86d5" d="M0,645 C131,645 229,605 360,605 C491,605 589,645 720,645 C851,645 949,685 1080,685 C1211,685 1309,645 1440,645 C1571,645 1669,605 1800,605 C1931,605 2029,645 2160,645 C2291,645 2389,685 2520,685 C2651,685 2749,645 2880,645 L2880,980 L0,980 Z"/></g>
          <g className="w3"><path fill="#005ec6" d="M0,710 C131,710 229,665 360,665 C491,665 589,710 720,710 C851,710 949,755 1080,755 C1211,755 1309,710 1440,710 C1571,710 1669,665 1800,665 C1931,665 2029,710 2160,710 C2291,710 2389,755 2520,755 C2651,755 2749,710 2880,710 L2880,980 L0,980 Z"/></g>
        </svg>
      </div>

    </div>
  );
}

export default NotFoundPage;