import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';
import {
  ArrowRight,
  ChevronRight as ChevronRightIcon,
  Bot,
  Database,
  Code,
  GraduationCap,
  ExternalLink,
  BrainCircuit,
  Gauge,
  ShieldCheck,
  Quote,
  Building2,
  FolderSearch,
  BookOpenCheck,
} from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/carousel.css';
import { LanguageSelector } from './components/LanguageSelector';
import { Footer } from './components/Footer';
import { CeciliaService } from './pages/CeciliaService';
import { DataAIService } from './pages/DataAIService';
import { SoftwareDevService } from './pages/SoftwareDevService';
import { ConsultingService } from './pages/ConsultingService';
import CHPLogo from './assets/logos/chp-logo.png';
import BidLogo from './assets/logos/bid-logo.png';
import FarmaciaLogo from './assets/logos/farmacias-del-pueblo-logo.png';
import PadrePepeLogo from './assets/logos/mision-padre-pepe-logo.png';
import DistribuidoraHelarteLogo from './assets/logos/distribuidora-helarte.png';
import BahiadeLobosLogo from './assets/logos/bahiadeloslobos.png';
import MunicipioLobosLogo from './assets/logos/municipio-lobos.jpg';
import workImg from './assets/work.jpg';
import media1 from './assets/infobae-nota.jpg';
import media2 from './assets/c5n-nota.jpg';
import media3 from './assets/perfil-nota.jpg';
import media4 from './assets/puntal-nota.jpg';
import { sendContactForm } from './api/email';
import { SEO, LocalBusinessSEO, getPageSEO } from './components/seo';

/* --------------------- HOMEPAGE --------------------- */
function HomePage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  const seoConfig = getPageSEO('home');

  // Efecto para manejar el scroll a secciones
  useEffect(() => {
    // Mapeo de URLs amigables a IDs de sección
    const sectionMap: Record<string, string> = {
      contacto: 'contact',
      servicios: 'services',
      nosotros: 'about',
      'casos-de-exito': 'success-stories',
      'estados-efectivos': 'effective-states',
    };

    // Extraer el último segmento de la URL
    const urlSegment = location.pathname.split('/').pop() || '';

    // Obtener el ID de sección correspondiente
    const sectionId = sectionMap[urlSegment] || location.hash.replace('#', '');

    // Hacer scroll a la sección si existe
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendContactForm({ email, message });
      setEmail('');
      setMessage('');
      toast.success(t('contact.success'));
    } catch {
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink =
      'https://wa.me/5491130313456?text=Hola%20DataVoices%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios';

  const aiPillars = [
    {
      icon: <BrainCircuit className="w-7 h-7 text-[#FF5722]" />,
      title: t('valueProp.pillars.discovery.title'),
      description: t('valueProp.pillars.discovery.description'),
    },
    {
      icon: <Gauge className="w-7 h-7 text-[#FF5722]" />,
      title: t('valueProp.pillars.execution.title'),
      description: t('valueProp.pillars.execution.description'),
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#FF5722]" />,
      title: t('valueProp.pillars.scale.title'),
      description: t('valueProp.pillars.scale.description'),
    },
  ];

  const outcomes = [
    {
      value: t('valueProp.outcomes.impact.value'),
      label: t('valueProp.outcomes.impact.label'),
    },
    {
      value: t('valueProp.outcomes.launch.value'),
      label: t('valueProp.outcomes.launch.label'),
    },
    {
      value: t('valueProp.outcomes.reliability.value'),
      label: t('valueProp.outcomes.reliability.label'),
    },
  ];

  /* --------------- HERO SLIDES ---------------- */
  const heroSlides = [
    {
      title: t('hero.slides.slide1.title'),
      subtitle: t('hero.slides.slide1.subtitle'),
      image: '../mains.jpg',
      action: () => (
          <a
              href="#contact"
              className="bg-[#FF5722] text-white px-8 py-3 rounded-full hover:bg-[#F4511E] transition-all duration-200 transform hover:scale-105 flex items-center w-fit"
          >
            <span>{t('hero.slides.slide1.cta')}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
      ),
    },
    {
      title: t('hero.slides.slide2.title'),
      subtitle: t('hero.slides.slide2.subtitle'),
      image: 'image.png',
      action: () => (
          <Link
              to="/servicios"
              className="bg-[#FF5722] text-white px-8 py-3 rounded-full hover:bg-[#F4511E] transition-all duration-200 transform hover:scale-105 flex items-center w-fit"
          >
            <span>{t('hero.slides.slide2.cta')}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
      ),
    },
  ];
  /* -------------------------------------------- */

  const services = [
    {
      icon: <Bot className="w-10 h-10 text-[#FF5722]" />,
      title: t('services.customerService.title'),
      description: t('services.customerService.description'),
      link: '/cecilia',
    },
    {
      icon: <Database className="w-10 h-10 text-[#FF5722]" />,
      title: t('services.dataAI.title'),
      description: t('services.dataAI.description'),
      link: '/data-ai',
    },
    {
      icon: <Code className="w-10 h-10 text-[#FF5722]" />,
      title: t('services.softwareDev.title'),
      description: t('services.softwareDev.description'),
      link: '/software-dev',
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#FF5722]" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      link: '/consulting',
    },
  ];

  const clients = [
    {
      name: 'Civic Health Project',
      url: 'https://www.civichealthproject.org/',
      icon: <img src={CHPLogo} alt="Civic Health Project" className="w-full h-6 mb-3" />,
    },
    {
      name: 'Connective Capital Management',
      url: 'https://www.linkedin.com/company/connective-capital-management-llc',
      icon: (
          <div className="w-full h-10 mb-3 rounded-md bg-[#2B3674]/10 text-[#2B3674] flex items-center justify-center overflow-hidden">
            <img
                src="/connective-capital-logo.jpeg"
                alt="Connective Capital Management"
                className="w-full h-full object-contain"
                onLoad={(e) => {
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = 'none';
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
            />
            <span className="font-bold text-sm">CCM</span>
          </div>
      ),
    },
    {
      name: 'Synaptech',
      url: 'https://synap.tech.ec/',
      icon: (
          <div className="w-full h-10 mb-3 rounded-md bg-[#2B3674]/10 text-[#2B3674] flex items-center justify-center overflow-hidden">
            <img
                src="/synaptech-logo.webp"
                alt="Synaptech"
                className="w-full h-full object-contain"
                onLoad={(e) => {
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = 'none';
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
            />
            <span className="font-bold text-sm">SYNAPTECH</span>
          </div>
      ),
    },
    {
      name: 'Serpa',
      url: '',
      icon: (
          <div className="w-full h-10 mb-3 rounded-md bg-[#2B3674]/10 text-[#2B3674] flex items-center justify-center overflow-hidden">
            <img
                src="/serpa-logo.png"
                alt="Serpa"
                className="w-full h-full object-contain"
                onLoad={(e) => {
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = 'none';
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
            />
            <span className="font-bold text-sm">SERPA</span>
          </div>
      ),
    },
    {
      name: 'Municipio de Lobos',
      url: 'https://municipiodelobos.gob.ar/turismo/',
      icon: <img src={MunicipioLobosLogo} alt="Municipio de Lobos" className="w-full h-10 mb-3" />,
    },
    {
      name: 'Distribuidora Helarte',
      url: '',
      icon: <img src={DistribuidoraHelarteLogo} alt="Distribuidora Helarte" className="w-full h-10 mb-3" />,
    },
    {
      name: 'Bahía de los Lobos',
      url: 'https://bahiadeloslobos.com/',
      icon: <img src={BahiadeLobosLogo} alt="Bahía de los Lobos" className="w-full h-10 mb-3" />,
    },
    {
      name: 'Misión Padre Pepe',
      url: 'https://www.instagram.com/misionpadrepepebarracas',
      icon: <img src={PadrePepeLogo} alt="Misión Padre Pepe" className="w-full h-10 mb-3" />,
    },
    {
      name: 'Farmacias del Pueblo',
      url: 'https://www.farmaciasdelpueblo.com.ar/',
      icon: <img src={FarmaciaLogo} alt="Farmacias del Pueblo" className="w-full h-10 mb-3" />,
    },
    {
      name: 'BID',
      url: 'https://www.iadb.org/es',
      icon: <img src={BidLogo} alt="BID" className="w-full h-8 mb-3" />,
    },
  ];

  const successStories = [
    {
      name: t('successStories.products.realTimeInterviewAgent.name'),
      summary: t('successStories.products.realTimeInterviewAgent.summary'),
      highlights: [
        {
          text: t('successStories.products.realTimeInterviewAgent.highlights.screening'),
          emoji: '📨',
        },
        {
          text: t('successStories.products.realTimeInterviewAgent.highlights.liveAgent'),
          emoji: '🎙️',
        },
        {
          text: t('successStories.products.realTimeInterviewAgent.highlights.comparison'),
          emoji: '📊',
        },
        {
          text: t('successStories.products.realTimeInterviewAgent.highlights.collaboration'),
          emoji: '🤝',
        },
      ],
      videoUrl: 'https://youtu.be/J-B2t42JU-o',
      videoEmbedUrl: 'https://www.youtube.com/embed/J-B2t42JU-o',
      demoUrl: '#contact',
      featured: true,
    },
    {
      name: t('successStories.products.normsy.name'),
      summary: t('successStories.products.normsy.summary'),
      highlights: [
        {
          text: t('successStories.products.normsy.highlights.approach'),
          emoji: '🧭',
        },
        {
          text: t('successStories.products.normsy.highlights.detection'),
          emoji: '🔎',
        },
        {
          text: t('successStories.products.normsy.highlights.recommendation'),
          emoji: '💡',
        },
        {
          text: t('successStories.products.normsy.highlights.impact'),
          emoji: '📈',
        },
      ],
      productUrl: 'https://normsy.ai/',
      featured: false,
    },
    {
      name: t('successStories.products.agentLuncher.name'),
      summary: t('successStories.products.agentLuncher.summary'),
      highlights: [
        {
          text: t('successStories.products.agentLuncher.highlights.multiModel'),
          emoji: '🧠',
        },
        {
          text: t('successStories.products.agentLuncher.highlights.configurable'),
          emoji: '⚙️',
        },
        {
          text: t('successStories.products.agentLuncher.highlights.groupRuns'),
          emoji: '🚀',
        },
        {
          text: t('successStories.products.agentLuncher.highlights.comparativeView'),
          emoji: '🪞',
        },
      ],
      featured: false,
    },
  ];

  const effectiveStateTools = [
    {
      icon: <Building2 className="w-6 h-6 text-[#FF5722]" />,
      title: t('effectiveStates.tools.structure.title'),
      description: t('effectiveStates.tools.structure.description'),
    },
    {
      icon: <FolderSearch className="w-6 h-6 text-[#FF5722]" />,
      title: t('effectiveStates.tools.programs.title'),
      description: t('effectiveStates.tools.programs.description'),
    },
    {
      icon: <BookOpenCheck className="w-6 h-6 text-[#FF5722]" />,
      title: t('effectiveStates.tools.learning.title'),
      description: t('effectiveStates.tools.learning.description'),
    },
  ];

  const effectiveStateStats = [
    {
      value: t('effectiveStates.stats.organizations.value'),
      label: t('effectiveStates.stats.organizations.label'),
    },
    {
      value: t('effectiveStates.stats.projects.value'),
      label: t('effectiveStates.stats.projects.label'),
    },
    {
      value: t('effectiveStates.stats.memory.value'),
      label: t('effectiveStates.stats.memory.label'),
    },
  ];

  const testimonials = [
    {
      avatar: '/rob-romero.jpeg',
      initials: 'RR',
      quote: t('homeTestimonials.items.rob.quote'),
      author: t('homeTestimonials.items.rob.author'),
      role: t('homeTestimonials.items.rob.role'),
      company: t('homeTestimonials.items.rob.company'),
    },
    {
      avatar: '/kristin-hansen.jpeg',
      initials: 'KH',
      quote: t('homeTestimonials.items.kristin.quote'),
      author: t('homeTestimonials.items.kristin.author'),
      role: t('homeTestimonials.items.kristin.role'),
      company: t('homeTestimonials.items.kristin.company'),
    },
    {
      avatar: '/leopoldo-reyes.jpg',
      initials: 'LR',
      quote: t('homeTestimonials.items.leopoldo.quote'),
      author: t('homeTestimonials.items.leopoldo.author'),
      role: t('homeTestimonials.items.leopoldo.role'),
      company: t('homeTestimonials.items.leopoldo.company'),
    },
    {
      avatar: '/wendell-brown.jpeg',
      initials: 'WB',
      quote: t('homeTestimonials.items.wendell.quote'),
      author: t('homeTestimonials.items.wendell.author'),
      role: t('homeTestimonials.items.wendell.role'),
      company: t('homeTestimonials.items.wendell.company'),
    },
    {
      avatar: '/ulises-guibelalde.png',
      initials: 'UG',
      quote: t('homeTestimonials.items.ulises.quote'),
      author: t('homeTestimonials.items.ulises.author'),
      role: t('homeTestimonials.items.ulises.role'),
      company: t('homeTestimonials.items.ulises.company'),
    },
  ];

  const pressArticles = [
    {
      id: 'infobae',
      url: 'https://www.infobae.com/tecno/2025/01/09/argentinos-ganan-premio-internacional-por-crear-una-ia-que-desintoxica-redes-sociales-y-elimina-la-violencia/',
      image: media1,
    },
    {
      id: 'c5n',
      url: 'https://www.c5n.com/sociedad/egresados-la-uba-crearon-un-chatbot-ia-pensado-la-atencion-al-cliente-n188577',
      image: media2,
    },
    {
      id: 'perfil',
      url: 'https://www.perfil.com/noticias/tecnologia/ia-al-servicio-de-la-democracia-el-caso-de-exito-de-data-voices.phtml',
      image: media3,
    },
    {
      id: 'puntal1',
      url: 'https://www.puntal.com.ar/inteligencia-artificial/aseguran-que-la-inteligencia-artificial-cambiara-la-economia-y-la-forma-vivir-las-personas-n230523',
      image: media4,
    },
  ];

  /* --------------------- JSX --------------------- */
  return (
      <div className="min-h-screen bg-white">
        <SEO {...seoConfig} />
        <LocalBusinessSEO />
        <Toaster position="top-right" />

        {/* ---------- HEADER ---------- */}
        <header className="bg-white shadow-sm fixed w-full z-50">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-auto">
                <img src="logopng1.png" alt="Data Voices" className="h-full w-auto" />
              </div>
              <span className="text-xl font-bold text-[#2B3674]">Data Voices</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/servicios" className="nav-link">{t('nav.services')}</Link>
              <a href="#success-stories" className="nav-link">{t('nav.successStories')}</a>
              <a href="#effective-states" className="nav-link">{t('nav.effectiveStates')}</a>
              <a href="#press" className="nav-link">{t('nav.press')}</a>
              <a href="#clients" className="nav-link">{t('nav.experience')}</a>
              <Link to="/nosotros" className="nav-link">{t('nav.about')}</Link>
              <Link to="/contacto" className="nav-link">{t('nav.contact')}</Link>
              <LanguageSelector />
            </div>
          </nav>
        </header>

        {/* ---------- HERO SECTION ---------- */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-[#F5F6FA] to-white">
          <div className="container mx-auto px-4">
            <div className="hero-carousel flex justify-center">
              <Slider
                  dots
                  arrows={false}
                  infinite
                  fade
                  speed={800}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay
                  autoplaySpeed={6000}
                  pauseOnHover
                  centerMode
                  centerPadding="0"
                  className="w-full max-w-6xl"
              >
                {heroSlides.map((slide, idx) => (
                    <div key={idx}>
                      <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                          <h1 className="text-4xl md:text-5xl font-bold text-[#2B3674] mb-6 animate-fade-in">
                            {slide.title}
                          </h1>
                          <p className="text-lg text-[#2B3674]/80 mb-8 animate-fade-in-delay">
                            {slide.subtitle}
                          </p>
                          {slide.action()}
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                          <img
                              src={slide.image}
                              alt={slide.title}
                              className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* ---------- VALUE PROPOSITION ---------- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#FF5722]/10 text-[#FF5722] font-semibold mb-5">
                {t('valueProp.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B3674] mb-5">{t('valueProp.title')}</h2>
              <p className="text-[#2B3674]/75 text-lg">{t('valueProp.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {aiPillars.map((pillar, idx) => (
                  <div key={idx} className="bg-[#F8FAFF] border border-[#E0E5F2] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="mb-4">{pillar.icon}</div>
                    <h3 className="text-xl font-semibold text-[#2B3674] mb-3">{pillar.title}</h3>
                    <p className="text-[#2B3674]/75">{pillar.description}</p>
                  </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#2B3674] to-[#33418A] rounded-2xl p-8 md:p-10 text-white">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {outcomes.map((item, idx) => (
                    <div key={idx} className="text-center md:text-left">
                      <p className="text-3xl md:text-4xl font-bold">{item.value}</p>
                      <p className="text-white/80 mt-2">{item.label}</p>
                    </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="#contact"
                    className="inline-flex justify-center items-center bg-[#FF5722] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F4511E] transition-colors"
                >
                  {t('valueProp.primaryCta')}
                </a>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/25"
                >
                  {t('valueProp.secondaryCta')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SERVICES SECTION ---------- */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-16">
              {t('services.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                  <div
                      key={index}
                      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E0E5F2] group"
                  >
                    <div className="mb-4 transform transition-transform duration-200">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-[#2B3674]">{service.title}</h3>
                    <p className="text-[#2B3674]/70 mb-4">{service.description}</p>
                    <Link to={service.link} className="text-[#FF5722] flex items-center hover:text-[#F4511E] group">
                      {t('services.learnMore')}
                      <ChevronRightIcon className="w-4 h-4 ml-1 mt-1 transition-transform" />
                    </Link>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SUCCESS STORIES SECTION ---------- */}
        <section id="success-stories" className="py-20 bg-[#F5F6FA]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-4">{t('successStories.title')}</h2>
            <p className="text-center text-[#2B3674]/70 mb-12 max-w-3xl mx-auto">{t('successStories.subtitle')}</p>

            <div className="space-y-8">
              {successStories
                  .filter((story) => story.featured)
                  .map((story) => (
                  <article
                      key={story.name}
                      className="rounded-xl p-7 shadow-lg border transition-all duration-200 hover:shadow-xl bg-white border-[#E0E5F2]"
                  >
                    <div>
                      <span className="inline-flex px-3 py-1 rounded-full bg-[#FF5722]/10 text-[#FF5722] text-sm font-semibold mb-4">
                        {story.highlights ? t('successStories.featured') : t('successStories.comingSoon')}
                      </span>
                      <h3 className="text-2xl font-bold text-[#2B3674] mb-3">{story.name}</h3>
                      <p className="text-[#2B3674]/75">{story.summary}</p>
                    </div>

                    {story.highlights && (
                        <>
                          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                            {story.highlights.map((item) => (
                                <li key={item.text} className="bg-[#F8FAFF] border border-[#E0E5F2] rounded-lg px-4 py-3 text-[#2B3674]/85">
                                  <span className="mr-2" aria-hidden="true">{item.emoji}</span>
                                  {item.text}
                                </li>
                            ))}
                          </ul>
                          {story.demoUrl && (
                              <a
                                  href={story.demoUrl}
                                  className="inline-flex items-center mt-4 bg-[#FF5722] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#F4511E] transition-colors"
                              >
                                {t('successStories.requestDemo')}
                              </a>
                          )}
                          {story.productUrl && (
                              <a
                                  href={story.productUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center mt-4 text-[#FF5722] font-semibold hover:text-[#F4511E] transition-colors"
                              >
                                {t('successStories.visitProduct')}
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </a>
                          )}
                          {story.videoEmbedUrl && story.videoUrl && (
                              <div className="mt-7">
                                <p className="text-sm font-semibold text-[#2B3674] mb-3">{t('successStories.videoTitle')}</p>
                                <div className="aspect-video w-full rounded-lg overflow-hidden border border-[#E0E5F2]">
                                  <iframe
                                      src={story.videoEmbedUrl}
                                      title={t('successStories.videoTitle')}
                                      className="w-full h-full"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen
                                  />
                                </div>
                                <a
                                    href={story.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center mt-4 text-[#FF5722] font-semibold hover:text-[#F4511E] transition-colors"
                                >
                                  {t('successStories.watchVideo')}
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                              </div>
                          )}
                        </>
                    )}
                  </article>
              ))}

              <div className="grid md:grid-cols-2 gap-8">
                {successStories
                    .filter((story) => !story.featured)
                    .map((story) => (
                        <article
                            key={story.name}
                            className="rounded-xl p-7 shadow-lg border transition-all duration-200 hover:shadow-xl bg-white border-[#E0E5F2]"
                        >
                          <div>
                            <span className="inline-flex px-3 py-1 rounded-full bg-[#FF5722]/10 text-[#FF5722] text-sm font-semibold mb-4">
                              {story.highlights ? t('successStories.featured') : t('successStories.comingSoon')}
                            </span>
                            <h3 className="text-2xl font-bold text-[#2B3674] mb-3">{story.name}</h3>
                            <p className="text-[#2B3674]/75">{story.summary}</p>
                          </div>

                          {story.highlights && (
                              <>
                                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                                  {story.highlights.map((item) => (
                                      <li key={item.text} className="bg-[#F8FAFF] border border-[#E0E5F2] rounded-lg px-4 py-3 text-[#2B3674]/85">
                                        <span className="mr-2" aria-hidden="true">{item.emoji}</span>
                                        {item.text}
                                      </li>
                                  ))}
                                </ul>
                                {story.productUrl && (
                                    <a
                                        href={story.productUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center mt-4 text-[#FF5722] font-semibold hover:text-[#F4511E] transition-colors"
                                    >
                                      {t('successStories.visitProduct')}
                                      <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                )}
                              </>
                          )}
                        </article>
                    ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- EFFECTIVE STATES SECTION ---------- */}
        <section id="effective-states" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#2B3674]/10 text-[#2B3674] font-semibold mb-5">
                {t('effectiveStates.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B3674] mb-5">{t('effectiveStates.title')}</h2>
              <p className="text-[#2B3674]/75 text-lg">
                {t('effectiveStates.subtitlePrefix')}{' '}
                <a
                    href="https://www.linkedin.com/in/juan-manuel-ortiz-de-zarate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF5722] font-semibold hover:text-[#F4511E] transition-colors"
                >
                  Juan Manuel Ortiz de Zárate
                </a>{' '}
                {t('effectiveStates.subtitleSuffix')}
              </p>
            </div>

            <div className="bg-[#F8FAFF] border border-[#E0E5F2] rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <img src={BidLogo} alt="BID" className="h-8 w-auto" />
                <p className="text-[#2B3674] font-semibold">{t('effectiveStates.partnershipTitle')}</p>
              </div>
              <p className="text-[#2B3674]/80">{t('effectiveStates.partnershipDescription')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {effectiveStateTools.map((item) => (
                  <article key={item.title} className="bg-white border border-[#E0E5F2] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-[#2B3674] mb-2">{item.title}</h3>
                    <p className="text-[#2B3674]/75">{item.description}</p>
                  </article>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#2B3674] to-[#33418A] rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-3 gap-6">
                {effectiveStateStats.map((item) => (
                    <div key={item.label} className="text-center md:text-left">
                      <p className="text-3xl font-bold">{item.value}</p>
                      <p className="text-white/80 mt-2">{item.label}</p>
                    </div>
                ))}
              </div>
              <a
                  href="https://publications.iadb.org/es/inteligencia-artificial-para-estados-mas-efectivos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-8 bg-white text-[#2B3674] px-5 py-2 rounded-lg font-semibold hover:bg-[#F5F6FA] transition-colors"
              >
                {t('effectiveStates.downloadReport')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* ---------- PRESS SECTION ---------- */}
        <section id="press" className="py-20 bg-[#F5F6FA]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-4">{t('press.title')}</h2>
            <p className="text-center text-[#2B3674]/70 mb-12 max-w-2xl mx-auto">{t('press.subtitle')}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {pressArticles.map((article) => (
                  <a
                      key={article.id}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                          src={article.image}
                          alt={t(`press.articles.${article.id}.title`)}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                  <span className="text-sm font-medium text-[#FF5722] mb-2 block">
                    {t(`press.articles.${article.id}.source`)}
                  </span>
                      <h3 className="text-lg font-semibold text-[#2B3674] mb-4 group-hover:text-[#FF5722] transition-colors">
                        {t(`press.articles.${article.id}.title`)}
                      </h3>
                      <div className="flex items-center text-[#FF5722] group-hover:text-[#F4511E]">
                        <span>{t('press.readMore')}</span>
                        <ChevronRightIcon className="w-4 h-4 mt-1 ml-1 transition-transform" />
                      </div>
                    </div>
                  </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CLIENTS SECTION ---------- */}
        <section id="clients" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-4">{t('clients.title')}</h2>
            <p className="text-center text-[#2B3674]/70 mb-12 max-w-2xl mx-auto">{t('clients.subtitle')}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clients.map((client, index) => (
                  <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center min-h-[140px] group"
                  >
                    {client.url ? (
                        <a href={client.url} target="_blank" rel="noopener noreferrer" className="w-full flex flex-col items-center">
                          <div className="transform group-hover:scale-110 transition-transform duration-200">{client.icon}</div>
                          <span className="font-medium text-[#2B3674] group-hover:text-[#FF5722] transition-colors">{client.name}</span>
                          <div className="flex items-center mt-2 text-[#FF5722] opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm mr-1">{t('clients.visitSite')}</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </a>
                    ) : (
                        <>
                          <div className="transform group-hover:scale-110 transition-transform duration-200">{client.icon}</div>
                          <span className="font-medium text-[#2B3674] group-hover:text-[#FF5722] transition-colors">{client.name}</span>
                        </>
                    )}
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- TESTIMONIALS SECTION ---------- */}
        <section id="testimonials" className="py-20 bg-[#F5F6FA]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-4">{t('homeTestimonials.title')}</h2>
            <p className="text-center text-[#2B3674]/70 mb-12 max-w-3xl mx-auto">{t('homeTestimonials.subtitle')}</p>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {testimonials.map((item, index) => (
                  <article key={index} className="bg-white rounded-xl p-7 shadow-lg border border-[#E0E5F2] hover:shadow-xl transition-all duration-200">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-[#2B3674]/10 text-[#2B3674] flex items-center justify-center font-semibold mb-4">
                      <img
                          src={item.avatar}
                          alt={item.author}
                          className="w-full h-full object-cover"
                          onLoad={(e) => {
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                            if (fallback) fallback.style.display = 'none';
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                      />
                      <span>{item.initials}</span>
                    </div>
                    <Quote className="w-8 h-8 text-[#FF5722] mb-4" />
                    <p className="text-[#2B3674]/85 mb-6 leading-relaxed">{item.quote}</p>
                    <p className="text-[#2B3674] font-semibold">{item.author}</p>
                    <p className="text-[#2B3674]/70 text-sm">{item.role}</p>
                    <p className="text-[#FF5722] text-sm font-medium">{item.company}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- ABOUT SECTION ---------- */}
        <section id="about" className="py-20 bg-[#F5F6FA]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <img src={workImg} alt="Equipo DataVoices" className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6 text-[#2B3674]">{t('about.title')}</h2>
                <p className="text-[#2B3674]/70 mb-6">{t('about.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CONTACT SECTION ---------- */}
        <section id="contact" className="py-20 bg-[#F5F6FA]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-[#2B3674]">{t('contact.title')}</h2>
              <p className="text-[#2B3674]/70 mb-8">{t('contact.subtitle')}</p>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg transform hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col">
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('contact.email') as string}
                      required
                      className="flex-1 px-4 py-3 rounded-lg border border-[#E0E5F2] focus:outline-none focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20 transition-all duration-200"
                  />
                  <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t('contact.message') as string}
                      required
                      className="flex-1 px-4 py-3 my-5 rounded-lg border border-[#E0E5F2] focus:outline-none focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20 transition-all duration-200"
                  />
                  <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#FF5722] text-white px-8 py-3 rounded-lg hover:bg-[#F4511E] transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? '...' : t('contact.button')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ---------- FOOTER ---------- */}
        <Footer />
      </div>
  );
}

/* ---------------------- REDIRECT COMPONENT ---------------------- */
function RedirectToSection({ section }: { section?: string }) {
  const params = useParams();
  const navigate = useNavigate();

  const targetSection = section || params.section || '';

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      contacto: 'contact',
      servicios: 'services',
      nosotros: 'about'
    };

    const hashId = sectionMap[targetSection] || '';

    if (hashId) {
      navigate(`/#${hashId}`, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, [navigate, targetSection]);

  return null;
}

/* ---------------------- APP ROUTER ---------------------- */
function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<RedirectToSection section="contacto" />} />
        <Route path="/servicios" element={<RedirectToSection section="servicios" />} />
        <Route path="/nosotros" element={<RedirectToSection section="nosotros" />} />
        <Route path="/cecilia" element={<CeciliaService />} />
        <Route path="/data-ai" element={<DataAIService />} />
        <Route path="/software-dev" element={<SoftwareDevService />} />
        <Route path="/consulting" element={<ConsultingService />} />
      </Routes>
  );
}

export default App;
