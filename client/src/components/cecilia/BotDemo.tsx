import React, { useState } from 'react';
import { Bot, Building2, Home, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BotOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BotDemo = () => {
  const { t } = useTranslation();
  const [selectedBot, setSelectedBot] = useState<string | null>(null);

  const botOptions: BotOption[] = [
    {
      id: 'municipio',
      title: t('cecilia.botDemo.options.municipality.title'),
      description: t('cecilia.botDemo.options.municipality.description'),
      icon: <Building2 className="h-12 w-12 text-accent-600" />
    },
    {
      id: 'tiendanube',
      title: t('cecilia.botDemo.options.tiendaNube.title'),
      description: t('cecilia.botDemo.options.tiendaNube.description'),
      icon: <Home className="h-12 w-12 text-accent-600" />
    },
    {
      id: 'comercio',
      title: t('cecilia.botDemo.options.commerce.title'),
      description: t('cecilia.botDemo.options.commerce.description'),
      icon: <Package className="h-12 w-12 text-accent-600" />
    }
  ];

  const handleBotSelect = (botId: string) => {
    setSelectedBot(botId);
  };

  // Función para redirigir al inicio de la página donde está el Hero
  const redirectToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="demo" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cecilia.botDemo.title')} <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">Cecilia</span> {t('cecilia.botDemo.titleEnd')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cecilia.botDemo.subtitle')}
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
                <p className="text-sm text-gray-600">{t('cecilia.botDemo.virtualAssistant')}</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="text-center">
                <button 
                  onClick={redirectToHero} 
                  className="bg-accent-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-accent-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  {t('cecilia.botDemo.tryButton')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BotDemo;