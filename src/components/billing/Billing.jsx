import React, { useState } from 'react';
import Header from '../common/header2';
import Sidebar from '../common/Sidebar';
import CIRKLE_LOGO from './cirklelogo.png'; // Replace with actual path

const Billing = () => {
  const [invoice] = useState({
    paidDate: 'June 27, 2023',
    invoiceNumber: '#2020-05-0001',
    totalAmount: 50000,
    billDate: '03/05/2020',
    terms: 'within 15 days',
    paymentDeadline: '05/18/2020',
    company: {
      name: 'Cirkle',
      address: 'Address line 1',
      email: 'Contact number | email',
      contact: 'John Brandon',
    },
    billingAddress: {
      name: 'Name',
      address: 'Address line 1',
      contact: 'Contact | email',
      gst: 'GST Number',
    },
    note: 'Lorem ipsum dolor sit amet consectetur. Diam sit sit nulla sit in interdum at.',
    items: [
      {
        service: 'Product Name',
        description: 'Product Description',
        gst: 18,
        amount: 30000,
        finalAmount: 45000,
      },
      {
        service: 'Product Name',
        description: 'Product Description',
        gst: 18,
        amount: 30000,
        finalAmount: 45000,
      },
      // More rows can be added dynamically here
    ],
  });

  const [payment] = useState({
    availableAmount: 2603,
    card: {
      type: 'Master Card',
      number: '**** **** **** 4002',
      expiry: '20/2024',
      image: '/path/to/mastercard.png', // Replace with actual path
    },
  });

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
  <div className="min-h-screen bg-black flex pt-[75px] text-white font-['Inter','Poppins',sans-serif]">
  {/* Sidebar */}
  <div className="hidden md:block w-[220px] h-full bg-black">
    <Sidebar />
  </div>
  {/* Main Content */}
  <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
    <Header />
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
      {/* Left: Invoice Section */}
      <div className="flex-1">
        <div className="rounded-2xl p-6 md:p-8 bg-[#212121] shadow-lg relative">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-bold text-2xl sm:text-3xl mb-1">Billing & Invoice</div>
                  <div className="text-sm text-gray-200">Paid on {invoice.paidDate}</div>
                </div>
                {/* Total Amount (above, right) */}
                <div className="flex flex-col items-end mt-4 sm:mt-0">
                  <div className="bg-[#303030] px-4 py-1 rounded-t-lg text-xs font-semibold text-white mb-1">
                    {invoice.invoiceNumber}
                  </div>
                  <div className="px-4 py-1 rounded-b-lg text-xs font-semibold text-white">
                    Total Amount
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">
                    ₹{invoice.totalAmount.toLocaleString()}
                  </div>
                </div>
              </div>
              {/* Cirkle Logo & Company Info */}
              <div className="flex items-center gap-4 mt-6">
                <div
                  className="rounded bg-[#232323] flex items-center justify-center overflow-hidden"
                  style={{ width: 117.85, height: 52 }}
                >
                  <img
                    src={CIRKLE_LOGO}
                    alt="Cirkle Logo"
                    style={{ width: 117.85, height: 52, objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">Cirkle</div>
                  <div className="text-sm text-gray-200">{invoice.company.contact}</div>
                  <div className="text-sm text-gray-200">{invoice.company.address}</div>
                  <div className="text-sm text-gray-200">{invoice.company.email}</div>
                </div>
              </div>
              {/* Bordered Section with Padding */}
              <div className="mt-6 rounded-2xl border border-[#3D3D3D] px-6 py-6">
                {/* Info Boundary Box */}
                <div className="flex flex-col md:flex-row gap-4 bg-[#212121]">
                  {/* Left: Bill Info */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <div className="text-xs font-semibold text-[#757575] bg-[#212121]">
                        Bill Date
                      </div>
                      <div className="text-base text-white font-semibold">{invoice.billDate}</div>
                    </div>
                    <div className="mb-2">
                      <div className="text-xs font-semibold text-[#757575] bg-[#212121]">
                        Terms of Payment
                      </div>
                      <div className="text-base text-white font-semibold">{invoice.terms}</div>
                    </div>
                    <div className="mb-2">
                      <div className="text-xs font-semibold text-[#757575] bg-[#212121]">
                        Payment Deadline
                      </div>
                      <div className="text-base text-white font-semibold">
                        {invoice.paymentDeadline}
                      </div>
                    </div>
                  </div>
                  {/* Right: Billing Address & Note */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <div className="text-xs font-semibold text-[#757575] bg-[#212121]">
                        Billing Address
                      </div>
                      <div className="text-base text-white font-semibold">
                        {invoice.billingAddress.name}
                      </div>
                      <div className="text-sm text-white">{invoice.billingAddress.address}</div>
                      <div className="text-sm text-white">{invoice.billingAddress.contact}</div>
                      <div className="text-sm text-white font-semibold">
                        {invoice.billingAddress.gst}
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-xs font-semibold text-[#757575] bg-[#212121]">Note</div>
                      <div className="text-sm text-white">{invoice.note}</div>
                    </div>
                  </div>
                </div>
                {/* Table Heading */}
                <div className="mt-6 rounded-t-lg bg-[#2D2D2D] px-4 py-2">
                  <div className="flex justify-between text-white font-semibold text-sm">
                    <div className="w-8">No.</div>
                    <div className="flex-1">Service</div>
                    <div className="w-16 text-center">GST%</div>
                    <div className="w-24 text-right">Amount</div>
                    <div className="w-28 text-right">Final Amount</div>
                  </div>
                </div>
                {/* Table Rows with Thin Border */}
                <div className="rounded-b-lg bg-[#232323]">
                  {invoice.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center px-4 py-2 border-b border-white border-opacity-10 last:border-b-0 text-white text-sm"
                    >
                      <div className="w-8">{idx + 1}</div>
                      <div className="flex-1">
                        <div className="font-semibold">{item.service}</div>
                        <div className="text-xs text-gray-400">{item.description}</div>
                      </div>
                      <div className="w-16 text-center">{item.gst}%</div>
                      <div className="w-24 text-right">₹{item.amount.toLocaleString()}</div>
                      <div className="w-28 text-right">₹{item.finalAmount.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
                {/* Terms & Conditions */}
                <div className="mt-4 text-xs text-gray-200">Terms & Conditions</div>
              </div>
            </div>
          </div>
          {/* Right: Payment Method & Get Invoice */}
          <div className="w-full lg:w-[340px] flex flex-col gap-6">
            {/* Payment Method */}
            <div className="rounded-2xl bg-[#2D2D2D] p-6 shadow-lg">
              <div className="font-semibold text-white text-base mb-4">Payment Method</div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[#22e6ce] font-bold text-2xl">
                    ₹{payment.availableAmount}
                  </div>
                  <div className="text-xs text-gray-200">Available Amount</div>
                </div>
                <button className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] px-4 py-2 rounded-lg font-semibold text-sm ml-2">
                  Add Fund
                </button>
              </div>
              {/* Card Option */}
              <div
                className="flex items-center gap-3 bg-[#232323] rounded-lg px-4 py-3 cursor-pointer"
                onClick={() => setShowPaymentModal(true)}
              >
                <img
                  src={payment.card.image}
                  alt="Master Card"
                  className="w-10 h-7 object-contain"
                />
                <div className="flex-1">
                  <div className="font-semibold">{payment.card.type}</div>
                  <div className="text-xs text-gray-400">{payment.card.number}</div>
                  <div className="text-xs text-gray-400">Expiry on {payment.card.expiry}</div>
                </div>
                <button className="bg-[#424242] text-white px-3 py-1 rounded font-semibold text-xs">
                  Change
                </button>
              </div>
            </div>
            {/* Modal for Payment Platform Selection */}
            {showPaymentModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                <div className="bg-[#232323] rounded-xl p-6 w-full max-w-sm shadow-lg">
                  <div className="font-bold text-lg mb-4 text-white">Select Payment Platform</div>
                  <div className="flex flex-col gap-3">
                    <button className="flex items-center gap-2 bg-[#424242] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#3479ff] transition">
                      <img
                        src="/path/to/mastercard.png"
                        alt="Master Card"
                        className="w-8 h-5 object-contain"
                      />
                      Master Card
                    </button>
                    <button className="flex items-center gap-2 bg-[#424242] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#3479ff] transition">
                      <img src="/path/to/visa.png" alt="Visa" className="w-8 h-5 object-contain" />
                      Visa
                    </button>
                    <button className="flex items-center gap-2 bg-[#424242] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#3479ff] transition">
                      <img src="/path/to/upi.png" alt="UPI" className="w-8 h-5 object-contain" />
                      UPI
                    </button>
                  </div>
                  <button
                    className="mt-6 w-full bg-[#22e6ce] text-black font-bold py-2 rounded-lg"
                    onClick={() => setShowPaymentModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {/* Get Invoice */}
            <div className="rounded-2xl bg-[#2A2A2A] p-6 shadow-lg">
              <div className="font-bold text-lg mb-4 text-white">Get Invoice</div>
              <div className="flex gap-4">
                <button className="flex-1 bg-[#424242] text-white rounded-lg py-2 font-semibold text-sm hover:bg-[#3479ff] transition">
                  Download
                </button>
                <button className="flex-1 bg-[#424242] text-white rounded-lg py-2 font-semibold text-sm hover:bg-[#3479ff] transition">
                  Mail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
