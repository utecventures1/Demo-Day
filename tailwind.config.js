// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- AJUSTE DE VELOCIDAD AQUÍ ---
      animation: {
        // Hemos aumentado la duración de 40s a 200s para ralentizar el carrusel
        'scroll-continuous1': 'scroll 300s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, 
        }
      },
      // --- FIN DEL AJUSTE ---
      
      // ... el resto de tus personalizaciones
    },
  },
  plugins: [],
};