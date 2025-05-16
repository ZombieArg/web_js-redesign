import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  industryType: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Cecilia se convirtió en una aliada clave para la atención turística del municipio. Responde consultas sobre atractivos, eventos y horarios en segundos, y nos permitió brindar asistencia 24/7 sin necesidad de ampliar el equipo.",
      author: "Lorena Benítez",
      role: "Responsable de Turismo",
      company: "Municipio de Lobos - Oficina de Turismo",
      rating: 5,
      industryType: "Gobierno / Turismo"
    },
    {
      content: "Gracias a Cecilia, ahora tomamos pedidos por WhatsApp sin errores ni demoras. Los clientes pueden consultar por sabores, horarios y entregas de forma automática, lo que agilizó muchísimo nuestra operación.",
      author: "Alejandro Vichenzo",
      role: "Dueño",
      company: "Distribuidora Alma Vichenzo - Helados",
      rating: 5,
      industryType: "Alimentos / Distribución"
    }
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-24 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas de todos los tamaños están transformando su atención al cliente con Cecilia.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].industryType}
                </span>
              </div>
              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={prevTestimonial}
                  className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Siguiente testimonio"
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