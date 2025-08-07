// // SEO Configuration and Utilities
// export const siteConfig = {
//   name: 'Udaan Tech Academy',
//   title: 'Udaan Tech Academy - Launch Your Tech Career in 6 Months',
//   description: 'Transform your career with job-oriented tech courses. Expert mentorship, real-world projects, and 95% placement rate. Courses in Data Science, Full Stack Development, Cloud Infrastructure & more.',
//   url: 'https://udaan.x-fuzion.com',
//   ogImage: 'https://udaan.x-fuzion.com/dove.png',
//   keywords: 'tech courses, data science course, full stack development, cloud computing, machine learning, coding bootcamp, career change, tech training, programming courses, online tech education',
//   author: 'Udaan Tech Academy',
//   social: {
//     twitter: '@udaantechacademy',
//     facebook: 'https://www.facebook.com/udaantechacademy',
//     linkedin: 'https://www.linkedin.com/company/udaantechacademy',
//     instagram: 'https://www.instagram.com/udaantechacademy'
//   }
// };

// // Page-specific SEO configurations
// export const pageConfigs = {
//   home: {
//     title: 'Launch Your Tech Career in 6 Months',
//     description: 'Transform your career with job-oriented tech courses. Expert mentorship, real-world projects, and 95% placement rate. Start your tech journey today.',
//     keywords: 'tech career, coding bootcamp, data science course, udaan full stack development, career change, tech training, programming courses'
//   },
//   courses: {
//     title: 'Tech Courses - Data Science, Full Stack, Cloud & More',
//     description: 'Explore our comprehensive tech courses designed for job readiness. Data Science, Full Stack Development, Cloud Infrastructure, Machine Learning & more.',
//     keywords: 'tech courses, data science course, full stack development course, cloud computing course, machine learning course, programming courses'
//   },
//   'career-tracks': {
//     title: 'Career Tracks - Complete Job-Ready Programs',
//     description: 'Comprehensive career tracks combining multiple courses for complete career transformation. AI Engineer, Full Stack Engineer, Cloud Infrastructure tracks.',
//     keywords: 'career tracks, tech career path, AI engineer track, full stack engineer track, cloud infrastructure track, job ready programs'
//   },
//   mentorship: {
//     title: '1:1 Mentorship Program - Learn from Industry Experts',
//     description: 'Get personalized guidance from industry experts working at Google, Microsoft, Amazon. 1:1 mentorship sessions, career planning, and interview preparation.',
//     keywords: '1:1 mentorship, tech mentorship, industry experts, career guidance, interview preparation, tech mentor'
//   },
//   blog: {
//     title: 'Tech Blog - Career Tips, Tutorials & Industry Insights',
//     description: 'Stay updated with latest tech trends, career advice, tutorials, and success stories. Expert insights on Data Science, AI, Full Stack Development & more.',
//     keywords: 'tech blog, career tips, programming tutorials, tech trends, data science blog, AI trends, coding tutorials'
//   },
//   'enroll-now': {
//     title: 'Enroll Now - Start Your Tech Career Journey',
//     description: 'Ready to transform your career? Enroll in our job-oriented tech courses with expert mentorship and guaranteed placement support.',
//     keywords: 'enroll tech course, join coding bootcamp, tech course admission, career change program, tech training enrollment'
//   }
// };

// // Generate breadcrumbs for different pages
// export const generateBreadcrumbs = (pathname) => {
//   const pathSegments = pathname.split('/').filter(segment => segment);
//   const breadcrumbs = [{ name: 'Home', url: '/' }];

//   let currentPath = '';
//   pathSegments.forEach((segment, index) => {
//     currentPath += `/${segment}`;
    
//     // Convert segment to readable name
//     let name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
//     // Special cases for better naming
//     if (segment === 'career-tracks') name = 'Career Tracks';
//     if (segment === 'enroll-now') name = 'Enroll Now';
    
//     breadcrumbs.push({
//       name,
//       url: currentPath
//     });
//   });

//   return breadcrumbs;
// };

// // Course-specific SEO data
// export const coursesSEO = {
//   'data-science-advanced': {
//     title: 'Advanced Data Science & AI Course - 12 Weeks Job-Ready Program',
//     description: 'Master machine learning, deep learning, and AI fundamentals with hands-on projects. 95% placement rate, expert mentorship, and industry-recognized certification.',
//     keywords: 'data science course, machine learning course, AI course, deep learning course, data science training, ML engineer course',
//     course: {
//       title: 'Advanced Data Science & AI',
//       description: 'Master machine learning, deep learning, and AI fundamentals with hands-on projects',
//       duration: '12 weeks',
//       level: 'Intermediate',
//       mode: 'Online/Offline',
//       price: '₹85,000',
//       rating: 4.8,
//       students: 245
//     }
//   },
//   'full-stack-development': {
//     title: 'Full Stack Web Development Course - React, Node.js & More',
//     description: 'Build end-to-end web applications with React, Node.js, and modern technologies. 16-week comprehensive program with real-world projects.',
//     keywords: 'full stack course, web development course, React course, Node.js course, JavaScript course, full stack developer training',
//     course: {
//       title: 'Full Stack Web Development',
//       description: 'Build end-to-end web applications with React, Node.js, and modern technologies',
//       duration: '16 weeks',
//       level: 'Beginner',
//       mode: 'Online/Offline',
//       price: '₹65,000',
//       rating: 4.9,
//       students: 320
//     }
//   },
//   'cloud-infrastructure': {
//     title: 'Cloud Infrastructure & DevOps Course - AWS, Azure, Kubernetes',
//     description: 'Master AWS, Azure, Kubernetes, and DevOps practices for scalable applications. 10-week intensive program with hands-on labs.',
//     keywords: 'cloud computing course, AWS course, DevOps course, Kubernetes course, cloud infrastructure training, Azure course',
//     course: {
//       title: 'Cloud Infrastructure & DevOps',
//       description: 'Master AWS, Azure, Kubernetes, and DevOps practices for scalable applications',
//       duration: '10 weeks',
//       level: 'Intermediate',
//       mode: 'Online',
//       price: '₹55,000',
//       rating: 4.7,
//       students: 180
//     }
//   }
// };

// // Generate sitemap data
// export const generateSitemapData = () => {
//   const baseUrl = 'https://udaan.x-fuzion.com';
//   const pages = [
//     { url: '/', priority: 1.0, changefreq: 'weekly' },
//     { url: '/courses', priority: 0.9, changefreq: 'weekly' },
//     { url: '/career-tracks', priority: 0.9, changefreq: 'monthly' },
//     { url: '/mentorship', priority: 0.8, changefreq: 'monthly' },
//     { url: '/blog', priority: 0.8, changefreq: 'weekly' },
//     { url: '/enroll-now', priority: 0.9, changefreq: 'monthly' },
//     // Add course pages
//     { url: '/courses/data-science-advanced', priority: 0.8, changefreq: 'monthly' },
//     { url: '/courses/full-stack-development', priority: 0.8, changefreq: 'monthly' },
//     { url: '/courses/cloud-infrastructure', priority: 0.8, changefreq: 'monthly' }
//   ];

//   return pages.map(page => ({
//     ...page,
//     url: `${baseUrl}${page.url}`,
//     lastmod: new Date().toISOString()
//   }));
// };



// UPDATED SEO Configuration with better keyword targeting
export const siteConfig = {
  name: 'Udaan Tech Academy',
  title: 'Udaan Tech Academy - Launch Your Tech Career in 6 Months',
  description: 'Transform your career with job-oriented tech courses in Bangalore. Expert mentorship, real-world projects, and 95% placement rate. Courses in Data Science, Full Stack Development, Cloud Infrastructure & more.',
  url: 'https://udaan.x-fuzion.com',
  ogImage: 'https://udaan.x-fuzion.com/dove.png',
  // UPDATED: More specific and long-tail keywords for better ranking
  keywords: 'udaan tech academy, tech courses bangalore, data science course bangalore, full stack development bangalore, cloud computing course bangalore, machine learning training bangalore, coding bootcamp india, career change tech, tech training institute bangalore, programming courses bangalore, online tech education india, job oriented tech courses, placement guarantee tech courses',
  author: 'Udaan Tech Academy',
  social: {
    twitter: '@udaantechacademy',
    facebook: 'https://www.facebook.com/udaantechacademy',
    linkedin: 'https://www.linkedin.com/company/udaantechacademy',
    instagram: 'https://www.instagram.com/udaantechacademy'
  }
};

// UPDATED: Page-specific SEO with location-based and long-tail keywords
export const pageConfigs = {
  home: {
    title: 'Udaan Tech Academy - Best Tech Training Institute in Bangalore | Launch Your Career in 6 Months',
    description: 'Join Udaan Tech Academy, the best tech training institute in Bangalore. Transform your career with job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure. 95% placement guarantee.',
    keywords: 'udaan tech academy, best tech training institute bangalore, tech courses bangalore, data science training bangalore, full stack development course bangalore, career change tech bangalore, coding bootcamp bangalore, placement guarantee tech courses'
  },
  courses: {
    title: 'Tech Courses Bangalore - Data Science, Full Stack, Cloud Computing | Udaan Tech Academy',
    description: 'Explore comprehensive tech courses in Bangalore at Udaan Tech Academy. Data Science, Full Stack Development, Cloud Infrastructure, Machine Learning courses with guaranteed placement support.',
    keywords: 'tech courses bangalore, data science course bangalore, full stack development course bangalore, cloud computing course bangalore, machine learning course bangalore, programming courses bangalore, udaan tech academy courses'
  },
  'career-tracks': {
    title: 'Career Tracks Bangalore - Complete Job-Ready Tech Programs | Udaan Tech Academy',
    description: 'Comprehensive career tracks in Bangalore combining multiple courses for complete career transformation. AI Engineer, Full Stack Engineer, Cloud Infrastructure tracks with placement guarantee.',
    keywords: 'career tracks bangalore, tech career path bangalore, AI engineer track bangalore, full stack engineer track bangalore, cloud infrastructure track bangalore, job ready tech programs bangalore, udaan tech academy career tracks'
  },
  mentorship: {
    title: '1:1 Tech Mentorship Bangalore - Learn from Google, Microsoft, Amazon Experts | Udaan',
    description: 'Get personalized 1:1 tech mentorship in Bangalore from industry experts at Google, Microsoft, Amazon. Career planning, interview preparation, and skill development with Udaan Tech Academy.',
    keywords: '1:1 tech mentorship bangalore, tech mentorship program bangalore, industry experts mentorship bangalore, career guidance tech bangalore, interview preparation tech bangalore, udaan tech academy mentorship'
  },
  blog: {
    title: 'Tech Blog Bangalore - Career Tips, Tutorials & Industry Insights | Udaan Tech Academy',
    description: 'Stay updated with latest tech trends, career advice, tutorials from Udaan Tech Academy Bangalore. Expert insights on Data Science, AI, Full Stack Development, Cloud Computing & career guidance.',
    keywords: 'tech blog bangalore, tech career tips bangalore, programming tutorials bangalore, tech trends bangalore, data science blog bangalore, AI trends bangalore, udaan tech academy blog'
  },
  'enroll-now': {
    title: 'Enroll Now - Join Best Tech Training Institute in Bangalore | Udaan Tech Academy',
    description: 'Ready to transform your tech career in Bangalore? Enroll in Udaan Tech Academy - the best tech training institute with job-oriented courses and guaranteed placement support.',
    keywords: 'enroll tech course bangalore, join tech training institute bangalore, tech course admission bangalore, career change program bangalore, udaan tech academy enrollment, best coding bootcamp bangalore'
  }
};
// // Generate breadcrumbs for different pages
export const generateBreadcrumbs = (pathname) => {
  const pathSegments = pathname.split('/').filter(segment => segment);
  const breadcrumbs = [{ name: 'Home', url: '/' }];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Convert segment to readable name
    let name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Special cases for better naming
    if (segment === 'career-tracks') name = 'Career Tracks';
    if (segment === 'enroll-now') name = 'Enroll Now';
    
    breadcrumbs.push({
      name,
      url: currentPath
    });
  });

  return breadcrumbs;
};
// UPDATED: Course-specific SEO with location targeting
export const coursesSEO = {
  'data-science-advanced': {
    title: 'Advanced Data Science Course Bangalore - Machine Learning & AI Training | Udaan Tech Academy',
    description: 'Master Data Science, Machine Learning & AI in Bangalore with Udaan Tech Academy. 12-week intensive course with hands-on projects, industry mentorship, and guaranteed placement support.',
    keywords: 'data science course bangalore, machine learning course bangalore, AI course bangalore, data science training bangalore, ML engineer course bangalore, data science bootcamp bangalore, udaan tech academy data science',
    course: {
      title: 'Advanced Data Science & AI',
      description: 'Master machine learning, deep learning, and AI fundamentals with hands-on projects in Bangalore',
      duration: '12 weeks',
      level: 'Intermediate',
      mode: 'Online/Offline',
      price: '₹85,000',
      rating: 4.8,
      students: 245,
      location: 'Bangalore, Karnataka'
    }
  },
  'full-stack-development': {
    title: 'Full Stack Web Development Course Bangalore - React, Node.js Training | Udaan Tech Academy',
    description: 'Learn Full Stack Web Development in Bangalore with React, Node.js & modern technologies. 16-week comprehensive course at Udaan Tech Academy with real-world projects and placement guarantee.',
    keywords: 'full stack course bangalore, web development course bangalore, React course bangalore, Node.js course bangalore, JavaScript course bangalore, full stack developer training bangalore, udaan tech academy full stack',
    course: {
      title: 'Full Stack Web Development',
      description: 'Build end-to-end web applications with React, Node.js, and modern technologies in Bangalore',
      duration: '16 weeks',
      level: 'Beginner',
      mode: 'Online/Offline',
      price: '₹65,000',
      rating: 4.9,
      students: 320,
      location: 'Bangalore, Karnataka'
    }
  },
  'cloud-infrastructure': {
    title: 'Cloud Computing Course Bangalore - AWS, Azure, DevOps Training | Udaan Tech Academy',
    description: 'Master Cloud Computing & DevOps in Bangalore with AWS, Azure, Kubernetes training. 10-week intensive course at Udaan Tech Academy with hands-on labs and placement support.',
    keywords: 'cloud computing course bangalore, AWS course bangalore, DevOps course bangalore, Kubernetes course bangalore, cloud infrastructure training bangalore, Azure course bangalore, udaan tech academy cloud',
    course: {
      title: 'Cloud Infrastructure & DevOps',
      description: 'Master AWS, Azure, Kubernetes, and DevOps practices for scalable applications in Bangalore',
      duration: '10 weeks',
      level: 'Intermediate',
      mode: 'Online',
      price: '₹55,000',
      rating: 4.7,
      students: 180,
      location: 'Bangalore, Karnataka'
    }
  }
};

// UPDATED: Enhanced sitemap with more specific URLs and better structure
export const generateSitemapData = () => {
  const baseUrl = 'https://udaan.x-fuzion.com';
  const pages = [
    // Main pages
    { url: '/', priority: 1.0, changefreq: 'weekly', title: 'Home - Best Tech Training Institute Bangalore' },
    { url: '/courses', priority: 0.9, changefreq: 'weekly', title: 'Tech Courses Bangalore' },
    { url: '/career-tracks', priority: 0.9, changefreq: 'monthly', title: 'Career Tracks Bangalore' },
    { url: '/mentorship', priority: 0.8, changefreq: 'monthly', title: '1:1 Tech Mentorship Bangalore' },
    { url: '/blog', priority: 0.8, changefreq: 'weekly', title: 'Tech Blog Bangalore' },
    { url: '/enroll-now', priority: 0.9, changefreq: 'monthly', title: 'Enroll Now - Join Tech Training' },
    
    // Course pages with location targeting
    { url: '/courses/data-science-advanced', priority: 0.8, changefreq: 'monthly', title: 'Data Science Course Bangalore' },
    { url: '/courses/full-stack-development', priority: 0.8, changefreq: 'monthly', title: 'Full Stack Course Bangalore' },
    { url: '/courses/cloud-infrastructure', priority: 0.8, changefreq: 'monthly', title: 'Cloud Computing Course Bangalore' },
    
    // Additional important pages
    { url: '/about', priority: 0.7, changefreq: 'monthly', title: 'About Udaan Tech Academy Bangalore' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly', title: 'Contact Udaan Tech Academy Bangalore' },
    { url: '/testimonials', priority: 0.6, changefreq: 'monthly', title: 'Student Reviews Udaan Tech Academy' },
    { url: '/placement-guarantee', priority: 0.8, changefreq: 'monthly', title: 'Placement Guarantee Tech Courses Bangalore' }
  ];

  return pages.map(page => ({
    ...page,
    url: `${baseUrl}${page.url}`,
    lastmod: new Date().toISOString()
  }));
};

// UPDATED: Local business schema for better local SEO
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Udaan Tech Academy",
  "alternateName": ["Udaan Tech", "Udaan Academy"],
  "description": "Leading tech training institute in Bangalore offering job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure, and more.",
  "url": "https://udaan.x-fuzion.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://udaan.x-fuzion.com/dove.png",
    "width": 512,
    "height": 512,
    "caption": "Udaan Tech Academy Logo"
  },
  "image": "https://udaan.x-fuzion.com/dove.png",
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
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "info@udaantechacademy.com",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }
  ],
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
        "description": "Advanced Data Science and AI training with placement guarantee"
      },
      {
        "@type": "Course", 
        "name": "Full Stack Development Course",
        "description": "Complete web development training with modern technologies"
      },
      {
        "@type": "Course",
        "name": "Cloud Infrastructure Course", 
        "description": "AWS, Azure, and DevOps training for cloud professionals"
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
});

// UPDATED: Better robots.txt content
export const generateRobotsTxt = () => `User-agent: *
Allow: /

# Sitemap
Sitemap: https://udaan.x-fuzion.com/sitemap.xml

# Crawl-delay for different bots
Crawl-delay: 1

# Block specific paths if needed
# Disallow: /admin/
# Disallow: /private/

# Allow Google to crawl CSS and JS files
User-agent: Googlebot
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$

# Bing bot settings
User-agent: Bingbot
Crawl-delay: 1`;




