import axios from 'axios';

interface ContactForm {
  email: string;
}

export const sendContactForm = async (data: ContactForm) => {
  try {
    const response = await axios.post('/api/contact', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Error sending message');
  }
};