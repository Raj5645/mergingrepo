import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import EventFilters from './EventFilters';
import EventList from './EventList';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Mock event data
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

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleCreateEvent = () => {
    console.log('Create new event');
    // Navigate to event creation page or open modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000]">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
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
        
        <EventList events={events} filter={activeFilter} />
      </main>
    </div>
  );
};

export default Dashboard;