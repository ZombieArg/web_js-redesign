import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const { t } = useTranslation();
  
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link 
            to="/"
            className="flex items-center space-x-2 text-[#2B3674] hover:text-[#FF5722] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>{t('nav.backHome')}</span>
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <a href="https://wa.me/5491130313456?text=Hola%20DataVoices%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20consultor%C3%ADa%20en%20IA" target="_blank" rel="noopener noreferrer" className="text-[#2B3674] hover:text-[#FF5722] transition-colors">
            {t('nav.contact')}
          </a>
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
}