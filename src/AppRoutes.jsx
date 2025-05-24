import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import Events from './components/events/Events';
import CreateEvent from './components/events/CreateEvent';
import EventDetails from './components/eventdetails/EventDetails';
import Dashboard from './components/dashboard/Dashboard';
import Billing from './components/billing/Billing';
import LiveRevenue from './components/liverevenue/LiveRevenue';
import Notifications from './components/notification/Notifications';
import Outreach from './components/outreach/Outreach';
import Ticketing from './components/ticketing/Ticketing';
import PublishedEvent from './components/publishedevent/PublishedEvent';
import Support from './components/support/Support';
import ContactUs from './components/common/ContactUs';
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
          <Route path="/createevent" element={<CreateEvent/>}/>
          <Route path="loginform" element={<LoginForm/>}/>
          <Route path="signupform" element={<SignupForm/>}/>
          <Route path="otppage" element={<OtpPage/>}/>
          {/* <Route path="eventdemo" element={<EventDemo/>}/> */}
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/eventdetails" element={<EventDetails/>}/>
          <Route path="/liverevenue" element={<LiveRevenue/>}/>
          <Route path="/ticketing" element={<Ticketing/>}/>
          <Route path="/billing" element={<Billing/>}/>
          <Route path="/outreach" element={<Outreach/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/publishedevent" element={<PublishedEvent/>}/>
          <Route path="/support"  element={<Support/>}/>
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    );
  }
}

export default AppRoutes;