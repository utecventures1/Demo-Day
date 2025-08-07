import React from 'react';
import BackgroundGrid from './BackgroundGrid';
import AnimatedElement from './AnimatedElement';

const Hero: React.FC = () => {
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
            <span className="bg-gradient-to-r from-[#fa4616] to-[#C491FF] bg-clip-text text-transparent">
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
              <a
                href="#projects"
                className="inline-block bg-[#330072] text-white font-semibold px-10 py-4 text-lg lg:px-12 lg:py-5 lg:text-xl rounded-lg shadow-lg hover:bg-[#612ab7] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#330072] focus:ring-offset-[#0D1117]"
              >
                  See Investments
              </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;