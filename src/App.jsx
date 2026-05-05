import { BrowserRouter, Routes, Route } from 'react-router-dom';

// User Pages
import LandingPage from './pages/LandingPage';
import PrivacyNotice from './pages/PrivacyNotice';
import TermsOfService from './pages/TermsOfService';
import NewsPage from './pages/NewsPage';
import AchievementPage from './pages/AchievementPage';
import NotFoundPage from './pages/NotFoundPage'; // 👈 1. Import the new page!

// Admin Pages
import AdminDashboard from './AdminPages/AdminDashboard'; 
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyNotice />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/news" element={<NewsPage />} /> 
        <Route path="/achievement" element={<AchievementPage />} />
        
        <Route path="/admin" element={<AdminDashboard />} />

        {/* 👇 2. The Catch-All 404 Route MUST go at the very bottom! 👇 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;