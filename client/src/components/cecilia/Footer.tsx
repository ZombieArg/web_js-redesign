import React from 'react';
import { Bot, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 text-accent-400 mr-2" />
              <span className="text-2xl font-bold">Cecilia</span>
            </div>
            <p className="text-gray-400 mb-6">
              Automatización inteligente de atención al cliente para emprendimientos, distribuidoras y comercios.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/datavoices/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/data-voices/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">
                  {t('cecilia.benefits.title')}
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.learnMore')}
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-400 hover:text-white transition-colors">
                  {t('clients.title')}
                </a>
              </li>
              <li>
                <a href="#precios" className="text-gray-400 hover:text-white transition-colors">
                  {t('cecilia.cta.primary')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.backHome')}
                </a>
              </li>
              <li>
                <a href="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <a href="mailto:info@datavoices.com.ar" className="text-gray-400 hover:text-white transition-colors">
                  info@datavoices.com.ar
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <a href="tel:+5491122334455" className="text-gray-400 hover:text-white transition-colors">
                  +54 9 11 2233 4455
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <span className="text-gray-400">
                  Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} DataVoices. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;