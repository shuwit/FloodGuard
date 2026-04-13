import React from 'react';
import { useNavigate } from 'react-router-dom';

// Asset Imports - Using the paths from your current LandingPage.jsx
import backgroundVideo from '../assets/images/backgroundhero.mp4';
import phoneImage from '../assets/images/phone.png';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[calc(100vh-100px)] w-full overflow-hidden bg-blue-900">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay so the white text is easy to read over the moving video */}
      <div className="absolute z-[1]"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="max-w-[1366px] mx-auto px-8 w-full flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* LEFT SIDE: Text and CTA */}
          <div className="flex-1 flex flex-col items-start justify-center" >
            
            <h1 className="font-bold text-6xl md:text-[80px] text-white mb-4 leading-tight tracking-tight" style={{marginLeft:'55px'}}>
              Flood Guard AI
            </h1>
            
            <p className="text-xl md:text-[30px] text-white mb-10 leading-snug font-medium" style={{marginLeft:'100px', marginTop:'5px'}}>
              Predictive Mapping for Smarter
            </p>
            <p className="text-xl md:text-[30px] text-white mb-10 leading-snug font-medium" style={{marginLeft:'180px'}}>
              Disaster Resilience
            </p>

            <button
              onClick={() => navigate('/flood-map')}
              className="bg-[#005ec6] text-white border-2 border-white border-transparent hover:border-[#005ec6] w-55 h-15 rounded-sm font-bold text-[18px] hover:bg-white hover:text-[#005ec6] transition-colors"
              style={{marginLeft:'195px', marginTop:'40px'}}
            >
              Download Now
            </button>
            
          </div>

          {/* RIGHT SIDE: Phone Image with Circle */}
          <div className="flex-1 flex items-center justify-center relative">
            <img 
              src={phoneImage} 
              alt="FloodGuard App on Phone" 
              className="relative z-10 max-h-[75pz] w-auto object-contain drop-shadow-2xl scale-123"  
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;