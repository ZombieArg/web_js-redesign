import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PricingCard = ({ 
  title, 
  description, 
  features, 
  isPopular 
}: { 
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <div className={`bg-white rounded-2xl shadow-xl p-8 ${isPopular ? 'border-2 border-accent-600 relative' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-accent-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Mas popular
        </span>
      </div>
    )}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 mb-8">{description}</p>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-3" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contacto"
      className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
        isPopular
          ? 'bg-gradient-to-r from-accent-600 to-primary-600 text-white hover:from-accent-700 hover:to-primary-700'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
    >
      Comenzá ahora
    </a>
  </div>
);

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <section id="precios" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cecilia.pricing.title')} <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">{t('cecilia.pricing.highlight')}</span> {t('cecilia.pricing.titleEnd')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cecilia.pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title={t('cecilia.pricing.basic.title')}
            description={t('cecilia.pricing.basic.description')}
            features={[
              t('cecilia.pricing.basic.features.conversations'),
              t('cecilia.pricing.basic.features.bot'),
              t('cecilia.pricing.basic.features.tracking'),
              t('cecilia.pricing.basic.features.support'),
              t('cecilia.pricing.basic.features.reports')
            ]}
          />
          
          <PricingCard
            title={t('cecilia.pricing.pro.title')}
            description={t('cecilia.pricing.pro.description')}
            features={[
              t('cecilia.pricing.pro.features.conversations'),
              t('cecilia.pricing.pro.features.bots'),
              t('cecilia.pricing.pro.features.analysis'),
              t('cecilia.pricing.pro.features.support'),
              t('cecilia.pricing.pro.features.integrations')
            ]}
            isPopular
          />
          
          <PricingCard
            title={t('cecilia.pricing.enterprise.title')}
            description={t('cecilia.pricing.enterprise.description')}
            features={[
              t('cecilia.pricing.enterprise.features.customFeatures'),
              t('cecilia.pricing.enterprise.features.api'),
              t('cecilia.pricing.enterprise.features.implementation'),
              t('cecilia.pricing.enterprise.features.accountManager'),
              t('cecilia.pricing.enterprise.features.sla')
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;