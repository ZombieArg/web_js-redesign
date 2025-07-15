export interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: object;
}

export const seoConfig: Record<string, PageSEOConfig> = {
  home: {
    title: 'Data Voices - Soluciones de Inteligencia Artificial y Desarrollo de Software',
    description: 'Transformamos datos en decisiones con soluciones de IA. Ofrecemos chatbots inteligentes, análisis de datos con IA, desarrollo de software y consultoría tecnológica en Argentina.',
    keywords: 'Data Voices, inteligencia artificial Argentina, IA, chatbot, CecilIA, análisis datos, desarrollo software, consultoría tecnológica, automatización, Buenos Aires',
    url: 'https://datavoices.com.ar',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Data Voices",
      "description": "Soluciones de inteligencia artificial, análisis de datos y desarrollo de software",
      "url": "https://datavoices.com.ar",
      "logo": "https://datavoices.com.ar/logopng1.png",
      "foundingDate": "2023",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+54-11-2396-6197",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AR",
        "addressLocality": "Buenos Aires"
      },
      "sameAs": [
        "https://www.linkedin.com/company/data-voices",
        "https://www.instagram.com/datavoices.ar"
      ],
      "service": [
        {
          "@type": "Service",
          "name": "Chatbot con Inteligencia Artificial",
          "description": "CecilIA - Chatbot inteligente para atención al cliente 24/7"
        },
        {
          "@type": "Service", 
          "name": "Análisis de Datos con IA",
          "description": "Consulta tus bases de datos usando lenguaje natural con inteligencia artificial"
        },
        {
          "@type": "Service",
          "name": "Desarrollo de Software",
          "description": "Desarrollo de aplicaciones y sistemas con inteligencia artificial"
        },
        {
          "@type": "Service",
          "name": "Consultoría en IA",
          "description": "Estrategia y consultoría para implementar inteligencia artificial en tu negocio"
        }
      ]
    }
  },
  
  cecilia: {
    title: 'CecilIA - Chatbot Inteligente con IA para Atención al Cliente 24/7',
    description: 'CecilIA es nuestro chatbot con inteligencia artificial que automatiza la atención al cliente. Disponible 24/7, reduce costos y mejora la experiencia de tus clientes.',
    keywords: 'CecilIA, chatbot Argentina, chatbot IA, atención cliente automatizada, asistente virtual, bot WhatsApp, automatización atención cliente, chatbot español',
    url: 'https://datavoices.com.ar/cecilia',
    type: 'product',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "CecilIA - Chatbot con Inteligencia Artificial",
      "description": "Chatbot inteligente para automatizar la atención al cliente con IA",
      "brand": {
        "@type": "Brand",
        "name": "Data Voices"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Data Voices"
      },
      "url": "https://datavoices.com.ar/cecilia",
      "image": "https://datavoices.com.ar/logopng1.png",
      "category": "Software",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based",
      "offers": [
        {
          "@type": "Offer",
          "name": "Plan Básico",
          "description": "Plan básico de CecilIA para pequeñas empresas",
          "priceCurrency": "ARS",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer", 
          "name": "Plan Pro",
          "description": "Plan profesional con funciones avanzadas",
          "priceCurrency": "ARS",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Plan Enterprise",
          "description": "Solución empresarial personalizada",
          "priceCurrency": "ARS",
          "availability": "https://schema.org/InStock"
        }
      ],
      "features": [
        "Atención 24/7",
        "Inteligencia Artificial",
        "Integración WhatsApp",
        "Múltiples idiomas",
        "Análisis y reportes",
        "Configuración personalizada"
      ]
    }
  },

  dataAI: {
    title: 'IA en Datos - Consulta Bases de Datos con Inteligencia Artificial',
    description: 'Transforma la manera de interactuar con tus datos. Haz preguntas en lenguaje natural y obtén respuestas instantáneas con inteligencia artificial.',
    keywords: 'IA datos, análisis datos IA, consultas lenguaje natural, business intelligence, análisis predictivo, base datos IA, machine learning, data science Argentina',
    url: 'https://datavoices.com.ar/data-ai',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IA en Datos",
      "description": "Análisis de datos con inteligencia artificial usando lenguaje natural",
      "provider": {
        "@type": "Organization",
        "name": "Data Voices"
      },
      "serviceType": "Data Analysis",
      "url": "https://datavoices.com.ar/data-ai",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de IA en Datos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Consultas en lenguaje natural",
              "description": "Haz preguntas sobre tus datos en lenguaje natural"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Integración múltiples fuentes",
              "description": "Conecta bases de datos, hojas de cálculo y APIs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Análisis en tiempo real",
              "description": "Obtén insights instantáneos de tus datos"
            }
          }
        ]
      }
    }
  },

  softwareDev: {
    title: 'Desarrollo de Software con IA - Aplicaciones Inteligentes Personalizadas',
    description: 'Desarrollo de software personalizado con inteligencia artificial. Creamos aplicaciones escalables y sistemas inteligentes para tu negocio.',
    keywords: 'desarrollo software IA, aplicaciones inteligentes, desarrollo web Argentina, software personalizado, sistemas IA, programación machine learning, desarrollo apps',
    url: 'https://datavoices.com.ar/software-dev',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Desarrollo de Software con IA",
      "description": "Desarrollo de aplicaciones y sistemas personalizados con inteligencia artificial",
      "provider": {
        "@type": "Organization", 
        "name": "Data Voices"
      },
      "serviceType": "Software Development",
      "url": "https://datavoices.com.ar/software-dev",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Desarrollo",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Desarrollo con IA",
              "description": "Aplicaciones que integran inteligencia artificial desde el diseño"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Soluciones personalizadas",
              "description": "Software a medida para necesidades específicas"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Metodología ágil",
              "description": "Desarrollo iterativo con entregas rápidas"
            }
          }
        ]
      }
    }
  },

  consulting: {
    title: 'Consultoría en Inteligencia Artificial - Estrategia y Transformación Digital',
    description: 'Consultoría especializada en inteligencia artificial. Te ayudamos a desarrollar estrategias de IA, optimizar procesos y transformar tu negocio digitalmente.',
    keywords: 'consultoría IA Argentina, estrategia inteligencia artificial, transformación digital, consultor IA, implementación machine learning, optimización procesos IA',
    url: 'https://datavoices.com.ar/consulting',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service", 
      "name": "Consultoría en Inteligencia Artificial",
      "description": "Consultoría estratégica para implementar IA en tu organización",
      "provider": {
        "@type": "Organization",
        "name": "Data Voices"
      },
      "serviceType": "Business Consulting",
      "url": "https://datavoices.com.ar/consulting",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Consultoría",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Estrategia de IA",
              "description": "Desarrollo de roadmaps y estrategias de implementación"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Capacitación",
              "description": "Formación de equipos en tecnologías de IA"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Optimización de procesos",
              "description": "Identificación y automatización de procesos con IA"
            }
          }
        ]
      }
    }
  }
};

export const getPageSEO = (page: string): PageSEOConfig => {
  return seoConfig[page] || seoConfig.home;
};