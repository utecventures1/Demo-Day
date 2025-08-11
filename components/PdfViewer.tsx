// src/components/pdfviewer.tsx

import React, { useState, useEffect, useRef } from 'react';

// --- Iconos para los botones ---
const FullscreenIcon: React.FC<{className?: string}> = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg>;
// ¡Icono corregido y mejorado!
const ExitFullscreenIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor" // Hereda el color del texto (ej. text-white)
    stroke="none"
  >
    <g transform="translate(0, 512) scale(0.1, -0.1)">
      <path d="M732 4463 c-66 -32 -101 -105 -87 -180 6 -33 60 -91 448 -480 l441 -443 -304 0 c-280 0 -308 -2 -348 -20 -108 -49 -108 -231 0 -280 41 -19 69 -20 558 -20 489 0 517 1 558 20 33 15 47 29 62 62 19 41 20 69 20 558 0 489 -1 517 -20 558 -15 33 -29 47 -62 62 -88 40 -184 12 -218 -62 -18 -40 -20 -68 -20 -348 l0 -305 -437 437 c-241 240 -451 442 -466 447 -40 15 -87 13 -125 -6z" />
      <path d="M4255 4464 c-16 -8 -225 -209 -462 -447 l-433 -432 0 305 c0 280 -2 308 -20 348 -49 108 -231 108 -280 0 -19 -41 -20 -69 -20 -558 0 -489 1 -517 20 -558 15 -33 29 -47 62 -62 41 -19 69 -20 558 -20 489 0 517 1 558 20 108 49 108 231 0 280 -40 18 -68 20 -348 20 l-304 0 441 443 c475 475 466 465 449 549 -19 96 -136 156 -221 112z" />
      <path d="M882 2060 c-108 -49 -108 -231 0 -280 40 -18 68 -20 348 -20 l304 0 -441 -442 c-477 -479 -465 -464 -449 -554 9 -47 73 -111 120 -120 90 -16 75 -28 554 449 l442 441 0 -304 c0 -280 2 -308 20 -348 49 -108 231 -108 280 0 19 41 20 69 20 558 0 489 -1 517 -20 558 -15 33 -29 47 -62 62 -41 19 -69 20 -558 20 -489 0 -517 -1 -558 -20z" />
      <path d="M3122 2060 c-33 -15 -47 -29 -62 -62 -19 -41 -20 -69 -20 -558 0 -489 1 -517 20 -558 34 -74 130 -102 218 -62 33 15 47 29 62 62 18 40 20 68 20 348 l0 304 443 -441 c478 -477 463 -465 553 -449 47 9 111 73 120 120 16 90 28 75 -449 554 l-441 442 304 0 c280 0 308 2 348 20 108 49 108 231 0 280 -41 19 -69 20 -558 20 -489 0 -517 -1 -558 -20z" />
    </g>
  </svg>
);



interface PdfViewerProps {
  url: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ url }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const modifiedUrl = `${url}#toolbar=0&navpanes=0&view=FitH`;

  // Función para manejar el cambio entre pantalla completa y normal
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error al intentar entrar en pantalla completa: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch(err => {
        console.error(`Error al intentar salir de pantalla completa: ${err.message}`);
      });
    }
  };

  // Efecto para sincronizar el estado 'isFullscreen' con el estado real del navegador
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Limpiamos el listener cuando el componente se desmonta para evitar fugas de memoria
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div ref={viewerRef} className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
      
      <object data={modifiedUrl} type="application/pdf" width="100%" height="100%">
        <div className="flex flex-col items-center justify-center h-full text-white p-4 text-center">
          <p className="mb-4">Parece que tu navegador no puede mostrar este PDF.</p>
          <a 
            href={url} 
            download
            className="px-5 py-2.5 bg-[#fa4616] text-white font-semibold rounded-lg hover:bg-[#e13d0f] transition-all"
          >
            Descargar PDF
          </a>
        </div>
      </object>

      {/* Controles de Navegación con lógica de toggle */}
      <div className="absolute top-4 right-6 flex flex-col gap-2">
        <button
          onClick={handleToggleFullscreen}
          className="p-2 bg-black/50 text-white rounded-full backdrop-blur-sm hover:bg-black/80 transition-all"
          aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
        >
          {isFullscreen ? (
            <ExitFullscreenIcon className="w-5 h-5" />
          ) : (
            <FullscreenIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;