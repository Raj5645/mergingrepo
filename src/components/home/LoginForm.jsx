import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import callimg from "./icons/call.png";
import fbimg from "./icons/fb.png";
import googleimg from "./icons/google.png";

const LoginForm = ({ setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/events');
  };

  const handleGoogleLogin = () => {
    console.log('Google Login clicked');
    // Add your Google login logic here
  };

  const handlePhoneLogin = () => {
    console.log('Phone Login clicked');
    // Add your phone login logic here
  };

  const handleFacebookLogin = () => {
    console.log('Facebook Login clicked');
    // Add your Facebook login logic here
  };

  return (
    <form className="w-full font-ruda" onSubmit={handleLogin}>
      <h2 className="text-white text-3xl font-bold mb-8">Login</h2>

      <label className="block text-white text-base font-semibold mb-1">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full mb-4 px-4 py-3 rounded-lg bg-white text-black text-base outline-none border border-white/40 focus:border-[#22e6ce] transition placeholder-gray-400"
        placeholder="username@gmail.com"
      />

      <label className="block text-white text-base font-semibold mb-1">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full mb-2 px-4 py-3 rounded-lg bg-white text-black text-base outline-none border border-white/40 focus:border-[#22e6ce] transition placeholder-gray-400"
        placeholder="Password"
      />

      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center text-sm text-white">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
            className="accent-[#22e6ce] mr-2"
          />
          Remember me?
        </label>
        <button type="button" className="text-xs text-white/70 hover:text-[#22e6ce] transition">
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-[#3479ff] to-[#22e6ce] text-white font-bold text-lg mb-5 shadow-md transition hover:scale-[1.02]"
      >
        LOGIN
      </button>

      <div className="flex items-center mb-5">
        <div className="flex-1 border-t border-white/20"></div>
        <span className="mx-4 text-white/60 text-sm">or continue with</span>
        <div className="flex-1 border-t border-white/20"></div>
      </div>

      <div className="flex justify-between gap-4 mb-5">
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex-1 flex items-center justify-center bg-white rounded-lg h-12 shadow text-black hover:bg-gray-100 transition"
        >
          <img src={googleimg} alt="Google" className="w-6 h-6 mr-2" />
        </button>

        <button
          type="button"
          onClick={handlePhoneLogin}
          className="flex-1 flex items-center justify-center bg-white rounded-lg h-12 shadow text-black hover:bg-gray-100 transition"
        >
          <img src={callimg} alt="Phone" className="w-6 h-6 mr-2" />
        </button>

        <button
          type="button"
          onClick={handleFacebookLogin}
          className="flex-1 flex items-center justify-center bg-white rounded-lg h-12 shadow text-black hover:bg-gray-100 transition"
        >
          <img src={fbimg} alt="Facebook" className="w-6 h-6 mr-2" />
        </button>
      </div>

      <div className="text-white/80 text-sm text-center">
        Don't have an account yet?
        <button
          type="button"
          // className="text-[#22e6ce] font-semibold underline ml-1"
          onClick={() => setActiveTab('signup')}
        >
          <span class="p-2 underline">SIGN UP</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

