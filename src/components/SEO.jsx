// import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useLocation } from 'react-router-dom';

// const SEO = ({ 
//   title, 
//   description, 
//   keywords, 
//   image, 
//   type = 'website',
//   author,
//   publishedTime,
//   modifiedTime,
//   article = false,
//   course = null,
//   breadcrumbs = []
// }) => {
//   const location = useLocation();
//   const currentUrl = `https://udaan.x-fuzion.com${location.pathname}`;
  
//   // Default values
//   const defaultTitle = 'Udaan Tech Academy - Launch Your Tech Career in 6 Months';
//   const defaultDescription = 'Transform your career with job-oriented tech courses. Expert mentorship, real-world projects, and 95% placement rate. Courses in Data Science, Full Stack Development, Cloud Infrastructure & more.';
//   const defaultKeywords = 'tech courses, data science course, full stack development, cloud computing, machine learning, coding bootcamp, career change, tech training, programming courses, online tech education';
//   const defaultImage = 'https://udaan.x-fuzion.com/dove.png';
  
//   const seoTitle = title ? `${title} | Udaan Tech Academy` : defaultTitle;
//   const seoDescription = description || defaultDescription;
//   const seoKeywords = keywords || defaultKeywords;
//   const seoImage = image || defaultImage;

//   // FIXED: Correct logo URL for production
//   const logoUrl = 'https://udaan.x-fuzion.com/dove.png'; // Use absolute URL

//   // Note: Favicon in search results is handled by favicon links in HTML head, not structured data

//   // UPDATED: Organization Schema with proper logo
//   const organizationSchema = {
//     "@context": "https://schema.org",
//     "@type": "EducationalOrganization",
//     "name": "Udaan Tech Academy",
//     "alternateName": "Udaan Tech",
//     "url": "https://udaan.x-fuzion.com",
//     "logo": {
//       "@type": "ImageObject",
//       "url": logoUrl,
//       "width": 600,
//       "height": 60,
//       "caption": "Udaan Tech Academy Logo"
//     },
//     "description": "Leading tech training institute offering job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure, and more.",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "123 Tech Street, Innovation Hub",
//       "addressLocality": "Bangalore",
//       "addressRegion": "Karnataka",
//       "postalCode": "560001",
//       "addressCountry": "IN"
//     },
//     "contactPoint": {
//       "@type": "ContactPoint",
//       "telephone": "+91-98765-43210",
//       "contactType": "customer service",
//       "email": "info@udaantechacademy.com"
//     },
//     "sameAs": [
//       "https://www.facebook.com/udaantechacademy",
//       "https://www.twitter.com/udaantechacademy",
//       "https://www.linkedin.com/company/udaantechacademy",
//       "https://www.instagram.com/udaantechacademy"
//     ],
//     "foundingDate": "2020",
//     "numberOfEmployees": "50-100",
//     "slogan": "Launch Your Tech Career"
//   };

//   // Structured Data for Course (if course prop is provided)
//   const courseSchema = course ? {
//     "@context": "https://schema.org",
//     "@type": "Course",
//     "name": course.title,
//     "description": course.description,
//     "provider": {
//       "@type": "EducationalOrganization",
//       "name": "Udaan Tech Academy",
//       "url": "https://udaan.x-fuzion.com",
//       "logo": logoUrl
//     },
//     "courseMode": course.mode || "online",
//     "educationalLevel": course.level || "intermediate",
//     "timeRequired": course.duration,
//     "offers": {
//       "@type": "Offer",
//       "price": course.price?.replace('₹', '').replace(',', ''),
//       "priceCurrency": "INR",
//       "availability": "https://schema.org/InStock"
//     },
//     "aggregateRating": course.rating ? {
//       "@type": "AggregateRating",
//       "ratingValue": course.rating,
//       "reviewCount": course.students || 100,
//       "bestRating": "5",
//       "worstRating": "1"
//     } : undefined
//   } : null;

//   // Breadcrumb Schema
//   const breadcrumbSchema = breadcrumbs.length > 0 ? {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": breadcrumbs.map((crumb, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "name": crumb.name,
//       "item": `https://udaan.x-fuzion.com${crumb.url}`
//     }))
//   } : null;

//   // UPDATED: Article Schema with proper logo
//   const articleSchema = article ? {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     "headline": title,
//     "description": description,
//     "image": seoImage,
//     "author": {
//       "@type": "Person",
//       "name": author || "Udaan Tech Academy"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Udaan Tech Academy",
//       "logo": {
//         "@type": "ImageObject",
//         "url": logoUrl,
//         "width": 600,
//         "height": 60
//       }
//     },
//     "datePublished": publishedTime,
//     "dateModified": modifiedTime || publishedTime,
//     "mainEntityOfPage": {
//       "@type": "WebPage",
//       "@id": currentUrl
//     }
//   } : null;

//   return (
//     <Helmet>
//       {/* UPDATED: Enhanced title for better SEO */}
//       <title>{seoTitle}</title>
//       <meta name="description" content={seoDescription} />
//       <meta name="keywords" content={seoKeywords} />
//       <meta name="author" content="Udaan Tech Academy" />
//       <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
//       <meta name="googlebot" content="index, follow" />
//       <link rel="canonical" href={currentUrl} />

//       {/* Google-compliant favicon links */}
//       <link rel="icon" href="/dove.png" />
//       <link rel="apple-touch-icon" href="/dove.png" />
//       <link rel="apple-touch-icon-precomposed" href="/dove.png" />

//       {/* Open Graph Meta Tags */}
//       <meta property="og:title" content={seoTitle} />
//       <meta property="og:description" content={seoDescription} />
//       <meta property="og:image" content={seoImage} />
//       <meta property="og:image:width" content="1200" />
//       <meta property="og:image:height" content="630" />
//       <meta property="og:url" content={currentUrl} />
//       <meta property="og:type" content={type} />
//       <meta property="og:site_name" content="Udaan Tech Academy" />
//       <meta property="og:locale" content="en_US" />
//       <meta property="og:logo" content={logoUrl} />

//       {/* Twitter Card Meta Tags */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={seoTitle} />
//       <meta name="twitter:description" content={seoDescription} />
//       <meta name="twitter:image" content={seoImage} />
//       <meta name="twitter:site" content="@udaantechacademy" />
//       <meta name="twitter:creator" content="@udaantechacademy" />

//       {/* Additional Meta Tags */}
//       <meta name="theme-color" content="#1e40af" />
//       <meta name="msapplication-TileColor" content="#1e40af" />
//       <meta name="application-name" content="Udaan Tech Academy" />
//       <meta name="apple-mobile-web-app-title" content="Udaan Tech Academy" />
//       <meta name="apple-mobile-web-app-capable" content="yes" />
//       <meta name="apple-mobile-web-app-status-bar-style" content="default" />
//       <meta name="mobile-web-app-capable" content="yes" />

//       {/* Language and Geographic Tags */}
//       <meta name="language" content="English" />
//       <meta name="geo.region" content="IN-KA" />
//       <meta name="geo.placename" content="Bangalore" />
//       <meta name="geo.position" content="12.9716;77.5946" />
//       <meta name="ICBM" content="12.9716, 77.5946" />

//       {/* Article specific meta tags */}
//       {article && (
//         <>
//           <meta property="article:author" content={author || "Udaan Tech Academy"} />
//           {publishedTime && <meta property="article:published_time" content={publishedTime} />}
//           {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
//           <meta property="article:section" content="Technology Education" />
//           <meta property="article:tag" content={seoKeywords} />
//         </>
//       )}

//       {/* UPDATED: Organization Structured Data */}
//       <script type="application/ld+json">
//         {JSON.stringify(organizationSchema)}
//       </script>

//       {courseSchema && (
//         <script type="application/ld+json">
//           {JSON.stringify(courseSchema)}
//         </script>
//       )}

//       {breadcrumbSchema && (
//         <script type="application/ld+json">
//           {JSON.stringify(breadcrumbSchema)}
//         </script>
//       )}

//       {articleSchema && (
//         <script type="application/ld+json">
//           {JSON.stringify(articleSchema)}
//         </script>
//       )}

//       {/* Search Console Verification - REPLACE WITH YOUR ACTUAL CODE */}
//       <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE" />

//       {/* Bing Webmaster Tools */}
//       <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />

//       {/* Yandex Webmaster */}
//       <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />

//       {/* Preconnect to external domains */}
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//       <link rel="preconnect" href="https://www.google-analytics.com" />
//       <link rel="preconnect" href="https://www.googletagmanager.com" />

//       {/* DNS Prefetch */}
//       <link rel="dns-prefetch" href="//fonts.googleapis.com" />
//       <link rel="dns-prefetch" href="//fonts.gstatic.com" />
//       <link rel="dns-prefetch" href="//www.google-analytics.com" />
//     </Helmet>
//   );
// };

// export default SEO;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  article = false,
  course = null,
  breadcrumbs = []
}) => {
  const location = useLocation();
  const currentUrl = `https://udaan.x-fuzion.com${location.pathname}`;
  
  // UPDATED: Enhanced default values with location targeting
  const defaultTitle = 'Udaan Tech Academy - Best Tech Training Institute in Bangalore | Launch Your Career in 6 Months';
  const defaultDescription = 'Transform your career at Udaan Tech Academy, the best tech training institute in Bangalore. Job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure with 95% placement guarantee.';
  const defaultKeywords = 'udaan tech academy, best tech training institute bangalore, tech courses bangalore, data science course bangalore, full stack development bangalore, cloud computing course bangalore, coding bootcamp bangalore, placement guarantee tech courses';
  const defaultImage = 'https://udaan.x-fuzion.com/og-image.png';
  
  const seoTitle = title ? `${title} | Udaan Tech Academy` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || defaultImage;

  // UPDATED: Correct favicon URL (512x512 for Google)
  const faviconUrl = 'https://udaan.x-fuzion.com/favicon-512.png';
  const logoUrl = 'https://udaan.x-fuzion.com/dove.png';

  // UPDATED: Enhanced Organization Schema with local SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Udaan Tech Academy",
    "alternateName": ["Udaan Tech", "Udaan Academy"],
    "url": "https://udaan.x-fuzion.com",
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl,
      "width": 512,
      "height": 512,
      "caption": "Udaan Tech Academy Logo"
    },
    "description": "Leading tech training institute in Bangalore offering job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure, and more with 95% placement guarantee.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street, Innovation Hub",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "info@udaantechacademy.com",
      "areaServed": ["Bangalore", "Karnataka", "India"],
      "availableLanguage": ["en", "hi"]
    }],
    "sameAs": [
      "https://www.facebook.com/udaantechacademy",
      "https://www.twitter.com/udaantechacademy",
      "https://www.linkedin.com/company/udaantechacademy",
      "https://www.instagram.com/udaantechacademy"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "slogan": "Launch Your Tech Career in 6 Months",
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "12.9716",
        "longitude": "77.5946"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tech Training Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Data Science & AI Course",
          "description": "Advanced Data Science and AI training with placement guarantee in Bangalore",
          "provider": {
            "@type": "Organization",
            "name": "Udaan Tech Academy"
          }
        },
        {
          "@type": "Course",
          "name": "Full Stack Development Course",
          "description": "Complete web development training with modern technologies in Bangalore",
          "provider": {
            "@type": "Organization",
            "name": "Udaan Tech Academy"
          }
        },
        {
          "@type": "Course",
          "name": "Cloud Infrastructure Course",
          "description": "AWS, Azure, and DevOps training for cloud professionals in Bangalore",
          "provider": {
            "@type": "Organization",
            "name": "Udaan Tech Academy"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "245",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // UPDATED: Enhanced Course Schema with location targeting
  const courseSchema = course ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Udaan Tech Academy",
      "url": "https://udaan.x-fuzion.com",
      "logo": logoUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "courseMode": course.mode?.toLowerCase().includes('online') ? ["online", "onsite"] : ["onsite"],
    "educationalLevel": course.level?.toLowerCase() || "intermediate",
    "timeRequired": course.duration,
    "location": course.location || "Bangalore, Karnataka",
    "offers": {
      "@type": "Offer",
      "price": course.price?.replace('₹', '').replace(',', '') || "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "category": "Education"
    },
    "aggregateRating": course.rating ? {
      "@type": "AggregateRating",
      "ratingValue": course.rating,
      "reviewCount": course.students || 100,
      "bestRating": "5",
      "worstRating": "1"
    } : undefined,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": course.mode?.toLowerCase().includes('online') ? "online" : "onsite",
      "location": {
        "@type": "Place",
        "name": "Udaan Tech Academy",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      }
    }
  } : null;

  // UPDATED: Enhanced Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": {
        "@type": "WebPage",
        "@id": `https://udaan.x-fuzion.com${crumb.url}`,
        "name": crumb.name
      }
    }))
  } : null;

  // UPDATED: Enhanced Article Schema
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": seoImage,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": author || "Udaan Tech Academy",
      "url": "https://udaan.x-fuzion.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Udaan Tech Academy",
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl,
        "width": 512,
        "height": 512
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "datePublished": publishedTime || new Date().toISOString(),
    "dateModified": modifiedTime || publishedTime || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "keywords": seoKeywords.split(', '),
    "articleSection": "Technology Education",
    "inLanguage": "en-IN"
  } : null;

  // FAQ Schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What courses does Udaan Tech Academy offer in Bangalore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Udaan Tech Academy offers comprehensive tech courses in Bangalore including Data Science & AI, Full Stack Web Development, Cloud Infrastructure & DevOps, Machine Learning, and specialized career tracks with 95% placement guarantee."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the placement rate at Udaan Tech Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Udaan Tech Academy has a 95% placement rate with students getting placed in top tech companies like Google, Microsoft, Amazon, and leading startups in Bangalore."
        }
      },
      {
        "@type": "Question",
        "name": "How long are the tech courses at Udaan Tech Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Course durations vary: Data Science (12 weeks), Full Stack Development (16 weeks), Cloud Infrastructure (10 weeks). All courses include hands-on projects and 1:1 mentorship."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* UPDATED: Enhanced title with location targeting */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Udaan Tech Academy" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={currentUrl} />

      {/* UPDATED: Correct favicon setup for search results */}
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon-180.png" />
      <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-180.png" />

      {/* UPDATED: Enhanced Open Graph with location */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Udaan Tech Academy - Best Tech Training Institute in Bangalore" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Udaan Tech Academy" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:logo" content={logoUrl} />

      {/* UPDATED: Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:image:alt" content="Udaan Tech Academy - Best Tech Training Institute in Bangalore" />
      <meta name="twitter:site" content="@udaantechacademy" />
      <meta name="twitter:creator" content="@udaantechacademy" />

      {/* UPDATED: Geographic and local SEO tags */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* App and theme meta tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content="Udaan Tech Academy" />
      <meta name="apple-mobile-web-app-title" content="Udaan Tech Academy" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:author" content={author || "Udaan Tech Academy"} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:section" content="Technology Education" />
          <meta property="article:tag" content={seoKeywords} />
        </>
      )}

      {/* UPDATED: Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {courseSchema && (
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* FAQ Schema for home page */}
      {location.pathname === '/' && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* CRITICAL: Search Console Verification - REPLACE WITH ACTUAL CODES */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE" />
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};

export default SEO;




