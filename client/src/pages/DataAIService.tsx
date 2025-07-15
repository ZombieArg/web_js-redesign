import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Database, Search, MessageSquare, Shield, Zap, BarChart } from 'lucide-react';
import { Header } from '../components/Header';
import { SEO, getPageSEO } from '../components/seo';

export function DataAIService() {
  const { t } = useTranslation();
  const whatsappLink = "https://wa.me/5491123966197?text=Hola%20DataVoices%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20IA%20en%20datos";
  const seoConfig = getPageSEO('dataAI');

  const features = [
    {
      icon: <Search className="w-8 h-8 text-[#FF5722]" />,
      title: t('services.dataAI.features.naturalQueries.title'),
      description: t('services.dataAI.features.naturalQueries.description')
    },
    {
      icon: <Database className="w-8 h-8 text-[#FF5722]" />,
      title: t('services.dataAI.features.dataSources.title'),
      description: t('services.dataAI.features.dataSources.description')
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FF5722]" />,
      title: t('services.dataAI.features.security.title'),
      description: t('services.dataAI.features.security.description')
    },
    {
      icon: <Zap className="w-8 h-8 text-[#FF5722]" />,
      title: t('services.dataAI.features.realtime.title'),
      description: t('services.dataAI.features.realtime.description')
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#FF5722]" />,
      title: t('services.dataAI.features.interface.title'),
      description: t('services.dataAI.features.interface.description')
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#FF5722]" />,
      title: t('services.dataAI.features.visualization.title'),
      description: t('services.dataAI.features.visualization.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO {...seoConfig} />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#F5F6FA] to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2B3674] mb-6">
                {t('services.dataAI.hero.title')}
              </h1>
              <p className="text-xl text-[#2B3674]/80 mb-8">
                {t('services.dataAI.hero.subtitle')}
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center bg-[#FF5722] text-white px-8 py-3 rounded-full hover:bg-[#F4511E] transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="mr-2">{t('services.dataAI.hero.cta')}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Data Analytics Dashboard"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-16">
            {t('services.dataAI.features.title')}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2B3674] mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-[#2B3674]/80 mb-8">
              {t('contact.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF5722] text-white px-8 py-3 rounded-full hover:bg-[#F4511E] transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center"
              >
                <span className="mr-2">{t('contact.button')}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}