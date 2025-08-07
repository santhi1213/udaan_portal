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
  title: 'Udaan Tech Academy - Best Tech Training Institute in Bangalore | Launch Your Career in 6 Months',
  description: 'Transform your career at Udaan Tech Academy, the #1 tech training institute in Bangalore. Job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure with 95% placement guarantee. Expert mentorship, real-world projects, and industry partnerships.',
  url: 'https://udaan.x-fuzion.com',
  ogImage: 'https://udaan.x-fuzion.com/dove.png',
  // UPDATED: More specific and long-tail keywords for better ranking
  keywords: 'udaan tech academy, best tech training institute bangalore, tech courses bangalore, data science course bangalore, full stack development bangalore, cloud computing course bangalore, machine learning training bangalore, coding bootcamp india, career change tech, tech training institute bangalore, programming courses bangalore, online tech education india, job oriented tech courses, placement guarantee tech courses, tech training institute near me, coding classes bangalore, AI course bangalore, web development course bangalore, software training institute bangalore, tech bootcamp bangalore, programming bootcamp bangalore, coding institute bangalore, tech academy bangalore, computer training institute bangalore, IT training bangalore, software development course bangalore, tech career change bangalore, coding certification bangalore, programming certification bangalore',
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
    title: 'Best Tech Training Institute in Bangalore | Udaan Tech Academy | 95% Placement Guarantee',
    description: 'Join Udaan Tech Academy, the #1 rated tech training institute in Bangalore. Transform your career with job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure. 95% placement guarantee, expert mentorship, and industry partnerships. Start your tech career today!',
    keywords: 'best tech training institute bangalore, udaan tech academy, tech courses bangalore, data science training bangalore, full stack development course bangalore, career change tech bangalore, coding bootcamp bangalore, placement guarantee tech courses, tech training institute near me, coding classes bangalore, programming courses bangalore, software training institute bangalore, tech academy bangalore, IT training bangalore, computer training institute bangalore, coding institute bangalore, tech bootcamp bangalore, programming bootcamp bangalore, software development course bangalore, tech career change bangalore, coding certification bangalore, programming certification bangalore, machine learning course bangalore, AI course bangalore, web development course bangalore, cloud computing course bangalore'
  },
  courses: {
    title: 'Best Tech Courses in Bangalore | Data Science, Full Stack, Cloud Computing | Udaan Tech Academy',
    description: 'Explore the best tech courses in Bangalore at Udaan Tech Academy. Comprehensive Data Science, Full Stack Development, Cloud Infrastructure, Machine Learning courses with guaranteed placement support. Expert mentorship, hands-on projects, and industry-recognized certifications.',
    keywords: 'best tech courses bangalore, tech courses bangalore, data science course bangalore, full stack development course bangalore, cloud computing course bangalore, machine learning course bangalore, programming courses bangalore, udaan tech academy courses, coding courses bangalore, software development courses bangalore, web development course bangalore, AI course bangalore, python course bangalore, java course bangalore, react course bangalore, node js course bangalore, AWS course bangalore, tech training courses bangalore, programming training bangalore, software training bangalore, IT courses bangalore, computer courses bangalore, coding bootcamp courses bangalore, tech certification courses bangalore'
  },
  'career-tracks': {
    title: 'Best Tech Career Tracks in Bangalore | Complete Job-Ready Programs | Udaan Tech Academy',
    description: 'Comprehensive tech career tracks in Bangalore combining multiple courses for complete career transformation. AI Engineer, Full Stack Engineer, Cloud Infrastructure tracks with 95% placement guarantee. Industry-designed curriculum and expert mentorship.',
    keywords: 'best tech career tracks bangalore, career tracks bangalore, tech career path bangalore, AI engineer track bangalore, full stack engineer track bangalore, cloud infrastructure track bangalore, job ready tech programs bangalore, udaan tech academy career tracks, tech career change bangalore, programming career tracks bangalore, software development career path bangalore, data science career track bangalore, machine learning career path bangalore, web development career track bangalore, cloud computing career path bangalore, tech bootcamp career tracks bangalore, coding career tracks bangalore, IT career tracks bangalore, software career tracks bangalore'
  },
  mentorship: {
    title: 'Best 1:1 Tech Mentorship in Bangalore | Learn from Google, Microsoft, Amazon Experts | Udaan',
    description: 'Get personalized 1:1 tech mentorship in Bangalore from industry experts at Google, Microsoft, Amazon. Career planning, interview preparation, and skill development with Udaan Tech Academy. Transform your tech career with expert guidance.',
    keywords: 'best 1:1 tech mentorship bangalore, tech mentorship program bangalore, industry experts mentorship bangalore, career guidance tech bangalore, interview preparation tech bangalore, udaan tech academy mentorship, tech mentor bangalore, programming mentor bangalore, coding mentor bangalore, software development mentor bangalore, data science mentor bangalore, machine learning mentor bangalore, AI mentor bangalore, web development mentor bangalore, cloud computing mentor bangalore, tech career mentor bangalore, IT mentor bangalore, software mentor bangalore, programming guidance bangalore, coding guidance bangalore'
  },
  blog: {
    title: 'Best Tech Blog in Bangalore | Career Tips, Tutorials & Industry Insights | Udaan Tech Academy',
    description: 'Stay updated with the latest tech trends, career advice, and tutorials from Udaan Tech Academy Bangalore. Expert insights on Data Science, AI, Full Stack Development, Cloud Computing, and career guidance for tech professionals.',
    keywords: 'best tech blog bangalore, tech blog bangalore, tech career tips bangalore, programming tutorials bangalore, tech trends bangalore, data science blog bangalore, AI trends bangalore, udaan tech academy blog, coding blog bangalore, software development blog bangalore, web development blog bangalore, machine learning blog bangalore, cloud computing blog bangalore, tech career advice bangalore, programming career tips bangalore, coding career tips bangalore, software career tips bangalore, IT career tips bangalore, tech industry insights bangalore, programming insights bangalore, coding insights bangalore'
  },
  'enroll-now': {
    title: 'Enroll Now | Join Best Tech Training Institute in Bangalore | Udaan Tech Academy | 95% Placement',
    description: 'Ready to transform your tech career in Bangalore? Enroll in Udaan Tech Academy - the #1 tech training institute with job-oriented courses and guaranteed placement support. Start your tech journey today with expert mentorship and industry partnerships.',
    keywords: 'enroll tech course bangalore, join tech training institute bangalore, tech course admission bangalore, career change program bangalore, udaan tech academy enrollment, best coding bootcamp bangalore, tech course enrollment bangalore, programming course admission bangalore, coding course enrollment bangalore, software training admission bangalore, data science course enrollment bangalore, full stack course admission bangalore, machine learning course enrollment bangalore, AI course admission bangalore, web development course enrollment bangalore, cloud computing course admission bangalore, tech bootcamp enrollment bangalore, coding bootcamp admission bangalore, programming bootcamp enrollment bangalore, software bootcamp admission bangalore'
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
    title: 'Best Data Science Course in Bangalore | Machine Learning & AI Training | Udaan Tech Academy',
    description: 'Master Data Science, Machine Learning & AI in Bangalore with Udaan Tech Academy. 12-week intensive course with hands-on projects, industry mentorship, and guaranteed placement support. Join 500+ successful data scientists.',
    keywords: 'best data science course bangalore, data science course bangalore, machine learning course bangalore, AI course bangalore, data science training bangalore, ML engineer course bangalore, data science bootcamp bangalore, udaan tech academy data science, python data science course bangalore, data analytics course bangalore, big data course bangalore, data science certification bangalore, machine learning training bangalore, AI training bangalore, data science institute bangalore, data science academy bangalore, data science classes bangalore, data science coaching bangalore, data science program bangalore, advanced data science course bangalore',
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
    title: 'Best Full Stack Web Development Course in Bangalore | React, Node.js Training | Udaan Tech Academy',
    description: 'Learn Full Stack Web Development in Bangalore with React, Node.js & modern technologies. 16-week comprehensive course at Udaan Tech Academy with real-world projects and placement guarantee. Join 320+ successful developers.',
    keywords: 'best full stack course bangalore, full stack course bangalore, web development course bangalore, React course bangalore, Node.js course bangalore, JavaScript course bangalore, full stack developer training bangalore, udaan tech academy full stack, MEAN stack course bangalore, MERN stack course bangalore, frontend development course bangalore, backend development course bangalore, web development training bangalore, full stack bootcamp bangalore, web development bootcamp bangalore, full stack certification bangalore, web development certification bangalore, full stack institute bangalore, web development institute bangalore, full stack academy bangalore, web development academy bangalore, full stack classes bangalore, web development classes bangalore',
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
    title: 'Best Cloud Computing Course in Bangalore | AWS, Azure, DevOps Training | Udaan Tech Academy',
    description: 'Master Cloud Computing & DevOps in Bangalore with AWS, Azure, Kubernetes training. 10-week intensive course at Udaan Tech Academy with hands-on labs and placement support. Join 180+ successful cloud engineers.',
    keywords: 'best cloud computing course bangalore, cloud computing course bangalore, AWS course bangalore, DevOps course bangalore, Kubernetes course bangalore, cloud infrastructure training bangalore, Azure course bangalore, udaan tech academy cloud, cloud architecture course bangalore, cloud security course bangalore, cloud migration course bangalore, cloud certification bangalore, AWS certification bangalore, Azure certification bangalore, DevOps certification bangalore, cloud engineer course bangalore, cloud developer course bangalore, cloud computing training bangalore, cloud computing bootcamp bangalore, cloud computing institute bangalore, cloud computing academy bangalore, cloud computing classes bangalore',
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




