import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

console.log('--- SOLUCIÓN FINAL: Usando Regex en la ruta Catch-All ---');

// --- Carga y validación de variables de entorno ---
dotenv.config();
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.error("Error FATAL: La variable de entorno RESEND_API_KEY no está definida.");
  process.exit(1);
}
const resend = new Resend(resendApiKey);

// --- Inicialización de la aplicación Express ---
const app = express();
const port = process.env.PORT || 4000;

// --- Configuración de rutas para compatibilidad con ES Modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');

// --- Middlewares globales ---
app.use(cors());
app.use(express.json());
app.use(express.static(distPath)); // Servir archivos estáticos

// --- Creación y configuración del Router de la API ---
const apiRouter = express.Router();

apiRouter.post('/send-email', async (req, res) => {
  console.log('Petición recibida en /api/send-email');
  const { email } = req.body;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Se requiere un correo electrónico válido.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Usamos el correo de prueba de Resend
      to: ['ventures@utec.edu.pe'],
      subject: '🎉 Nuevo Lead Capturado desde la Demo Week!',
      html: `<p>Un nuevo visitante ha dejado su correo electrónico: <strong>${email}</strong></p>`,
    });

    if (error) {
      console.error('Error desde Resend:', error);
      return res.status(400).json({ error: 'Hubo un problema al enviar el correo.' });
    }

    console.log('Correo enviado con éxito:', data);
    return res.status(200).json({ message: '¡Correo enviado con éxito!' });
  } catch (exception) {
    console.error('Excepción del servidor:', exception);
    return res.status(500).json({ error: 'Ocurrió un error interno en el servidor.' });
  }
});

// --- Uso del Router en la aplicación principal ---
app.use('/api', apiRouter);

// --- RUTA CATCH-ALL CON LA SOLUCIÓN ---
// Se usa una Expresión Regular para evitar el bug del comodín '*'
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// --- Iniciar el servidor ---
app.listen(port, () => {
  console.log(`Servidor final iniciado y escuchando en el puerto ${port}`);
});