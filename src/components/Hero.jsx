import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ navigateToSection }) {
  return (
    <section className="pt-[160px] pb-stack-lg px-gutter max-w-container-max mx-auto flex flex-col items-center justify-center min-h-[85vh] text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 mb-6 animate-pulse">
        <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_#00d8f6]"></span>
        <span className="font-mono text-primary uppercase tracking-wider text-xs font-semibold">Available for Work</span>
      </div>

      <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-on-surface max-w-[900px] leading-tight mb-stack-md">
        I build custom software that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">grows your business.</span> <br />
        <span className="text-on-surface-variant font-normal">No generic templates.</span>
      </h1>

      <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-[700px] mb-stack-lg leading-relaxed">
        Full-Stack Developer specializing in custom WhatsApp CRMs, high-performing Salla/Zid stores, and complex React Native apps. Engineered for speed, scale, and conversion.
      </p>

      <div className="flex flex-col sm:flex-row gap-stack-md mt-stack-md w-full sm:w-auto px-4 justify-center">
        <button 
          onClick={() => navigateToSection('contact')}
          className="bg-primary text-background font-mono uppercase tracking-wider text-sm font-bold glow-btn-primary px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          Start Your Project
          <ArrowRight size={18} />
        </button>
        <button 
          onClick={() => navigateToSection('work')}
          className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-on-surface px-8 py-4 rounded-lg font-mono uppercase tracking-wider text-sm transition-all flex items-center justify-center"
        >
          View Live Works
        </button>
      </div>

      {/* Quick Info Badges */}
      <div className="mt-20 flex flex-wrap justify-center gap-stack-md px-4">
        <div className="glass-panel rounded-full px-6 py-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#00d8f6]"></span>
          <span className="font-mono text-xs uppercase text-on-surface-variant">100% Live Projects</span>
        </div>
        <div className="glass-panel rounded-full px-6 py-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#8b5cf6]"></span>
          <span className="font-mono text-xs uppercase text-on-surface-variant">Custom CRM Expert</span>
        </div>
        <div className="glass-panel rounded-full px-6 py-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_8px_#00d8f6]"></span>
          <span className="font-mono text-xs uppercase text-on-surface-variant">Salla & Zid Specialist</span>
        </div>
      </div>
    </section>
  );
}
