import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PrivacyNotice from './pages/PrivacyNotice';
import TermsOfService from './pages/TermsOfService';
import NewsPage from './pages/NewsPage';
import AchievementPage from './pages/AchievementPage'; // 1. Import your new page
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyNotice />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/news" element={<NewsPage />} /> 
        <Route path="/achievement" element={<AchievementPage />} /> {/* 2. Add the route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;