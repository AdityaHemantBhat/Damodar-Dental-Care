import SEOHead from '../../seo/SEOHead';
import { SERVICE_ROOT_CANAL } from '../../assets/images';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

export default function RootCanal() {
  return (
    <main style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <SEOHead 
        title="Root Canal Treatment | Damodar Dental Care" 
        description="Painless endodontic procedures to save and restore infected teeth in Margao, Goa."
      />
      
      <div className="container" style={{ padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <ScrollReveal>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--ink)', marginBottom: '24px' }}>
                Root Canal Treatment
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--sage)', marginBottom: '24px', lineHeight: 1.6 }}>
                Painless endodontic procedures to save and restore infected teeth.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink)', opacity: 0.8, lineHeight: 1.6, marginBottom: '24px' }}>
                When the inner pulp of a tooth becomes infected or inflamed, a root canal is the most effective way to eliminate pain and save the natural tooth. Despite its reputation, modern root canal therapy is highly routine and often no more uncomfortable than getting a filling.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink)', opacity: 0.8, lineHeight: 1.6 }}>
                As a specialist in Endodontics, Dr. Damodar utilizes advanced techniques and anesthetics to ensure a completely painless experience. We carefully remove the infection, seal the tooth, and protect it with a crown, restoring its full strength and function.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2}>
              <img 
                src={SERVICE_ROOT_CANAL} 
                alt="Root Canal Treatment" 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/3' }} 
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
