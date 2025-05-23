import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './components/home';
import Events from './components/pages/events';
import EventDetail from './components/pages/events/EventDetail';
import Dashboard from './components/dashboard';
import FolderView from './components/pages/events/eventDetails/FolderView';
import NewFeature from './components/NewFeature';
import RepositoryDashboard from './components/pages/events/RepositoryDashboard';
import CreateEvent from './components/pages/events/CreateEvent';
import EventAnalytics from './components/event/EventAnalytics';
import ContactUs from './common/ContactUs';
import LoginForm from './components/home/LoginForm';
import SignupForm from './components/home/SignupForm';
import OtpPage from './components/home/OtpPage';

class AppRoutes extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="loginform" element={<LoginForm/>}/>
          <Route path="signupform" element={<SignupForm/>}/>
          <Route path="otppage" element={<OtpPage/>}/>
          <Route path="/event-detail" element={<EventDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/folder-view" element={<FolderView />} />
          <Route path="/new-feature" element={<NewFeature />} />
          <Route path="/repository-dashboard" element={<RepositoryDashboard />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/event-analytics" element={<EventAnalytics />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    );
  }
}

export default AppRoutes;