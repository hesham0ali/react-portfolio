import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function SelectedWorks({ setCurrentView }) {
  return (
    <section id="work" className="py-section-gap max-w-container-max mx-auto px-gutter scroll-mt-24">
      <div className="mb-stack-lg">
        <h2 className="text-3xl font-bold text-on-surface mb-2">Selected Works</h2>
        <div className="w-12 h-1 bg-secondary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Project 1 */}
        <div className="glass-panel rounded-xl overflow-hidden group flex flex-col hover:border-primary/30 transition-all duration-300">
          <div className="h-48 w-full relative overflow-hidden bg-surface-container-lowest">
            <div 
              className="bg-cover bg-center w-full h-full opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 cursor-pointer" 
              onClick={() => setCurrentView('moraqmen-crm')}
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGMqhmVA9TMyKUZMVVSpBRiVsfU7dHI_b7jxGidWtmydMRthGpMU4nYVTUI9hu5vgboJj9WYmsEUKN39n1vuawBnJvd3-NOy9QWKgviZ7ZLKUbaWtxRGbb9opO5a-z6QBvaTGsrZZOuFBPFtNCvzRR3L7Axmr9Z0cz7nK7kTyJktLCWfOao7MMy1OR37octwq-EEN6ndXqu2iziWB_MGev6pA1ViEDuZOGlVxCUGgFy3y86JeeaPrGXQ')` }}
            ></div>
            <div className="absolute top-4 left-4 bg-primary/10 border-l border-primary text-primary px-3 py-1 rounded-full font-mono text-[10px] uppercase backdrop-blur-md">
              CRM System
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 
              onClick={() => setCurrentView('moraqmen-crm')}
              className="text-lg font-bold text-on-surface mb-2 hover:text-primary cursor-pointer transition-colors"
            >
              Moraqmen CRM
            </h3>
            <p className="text-on-surface-variant text-sm mb-6 flex-grow">
              Custom automated WhatsApp CRM for lead management. Seamlessly routes meta ads leads directly to agent conversation lists.
            </p>
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-on-surface-variant">React</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-on-surface-variant">Node.js</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-on-surface-variant">WhatsApp API</span>
            </div>
            <button 
              onClick={() => setCurrentView('moraqmen-crm')}
              className="inline-flex items-center gap-1.5 text-primary font-mono uppercase text-xs hover:text-primary-fixed-dim transition-colors group/link mt-auto text-left"
            >
              Read Case Study
              <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="glass-panel rounded-xl overflow-hidden group flex flex-col hover:border-secondary/30 transition-all duration-300">
          <div className="h-48 w-full relative overflow-hidden bg-surface-container-lowest cursor-pointer" onClick={() => setCurrentView('mithaq')}>
            <div 
              className="bg-cover bg-center w-full h-full opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmqxBdhnb65qtrrIOPueB2fsW3VslMMgMFeXi-Al6nJffPHP_rXctRTNN4CIqmU50VKwGVxL53XVsrLqp2gKg0-DR5uM9-D_4bCDN-Ak_BROw0NL5MFHpdQiQxZJ6-wLAs7uQfhF-CJ1PENPV2nrS9LRsWv3Wzd1r_HZDOLS6wRuH7lBeLZnmrU_sCftd5qgAQOsWu5giMGtyp0N-Y52URYLxEDqNOXtcb-jqTgqhk2T_osklP8H5cTQ')` }}
            ></div>
            <div className="absolute top-4 left-4 bg-secondary/10 border-l border-secondary text-secondary px-3 py-1 rounded-full font-mono text-[10px] uppercase backdrop-blur-md">
              Mobile App
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-on-surface mb-2 cursor-pointer hover:text-primary transition-colors" onClick={() => setCurrentView('mithaq')}>Mithaq Life</h3>
            <p className="text-on-surface-variant text-sm mb-6 flex-grow">
              Matchmaking application designed with React Native for high-performance mobile UX, utilizing a secure WordPress custom backend.
            </p>
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-on-surface-variant">React Native</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-on-surface-variant">WordPress</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-on-surface-variant">PHP</span>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <button 
                onClick={() => setCurrentView('mithaq')}
                className="inline-flex items-center gap-1.5 text-on-surface font-semibold text-sm hover:text-primary transition-colors group/btn"
              >
                View Case Study
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://mithaq.life" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-primary font-mono uppercase text-xs hover:text-primary-fixed-dim transition-colors group/link"
              >
                Live Link 
                <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="glass-panel rounded-xl overflow-hidden group flex flex-col hover:border-primary/30 transition-all duration-300">
          <div className="h-48 w-full relative overflow-hidden bg-surface-container-lowest cursor-pointer" onClick={() => setCurrentView('sho9')}>
            <div 
              className="bg-cover bg-center w-full h-full opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZ2J32hsQ4JGiQr_slU6mbHAgbwMjVHRUEqGleQu87JpAcU6uPDMOmk0Ak4yU37653yTiKRz1G2dtnYNK3ygw7Ni5p0Px0-khsTSatqqwcCwkZam9hfSRMXy7Je_PSzt6JMtXR4brTkmRAX9t8gZrsSnnjOd2MKCB0ueIcn_Bw_YGc1Na3dFPf0Tk29BYAzV0mCYmTiKvvQFs3n4sJ6hrpjII0TauCAJwF6abDc3RI6sXW8pu2oZEfgg')` }}
            ></div>
            <div className="absolute top-4 left-4 bg-primary/10 border-l border-primary text-primary px-3 py-1 rounded-full font-mono text-[10px] uppercase backdrop-blur-md">
              E-Commerce
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-on-surface mb-2 cursor-pointer hover:text-primary transition-colors" onClick={() => setCurrentView('sho9')}>Sho9 Salla Store</h3>
            <p className="text-on-surface-variant text-sm mb-6 flex-grow">
              Highly customized e-commerce Salla store optimized for speed, visual appeal, and smooth checkouts to scale up store sales.
            </p>
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-on-surface-variant">Salla Custom CSS</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-on-surface-variant">JavaScript</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-on-surface-variant">E-commerce UX</span>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <button 
                onClick={() => setCurrentView('sho9')}
                className="inline-flex items-center gap-1.5 text-on-surface font-semibold text-sm hover:text-primary transition-colors group/btn"
              >
                View Case Study
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://sho9.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-primary font-mono uppercase text-xs hover:text-primary-fixed-dim transition-colors group/link"
              >
                Live Link 
                <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
