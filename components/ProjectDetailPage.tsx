import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectType } from '../types';
import { ArrowLeftIcon, LinkedInIcon } from './Icons';
import VideoPlayer from '../components/videoplayer';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); 
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === slug);

  const handleBack = () => {
    navigate('/');
  };

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      <div className="md:w-5/6 lg:w-5/6 mx-auto">
      
        <div>
          <button
            onClick={handleBack}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#fa4616] transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Return to Projects
          </button>
        </div>

        <div className="bg-[#161B22] border border-gray-800 rounded-2xl shadow-lg overflow-hidden p-6 md:p-12 lg:p-16">
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
                    <svg className="w-4 h-4 mr-3 mt-1 text-[#fa4616] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
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

          {/* Renderizado condicional: solo muestra esta sección si el proyecto tiene una URL de video */}
          {project.videoEmbedUrl && (
            <div className="mt-10 mb-12">
              <VideoPlayer embedUrl={project.videoEmbedUrl} title={`Presentación de ${project.name}`} />
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 mb-12">
              <a
                  href={project.calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-semibold text-white bg-[#fa4616] rounded-lg hover:bg-[#e13d0f] transition-all shadow-md"
              >
                  Schedule Intro
              </a>
              <a
                  href={project.pdfUrl} // Apunta a la URL del PDF del proyecto
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 border border-gray-400 text-base font-semibold text-gray-300 bg-transparent rounded-lg hover:bg-gray-800 hover:text-white transition-all"
              >
                   Deck
              </a>
          </div>


          {/* 
            --- CAMBIO 3: NUEVO LAYOUT FLEXIBLE PARA FUNDADORES ---
            - Eliminamos la distinción entre 'lg:hidden' y 'hidden lg:flex'.
            - Usamos un único contenedor con `flex-wrap` para que las tarjetas se ajusten solas.
          */}
          <div className="border-t border-gray-700 pt-10 text-center">
              <h2 className="inline-block text-2xl font-bold mb-8 bg-gradient-to-r from-[#fa4616] to-[#330072] bg-clip-text text-transparent">Meet the Founders</h2>

              <div className="flex flex-wrap justify-center gap-8">
                  {project.founders.map(founder => (
                      <div key={founder.name} className="w-full max-w-xs sm:w-72 overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group bg-[#1F2937]">
                          <div className="relative">
                              <img src={founder.imageUrl} alt={`Foto de ${founder.name}`} className="w-full h-64 object-cover object-top" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;