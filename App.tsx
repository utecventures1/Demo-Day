import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// --- Importaciones de Componentes y Hooks ---
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import LogoCarousel from './components/LogoCarousel';
import EmailCaptureModal from './components/EmailCaptureModal';
import { useModal } from './contexts/ModalContext';

// --- Definición de las Animaciones ---
const pageVariants = {
  initial: {
    opacity: 0,
    y: 5, // Un desplazamiento muy sutil para un efecto más suave
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -5,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate', // Una curva de aceleración elegante
  duration: 0.4, // Una transición rápida
};

// --- Componente Envoltorio para Animar Páginas ---
const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

// --- Definición de las Páginas con Animación ---
const HomePage = () => {
  return (
    <AnimatedPage>
      <Hero />
      <LogoCarousel />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsSection />
      </div>
    </AnimatedPage>
  );
};

const AnimatedProjectDetailPage = () => (
    <AnimatedPage>
        <ProjectDetailPage />
    </AnimatedPage>
);


// --- Componente Principal de la Aplicación ---
function App() {
  const location = useLocation();
  const { showModal } = useModal();

  // Efecto para verificar si se debe mostrar el modal al cargar la app
  useEffect(() => {
    // Revisa en el almacenamiento local si el usuario ya interactuó
    const hasSubmitted = localStorage.getItem('email_submitted');
    
    // Si no hay registro, muestra el modal después de un breve retraso
    if (!hasSubmitted) {
      const timer = setTimeout(() => {
        showModal();
      }, 1500); // Retraso de 1.5 segundos

      // Limpia el temporizador si el componente se desmonta antes de tiempo
      return () => clearTimeout(timer);
    }
  }, [showModal]); // Se ejecuta solo si la función showModal cambia (lo cual no debería pasar)

  // Función para hacer scroll al inicio de forma invisible después de la transición de salida
  const handleExitComplete = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div className="bg-[#0D1117] text-white min-h-screen flex flex-col">
      {/* El modal se renderiza aquí, pero solo es visible cuando su estado interno es 'abierto' */}
      <EmailCaptureModal />
      
      <Navbar />

      <main className="flex-grow overflow-x-hidden">
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
          {/* La 'key' en Routes es crucial para que AnimatePresence detecte el cambio de página */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/proyecto/:slug" element={<AnimatedProjectDetailPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;