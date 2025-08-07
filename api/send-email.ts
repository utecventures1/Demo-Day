// Importa los tipos necesarios si usas TypeScript
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Inicializa Resend con tu clave de API desde las variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Solo permite peticiones POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { email } = req.body;

  // Validación simple
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Envía el correo usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Lead Capture <onboarding@resend.dev>', // Este email debe ser de un dominio verificado en Resend
      to: ['bazand25@gmail.com'], // El correo donde recibirás la notificación
      subject: 'Nuevo Lead Capturado en la Demo Week! 🎉',
      html: `<p>¡Felicidades!</p><p>Un nuevo visitante ha dejado su correo: <strong>${email}</strong></p>`,
    });

    if (error) {
      console.error({ error });
      return res.status(400).json({ error: 'Error sending email.' });
    }

    // Éxito
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}