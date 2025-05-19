import axios from 'axios';

const API_BASE_URL = import.meta.env.BOTS_URL;

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  botType: string;
}

interface ChatResponse {
  platformChatId: string;
  message: string;
}

interface MessageResponse {
  message: {
    content: string;
    timestamp: string;
  };
}

interface MessagesResponse {
  messages: Array<{
    content: string;
    timestamp: string;
  }>;
}

/* ──────────────────────────
   Inicia nueva conversación
   ────────────────────────── */
const startChat = async (
  userData: UserData,
  clientId: string,
): Promise<ChatResponse> => {
  try {
    const response = await axios.post<ChatResponse>(
      `${API_BASE_URL}/bot/start?clientId=${clientId}`, // ← query param
      userData
    );
    return response.data;
  } catch (error: any) {
    console.error('Error starting chat:', error.response?.data || error.message);
    throw error.response?.data || new Error('Failed to start chat');
  }
};

/* ──────────────────────────
   Envía mensaje de usuario
   ────────────────────────── */
const sendMessage = async (
  platformChatId: string,
  userMessage: string,
  clientId: string,
): Promise<MessageResponse> => {
  try {
    const response = await axios.post<MessageResponse>(
      `${API_BASE_URL}/bot/reply?clientId=${clientId}`, // ← query param
      { platformChatId, userMessage }
    );
    return response.data;
  } catch (error: any) {
    console.error('Error sending message:', error.response?.data || error.message);
    throw error.response?.data || new Error('Failed to send message');
  }
};

/* ──────────────────────────
   Obtiene histórico de chat
   ────────────────────────── */
const getMessages = async (
  platformChatId: string,
  clientId: string,
): Promise<MessagesResponse> => {
  try {
    const response = await axios.get<MessagesResponse>(
      `${API_BASE_URL}/bot/messages`,
      {
        params: { platformChatId, clientId }, // ← ambos en query
      },
    );
    return response.data;
  } catch (error: any) {
    console.error('Error fetching messages:', error.response?.data || error.message);
    throw error.response?.data || new Error('Failed to fetch messages');
  }
};

export { startChat, sendMessage, getMessages };
