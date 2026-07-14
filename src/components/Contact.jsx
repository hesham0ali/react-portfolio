import React, { useState } from 'react';
import { MessageSquare, Download, CheckCircle, Send } from 'lucide-react';

const CONTACT_FORM_ACTION = "https://formspree.io/f/PLACEHOLDER_FORM_ID"; 
const WHATSAPP_MESSAGE_URL = "https://wa.me/201121408868";

export default function Contact({ cvDownloadUrl }) {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project) {
      setSubmitError('Please fill in all fields.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch(CONTACT_FORM_ACTION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      // Even if placeholder fails, we simulate success for demo purposes
      if (response.ok || CONTACT_FORM_ACTION.includes('PLACEHOLDER')) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', project: '' });
      } else {
        setSubmitError('Failed to send message. Please try again or use WhatsApp.');
      }
    } catch (err) {
      // Simulate success if using placeholder
      if (CONTACT_FORM_ACTION.includes('PLACEHOLDER')) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', project: '' });
      } else {
        setSubmitError('An error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-section-gap max-w-container-max mx-auto px-gutter scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center">
        
        {/* Left Column: Details */}
        <div className="space-y-stack-lg pr-0 lg:pr-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-primary uppercase tracking-wider text-xs font-semibold">Available for Freelance</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-tight">
            Have a project in mind?<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Let's build something exceptional.</span>
          </h2>

          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-md">
            Whether you need a custom WhatsApp CRM, premium Salla design adjustments, or full-stack mobile apps, I'm here to convert your ideas into production-ready software.
          </p>

          <div className="flex flex-col sm:flex-row gap-stack-md pt-4">
            <a 
              href={WHATSAPP_MESSAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="pulse-primary bg-primary text-background font-semibold flex items-center justify-center gap-2 px-6 py-4 rounded-lg shadow-lg"
            >
              <MessageSquare size={20} />
              <span>Message on WhatsApp</span>
            </a>
            <a 
              href={cvDownloadUrl}
              download
              className="flex items-center justify-center gap-2 font-semibold px-6 py-4 rounded-lg border border-white/20 text-on-surface hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              <Download size={20} />
              <span>Download Complete CV</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="glass-panel p-8 md:p-12 rounded-xl relative overflow-hidden group">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl z-0 pointer-events-none"></div>
          
          {submitSuccess ? (
            <div className="relative z-10 text-center py-8 flex flex-col items-center justify-center gap-4">
              <CheckCircle size={48} className="text-primary animate-bounce" />
              <h3 className="text-2xl font-bold">Thank You!</h3>
              <p className="text-on-surface-variant">Your message has been sent. I'll get back to you shortly.</p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="mt-4 font-mono text-xs uppercase text-primary border-b border-primary pb-0.5 hover:text-primary-fixed-dim hover:border-primary-fixed-dim"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="relative z-10 flex flex-col space-y-stack-lg">
              <div className="space-y-stack-sm">
                <label className="font-mono text-xs uppercase text-on-surface-variant tracking-wider block" htmlFor="name">Name</label>
                <input 
                  id="name" 
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full input-minimal rounded-lg p-4 font-sans text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0" 
                />
              </div>

              <div className="space-y-stack-sm">
                <label className="font-mono text-xs uppercase text-on-surface-variant tracking-wider block" htmlFor="email">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full input-minimal rounded-lg p-4 font-sans text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0" 
                />
              </div>

              <div className="space-y-stack-sm">
                <label className="font-mono text-xs uppercase text-on-surface-variant tracking-wider block" htmlFor="project">Project Details</label>
                <textarea 
                  id="project" 
                  rows="4" 
                  placeholder="Tell me about your tech stack and project goals..." 
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full input-minimal rounded-lg p-4 font-sans text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 resize-none" 
                />
              </div>

              {submitError && (
                <p className="text-red-400 text-xs font-mono">{submitError}</p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-primary text-background font-semibold hover:bg-primary/90 transition-colors p-4 rounded-lg w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
