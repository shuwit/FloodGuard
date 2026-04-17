import React, { useState, useEffect } from 'react';

// Component Imports
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

// Asset Imports
import phoneImg from '../assets/images/phone.png'; 
import bgVideo from '../assets/images/backgroundhero.mp4'; 

// Array of 6 achievements (Notice: No category field here!)
const achievementsData = [
  { 
    id: 1, 
    date: "4/2/2026",
    title: "10,000 Active Users Reached", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    image: phoneImg 
  },
  { 
    id: 2, 
    date: "3/15/2026",
    title: "Partnership with NDRRMC", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    image: phoneImg 
  },
  { 
    id: 3, 
    date: "2/28/2026",
    title: "Top 10 Capstone Project Award", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    image: phoneImg 
  },
  { 
    id: 4, 
    date: "1/10/2026",
    title: "AI Model Accuracy Surpasses 95%", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    image: phoneImg 
  },
  { 
    id: 5, 
    date: "12/05/2025",
    title: "Successfully Mapped Marikina Topography", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    image: phoneImg 
  },
  { 
    id: 6, 
    date: "11/20/2025",
    title: "First Beta Testing Phase Completed", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    image: phoneImg 
  }
];

function AchievementPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  // Pre-loader States
  const [isInitializing, setIsInitializing] = useState(true);
  const [hideLoader, setHideLoader] = useState(false); 

  useEffect(() => {
    // Instantly scrolls to the top of the page on load
    window.scrollTo(0, 0);

    // 1. Keep the skeleton visible for 1.8 seconds
    const timer1 = setTimeout(() => {
      setIsInitializing(false);
    }, 1800);

    // 2. Completely remove the skeleton from the DOM
    const timer2 = setTimeout(() => {
      setHideLoader(true);
    }, 2500); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-black flex flex-col">
      
      {/* --- SKELETON SCREEN WITH SHIMMER EFFECT --- */}
      {!hideLoader && (
        <div 
          className={`fixed inset-0 z-[100] bg-[#F8F9FA] overflow-x-hidden overflow-y-auto transition-opacity duration-700 ease-in-out ${
            isInitializing ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <style>
            {`
              .shimmer {
                background: #e2e8f0;
                background-image: linear-gradient(to right, #e2e8f0 0%, #cbd5e1 20%, #e2e8f0 40%, #e2e8f0 100%);
                background-repeat: no-repeat;
                background-size: 800px 100%;
                animation: shimmerAnim 1.2s infinite linear;
              }
              @keyframes shimmerAnim {
                0% { background-position: -800px 0; }
                100% { background-position: 800px 0; }
              }
            `}
          </style>

          {/* 1. Nav Skeleton */}
          <div className="w-full bg-white max-w-[1920px] mx-auto px-6 md:px-8 h-[100px] flex items-center justify-between border-b border-gray-100" style={{ paddingLeft: '280px', paddingRight: '280px' }}>
            <div className="flex items-center gap-6 xl:gap-12">
              <div className="w-14 h-14 rounded-full shimmer"></div>
              <div className="hidden lg:flex gap-10">
                <div className="w-16 h-6 rounded-md shimmer"></div>
                <div className="w-24 h-6 rounded-md shimmer"></div>
                <div className="w-24 h-6 rounded-md shimmer"></div>
              </div>
            </div>
            <div className="hidden lg:block w-[163px] h-[55px] rounded-md shimmer"></div>
          </div>

          {/* 2. Hero Skeleton */}
          <div className="w-full h-[350px] md:h-[450px] shimmer"></div>

          {/* 3. Grid Skeleton */}
          <div className="w-full" style={{paddingTop:'100px',paddingBottom:'150px', paddingRight:'250px', paddingLeft:'250px'}}>
            <div className="max-w-[1920px] w-full mx-auto px-6 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-15 gap-x-10">
                
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-100 h-[460px]">
                    <div className="h-[240px] w-full shimmer"></div>
                    <div className="p-8 flex flex-col gap-4">
                      {/* Slightly smaller first shimmer bar since we only have a date now, not a category */}
                      <div className="w-1/4 h-4 rounded shimmer mt-2"></div>
                      <div className="w-4/5 h-8 rounded shimmer mt-2"></div>
                      <div className="w-full h-4 rounded shimmer mt-4"></div>
                      <div className="w-5/6 h-4 rounded shimmer"></div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- 1. TOP NAVIGATION --- */}
      <TopNav onLoginClick={() => setIsLoginOpen(true)} />

      {/* --- 2. INNER PAGE HERO --- */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#005ec6]/0 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-white/5"></div>

        <h1 className="relative z-10 text-white text-[100px] md:text-[100px] font-bold tracking-widest uppercase drop-shadow-lg"
        style={{marginLeft:'280px', marginTop:'260px'}}>
          Achievement
        </h1>
      </section>

      {/* --- 3. 3-COLUMN GRID ACHIEVEMENT SECTION --- */}
      <main className="flex-grow w-full py-24"
      style={{paddingTop:'100px',paddingBottom:'150px', paddingRight:'250px', paddingLeft:'250px'}}>
        <div className="max-w-[1920px] w-full mx-auto px-6 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-15 gap-x-10">
          
            {achievementsData.map((achievement) => (
              <article 
                key={achievement.id} 
                className=" rounded-[4px] overflow-hidden duration-300 flex flex-col group transition-shadow"
              >
                {/* Image Container */}
                <div className="h-[240px] w-full overflow-hidden bg-gray-200 shrink-0 relative">
                  <img 
                    src={achievement.image} 
                    alt="Achievement Thumbnail" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Text Content */}
                <div className="p-8 flex flex-col flex-grow">
                  
                  {/* DATE FORMAT ONLY (No Category or Pipe Separator) */}
                  <div className="flex items-center font-bold text-[12px] md:text-sm tracking-widest mb-4">
                    <span className="text-gray-500" style={{marginTop:'12px'}}>{achievement.date}</span>
                  </div>

                  <h3 className="text-[22px] font-bold text-black leading-tight" style={{marginBottom:'10px', marginTop:'10px'}}>
                    {achievement.title}
                  </h3>
                  
                  <p className="text-[16px] text-gray-600 leading-relaxed mb-8 flex-grow">
                    {achievement.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <section 
          className="w-full bg-[#0863c1] py-20 px-6 flex flex-col items-center justify-center text-center hover:bg-[#005ec6] transition-colors cursor-pointer"
          style={{paddingTop:'30px', paddingBottom:'30px'}}
        >
          <a href="https://example.com/download" className="text-white text-3xl md:text-[20px] font-bold block w-full h-full" >
            DOWNLOAD FLOODGUARD APP
          </a>
        </section>
      
      <Footer />

    </div>
  );
}

export default AchievementPage;