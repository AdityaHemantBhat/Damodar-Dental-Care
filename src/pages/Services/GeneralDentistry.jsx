import SEOHead from '../../seo/SEOHead';
import { SERVICE_GENERAL } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

export default function GeneralDentistry() {
  return (
    <main style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <SEOHead 
        title="General Dentistry | Damodar Dental Care" 
        description="Comprehensive check-ups, cleaning, and preventative care in Margao, Goa."
      />
      
      <div className="container" style={{ padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <ScrollReveal>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--ink)', marginBottom: '24px' }}>
                General Dentistry
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--sage)', marginBottom: '24px', lineHeight: 1.6 }}>
                Comprehensive check-ups, cleaning, and preventative care to keep your smile healthy and vibrant.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink)', opacity: 0.8, lineHeight: 1.6, marginBottom: '24px' }}>
                At Damodar Dental Care, we believe that routine maintenance is the foundation of lifelong oral health. Our general dentistry services include comprehensive oral exams, professional cleanings, digital X-rays, and preventative treatments like sealants and fluoride.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink)', opacity: 0.8, lineHeight: 1.6 }}>
                By detecting and treating minor issues early, we prevent them from becoming major, costly problems down the road. We take the time to educate you on the best home-care practices tailored to your unique smile.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2}>
              <img 
                src={SERVICE_GENERAL} 
                alt="General Dentistry" 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/3' }} 
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
