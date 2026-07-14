import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

export default function SelectedWorks({ setCurrentView }) {
  return (
    <section id="work" className="py-section-gap max-w-container-max mx-auto px-gutter scroll-mt-24">
      <div className="mb-stack-lg">
        <h2 className="text-3xl font-bold text-on-surface mb-2">Selected Works</h2>
        <div className="w-12 h-1 bg-secondary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            setCurrentView={setCurrentView} 
          />
        ))}
      </div>
    </section>
  );
}
