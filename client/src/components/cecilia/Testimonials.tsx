import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: string;
  rating: number;
}

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const testimonials: Testimonial[] = [
    {
      id: 'lobos',
      rating: 5
    },
    {
      id: 'vichenzo',
      rating: 5
    }
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  const testimonialId = currentTestimonial.id;

  return (
    <section id="testimonios" className="py-24 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cecilia.testimonials.middleTitle')} <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{t('cecilia.testimonials.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cecilia.testimonials.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {t(`cecilia.testimonials.items.${testimonialId}.industryType`)}
                </span>
              </div>
              <div className="flex">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              "{t(`cecilia.testimonials.items.${testimonialId}.content`)}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg">{t(`cecilia.testimonials.items.${testimonialId}.author`)}</p>
                <p className="text-gray-600">
                  {t(`cecilia.testimonials.items.${testimonialId}.role`)}, {t(`cecilia.testimonials.items.${testimonialId}.company`)}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={prevTestimonial}
                  className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label={t('cecilia.testimonials.prevButton')}
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label={t('cecilia.testimonials.nextButton')}
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;