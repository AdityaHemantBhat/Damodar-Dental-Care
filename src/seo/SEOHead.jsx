import { Helmet } from 'react-helmet-async';
import { defaultSEO } from './seoConfig';

export default function SEOHead({ 
  title = defaultSEO.title, 
  description = defaultSEO.description, 
  canonical = defaultSEO.canonical, 
  ogImage = defaultSEO.ogImage, 
  keywords = defaultSEO.keywords 
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <meta name="geo.region" content="IN-GA" />
      <meta name="geo.placename" content="Margao, Goa" />
    </Helmet>
  );
}
