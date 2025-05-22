import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home/index';
import Events from './pages/events/index';
import EventDetail from './pages/events/EventDetail';
import Dashboard from './pages/dashboard/index';
import FolderView from './pages/events/eventDetails/FolderView';
import NewFeature from './components/NewFeature';
import RepositoryDashboard from './pages/events/RepositoryDashboard';
import CreateEvent from './pages/events/CreateEvent';
import EventAnalytics from './pages/events/EventAnalytics';
import LoginForm from './pages/Home/LoginForm';
import SignupForm from './pages/Home/SignupForm';
import OtpPage from './pages/Home/OtpPage';

const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center min-h-screen text-3xl text-white">{title} Page Coming Soon</div>
);

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Show Events listing page at /events */}
        <Route path="/events" element={<Events />} />
        <Route path="loginform" element={<LoginForm/>}/>
        <Route path="signupform" element={<SignupForm/>}/>
        <Route path="otppage" element={<OtpPage/>}/>
        {/* Show EventAnalytics page at /events/analytics */}
        <Route path="/events/analytics" element={<EventAnalytics />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/events/:eventId/folder" element={<FolderView />} />
        <Route path="/events/:eventId/repository" element={<RepositoryDashboard />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-feature" element={<NewFeature />} />
        <Route path="/services" element={<Placeholder title="Services" />} />
        <Route path="/portfolio" element={<Placeholder title="Portfolio" />} />
        <Route path="/join-us" element={<Placeholder title="Join Us" />} />
        <Route path="/contact-us" element={<Placeholder title="Contact Us" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;