// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-[#171717] py-4 px-4">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center">
//           <Link to="/dashboard">
//             <img src="/images/img_mask_group.png" alt="Cirkle Logo" className="h-10" />
//           </Link>
//         </div>
        
//         <div className="flex items-center space-x-4">
//           <Link 
//             to="/dashboard" 
//             className="px-4 py-2 rounded-xl text-[#22e6ce] font-medium border border-transparent"
//             style={{
//               borderImage: 'linear-gradient(180deg, #3479ff 0%, #22e6ce 100%)',
//               borderImageSlice: 1
//             }}
//           >
//             Home
//           </Link>
          
//           <Link 
//             to="/settings" 
//             className="px-4 py-2 rounded-xl bg-[#191919] text-[#949494] font-medium"
//           >
//             Settings
//           </Link>
          
//           <Link 
//             to="/contact" 
//             className="px-4 py-2 rounded-xl bg-[#191919] text-[#949494] font-medium"
//           >
//             Contact Us
//           </Link>
          
//           <Link to="/profile">
//             <img 
//               src="/images/img_profile.png" 
//               alt="Profile" 
//               className="w-11 h-11 rounded-full object-cover" 
//             />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header 
      className="bg-[#171717] py-4 px-4 fixed top-0 left-0 right-0 z-50"
      style={{ backdropFilter: 'saturate(180%) blur(5px)' }} // optional, for better look on scroll
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to="/dashboard">
            <img src="/images/img_mask_group.png" alt="Cirkle Logo" className="h-10" />
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/dashboard" 
            className="px-4 py-2 rounded-xl text-[#22e6ce] font-medium border border-transparent"
            style={{
              borderImage: 'linear-gradient(180deg, #3479ff 0%, #22e6ce 100%)',
              borderImageSlice: 1
            }}
          >
            Home
          </Link>
          
          <Link 
            to="/settings" 
            className="px-4 py-2 rounded-xl bg-[#191919] text-[#949494] font-medium"
          >
            Settings
          </Link>
          
          <Link 
            to="/contact" 
            className="px-4 py-2 rounded-xl bg-[#191919] text-[#949494] font-medium"
          >
            Contact Us
          </Link>
          
          <Link to="/profile">
            <img 
              src="/images/img_profile.png" 
              alt="Profile" 
              className="w-11 h-11 rounded-full object-cover" 
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
