import React, { useState } from 'react';
import { Bot, Building2, Home, Package } from 'lucide-react';

interface BotOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BotDemo = () => {
  const [selectedBot, setSelectedBot] = useState<string | null>(null);

  const botOptions: BotOption[] = [
    {
      id: 'municipio',
      title: 'Bot Municipio',
      description: 'Gestión de consultas ciudadanas y trámites municipales',
      icon: <Building2 className="h-12 w-12 text-accent-600" />
    },
    {
      id: 'inmobiliaria',
      title: 'Bot Inmobiliaria',
      description: 'Atención de consultas sobre propiedades y coordinación de visitas',
      icon: <Home className="h-12 w-12 text-accent-600" />
    },
    {
      id: 'distribuidora',
      title: 'Bot Distribuidora',
      description: 'Gestión de pedidos y consultas de stock',
      icon: <Package className="h-12 w-12 text-accent-600" />
    }
  ];

  const handleBotSelect = (botId: string) => {
    setSelectedBot(botId);
  };

  return (
    <section id="demo" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prueba a <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">Cecilia</span> en acción
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selecciona el tipo de bot que quieres probar y experimenta cómo Cecilia puede transformar tu atención al cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {botOptions.map((bot) => (
            <button
              key={bot.id}
              onClick={() => handleBotSelect(bot.id)}
              className={`p-8 rounded-xl transition-all duration-300 ${
                selectedBot === bot.id
                  ? 'bg-accent-600 text-white shadow-lg scale-105'
                  : 'bg-white hover:bg-accent-50 shadow-md'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 ${selectedBot === bot.id ? 'text-white' : ''}`}>
                  {bot.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{bot.title}</h3>
                <p className={`${selectedBot === bot.id ? 'text-accent-100' : 'text-gray-600'}`}>
                  {bot.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {selectedBot && (
          <div className="mt-16 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 text-accent-600 mr-3" />
              <div>
                <h4 className="font-bold">Cecilia - {botOptions.find(b => b.id === selectedBot)?.title}</h4>
                <p className="text-sm text-gray-600">Asistente virtual</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="text-center text-gray-600">
                Chat demo en desarrollo. ¡Próximamente podrás interactuar con Cecilia!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BotDemo;