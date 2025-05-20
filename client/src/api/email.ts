import axios from 'axios';

const EMAIL_URL = 'https://ceciliabot.datavoices.com.ar/api';

interface ContactFormData {
  email: string;
  message: string;
}

interface CeciliaFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface EmailResponse {
  message: string;
  response?: any;
}

/* ──────────────────────────
   Envía formulario de contacto
   ────────────────────────── */
const sendContactForm = async (
  formData: ContactFormData
): Promise<EmailResponse> => {
  try {
    const response = await axios.post<EmailResponse>(
      `${EMAIL_URL}/send-email`,
      formData
    );
    return response.data;
  } catch (error: any) {
    console.error('Error enviando formulario de contacto:', error.response?.data || error.message);
    throw error.response?.data || new Error('Error al enviar el formulario de contacto');
  }
};

/* ──────────────────────────
   Envía formulario de Cecilia
   ────────────────────────── */
const sendCeciliaForm = async (
  formData: CeciliaFormData
): Promise<EmailResponse> => {
  try {
    const response = await axios.post<EmailResponse>(
      `${EMAIL_URL}/send-email-cecilia`,
      formData
    );
    return response.data;
  } catch (error: any) {
    console.error('Error enviando formulario de Cecilia:', error.response?.data || error.message);
    throw error.response?.data || new Error('Error al enviar el formulario de Cecilia');
  }
};

export { sendContactForm, sendCeciliaForm };