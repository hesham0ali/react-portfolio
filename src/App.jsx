import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SelectedWorks from './components/SelectedWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import projectsData from './data/projects.json';

const CV_DOWNLOAD_URL = "/heshamCV.pdf"; 

export default function App() {
  const [currentView, setCurrentView] = useState('home'); 

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  const navigateToSection = (sectionId) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeProject = projectsData.find(p => p.id === currentView);

  return (
    <div className="mesh-bg min-h-screen text-on-surface bg-background flex flex-col font-sans select-text">
      
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        navigateToSection={navigateToSection} 
        cvDownloadUrl={CV_DOWNLOAD_URL}
      />

      <main className="flex-grow z-10 relative">
        {currentView === 'home' ? (
          <>
            <Hero navigateToSection={navigateToSection} />
            <Services />
            <SelectedWorks setCurrentView={setCurrentView} />
            <Contact cvDownloadUrl={CV_DOWNLOAD_URL} />
          </>
        ) : activeProject ? (
          <CaseStudy 
            project={activeProject} 
            setCurrentView={setCurrentView} 
            navigateToSection={navigateToSection} 
          />
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
