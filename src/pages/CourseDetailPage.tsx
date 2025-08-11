// import { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Clock, Users, Star, CheckCircle, Download, Calendar, User, Building, Award, ArrowRight, Play, Code } from 'lucide-react';
// import coursesData from '../components/CourseData.json'

// const CourseDetailPage = () => {
//   const { slug } = useParams();
//   const [activeTab, setActiveTab] = useState('overview');
//   const course = coursesData[slug];

//   if (!course) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
//           <p className="text-xl text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
//           <Link
//             to="/courses"
//             className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
//           >
//             Back to Courses
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Dynamic highlights based on course data
//   const highlights = [
//     `Get job-ready in ${course.duration}`,
//     '1:1 mentorship sessions',
//     'Real-world projects',
//     'Industry-recognized certification',
//     '95% placement assistance'
//   ];

//   // Use learning objectives from JSON or fallback to default
//   const learningOutcomes = course.learningObjectives || [
//     'Master core technologies and frameworks',
//     'Build production-ready applications',
//     'Understand industry best practices',
//     'Develop problem-solving skills',
//     'Create a professional portfolio',
//     'Prepare for technical interviews',
//     'Network with industry professionals',
//     'Get career guidance and support'
//   ];

//   // Dynamic job roles based on course level and outcomes
//   const getJobRolesByLevel = (level, outcomes) => {
//     if (outcomes && outcomes.length > 0) {
//       // Extract job-related outcomes if available
//       const jobRelatedOutcomes = outcomes.filter(outcome => 
//         outcome.toLowerCase().includes('analyst') || 
//         outcome.toLowerCase().includes('scientist') || 
//         outcome.toLowerCase().includes('developer') ||
//         outcome.toLowerCase().includes('engineer')
//       );
//       if (jobRelatedOutcomes.length > 0) {
//         return jobRelatedOutcomes.slice(0, 4);
//       }
//     }

//     // Fallback based on level
//     switch (level) {
//       case 'Starter':
//         return ['Junior Data Analyst', 'Data Assistant', 'Business Analyst', 'Research Assistant'];
//       case 'Intermediate':
//         return ['Data Scientist', 'ML Engineer', 'Data Analyst', 'Business Intelligence Analyst'];
//       case 'Advanced':
//       case 'Advanced/Specialization':
//         return ['Senior Data Scientist', 'ML Research Scientist', 'AI Architect', 'Principal Engineer'];
//       default:
//         return ['Data Scientist', 'ML Engineer', 'AI Engineer', 'Data Engineer'];
//     }
//   };

//   const jobRoles = getJobRolesByLevel(course.level, course.courseOutcomes);

//   const certifications = ['Udaan Tech Academy Certificate', 'Industry Partner Certificates', 'Project Completion Certificates'];

//   const targetAudience = [
//     { icon: <User className="w-6 h-6" />, title: 'Recent Graduates', description: `Start your tech career with ${course.category}` },
//     { icon: <Building className="w-6 h-6" />, title: 'Working Professionals', description: 'Transition to data science roles' },
//     { icon: <Code className="w-6 h-6" />, title: 'Career Switchers', description: 'Add new skills to your toolkit' }
//   ];

//   // Dynamic testimonials based on job roles
//   const testimonials = [
//     {
//       name: 'Ankit Sharma',
//       role: `${jobRoles[0]} at TCS`,
//       content: `The ${course.title} course completely transformed my career. The hands-on approach and mentorship were invaluable.`,
//       rating: 5,
//       image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
//     },
//     {
//       name: 'Pooja Reddy',
//       role: `${jobRoles[1] || jobRoles[0]} at Infosys`,
//       content: `Great curriculum and excellent support throughout the program. Highly recommend for anyone serious about ${course.category.toLowerCase()}.`,
//       rating: 5,
//       image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className={`relative bg-gradient-to-br ${course.color} text-white py-16`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="mb-6">
//                 <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
//                   Next Batch: {course.nextBatch}
//                 </span>
//                 <span className="ml-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
//                   {course.level}
//                 </span>
//               </div>

//               <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
//               <p className="text-xl text-white/90 mb-8">{course.description}</p>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                 <div className="text-center">
//                   <Clock className="w-6 h-6 text-white/80 mx-auto mb-2" />
//                   <p className="text-sm text-white/80">Duration</p>
//                   <p className="font-semibold">{course.duration}</p>
//                 </div>
//                 <div className="text-center">
//                   <Users className="w-6 h-6 text-white/80 mx-auto mb-2" />
//                   <p className="text-sm text-white/80">Level</p>
//                   <p className="font-semibold">{course.level}</p>
//                 </div>
//                 <div className="text-center">
//                   <Star className="w-6 h-6 text-white/80 mx-auto mb-2" />
//                   <p className="text-sm text-white/80">Rating</p>
//                   <p className="font-semibold">{course.rating}/5</p>
//                 </div>
//                 <div className="text-center">
//                   <Award className="w-6 h-6 text-white/80 mx-auto mb-2" />
//                   <p className="text-sm text-white/80">Students</p>
//                   <p className="font-semibold">{course.students}+</p>
//                 </div>
//               </div>

//               <div className="space-y-3 mb-8">
//                 {highlights.map((highlight, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <CheckCircle className="w-5 h-5 text-green-400" />
//                     <span>{highlight}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center">
//                   Enroll Now
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </button>
//                 <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center">
//                   <Download className="mr-2 w-5 h-5" />
//                   Download Syllabus
//                 </button>
//                 <Link to='/enroll-now'>
//                   <button className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-200 flex items-center justify-center">
//                     <Calendar className="mr-2 w-5 h-5" />
//                     Free Career Call
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             <div className="relative">
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="rounded-2xl shadow-2xl w-full h-80 object-cover"
//               />
//               <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
//                 <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors">
//                   <Play className="w-8 h-8" />
//                 </button>
//               </div>

//               <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
//                 <div className="text-center">
//                   <p className="text-gray-500 text-sm line-through">{course.originalPrice}</p>
//                   <p className="text-2xl font-bold text-gray-900">{course.price}</p>
//                   <p className="text-green-600 text-sm font-semibold">
//                     {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, '')) / parseInt(course.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Course Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-12">
//             {/* Navigation Tabs */}
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//               <div className="flex border-b overflow-x-auto">
//                 {['overview', 'curriculum', 'projects', 'reviews'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`flex-1 min-w-0 py-4 px-6 font-semibold capitalize transition-colors whitespace-nowrap ${activeTab === tab
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
//                       }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               <div className="p-6">
//                 {/* Overview Tab */}
//                 {activeTab === 'overview' && (
//                   <div className="space-y-8">
//                     {/* What You'll Learn */}
//                     <section>
//                       <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {learningOutcomes.map((item, index) => (
//                           <div key={index} className="flex items-center space-x-3">
//                             <CheckCircle className="w-5 h-5 text-green-500" />
//                             <span className="text-gray-700">{item}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </section>

//                     {/* Tech Stack */}
//                     <section>
//                       <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
//                       <div className="flex flex-wrap gap-3">
//                         {course.technologies.map((tech, index) => (
//                           <span
//                             key={index}
//                             className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-4 py-2 rounded-full font-medium border border-blue-200"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </section>

//                     {/* Prerequisites */}
//                     {course.prerequisites && course.prerequisites.length > 0 && (
//                       <section>
//                         <h2 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h2>
//                         <div className="space-y-3">
//                           {course.prerequisites.map((prereq, index) => (
//                             <div key={index} className="flex items-center space-x-3">
//                               <CheckCircle className="w-5 h-5 text-blue-500" />
//                               <span className="text-gray-700">{prereq}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </section>
//                     )}

//                     {/* Target Audience */}
//                     <section>
//                       <h2 className="text-2xl font-bold text-gray-900 mb-6">Who is This Course For?</h2>
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {targetAudience.map((audience, index) => (
//                           <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
//                             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                               {audience.icon}
//                             </div>
//                             <h3 className="text-lg font-semibold text-gray-900 mb-2">{audience.title}</h3>
//                             <p className="text-gray-600">{audience.description}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </section>

//                     {/* Job Roles */}
//                     <section>
//                       <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                         {jobRoles.map((role, index) => (
//                           <div key={index} className="bg-gradient-to-r from-green-100 to-blue-100 text-gray-800 px-3 py-2 rounded-lg text-center font-medium border border-green-200">
//                             {role}
//                           </div>
//                         ))}
//                       </div>
//                     </section>

//                     {/* Course Outcomes */}
//                     {course.courseOutcomes && course.courseOutcomes.length > 0 && (
//                       <section>
//                         <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Outcomes</h2>
//                         <div className="space-y-3">
//                           {course.courseOutcomes.map((outcome, index) => (
//                             <div key={index} className="flex items-center space-x-3">
//                               <Award className="w-5 h-5 text-yellow-500" />
//                               <span className="text-gray-700">{outcome}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </section>
//                     )}

//                     {/* Certifications */}
//                     <section>
//                       <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>
//                       <div className="space-y-3">
//                         {certifications.map((cert, index) => (
//                           <div key={index} className="flex items-center space-x-3">
//                             <Award className="w-5 h-5 text-yellow-500" />
//                             <span className="text-gray-700">{cert}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </section>
//                   </div>
//                 )}

//                 {/* Curriculum Tab */}
//                 {activeTab === 'curriculum' && (
//                   <div className="space-y-6">
//                     <h2 className="text-2xl font-bold text-gray-900">Course Curriculum</h2>
//                     <div className="space-y-4">
//                       {course.curriculum.map((week, index) => (
//                         <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                           <div className="flex items-center justify-between mb-4">
//                             <h3 className="text-lg font-semibold text-gray-900">
//                               Week {week.week}: {week.title}
//                             </h3>
//                             <div className="flex items-center space-x-2">
//                               <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
//                                 Week {week.week}
//                               </span>
//                               {week.duration && (
//                                 <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
//                                   {week.duration}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                           <ul className="space-y-2">
//                             {week.topics.map((topic, topicIndex) => (
//                               <li key={topicIndex} className="flex items-center space-x-3">
//                                 <CheckCircle className="w-4 h-4 text-green-500" />
//                                 <span className="text-gray-700">{topic}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Projects Tab */}
//                 {activeTab === 'projects' && (
//                   <div className="space-y-6">
//                     <h2 className="text-2xl font-bold text-gray-900">Course Projects</h2>
//                     <div className="grid grid-cols-1 gap-6">
//                       {course.projects.map((project, index) => (
//                         <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
//                           <img
//                             src={project.image}
//                             alt={project.title}
//                             className="w-full h-48 object-cover"
//                           />
//                           <div className="p-6">
//                             <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
//                             <p className="text-gray-600 mb-4">{project.description}</p>
//                             <div className="flex flex-wrap gap-2">
//                               {project.technologies.map((tech, techIndex) => (
//                                 <span
//                                   key={techIndex}
//                                   className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
//                                 >
//                                   {tech}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Reviews Tab */}
//                 {activeTab === 'reviews' && (
//                   <div className="space-y-6">
//                     <div className="flex items-center justify-between">
//                       <h2 className="text-2xl font-bold text-gray-900">Student Reviews</h2>
//                       <div className="flex items-center space-x-2">
//                         <Star className="w-5 h-5 text-yellow-500 fill-current" />
//                         <span className="text-lg font-semibold">{course.rating}</span>
//                         <span className="text-gray-600">({course.students} students)</span>
//                       </div>
//                     </div>
//                     <div className="space-y-6">
//                       {testimonials.map((testimonial, index) => (
//                         <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                           <div className="flex items-center space-x-4 mb-4">
//                             <img
//                               src={testimonial.image}
//                               alt={testimonial.name}
//                               className="w-12 h-12 rounded-full object-cover"
//                             />
//                             <div>
//                               <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
//                               <p className="text-gray-600 text-sm">{testimonial.role}</p>
//                             </div>
//                             <div className="ml-auto flex">
//                               {[...Array(testimonial.rating)].map((_, i) => (
//                                 <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
//                               ))}
//                             </div>
//                           </div>
//                           <p className="text-gray-700">{testimonial.content}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-8">
//             {/* Mentor Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Your Mentor</h3>
//               <div className="text-center">
//                 <img
//                   src={course.mentor.image}
//                   alt={course.mentor.name}
//                   className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <h4 className="text-lg font-semibold text-gray-900">{course.mentor.name}</h4>
//                 <p className="text-gray-600 mb-2">{course.mentor.role}</p>
//                 <p className="text-blue-600 font-medium mb-3">{course.mentor.company}</p>
//                 <p className="text-gray-600 text-sm">{course.mentor.experience}</p>
//               </div>
//             </div>

//             {/* Course Info Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <h3 className="text-xl font-bold text-gray-900 mb-6">Course Information</h3>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Duration</span>
//                   <span className="font-semibold">{course.duration}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Level</span>
//                   <span className="font-semibold">{course.level}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Mode</span>
//                   <span className="font-semibold">{course.mode}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Next Batch</span>
//                   <span className="font-semibold">{course.nextBatch}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Students</span>
//                   <span className="font-semibold">{course.students}+</span>
//                 </div>
//                 <div className="border-t pt-4">
//                   <div className="text-center">
//                     <p className="text-gray-500 text-sm line-through">{course.originalPrice}</p>
//                     <p className="text-3xl font-bold text-gray-900">{course.price}</p>
//                     <p className="text-green-600 font-semibold">
//                       {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, '')) / parseInt(course.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Card */}
//             <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6">
//               <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
//               <p className="text-white/90 mb-6">Join thousands of students who have transformed their careers with our courses.</p>
//               <div className="space-y-3">
//                 <button className="w-full bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//                   Enroll Now
//                 </button>
//                 <button className="w-full border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
//                   Free Career Call
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Courses */}
//       <section className="bg-gray-100 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Courses</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {Object.entries(coursesData)
//               .filter(([key]) => key !== slug)
//               .slice(0, 3)
//               .map(([key, relatedCourse]) => (
//                 <Link
//                   key={key}
//                   to={`/courses/${key}`}
//                   className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//                 >
//                   <img
//                     src={relatedCourse.image}
//                     alt={relatedCourse.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">{relatedCourse.title}</h3>
//                     <p className="text-gray-600 mb-4 line-clamp-2">{relatedCourse.description}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2">
//                         <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                         <span className="text-sm font-medium">{relatedCourse.rating}</span>
//                         <span className="text-sm text-gray-500">({relatedCourse.students})</span>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-lg font-bold text-gray-900">{relatedCourse.price}</p>
//                         <p className="text-sm text-gray-500 line-through">{relatedCourse.originalPrice}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CourseDetailPage;


import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, CheckCircle, Download, Calendar, User, Building, Award, ArrowRight, Play, Code } from 'lucide-react';
import coursesData from '../components/CourseData.json'

type CourseKey = keyof typeof coursesData;

type CourseType = {
  title: string;
  description: string;
  duration: string;
  level: string;
  mode?: string;
  price: string;
  originalPrice: string;
  rating: number;
  students: number;
  nextBatch: string;
  category: string;
  color: string;
  technologies: string[];
  prerequisites: string[]; // Make prerequisites always present
  mentor: {
    image: string;
    name: string;
    role: string;
    company: string;
    experience: string;
  };
  curriculum: {
    week: number;
    title: string;
    duration?: string;
    topics: string[];
  }[];
  projects: {
    image: string;
    title: string;
    description: string;
    technologies: string[];
  }[];
  courseOutcomes?: string[];
  learningObjectives?: string[];
  industryPartners?: string[];
};

const CourseDetailPage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const course = slug && (slug as CourseKey) in coursesData
    ? coursesData[slug as CourseKey]
    : undefined;

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  // Function to handle PDF download
  const downloadSyllabus = async () => {
    try {
      const pdfPath = `/pdfs/${slug}.pdf`;
      
      // Check if the PDF file exists and is accessible
      const response = await fetch(pdfPath, { method: 'HEAD' });
      
      if (!response.ok) {
        throw new Error(`PDF not found: ${response.status}`);
      }
      
      // Check if the content is actually a PDF
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/pdf')) {
        console.warn('File might not be a valid PDF, but proceeding with download...');
      }
      
      // Create and trigger download
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = `${course.title.replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '_')}_Syllabus.pdf`;
      
      // Important: Don't set target="_blank" for downloads
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log(`Downloading syllabus: ${pdfPath}`);
      
    } catch (error) {
      console.error('Error downloading syllabus:', error);
      
      // Try alternative approach: open in new tab
      try {
        window.open(`/pdfs/${slug}.pdf`, '_blank');
        console.log('Opened PDF in new tab as fallback');
      } catch (fallbackError) {
        // Show user-friendly error message
        alert(`Unable to download syllabus for "${course.title}". Please ensure the PDF file exists at /pdfs/${slug}.pdf or contact support.`);
      }
    }
  };

  // Dynamic highlights based on course data
  const highlights = [
    `Get job-ready in ${course.duration}`,
    '1:1 mentorship sessions',
    'Real-world projects',
    'Industry-recognized certification',
    '95% placement assistance'
  ];

  // Use learning objectives from JSON or fallback to default
  const learningOutcomes = course.learningObjectives || [
    'Master core technologies and frameworks',
    'Build production-ready applications',
    'Understand industry best practices',
    'Develop problem-solving skills',
    'Create a professional portfolio',
    'Prepare for technical interviews',
    'Network with industry professionals',
    'Get career guidance and support'
  ];

  // Dynamic job roles based on course level and outcomes
  const getJobRolesByLevel = (level: string, outcomes?: string[]) => {
    if (outcomes && outcomes.length > 0) {
      // Extract job-related outcomes if available
      const jobRelatedOutcomes = outcomes.filter(outcome => 
        outcome.toLowerCase().includes('analyst') || 
        outcome.toLowerCase().includes('scientist') || 
        outcome.toLowerCase().includes('developer') ||
        outcome.toLowerCase().includes('engineer')
      );
      if (jobRelatedOutcomes.length > 0) {
        return jobRelatedOutcomes.slice(0, 4);
      }
    }

    // Fallback based on level
    switch (level) {
      case 'Starter':
        return ['Junior Data Analyst', 'Data Assistant', 'Business Analyst', 'Research Assistant'];
      case 'Intermediate':
        return ['Data Scientist', 'ML Engineer', 'Data Analyst', 'Business Intelligence Analyst'];
      case 'Advanced':
      case 'Advanced/Specialization':
        return ['Senior Data Scientist', 'ML Research Scientist', 'AI Architect', 'Principal Engineer'];
      default:
        return ['Data Scientist', 'ML Engineer', 'AI Engineer', 'Data Engineer'];
    }
  };

  const jobRoles = getJobRolesByLevel(course.level, course.courseOutcomes);

  const certifications = ['Udaan Tech Academy Certificate', 'Industry Partner Certificates', 'Project Completion Certificates'];

  const targetAudience = [
    { icon: <User className="w-6 h-6" />, title: 'Recent Graduates', description: `Start your tech career with ${course.category}` },
    { icon: <Building className="w-6 h-6" />, title: 'Working Professionals', description: 'Transition to data science roles' },
    { icon: <Code className="w-6 h-6" />, title: 'Career Switchers', description: 'Add new skills to your toolkit' }
  ];

  // Dynamic testimonials based on job roles
  const testimonials = [
    {
      name: 'Ankit Sharma',
      role: `${jobRoles[0]} at TCS`,
      content: `The ${course.title} course completely transformed my career. The hands-on approach and mentorship were invaluable.`,
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Pooja Reddy',
      role: `${jobRoles[1] || jobRoles[0]} at Infosys`,
      content: `Great curriculum and excellent support throughout the program. Highly recommend for anyone serious about ${course.category.toLowerCase()}.`,
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${course.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Next Batch: {course.nextBatch}
                </span>
                <span className="ml-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  {course.level}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-white/90 mb-8">{course.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-white/80 mx-auto mb-2" />
                  <p className="text-sm text-white/80">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-white/80 mx-auto mb-2" />
                  <p className="text-sm text-white/80">Level</p>
                  <p className="font-semibold">{course.level}</p>
                </div>
                <div className="text-center">
                  <Star className="w-6 h-6 text-white/80 mx-auto mb-2" />
                  <p className="text-sm text-white/80">Rating</p>
                  <p className="font-semibold">{course.rating}/5</p>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-white/80 mx-auto mb-2" />
                  <p className="text-sm text-white/80">Students</p>
                  <p className="font-semibold">{course.students}+</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={downloadSyllabus}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Syllabus
                </button>
                <Link to='/enroll-now'>
                  <button className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-200 flex items-center justify-center">
                    <Calendar className="mr-2 w-5 h-5" />
                    Free Career Call
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8" />
                </button>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-gray-500 text-sm line-through">{course.originalPrice}</p>
                  <p className="text-2xl font-bold text-gray-900">{course.price}</p>
                  <p className="text-green-600 text-sm font-semibold">
                    {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, '')) / parseInt(course.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex border-b overflow-x-auto">
                {['overview', 'curriculum', 'projects', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 min-w-0 py-4 px-6 font-semibold capitalize transition-colors whitespace-nowrap ${activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    {/* What You'll Learn */}
                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {learningOutcomes.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Tech Stack */}
                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
                      <div className="flex flex-wrap gap-3">
                        {course.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-4 py-2 rounded-full font-medium border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>

                    {/* Prerequisites */}
                    {course.prerequisites && course.prerequisites.length > 0 && (
                      <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h2>
                        <div className="space-y-3">
                          {course.prerequisites.map((prereq, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-blue-500" />
                              <span className="text-gray-700">{prereq}</span>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Target Audience */}
                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Who is This Course For?</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {targetAudience.map((audience, index) => (
                          <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                              {audience.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{audience.title}</h3>
                            <p className="text-gray-600">{audience.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Job Roles */}
                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {jobRoles.map((role, index) => (
                          <div key={index} className="bg-gradient-to-r from-green-100 to-blue-100 text-gray-800 px-3 py-2 rounded-lg text-center font-medium border border-green-200">
                            {role}
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Course Outcomes */}
                    {course.courseOutcomes && course.courseOutcomes.length > 0 && (
                      <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Outcomes</h2>
                        <div className="space-y-3">
                          {course.courseOutcomes.map((outcome, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <Award className="w-5 h-5 text-yellow-500" />
                              <span className="text-gray-700">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Certifications */}
                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>
                      <div className="space-y-3">
                        {certifications.map((cert, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <Award className="w-5 h-5 text-yellow-500" />
                            <span className="text-gray-700">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Course Curriculum</h2>
                    <div className="space-y-4">
                      {course.curriculum.map((week, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                              Week {week.week}: {week.title}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                Week {week.week}
                              </span>
                              {week.duration && (
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                  {week.duration}
                                </span>
                              )}
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {week.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center space-x-3">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-gray-700">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects Tab */}
                {activeTab === 'projects' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Course Projects</h2>
                    <div className="grid grid-cols-1 gap-6">
                      {course.projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900">Student Reviews</h2>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="text-lg font-semibold">{course.rating}</span>
                        <span className="text-gray-600">({course.students} students)</span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                          <div className="flex items-center space-x-4 mb-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                              <p className="text-gray-600 text-sm">{testimonial.role}</p>
                            </div>
                            <div className="ml-auto flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700">{testimonial.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Mentor Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Mentor</h3>
              <div className="text-center">
                <img
                  src={course.mentor.image}
                  alt={course.mentor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold text-gray-900">{course.mentor.name}</h4>
                <p className="text-gray-600 mb-2">{course.mentor.role}</p>
                <p className="text-blue-600 font-medium mb-3">{course.mentor.company}</p>
                <p className="text-gray-600 text-sm">{course.mentor.experience}</p>
              </div>
            </div>

            {/* Course Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Course Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Level</span>
                  <span className="font-semibold">{course.level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mode</span>
                  <span className="font-semibold">{course.mode}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Next Batch</span>
                  <span className="font-semibold">{course.nextBatch}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Students</span>
                  <span className="font-semibold">{course.students}+</span>
                </div>
                <div className="border-t pt-4">
                  <div className="text-center">
                    <p className="text-gray-500 text-sm line-through">{course.originalPrice}</p>
                    <p className="text-3xl font-bold text-gray-900">{course.price}</p>
                    <p className="text-green-600 font-semibold">
                      {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, '')) / parseInt(course.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6">Join thousands of students who have transformed their careers with our courses.</p>
              <div className="space-y-3">
                <button className="w-full bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Enroll Now
                </button>
                <button className="w-full border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                  Free Career Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(coursesData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedCourse]) => (
                <Link
                  key={key}
                  to={`/courses/${key}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={relatedCourse.image}
                    alt={relatedCourse.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{relatedCourse.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedCourse.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{relatedCourse.rating}</span>
                        <span className="text-sm text-gray-500">({relatedCourse.students})</span>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">{relatedCourse.price}</p>
                        <p className="text-sm text-gray-500 line-through">{relatedCourse.originalPrice}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;