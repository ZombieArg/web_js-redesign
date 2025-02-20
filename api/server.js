const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: process.env.API_URL
}));

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'datavoices',
    key: process.env.MAILGUN_API_KEY,
});

app.post('/send-email', async (req, res) => {
    const { email, message } = req.body;

    try {
        const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
            from: `Data Voices <no-reply@${process.env.MAILGUN_DOMAIN}>`,
            to: ['hola@datavoices.com.ar'],
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

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
