// Import React and useState for state management
import React, { useState } from 'react';
// Import useNavigate for navigation
import { useNavigate } from 'react-router-dom';
// Import Header component
import Header from '../common/Header';
// Import Button component
import Button from '../common/ui/Button';
// Import EventFilters component
import EventFilters from './EventFilters';
// Import EventAnalytics component
import EventAnalytics from './EventAnalytics';
// Import EventList component
import EventList from './EventList';

// Dashboard component definition (for events page)
const Dashboard = () => {
  // State for currently active filter
  const [activeFilter, setActiveFilter] = useState('all');
  // State for selected event (for analytics view)
  const [selectedEvent, setSelectedEvent] = useState(null);
  // Navigation hook
  const navigate = useNavigate();

  // Mock event data array
  const events = [
    {
      id: '1',
      image: '/images/img_image_9.png',
      date: {
        day: 'Sat',
        date: '16',
        month: 'May',
      },
      title: 'Live and Loud',
      price: '₹1000 - ₹9000',
      location: 'Bangalore',
      status: 'Live',
      lastEdited: 'last edited : 07/04/25 ; 20:35:08',
    },
    {
      id: '2',
      image: '/images/img_image.png',
      date: {
        day: 'Sat',
        date: '16',
        month: 'May',
      },
      title: 'Live and Loud',
      price: '₹1000 - ₹9000',
      location: 'Bangalore',
      status: 'Past',
      lastEdited: 'last edited : 07/04/25 ; 20:35:08',
    },
    {
      id: '3',
      image: '/images/img_image_10.png',
      date: {
        day: 'Sat',
        date: '16',
        month: 'May',
      },
      title: 'Live and Loud',
      price: '₹1000 - ₹9000',
      location: 'Bangalore',
      status: 'Draft',
      lastEdited: 'last edited : 07/04/25 ; 20:35:08',
    },
    {
      id: '4',
      image: '/images/img_image_10_422x324.png',
      date: {
        day: 'Sat',
        date: '16',
        month: 'May',
      },
      title: 'Live and Loud',
      price: '₹1000 - ₹9000',
      location: 'Bangalore',
      status: 'Live',
      lastEdited: 'last edited : 07/04/25 ; 20:35:08',
    },
  ];

  // Handler for changing the event filter
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Handler for create event button
  const handleCreateEvent = () => {
    console.log('Create new event');
    // Navigate to event creation page or open modal
  };

  // Handler for clicking on an event (sets selected event)
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  // If an event is selected, render EventAnalytics component
  if (selectedEvent) {
    return <EventAnalytics event={selectedEvent} />;
  }

  // Render the dashboard page
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000]">
      {/* Render the header */}
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Render filters and create event button */}
        <div className="flex justify-between items-center mb-6">
          <EventFilters 
            activeFilter={activeFilter} 
            onFilterChange={handleFilterChange} 
          />
          <Button 
            onClick={handleCreateEvent}
            className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg px-6 py-2.5 text-lg font-bold"
          >
            Create event
          </Button>
        </div>
        {/* Render the list of events */}
        <EventList events={events} filter={activeFilter} onEventClick={handleEventClick} />
      </main>
    </div>
  );
};

// Export the Dashboard component
export default Dashboard;