// src/components/pdfviewer.tsx

import React, { useRef } from 'react';

// --- Iconos para los botones (los incluimos aquí para que el componente sea autocontenido) ---
const ArrowDownIcon: React.FC<{className?: string}> = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;
const ArrowUpIcon: React.FC<{className?: string}> = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>;
const FullscreenIcon: React.FC<{className?: string}> = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg>;


interface PdfViewerProps {
  url: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ url }) => {
  // Usamos una ref para apuntar al contenedor principal para el modo de pantalla completa
  const viewerRef = useRef<HTMLDivElement>(null);
  
  // Ocultamos la interfaz del visor de PDF por defecto
  const modifiedUrl = `${url}#toolbar=0&navpanes=0&view=FitH`;

  // --- Funciones para los botones ---

  // Scroll suave hacia arriba
  const handleScrollUp = () => {
    // Hacemos scroll a la ventana principal, no al PDF directamente
    window.scrollBy({
      top: -window.innerHeight * 0.8, // Sube el 80% de la altura de la ventana
      behavior: 'smooth'
    });
  };

  // Scroll suave hacia abajo
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8, // Baja el 80% de la altura de la ventana
      behavior: 'smooth'
    });
  };
  
  // Activa el modo de pantalla completa
  const handleFullscreen = () => {
    if (viewerRef.current) {
      viewerRef.current.requestFullscreen().catch(err => {
        console.error(`Error al intentar entrar en pantalla completa: ${err.message}`);
      });
    }
  };

  return (
    // Añadimos la ref a nuestro contenedor principal
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

      {/* Controles de Navegación (sin lógica de 'disabled') */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={handleScrollUp}
          className="p-2 bg-black/50 text-white rounded-full backdrop-blur-sm hover:bg-black/80 transition-all"
          aria-label="Subir"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
        
        <button
          onClick={handleScrollDown}
          className="p-2 bg-black/50 text-white rounded-full backdrop-blur-sm hover:bg-black/80 transition-all"
          aria-label="Bajar"
        >
          <ArrowDownIcon className="w-5 h-5" />
        </button>
        
        <button
          onClick={handleFullscreen}
          className="p-2 mt-4 bg-black/50 text-white rounded-full backdrop-blur-sm hover:bg-black/80 transition-all"
          aria-label="Pantalla completa"
        >
          <FullscreenIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;