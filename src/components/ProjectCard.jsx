import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, setCurrentView }) {
  const isPrimary = project.theme === 'primary';

  return (
    <div className={`glass-panel rounded-xl overflow-hidden group flex flex-col transition-all duration-300 ${isPrimary ? 'hover:border-primary/30' : 'hover:border-secondary/30'}`}>
      <div className="h-48 w-full relative overflow-hidden bg-surface-container-lowest cursor-pointer" onClick={() => setCurrentView(project.id)}>
        <div 
          className="bg-cover bg-center w-full h-full opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
          style={{ backgroundImage: `url('${project.image}')` }}
        ></div>
        <div className={`absolute top-4 left-4 border-l px-3 py-1 rounded-full font-mono text-[10px] uppercase backdrop-blur-md ${isPrimary ? 'bg-primary/10 border-primary text-primary' : 'bg-secondary/10 border-secondary text-secondary'}`}>
          {project.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 
          className="text-lg font-bold text-on-surface mb-2 cursor-pointer hover:text-primary transition-colors" 
          onClick={() => setCurrentView(project.id)}
        >
          {project.title}
        </h3>
        <p className="text-on-surface-variant text-sm mb-6 flex-grow">
          {project.tagline}
        </p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {project.techStack.map((tech, index) => (
            <span key={index} className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-on-surface-variant">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <button 
            onClick={() => setCurrentView(project.id)}
            className="inline-flex items-center gap-1.5 text-on-surface font-semibold text-sm hover:text-primary transition-colors group/btn"
          >
            View Case Study
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-primary font-mono uppercase text-xs hover:text-primary-fixed-dim transition-colors group/link"
            >
              Live Link 
              <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
