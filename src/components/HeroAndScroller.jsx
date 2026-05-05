import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, AnimatePresence } from 'framer-motion';

// 1. EXACT VIDEO PATH AS REQUESTED
import backgroundVideo from '../assets/images/backgroundhero.mp4';

// ─────────────────────────────────────────────
//  SCROLLING PHRASES DATA
// ─────────────────────────────────────────────
const phraseList = [
  "hazard mapping",
  "flood prediction",
  "emergency alerts",
  "early preparation"
];

// ─────────────────────────────────────────────
//  LCD SCREEN CONTENTS
// ─────────────────────────────────────────────

const Screen0 = () => (
  <div className="w-full h-full bg-white flex flex-col items-center justify-center">
    <img src="src/assets/images/floodguard-logo.png" alt="" className="w-50 h-50 mb-4" />
  </div>
);

const Screen1 = ({ isActive }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 gap-2 bg-[#f8fafc]">

      <p className="text-[12px] font-extrabold text-[#1e3a5f] tracking-widest uppercase mb-2">
        Possible Flooding
      </p>

      <div className="w-full flex items-center justify-center gap-6 mt-1">

        {/* ── THE LIVE BAR ── */}
        <div className="relative w-12 h-[150px] bg-gray-200 rounded-full overflow-hidden shadow-inner border-[3px] border-white">
          <div className="absolute bottom-[50%] left-0 w-full border-t-2 border-white/50 z-10" />
          <div className="absolute bottom-[70%] left-0 w-full border-t-2 border-white/50 z-10" />

          <motion.div
            className="absolute bottom-0 left-0 w-full z-0 rounded-full"
            initial={{ height: '10%', backgroundColor: '#16a34a' }}
            animate={isActive ? {
              height: ['10%', '65%', '92%', '45%', '15%'],
              backgroundColor: ['#16a34a', '#d97706', '#dc2626', '#16a34a', '#16a34a']
            } : { height: '10%' }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 0.8, 1]
            }}
          />
        </div>

        {/* ── THE LEGEND ── */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-0.5">
              <div className="w-3 h-3 rounded-full bg-[#dc2626] shadow-sm" />
              <span className="text-[13px] font-bold text-[#1e3a5f]">High Risk</span>
            </div>
            <span className="text-[10px] text-gray-500 ml-5 font-bold tracking-wide">70% - 100%</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-0.5">
              <div className="w-3 h-3 rounded-full bg-[#d97706] shadow-sm" />
              <span className="text-[13px] font-bold text-[#1e3a5f]">Warning</span>
            </div>
            <span className="text-[10px] text-gray-500 ml-5 font-bold tracking-wide">50% - 70%</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-0.5">
              <div className="w-3 h-3 rounded-full bg-[#16a34a] shadow-sm" />
              <span className="text-[13px] font-bold text-[#1e3a5f]">Low Risk</span>
            </div>
            <span className="text-[10px] text-gray-500 ml-5 font-bold tracking-wide">0% - 50%</span>
          </div>
        </div>

      </div>
    </div>
  );
};

const Screen2 = ({ isActive }) => {
  const alerts = [
    { title: 'Flood Alert', body: 'Marikina River rising fast', time: '2m ago', color: '#dc2626' },
    { title: 'Warning Issued', body: 'NCR Rainfall intensity: Level 2', time: '8m ago', color: '#d97706' },
    { title: 'Advisory', body: 'Pasig area: monitor updates', time: '15m ago', color: '#1d4ed8' },
  ];

  return (
    <div className="absolute inset-0 flex flex-col items-center p-5 gap-3 bg-[#0f172a] pt-12" style={{ paddingTop: '140px' }}>

      <motion.div
        className="relative text-[40px] mb-2 select-none"
        style={{ transformOrigin: 'top center' }}
        animate={isActive ? {
          rotate: [0, -15, 15, -15, 15, -10, 10, 0],
          scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1]
        } : { rotate: 0, scale: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 1.5
        }}
      >
        🔔
        <div className="absolute top-2 right-1 w-3 h-3 bg-red-500 border-2 border-[#0f172a] rounded-full animate-pulse" />
      </motion.div>

      <p className="text-[12px] font-bold text-[#94a3b8] tracking-widest uppercase mb-2">Live Alerts</p>

      {alerts.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: isActive ? i * 0.15 : 0, duration: 0.35 }}
          style={{ borderLeftColor: a.color, paddingLeft: '20px', paddingRight: '20px' }}
          className="w-[250px] h-[45px] bg-[#1e293b] rounded-xl p-3 border-l-4 shadow-md overflow-hidden"
        >
          <div className="flex justify-between items-center mb-1">
            <span style={{ color: a.color }} className="text-[12px] font-bold">{a.title}</span>
            <span className="text-[10px] text-[#475569]">{a.time}</span>
          </div>
          <p className="text-[11px] text-[#94a3b8] leading-tight truncate">{a.body}</p>
        </motion.div>
      ))}
    </div>
  );
};

const Screen3 = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center p-5 gap-5 bg-gradient-to-br from-[#e0f2fe] to-[#bfdbfe]">
    <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
      <svg width="90" height="80" viewBox="0 0 64 56" fill="none">
        <motion.g animate={{ x: [0, 3, 0], rotate: [0, -4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="4" y="22" width="22" height="12" rx="6" fill="#1d4ed8" />
          <rect x="4" y="18" width="6" height="10" rx="3" fill="#1d4ed8" />
          <rect x="11" y="15" width="5" height="11" rx="2.5" fill="#1d4ed8" />
          <rect x="17" y="17" width="5" height="9" rx="2.5" fill="#1d4ed8" />
        </motion.g>
        <motion.g animate={{ x: [0, -3, 0], rotate: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="38" y="22" width="22" height="12" rx="6" fill="#0369a1" />
          <rect x="54" y="18" width="6" height="10" rx="3" fill="#0369a1" />
          <rect x="48" y="15" width="5" height="11" rx="2.5" fill="#0369a1" />
          <rect x="42" y="17" width="5" height="9" rx="2.5" fill="#0369a1" />
        </motion.g>
        <ellipse cx="32" cy="28" rx="8" ry="7" fill="#1e40af" />
      </svg>
    </motion.div>
    <p className="text-[18px] font-bold text-[#1e3a5f] text-center leading-snug">Community<br />Protection</p>
    <div className="w-[200px] bg-[#93c5fd] rounded-full h-[10px] overflow-hidden mt-2">
      <motion.div
        animate={{ width: ['20%', '90%', '20%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="h-full bg-[#1d4ed8] rounded-full shadow-inner"
      />
    </div>
    <p className="text-[12px] font-bold text-[#2563eb]">Reports submitted: 1,240</p>
  </div>
);

// ─────────────────────────────────────────────
//  SECTION DATA
// ─────────────────────────────────────────────

const sections = [
  {
    num: '1', title: 'Check your local risk instantly.',
    body: 'The AI calculates your flood probability and uses a simple green, yellow, and red color scale so you know exactly how to prepare.',
    accent: '#16a34a', accentBg: '#dcfce7', side: 'left',
  },
  {
    num: '2', title: 'Get instant flood alerts.',
    body: 'Our system pushes real-time notifications straight to your phone the moment danger is detected in your area.',
    accent: '#d97706', accentBg: '#fef9c3', side: 'right',
  },
  {
    num: '3', title: 'Help protect your neighborhood.',
    body: 'Report active flooding in your area to keep the community informed and safe. Every report counts.',
    accent: '#1d4ed8', accentBg: '#dbeafe', side: 'left',
  },
];

// ─────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────

const HeroAndScroller = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phraseList.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const rawX = useTransform(
    scrollYProgress,
    [0, 0.20, 0.28, 0.45, 0.53, 0.70, 0.78, 1],
    ['0vw', '0vw', '28vw', '28vw', '-28vw', '-28vw', '28vw', '28vw']
  );

  const rawY = useTransform(
    scrollYProgress,
    [0, 0.20, 0.28],
    ['180vh', '180vh', '0vh']
  );

  const rawRotateY = useTransform(
    scrollYProgress,
    [0, 0.20, 0.28, 0.45, 0.53, 0.70, 0.78, 1],
    [0, 0, -24, -24, 24, 24, -24, 0]
  );

  const circleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const circleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.5]);

  const scrollerTitleOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

  const smoothX = useSpring(rawX, { stiffness: 35, damping: 20, mass: 0.8 });
  const smoothY = useSpring(rawY, { stiffness: 35, damping: 20, mass: 0.8 });
  const smoothRotateY = useSpring(rawRotateY, { stiffness: 35, damping: 20, mass: 0.8 });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v < 0.25) setActiveSection(0);
    else if (v < 0.50) setActiveSection(1);
    else if (v < 0.75) setActiveSection(2);
    else setActiveSection(3);
  });

  return (
    <section ref={containerRef} className="relative bg-[#e0f2fe]" style={{ height: '500vh', marginBottom: '30px' }}>

      {/* ── FLIP CARD ANIMATION FOR PHRASES ── */}

      {/* ── BACKGROUND VIDEO CONTAINER ── */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden bg-blue-900">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0" />
      </div>

      {/* ── STATIC HERO TEXT ── */}
      <div className="absolute top-15 left-0 w-full h-[100vh] z-10 flex flex-col items-center justify-start pt-[12vh] px-6">
        <h1 className="text-4xl md:text-5xl lg:text-[80px]  font-extrabold text-white text-center leading-[1.2] tracking-tight mb-4 drop-shadow-md w-full">

          <div className="mb-2">
            <span className="decoration-white">FloodGuard</span> can help you with
          </div>

          <div className="flex justify-center items-start" style={{ marginLeft: '100px' }}>

            <div
              className="relative text-left w-[320px] md:w-[550px] lg:w-[750px] h-[1.4em]"
              style={{ perspective: "1000px" }}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentPhraseIndex}
                  initial={{ rotateX: -90, opacity: 0, y: 20 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  exit={{ rotateX: 90, opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-0 left-0 w-full flex items-start text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400 whitespace-nowrap"
                  style={{ transformOrigin: "50% 50% -30px", transformStyle: "preserve-3d" }}
                >
                  {phraseList[currentPhraseIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </h1>
      </div>

      {/* ── STICKY CONTAINER (Holds Phone & Scroller Text) ── */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none"
        style={{ perspective: '2000px', zIndex: 20 }}>

        <motion.div
          style={{ opacity: scrollerTitleOpacity }}
          className="absolute top-8 text-center w-full z-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a5f] tracking-tight">
            Here's how it works
          </h2>
          <p className="text-[#4a7fa8] mt-2 font-medium text-lg">We make it simple and easy to use</p>
        </motion.div>

        {/* ── SCROLLER TEXT PANELS ── */}
        <div className="absolute inset-0 w-full max-w-[1920px] mx-auto flex items-center justify-center pointer-events-none z-20"
          style={{ paddingRight: '100px', paddingLeft: '100px' }}>
          {sections.map((s, i) => {
            const sIdx = i + 1;
            const isRight = s.side === 'right';
            const isActive = activeSection === sIdx;

            return (
              <div
                key={sIdx}
                className={`absolute w-[85%] md:w-[380px] xl:w-[460px] transition-all duration-1000 ease-out pointer-events-auto`}
                style={{
                  [isRight ? 'right' : 'left']: 'clamp(20px, 5vw, 60px)',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : `translateY(${isRight ? '30px' : '-30px'})`,
                  pointerEvents: isActive ? 'auto' : 'none',
                  marginLeft: '256px',
                  marginRight: '256px',
                }}
              >
                <div
                  className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-xl font-extrabold mb-6 shadow-sm"
                  style={{ borderColor: s.accent, color: s.accent, backgroundColor: s.accentBg }}
                >
                  {s.num}
                </div>
                <h3 className="text-3xl xl:text-5xl font-extrabold text-[#1e3a5f] mb-4 xl:mb-6 leading-tight">{s.title}</h3>
                <p className="text-lg xl:text-xl text-[#4a7fa8] leading-relaxed font-medium">{s.body}</p>
                <div className="h-[5px] rounded-full mt-6 xl:mt-8 w-20 transition-all duration-500" style={{ backgroundColor: s.accent }} />
              </div>
            );
          })}
        </div>

        {/* ── THE BLUE CIRCLE BEHIND PHONE ── */}
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            opacity: circleOpacity,
            scale: circleScale,
            backgroundImage: 'radial-gradient(circle at 0% 0%, #99bfe6, #04478f)',
            marginTop: '450px',
          }}
          className="absolute  w-[360px] h-[360px] md:w-[900px] md:h-[900px] rounded-full z-20"
        />

        {/* ── THE 3D PHONE ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ paddingTop: '30px' }}>
          <motion.div
            style={{
              x: smoothX,
              y: smoothY,
              rotateY: smoothRotateY,
              rotateX: 5,
              transformStyle: 'preserve-3d',
            }}
            className="relative pointer-events-auto w-[300px] h-[620px] rounded-[48px] z-30"
          >
            <div className="absolute inset-0 bg-[#18181b] rounded-[48px]" style={{ transform: 'translateZ(-2px)' }} />
            <div className="absolute inset-0 bg-[#18181b] rounded-[48px]" style={{ transform: 'translateZ(-4px)' }} />
            <div className="absolute inset-0 bg-[#27272a] rounded-[48px]" style={{ transform: 'translateZ(-6px)' }} />
            <div className="absolute inset-0 bg-[#27272a] rounded-[48px]" style={{ transform: 'translateZ(-8px)' }} />
            <div className="absolute inset-0 bg-[#3f3f46] rounded-[48px]" style={{ transform: 'translateZ(-12px)' }} />
            <div className="absolute inset-0 bg-[#3f3f46] rounded-[48px]" style={{ transform: 'translateZ(-14px)' }} />
            <div className="absolute inset-0 bg-[#3f3f46] rounded-[48px]" style={{ transform: 'translateZ(-16px)' }} />
            <div className="absolute inset-0 bg-[#3f3f46] rounded-[48px]" style={{ transform: 'translateZ(-18px)' }} />
            <div className="absolute inset-0 bg-[#3f3f46] rounded-[48px]" style={{ transform: 'translateZ(-20px)' }} />
            <div className="absolute inset-0 bg-[#3f3f46] rounded-[48px] shadow-[0_40px_80px_rgba(0,0,0,0.4)]" style={{ transform: 'translateZ(-12px)' }} />

            <div className="absolute top-[110px] -left-[3px] w-[3px] h-[25px] bg-[#52525b] rounded-l-md" style={{ transform: 'translateZ(-6px)' }} />
            <div className="absolute top-[150px] -left-[3px] w-[3px] h-[50px] bg-[#52525b] rounded-l-md" style={{ transform: 'translateZ(-6px)' }} />
            <div className="absolute top-[215px] -left-[3px] w-[3px] h-[50px] bg-[#52525b] rounded-l-md" style={{ transform: 'translateZ(-6px)' }} />
            <div className="absolute top-[170px] -right-[3px] w-[3px] h-[75px] bg-[#52525b] rounded-r-md" style={{ transform: 'translateZ(-6px)' }} />

            <div className="absolute inset-0 bg-[#09090b] rounded-[40px] border-[6px] border-[#3f3f46] p-[6px]" style={{ transform: 'translateZ(0px)' }}>
              <div className="relative w-full h-full bg-white rounded-[36px] overflow-hidden">

                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[85px] h-[26px] bg-black rounded-full z-50 flex items-center justify-end pr-2.5 shadow-[0_1px_2px_rgba(255,255,255,0.1)]">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#111] border border-[#2a2a2a] shadow-inner" />
                </div>

                <div className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: activeSection === 0 ? 1 : 0 }}><Screen0 /></div>
                <div className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: activeSection === 1 ? 1 : 0, pointerEvents: activeSection === 1 ? 'auto' : 'none' }}><Screen1 isActive={activeSection === 1} /></div>
                <div className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: activeSection === 2 ? 1 : 0, pointerEvents: activeSection === 2 ? 'auto' : 'none' }}><Screen2 isActive={activeSection === 2} /></div>
                <div className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: activeSection === 3 ? 1 : 0, pointerEvents: activeSection === 3 ? 'auto' : 'none' }}><Screen3 /></div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[110px] h-[4px] bg-black/20 rounded-full z-50" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transform -rotate-45 scale-150 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── SCROLL ARROW (Only visible in Hero) ── */}
        <AnimatePresence>
          {activeSection === 0 && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute bottom-12 flex flex-col items-center gap-2 z-30"
            >
              <p className="text-sm font-bold text-[#4a7fa8] tracking-widest uppercase m-0">Scroll to explore</p>
              <motion.div style={{ marginTop: '10px' }} animate={{ y: [0, 8, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" style={{ marginTop: '-10px' }}>
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="#4a7fa8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default HeroAndScroller;