import React, { useState } from 'react';
import { Code, Mail, Terminal, Download, Menu, X } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, navigateToSection, cvDownloadUrl }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    setMobileMenuOpen(false);
    navigateToSection(sectionId);
  };

  return (
    <nav className="z-50 bg-background/30 backdrop-blur-xl fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-container-max rounded-full border border-white/10 shadow-sm hover:shadow-primary/10 transition-shadow">
      <div className="flex justify-between items-center px-8 py-3 w-full h-full">
        {/* Left: Logo */}
        <button 
          onClick={() => setCurrentView('home')} 
          className="flex-1 flex justify-start items-center gap-2 focus:outline-none"
        >
          <img src="/logo.svg" alt="Logo" className="h-8 md:h-12 w-auto" />
        </button>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex gap-gutter items-center">
            <button 
              onClick={() => handleNavigate('services')}
              className={`transition-colors text-sm font-medium hover:text-primary ${currentView === 'home' ? 'text-on-surface-variant' : 'text-on-surface-variant'}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigate('work')}
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
            >
              Work
            </button>
            <button 
              onClick={() => handleNavigate('contact')}
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Right: Desktop Actions */}
        <div className="flex-1 flex justify-end items-center gap-stack-md">
          <div className="hidden md:flex gap-stack-sm text-primary">
            <button 
              onClick={() => handleNavigate('contact')}
              className="hover:bg-white/5 p-2 rounded-full flex items-center justify-center transition-colors"
            >
              <Mail size={18} />
            </button>
            <button 
              onClick={() => handleNavigate('work')}
              className="hover:bg-white/5 p-2 rounded-full flex items-center justify-center transition-colors"
            >
              <Terminal size={18} />
            </button>
          </div>
          <a 
            href={cvDownloadUrl}
            download
            className="hidden md:inline-flex px-4 py-2 bg-white/5 border border-white/10 rounded-full text-primary hover:bg-white/10 transition-all font-mono text-xs uppercase items-center gap-2"
          >
            <Download size={14} />
            Download CV
          </a>
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-8 py-4 bg-background/95 backdrop-blur-2xl border-t border-white/10 rounded-b-3xl flex flex-col gap-4 animate-fadeIn">
          <button 
            onClick={() => handleNavigate('services')}
            className="text-left text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-white/5 w-full"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavigate('work')}
            className="text-left text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-white/5 w-full"
          >
            Work
          </button>
          <button 
            onClick={() => handleNavigate('contact')}
            className="text-left text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-white/5 w-full"
          >
            Contact
          </button>
          <a 
            href={cvDownloadUrl}
            download
            className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase py-2"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
