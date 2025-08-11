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
//   breadcrumbs = [],
//   locationData = null // NEW: Location-specific data
// }) => {
//   const location = useLocation();
//   const currentUrl = `https://udaan.x-fuzion.com${location.pathname}`;

//   // ENHANCED: Location-aware default values
//   const getLocationAwareDefaults = () => {
//     // Extract location from URL path or locationData
//     const pathLocation = location.pathname.includes('hyderabad') ? 'hyderabad' :
//                          location.pathname.includes('vizag') || location.pathname.includes('visakhapatnam') ? 'visakhapatnam' :
//                          location.pathname.includes('odisha') || location.pathname.includes('bhubaneswar') ? 'bhubaneswar' :
//                          location.pathname.includes('cuttack') ? 'cuttack' :
//                          'bangalore';

//     const currentLocation = locationData?.city || pathLocation;
//     const currentState = locationData?.state || 
//                         (currentLocation === 'hyderabad' ? 'Telangana' :
//                          currentLocation === 'visakhapatnam' ? 'Andhra Pradesh' :
//                          currentLocation.includes('bhubaneswar') || currentLocation.includes('cuttack') ? 'Odisha' :
//                          'Karnataka');

//     const locationDisplayName = currentLocation.charAt(0).toUpperCase() + currentLocation.slice(1);

//     return {
//       title: `Udaan Tech Academy - Best Tech Training Institute in ${locationDisplayName} | Launch Your Career in 6 Months`,
//       description: `Transform your career at Udaan Tech Academy, the best tech training institute in ${locationDisplayName}. Job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure with 95% placement guarantee.`,
//       keywords: `udaan tech academy, best tech training institute ${currentLocation}, tech courses ${currentLocation}, data science course ${currentLocation}, full stack development ${currentLocation}, cloud computing course ${currentLocation}, coding bootcamp ${currentLocation}, placement guarantee tech courses, tech training institute near me, coding classes ${currentLocation}, programming courses ${currentLocation}, machine learning course ${currentLocation}, AI course ${currentLocation}, web development course ${currentLocation}, career change tech ${currentLocation}, job oriented tech courses ${currentLocation}, online tech courses india, tech bootcamp ${currentLocation}, software training institute ${currentLocation}`,
//       location: currentLocation,
//       state: currentState,
//       displayName: locationDisplayName
//     };
//   };

//   const locationDefaults = getLocationAwareDefaults();
//   const defaultImage = 'https://udaan.x-fuzion.com/og-image.png';

//   const seoTitle = title ? `${title} | Udaan Tech Academy` : locationDefaults.title;
//   const seoDescription = description || locationDefaults.description;
//   const seoKeywords = keywords || locationDefaults.keywords;
//   const seoImage = image || defaultImage;

//   // ENHANCED: Location-specific favicon and logo
//   const faviconUrl = 'https://udaan.x-fuzion.com/favicon-512.png';
//   const logoUrl = 'https://udaan.x-fuzion.com/dove.png';

//   // ENHANCED: Multi-location Organization Schema
//   const organizationSchema = {
//     "@context": "https://schema.org",
//     "@type": "EducationalOrganization",
//     "name": "Udaan Tech Academy",
//     "alternateName": ["Udaan Tech", "Udaan Academy"],
//     "url": "https://udaan.x-fuzion.com",
//     "logo": {
//       "@type": "ImageObject",
//       "url": logoUrl,
//       "width": 512,
//       "height": 512,
//       "caption": "Udaan Tech Academy Logo"
//     },
//     "description": `Leading tech training institute offering job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure across Bangalore, Hyderabad, Visakhapatnam, and Bhubaneswar with 95% placement guarantee.`,
//     // ENHANCED: Multiple location support
//     "location": [
//       {
//         "@type": "Place",
//         "name": "Udaan Tech Academy - Bangalore Campus",
//         "address": {
//           "@type": "PostalAddress",
//           "streetAddress": "123 Tech Street, Innovation Hub",
//           "addressLocality": "Bangalore",
//           "addressRegion": "Karnataka",
//           "postalCode": "560001",
//           "addressCountry": "IN"
//         },
//         "geo": {
//           "@type": "GeoCoordinates",
//           "latitude": "12.9716",
//           "longitude": "77.5946"
//         }
//       },
//       {
//         "@type": "Place",
//         "name": "Udaan Tech Academy - Hyderabad Campus",
//         "address": {
//           "@type": "PostalAddress",
//           "streetAddress": "456 Tech Boulevard, HITEC City",
//           "addressLocality": "Hyderabad",
//           "addressRegion": "Telangana",
//           "postalCode": "500081",
//           "addressCountry": "IN"
//         },
//         "geo": {
//           "@type": "GeoCoordinates",
//           "latitude": "17.4485",
//           "longitude": "78.3908"
//         }
//       },
//       {
//         "@type": "Place",
//         "name": "Udaan Tech Academy - Visakhapatnam Campus",
//         "address": {
//           "@type": "PostalAddress",
//           "streetAddress": "789 IT Park Road, MVP Colony",
//           "addressLocality": "Visakhapatnam",
//           "addressRegion": "Andhra Pradesh",
//           "postalCode": "530017",
//           "addressCountry": "IN"
//         },
//         "geo": {
//           "@type": "GeoCoordinates",
//           "latitude": "17.7231",
//           "longitude": "83.3016"
//         }
//       },
//       {
//         "@type": "Place",
//         "name": "Udaan Tech Academy - Bhubaneswar Campus",
//         "address": {
//           "@type": "PostalAddress",
//           "streetAddress": "101 Tech Hub, Patia",
//           "addressLocality": "Bhubaneswar",
//           "addressRegion": "Odisha",
//           "postalCode": "751024",
//           "addressCountry": "IN"
//         },
//         "geo": {
//           "@type": "GeoCoordinates",
//           "latitude": "20.2961",
//           "longitude": "85.8245"
//         }
//       }
//     ],
//     "contactPoint": [{
//       "@type": "ContactPoint",
//       "telephone": "+91-98765-43210",
//       "contactType": "customer service",
//       "email": "info@udaantechacademy.com",
//       "areaServed": ["Bangalore", "Hyderabad", "Visakhapatnam", "Bhubaneswar", "Karnataka", "Telangana", "Andhra Pradesh", "Odisha", "India"],
//       "availableLanguage": ["en", "hi", "te", "or"]
//     }],
//     "sameAs": [
//       "https://www.facebook.com/udaantechacademy",
//       "https://www.twitter.com/udaantechacademy",
//       "https://www.linkedin.com/company/udaantechacademy",
//       "https://www.instagram.com/udaantechacademy",
//       "https://www.youtube.com/udaantechacademy"
//     ],
//     "foundingDate": "2020",
//     "numberOfEmployees": "100-200",
//     "slogan": "Launch Your Tech Career in 6 Months",
//     "areaServed": [
//       {
//         "@type": "City",
//         "name": "Bangalore",
//         "sameAs": "https://en.wikipedia.org/wiki/Bangalore"
//       },
//       {
//         "@type": "City", 
//         "name": "Hyderabad",
//         "sameAs": "https://en.wikipedia.org/wiki/Hyderabad"
//       },
//       {
//         "@type": "City",
//         "name": "Visakhapatnam",
//         "sameAs": "https://en.wikipedia.org/wiki/Visakhapatnam"
//       },
//       {
//         "@type": "City",
//         "name": "Bhubaneswar", 
//         "sameAs": "https://en.wikipedia.org/wiki/Bhubaneswar"
//       }
//     ],
//     "serviceArea": [
//       {
//         "@type": "GeoCircle",
//         "name": "Bangalore Service Area",
//         "geoMidpoint": {
//           "@type": "GeoCoordinates",
//           "latitude": "12.9716",
//           "longitude": "77.5946"
//         },
//         "geoRadius": "50000"
//       },
//       {
//         "@type": "GeoCircle", 
//         "name": "Hyderabad Service Area",
//         "geoMidpoint": {
//           "@type": "GeoCoordinates",
//           "latitude": "17.4485",
//           "longitude": "78.3908"
//         },
//         "geoRadius": "50000"
//       },
//       {
//         "@type": "GeoCircle",
//         "name": "Visakhapatnam Service Area", 
//         "geoMidpoint": {
//           "@type": "GeoCoordinates",
//           "latitude": "17.7231",
//           "longitude": "83.3016"
//         },
//         "geoRadius": "30000"
//       },
//       {
//         "@type": "GeoCircle",
//         "name": "Bhubaneswar Service Area",
//         "geoMidpoint": {
//           "@type": "GeoCoordinates",
//           "latitude": "20.2961", 
//           "longitude": "85.8245"
//         },
//         "geoRadius": "40000"
//       }
//     ],
//     "hasOfferCatalog": {
//       "@type": "OfferCatalog",
//       "name": "Tech Training Courses",
//       "itemListElement": [
//         {
//           "@type": "Course",
//           "name": "Data Science & AI Course",
//           "description": `Advanced Data Science and AI training with placement guarantee in ${locationDefaults.displayName}`,
//           "provider": {
//             "@type": "Organization",
//             "name": "Udaan Tech Academy"
//           },
//           "locationCreated": {
//             "@type": "Place",
//             "name": locationDefaults.displayName
//           }
//         },
//         {
//           "@type": "Course",
//           "name": "Full Stack Development Course",
//           "description": `Complete web development training with modern technologies in ${locationDefaults.displayName}`,
//           "provider": {
//             "@type": "Organization", 
//             "name": "Udaan Tech Academy"
//           },
//           "locationCreated": {
//             "@type": "Place",
//             "name": locationDefaults.displayName
//           }
//         },
//         {
//           "@type": "Course",
//           "name": "Cloud Infrastructure Course", 
//           "description": `AWS, Azure, and DevOps training for cloud professionals in ${locationDefaults.displayName}`,
//           "provider": {
//             "@type": "Organization",
//             "name": "Udaan Tech Academy"
//           },
//           "locationCreated": {
//             "@type": "Place",
//             "name": locationDefaults.displayName
//           }
//         }
//       ]
//     },
//     "aggregateRating": {
//       "@type": "AggregateRating",
//       "ratingValue": "4.8",
//       "reviewCount": "1247",
//       "bestRating": "5",
//       "worstRating": "1"
//     },
//     // ENHANCED: Add branch information
//     "branchOf": {
//       "@type": "Organization",
//       "name": "Udaan Tech Academy",
//       "url": "https://udaan.x-fuzion.com"
//     }
//   };

//   // ENHANCED: Location-aware Course Schema
//   const courseSchema = course ? {
//     "@context": "https://schema.org",
//     "@type": "Course",
//     "name": course.title,
//     "description": course.description,
//     "provider": {
//       "@type": "EducationalOrganization",
//       "name": "Udaan Tech Academy",
//       "url": "https://udaan.x-fuzion.com",
//       "logo": logoUrl,
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": locationDefaults.displayName,
//         "addressRegion": locationDefaults.state,
//         "addressCountry": "IN"
//       }
//     },
//     "courseMode": course.mode?.toLowerCase().includes('online') ? ["online", "onsite"] : ["onsite"],
//     "educationalLevel": course.level?.toLowerCase() || "intermediate",
//     "timeRequired": course.duration,
//     "location": course.location || `${locationDefaults.displayName}, ${locationDefaults.state}`,
//     "inLanguage": ["en", "hi"],
//     "offers": {
//       "@type": "Offer",
//       "price": course.price?.replace('₹', '').replace(',', '') || "0",
//       "priceCurrency": "INR",
//       "availability": "https://schema.org/InStock",
//       "validFrom": new Date().toISOString(),
//       "category": "Education",
//       "areaServed": locationDefaults.displayName
//     },
//     "aggregateRating": course.rating ? {
//       "@type": "AggregateRating",
//       "ratingValue": course.rating,
//       "reviewCount": course.students || 100,
//       "bestRating": "5",
//       "worstRating": "1"
//     } : undefined,
//     "hasCourseInstance": {
//       "@type": "CourseInstance",
//       "courseMode": course.mode?.toLowerCase().includes('online') ? "online" : "onsite",
//       "location": {
//         "@type": "Place",
//         "name": `Udaan Tech Academy - ${locationDefaults.displayName}`,
//         "address": {
//           "@type": "PostalAddress",
//           "addressLocality": locationDefaults.displayName,
//           "addressRegion": locationDefaults.state,
//           "addressCountry": "IN"
//         }
//       }
//     },
//     // ENHANCED: Add location-specific keywords
//     "keywords": [
//       `${course.title.toLowerCase()} ${locationDefaults.location}`,
//       `tech training ${locationDefaults.location}`,
//       `coding course ${locationDefaults.location}`,
//       `programming classes ${locationDefaults.location}`
//     ]
//   } : null;

//   // ENHANCED: Location-aware Breadcrumb Schema
//   const breadcrumbSchema = breadcrumbs.length > 0 ? {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": breadcrumbs.map((crumb, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "name": crumb.name,
//       "item": {
//         "@type": "WebPage",
//         "@id": `https://udaan.x-fuzion.com${crumb.url}`,
//         "name": crumb.name,
//         "locationCreated": {
//           "@type": "Place",
//           "name": locationDefaults.displayName
//         }
//       }
//     }))
//   } : null;

//   // ENHANCED: Location-aware Article Schema
//   const articleSchema = article ? {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     "headline": title,
//     "description": description,
//     "image": {
//       "@type": "ImageObject",
//       "url": seoImage,
//       "width": 1200,
//       "height": 630
//     },
//     "author": {
//       "@type": "Person",
//       "name": author || "Udaan Tech Academy",
//       "url": "https://udaan.x-fuzion.com/about"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Udaan Tech Academy",
//       "logo": {
//         "@type": "ImageObject",
//         "url": logoUrl,
//         "width": 512,
//         "height": 512
//       },
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": locationDefaults.displayName,
//         "addressRegion": locationDefaults.state,
//         "addressCountry": "IN"
//       }
//     },
//     "datePublished": publishedTime || new Date().toISOString(),
//     "dateModified": modifiedTime || publishedTime || new Date().toISOString(),
//     "mainEntityOfPage": {
//       "@type": "WebPage",
//       "@id": currentUrl
//     },
//     "keywords": seoKeywords.split(', '),
//     "articleSection": "Technology Education",
//     "inLanguage": "en-IN",
//     "contentLocation": {
//       "@type": "Place",
//       "name": `${locationDefaults.displayName}, ${locationDefaults.state}, India`
//     }
//   } : null;

//   // ENHANCED: Location-specific FAQ Schema
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [
//       {
//         "@type": "Question",
//         "name": `What courses does Udaan Tech Academy offer in ${locationDefaults.displayName}?`,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": `Udaan Tech Academy offers comprehensive tech courses in ${locationDefaults.displayName} including Data Science & AI, Full Stack Web Development, Cloud Infrastructure & DevOps, Machine Learning, and specialized career tracks with 95% placement guarantee.`
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "What is the placement rate at Udaan Tech Academy?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": `Udaan Tech Academy has a 95% placement rate with students getting placed in top tech companies like Google, Microsoft, Amazon, TCS, Infosys, and leading startups across ${locationDefaults.displayName} and India.`
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "How long are the tech courses at Udaan Tech Academy?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "Course durations vary: Data Science (12 weeks), Full Stack Development (16 weeks), Cloud Infrastructure (10 weeks). All courses include hands-on projects and 1:1 mentorship."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": `Where is Udaan Tech Academy located in ${locationDefaults.displayName}?`,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": `Udaan Tech Academy has multiple convenient locations across ${locationDefaults.displayName} with modern facilities, parking, and easy access to public transportation. We offer both online and offline training options.`
//         }
//       },
//       {
//         "@type": "Question", 
//         "name": `What is the fee structure for tech courses in ${locationDefaults.displayName}?`,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": `Course fees at Udaan Tech Academy range from ₹65,000 to ₹95,000 depending on the program. We offer flexible payment options, EMI facilities, and early bird discounts for ${locationDefaults.displayName} students.`
//         }
//       }
//     ]
//   };

//   // ENHANCED: Location-specific Local Business Schema
//   const localBusinessSchema = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     "@id": `https://udaan.x-fuzion.com/${locationDefaults.location}`,
//     "name": `Udaan Tech Academy - ${locationDefaults.displayName}`,
//     "image": [seoImage],
//     "description": `Premier tech training institute in ${locationDefaults.displayName} offering Data Science, Full Stack Development, and Cloud Computing courses with guaranteed placements.`,
//     "address": {
//       "@type": "PostalAddress",
//       "addressLocality": locationDefaults.displayName,
//       "addressRegion": locationDefaults.state,
//       "addressCountry": "IN"
//     },
//     "telephone": "+91-98765-43210",
//     "email": "info@udaantechacademy.com",
//     "url": currentUrl,
//     "priceRange": "₹₹",
//     "paymentAccepted": ["Cash", "Credit Card", "UPI", "Net Banking"],
//     "currenciesAccepted": "INR",
//     "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-17:00"],
//     "hasMap": `https://maps.google.com/?q=${locationDefaults.displayName}+tech+training`,
//     "isAccessibleForFree": false,
//     "aggregateRating": {
//       "@type": "AggregateRating",
//       "ratingValue": "4.8",
//       "reviewCount": "1247"
//     },
//     "review": [
//       {
//         "@type": "Review",
//         "author": {
//           "@type": "Person",
//           "name": "Rajesh Kumar"
//         },
//         "reviewRating": {
//           "@type": "Rating",
//           "ratingValue": "5"
//         },
//         "reviewBody": `Excellent tech training institute in ${locationDefaults.displayName}. Got placed in a top company after completing Data Science course.`
//       }
//     ],
//     "makesOffer": [
//       {
//         "@type": "Offer",
//         "itemOffered": {
//           "@type": "Course",
//           "name": "Data Science Course"
//         },
//         "price": "85000",
//         "priceCurrency": "INR",
//         "areaServed": locationDefaults.displayName
//       }
//     ]
//   };

//   return (
//     <Helmet>
//       {/* ENHANCED: Location-aware title and meta tags */}
//       <title>{seoTitle}</title>
//       <meta name="description" content={seoDescription} />
//       <meta name="keywords" content={seoKeywords} />
//       <meta name="author" content="Udaan Tech Academy" />
//       <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
//       <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
//       <meta name="bingbot" content="index, follow" />
//       <link rel="canonical" href={currentUrl} />

//       {/* ENHANCED: Location-specific meta tags */}
//       <meta name="revisit-after" content="7 days" />
//       <meta name="classification" content="Education" />
//       <meta name="category" content="Technology Training" />
//       <meta name="subject" content={`Tech Education and Career Training in ${locationDefaults.displayName}`} />
//       <meta name="copyright" content="Udaan Tech Academy" />
//       <meta name="reply-to" content="info@udaantechacademy.com" />
//       <meta name="owner" content="Udaan Tech Academy" />
//       <meta name="url" content={currentUrl} />
//       <meta name="identifier-URL" content={currentUrl} />
//       <meta name="directory" content="submission" />
//       <meta name="pagename" content={seoTitle} />
//       <meta name="subtitle" content={seoDescription} />
//       <meta name="target" content="all" />
//       <meta name="audience" content="all" />
//       <meta name="coverage" content="Worldwide" />
//       <meta name="distribution" content="Global" />
//       <meta name="rating" content="General" />
//       <meta name="HandheldFriendly" content="True" />
//       <meta name="MobileOptimized" content="320" />
//       <meta name="apple-mobile-web-app-capable" content="yes" />
//       <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
//       <meta name="format-detection" content="telephone=yes" />
//       <meta name="format-detection" content="address=yes" />

//       {/* Favicon setup */}
//       <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
//       <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
//       <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
//       <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
//       <link rel="apple-touch-icon" href="/apple-touch-icon-180.png" />
//       <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-180.png" />

//       {/* ENHANCED: Location-aware Open Graph tags */}
//       <meta property="og:title" content={seoTitle} />
//       <meta property="og:description" content={seoDescription} />
//       <meta property="og:image" content={seoImage} />
//       <meta property="og:image:width" content="1200" />
//       <meta property="og:image:height" content="630" />
//       <meta property="og:image:alt" content={`Udaan Tech Academy - Best Tech Training Institute in ${locationDefaults.displayName}`} />
//       <meta property="og:url" content={currentUrl} />
//       <meta property="og:type" content={type} />
//       <meta property="og:site_name" content="Udaan Tech Academy" />
//       <meta property="og:locale" content="en_US" />
//       <meta property="og:logo" content={logoUrl} />
//       <meta property="og:locality" content={locationDefaults.displayName} />
//       <meta property="og:region" content={locationDefaults.state} />
//       <meta property="og:country-name" content="India" />
//       <meta property="og:email" content="info@udaantechacademy.com" />
//       <meta property="og:phone_number" content="+91-98765-43210" />

//       {/* Twitter Card */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={seoTitle} />
//       <meta name="twitter:description" content={seoDescription} />
//       <meta name="twitter:image" content={seoImage} />
//       <meta name="twitter:image:alt" content={`Udaan Tech Academy - Best Tech Training Institute in ${locationDefaults.displayName}`} />
//       <meta name="twitter:site" content="@udaantechacademy" />
//       <meta name="twitter:creator" content="@udaantechacademy" />
//       <meta name="twitter:domain" content="udaan.x-fuzion.com" />

//       {/* ENHANCED: Location-specific geographic tags */}
//       <meta name="geo.region" content={locationDefaults.location === 'bangalore' ? 'IN-KA' : 
//                                        locationDefaults.location === 'hyderabad' ? 'IN-TG' :
//                                        locationDefaults.location === 'visakhapatnam' ? 'IN-AP' :
//                                        'IN-OR'} />
//       <meta name="geo.placename" content={locationDefaults.displayName} />
//       <meta name="ICBM" content={locationDefaults.location === 'bangalore' ? '12.9716, 77.5946' :
//                                   locationDefaults.location === 'hyderabad' ? '17.4485, 78.3908' :
//                                   locationDefaults.location === 'visakhapatnam' ? '17.7231, 83.3016' :
//                                   '20.2961, 85.8245'} />
//       <meta name="language" content="English" />
//       <meta name="coverage" content="Worldwide" />
//       <meta name="distribution" content="Global" />
//       <meta name="rating" content="General" />

//       {/* App and theme meta tags */}
//       <meta name="theme-color" content="#1e40af" />
//       <meta name="msapplication-TileColor" content="#1e40af" />
//       <meta name="application-name" content="Udaan Tech Academy" />
//       <meta name="apple-mobile-web-app-title" content="Udaan Tech Academy" />
//       <meta name="apple-mobile-web-app-capable" content="yes" />
//       <meta name="apple-mobile-web-app-status-bar-style" content="default" />
//       <meta name="mobile-web-app-capable" content="yes" />

//       {/* ENHANCED: Location-aware Dublin Core tags */}
//       <meta name="DC.title" content={seoTitle} />
//       <meta name="DC.creator" content="Udaan Tech Academy" />
//       <meta name="DC.subject" content={seoKeywords} />
//       <meta name="DC.description" content={seoDescription} />
//       <meta name="DC.publisher" content="Udaan Tech Academy" />
//       <meta name="DC.contributor" content="Udaan Tech Academy" />
//       <meta name="DC.date" content={new Date().toISOString()} />
//       <meta name="DC.type" content="Text" />
//       <meta name="DC.format" content="text/html" />
//       <meta name="DC.identifier" content={currentUrl} />
//       <meta name="DC.language" content="en" />
//       <meta name="DC.coverage" content={`${locationDefaults.displayName}, ${locationDefaults.state}, India`} />
//       <meta name="DC.rights" content="Copyright Udaan Tech Academy" />

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

//       {/* ENHANCED: Multi-location Structured Data */}
//       <script type="application/ld+json">
//         {JSON.stringify(organizationSchema)}
//       </script>

//       {/* Local Business Schema for current location */}
//       <script type="application/ld+json">
//         {JSON.stringify(localBusinessSchema)}
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

//       {/* Location-specific FAQ Schema */}
//       <script type="application/ld+json">
//         {JSON.stringify(faqSchema)}
//       </script>

//       {/* ENHANCED: Multiple search console verification codes for different locations */}
//       <meta name="google-site-verification" content="google3e4ab63668ce028f.html" />
//       <meta name="msvalidate.01" content="bing-verification-code" />
//       <meta name="yandex-verification" content="yandex-verification-code" />
//       <meta name="baidu-site-verification" content="baidu-verification-code" />
      
//       {/* ENHANCED: Location-specific hreflang tags for multi-location SEO */}
//       <link rel="alternate" hreflang="en-IN" href="https://udaan.x-fuzion.com" />
//       <link rel="alternate" hreflang="en" href="https://udaan.x-fuzion.com/bangalore" />
//       <link rel="alternate" hreflang="en" href="https://udaan.x-fuzion.com/hyderabad" />
//       <link rel="alternate" hreflang="en" href="https://udaan.x-fuzion.com/visakhapatnam" />
//       <link rel="alternate" hreflang="en" href="https://udaan.x-fuzion.com/bhubaneswar" />
//       <link rel="alternate" hreflang="x-default" href="https://udaan.x-fuzion.com" />

//       {/* ENHANCED: Preconnect to external domains for performance */}
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//       <link rel="preconnect" href="https://www.google-analytics.com" />
//       <link rel="preconnect" href="https://www.googletagmanager.com" />
      
//       {/* DNS prefetch for better performance */}
//       <link rel="dns-prefetch" href="//fonts.googleapis.com" />
//       <link rel="dns-prefetch" href="//www.google-analytics.com" />
//       <link rel="dns-prefetch" href="//connect.facebook.net" />
//       <link rel="dns-prefetch" href="//platform.twitter.com" />

//       {/* ENHANCED: Location-aware manifest for PWA support */}
//       <link rel="manifest" href="/manifest.json" />
      
//       {/* Viewport meta tag for responsive design */}
//       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
      
//       {/* Additional security headers */}
//       <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
//       <meta httpEquiv="X-Frame-Options" content="DENY" />
//       <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
//       <meta name="referrer" content="strict-origin-when-cross-origin" />
      
//       {/* ENHANCED: Cache control for better performance */}
//       <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
//       <meta httpEquiv="Expires" content={new Date(Date.now() + 31536000000).toUTCString()} />
      
//       {/* Rich snippets for better search appearance */}
//       <meta itemProp="name" content={seoTitle} />
//       <meta itemProp="description" content={seoDescription} />
//       <meta itemProp="image" content={seoImage} />
      
//       {/* ENHANCED: Location-specific alternate URLs */}
//       {locationDefaults.location !== 'bangalore' && (
//         <link rel="alternate" href="https://udaan.x-fuzion.com/bangalore" hrefLang="en" title="Bangalore Campus" />
//       )}
//       {locationDefaults.location !== 'hyderabad' && (
//         <link rel="alternate" href="https://udaan.x-fuzion.com/hyderabad" hrefLang="en" title="Hyderabad Campus" />
//       )}
//       {locationDefaults.location !== 'visakhapatnam' && (
//         <link rel="alternate" href="https://udaan.x-fuzion.com/visakhapatnam" hrefLang="en" title="Visakhapatnam Campus" />
//       )}
//       {locationDefaults.location !== 'bhubaneswar' && (
//         <link rel="alternate" href="https://udaan.x-fuzion.com/bhubaneswar" hrefLang="en" title="Bhubaneswar Campus" />
//       )}
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
  breadcrumbs = [],
  locationData = null
}) => {
  const location = useLocation();
  const currentUrl = `https://udaan.x-fuzion.com${location.pathname}`;

  // ENHANCED: Better location detection with proper URL mapping
  const getLocationAwareDefaults = () => {
    const pathLocation = location.pathname.includes('/hyderabad') ? 'hyderabad' :
                         location.pathname.includes('/vizag') || location.pathname.includes('/visakhapatnam') ? 'visakhapatnam' :
                         location.pathname.includes('/odisha') || location.pathname.includes('/bhubaneswar') ? 'bhubaneswar' :
                         location.pathname.includes('/cuttack') ? 'cuttack' :
                         'bangalore';

    const currentLocation = locationData?.city || pathLocation;
    const currentState = locationData?.state || 
                        (currentLocation === 'hyderabad' ? 'Telangana' :
                         currentLocation === 'visakhapatnam' ? 'Andhra Pradesh' :
                         currentLocation.includes('bhubaneswar') || currentLocation.includes('cuttack') ? 'Odisha' :
                         'Karnataka');

    const locationDisplayName = currentLocation.charAt(0).toUpperCase() + currentLocation.slice(1);

    // FIXED: More targeted keyword strategy - focus on primary keywords first
    const primaryKeywords = [
      'tech training institute',
      'data science course',
      'full stack development course',
      'cloud computing course',
      'coding bootcamp',
      'programming courses',
      'machine learning course',
      'web development course',
      'software training institute',
      'tech courses'
    ];

    const locationKeywords = primaryKeywords.map(keyword => 
      `${keyword} ${currentLocation}, ${keyword} in ${currentLocation}, best ${keyword} ${currentLocation}`
    ).join(', ');

    return {
      // FIXED: Lead with primary keywords, not brand name
      title: title ? `${title} - Best Tech Training Institute in ${locationDisplayName}` : 
             `Best Tech Training Institute in ${locationDisplayName} | Data Science, Full Stack Development & Cloud Courses | Udaan Tech Academy`,
      
      // FIXED: Description starts with keywords, not brand name
      description: description || `Top-rated tech training institute in ${locationDisplayName} offering job-guaranteed courses in Data Science, Full Stack Development, Cloud Computing. 95% placement rate. Enroll now at Udaan Tech Academy.`,
      
      // FIXED: Better keyword density and natural placement
      keywords: keywords || `tech training institute ${currentLocation}, data science course ${currentLocation}, full stack development ${currentLocation}, cloud computing course ${currentLocation}, coding bootcamp ${currentLocation}, programming courses ${currentLocation}, best tech institute ${currentLocation}, software training ${currentLocation}, machine learning course ${currentLocation}, web development course ${currentLocation}, ${locationKeywords}, udaan tech academy`,
      
      location: currentLocation,
      state: currentState,
      displayName: locationDisplayName
    };
  };

  const locationDefaults = getLocationAwareDefaults();
  const defaultImage = 'https://udaan.x-fuzion.com/og-image.png';

  const seoTitle = locationDefaults.title;
  const seoDescription = locationDefaults.description;
  const seoKeywords = locationDefaults.keywords;
  const seoImage = image || defaultImage;

  const faviconUrl = 'https://udaan.x-fuzion.com/favicon-512.png';
  const logoUrl = 'https://udaan.x-fuzion.com/dove.png';

  // ENHANCED: Better organization schema with location-first approach
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "name": `Udaan Tech Academy - ${locationDefaults.displayName}`,
    "legalName": "Udaan Tech Academy",
    "alternateName": [
      `Best Tech Training Institute ${locationDefaults.displayName}`,
      `Tech Courses ${locationDefaults.displayName}`,
      `Coding Bootcamp ${locationDefaults.displayName}`,
      "Udaan Tech",
      "Udaan Academy"
    ],
    "url": currentUrl,
    "mainEntityOfPage": currentUrl,
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl,
      "width": 512,
      "height": 512,
      "caption": `Udaan Tech Academy - Best Tech Training Institute in ${locationDefaults.displayName}`
    },
    "image": [seoImage, logoUrl],
    "description": `Leading tech training institute in ${locationDefaults.displayName} offering job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure with 95% placement guarantee. Best coding bootcamp in ${locationDefaults.displayName}.`,
    
    // ENHANCED: Primary location with detailed address
    "address": {
      "@type": "PostalAddress",
      "streetAddress": locationDefaults.location === 'hyderabad' ? "456 Tech Boulevard, HITEC City" :
                       locationDefaults.location === 'visakhapatnam' ? "789 IT Park Road, MVP Colony" :
                       locationDefaults.location === 'bhubaneswar' ? "101 Tech Hub, Patia" :
                       "123 Tech Street, Innovation Hub",
      "addressLocality": locationDefaults.displayName,
      "addressRegion": locationDefaults.state,
      "postalCode": locationDefaults.location === 'hyderabad' ? "500081" :
                    locationDefaults.location === 'visakhapatnam' ? "530017" :
                    locationDefaults.location === 'bhubaneswar' ? "751024" :
                    "560001",
      "addressCountry": "IN"
    },
    
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": locationDefaults.location === 'hyderabad' ? "17.4485" :
                  locationDefaults.location === 'visakhapatnam' ? "17.7231" :
                  locationDefaults.location === 'bhubaneswar' ? "20.2961" :
                  "12.9716",
      "longitude": locationDefaults.location === 'hyderabad' ? "78.3908" :
                   locationDefaults.location === 'visakhapatnam' ? "83.3016" :
                   locationDefaults.location === 'bhubaneswar' ? "85.8245" :
                   "77.5946"
    },

    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "info@udaantechacademy.com",
      "areaServed": [locationDefaults.displayName, locationDefaults.state, "India"],
      "availableLanguage": ["en", "hi", "te", "or"],
      "hoursAvailable": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }, {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }]
    }],

    "sameAs": [
      "https://www.facebook.com/udaantechacademy",
      "https://www.twitter.com/udaantechacademy", 
      "https://www.linkedin.com/company/udaantechacademy",
      "https://www.instagram.com/udaantechacademy",
      "https://www.youtube.com/udaantechacademy"
    ],

    "foundingDate": "2020",
    "slogan": `Launch Your Tech Career in 6 Months - ${locationDefaults.displayName}`,
    "priceRange": "₹₹",
    
    // ENHANCED: Service area with specific radius
    "areaServed": [{
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates", 
        "latitude": locationDefaults.location === 'hyderabad' ? "17.4485" :
                    locationDefaults.location === 'visakhapatnam' ? "17.7231" :
                    locationDefaults.location === 'bhubaneswar' ? "20.2961" :
                    "12.9716",
        "longitude": locationDefaults.location === 'hyderabad' ? "78.3908" :
                     locationDefaults.location === 'visakhapatnam' ? "83.3016" :
                     locationDefaults.location === 'bhubaneswar' ? "85.8245" :
                     "77.5946"
      },
      "geoRadius": "50000"
    }],

    // ENHANCED: Detailed course offerings
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Tech Training Courses in ${locationDefaults.displayName}`,
      "itemListElement": [
        {
          "@type": "Course",
          "name": `Data Science Course in ${locationDefaults.displayName}`,
          "description": `Advanced Data Science and AI training with placement guarantee in ${locationDefaults.displayName}. Learn Python, Machine Learning, Deep Learning with hands-on projects.`,
          "provider": {
            "@type": "Organization",
            "name": "Udaan Tech Academy",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": locationDefaults.displayName,
              "addressRegion": locationDefaults.state
            }
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["onsite", "online"],
            "location": {
              "@type": "Place",
              "name": locationDefaults.displayName
            }
          }
        },
        {
          "@type": "Course", 
          "name": `Full Stack Development Course in ${locationDefaults.displayName}`,
          "description": `Complete web development training with React, Node.js, MongoDB in ${locationDefaults.displayName}. Build real-world projects with mentorship.`,
          "provider": {
            "@type": "Organization",
            "name": "Udaan Tech Academy",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": locationDefaults.displayName,
              "addressRegion": locationDefaults.state
            }
          }
        }
      ]
    },

    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": "4.8",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },

    // ENHANCED: Add all locations as additional properties
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Primary Location",
        "value": locationDefaults.displayName
      },
      {
        "@type": "PropertyValue",
        "name": "Course Types",
        "value": "Data Science, Full Stack Development, Cloud Computing, Machine Learning"
      },
      {
        "@type": "PropertyValue",
        "name": "Placement Rate",
        "value": "95%"
      }
    ]
  };

  // ENHANCED: More comprehensive local business schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": currentUrl,
    "name": `Best Tech Training Institute in ${locationDefaults.displayName} - Udaan Tech Academy`,
    "alternateName": [
      `Tech Courses ${locationDefaults.displayName}`,
      `Coding Bootcamp ${locationDefaults.displayName}`,
      `Data Science Course ${locationDefaults.displayName}`
    ],
    "image": [seoImage],
    "description": `#1 rated tech training institute in ${locationDefaults.displayName}. Job-guaranteed courses in Data Science, Full Stack Development, Cloud Computing. 95% placement success rate.`,
    
    "address": {
      "@type": "PostalAddress",
      "streetAddress": locationDefaults.location === 'hyderabad' ? "456 Tech Boulevard, HITEC City" :
                       locationDefaults.location === 'visakhapatnam' ? "789 IT Park Road, MVP Colony" :
                       locationDefaults.location === 'bhubaneswar' ? "101 Tech Hub, Patia" :
                       "123 Tech Street, Innovation Hub",
      "addressLocality": locationDefaults.displayName,
      "addressRegion": locationDefaults.state,
      "postalCode": locationDefaults.location === 'hyderabad' ? "500081" :
                    locationDefaults.location === 'visakhapatnam' ? "530017" :
                    locationDefaults.location === 'bhubaneswar' ? "751024" :
                    "560001",
      "addressCountry": "IN"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": locationDefaults.location === 'hyderabad' ? "17.4485" :
                  locationDefaults.location === 'visakhapatnam' ? "17.7231" :
                  locationDefaults.location === 'bhubaneswar' ? "20.2961" :
                  "12.9716",
      "longitude": locationDefaults.location === 'hyderabad' ? "78.3908" :
                   locationDefaults.location === 'visakhapatnam' ? "83.3016" :
                   locationDefaults.location === 'bhubaneswar' ? "85.8245" :
                   "77.5946"
    },

    "telephone": "+91-98765-43210",
    "email": "info@udaantechacademy.com", 
    "url": currentUrl,
    "priceRange": "₹65,000 - ₹95,000",
    "paymentAccepted": ["Cash", "Credit Card", "UPI", "Net Banking", "EMI"],
    "currenciesAccepted": "INR",
    
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday", 
        "opens": "09:00",
        "closes": "17:00"
      }
    ],

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },

    // ENHANCED: Multiple reviews with location-specific content
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": `Best tech training institute in ${locationDefaults.displayName}! Completed Data Science course and got placed in a top MNC. Excellent trainers and practical approach.`,
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "Priya Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"  
        },
        "reviewBody": `Amazing full stack development course in ${locationDefaults.displayName}. Got job within 3 months of completion. Highly recommend Udaan Tech Academy!`,
        "datePublished": "2024-02-10"
      }
    ],

    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "EducationalOccupationalProgram",
          "name": `Data Science Course ${locationDefaults.displayName}`
        },
        "price": "85000",
        "priceCurrency": "INR",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/InStock",
        "areaServed": locationDefaults.displayName,
        "eligibleRegion": {
          "@type": "Place",
          "name": locationDefaults.displayName
        }
      }
    ],

    // ENHANCED: Service categories
    "category": [
      "Educational Services",
      "Computer Training",
      "Professional Training",
      "Career Development",
      "Technology Education"
    ],

    "keywords": `tech training ${locationDefaults.location}, data science course ${locationDefaults.location}, coding bootcamp ${locationDefaults.location}, programming classes ${locationDefaults.location}`
  };

  // ENHANCED: Better FAQ schema with location-specific questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Which is the best tech training institute in ${locationDefaults.displayName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Udaan Tech Academy is the best tech training institute in ${locationDefaults.displayName} with 95% placement rate, expert trainers, and job-guaranteed courses in Data Science, Full Stack Development, and Cloud Computing.`
        }
      },
      {
        "@type": "Question", 
        "name": `What tech courses are available in ${locationDefaults.displayName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We offer comprehensive tech courses in ${locationDefaults.displayName} including Data Science & AI, Full Stack Web Development, Cloud Infrastructure & DevOps, Machine Learning, Python Programming, and React Development with hands-on projects and placement assistance.`
        }
      },
      {
        "@type": "Question",
        "name": `How much do tech courses cost in ${locationDefaults.displayName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Tech course fees in ${locationDefaults.displayName} range from ₹65,000 to ₹95,000 depending on the program. We offer EMI options, early bird discounts, and scholarship programs for deserving candidates.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you provide placement assistance in ${locationDefaults.displayName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we provide 100% placement assistance with 95% success rate in ${locationDefaults.displayName}. Our students get placed in top companies like Google, Microsoft, Amazon, TCS, Infosys, and leading startups.`
        }
      },
      {
        "@type": "Question",
        "name": `Where is Udaan Tech Academy located in ${locationDefaults.displayName}?`,
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": `Udaan Tech Academy is conveniently located in ${locationDefaults.displayName} with modern facilities, parking, and easy access to public transportation. We also offer online classes for remote learning.`
        }
      }
    ]
  };

  // ENHANCED: Course schema with better keyword targeting
  const courseSchema = course ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${course.title} in ${locationDefaults.displayName}`,
    "description": `${course.description} - Best ${course.title.toLowerCase()} training in ${locationDefaults.displayName} with placement guarantee.`,
    "provider": {
      "@type": "EducationalOrganization", 
      "name": "Udaan Tech Academy",
      "url": "https://udaan.x-fuzion.com",
      "logo": logoUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": locationDefaults.displayName,
        "addressRegion": locationDefaults.state,
        "addressCountry": "IN"
      }
    },
    "courseMode": ["onsite", "online"],
    "educationalLevel": "intermediate",
    "timeRequired": course.duration,
    "location": {
      "@type": "Place",
      "name": `${locationDefaults.displayName}, ${locationDefaults.state}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": locationDefaults.displayName,
        "addressRegion": locationDefaults.state
      }
    },
    "inLanguage": ["en", "hi"],
    "keywords": [
      `${course.title.toLowerCase()} ${locationDefaults.location}`,
      `${course.title.toLowerCase()} course ${locationDefaults.location}`,
      `best ${course.title.toLowerCase()} training ${locationDefaults.location}`,
      `${course.title.toLowerCase()} classes ${locationDefaults.location}`
    ],
    "offers": {
      "@type": "Offer",
      "price": course.price?.replace('₹', '').replace(',', '') || "85000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "category": "Technology Education",
      "areaServed": locationDefaults.displayName,
      "priceValidUntil": "2024-12-31"
    }
  } : null;

  return (
    <Helmet>
      {/* FIXED: Better title structure - keywords first */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Udaan Tech Academy" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={currentUrl} />

      {/* ENHANCED: Location and keyword-focused meta tags */}
      <meta name="geo.region" content={locationDefaults.location === 'bangalore' ? 'IN-KA' : 
                                       locationDefaults.location === 'hyderabad' ? 'IN-TG' :
                                       locationDefaults.location === 'visakhapatnam' ? 'IN-AP' :
                                       'IN-OR'} />
      <meta name="geo.placename" content={locationDefaults.displayName} />
      <meta name="ICBM" content={locationDefaults.location === 'bangalore' ? '12.9716, 77.5946' :
                                  locationDefaults.location === 'hyderabad' ? '17.4485, 78.3908' :
                                  locationDefaults.location === 'visakhapatnam' ? '17.7231, 83.3016' :
                                  '20.2961, 85.8245'} />

      {/* ENHANCED: Better Open Graph with keyword focus */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={`Udaan Tech Academy - ${locationDefaults.displayName}`} />
      <meta property="og:locality" content={locationDefaults.displayName} />
      <meta property="og:region" content={locationDefaults.state} />

      {/* Twitter Card with better keyword targeting */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* ENHANCED: Location-specific hreflang and alternate URLs */}
      <link rel="alternate" hreflang="en-IN" href="https://udaan.x-fuzion.com/" />
      <link rel="alternate" hreflang="en" href="https://udaan.x-fuzion.com/bangalore/" />
      <link rel="alternate" hreflang="en" href="https://udaan.x-fuzion.com/hyderabad/" />
      <link rel="alternate" hreflang="en" href="https://udaan.x-fuzion.com/visakhapatnam/" />
      <link rel="alternate" hreflang="en" href="https://udaan.x-fuzion.com/bhubaneswar/" />

      {/* ENHANCED: Multiple structured data schemas */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {courseSchema && (
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      )}

      {/* Favicon and app icons */}
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon-180.png" />
      <meta name="theme-color" content="#1e40af" />
    </Helmet>
  );
};

export default SEO;






