// projectsection.tsx

import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import AnimatedElement from './AnimatedElement';

const ProjectsSection: React.FC = () => {
  return (
    // ¡AQUÍ ESTÁ EL CAMBIO!
    // Añadimos 'scroll-mt-24' para compensar la altura del Navbar (h-20) y añadir un extra.
    <section 
      id="projects" 
      className="pt-8 sm:pt-12 pb-16 sm:pb-20 lg:pb-24 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
        {PROJECTS.map((project, index) => (
          <AnimatedElement key={project.id} delay={index * 150}>
            <ProjectCard project={project} index={index} />
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;