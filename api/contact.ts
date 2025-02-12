import type { VercelRequest, VercelResponse } from '@vercel/node';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY!;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN!;

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: MAILGUN_API_KEY });

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    await client.messages.create(MAILGUN_DOMAIN, {
      from: `DataVoices <noreply@${MAILGUN_DOMAIN}>`,
      to: ['hola@datavoices.com.ar'],
      subject: 'Nuevo contacto desde la web',
      text: `Nuevo contacto desde el formulario web:\n\nEmail: ${email}`,
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Mailgun error:', error);
    return res.status(500).json({ message: 'Error sending message' });
  }
}