import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppChat from './components/WhatsAppChat.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import EquipmentPage from './pages/EquipmentPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Hash-based navigation support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'services', 'equipment', 'projects', 'contact'];
      if (validPages.includes(hash)) setActivePage(hash);
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page) => {
    setActivePage(page);
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (activePage) {
      case 'about': return <AboutPage onNavigate={navigate} />;
      case 'services': return <ServicesPage onNavigate={navigate} />;
      case 'equipment': return <EquipmentPage onNavigate={navigate} />;
      case 'projects': return <ProjectsPage onNavigate={navigate} />;
      case 'contact': return <ContactPage onNavigate={navigate} />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="page-wrap" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header activePage={activePage} onNavigate={navigate} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppChat />
    </div>
  );
}
