import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CareerTracksPage from './pages/CareerTracksPage';
import EnrollmentPage from './pages/EnrollmentPage';
import MentorshipPage from './pages/MentorshipPage';
import BlogPage from './pages/BlogPage';
import AIMLCoursePage from './pages/AIMLCoursePage';
import FullStackCoursePage from './pages/FullStackCoursePage';
import CloudInfra from './pages/CloudInfra';
import CyberSecurity from './pages/CyberSecurity';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage locationData={{ city: 'bangalore', state: 'Karnataka' }} />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/:slug" element={<CourseDetailPage />} />
          <Route path="/career-tracks" element={<CareerTracksPage />} />
          <Route path="/enroll-now" element={<EnrollmentPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path='/ai-ml-coursepage' element={<AIMLCoursePage/>} />
          <Route path='/fullstack-coursepage' element={<FullStackCoursePage/>} />
          <Route path='/cloudInfra-coursepage' element={<CloudInfra/>} />
          <Route path='/cybersecurity-coursepage' element={<CyberSecurity/>} />
          <Route path="/bangalore" element={<HomePage locationData={{ city: 'bangalore', state: 'Karnataka' }} />} />
          <Route path="/hyderabad" element={<HomePage locationData={{ city: 'hyderabad', state: 'Telangana' }} />} />
          <Route path="/visakhapatnam" element={<HomePage locationData={{ city: 'visakhapatnam', state: 'Andhra Pradesh' }} />} />
          <Route path="/bhubaneswar" element={<HomePage locationData={{ city: 'bhubaneswar', state: 'Odisha' }} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;