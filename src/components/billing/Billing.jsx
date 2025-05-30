import React from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";

const Billing = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-col p-8 w-full max-w-7xl mx-auto">
          <div className="text-3xl font-bold text-white mb-2">Billing & Invoice</div>
          <div className="text-gray-400 mb-8">Paid on June 27, 2023</div>
          <div className="flex gap-8">
            {/* Invoice Card */}
            <div className="bg-[#191919] rounded-2xl p-8 flex-1 max-w-3xl">
              <div className="flex justify-between items-center mb-4">
                <img src="/images/img_stashinvoice.svg" alt="Cirkle" className="h-10" />
                <div className="text-right">
                  <div className="text-xs text-gray-400">#2023-05-005</div>
                  <div className="text-lg font-bold text-white">Total Amount</div>
                  <div className="text-2xl font-bold text-white">₹ 50,000</div>
                </div>
              </div>
              <div className="flex gap-8 mb-4">
                <div className="bg-[#232323] rounded-xl p-4 flex-1">
                  <div className="text-xs text-gray-400 mb-2">Bill Date</div>
                  <div className="text-white font-bold mb-2">03/05/2020</div>
                  <div className="text-xs text-gray-400 mb-2">Terms of Payment</div>
                  <div className="text-white font-bold mb-2">Within 15 Days</div>
                  <div className="text-xs text-gray-400 mb-2">Payment Deadline</div>
                  <div className="text-white font-bold">05/18/2020</div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 mb-1">Billing Address</div>
                  <div className="text-white font-bold">Name</div>
                  <div className="text-xs text-gray-400">Address line 1</div>
                  <div className="text-xs text-gray-400">Contact | email</div>
                  <div className="text-xs text-gray-400">GST Number</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-1">Note</div>
                <div className="text-white text-xs">Lorem ipsum dolor sit amet consectetur. Diam sit sit nulla sit in interdum at.</div>
              </div>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-400">
                      <th className="px-2 py-2">No.</th>
                      <th className="px-2 py-2">Service</th>
                      <th className="px-2 py-2">GST%</th>
                      <th className="px-2 py-2">Amount</th>
                      <th className="px-2 py-2">Final Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2].map(i => (
                      <tr key={i} className="bg-[#232323] border-b border-[#232323]">
                        <td className="px-2 py-2 text-white">{i}</td>
                        <td className="px-2 py-2 text-white">
                          Product Name<br />
                          <span className="text-xs text-gray-400">Product Description</span>
                        </td>
                        <td className="px-2 py-2 text-white">18%</td>
                        <td className="px-2 py-2 text-white">₹30,000</td>
                        <td className="px-2 py-2 text-white">₹45,000</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-xs text-gray-400 mt-2">Terms & Conditions</div>
            </div>
            {/* Payment Method Card */}
            <div className="flex flex-col gap-6 w-[340px]">
              <div className="bg-[#232323] rounded-2xl p-6 mb-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-[#22e6ce]">₹2603</div>
                  <button className="bg-[#22e6ce] text-white font-bold px-6 py-2 rounded-lg" onClick={() => alert('Add Fund Clicked!')}>Add Fund</button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#191919] rounded-lg px-4 py-2 flex-1">
                    <div className="text-xs text-gray-400">Master Card</div>
                    <div className="text-white font-bold">**** 4002</div>
                    <div className="text-xs text-gray-400">Expiry on 3/2024</div>
                  </div>
                  <button className="bg-[#232323] border border-gray-600 text-white font-bold px-4 py-2 rounded-lg" onClick={() => alert('Change Card Clicked!')}>Change</button>
                </div>
              </div>
              <div className="bg-[#232323] rounded-2xl p-6 flex flex-col items-center">
                <div className="text-lg font-bold mb-2">Get Invoice</div>
                <div className="flex gap-4">
                  <button className="bg-[#22e6ce] text-white font-bold px-6 py-2 rounded-lg flex items-center gap-2" onClick={() => alert('Invoice Downloaded!')}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" /></svg>
                    Download
                  </button>
                  <button className="bg-[#232323] border border-gray-600 text-white font-bold px-6 py-2 rounded-lg flex items-center gap-2" onClick={() => alert('Invoice sent to mail!')}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4v16h16V4H4zm4 4h8v8H8V8z" /></svg>
                    Mail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;