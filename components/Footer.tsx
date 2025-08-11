import React from 'react';
import { LinkedInIcon, InstagramIcon, FacebookIcon } from './Icons';
import AnimatedElement from './AnimatedElement';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1117] text-white">
      <AnimatedElement>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Logo y Copyright */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src="/logo_white.svg" alt="UTEC Ventures Logo" className="h-12 w-auto" />
              <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
            </div>

            {/* Links a Redes Sociales (Actualizado) */}
            <div className="flex items-center space-x-6">
              <a href="https://www.linkedin.com/company/utecventures/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de UTEC Ventures" className="text-gray-400 hover:text-[#fa4616] transition-colors duration-300">
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/utecventures/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de UTEC Ventures" className="text-gray-400 hover:text-[#fa4616] transition-colors duration-300">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://web.facebook.com/utecventures" target="_blank" rel="noopener noreferrer" aria-label="Facebook de UTEC Ventures" className="text-gray-400 hover:text-[#fa4616] transition-colors duration-300">
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>

          </div>
        </div>
      </AnimatedElement>
    </footer>
  );
};

export default Footer;