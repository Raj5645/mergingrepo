
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [loading, setLoading] = useState(false);

  // Get userId or tempId from location.state
  const userId = location.state?.userId;
  const email = location.state?.email;

  const handleSendOtp = async () => {
    setLoading(true);
    setOtpError('');

    // try {
    //   const res = await fetch("", {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ userId, email, mobile }),
    //   });
    //   const data = await res.json();
    //   if (!res.ok) {
    //     setOtpError(data.message || 'Failed to send OTP');
    //   }
    // } catch (err) {
    //   setOtpError('Network error');
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOtpError('');
    // try {
    //   const res = await fetch('https://your-backend.com/api/verify-otp', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ userId, otp }),
    //   });
    //   const data = await res.json();
    //   if (res.ok && data.token) {
    //     localStorage.setItem('authToken', data.token);
        navigate('/events');
    //   } else {
    //     setOtpError(data.message || 'Invalid OTP or expired');
    //   }
    // } catch (err) {
    //   setOtpError('Network error');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Background, logo, etc. */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/img_mask_group.png"
          alt="Cirkle Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717] to-[#000000] opacity-90"></div>
      </div>
      <form
        onSubmit={handleVerifyOtp}
        className="bg-[#232323]/90 rounded-[18px] shadow-lg flex flex-col px-10 py-12"
        style={{ width: '496px', minWidth: '496px' }}
      >
        <span className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">Verify OTP</span>
        <label className="text-lg text-white font-medium mb-2" htmlFor="mobile">Mobile Number</label>
        <input
          id="mobile"
          type="tel"
          value={mobile}
          onChange={e => setMobile(e.target.value)}
          className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
          style={{ width: '414.92px', minWidth: '414.92px' }}
          required
        />
        <button
          type="button"
          onClick={handleSendOtp}
          disabled={loading}
          className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg text-white font-bold text-lg mb-4"
          style={{ width: '200px' }}
        >
          {loading ? 'Sending OTP...' : 'Send OTP'}
        </button>
        <label className="text-lg text-white font-medium mb-2" htmlFor="otp">OTP</label>
        <input
          id="otp"
          type="text"
          value={otp}
          onChange={e => setOtp(e.target.value)}
          className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
          style={{ width: '414.92px', minWidth: '414.92px' }}
          required
        />
        {otpError && <span className="text-red-500 text-xs mb-2">{otpError}</span>}
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg text-white font-bold text-lg mb-8"
          style={{ width: '414.92px', minWidth: '414.92px' }}
        >
          {loading ? 'Verifying...' : 'Verify & Login'}
        </button>
      </form>
    </div>
  );
};

export default OtpPage;