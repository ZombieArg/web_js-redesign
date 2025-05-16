import { Check } from 'lucide-react';

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
          Más popular
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
      Comenzar ahora
    </a>
  </div>
);

const Pricing = () => {
  return (
    <section id="precios" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Planes <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">flexibles</span> para tu negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y comienza a transformar tu atención al cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Básico"
            description="Ideal para pequeños negocios que buscan automatizar su atención al cliente"
            features={[
              "500 conversaciones por mes",
              "Bot simple con IA",
              "Trackeo de tópicos de conversación",
              "Soporte por email",
              "Reportes básicos"
            ]}
          />
          
          <PricingCard
            title="Pro"
            description="Para negocios en crecimiento que necesitan una solución completa"
            features={[
              "Conversaciones ilimitadas",
              "Todos los bots disponibles",
              "Análisis avanzado de conversaciones",
              "Soporte prioritario 24/7",
              "Integraciones personalizadas"
            ]}
            isPopular
          />
          
          <PricingCard
            title="Enterprise"
            description="Solución personalizada para grandes empresas"
            features={[
              "Funcionalidades a medida",
              "API dedicada",
              "Implementación personalizada",
              "Gerente de cuenta dedicado",
              "SLA garantizado"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;