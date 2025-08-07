import React from 'react';
// 1. Importa el componente 'Link' desde la librería react-scroll
import { Link } from 'react-scroll';

// Importa tus otros componentes como de costumbre
import BackgroundGrid from './BackgroundGrid';
import AnimatedElement from './AnimatedElement';

const Hero: React.FC = () => {
  // No necesitamos ninguna función de JavaScript aquí, la librería se encarga de todo.

  return (
    <section 
      className="relative overflow-hidden bg-[#0D1117] flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-44 lg:pb-40"
      aria-label="Sección de bienvenida"
    >
      <BackgroundGrid />
      
      {/* New Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fa4616]/25 via-[#330072]/40 to-transparent"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedElement>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight text-white">
            <span className="bg-gradient-to-r from-[#fa4616] to-[#330072] bg-clip-text text-transparent">
              Demo Week 14G
            </span>
          </h1>
        </AnimatedElement>

        <AnimatedElement delay={150}>
          <p className="mt-8 max-w-5xl mx-auto text-xl sm:text-2xl lg:text-3xl text-gray-300">
            Explore the new investments from Utec Ventures acceleration program
          </p>
        </AnimatedElement>

        <AnimatedElement delay={300}>
          <div className="mt-12">
              {/* 
                2. Reemplazamos la etiqueta <a> por el componente <Link>.
                   Las propiedades clave son:
                   - to: El 'id' del elemento al que queremos desplazarnos (sin el #).
                   - smooth: true, para activar la animación suave.
                   - duration: El tiempo que dura la animación en milisegundos. 500ms es un buen valor.
                   - offset: El ajuste en píxeles. -100 para compensar un navbar de 80px + 20px extra de espacio.
              */}
              <Link
                to="projects" 
                smooth={true}
                duration={500}
                offset={-100}
                className="inline-block bg-[#fa4616] text-white font-semibold px-10 py-4 text-lg lg:px-12 lg:py-5 lg:text-xl rounded-lg shadow-lg hover:bg-[#fa4616] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa4616] focus:ring-offset-[#fa4616] cursor-pointer"
              >
                  See Investments
              </Link>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;