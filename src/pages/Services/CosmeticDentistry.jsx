import SEOHead from '../../seo/SEOHead';
import { SERVICE_COSMETIC } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

export default function CosmeticDentistry() {
  return (
    <main style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <SEOHead 
        title="Cosmetic Dentistry | Damodar Dental Care" 
        description="Custom veneers, whitening, and aesthetics to craft your perfect smile in Margao, Goa."
      />
      
      <div className="container" style={{ padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <ScrollReveal>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--ink)', marginBottom: '24px' }}>
                Cosmetic Dentistry
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--sage)', marginBottom: '24px', lineHeight: 1.6 }}>
                Custom veneers, professional whitening, and comprehensive smile design.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink)', opacity: 0.8, lineHeight: 1.6, marginBottom: '24px' }}>
                Your smile is your greatest asset. Our cosmetic dentistry services are focused on improving the aesthetic appearance of your teeth and gums, blending artistry with advanced clinical techniques.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink)', opacity: 0.8, lineHeight: 1.6 }}>
                Whether you're looking for a quick brightness boost with professional teeth whitening or a complete smile makeover with custom porcelain veneers, we design a treatment plan that aligns perfectly with your facial aesthetics and personal goals.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2}>
              <img 
                src={SERVICE_COSMETIC} 
                alt="Cosmetic Dentistry" 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/3' }} 
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
