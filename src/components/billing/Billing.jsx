import React from "react";
import Sidebar from "../common/Sidebar";

const themeBlue = "bg-gradient-to-r from-[#22e6ce] to-[#3479ff]";

const Billing = () => {

  // useEffect(()=>{

  //   const getData = async () =>{

  //     try {
  //       const response = await fetch("",{
  //         method:"GET",
  //         headers:{
  //           "Content-Type": "apllication/json";
  //         },
  //         body: JSON.stringify();
  //       });

  //       if(!response.ok)
  //       {
  //          console.log("in metrics response  not fetched");
  //          return ;
  //       }


  //     } catch (error) {
  //       console.log("error in metricsection is:", error);
  //     }
  // getData();

  //   }


  // },[]);

  return (
    <div className="min-h-screen flex bg-gradient-to-b pt-[85px] from-[#232323] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col mx-auto p-8" style={{ width: 1198, height: 722, background: "rgba(255,255,255,0.05)", borderRadius: 24 }}>
            {/* Top Left Title */}
            <div className="absolute left-8 top-8 font-bold uppercase" style={{ fontSize: 28.11, width: 350 }}>BILLING AND INOVICE</div>
            {/* Bill Box (Left) */}
            <div className="absolute left-8 top-24 bg-[#232323] bg-opacity-80 rounded-2xl p-8 flex flex-col gap-4 shadow-lg" style={{ width: 742, height: 549 }}>
              <div className="font-bold text-xl mb-2">Bill by Cirkle</div>
              <div className="text-sm text-gray-400 mb-4">Billed to: John Doe<br/>Event: Cirkle Live Concert<br/>Date: 24 May 2025<br/>Venue: Cirkle Arena, Mumbai</div>
              <div className="flex justify-between border-b border-gray-700 pb-2 mb-2">
                <span>Ticket Price</span>
                <span>₹2,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2 mb-2">
                <span>Service Fee</span>
                <span>₹200</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2 mb-2">
                <span>GST (18%)</span>
                <span>₹396</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span>₹2,596</span>
              </div>
              <div className="mt-8 text-xs text-gray-500">Thank you for choosing Cirkle!</div>
            </div>
            {/* Payment Box (Right, Top) */}
            <div className="absolute right-8 top-24 bg-[#232323] bg-opacity-80 rounded-2xl p-6 flex flex-col gap-4 shadow-lg" style={{ width: 348, height: 222 }}>
              <div className="font-bold text-lg mb-2">Add your card</div>
              <input type="text" placeholder="Card Number" className="w-full h-10 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600 mb-2" />
              <div className="flex gap-2 mb-2">
                <input type="text" placeholder="MM/YY" className="w-1/2 h-10 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600" />
                <input type="text" placeholder="CVV" className="w-1/2 h-10 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600" />
              </div>
              <button className={`${themeBlue} w-full h-10 rounded-lg font-bold text-base mt-2`}>Pay Bill</button>
            </div>
            {/* Invoice Box (Right, Bottom) */}
            <div className="absolute right-8 top-[270px] bg-[#232323] bg-opacity-80 rounded-2xl p-6 flex flex-col gap-4 shadow-lg" style={{ width: 348, height: 118 }}>
              <div className="font-bold text-lg mb-2">Get Invoice</div>
              <div className="flex gap-4">
                <button className="flex-1 bg-[#171717] border border-[#3479ff] rounded-lg py-2 font-semibold text-sm hover:bg-[#3479ff] hover:text-white transition">Download</button>
                <button className="flex-1 bg-[#171717] border border-[#3479ff] rounded-lg py-2 font-semibold text-sm hover:bg-[#3479ff] hover:text-white transition">Get Mail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
