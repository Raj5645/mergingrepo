
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUserName] =useState("");
  // const [email, setEmail] = useState('');
  // const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  // const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleLogin = async (e) => {
    e.preventDefault();
    // if (!validateEmail(email)) {
    //   setEmailError('Invalid email');
    //   return;
    // }
    // setEmailError('');
    // setLoginError('');
    

    try {
      const res = await fetch("/api/user/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      // const data = await res.json();
      // if (res.ok) {
      //   localStorage.setItem('authToken', data.token);
      //   navigate('/events');
      // } else {
      //   setLoginError('Login failed');
      // }
      if(!res.ok)
      {
        setLoginError('Login failed');
      }

      const data = await res.json();
      if(!data)
      {
         console.log("No response data");
      }

      console.log("login response data:", data);

      // if(data.data.token)
      // {
      //   console.log("token is:", data.data.token);
      //   localStorage.setItem('token', data.data.token);
      // }
      navigate('/events');

    } catch (err) {
      setLoginError('Network error');
    }


  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-[#232323]/90 rounded-[18px] shadow-lg flex flex-col px-10 py-12"
      style={{ width: '496px', minWidth: '496px' }}
    >
      <span className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">LOGIN</span>
      <label className="text-lg text-white font-medium mb-2" htmlFor="username">UserName</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={e => { setUserName(e.target.value)}}
        className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
        style={{ width: '414.92px', minWidth: '414.92px' }}
        required
      />

      {/* <input
        id="name"
        type="name"
        value={name}
        onChange={e => { setName(e.target.value)}}
        className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
        style={{ width: '414.92px', minWidth: '414.92px' }}
        required
      /> */}

      {/* {emailError && <span className="text-red-500 text-xs mb-2">{emailError}</span>} */}
      <label className="text-lg text-white font-medium mt-4 mb-2" htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="mb-6 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
        style={{ width: '414.92px', minWidth: '414.92px' }}
        required
      />
      {/* {loginError && <span className="text-red-500 text-xs mb-2">{loginError}</span>} */}
      <button
        type="submit"
        className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg text-white font-bold text-lg mb-8"
        style={{ width: '414.92px', minWidth: '414.92px' }}
      >
        LOGIN
      </button>
      {/* Social buttons (optional) */}
    </form>
  );
};

export default LoginForm;
