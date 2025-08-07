import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectType } from '../types';
import { UsersIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isImageRight = index % 2 !== 0;
  const projectSlug = project.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div 
      className={`
        bg-[#161B22] border border-gray-800 rounded-xl overflow-hidden
        flex flex-col ${isImageRight ? 'md:flex-row-reverse' : 'md:flex-row'}
        transition-all duration-300 hover:bg-[#1F2937] 
        hover:border-[#fa4616] /* <-- CAMBIO 3: Borde en hover ahora es naranja */
      `}
    >
      {/* Sección de la Imagen */}
      <div className="w-full md:w-1/4 h-48 md:h-auto flex-shrink-0">
        <img src={project.imageUrl} alt={`Visual representation of ${project.name}`} className="w-full h-full object-cover" />
      </div>

      {/* Sección del Contenido */}
      <div className="p-6 flex flex-col flex-grow w-full md:w-3/4">
        
        <div className="w-full">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          {/* CAMBIO 2: El color del subtítulo ahora es naranja */ }
          <p className="text-sm font-semibold text-[#fa4616] uppercase tracking-wide">{project.category}</p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 flex-grow">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex items-center text-sm text-gray-400">
            <UsersIcon className="h-5 w-5 mr-2 text-gray-500" />
            <span>Team of {project.teamSize} members</span>
          </div>
        </div>
        
        {/* Acciones */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full">
          <a
            href={project.calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 text-center px-5 py-2.5 border border-[#fa4616] text-sm font-semibold text-[#fa4616] rounded-lg hover:bg-[#fa4616] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa4616] focus:ring-offset-[#161B22] transition-all"
          >
            Intro
          </a>
          
          {/* CAMBIO 1: Nuevo estilo para el botón "Más Información" */ }
          <Link
            to={`/proyecto/${projectSlug}`}
            className="w-full sm:w-auto flex-1 text-center px-5 py-2.5 border border-gray-400 text-sm font-semibold bg-white text-[#161B22] rounded-lg hover:bg-[#fa4616] hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa4616] focus:ring-offset-[#161B22] transition-all"
          >
            More Information
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard