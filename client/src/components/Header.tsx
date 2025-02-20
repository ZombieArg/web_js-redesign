import React from 'react';
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
          <a href="#contact" className="text-[#2B3674] hover:text-[#FF5722] transition-colors">
            {t('nav.contact')}
          </a>
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
}