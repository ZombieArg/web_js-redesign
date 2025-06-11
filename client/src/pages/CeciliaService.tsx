import Header from '../components/cecilia/Header';
import Hero from '../components/cecilia/Hero';
import Benefits from '../components/cecilia/Benefits';
import BotTypes from '../components/cecilia/BotTypes';
import HowItWorks from '../components/cecilia/HowItWorks';
import BotDemo from '../components/cecilia/BotDemo';
import Testimonials from '../components/cecilia/Testimonials';
import Pricing from '../components/cecilia/Pricing';
import CtaSection from '../components/cecilia/CtaSection';
import { Footer } from '../components/Footer';
import { SEO, getPageSEO } from '../components/seo';

export function CeciliaService() {
  const seoConfig = getPageSEO('cecilia');
  
  return (
    <div className="font-sans text-primary-900">
      <SEO {...seoConfig} />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <BotTypes />
        <HowItWorks />
        <BotDemo />
        <Testimonials />
        <Pricing />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}