import React from 'react';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';

export default function MithaqCaseStudy({ setCurrentView, navigateToSection }) {
  return (
    <div className="pt-section-gap pb-section-gap px-gutter max-w-container-max mx-auto animate-fade-in">
      <button 
        onClick={() => setCurrentView('home')}
        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-mono text-sm uppercase tracking-wider">Back to Home</span>
      </button>

      <div className="space-y-stack-md">
        <header className="space-y-4">
          <div className="inline-flex text-xs font-mono px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
            Mobile Application
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface">Mithaq Life</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl">
            A modern, high-performance matchmaking app built with React Native for seamless user experiences, backed by a robust WordPress architecture.
          </p>
        </header>

        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 bg-surface-container relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmqxBdhnb65qtrrIOPueB2fsW3VslMMgMFeXi-Al6nJffPHP_rXctRTNN4CIqmU50VKwGVxL53XVsrLqp2gKg0-DR5uM9-D_4bCDN-Ak_BROw0NL5MFHpdQiQxZJ6-wLAs7uQfhF-CJ1PENPV2nrS9LRsWv3Wzd1r_HZDOLS6wRuH7lBeLZnmrU_sCftd5qgAQOsWu5giMGtyp0N-Y52URYLxEDqNOXtcb-jqTgqhk2T_osklP8H5cTQ')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <CheckCircle size={20} className="text-secondary" />
            <span>Project Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl space-y-2">
              <div className="text-secondary font-bold text-lg">React Native Performance</div>
              <p className="text-xs text-on-surface-variant">Built for smooth animations and instant feedback across both iOS and Android platforms.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-2">
              <div className="text-secondary font-bold text-lg">WordPress Backend</div>
              <p className="text-xs text-on-surface-variant">Leveraging a heavily customized WordPress REST API for content management and user authentication.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-2">
              <div className="text-secondary font-bold text-lg">Secure Matchmaking</div>
              <p className="text-xs text-on-surface-variant">Implemented strict privacy controls and data handling to ensure a safe matchmaking environment.</p>
            </div>
          </div>
        </section>

        <div className="pt-6 flex gap-4">
          <button 
            onClick={() => navigateToSection('contact')}
            className="bg-secondary text-background font-semibold hover:bg-secondary/90 transition-all px-8 py-4 rounded-lg flex items-center justify-center gap-2"
          >
            Start Your Mobile Project
            <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => setCurrentView('home')}
            className="border border-white/20 hover:border-white/40 text-on-surface px-8 py-4 rounded-lg transition-all"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
