import React from 'react';
import { Layers, Smartphone, ShoppingCart } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-section-gap max-w-container-max mx-auto px-gutter scroll-mt-24">
      <div className="mb-stack-lg">
        <h2 className="text-3xl font-bold text-on-surface mb-2">Technical Superpowers</h2>
        <div className="w-12 h-1 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Service 1 */}
        <div className="glass-panel rounded-xl p-8 flex flex-col group hover:-translate-y-1.5 transition-transform duration-300">
          <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary/10 transition-colors">
            <Layers size={24} />
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3">Custom CRMs & Automations</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Streamlining sales pipelines, Meta Leads API integrations, and automated Chatwoot/WhatsApp CRM infrastructure for optimized conversion funneling.
          </p>
        </div>

        {/* Service 2 */}
        <div className="glass-panel rounded-xl p-8 flex flex-col group hover:-translate-y-1.5 transition-transform duration-300">
          <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary/10 transition-colors">
            <Smartphone size={24} />
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3">Full-Stack Web & Mobile Apps</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Building native iOS & Android applications using React Native, backed by solid high-performance APIs engineered on Node.js.
          </p>
        </div>

        {/* Service 3 */}
        <div className="glass-panel rounded-xl p-8 flex flex-col group hover:-translate-y-1.5 transition-transform duration-300">
          <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary/10 transition-colors">
            <ShoppingCart size={24} />
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3">High-Converting E-commerce</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Customizing and optimizing Salla and Zid e-commerce platforms to drastically improve checkout rates, design appeal, and performance metrics.
          </p>
        </div>
      </div>
    </section>
  );
}
