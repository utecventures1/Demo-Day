import React, { useState } from 'react';
import { useModal } from '../contexts/ModalContext';

const EmailCaptureModal: React.FC = () => {
  const { isModalOpen, hideModal } = useModal();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
        setErrorMessage('Por favor, introduce un correo válido.');
        setStatus('error');
        return;
    }
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('La respuesta del servidor no fue exitosa.');
      }

      setStatus('success');
      localStorage.setItem('email_submitted', 'true'); // ¡La clave!
      
      // Cierra el modal después de un momento para que el usuario vea el mensaje de éxito
      setTimeout(() => {
        hideModal();
      }, 2000);

    } catch (error) {
      console.error(error);
      setErrorMessage('Ocurrió un error. Inténtalo de nuevo.');
      setStatus('error');
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-[#161B22] border border-gray-700 rounded-xl shadow-2xl w-full max-w-md p-8 transform transition-all text-center">
        {status === 'success' ? (
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">¡Gracias!</h2>
            <p className="text-gray-300">Hemos recibido tu correo. ¡Disfruta del contenido!</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">Conoce Primero Nuestras Startups</h2>
            <p className="text-gray-300 mb-6">Ingresa tu correo para ser notificado de futuras inversiones.</p>
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu.correo@ejemplo.com"
                required
                className="w-full px-4 py-3 bg-[#0D1117] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C491FF]"
              />
              {status === 'error' && <p className="text-red-400 text-sm mt-2">{errorMessage}</p>}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-4 px-6 py-3 bg-[#fa4616] text-white font-semibold rounded-lg hover:bg-[#e13d0f] transition-all disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailCaptureModal;