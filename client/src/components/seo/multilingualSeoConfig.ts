export interface MultilingualPageSEOConfig {
  es: {
    title: string;
    description: string;
    keywords: string;
    image?: string;
    url: string;
    type?: 'website' | 'article' | 'product';
    structuredData?: object;
  };
  en: {
    title: string;
    description: string;
    keywords: string;
    image?: string;
    url: string;
    type?: 'website' | 'article' | 'product';
    structuredData?: object;
  };
}

export const multilingualSeoConfig: Record<string, MultilingualPageSEOConfig> = {
  home: {
    es: {
      title: 'Data Voices - Soluciones de Inteligencia Artificial y Desarrollo de Software en Argentina',
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
        "inLanguage": "es",
        "sameAs": [
          "https://www.linkedin.com/company/data-voices",
          "https://www.instagram.com/datavoices.ar"
        ]
      }
    },
    en: {
      title: 'Data Voices - AI Solutions and Software Development in Argentina',
      description: 'We transform data into decisions with AI solutions. We offer intelligent chatbots, AI data analysis, software development and technology consulting in Argentina.',
      keywords: 'Data Voices, artificial intelligence Argentina, AI, chatbot, CecilIA, data analysis, software development, technology consulting, automation, Buenos Aires',
      url: 'https://datavoices.com.ar/en',
      type: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Data Voices",
        "description": "Artificial intelligence solutions, data analysis and software development",
        "url": "https://datavoices.com.ar/en",
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
        "inLanguage": "en",
        "sameAs": [
          "https://www.linkedin.com/company/data-voices",
          "https://www.instagram.com/datavoices.ar"
        ]
      }
    }
  },
  
  cecilia: {
    es: {
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
        "inLanguage": "es",
        "url": "https://datavoices.com.ar/cecilia",
        "image": "https://datavoices.com.ar/logopng1.png",
        "category": "Software"
      }
    },
    en: {
      title: 'CecilIA - Intelligent AI Chatbot for 24/7 Customer Service',
      description: 'CecilIA is our AI chatbot that automates customer service. Available 24/7, it reduces costs and improves your customers\' experience.',
      keywords: 'CecilIA, chatbot Argentina, AI chatbot, automated customer service, virtual assistant, WhatsApp bot, customer service automation, Spanish chatbot',
      url: 'https://datavoices.com.ar/en/cecilia',
      type: 'product',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "CecilIA - Artificial Intelligence Chatbot",
        "description": "Intelligent chatbot to automate customer service with AI",
        "brand": {
          "@type": "Brand",
          "name": "Data Voices"
        },
        "inLanguage": "en",
        "url": "https://datavoices.com.ar/en/cecilia",
        "image": "https://datavoices.com.ar/logopng1.png",
        "category": "Software"
      }
    }
  },

  dataAI: {
    es: {
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
        "inLanguage": "es",
        "serviceType": "Data Analysis",
        "url": "https://datavoices.com.ar/data-ai"
      }
    },
    en: {
      title: 'AI in Data - Query Databases with Artificial Intelligence',
      description: 'Transform the way you interact with your data. Ask questions in natural language and get instant answers with artificial intelligence.',
      keywords: 'AI data, AI data analysis, natural language queries, business intelligence, predictive analysis, AI database, machine learning, data science Argentina',
      url: 'https://datavoices.com.ar/en/data-ai',
      type: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI in Data",
        "description": "Data analysis with artificial intelligence using natural language",
        "provider": {
          "@type": "Organization",
          "name": "Data Voices"
        },
        "inLanguage": "en",
        "serviceType": "Data Analysis",
        "url": "https://datavoices.com.ar/en/data-ai"
      }
    }
  },

  softwareDev: {
    es: {
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
        "inLanguage": "es",
        "serviceType": "Software Development",
        "url": "https://datavoices.com.ar/software-dev"
      }
    },
    en: {
      title: 'AI Software Development - Custom Intelligent Applications',
      description: 'Custom software development with artificial intelligence. We create scalable applications and intelligent systems for your business.',
      keywords: 'AI software development, intelligent applications, web development Argentina, custom software, AI systems, machine learning programming, app development',
      url: 'https://datavoices.com.ar/en/software-dev',
      type: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Software Development",
        "description": "Development of custom applications and systems with artificial intelligence",
        "provider": {
          "@type": "Organization",
          "name": "Data Voices"
        },
        "inLanguage": "en",
        "serviceType": "Software Development",
        "url": "https://datavoices.com.ar/en/software-dev"
      }
    }
  },

  consulting: {
    es: {
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
        "inLanguage": "es",
        "serviceType": "Business Consulting",
        "url": "https://datavoices.com.ar/consulting"
      }
    },
    en: {
      title: 'AI Consulting - Strategy and Digital Transformation',
      description: 'Specialized consulting in artificial intelligence. We help you develop AI strategies, optimize processes and digitally transform your business.',
      keywords: 'AI consulting Argentina, artificial intelligence strategy, digital transformation, AI consultant, machine learning implementation, AI process optimization',
      url: 'https://datavoices.com.ar/en/consulting',
      type: 'website',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Artificial Intelligence Consulting",
        "description": "Strategic consulting to implement AI in your organization",
        "provider": {
          "@type": "Organization",
          "name": "Data Voices"
        },
        "inLanguage": "en",
        "serviceType": "Business Consulting",
        "url": "https://datavoices.com.ar/en/consulting"
      }
    }
  }
};

export const getMultilingualPageSEO = (page: string, language: 'es' | 'en' = 'es') => {
  const pageConfig = multilingualSeoConfig[page];
  if (!pageConfig) {
    return multilingualSeoConfig.home[language];
  }
  return pageConfig[language];
};

export const getAlternateLanguageUrls = (page: string, currentLanguage: 'es' | 'en') => {
  const pageConfig = multilingualSeoConfig[page];
  if (!pageConfig) {
    return {
      es: 'https://datavoices.com.ar',
      en: 'https://datavoices.com.ar/en'
    };
  }
  
  return {
    es: pageConfig.es.url,
    en: pageConfig.en.url
  };
};

export const getSupportedLanguages = () => ['es', 'en'];

export const getDefaultLanguage = () => 'es';