import React from 'react';
import { MessageSquare, Calendar, Package, BarChart, StoreIcon } from 'lucide-react';

interface BotType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BotTypes = () => {
  const bots: BotType[] = [
    {
      icon: <Package className="h-8 w-8 text-accent-600" />,
      title: "Order Manager Assistant",
      description: "Gestiona pedidos, consultas de stock y seguimiento de envíos de manera automática, mejorando la eficiencia operativa de tu negocio."
    },
    {
      icon: <Calendar className="h-8 w-8 text-accent-600" />,
      title: "Google Scheduler Assistant",
      description: "Coordina reuniones y citas automáticamente, sincronizando con Google Calendar para una gestión eficiente de tu agenda."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent-600" />,
      title: "Event Manager Assistant",
      description: "Administra registros, consultas y detalles de eventos, facilitando la organización y comunicación con los participantes."
    },
    {
      icon: <BarChart className="h-8 w-8 text-accent-600" />,
      title: "Topic Tracker Assistant",
      description: "Analiza y categoriza las conversaciones, proporcionando insights valiosos sobre las necesidades y preferencias de tus clientes."
    },
    {
      icon: <StoreIcon className="h-8 w-8 text-accent-600" />,
      title: "Tienda Nube Assistant",
      description: "Brinda información actualizada sobre productos, precios y disponibilidad en línea, como también del estado de sus pedidos, mejorando la experiencia de compra de tus clientes."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nuestros <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">Asistentes Especializados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada bot está diseñado para resolver necesidades específicas de tu negocio, proporcionando una atención personalizada y eficiente.
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