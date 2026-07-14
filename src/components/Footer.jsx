import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-stack-lg bg-surface border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto gap-stack-md">
        <div className="font-mono text-sm text-on-surface-variant">
          © 2026 Hesham Ali. Built with precision.
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
          <a href="mailto:hesham@example.com" className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
