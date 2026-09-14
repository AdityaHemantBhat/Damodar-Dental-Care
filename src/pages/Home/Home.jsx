import SEOHead from '../../seo/SEOHead';
import { pageSEO } from '../../seo/seoConfig';
import { LocalBusinessSchema, FAQSchema } from '../../seo/JsonLd';
import { faqData } from '../../features/FAQ/faqData';

import Hero from '../../features/Hero/Hero';
import About from '../../features/About/About';
import Services from '../../features/Services/Services';
import Gallery from '../../features/Gallery/Gallery';
import DoctorProfile from '../../features/Doctor/DoctorProfile';
import PatientGuideCTA from '../../features/PatientGuideCTA/PatientGuideCTA';
import FAQ from '../../features/FAQ/FAQ';
import Location from '../../features/Location/Location';

export default function Home() {
  return (
    <main>
      <SEOHead {...pageSEO.home} />
      <LocalBusinessSchema />
      <FAQSchema faqData={faqData} />
      
      <Hero />
      <About />
      <Services />
      <Gallery />
      <DoctorProfile />
      <PatientGuideCTA />
      <FAQ />
      <Location />
    </main>
  );
}
