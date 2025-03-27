interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

export function SEO({ title, description, image, article }: SEOProps) {
  const siteUrl = "https://sedanuryildiz.com";
  const defaultImage = `${siteUrl}/og-image.jpg`; // Add a default OG image
  const fullTitle = `${title} | Sedanur Yıldız`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={window.location.href} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Sedanur Yıldız" />
      <link rel="canonical" href={window.location.href} />
    </>
  );
} 