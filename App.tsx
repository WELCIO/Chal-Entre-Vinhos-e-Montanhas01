
import React, { useState } from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import BookingPage from './components/pages/BookingPage';
import GuidePage from './components/pages/GuidePage';
import ServicesPage from './components/pages/ServicesPage';
import MusicPage from './components/pages/MusicPage';
import AdminLoginPage from './components/pages/AdminLoginPage';
import AdminDashboardPage from './components/pages/AdminDashboardPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [darkMode, setDarkMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gradient-to-br from-orange-50 via-green-50 to-amber-50 text-gray-900';

  const renderPage = () => {
    if (currentPage === 'admin') {
      return isAdmin 
        ? <AdminDashboardPage setIsAdmin={setIsAdmin} setCurrentPage={setCurrentPage} darkMode={darkMode} />
        : <AdminLoginPage setIsAdmin={setIsAdmin} setCurrentPage={setCurrentPage} darkMode={darkMode} />;
    }
    
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} darkMode={darkMode} />;
      case 'booking':
        return <BookingPage darkMode={darkMode} />;
      case 'guide':
        return <GuidePage darkMode={darkMode} />;
      case 'services':
        return <ServicesPage darkMode={darkMode} />;
      case 'music':
        return <MusicPage darkMode={darkMode} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} darkMode={darkMode} />;
    }
  };

  if (currentPage === 'admin' && !isAdmin) {
    return <AdminLoginPage setIsAdmin={setIsAdmin} setCurrentPage={setCurrentPage} darkMode={darkMode} />;
  }

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} setCurrentPage={setCurrentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} darkMode={darkMode} />
      
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
