import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className='bg-[#2B3674] text-white py-16'>
      <div className='container mx-auto px-4 flex justify-center'>
        <div className='grid md:grid-cols-2 gap-12 max-w-4xl'>
          <div className='flex flex-col items-center md:items-start'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='h-8 w-auto'>
                <img
                  src='logopng1.png'
                  alt='Data Voices'
                  className='h-full w-auto'
                />
              </div>
              <span className='text-2xl font-bold'>
                Data Voices
              </span>
            </div>
            <p className='text-white/80 text-lg mb-6 max-w-md text-center md:text-left'>
              {t('hero.subtitle')}
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <h4 className='text-xl font-semibold mb-6'>
              {t('footer.social.title')}
            </h4>
            <div className='grid grid-cols-1 gap-4 '>
              <a
                href='https://wa.me/5491123966197'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center space-x-3 text-white/80 hover:text-[#FF5722] transition-colors group'
              >
                <MessageCircle className='w-6 h-6' />
                <span className='text-lg'>
                  {t('footer.social.whatsapp')}
                </span>
                <ExternalLink className='w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
              </a>
              <a
                href='https://www.linkedin.com/company/data-voices/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center space-x-3 text-white/80 hover:text-[#FF5722] transition-colors group'
              >
                <Linkedin className='w-6 h-6' />
                <span className='text-lg'>
                  {t('footer.social.linkedin')}
                </span>
                <ExternalLink className='w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
              </a>
              <a
                href='https://www.instagram.com/datavoices/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center space-x-3 text-white/80 hover:text-[#FF5722] transition-colors group'
              >
                <Instagram className='w-6 h-6' />
                <span className='text-lg'>
                  {t('footer.social.instagram')}
                </span>
                <ExternalLink className='w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10 mt-3 pt-8 text-center'>
        <p className='text-white/60'>
          &copy; {new Date().getFullYear()} DataVoices. {t('footer.rights')}.<br></br>{' '}
          hola@datavoices.com.ar
        </p>
      </div>
    </footer>
  );
}