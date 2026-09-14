import SEOHead from '../../seo/SEOHead';
import { SERVICE_IMPLANTS } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

export default function DentalImplants() {
  return (
    <main style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <SEOHead 
        title="Dental Implants | Damodar Dental Care" 
        description="Permanent, natural-looking replacements for missing teeth in Margao, Goa."
      />
      
      <div className="container" style={{ padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <ScrollReveal>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--ink)', marginBottom: '24px' }}>
                Dental Implants
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--sage)', marginBottom: '24px', lineHeight: 1.6 }}>
                Permanent, natural-looking replacements for missing teeth.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink)', opacity: 0.8, lineHeight: 1.6, marginBottom: '24px' }}>
                Dental implants are the gold standard for tooth replacement. They look, feel, and function just like your natural teeth. An implant acts as an artificial tooth root, providing a sturdy foundation for a custom crown.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink)', opacity: 0.8, lineHeight: 1.6 }}>
                Our implantology approach ensures precise placement, minimal discomfort, and long-lasting results. Say goodbye to the inconvenience of dentures and restore your ability to eat, speak, and smile with absolute confidence.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2}>
              <img 
                src={SERVICE_IMPLANTS} 
                alt="Dental Implants" 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/3' }} 
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
