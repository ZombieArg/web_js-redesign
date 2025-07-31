import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessSEOProps {
  businessName?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  phone?: string;
  email?: string;
  website?: string;
  openingHours?: string[];
  priceRange?: string;
  paymentAccepted?: string[];
  currenciesAccepted?: string[];
  languages?: string[];
  serviceArea?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const LocalBusinessSEO: React.FC<LocalBusinessSEOProps> = ({
  businessName = "Data Voices",
  description = "Soluciones de inteligencia artificial, desarrollo de software y consultoría tecnológica en Argentina",
  address = {
    addressLocality: "Buenos Aires",
    addressRegion: "Ciudad Autónoma de Buenos Aires",
    addressCountry: "AR"
  },
  phone = "+54-11-2396-6197",
  email = "contacto@datavoices.com.ar",
  website = "https://datavoices.com.ar",
  openingHours = [
    "Mo-Fr 09:00-18:00"
  ],
  priceRange = "$$",
  paymentAccepted = [
    "Cash",
    "Credit Card",
    "Bank Transfer",
    "PayPal"
  ],
  currenciesAccepted = ["ARS", "USD"],
  languages = ["Spanish", "English"],
  serviceArea = [
    "Buenos Aires",
    "Argentina", 
    "Latin America",
    "Remote"
  ],
  aggregateRating
}) => {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": website,
    "name": businessName,
    "description": description,
    "url": website,
    "telephone": phone,
    "email": email,
    "priceRange": priceRange,
    "paymentAccepted": paymentAccepted,
    "currenciesAccepted": currenciesAccepted,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.6037,
      "longitude": -58.3816
    },
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(" ")[0].split("-").length > 1 
        ? hours.split(" ")[0].split("-").map(day => {
            const dayMap: Record<string, string> = {
              "Mo": "Monday",
              "Tu": "Tuesday", 
              "We": "Wednesday",
              "Th": "Thursday",
              "Fr": "Friday",
              "Sa": "Saturday",
              "Su": "Sunday"
            };
            return dayMap[day] || day;
          })
        : [hours.split(" ")[0]],
      "opens": hours.split(" ")[1]?.split("-")[0],
      "closes": hours.split(" ")[1]?.split("-")[1]
    })),
    "serviceArea": serviceArea.map(area => ({
      "@type": "AdministrativeArea",
      "name": area
    })),
    "availableLanguage": languages,
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning", 
      "Chatbots",
      "Data Analysis",
      "Software Development",
      "Business Intelligence",
      "Process Automation",
      "Digital Transformation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Data Voices",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CecilIA - Chatbot con IA",
            "description": "Chatbot inteligente para atención al cliente automatizada 24/7",
            "category": "Artificial Intelligence",
            "provider": {
              "@type": "Organization",
              "name": businessName
            }
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Análisis de Datos con IA",
            "description": "Consulta bases de datos usando lenguaje natural con inteligencia artificial",
            "category": "Data Analysis",
            "provider": {
              "@type": "Organization",
              "name": businessName
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Desarrollo de Software",
            "description": "Desarrollo de aplicaciones y sistemas personalizados con IA",
            "category": "Software Development",
            "provider": {
              "@type": "Organization",
              "name": businessName
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría en IA",
            "description": "Estrategia y consultoría para implementar inteligencia artificial",
            "category": "Business Consulting",
            "provider": {
              "@type": "Organization", 
              "name": businessName
            }
          }
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/data-voices",
      "https://www.instagram.com/datavoices.ar",
      "https://wa.me/5491123966197"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": phone,
        "contactType": "customer service",
        "availableLanguage": languages,
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "email": email,
        "contactType": "customer service",
        "availableLanguage": languages
      }
    ],
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount,
        "bestRating": 5,
        "worstRating": 1
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessData, null, 2)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSEO;