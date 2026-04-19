import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/floodguard-logo.png'; 

const LoginModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Lock scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    // 👇 FIX 1: Wrap everything in AnimatePresence so exit animations can play 👇
    <AnimatePresence>
      {isOpen && (
        // 👇 FIX 2: Made the backdrop a motion.div so the blur fades out smoothly! 👇
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
        >
          
          {/* ── CENTRAL CSS ANIMATIONS ── */}
          <style>{`
            /* Button Hover Gradient Animation */
            @keyframes waveGradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .btn-wave {
              background-image: radial-gradient(circle at 0% 0%, #005ec6, #3f86d5, #86b4e8);
              background-size: 200% 200%;
              transition: all 0.3s ease;
            }
            .btn-wave:hover {
              animation: waveGradient 3s ease infinite;
              box-shadow: 0 10px 25px -5px rgba(0, 94, 198, 0.5);
            }

            /* Continuous Bottom Waves Animation (From your text file!) */
            @keyframes wv {
              0% { transform: translateX(0); }
              100% { transform: translateX(-1440px); }
            }
            .w1 { animation: wv 32s linear infinite; }
            .w2 { animation: wv 24s linear infinite; animation-delay: -8s; }
            .w3 { animation: wv 28s linear infinite; animation-delay: -14s; }
          `}</style>

          {/* 👇 FIX 3: Enhanced exit animation (drops down slightly while shrinking) 👇 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.90, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[450px] h-[700px] bg-[#dfeeff] rounded-[8px] overflow-hidden flex flex-col items-center pt-12 shadow-2xl"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-[#005ec6] hover:text-blue-800 transition-colors z-20"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <img src={logo} alt="FloodGuard Logo" className="w-[100px] h-[100px] object-contain mb-10 z-10" style={{marginTop:'70px'}}/>

            {/* Form Container */}
            <div className="w-full px-10 flex flex-col gap-8 z-10" style={{marginTop:'40px'}}>
              
              {/* Username Input */}
              <div className="relative" style={{marginLeft:'40px',marginRight:'40px'}}>
                <label className="absolute -top-3 left-11 bg-[#dfeeff] px-5 text-[#005ec6] text-sm font-medium">Username</label>
                <input 
                  type="text" 
                  className="w-full h-[55px] bg-transparent border-[2px] border-[#86b4e8] rounded-full pr-6 text-[#005ec6] font-medium outline-none focus:border-[#005ec6] focus:ring-[#005ec6] transition-all"
                  style={{ paddingLeft: '44px' }} 
                />
              </div>

              {/* Password Input */}
              <div className="relative" style={{marginLeft:'40px',marginRight:'40px'}}>
                <label className="absolute -top-3 left-11 bg-[#dfeeff] px-2 text-[#005ec6] text-sm font-medium">Password</label>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full h-[55px] bg-transparent border-[2px] border-[#86b4e8] rounded-full pr-14 text-[#005ec6] font-medium outline-none focus:border-[#005ec6] focus:ring-[#005ec6] transition-all"
                  style={{ paddingLeft: '44px' }}
                />
                {/* ... your eye button stays the same ... */}
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#86b4e8] hover:text-[#005ec6] transition-colors focus:outline-none"
                >
                  {showPassword ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-1 ml-2" style={{marginLeft:'60px', marginTop:'-20px'}}>
                <button 
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-6 h-6 rounded-full border-[2px] flex items-center justify-center transition-all ${rememberMe ? 'bg-[#005ec6] border-[#005ec6]' : 'border-[#86b4e8] bg-transparent'}`}
                >
                  {rememberMe && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span className="text-[#005ec6] text-sm font-medium select-none cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>Remember Me</span>
              </div>

              {/* Login Button */}
              <button className="btn-wave w-[370px] h-[55px] rounded-full text-white font-bold text-[22px] tracking-wide mt-2 z-10" 
              style={{marginLeft:'40px',marginRight:'40px', marginTop:'20px'}}>
                LOGIN
              </button>
              
            </div>

            {/* ── YOUR CUSTOM ANIMATED WAVES ── */}
            <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none" style={{ height: '300px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 980" preserveAspectRatio="xMidYMax meet" className="w-full h-full block bg-transparent">
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
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;