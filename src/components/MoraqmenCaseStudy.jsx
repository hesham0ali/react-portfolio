import React from 'react';
import { ArrowLeft, Terminal, Server, Globe, Users, ArrowRight, Code2, Check, CheckCircle, Clock } from 'lucide-react';

export default function MoraqmenCaseStudy({ setCurrentView, navigateToSection }) {
  return (
    <div className="pt-[140px] pb-section-gap px-gutter max-w-4xl mx-auto">
      {/* Back Navigation */}
      <button 
        onClick={() => setCurrentView('home')}
        className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase hover:text-primary-fixed-dim transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </button>

      {/* Case Study Header */}
      <div className="space-y-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10">
          <Terminal size={14} className="text-primary" />
          <span className="font-mono text-primary uppercase tracking-wider text-[10px]">Case Study</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-on-surface">
          Moraqmen CRM - <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Custom WhatsApp CRM</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
          How we automated lead routing and cut client response time by 99% using Meta Webhooks and WhatsApp Cloud API integration.
        </p>
      </div>

      {/* Case Study Image Banner */}
      <div className="h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden bg-surface-container-lowest border border-white/10 mb-12">
        <div 
          className="bg-cover bg-center w-full h-full opacity-80"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGMqhmVA9TMyKUZMVVSpBRiVsfU7dHI_b7jxGidWtmydMRthGpMU4nYVTUI9hu5vgboJj9WYmsEUKN39n1vuawBnJvd3-NOy9QWKgviZ7ZLKUbaWtxRGbb9opO5a-z6QBvaTGsrZZOuFBPFtNCvzRR3L7Axmr9Z0cz7nK7kTyJktLCWfOao7MMy1OR37octwq-EEN6ndXqu2iziWB_MGev6pA1ViEDuZOGlVxCUGgFy3y86JeeaPrGXQ')` }}
        ></div>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl border border-white/5 bg-white/[0.02] mb-12 font-mono text-xs uppercase text-on-surface-variant">
        <div>
          <span className="text-primary block mb-1 font-semibold">Client</span>
          <span className="text-on-surface">Moraqmen CRM</span>
        </div>
        <div>
          <span className="text-secondary block mb-1 font-semibold">Role</span>
          <span className="text-on-surface">Full-Stack Lead</span>
        </div>
        <div>
          <span className="text-primary block mb-1 font-semibold">Timeline</span>
          <span className="text-on-surface">3 Months</span>
        </div>
        <div>
          <span className="text-secondary block mb-1 font-semibold">Tech</span>
          <span className="text-on-surface">React, Node, PostgreSQL</span>
        </div>
      </div>

      {/* Content body */}
      <div className="space-y-stack-lg text-on-surface-variant leading-relaxed">
        
        {/* The Problem */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <Server size={20} className="text-primary" />
            <span>The Challenge</span>
          </h2>
          <p>
            Moraqmen's sales team was drowning in manual data entry. Every time a new lead submitted a form via Meta Ads (Facebook/Instagram), an agent had to manually copy the lead's phone number, save it to their phone, and initiate a WhatsApp conversation. 
          </p>
          <p>
            This manual process took an average of 4-6 hours per lead, drastically reducing conversion rates as leads went cold. They needed a system to capture leads instantly and connect them with available sales agents immediately via WhatsApp.
          </p>
        </section>

        {/* The Solution */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <Globe size={20} className="text-secondary" />
            <span>The Architecture</span>
          </h2>
          <p>
            I architected a custom CRM middleware that sits directly between Meta's infrastructure and the client's sales team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="glass-panel p-6 rounded-xl space-y-2">
              <div className="text-primary font-bold text-lg flex items-center gap-1.5">
                <Terminal size={16} /> 01. Webhook Intake
              </div>
              <p className="text-xs text-on-surface-variant">
                A highly available Node.js endpoint securely receives and verifies instant webhook payloads from Meta Lead Ads.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-2">
              <div className="text-secondary font-bold text-lg flex items-center gap-1.5">
                <Users size={16} /> 02. WhatsApp Cloud
              </div>
              <p className="text-xs text-on-surface-variant">
                Integration with WhatsApp Business API automatically sends a personalized greeting template to the lead within seconds.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-2">
              <div className="text-primary font-bold text-lg flex items-center gap-1.5">
                <Clock size={16} /> 03. Agent Routing
              </div>
              <p className="text-xs text-on-surface-variant">
                Smart agent assignment algorithms route active incoming conversations to logged-in agents' dashboards immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Architecture */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <Code2 size={20} className="text-primary" />
            <span>Technical Implementation</span>
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check size={16} className="text-primary mt-1 flex-shrink-0" />
              <span><strong>Frontend:</strong> Clean single-page admin panel built with React, styled with Tailwind CSS, and optimized for quick updates.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-primary mt-1 flex-shrink-0" />
              <span><strong>Backend:</strong> Node.js Express server handling incoming webhooks from Meta, validating payload hashes, and routing data.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-primary mt-1 flex-shrink-0" />
              <span><strong>Database:</strong> PostgreSQL with relational models to track agent load, leads status, and template statistics.</span>
            </li>
          </ul>
        </section>

        {/* Impact / Results */}
        <section className="space-y-4 p-8 rounded-2xl border border-primary/20 bg-primary/[0.01] relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <CheckCircle size={20} className="text-primary" />
            <span>Business Impact</span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
              <div className="text-3xl font-extrabold text-primary font-mono">&lt; 2 Min</div>
              <div className="text-xs text-on-surface-variant mt-1 uppercase tracking-wider">Average response time</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
              <div className="text-3xl font-extrabold text-secondary font-mono">+ 35%</div>
              <div className="text-xs text-on-surface-variant mt-1 uppercase tracking-wider">Lead engagement rate</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
              <div className="text-3xl font-extrabold text-primary font-mono">100%</div>
              <div className="text-xs text-on-surface-variant mt-1 uppercase tracking-wider">Lead allocation automated</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
              <div className="text-3xl font-extrabold text-secondary font-mono">Zero</div>
              <div className="text-xs text-on-surface-variant mt-1 uppercase tracking-wider">Leads lost or missed</div>
            </div>
          </div>
        </section>

        {/* Detail CTA */}
        <div className="pt-6 flex gap-4">
          <button 
            onClick={() => navigateToSection('contact')}
            className="bg-primary text-background font-semibold hover:bg-primary/90 transition-all px-8 py-4 rounded-lg flex items-center justify-center gap-2"
          >
            Start Your Automation Project
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
