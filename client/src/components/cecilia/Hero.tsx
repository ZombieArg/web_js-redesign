import React, { useState, useEffect, useRef } from 'react';
import { Bot, Clock, BarChart2, Send } from 'lucide-react';
import { startChat, sendMessage } from '../../api/webBot';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Define the type for CLIENT_IDS
const CLIENT_IDS: Record<string, string> = {
  'municipio': '4aa16de0-98e8-4baa-b0d5-8386cf82c31b',
  'comercio': '748ddab0-d1e3-48f8-8ab2-a8bec16c7643',
  'tiendaNube': 'a9a14c4d-3a10-47fc-8740-5fbc0e6e0fbd'
};

const Hero = () => {
  const [selectedModel, setSelectedModel] = useState('municipio');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [platformChatId, setPlatformChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const models = [
    { id: 'municipio', name: 'Municipio' },
    { id: 'tiendaNube', name: 'Tienda Nube' },
    { id: 'comercio', name: 'Comercio' }
  ];

  // Initialize chat when component mounts or model changes
  useEffect(() => {
    const initializeChat = async () => {
      try {
        const userData = {
          email: `demo@example.com`,
          firstName: 'Usuario',
          lastName: 'Demo',
          botType: selectedModel,
        };

        const response = await startChat(userData, CLIENT_IDS[selectedModel]);
        setPlatformChatId(response.platformChatId);
        
        setMessages([{
          role: 'assistant',
          content: response.message,
          timestamp: new Date()
        }]);
      } catch (error) {
        console.error('Error initializing chat:', error);
      }
    };

    initializeChat();
  }, [selectedModel]);

  const scrollToBottom = () => {
    const chatContainer = messagesEndRef.current?.parentElement;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !platformChatId) return;

    const newMessage = { role: 'user' as const, content: inputMessage, timestamp: new Date() };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await sendMessage(
        platformChatId,
        inputMessage,
        CLIENT_IDS[selectedModel]
      );

      // Solo agregar el mensaje si tiene contenido
      if (response.message.content?.trim()) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: response.message.content,
          timestamp: new Date(response.message.timestamp)
        }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">Automatiza</span> tu atención al cliente con inteligencia
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Cecilia trabaja 24/7 respondiendo consultas de tus clientes de manera amigable y eficiente, permitiéndote enfocarte en lo que realmente importa.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a 
                href="#contacto" 
                className="border-2 border-accent-600 text-accent-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-accent-50 transition-colors duration-300 text-center"
              >
                Agendar reunión
              </a>
            </div>
            
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <span>Implementación en menos de 24 horas</span>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-accent-100 flex items-center justify-center mr-3">
                  <Bot className="h-5 w-5 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Cecilia</h3>
                  <p className="text-xs text-gray-500">Asistente virtual</p>
                </div>
              </div>

              <div className="mb-4">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                >
                  {models.map(model => (
                    <option key={model.id} value={model.id}>
                      Bot {model.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-4 max-h-80 overflow-y-auto mb-4 scroll-smooth">
                {messages.map((message, index) => (
                  message.content?.trim() && (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${
                        message.role === 'assistant'
                          ? 'bg-accent-50 rounded-tl-none'
                          : 'bg-gray-100 rounded-tr-none ml-auto'
                      } max-w-xs`}
                    >
                      <p>{message.content}</p>
                    </div>
                  )
                ))}
                {isLoading && (
                  <div className="p-3 rounded-lg bg-accent-50 rounded-tl-none max-w-xs">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-accent-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-accent-600 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                      <div className="w-2 h-2 bg-accent-600 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="mt-6 border-t pt-4">
                <div className="flex items-center">
                  <input 
                    type="text" 
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 border-0 focus:ring-0 text-sm"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/4 -right-10 h-64 w-64 bg-primary-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 -left-10 h-40 w-40 bg-accent-300 rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;