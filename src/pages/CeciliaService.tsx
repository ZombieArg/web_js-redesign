import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Clock, 
  Calendar, 
  MessageSquare, 
  Brain, 
  Settings, 
  DollarSign,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Header } from '../components/Header';

export function CeciliaService() {
  const { t } = useTranslation();
  const whatsappLink = "https://wa.me/5491123966197?text=Hola%20DataVoices%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Cecilia";

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-[#FF5722]" />,
      title: t('cecilia.features.quickSetup.title'),
      description: t('cecilia.features.quickSetup.description')
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#FF5722]" />,
      title: t('cecilia.features.availability.title'),
      description: t('cecilia.features.availability.description')
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#FF5722]" />,
      title: t('cecilia.features.fixedCost.title'),
      description: t('cecilia.features.fixedCost.description')
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#FF5722]" />,
      title: t('cecilia.features.multitasking.title'),
      description: t('cecilia.features.multitasking.description')
    },
    {
      icon: <Brain className="w-8 h-8 text-[#FF5722]" />,
      title: t('cecilia.features.naturalLanguage.title'),
      description: t('cecilia.features.naturalLanguage.description')
    },
    {
      icon: <Settings className="w-8 h-8 text-[#FF5722]" />,
      title: t('cecilia.features.customizable.title'),
      description: t('cecilia.features.customizable.description')
    }
  ];

  const benefits = [
    t('cecilia.benefits.efficiency'),
    t('cecilia.benefits.costReduction'),
    t('cecilia.benefits.focus'),
    t('cecilia.benefits.insights')
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#F5F6FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B3674] mb-6">
              {t('cecilia.hero.title')}
            </h1>
            <p className="text-xl text-[#2B3674]/80 mb-8">
              {t('cecilia.hero.subtitle')}
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#FF5722] text-white px-8 py-3 rounded-full hover:bg-[#F4511E] transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="mr-2">{t('cecilia.hero.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-16">
            {t('cecilia.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E0E5F2] group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2B3674]">
                  {feature.title}
                </h3>
                <p className="text-[#2B3674]/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-16">
              {t('cecilia.benefits.title')}
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#FF5722] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#2B3674]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2B3674] mb-6">
              {t('cecilia.cta.title')}
            </h2>
            <p className="text-lg text-[#2B3674]/80 mb-8">
              {t('cecilia.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF5722] text-white px-8 py-3 rounded-full hover:bg-[#F4511E] transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center"
              >
                <span className="mr-2">{t('cecilia.cta.primary')}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B3674] hover:text-[#FF5722] transition-colors flex items-center"
              >
                <span className="mr-2">{t('cecilia.cta.secondary')}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}