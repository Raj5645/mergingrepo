import React from 'react';
import LiveRevenue from './LiveRevenue';

// This component overlays the ticketing donut chart and table as a modal or main content
const LiveRevenueTicketingModal = () => {
  // You can add modal logic here if you want it to overlay, or just render as a page
  return <LiveRevenue showTicketingModal />;
};

export default LiveRevenueTicketingModal;
