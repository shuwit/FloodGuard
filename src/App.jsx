import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PrivacyNotice from './pages/PrivacyNotice';
import TermsOfService from './pages/TermsOfService';
import NewsPage from './pages/NewsPage';
import AchievementPage from './pages/AchievementPage';

// 👇 Import your new Admin Dashboard 👇
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
        
        {/* 👇 The new secure Admin route 👇 */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;