import React from 'react';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';

export default function Sho9CaseStudy({ setCurrentView, navigateToSection }) {
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
          <div className="inline-flex text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
            E-Commerce UX
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface">Sho9 Salla Store</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl">
            A high-converting, visually striking Salla e-commerce store with fully customized styling and an optimized user flow.
          </p>
        </header>

        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 bg-surface-container relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZ2J32hsQ4JGiQr_slU6mbHAgbwMjVHRUEqGleQu87JpAcU6uPDMOmk0Ak4yU37653yTiKRz1G2dtnYNK3ygw7Ni5p0Px0-khsTSatqqwcCwkZam9hfSRMXy7Je_PSzt6JMtXR4brTkmRAX9t8gZrsSnnjOd2MKCB0ueIcn_Bw_YGc1Na3dFPf0Tk29BYAzV0mCYmTiKvvQFs3n4sJ6hrpjII0TauCAJwF6abDc3RI6sXW8pu2oZEfgg')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <CheckCircle size={20} className="text-primary" />
            <span>Key Optimizations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl space-y-2">
              <div className="text-primary font-bold text-lg">Custom Salla CSS</div>
              <p className="text-xs text-on-surface-variant">Overhauled the default theme to align with brand identity, ensuring a premium feel.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-2">
              <div className="text-primary font-bold text-lg">Checkout Flow</div>
              <p className="text-xs text-on-surface-variant">Streamlined the purchasing process, reducing cart abandonment and increasing conversion rates.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-2">
              <div className="text-primary font-bold text-lg">Mobile First</div>
              <p className="text-xs text-on-surface-variant">Rigorous testing across mobile devices to ensure tap targets and layouts are flawless.</p>
            </div>
          </div>
        </section>

        <div className="pt-6 flex gap-4">
          <button 
            onClick={() => navigateToSection('contact')}
            className="bg-primary text-background font-semibold hover:bg-primary/90 transition-all px-8 py-4 rounded-lg flex items-center justify-center gap-2"
          >
            Enhance Your Store
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
