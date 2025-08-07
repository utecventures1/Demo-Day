import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectType } from '../types';
import { ArrowLeftIcon, LinkedInIcon } from './Icons';
import PdfViewer from './PdfViewer';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); 
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === slug);

  // CAMBIO CLAVE: Hacemos que la navegación sea explícita a la ruta raíz.
  const handleBack = () => {
    navigate('/'); // En lugar de navigate(-1)
  };

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
        <h1 className="text-3xl font-bold">Proyecto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      <div>
        <button
          onClick={handleBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#C491FF] transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Volver a Proyectos
        </button>
      </div>

      <div className="bg-[#161B22] border border-gray-800 rounded-2xl shadow-lg overflow-hidden p-6 sm:p-8 lg:p-12">
        <div>
          {/* Header: Name and Logo */}
          {project.logoIncludesName ? (
            <div className="flex justify-start mb-8">
              <project.logo className="h-24 w-auto" aria-label={`${project.name} logo`} />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 sm:gap-8 mb-8">
              <div className="flex-grow">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-white">{project.name}</h1>
              </div>
              <project.logo className="h-24 w-24 flex-shrink-0" aria-label={`${project.name} logo`} />
            </div>
          )}


          {/* Content: Description and Features */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">{project.longDescription}</p>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-400">
                  <svg className="w-4 h-4 mr-3 mt-1 text-[#C491FF] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {project.extraParagraph && (
              <p className="mt-6 text-lg text-gray-300 leading-relaxed text-justify">
                {project.extraParagraph}
              </p>
            )}
          </div>
        </div>

        {/* Project Proposal PDF */}
        <div className="mt-10 mb-12">
          <h3 className="text-center text-2xl font-bold mb-8 bg-gradient-to-r from-[#fa4616] to-[#C491FF] bg-clip-text text-transparent">Propuesta del Proyecto</h3>
          <PdfViewer url={project.pdfUrl} />
        </div>
        
        {/* Action Button */}
        <div className="flex justify-center mb-12">
            <a
                href={project.calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs lg:max-w-md text-center px-6 py-3 lg:px-10 lg:py-4 border border-transparent text-base lg:text-xl font-semibold text-white bg-[#fa4616] rounded-lg hover:bg-[#e13d0f] transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa4616] focus:ring-offset-[#161B22]"
            >
                Agendar Intro
            </a>
        </div>


        {/* Founders */}
        <div className="border-t border-gray-700 pt-10 text-center">
            <h2 className="inline-block text-2xl font-bold mb-8 bg-gradient-to-r from-[#fa4616] to-[#C491FF] bg-clip-text text-transparent">Conoce a los Fundadores</h2>

            {/* Mobile and Tablet View */}
            <div className="flex flex-wrap justify-center gap-8 lg:hidden">
                {project.founders.map(founder => (
                    <div key={founder.name} className="w-72 overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group bg-[#1F2937]">
                        <div className="relative">
                            <img src={founder.imageUrl} alt={`Foto de ${founder.name}`} className="w-full h-64 object-cover" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <div className="text-white text-left">
                                    <h4 className="font-bold text-lg leading-tight">{founder.name}</h4>
                                    <p className="text-sm text-gray-400">{founder.title}</p>
                                </div>
                                <a href={founder.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md text-gray-300 hover:bg-white/10 hover:text-[#fa4616] transition-colors flex-shrink-0">
                                    <LinkedInIcon className="w-6 h-6"/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Desktop View */}
            <div className="hidden lg:flex flex-col gap-8">
              {project.founders.map(founder => (
                <div key={founder.name} className="bg-[#1F2937] rounded-xl flex items-stretch text-left transition-all duration-300 hover:shadow-2xl hover:bg-gray-800/60">
                  <img src={founder.imageUrl} alt={`Foto de ${founder.name}`} className="w-48 h-auto object-cover rounded-l-xl flex-shrink-0" />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{founder.name}</h4>
                        <p className="text-base text-gray-400">{founder.title}</p>
                      </div>
                      <a href={founder.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md text-gray-300 hover:bg-white/10 hover:text-[#fa4616] transition-colors flex-shrink-0">
                        <LinkedInIcon className="w-7 h-7"/>
                      </a>
                    </div>
                    <p className="mt-3 text-gray-300 text-sm flex-grow text-justify">
                      {founder.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;