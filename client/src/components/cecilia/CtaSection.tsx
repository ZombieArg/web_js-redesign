import React, { useState } from 'react';
import { Check, ArrowRight, Loader2 } from 'lucide-react';
import { sendCeciliaForm } from '../../api/email';

const CtaSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await sendCeciliaForm({ email, name, company, message });
      if (!response) {
        throw new Error('Error al enviar el formulario');
      }
      setSubmitted(true);
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el formulario');
      console.error('Error al enviar el formulario:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforma tu atención al cliente hoy mismo
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Agenda una demostración gratuita y descubre cómo Cecilia puede ayudarte a automatizar tu atención al cliente las 24 horas.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Agenda tu demo personalizada
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900"
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900"
                    placeholder="Escribe tu consulta aquí"
                    rows={4}
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Agendar demostración
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
                
                {error && (
                  <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  ¡Solicitud recibida!
                </h3>
                <p className="text-gray-600 mb-6">
                  Nos pondremos en contacto contigo a la brevedad para coordinar tu demostración personalizada.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary-600 text-white py-2 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  Enviar otra solicitud
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;