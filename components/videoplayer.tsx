import React from 'react';
interface VideoPlayerProps {
// Aceptará la URL 'embed' del video (ej. de YouTube o Vimeo)
embedUrl: string;
title?: string; // Título para accesibilidad
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ embedUrl, title = 'Video de presentación del proyecto' }) => {
// Si no se proporciona una URL, no renderizamos nada.
if (!embedUrl) {
return null;
}
return (
// Mantenemos el mismo contenedor para que las dimensiones sean idénticas
<div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
<iframe
className="absolute top-0 left-0 w-full h-full"
src={embedUrl}
title={title}
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowFullScreen // Permite que el botón de pantalla completa del video funcione
></iframe>
</div>
);
};
export default VideoPlayer