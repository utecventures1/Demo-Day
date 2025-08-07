// vite.config.ts

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'; // <--- 1. Importa el plugin de React
import svgr from 'vite-plugin-svgr';     // <--- 2. Importa el plugin SVGR

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');

    return {
      // +++ SECCIÓN DE PLUGINS +++
      plugins: [
        react(), // Habilita la compilación de React (JSX, Fast Refresh)
        svgr(),   // Habilita la importación de SVGs como componentes
      ],
      // --------------------------

      // Tu configuración existente se mantiene igual
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      server: {
        proxy: {
          '/api': {
            target: 'http://localhost:4000',
            changeOrigin: true,
          }
        }
      }
    };
});