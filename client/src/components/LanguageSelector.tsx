import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-sm font-medium text-[#2B3674] hover:text-[#FF5722] transition-colors"
    >
      <span>{i18n.language.toUpperCase()}</span>
    </button>
  );
};