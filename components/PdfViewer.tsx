import React from 'react';

interface PdfViewerProps {
  url: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ url }) => {
  return (
    <div className="w-full h-[75vh] max-h-[800px] bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
      <object data={url} type="application/pdf" width="100%" height="100%">
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
    </div>
  );
};

export default PdfViewer;
