import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#171717] text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="text-lg font-bold">Cirkle</div>
      <div className="flex gap-4">
        <button className="text-sm font-semibold hover:text-[#22e6ce] transition">Home</button>
        <button className="text-sm font-semibold hover:text-[#22e6ce] transition">Profile</button>
        <button className="text-sm font-semibold hover:text-[#22e6ce] transition">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;