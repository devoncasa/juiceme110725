import React, { useEffect } from 'react';
import { Page, UITexts, Language } from '../types.ts';

interface SeoManagerProps {
  page: Page;
  language: Language;
  uiTexts: UITexts;
}

const BASE_URL = 'https://juice-me-app.com';

const SeoManager: React.FC<SeoManagerProps> = ({ page, language, uiTexts }) => {
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // 1. Determine page-specific SEO content based on current page and language
  let pageTitle = "Juice Me 🍹 | Fresh Smoothies & Juices";
  let metaDescription = uiTexts.metaDescriptionDefault;
  let pagePath = '/';
  let ogImage = 'https://i.postimg.cc/qR5SJjH9/juice-me-image-place-holder-and-background-decorative-0017.jpg';

  switch (page) {
    case 'builder':
      pageTitle = uiTexts.metaTitleBuilder;
      metaDescription = uiTexts.metaDescriptionBuilder;
      pagePath = '/builder';
      ogImage = `${BASE_URL}/social-share-builder.jpg`; // A specific image for the builder page
      break;
    case 'cold-pressed-info':
      pageTitle = uiTexts.metaTitleColdPressed;
      metaDescription = uiTexts.metaDescriptionColdPressed;
      pagePath = '/cold-pressed-info';
      ogImage = 'https://i.postimg.cc/Zn3SX1vf/juice-me-image-place-holder-and-background-decorative-008.jpg';
      break;
    case 'menu':
      pageTitle = uiTexts.metaTitleMenu;
      metaDescription = uiTexts.metaDescriptionMenu;
      pagePath = '/menu';
      ogImage = 'https://i.postimg.cc/qR5SJjH9/juice-me-image-place-holder-and-background-decorative-0017.jpg';
      break;
    case 'landing':
    default:
      pageTitle = uiTexts.metaTitleLanding;
      metaDescription = uiTexts.metaDescriptionLanding;
      pagePath = '/';
      ogImage = 'https://i.postimg.cc/qR5SJjH9/juice-me-image-place-holder-and-background-decorative-0017.jpg';
      break;
  }

  const pageUrl = `${BASE_URL}${pagePath === '/' ? '' : pagePath}`;
  
  // 2. Define all necessary Schema.org JSON-LD structures
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Juice Me",
    "url": BASE_URL,
    "logo": "https://i.postimg.cc/xCK6YWWc/juice-me-logo-color.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+66-86-679-1656",
      "contactType": "Customer Service"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pak Khwae",
        "addressLocality": "Mueang Sukhothai District",
        "addressRegion": "Sukhothai",
        "postalCode": "64000",
        "addressCountry": "TH"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Juice Me",
    "url": BASE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  
  const productsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": uiTexts.product1Name,
      "image": "https://i.postimg.cc/gk8z76vY/juice-me-image-place-holder-and-background-decorative-0015.jpg",
      "description": uiTexts.product1Desc,
      "brand": { "@type": "Brand", "name": "Juice Me" },
      "offers": { "@type": "Offer", "url": `${BASE_URL}/builder`, "priceCurrency": "THB", "price": "150", "availability": "https://schema.org/InStock" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": uiTexts.product2Name,
      "image": "https://i.postimg.cc/5jcrvy0g/juice-me-image-place-holder-and-background-decorative-0016.jpg",
      "description": uiTexts.product2Desc,
      "brand": { "@type": "Brand", "name": "Juice Me" },
      "offers": { "@type": "Offer", "url": `${BASE_URL}/builder`, "priceCurrency": "THB", "price": "150", "availability": "https://schema.org/InStock" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": uiTexts.product3Name,
      "image": "https://i.postimg.cc/sftfKJG6/juice-me-image-place-holder-and-background-decorative-0014.jpg",
      "description": uiTexts.product3Desc,
      "brand": { "@type": "Brand", "name": "Juice Me" },
      "offers": { "@type": "Offer", "url": `${BASE_URL}/builder`, "priceCurrency": "THB", "price": "160", "availability": "https://schema.org/InStock" }
    }
  ];

  let pageSchema: any;
  switch (page) {
    case 'landing':
      pageSchema = [ organizationSchema, websiteSchema, ...productsSchema ];
      break;
    case 'cold-pressed-info':
      pageSchema = {
        "@context": "https://schema.org", "@type": "Article", "headline": uiTexts.coldPressedTitle,
        "author": { "@type": "Organization", "name": "Juice Me" },
        "publisher": { "@type": "Organization", "name": "Juice Me", "logo": { "@type": "ImageObject", "url": "https://i.postimg.cc/xCK6YWWc/juice-me-logo-color.png" }},
        "datePublished": "2025-07-05", "dateModified": "2025-07-05",
        "description": uiTexts.coldPressedSummary, "image": ogImage, "mainEntityOfPage": pageUrl
      };
      break;
    case 'builder':
      pageSchema = { "@context": "https://schema.org", "@type": "WebPage", "name": "Smoothie Builder", "url": pageUrl, "description": uiTexts.metaDescriptionBuilder };
      break;
    case 'menu':
        pageSchema = { "@context": "https://schema.org", "@type": "Menu", "name": "Juice Me Menu", "url": pageUrl, "description": uiTexts.metaDescriptionMenu, "hasMenuSection": [
            { "@type": "MenuSection", "name": "Cold Pressed Juice", "description": "Freshly cold-pressed, no sugar added. Perfect for detox, digestion, and energy." },
            { "@type": "MenuSection", "name": "Smoothies with Milk", "description": "Creamy smoothies made from fresh fruits and milk." },
            { "@type": "MenuSection", "name": "Spicy Fruit Smoothies", "description": "Thai-style spicy fruit smoothies. A unique twist!" }
        ]};
        break;
  }

  const getBreadcrumbSchema = (pageType: Page) => {
    const listItems = [{ "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL }];
    if (pageType === 'cold-pressed-info') listItems.push({ "@type": "ListItem", "position": 2, "name": "Cold-Pressed Info", "item": pageUrl });
    else if (pageType === 'builder') listItems.push({ "@type": "ListItem", "position": 2, "name": "Smoothie Builder", "item": pageUrl });
    else if (pageType === 'menu') listItems.push({ "@type": "ListItem", "position": 2, "name": "Our Menu", "item": pageUrl });
    if (listItems.length < 2) return null;
    return { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": listItems };
  }

  const breadcrumbSchema = getBreadcrumbSchema(page);
  const finalSchema = breadcrumbSchema ? (Array.isArray(pageSchema) ? [...pageSchema, breadcrumbSchema] : [pageSchema, breadcrumbSchema]) : pageSchema;

  // 3. Render all tags using React 19's native head support
  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={pageUrl} />

      {/* Hreflang Tags */}
      {Object.values(Language).map(lang => (
        <link key={lang} rel="alternate" hrefLang={lang} href={pageUrl} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={pageUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={page === 'cold-pressed-info' ? 'article' : 'website'} />
      <meta property="og:site_name" content="Juice Me" />
      <meta property="og:locale" content={language === Language.TH ? 'th_TH' : language === Language.ZH ? 'zh_CN' : 'en_US'} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* JSON-LD Schema */}
      {finalSchema && (
        <script type="application/ld+json">
          {JSON.stringify(finalSchema, null, 2)}
        </script>
      )}
    </>
  );
};

export default SeoManager;