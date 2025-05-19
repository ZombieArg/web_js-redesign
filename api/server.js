const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

// Configuración del transporte de Mailgun
const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

// Crear el transporte usando Mailgun
const transporter = nodemailer.createTransport(mailgunTransport(auth));

/**
 * Envía un correo electrónico usando nodemailer con Mailgun.
 * @param {Object} options - Detalles del correo.
 * @param {string} options.to - Correo del destinatario.
 * @param {string} options.subject - Asunto del correo.
 * @param {string} options.text - Contenido de texto del correo.
 * @param {string} options.html - Contenido HTML del correo (opcional).
 * @returns {Promise<Object>} - Información de la respuesta del envío.
 */
const sendEmail = async (options) => {
  try {
    const mailOptions = {
      from: 'hola@datavoices.com.ar',
      ...options
    };
    
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error al enviar correo:', error);
    throw new Error('Error al enviar correo: ' + error.message);
  }
};

app.post('/api/send-email', async (req, res) => {
    const { email, message } = req.body;

    try {
        const response = await sendEmail({
            to: ['hola+1@datavoices.com.ar'],
            subject: "New Contact Form Submission",
            text: `You received a new message from ${email}:\n\n${message}`,
            html: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
        });

        res.json({ message: 'Email sent successfully!', response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/send-email-cecilia', async (req, res) => {
    const { email, name, company, message = '' } = req.body;
    try {
        const response = await sendEmail({
            to: ['hola@datavoices.com.ar'],
            subject: `Solicitud de Demo - ${company || 'Sin empresa'}`,
            text: `Nombre: ${name || 'No proporcionado'}\nEmail: ${email}\nEmpresa: ${company || 'No proporcionada'}\n\n${message}`,
            html: `
              <h3>Solicitud de Demo</h3>
              <p><strong>Nombre:</strong> ${name || 'No proporcionado'}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Empresa:</strong> ${company || 'No proporcionada'}</p>
              ${message ? `<p><strong>Mensaje:</strong></p><p>${message}</p>` : ''}
            `,
        });

        res.json({ message: 'Email sent successfully!', response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const port = process.env.port || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
