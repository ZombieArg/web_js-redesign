import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';
import {
    ArrowRight,
    ChevronRight,
    ExternalLink,
    Heart,
    Coffee,
    Palmtree,
    Church,
    Building2,
    Bot,
    Database,
    Code,
    GraduationCap,
    Instagram,
    Linkedin,
    MessageCircle,
    Building,
} from 'lucide-react';
import { LanguageSelector } from './components/LanguageSelector';
import { CeciliaService } from './pages/CeciliaService';
import { DataAIService } from './pages/DataAIService';
import { SoftwareDevService } from './pages/SoftwareDevService';
import { ConsultingService } from './pages/ConsultingService';
import axios from 'axios';
import CHPLogo from '../dist/assets/logos/chp-logo.png';
import BidLogo  from '../dist/assets/logos/bid-logo.png';
import FarmaciaLogo from '../dist/assets/logos/farmacias-del-pueblo-logo.png';
import PadrePepeLogo from '../dist/assets/logos/mision-padre-pepe-logo.png';
import BudarBarLogo from '../dist/assets/logos/buda-bar-logo.jpg';
import IndiaBarLogo from '../dist/assets/logos/india-bar-logo.jpg';

function HomePage() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await axios.post('http://localhost:5000/send-email', { email, message });
            setEmail('');
            setMessage('');
            toast.success(t('contact.success'));
        } catch (error) {
            toast.error(t('contact.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const whatsappLink =
        'https://wa.me/5491123966197?text=Hola%20DataVoices%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios';

    const services = [
        {
            icon: <Bot className='w-10 h-10 text-[#FF5722]' />,
            title: t('services.customerService.title'),
            description: t('services.customerService.description'),
            link: '/cecilia',
        },
        {
            icon: <Database className='w-10 h-10 text-[#FF5722]' />,
            title: t('services.dataAI.title'),
            description: t('services.dataAI.description'),
            link: '/data-ai',
        },
        {
            icon: <Code className='w-10 h-10 text-[#FF5722]' />,
            title: t('services.softwareDev.title'),
            description: t('services.softwareDev.description'),
            link: '/software-dev',
        },
        {
            icon: <GraduationCap className='w-10 h-10 text-[#FF5722]' />,
            title: t('services.consulting.title'),
            description: t('services.consulting.description'),
            link: '/consulting',
        },
    ];

    const clients = [
        {
            name: 'Civic Health Project',
            url: 'https://www.civichealthproject.org/',
            icon: <img src={CHPLogo} alt="Civic Health Project" className="w-100% h-6 mb-3" />,
        },
        {
            name: 'Buda bar',
            url: 'https://www.instagram.com/budabarbs/',
            icon: <img src={BudarBarLogo} alt="Buda Bar" className="w-100% h-10 mb-3" />,
        },
        {
            name: 'India bar',
            url: 'https://www.instagram.com/indiabarbs',
            icon: <img src={IndiaBarLogo} alt="India Bar" className="w-100% h-10 mb-3" />,
        },
        {
            name: 'Misión Padre Pepe',
            url: 'https://www.instagram.com/misionpadrepepebarracas',
            icon: <img src={PadrePepeLogo} alt="Misión Padre Pepe" className="w-100% h-10 mb-3" />,
        },
        {
            name: 'Farmacias del Pueblo',
            url: 'https://www.farmaciasdelpueblo.com.ar/',
            icon: <img src={FarmaciaLogo} alt="Farmacias del Pueblo" className="w-100% h-10 mb-3" />,
        },
        {
            name: 'BID',
            url: 'https://www.iadb.org/es',
            icon: <img src={BidLogo} alt="BID" className="w-100% h-8 mb-3" />,
        },
    ];

    const pressArticles = [
        {
            id: 'infobae',
            url: 'https://www.infobae.com/tecno/2025/01/09/argentinos-ganan-premio-internacional-por-crear-una-ia-que-desintoxica-redes-sociales-y-elimina-la-violencia/',
            image: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80',
        },
        {
            id: 'c5n',
            url: 'https://www.c5n.com/sociedad/egresados-la-uba-crearon-un-chatbot-ia-pensado-la-atencion-al-cliente-n188577',
            image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80',
        },
        {
            id: 'perfil',
            url: 'https://www.perfil.com/noticias/tecnologia/ia-al-servicio-de-la-democracia-el-caso-de-exito-de-data-voices.phtml',
            image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80',
        },
        {
            id: 'puntal1',
            url: 'https://www.puntal.com.ar/inteligencia-artificial/aseguran-que-la-inteligencia-artificial-cambiara-la-economia-y-la-forma-vivir-las-personas-n230523',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
        },
    ];

    return (
        <div className='min-h-screen bg-white'>
            <Toaster position='top-right' />

            {/* Header */}
            <header className='bg-white shadow-sm fixed w-full z-50'>
                <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <div className='h-8 w-auto'>
                            <img
                                src='logopng1.png'
                                alt='Data Voices'
                                className='h-full w-auto'
                            />
                        </div>
                        <span className='text-xl font-bold text-[#2B3674]'>
                            Data Voices
                        </span>
                    </div>
                    <div className='hidden md:flex items-center space-x-8'>
                        <a
                            href='#services'
                            className='text-[#2B3674] hover:text-[#FF5722] transition-colors transform hover:scale-105 duration-200'
                        >
                            {t('nav.services')}
                        </a>
                        <a
                            href='#press'
                            className='text-[#2B3674] hover:text-[#FF5722] transition-colors transform hover:scale-105 duration-200'
                        >
                            {t('nav.press')}
                        </a>
                        <a
                            href='#clients'
                            className='text-[#2B3674] hover:text-[#FF5722] transition-colors transform hover:scale-105 duration-200'
                        >
                            {t('nav.experience')}
                        </a>
                        <a
                            href='#about'
                            className='text-[#2B3674] hover:text-[#FF5722] transition-colors transform hover:scale-105 duration-200'
                        >
                            {t('nav.about')}
                        </a>
                        <a
                            href='#contact'
                            className='text-[#2B3674] hover:text-[#FF5722] transition-colors transform hover:scale-105 duration-200'
                        >
                            {t('nav.contact')}
                        </a>
                        <LanguageSelector />
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className='pt-24 pb-20 bg-gradient-to-br from-[#F5F6FA] to-white'>
                <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
                    <div className='md:w-1/2 mb-10 md:mb-0'>
                        <h1 className='text-4xl md:text-5xl font-bold text-[#2B3674] mb-6 animate-fade-in'>
                            {t('hero.title')}
                        </h1>
                        <p className='text-lg text-[#2B3674]/80 mb-8 animate-fade-in-delay'>
                            {t('hero.subtitle')}
                        </p>
                        <a
                            href={whatsappLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-[#FF5722] text-white px-8 py-3 rounded-full hover:bg-[#F4511E] transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center w-fit'
                        >
                            <span>{t('hero.cta')}</span>
                            <ArrowRight className='w-5 h-5 ml-2' />
                        </a>
                    </div>
                    <div className='md:w-1/2'>
                        <img
                            src='mains.jpg'
                            alt='AI Technology Visualization'
                            className='rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id='services' className='py-20 bg-white'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center text-[#2B3674] mb-16'>
                        {t('services.title')}
                    </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className='p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E0E5F2] group'
                            >
                                <div className='mb-4 transform transition-transform duration-200'>
                                    {service.icon}
                                </div>
                                <h3 className='text-xl font-semibold mb-3 text-[#2B3674]'>
                                    {service.title}
                                </h3>
                                <p className='text-[#2B3674]/70 mb-4'>
                                    {service.description}
                                </p>
                                <Link
                                    to={service.link}
                                    className='text-[#FF5722] flex items-center hover:text-[#F4511E] group'
                                >
                                    {t('services.learnMore')}
                                    <ChevronRight className='w-4 h-4 ml-1 mt-1 transition-transform' />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Press Section */}
            <section id='press' className='py-20 bg-[#F5F6FA]'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center text-[#2B3674] mb-4'>
                        {t('press.title')}
                    </h2>
                    <p className='text-center text-[#2B3674]/70 mb-12 max-w-2xl mx-auto'>
                        {t('press.subtitle')}
                    </p>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {pressArticles.map((article) => (
                            <a
                                key={article.id}
                                href={article.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                            >
                                <div className='relative h-48 overflow-hidden'>
                                    <img
                                        src={article.image}
                                        alt={t(
                                            `press.articles.${article.id}.title`
                                        )}
                                        className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                                </div>
                                <div className='p-6'>
                                    <span className='text-sm font-medium text-[#FF5722] mb-2 block'>
                                        {t(
                                            `press.articles.${article.id}.source`
                                        )}
                                    </span>
                                    <h3 className='text-lg font-semibold text-[#2B3674] mb-4 group-hover:text-[#FF5722] transition-colors'>
                                        {t(
                                            `press.articles.${article.id}.title`
                                        )}
                                    </h3>
                                    <div className='flex items-center text-[#FF5722] group-hover:text-[#F4511E]'>
                                        <span>
                                            {t('press.readMore')}
                                        </span>
                                        <ChevronRight className='w-4 h-4 mt-1 ml-1 transition-transform' />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section id='clients' className='py-20 bg-white'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center text-[#2B3674] mb-4'>
                        {t('clients.title')}
                    </h2>
                    <p className='text-center text-[#2B3674]/70 mb-12 max-w-2xl mx-auto'>
                        {t('clients.subtitle')}
                    </p>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center'>
                        {clients.map((client, index) => (
                            <a
                                key={index}
                                href={client.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center min-h-[140px] group'
                            >
                                <div className='transform group-hover:scale-110 transition-transform duration-200'>
                                    {client.icon}
                                </div>
                                <span className='font-medium text-[#2B3674] group-hover:text-[#FF5722] transition-colors'>
                                    {client.name}
                                </span>
                                <div className='flex items-center mt-2 text-[#FF5722] opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <span className='text-sm mr-1'>
                                        {t('clients.visitSite')}
                                    </span>
                                    <ExternalLink className='w-4 h-4' />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id='about' className='py-20 bg-[#F5F6FA]'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='md:w-1/2 mb-10 md:mb-0'>
                            <img
                                src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
                                alt='Equipo DataVoices'
                                className='rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        <div className='md:w-1/2 md:pl-12'>
                            <h2 className='text-3xl font-bold mb-6 text-[#2B3674]'>
                                {t('about.title')}
                            </h2>
                            <p className='text-[#2B3674]/70 mb-6'>
                                {t('about.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id='contact' className='py-20 bg-[#F5F6FA]'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-3xl mx-auto text-center'>
                        <h2 className='text-3xl font-bold mb-8 text-[#2B3674]'>
                            {t('contact.title')}
                        </h2>
                        <p className='text-[#2B3674]/70 mb-8'>
                            {t('contact.subtitle')}
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className='bg-white p-8 rounded-xl shadow-lg transform hover:shadow-xl transition-all duration-300'
                        >
                            <div className='flex flex-col'>
                                <input
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('contact.email')}
                                    required
                                    className='flex-1 px-4 py-3 rounded-lg border border-[#E0E5F2] focus:outline-none focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20 transition-all duration-200'
                                />
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={t('contact.message')}
                                    required
                                    className='flex-1 px-4 py-3 my-5 rounded-lg border border-[#E0E5F2] focus:outline-none focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20 transition-all duration-200'
                                />
                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='bg-[#FF5722] text-white px-8 py-3 rounded-lg hover:bg-[#F4511E] transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100'
                                >
                                    {isSubmitting ? '...' : t('contact.button')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
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
                        &copy; 2024 DataVoices. {t('footer.rights')}.<br></br>{' '}
                        hola@datavoices.com.ar
                    </p>
                </div>
            </footer>
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cecilia' element={<CeciliaService />} />
            <Route path='/data-ai' element={<DataAIService />} />
            <Route path='/software-dev' element={<SoftwareDevService />} />
            <Route path='/consulting' element={<ConsultingService />} />
        </Routes>
    );
}

export default App;
