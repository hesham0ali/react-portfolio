import React from 'react';
import { ArrowLeft, Terminal, Server, Globe, Users, ArrowRight, Code2, Check, CheckCircle, Clock, Smartphone, Shield, Palette, ShoppingCart } from 'lucide-react';

const IconMap = {
  Terminal, Server, Globe, Users, Clock, Smartphone, Shield, Palette, ShoppingCart
};

export default function CaseStudy({ project, setCurrentView, navigateToSection }) {
  if (!project || !project.details) return null;

  const { details, theme } = project;
  const isPrimary = theme === 'primary';
  const BadgeIcon = IconMap[details.architecture?.[0]?.icon] || Terminal; // Fallback icon

  return (
    <div className="pt-[140px] pb-section-gap px-gutter max-w-4xl mx-auto animate-fade-in">
      {/* Back Navigation */}
      <button 
        onClick={() => setCurrentView('home')}
        className={`inline-flex items-center gap-2 font-mono text-xs uppercase transition-colors mb-8 ${isPrimary ? 'text-primary hover:text-primary-fixed-dim' : 'text-secondary hover:text-secondary-fixed-dim'}`}
      >
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </button>

      {/* Case Study Header */}
      <div className="space-y-6 mb-12">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${isPrimary ? 'border-primary/20 bg-primary/10' : 'border-secondary/20 bg-secondary/10'}`}>
          <BadgeIcon size={14} className={isPrimary ? 'text-primary' : 'text-secondary'} />
          <span className={`font-mono uppercase tracking-wider text-[10px] ${isPrimary ? 'text-primary' : 'text-secondary'}`}>Case Study</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-on-surface">
          {project.title} - <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{project.category}</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
          {details.headerDesc}
        </p>
      </div>

      {/* Case Study Image Banner */}
      <div className="h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden bg-surface-container-lowest border border-white/10 mb-12">
        <div 
          className="bg-cover bg-center w-full h-full opacity-80"
          style={{ backgroundImage: `url('${project.image}')` }}
        ></div>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl border border-white/5 bg-white/[0.02] mb-12 font-mono text-xs uppercase text-on-surface-variant">
        <div>
          <span className="text-primary block mb-1 font-semibold">Client</span>
          <span className="text-on-surface">{details.client}</span>
        </div>
        <div>
          <span className="text-secondary block mb-1 font-semibold">Role</span>
          <span className="text-on-surface">{details.role}</span>
        </div>
        <div>
          <span className="text-primary block mb-1 font-semibold">Timeline</span>
          <span className="text-on-surface">{details.timeline}</span>
        </div>
        <div>
          <span className="text-secondary block mb-1 font-semibold">Tech</span>
          <span className="text-on-surface">{project.techStack.slice(0, 3).join(', ')}</span>
        </div>
      </div>

      {/* Content body */}
      <div className="space-y-stack-lg text-on-surface-variant leading-relaxed">
        
        {/* The Problem */}
        {details.problem && details.problem.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
              <Server size={20} className={isPrimary ? 'text-primary' : 'text-secondary'} />
              <span>The Challenge</span>
            </h2>
            {details.problem.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        )}

        {/* The Solution */}
        {details.architecture && details.architecture.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
              <Globe size={20} className={isPrimary ? 'text-secondary' : 'text-primary'} />
              <span>The Architecture</span>
            </h2>
            <p>{details.architectureDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {details.architecture.map((arch, i) => {
                const ArchIcon = IconMap[arch.icon] || Globe;
                const isArchPrimary = arch.theme === 'primary';
                return (
                  <div key={i} className="glass-panel p-6 rounded-xl space-y-2">
                    <div className={`font-bold text-lg flex items-center gap-1.5 ${isArchPrimary ? 'text-primary' : 'text-secondary'}`}>
                      <ArchIcon size={16} /> {arch.title}
                    </div>
                    <p className="text-xs text-on-surface-variant">{arch.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Tech Architecture */}
        {details.technicalImplementation && details.technicalImplementation.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
              <Code2 size={20} className="text-primary" />
              <span>Technical Implementation</span>
            </h2>
            <ul className="space-y-2">
              {details.technicalImplementation.map((tech, i) => {
                const [label, ...descArr] = tech.split(': ');
                const desc = descArr.join(': ');
                return (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span><strong>{label}{desc ? ':' : ''}</strong> {desc}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Impact / Results */}
        {details.businessImpact && details.businessImpact.length > 0 && (
          <section className={`space-y-4 p-8 rounded-2xl border relative overflow-hidden ${isPrimary ? 'border-primary/20 bg-primary/[0.01]' : 'border-secondary/20 bg-secondary/[0.01]'}`}>
            <div className={`absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-40 h-40 blur-3xl rounded-full ${isPrimary ? 'bg-primary/10' : 'bg-secondary/10'}`}></div>
            <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2 relative z-10">
              <CheckCircle size={20} className={isPrimary ? 'text-primary' : 'text-secondary'} />
              <span>Business Impact</span>
            </h2>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {details.businessImpact.map((stat, i) => {
                const isStatPrimary = stat.theme === 'primary';
                return (
                  <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/5">
                    <div className={`text-3xl font-extrabold font-mono ${isStatPrimary ? 'text-primary' : 'text-secondary'}`}>{stat.value}</div>
                    <div className="text-xs text-on-surface-variant mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Detail CTA */}
        <div className="pt-6 flex gap-4">
          <button 
            onClick={() => navigateToSection('contact')}
            className={`text-background font-semibold transition-all px-8 py-4 rounded-lg flex items-center justify-center gap-2 ${isPrimary ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
          >
            Start Your Project
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
