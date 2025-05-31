import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import Events from './components/events/Events';
<<<<<<< HEAD
=======
import CreateEvent from './components/events/CreateEvent';
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
import EventDetails from './components/eventdetails/EventDetails';
import Dashboard from './components/dashboard/Dashboard';
import Billing from './components/billing/Billing';
import LiveRevenue from './components/liverevenue/LiveRevenue';
import Notifications from './components/notification/Notifications';
<<<<<<< HEAD
import OutreachAdBudget from './components/outreach/OutreachAdBudget';
import OutreachCreatives from './components/outreach/OutreachCreatives';
import OutreachAdPerformance from './components/outreach/OutreachAdPerformance';
import Ticketing from './components/ticketing/Ticketing';
import PublishedEvent from './components/publishedevent/PublishedEvent';
import Support from './components/support/Support';
=======
import Outreach from './components/outreach/Outreach';
import Ticketing from './components/ticketing/Ticketing';
import PublishedEvent from './components/publishedevent/PublishedEvent';
import Services from './components/service/Services';
import Query from "./components/query/Query"
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
import ContactUs from './components/common/ContactUs';
import LoginForm from './components/home/LoginForm';
import SignupForm from './components/home/SignupForm';
import OtpPage from './components/home/OtpPage';
<<<<<<< HEAD
import EventDashboard from './components/events/EventDashboard';
import EventLandingPage from './components/events/EventLandingPage';
import LiveRevenueTicketingModal from './components/liverevenue/LiveRevenueTicketingModal';
import LiveRevenueRFID from './components/liverevenue/LiveRevenueRFID';
import LiveRevenueTopUpModal from './components/liverevenue/LiveRevenueTopUpModal';
import Services from './components/services/Services';
=======
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3

class AppRoutes extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
          <Route path="/events" element={<EventLandingPage />} />
          <Route path="/eventdashboard" element={<EventDashboard />} />
=======
          <Route path="/events" element={<Events />} />
          <Route path="/createevent" element={<CreateEvent/>}/>
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
          <Route path="loginform" element={<LoginForm/>}/>
          <Route path="signupform" element={<SignupForm/>}/>
          <Route path="otppage" element={<OtpPage/>}/>
          {/* <Route path="eventdemo" element={<EventDemo/>}/> */}
<<<<<<< HEAD
          <Route path="/eventdetails" element={<Events key="event-details-layout" mode="event-details" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/liverevenue" element={<LiveRevenue />} />
          <Route path="/liverevenue/ticketing" element={<LiveRevenueTicketingModal />} />
          <Route path="/liverevenue/rfid" element={<LiveRevenueRFID />} />
          <Route path="/liverevenue/rfid/topup" element={<LiveRevenueTopUpModal />} />
          <Route path="/ticketing" element={<Events />} />
          <Route path="/billing" element={<Billing/>}/>
          <Route path="/outreach" element={<OutreachAdBudget />} />
          <Route path="/outreach/creatives" element={<OutreachCreatives />} />
          <Route path="/outreach/ad-performance" element={<OutreachAdPerformance />} />
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/publishedevent" element={<PublishedEvent/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/support"  element={<Support/>}/>
=======
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/eventdetails" element={<EventDetails/>}/>
          <Route path="/liverevenue" element={<LiveRevenue/>}/>
          <Route path="/ticketing" element={<Ticketing/>}/>
          <Route path="/billing" element={<Billing/>}/>
          <Route path="/outreach" element={<Outreach/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/publishedevent" element={<PublishedEvent/>}/>
          <Route path="/service"  element={<Services/>}/>
          <Route path="/query" element={<Query/>}/>
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    );
  }
}

export default AppRoutes;