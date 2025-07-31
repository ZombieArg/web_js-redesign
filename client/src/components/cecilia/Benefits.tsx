import React from 'react';
import { Clock, MessageSquare, Users, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const benefits = [
    {
      icon: <Clock className="h-7 w-7 text-accent-600" />,
      title: t('cecilia.features.availability.title'),
      description: t('cecilia.features.availability.description')
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-accent-600" />,
      title: t('cecilia.features.naturalLanguage.title'),
      description: t('cecilia.features.naturalLanguage.description')
    },
    {
      icon: <Users className="h-7 w-7 text-accent-600" />,
      title: t('cecilia.benefits.focus'),
      description: t('cecilia.benefits.costReduction')
    },
    {
      icon: <Brain className="h-7 w-7 text-accent-600" />,
      title: t('cecilia.features.customizable.title'),
      description: t('cecilia.features.customizable.description')
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cecilia.benefits.title')} {t('cecilia.benefits.middleTitle')}
             <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent"> {t('cecilia.benefits.highligh')} </span>
             {t('cecilia.benefits.endTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cecilia.benefits.efficiency')}
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