
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import HomePage from './pages/HomePage';
import PetDetailPage from './pages/PetDetailPage';
import ApplicationPage from './pages/ApplicationPage';
import ApplicationStatusPage from './pages/ApplicationStatusPage';
import MessageCenterPage from './pages/MessageCenterPage';
import ProfilePage from './pages/ProfilePage';
import SuccessPage from './pages/SuccessPage';
import FavoritesPage from './pages/FavoritesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Notification Helper Component
const NotificationBanner: React.FC = () => {
  const [notification, setNotification] = useState<{ title: string; message: string; icon: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleNotification = (event: any) => {
      setNotification(event.detail);
      setIsVisible(true);
      
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    };

    window.addEventListener('petlove-push-notification', handleNotification);
    return () => window.removeEventListener('petlove-push-notification', handleNotification);
  }, []);

  if (!notification) return null;

  return (
    <div 
      onClick={() => {
        setIsVisible(false);
        navigate('/messages');
      }}
      className={`absolute top-4 left-4 right-4 z-[100] transition-all duration-500 ease-out transform cursor-pointer ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
        <div className="size-12 rounded-full bg-cover bg-center border-2 border-primary/20 shrink-0 shadow-sm" style={{backgroundImage: `url('${notification.icon}')`}}></div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-0.5">
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white truncate">{notification.title}</h4>
            <span className="text-[10px] font-bold text-slate-400">刚刚</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {notification.message}
          </p>
        </div>
        <div className="size-2 bg-primary rounded-full animate-pulse shadow-sm shadow-primary"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen relative shadow-2xl overflow-x-hidden">
        <NotificationBanner />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/pet/:id" element={<PetDetailPage />} />
          <Route path="/apply/:id" element={<ApplicationPage />} />
          <Route path="/status/:id" element={<ApplicationStatusPage />} />
          <Route path="/messages" element={<MessageCenterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/success/:id" element={<SuccessPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
