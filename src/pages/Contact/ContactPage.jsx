import SEOHead from '../../seo/SEOHead';
import { pageSEO } from '../../seo/seoConfig';
import { LocalBusinessSchema } from '../../seo/JsonLd';
import Location from '../../features/Location/Location';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function ContactPage() {
  return (
    <main style={{ paddingTop: 'var(--nav-height)' }}>
      <Breadcrumbs paths={[{ name: 'Contact Us', link: null }]} />
      <SEOHead {...pageSEO.contact} />
      <LocalBusinessSchema />
      
      <div style={{ backgroundColor: 'var(--cream)', padding: '120px 0 40px' }}>
        <div className="container">
          <h1 className="display" style={{ fontSize: 'var(--text-3xl)', marginBottom: '24px' }}>Get in Touch</h1>
          <p className="text-lead" style={{ maxWidth: '600px' }}>
            We're here to help you achieve the smile you deserve. Reach out to schedule a consultation.
          </p>
        </div>
      </div>
      
      {/* Reusing the Location component for the contact page */}
      <Location />
    </main>
  );
}
