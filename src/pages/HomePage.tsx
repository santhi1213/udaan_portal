import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Trophy, LockKeyhole, CheckCircle, Brain, Code, Cloud, MessageCircle, Play, Award, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import { pageConfigs, generateBreadcrumbs } from '../utils/seoConfig';
// import { Link } from 'react-router-dom';
interface HomePageProps {
  locationData: {
    city: string;
    state: string;
  };
}
// const HomePage = () => {
const HomePage: React.FC<HomePageProps> = ({ locationData }) => {
  const courses = [
    {
      title: 'AI/ML/Data Science/Gen AI',
      description: 'Master machine learning, deep learning, and AI fundamentals',
      color: 'from-blue-500 to-blue-600',
      icon: <Brain className="w-8 h-8" />,
      duration: '12 weeks',
      level: 'Intermediate',
      slug: 'ai-ml-coursepage',
    },
    {
      title: 'Full Stack Development',
      description: 'Build end-to-end web applications with modern technologies',
      color: 'from-green-500 to-green-600',
      icon: <Code className="w-8 h-8" />,
      duration: '16 weeks',
      level: 'Beginner',
      slug: 'fullstack-coursepage',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Master AWS, Azure, and DevOps for scalable applications',
      color: 'from-orange-500 to-orange-600',
      icon: <Cloud className="w-8 h-8" />,
      duration: '10 weeks',
      level: 'Intermediate',
      slug: 'cloudInfra-coursepage',
    },
    {
      title: 'Cyber Security',
      description: 'Master AWS, Azure, and DevOps for scalable applications',
      color: 'from-yellow-500 to-orange-600',
      icon: <LockKeyhole className="w-8 h-8" />,
      duration: '10 weeks',
      level: 'Intermediate',
      slug: 'cybersecurity-coursepage'
    }
  ];
  const testimonials = [
    {
      name: 'Lakshmi Reddy',
      role: 'Data Analyst at Palo Alto',
      content: 'Udaan Tech Academy gave me the perfect launchpad. The practical training helped me transition smoothly into my current role.',
      rating: 5,
      image: 'https://media.istockphoto.com/id/1257835661/photo/young-south-indian-student-stock-photo.jpg?s=612x612&w=0&k=20&c=GqMCnT_S3-cH_KboCKa-bthAFZV3jxL88z4aarCsDQQ='
    },
    {
      name: 'Arjun Nair',
      role: 'Frontend Developer at Freshworks',
      content: 'The course structure matched exactly what tech companies in Chennai are looking for. Got placed before I even completed the program!',
      rating: 5,
      image: 'https://t4.ftcdn.net/jpg/05/19/89/97/240_F_519899761_kH6DsNBvULXhoSN2MVil1IUsRpSTNxvC.jpg'
    },
    {
      name: 'Divya Menon',
      role: 'QA Engineer at IBM',
      content: 'As someone with no tech background, the step-by-step approach made learning to code accessible and fun. Now I work at a great Indian IT company!',
      rating: 5,
      image: 'https://media.istockphoto.com/id/524897008/photo/happy-young-indian-girl-college-graduate.jpg?s=612x612&w=0&k=20&c=J20bxGQDGlYtU0zgKyytQu9hXmNsaaHbdFKk8YpnXsI='
    },
    {
      name: 'Karthik Iyer',
      role: 'Backend Developer at Capgemini',
      content: 'The instructors had real experience working in Bengaluru tech scene. Their insights about the local job market were invaluable.',
      rating: 4,
      image: 'https://media.istockphoto.com/id/524896082/photo/young-happy-indian-male-student.jpg?s=612x612&w=0&k=20&c=AqbrvHbom81BlRWick8LABFeu9um2m8IlvKTT-1sMe0='
    },
    {
      name: 'Priya Sundaram',
      role: 'Cloud Engineer at Accenture',
      content: 'The academy helped me upskill from my previous non-tech role. Now I work with cutting-edge technologies in a respected Indian company.',
      rating: 5,
      image: 'https://t4.ftcdn.net/jpg/14/52/56/33/240_F_1452563399_ypOxa7wn5E7oLbVwyQSfl1cCxg7NbAQm.jpg'
    },
    {
      name: 'Suresh Babu',
      role: 'Full Stack Developer at Deloitte',
      content: 'The mock interviews with HR professionals from Chennai companies gave me the confidence to crack my current job.',
      rating: 4,
      image: 'https://t3.ftcdn.net/jpg/12/17/85/64/240_F_1217856452_ophJfbFNQeAXmWLp4dF8enWjF1awvGal.jpg'
    }
  ];
  const projects = [
    {
      title: 'AI-Powered Healthcare System',
      description: 'Built a machine learning model to predict disease outcomes using patient data',
      tech: ['Python', 'TensorFlow', 'Flask', 'MongoDB'],
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack application with payment integration and real-time chat',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Cloud-Native Microservices',
      description: 'Scalable architecture deployed on Kubernetes with CI/CD pipeline',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'Azure'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={pageConfigs.home.title}
        description={pageConfigs.home.description}
        keywords={pageConfigs.home.keywords}
        breadcrumbs={generateBreadcrumbs('/')}
        type="website"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Launch Your Tech Career in{' '}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    6 Months
                  </span>
                </h1>
                <h2 className="text-xl text-blue-100 font-semibold">
                  Best Tech Training Institute in Bangalore | 95% Placement Guarantee
                </h2>
                <p className="text-lg text-blue-200">
                  Transform your career with job-oriented courses in Data Science, Full Stack Development, Cloud Infrastructure. Expert mentorship, real-world projects, and industry partnerships.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Mentor-led Learning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Placement Focused</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Real-World Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Open Source Stack</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  // href="/enroll-now"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center"
                >
                  <Link to='/enroll-now'>
                    Book Free Career Call
                  </Link>
                  <MessageCircle className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Success Stats</h3>
                    <p className="text-blue-100">Our students' achievements</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">95%</div>
                      <div className="text-sm text-blue-100">Placement Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">₹8.5L</div>
                      <div className="text-sm text-blue-100">Avg Package</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">500+</div>
                      <div className="text-sm text-blue-100">Students Placed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">50+</div>
                      <div className="text-sm text-blue-100">Partner Companies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Career Path</h2>
            <p className="text-xl text-gray-600">Industry-focused programs designed for job readiness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-r ${course.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>

                <div className="flex justify-between items-center mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {course.duration}
                  </span>
                  <span className="text-gray-500 text-sm">{course.level}</span>
                </div>

                <Link
                  // to="/courses"
                  to={`/${course.slug}`}
                  className="block text-center bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Career Outcomes That Matter</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Demand Job Roles</h3>
                    <p className="text-gray-600">Data Scientist, Full Stack Developer, Cloud Engineer, ML Engineer, DevOps Specialist</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Placement Partners</h3>
                    <p className="text-gray-600">Google, Microsoft, Amazon, Flipkart, Swiggy, Zomato, and 40+ more tech companies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                    <p className="text-gray-600">Certified programs aligned with industry standards and best practices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-blue-800 font-medium">Job Placement Rate</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">₹12L</div>
                <div className="text-green-800 font-medium">Highest Package</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3 Months</div>
                <div className="text-orange-800 font-medium">Avg Placement Time</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-purple-800 font-medium">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our alumni who've transformed their careers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Capstone Projects</h2>
            <p className="text-xl text-gray-600">Real-world projects that showcase your skills to employers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Play className="w-4 h-4" />
                      <span>View Demo</span>
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
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
      </section>

      {/* Mentorship Highlights */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">1-on-1 Mentorship Program</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 w-3 h-3 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Industry Expert Mentors</h3>
                    <p className="text-blue-100">Learn from professionals working at Google, Microsoft, Amazon, and other top-tier companies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 w-3 h-3 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Career Guidance</h3>
                    <p className="text-blue-100">Get tailored advice on your career path, resume building, and interview preparation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 w-3 h-3 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Weekly 1:1 Sessions</h3>
                    <p className="text-blue-100">Regular mentorship sessions to track progress and overcome challenges</p>
                  </div>
                </div>
              </div>

              <Link
                to="/mentorship"
                className="inline-block mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                Learn More About Mentorship
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">1</div>
                  <h4 className="text-lg font-semibold">Matching Process</h4>
                </div>
                <p className="text-blue-100 text-sm ml-12">Get paired with a mentor based on your goals and interests</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">2</div>
                  <h4 className="text-lg font-semibold">Goal Setting</h4>
                </div>
                <p className="text-blue-100 text-sm ml-12">Define clear objectives and create a personalized roadmap</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">3</div>
                  <h4 className="text-lg font-semibold">Regular Sessions</h4>
                </div>
                <p className="text-blue-100 text-sm ml-12">Weekly meetings to track progress and receive guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of successful graduates who've launched their tech careers with us
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/enroll-now"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex items-center"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <a
              href="https://wa.me/919705675817"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors flex items-center"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;