import SEOHead from '../../seo/SEOHead';
import { SERVICE_ORTHO } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

export default function Orthodontics() {
  return (
    <main style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <SEOHead 
        title="Orthodontics & Braces | Damodar Dental Care" 
        description="Straightening teeth and aligning jaws for optimal function and aesthetics in Margao, Goa."
      />
      
      <div className="container" style={{ padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <ScrollReveal>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--ink)', marginBottom: '24px' }}>
                Orthodontics
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--sage)', marginBottom: '24px', lineHeight: 1.6 }}>
                Straightening teeth and aligning jaws for optimal function and aesthetics.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink)', opacity: 0.8, lineHeight: 1.6, marginBottom: '24px' }}>
                Orthodontics is about much more than just a straight smile—it's about proper bite function, jaw alignment, and long-term oral health. Misaligned teeth can lead to accelerated wear and difficulty maintaining hygiene.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink)', opacity: 0.8, lineHeight: 1.6 }}>
                We offer modern orthodontic solutions, from traditional high-quality braces to subtle clear aligner systems. Our customized treatment plans are designed to guide your teeth into their ideal positions gently and effectively.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2}>
              <img 
                src={SERVICE_ORTHO} 
                alt="Orthodontics" 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/3' }} 
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
