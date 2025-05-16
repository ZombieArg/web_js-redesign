import React from 'react';
import { Clock, MessageSquare, Users, Brain } from 'lucide-react';

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="h-14 w-14 rounded-full bg-accent-100 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-7 w-7 text-accent-600" />,
      title: "Disponible 24/7",
      description: "Cecilia nunca descansa. Está siempre lista para atender consultas, incluso fuera del horario comercial, mejorando la satisfacción de tus clientes."
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-accent-600" />,
      title: "Respuestas amigables",
      description: "Comunicación natural y cercana que hace sentir a tus clientes como si estuvieran hablando con una persona real, creando una experiencia positiva."
    },
    {
      icon: <Users className="h-7 w-7 text-accent-600" />,
      title: "Derivación inteligente",
      description: "Identifica cuándo es necesario derivar a un agente humano, garantizando que los casos complejos reciban la atención personalizada que merecen."
    },
    {
      icon: <Brain className="h-7 w-7 text-accent-600" />,
      title: "Aprende constantemente",
      description: "Mejora con cada interacción, adaptándose a las necesidades específicas de tu negocio y ofreciendo respuestas cada vez más precisas."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Beneficios que <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">transforman</span> tu negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cecilia revoluciona la manera en que interactúas con tus clientes, aumentando la eficiencia y satisfacción.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;