import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';   
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../../components/LanguageSelector';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo + texto envueltos en Link */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-auto">
            <img
              src="/logopng1.png"
              alt="Data Voices"
              className="h-full w-auto"
            />
          </div>
          <span className="text-xl font-bold text-[#2B3674]">
            Data Voices
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#beneficios"
            className="text-gray-700 hover:text-accent-600 transition-colors"
          >
            {t('cecilia.benefits.title')}
          </a>
          <a
            href="#como-funciona"
            className="text-gray-700 hover:text-accent-600 transition-colors"
          >
            {t('cecilia.howItWorks.title')} {t('cecilia.howItWorks.highlight')}
          </a>
          <a
            href="#testimonios"
            className="text-gray-700 hover:text-accent-600 transition-colors"
          >
            {t('cecilia.testimonials.title')} 
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="#contacto"
            className="bg-accent-600 text-white px-5 py-2 rounded-full hover:bg-accent-700 transition-colors duration-300 font-medium shadow-sm"
          >
            {t('nav.contact')}
          </a>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
