import React from 'react';
import { MessageSquare, Calendar, Package, BarChart, StoreIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BotType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BotTypes = () => {
  const { t } = useTranslation();
  const bots: BotType[] = [
    {
      icon: <Package className="h-8 w-8 text-accent-600" />,
      title: t('cecilia.botTypes.orderManager.title'),
      description: t('cecilia.botTypes.orderManager.description')
    },
    {
      icon: <Calendar className="h-8 w-8 text-accent-600" />,
      title: t('cecilia.botTypes.scheduler.title'),
      description: t('cecilia.botTypes.scheduler.description')
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent-600" />,
      title: t('cecilia.botTypes.eventManager.title'),
      description: t('cecilia.botTypes.eventManager.description')
    },
    {
      icon: <BarChart className="h-8 w-8 text-accent-600" />,
      title: t('cecilia.botTypes.topicTracker.title'),
      description: t('cecilia.botTypes.topicTracker.description')
    },
    {
      icon: <StoreIcon className="h-8 w-8 text-accent-600" />,
      title: t('cecilia.botTypes.tiendaNube.title'),
      description: t('cecilia.botTypes.tiendaNube.description')
    },
    {
      icon: <StoreIcon className="h-8 w-8 text-accent-600" />,
      title: t('cecilia.botTypes.mercadoLibre.title'),
      description: t('cecilia.botTypes.mercadoLibre.description')
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cecilia.botTypes.title')} <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">{t('cecilia.botTypes.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cecilia.botTypes.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bots.map((bot, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 rounded-full bg-accent-100 flex items-center justify-center mb-6 mx-auto">
                {bot.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{bot.title}</h3>
              <p className="text-gray-600 text-center">{bot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BotTypes;