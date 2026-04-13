import React, { useState, useEffect } from 'react';

// Component Imports
import TopNav from '../components/TopNav';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import PreparationSection from '../components/PreparationSection'; 
import Footer from '../components/Footer';

function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  // Pre-loader States
  const [isInitializing, setIsInitializing] = useState(true);
  const [hideLoader, setHideLoader] = useState(false); 

  useEffect(() => {
    // 1. Keep the skeleton visible for 1.8 seconds to simulate data fetching
    const timer1 = setTimeout(() => {
      setIsInitializing(false);
    }, 1800);

    // 2. Completely remove the skeleton from the DOM after it fades out
    const timer2 = setTimeout(() => {
      setHideLoader(true);
    }, 2500); // 1800ms + 700ms fade transition

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] font-sans text-black scroll-smooth flex flex-col overflow-x-hidden">
      
      {/* --- SKELETON SCREEN WITH SHIMMER EFFECT --- */}
      {!hideLoader && (
        <div 
          className={`fixed inset-0 z-[100] bg-white overflow-hidden transition-opacity duration-700 ease-in-out ${
            isInitializing ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Custom CSS for the Shimmer Light Beam */}
          <style>
            {`
              .shimmer {
                background: #f1f5f9;
                background-image: linear-gradient(to right, #f1f5f9 0%, #e2e8f0 20%, #f1f5f9 40%, #f1f5f9 100%);
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
          <div className="w-full max-w-[1360px] mx-auto px-6 md:px-8 h-[100px] flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-6 xl:gap-12">
              {/* Logo Placeholder */}
              <div className="w-14 h-14 rounded-full shimmer"></div>
              {/* Links Placeholder */}
              <div className="hidden lg:flex gap-10">
                <div className="w-16 h-6 rounded-md shimmer"></div>
                <div className="w-24 h-6 rounded-md shimmer"></div>
                <div className="w-24 h-6 rounded-md shimmer"></div>
              </div>
            </div>
            {/* Button Placeholder */}
            <div className="hidden lg:block w-[163px] h-[55px] rounded-md shimmer"></div>
          </div>

          {/* 2. Hero Skeleton */}
          <div className="w-full max-w-[1360px] mx-auto px-6 md:px-8 mt-12 lg:mt-24 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex-1 flex flex-col w-full gap-4">
              <div className="w-1/3 h-6 rounded-md shimmer mb-4"></div>
              <div className="w-full h-16 md:h-20 rounded-md shimmer"></div>
              <div className="w-4/5 h-16 md:h-20 rounded-md shimmer"></div>
              <div className="w-full h-24 rounded-md shimmer mt-6"></div>
              <div className="w-40 h-14 rounded-md shimmer mt-6"></div>
            </div>
            {/* Right Image Placeholder */}
            <div className="flex-1 w-full">
              <div className="w-full aspect-[4/3] rounded-2xl shimmer"></div>
            </div>
          </div>

        </div>
      )}

      {/* --- MAIN PAGE CONTENT --- */}
      <TopNav onLoginClick={() => setIsLoginOpen(true)} />

      <HeroSection />

      <main className="flex-grow flex flex-col w-full">
        <NewsSection />
        

        <section 
          className="w-full bg-[#0863c1] py-20 px-6 flex flex-col items-center justify-center text-center"
          style={{paddingTop:'150px', paddingBottom:'150px'}}
        >
          <h2 className="text-white text-3xl md:text-[40px] font-bold mb-6 tracking-tight" style={{marginBottom:'15px'}}>
            Are you a Researcher or a Policy Maker?
          </h2>
          <p className="text-white text-lg md:text-[22px] mb-2 font-medium">
            You can help us make a significant improvement on our project!
          </p>
          <p className="text-white text-lg md:text-[22px] font-medium">
            Please Email{' '}
            <a 
              href="mailto:FloodGuardAI@gmail.com" 
              className="font-bold hover:text-gray-200 hover:underline transition-all"
            >
              FloodGuardAI@gmail.com
            </a>
          </p>
        </section>
        <PreparationSection />
      </main>

      <Footer />

    </div>
  );
}

export default LandingPage;