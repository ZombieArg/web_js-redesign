import React from 'react';
import { Bot, MessageCircle, Users, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const StepCard = ({ 
  number, 
  icon, 
  title, 
  description 
}: { 
  number: number, 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => (
  <div className="flex items-start">
    <div className="mr-6">
      <div className="h-12 w-12 rounded-full bg-accent-600 text-white flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div className={`h-full w-0.5 bg-accent-200 mx-auto mt-2 ${number === 4 ? 'hidden' : ''}`}></div>
    </div>
    <div className="flex-1">
      <div className="flex items-center mb-2">
        <div className="mr-3">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-10">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = [
    {
      icon: <Settings className="h-6 w-6 text-accent-600" />,
      title: t('cecilia.howItWorks.steps.setup.title'),
      description: t('cecilia.howItWorks.steps.setup.description')
    },
    {
      icon: <Bot className="h-6 w-6 text-accent-600" />,
      title: t('cecilia.howItWorks.steps.training.title'),
      description: t('cecilia.howItWorks.steps.training.description')
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-accent-600" />,
      title: t('cecilia.howItWorks.steps.automation.title'),
      description: t('cecilia.howItWorks.steps.automation.description')
    },
    {
      icon: <Users className="h-6 w-6 text-accent-600" />,
      title: t('cecilia.howItWorks.steps.collaboration.title'),
      description: t('cecilia.howItWorks.steps.collaboration.description')
    }
  ];

  return (
    <section id="como-funciona" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cecilia.howItWorks.title')} <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">{t('cecilia.howItWorks.highlight')}</span> Cecilia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cecilia.howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;