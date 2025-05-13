import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/common/Card';

const EventList = ({ events, filter }) => {
  // Filter events based on the selected filter
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.status.toLowerCase() === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredEvents.map((event) => (
        <Card
          key={event.id}
          image={event.image}
          date={{
            day: event.date.day,
            date: event.date.date,
            month: event.date.month,
          }}
          title={event.title}
          price={event.price}
          location={event.location}
          status={event.status}
          lastEdited={event.lastEdited}
          onEdit={() => console.log('Edit event', event.id)}
          onDelete={() => console.log('Delete event', event.id)}
        />
      ))}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      date: PropTypes.shape({
        day: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      lastEdited: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
};

export default EventList;