import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../common/Header";

const RepositoryDashboard = () => {
  const { eventId } = useParams();
  const deployedDashboardUrl = "https://cirkle-dash-board.vercel.app/";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center">
        <div className="w-full max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-full p-3 shadow-lg">
              <img
                src="/images/img_sidashboardduotone.svg"
                alt="Dashboard Icon"
                className="w-8 h-8"
              />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold font-['Ruda'] text-white mb-1 tracking-tight">
                Live Dashboard
              </h1>
              <p className="text-lg text-[#22e6ce] font-semibold">
                Event ID: <span className="text-white">{eventId}</span>
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#232323] to-[#191919] rounded-2xl shadow-2xl p-6 mb-8 border border-[#232323]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-white">Cirkle Dashboard Output</span>
              <a
                href={deployedDashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22e6ce] hover:text-[#3479ff] underline font-semibold transition"
              >
                Open in New Tab
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#232323] bg-white">
              <iframe
                src={deployedDashboardUrl}
                title="Cirkle Dashboard"
                width="100%"
                height="600"
                style={{
                  border: 'none',
                  borderRadius: '0.75rem',
                  background: '#fff',
                  minHeight: 400,
                  display: 'block'
                }}
                allow="clipboard-write; fullscreen; geolocation; microphone; camera"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RepositoryDashboard;
