import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../common/Header';

const FolderView = () => {
  const { eventId } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Folder View for Event {eventId}</h1>
        <p>This is the folder view for the selected event. Add your content here.</p>
      </main>
    </div>
  );
};

export default FolderView;
