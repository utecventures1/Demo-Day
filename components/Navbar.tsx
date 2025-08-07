import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link

// Ya no necesita la prop onGoHome
const Navbar: React.FC = () => {
  return (
    <header className="bg-[#0D1117]/80 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {/* Convertimos la etiqueta <a> en un <Link> */}
            <Link to="/" aria-label="Volver a la página de inicio">
              <img src="/logo_white.svg" alt="UTEC Ventures Logo" className="h-12 w-auto" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;