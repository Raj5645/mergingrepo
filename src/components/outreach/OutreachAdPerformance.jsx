import React from "react";
import "@fontsource/ruda"; // Ensure Ruda font is installed via npm and imported

const adData = [
  {
    image:
      "https://media.istockphoto.com/id/1366076847/photo/concert-and-festival-background-crowd-of-people-partying.jpg?s=612x612&w=0&k=20&c=iBac8CG7ep_eXm1rOgQ4n0cwbQyLYY5M_7jgdZWI29E=",
    roi: 5000,
    eventName: "Event Name",
    stats: {
      views: 500,
      likes: 500,
      follows: 500,
      visits: 500,
      orders: 500,
      transactions: 500,
    },
    type: "Post",
    dimension: "1:1",
  },
  {
    image:
      "https://pplx-res.cloudinary.com/image/private/user_uploads/60782185/694adef5-e785-4c8a-b4e5-98f2874f81ba/image.jpg",
    roi: 5000,
    eventName: "Event Name",
    stats: {
      views: 500,
      likes: 500,
      follows: 500,
      visits: 500,
      orders: 500,
      transactions: 500,
    },
    type: "Reel",
    dimension: "9:16",
  },
];

const statLabels = [
  { key: "views", label: "Views" },
  { key: "likes", label: "Like" },
  { key: "follows", label: "Follows" },
  { key: "visits", label: "Visits" },
  { key: "orders", label: "Orders" },
  { key: "transactions", label: "Transactions" },
];

const AdPerformance = () => {
  return (
    <div
      className="w-full max-w-[1141px] mx-auto bg-[#232323] bg-opacity-80 rounded-xl p-6 flex flex-col gap-6"
      style={{ fontFamily: "'Ruda', sans-serif" }}
    >
      <div className="font-bold text-xl mb-2" style={{ color: "#777777" }}>
        AD Performances
      </div>
      <div className="flex flex-wrap gap-8">
        {adData.map((ad, idx) => (
          <div
            key={idx}
            className="rounded-xl w-full max-w-[330px] min-h-[420px] p-4 flex flex-col shadow-lg relative border overflow-hidden"
            style={{
              borderColor: "#777777",
              color: "#777777",
              fontFamily: "'Ruda', sans-serif",
            }}
          >
            {/* Type & Dimension Badge */}
            <div
              className="absolute top-4 right-4 bg-[#222] bg-opacity-80 text-xs px-2 py-1 rounded-md font-semibold z-10"
              style={{ color: "#777777" }}
            >
              {ad.type} ({ad.dimension})
            </div>
            {/* Image with ROI badge */}
            <div className="relative w-full h-[180px] mb-4 overflow-hidden rounded-lg">
              <img
                src={ad.image}
                alt={ad.eventName}
                className="w-full h-full object-cover"
              />
              {/* ROI Badge */}
              <div
                className="absolute bottom-3 left-3 font-bold px-4 py-1 rounded text-sm flex items-center gap-1 shadow"
                style={{
                  backgroundColor: "#AAFF00",
                  color: "#232323",
                }}
              >
                <span>₹</span>
                <span>
                  ROI : ₹{ad.roi.toLocaleString()}
                </span>
              </div>
            </div>
            {/* Event Name */}
            <div
              className="font-bold text-lg mb-3"
              style={{ color: "#777777" }}
            >
              {ad.eventName}
            </div>
            {/* Stats Boxes - Compact, single-line, equal height */}
            <div className="flex flex-wrap items-start gap-2 mb-1">
              {statLabels.map((stat) => (
                <div
                  key={stat.key}
                  className="rounded px-2 h-8 flex items-center text-xs border"
                  style={{
                    borderColor: "#777777",
                    color: "#777777",
                  }}
                >
                  {stat.label} : {ad.stats[stat.key]}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdPerformance;
