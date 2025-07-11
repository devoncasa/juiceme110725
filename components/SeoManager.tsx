import React, { useEffect } from 'react';
import { Page, UITexts, Language } from '../types.ts';
import { menuData } from '../data/menu.ts';
import { faqsData } from '../data/faqs.ts';

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

  // 1. Determine page-specific SEO content
  let pageTitle = "Juice Me 🍹 | Fresh Smoothies & Juices";
  let metaDescription = uiTexts.metaDescriptionDefault;
  let pagePath = '/';
  let ogImage = 'https://i.postimg.cc/qR5SJjH9/juice-me-image-place-holder-and-background-decorative-0017.jpg'; // Default social image

  switch (page) {
    case 'builder':
      pageTitle = uiTexts.metaTitleBuilder;
      metaDescription = uiTexts.metaDescriptionBuilder;
      pagePath = '/builder';
      ogImage = 'https://i.postimg.cc/WpDbMyzq/juice-me-image-place-holder-and-background-decorative-0019.jpg';
      break;
    case 'cold-pressed-info':
      pageTitle = uiTexts.metaTitleColdPressed;
      metaDescription = uiTexts.metaDescriptionColdPressed;
      pagePath = '/cold-pressed-info';
      ogImage = 'https://i.postimg.cc/SN4wrD7G/cold-press-cover-header.jpg';
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
      ogImage = 'https://i.postimg.cc/XqbWXNT0/juice-me-main-cover-001.jpg';
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
    "sameAs": [
      uiTexts.socialLinks.facebook,
      uiTexts.socialLinks.instagram,
      uiTexts.socialLinks.twitter
    ]
  };

  const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "FoodEstablishment",
      "name": "Juice Me",
      "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pak Khwae",
          "addressLocality": "Mueang Sukhothai District",
          "addressRegion": "Sukhothai",
          "postalCode": "64000",
          "addressCountry": "TH"
      },
      "geo": {
          "@type": "GeoCoordinates",
          "latitude": uiTexts.geoCoordinates.latitude,
          "longitude": uiTexts.geoCoordinates.longitude
      },
      "url": pageUrl,
      "telephone": `+66${uiTexts.contactPhone.substring(1).replace(/-/g, '')}`, // Format to +66866791656
      "priceRange": "฿", // Using the currency symbol based on contactPrice
      "servesCuisine": "Juice, Smoothies, Healthy",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "11:00",
          "closes": "19:00"
        }
      ],
      "menu": `${BASE_URL}/menu`,
      "image": [
        "https://i.postimg.cc/XqbWXNT0/juice-me-main-cover-001.jpg",
        "https://i.postimg.cc/qR5SJjH9/juice-me-image-place-holder-and-background-decorative-0017.jpg",
        "https://i.postimg.cc/xCK6YWWc/juice-me-logo-color.png"
      ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Juice Me",
    "url": BASE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const getBreadcrumbSchema = () => {
    const listItems = [{ "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL }];
    if (page === 'cold-pressed-info') listItems.push({ "@type": "ListItem", "position": 2, "name": "What is Cold-Pressed Juice?", "item": pageUrl });
    else if (page === 'builder') listItems.push({ "@type": "ListItem", "position": 2, "name": "Smoothie Builder", "item": pageUrl });
    else if (page === 'menu') listItems.push({ "@type": "ListItem", "position": 2, "name": "Our Menu", "item": pageUrl });
    return { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": listItems };
  }

  // 3. Construct the final schema array for the current page
  const finalSchema: Record<string, any>[] = [organizationSchema, websiteSchema, localBusinessSchema, getBreadcrumbSchema()];
  
  if (page === 'landing') {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqsData.map(faq => ({
        "@type": "Question",
        "name": faq.question[language],
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer[language]
        }
      }))
    };
    finalSchema.push(faqSchema);
  }
  
  if (page === 'cold-pressed-info') {
      const articleSchema = {
        "@context": "https://schema.org", "@type": "Article", "headline": uiTexts.coldPressedTitle,
        "author": { "@type": "Organization", "name": "Juice Me" },
        "publisher": { "@type": "Organization", "name": "Juice Me", "logo": { "@type": "ImageObject", "url": "https://i.postimg.cc/xCK6YWWc/juice-me-logo-color.png" }},
        "datePublished": "2025-07-07", "dateModified": "2025-07-07",
        "description": uiTexts.coldPressedSummary, "image": ogImage, "mainEntityOfPage": pageUrl
      };
      finalSchema.push(articleSchema);
  }

  if (page === 'menu') {
      const menuSchema = { "@context": "https://schema.org", "@type": "Menu", "name": "Juice Me Menu", "url": pageUrl, "description": uiTexts.metaDescriptionMenu, "hasMenuSection": menuData.map(section => ({
            "@type": "MenuSection", 
            "name": section.title[language], 
            "description": section.description[language],
            "hasMenuItem": section.items.map(item => ({
                "@type": "MenuItem",
                "name": item.name[language],
                "description": item.ingredients?.[language] || item.description?.[language] || '',
                "offers": {
                    "@type": "Offer",
                    "price": item.price?.toString() || section.priceNote?.[language].match(/\d+/)?.[0] || '50',
                    "priceCurrency": "THB"
                }
            }))
        }))
    };
    finalSchema.push(menuSchema);
  }

  // 4. Render all tags using React 19's native head support
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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
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