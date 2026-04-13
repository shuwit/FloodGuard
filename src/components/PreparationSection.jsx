import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Make sure this matches your exact downloaded filename!
import marikinaData from '../assets/data/marikina.json';

const PreparationSection = () => {
  // --- NEW: State to track mouse position for the glowing circle ---
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    // Calculates the mouse position relative to this specific section
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  // ----------------------------------------------------------------

  // 1. Simulated AI Risk Logic
  const getRiskColor = (barangayName) => {
    const highRisk = ['Malanday', 'Nangka', 'Concepcion Uno', 'Tumana'];
    const mediumRisk = ['Barangka', 'Calumpang', 'San Roque', 'Santo Niño', 'Tañong', 'Jesus de la Peña'];
    
    if (highRisk.includes(barangayName)) return '#ef4444'; // Red
    if (mediumRisk.includes(barangayName)) return '#eab308'; // Yellow
    return '#22c55e'; // Green
  };

  // 2. Default Style (Glowing Blueprint)
  const defaultStyle = {
    fillColor: '#00D9DA',
    fillOpacity: 0.1,
    weight: 1.5,
    color: '#005ec6'
  };

  // 3. Hover Interaction Logic
  const onEachBarangay = (feature, layer) => {
    const barangayName = feature.properties.NAME_3;

    // The Popup Label
    layer.bindTooltip(`<div class="font-bold text-center">${barangayName}</div>`, { sticky: true });

    layer.on({
      mouseover: (e) => {
        const target = e.target;
        target.setStyle({
          fillColor: getRiskColor(barangayName),
          fillOpacity: 0.7,
          weight: 2,
          color: '#ffffff'
        });
        target.bringToFront();
      },
      mouseout: (e) => {
        const target = e.target;
        target.setStyle(defaultStyle);
      }
    });
  };

  return (
    <section 
      // Changed bg to white, added relative, and added mouse event listeners
      className="relative w-full bg-white py-24 md:py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* --- NEW: THE GLOWING CURSOR CIRCLE --- */}
      <div 
        className="pointer-events-none absolute rounded-full blur-[100px] transition-opacity duration-700 ease-out"
        style={{
          width: '650px',
          height: '650px',
          backgroundColor: '#dfeeff',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 1 : 0,
          zIndex: 0 // Keeps it in the very back
        }}
      />
      {/* -------------------------------------- */}

      {/* Added 'relative z-10' so the text and map sit ON TOP of the glowing circle */}
      <div className="max-w-[1920px] w-full mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-0 relative z-10"
      style={{paddingLeft:'280px', paddingTop:'100px', paddingBottom:'100px', paddingRight:'280px'}}>
        
        {/* LEFT SIDE: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-[40px] md:text-[65px] font-bold text-black mb-6 leading-tight tracking-tight"
          style={{marginBottom:'15px'}}>
            Preparation & <br className="hidden lg:block"/> Mitigation
          </h2>
          
          <p className="text-[18px] md:text-[22px] text-gray-700 leading-relaxed font-medium max-w-xl">
            The system uses machine learning to analyze elevation, rainfall, and weather patterns, generating interactive, color-coded maps that pinpoint flood-prone areas across NCR to guide proactive disaster response.
          </p>
        </div>

        {/* RIGHT SIDE: Interactive AI Map with Floating Data Cards */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          
          {/* MAIN WRAPPER FOR MAP & CARDS */}
          <div className="relative w-full max-w-[550px] aspect-[4/3] z-10">
            
            {/* THE MAP BOX */}
            <div className="absolute inset-0 rounded-2xl shadow-2xl bg-[#0f172a] overflow-hidden border-4 border-white z-10">
              <MapContainer 
                center={[14.645, 121.105]} 
                zoom={13} 
                zoomControl={false} 
                scrollWheelZoom={false} 
                className="w-full h-full"
                style={{ background: '#0f172a' }}
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                {marikinaData && (
                  <GeoJSON 
                    data={marikinaData} 
                    style={defaultStyle} 
                    onEachFeature={onEachBarangay} 
                  />
                )}
              </MapContainer>
            </div>
            
            {/* FLOATING CARD 1: Top Left */}
            <div className="absolute -left-4 w-[150px] h-[60px] md:-left-10 top-8 bg-gray-900/85 backdrop-blur-md border border-white/10 shadow-xl rounded-xl p-4 flex items-center gap-3 z-20 animate-[bounce_4s_infinite] pointer-events-none">
              <span className="relative flex h-3 w-3"
              style={{marginLeft:'10px'}}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" ></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <div className="flex flex-col">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Live Scan</span>
                <span className="text-gray-300 text-[10px]">Marikina Topography</span>
              </div>
            </div>

            {/* FLOATING CARD 2: Bottom Right */}
            <div className="absolute -right-4 w-[200px] h-[80px] md:-right-15 bottom-12 bg-gray-900/85 backdrop-blur-md border border-white/10 shadow-xl rounded-xl p-4 flex items-center gap-3 z-20 animate-[bounce_5s_infinite_reverse] pointer-events-none">
              <div className="bg-red-500/20 p-2 rounded-full" style={{marginLeft:'10px'}}>
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold">High Risk Detected</span>
                <span className="text-red-400 text-[11px] font-medium">+2.4m River Level</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PreparationSection;