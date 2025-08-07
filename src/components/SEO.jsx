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
  const defaultKeywords = 'udaan tech academy, best tech training institute bangalore, tech courses bangalore, data science course bangalore, full stack development bangalore, cloud computing course bangalore, coding bootcamp bangalore, placement guarantee tech courses, tech training institute near me, coding classes bangalore, programming courses bangalore, machine learning course bangalore, AI course bangalore, web development course bangalore, career change tech bangalore, job oriented tech courses bangalore, online tech courses india, tech bootcamp bangalore, software training institute bangalore';
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
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="bingbot" content="index, follow" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="revisit-after" content="7 days" />
      <meta name="classification" content="Education" />
      <meta name="category" content="Technology Training" />
      <meta name="subject" content="Tech Education and Career Training" />
      <meta name="copyright" content="Udaan Tech Academy" />
      <meta name="reply-to" content="info@udaantechacademy.com" />
      <meta name="owner" content="Udaan Tech Academy" />
      <meta name="url" content={currentUrl} />
      <meta name="identifier-URL" content={currentUrl} />
      <meta name="directory" content="submission" />
      <meta name="pagename" content={seoTitle} />
      <meta name="subtitle" content={seoDescription} />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="address=yes" />

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
      <meta property="og:street-address" content="123 Tech Street, Innovation Hub" />
      <meta property="og:locality" content="Bangalore" />
      <meta property="og:region" content="Karnataka" />
      <meta property="og:postal-code" content="560001" />
      <meta property="og:country-name" content="India" />
      <meta property="og:email" content="info@udaantechacademy.com" />
      <meta property="og:phone_number" content="+91-98765-43210" />

      {/* UPDATED: Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:image:alt" content="Udaan Tech Academy - Best Tech Training Institute in Bangalore" />
      <meta name="twitter:site" content="@udaantechacademy" />
      <meta name="twitter:creator" content="@udaantechacademy" />
      <meta name="twitter:domain" content="udaan.x-fuzion.com" />

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

      {/* Additional Local SEO Tags */}
      <meta name="DC.title" content={seoTitle} />
      <meta name="DC.creator" content="Udaan Tech Academy" />
      <meta name="DC.subject" content={seoKeywords} />
      <meta name="DC.description" content={seoDescription} />
      <meta name="DC.publisher" content="Udaan Tech Academy" />
      <meta name="DC.contributor" content="Udaan Tech Academy" />
      <meta name="DC.date" content={new Date().toISOString()} />
      <meta name="DC.type" content="Text" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content={currentUrl} />
      <meta name="DC.language" content="en" />
      <meta name="DC.coverage" content="Bangalore, Karnataka, India" />
      <meta name="DC.rights" content="Copyright Udaan Tech Academy" />

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
      {/* IMPORTANT: Replace these with your actual verification codes */}
      {/* <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
      {/* <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" /> */}

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//images.pexels.com" />
    </Helmet>
  );
};

export default SEO;




