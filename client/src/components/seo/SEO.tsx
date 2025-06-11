import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  alternateLocales?: string[];
  noIndex?: boolean;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Data Voices - Transformando datos en decisiones',
  description = 'Bienvenido a Data Voices, la plataforma que transforma datos en decisiones. Soluciones de inteligencia artificial, desarrollo de software y consultoría tecnológica.',
  keywords = 'Data Voices, inteligencia artificial, IA, datos, análisis, chatbot, CecilIA, desarrollo software, consultoría tecnológica, automatización, Argentina',
  image = '/logopng1.png',
  url = 'https://datavoices.com.ar',
  type = 'website',
  author = 'Data Voices',
  publishedTime,
  modifiedTime,
  locale = 'es_AR',
  alternateLocales = ['en_US'],
  noIndex = false,
  structuredData
}) => {
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Data Voices",
    "description": "Soluciones de inteligencia artificial, análisis de datos y desarrollo de software",
    "url": url,
    "logo": fullImageUrl,
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
    ]
  };

  const jsonLd = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="language" content={locale} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Data Voices" />
      <meta property="og:locale" content={locale} />
      {alternateLocales.map((altLocale) => (
        <meta key={altLocale} property="og:locale:alternate" content={altLocale} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@datavoices" />
      <meta name="twitter:creator" content="@datavoices" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Hreflang for multilingual support */}
      <link rel="alternate" hrefLang="es" href={url} />
      <link rel="alternate" hrefLang="en" href={url.replace('.com.ar', '.com.ar/en')} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#FF5722" />
      <meta name="msapplication-TileColor" content="#FF5722" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;