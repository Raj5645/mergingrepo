<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
=======
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const passwordStrength = (password) => {
//   let score = 0;
//   if (password.length >= 8) score++;
//   if (/[A-Z]/.test(password)) score++;
//   if (/[a-z]/.test(password)) score++;
//   if (/\d/.test(password)) score++;
//   if (/[^A-Za-z0-9]/.test(password)) score++;
//   if (score <= 2) return 'Weak';
//   if (score === 3 || score === 4) return 'Medium';
//   return 'Strong';
// };

// const SignupForm = () => {
//   const [username, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirm, setConfirm] = useState('');
//   const [passwordMatch, setPasswordMatch] = useState('');
//   const [strength, setStrength] = useState('');
//   const [signupError, setSignupError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

//   const handlePasswordChange = (val) => {
//     setPassword(val);
//     setStrength(passwordStrength(val));
//     setPasswordMatch(val === confirm ? 'match' : confirm ? 'no-match' : '');
//   };

//   const handleConfirmChange = (val) => {
//     setConfirm(val);
//     setPasswordMatch(password === val ? 'match' : val ? 'no-match' : '');
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setSignupError('');
//     // if (!validateEmail(email)) {
//     //   setEmailError('Invalid email');
//     //   return;
//     // }
//     if (!username) {
//       setSignupError('username is required');
//       return;
//     }
//     // if (password !== confirm) {
//     //   setSignupError('Passwords do not match');
//     //   return;
//     // }
//     // if (passwordStrength(password) === 'Weak') {
//     //   setSignupError('Password is too weak');
//     //   return;
//     // }
//     // setLoading(true);
//     // ('');

//     // try {
//     //   const res = await fetch("/api/user/users/register", {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify({ username, email, password }),
//     //   });
//     // //   const data = await res.json();
//     //   if (res.ok ) {
//     //     const data = await res.json();

//     //     if(data && data.token)
//     //     {
//     //        console.log(data);
//     //        localStorage.setItem("token",data.token);
//     //     }
//     //     else
//     //     {
//     //       console.log("token not found");
//     //       return ;
//     //     }
//     //     //     // Save userId or temp token if needed, then navigate
//     //     // navigate('/otppage', { state: { userId: data.userId || data.tempId, email } });
//     //     console.log("fetching success");
//         navigate('/otppage');
//     //   } else {
//     //     console.log("response failed");
//     //     setSignupError('Signup failed');
//     //   }
//     // } catch (err) {
//     //     console.log("fetching failed",err);
//     //   setSignupError('Network error');
//     // } finally {
//     //   setLoading(false);
//     // }

//   };

//   return (
//     <form
//       onSubmit={handleSignup}
//       className="bg-[#232323]/90 rounded-[18px] shadow-lg flex flex-col px-10 py-12"
//       style={{ width: '496px', minWidth: '496px' }}
//     >
//       <span className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">SIGNUP</span>
//       <label className="text-lg text-white font-medium mb-2" htmlFor="username">
//         User Name
//       </label>
//       <input
//         id="username"
//         type="text"
//         value={username}
//         onChange={(e) => setUserName(e.target.value)}
//         className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
//         style={{ width: '414.92px', minWidth: '414.92px' }}
//         required
//       />
//       <label className="text-lg text-white font-medium mb-2" htmlFor="email">
//         Email
//       </label>
//       <input
//         id="email"
//         type="email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//           setEmailError('');
//         }}
//         className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
//         style={{ width: '414.92px', minWidth: '414.92px' }}
//         required
//       />
//       {emailError && <span className="text-red-500 text-xs mb-2">{emailError}</span>}
//       <label className="text-lg text-white font-medium mt-4 mb-2" htmlFor="password">
//         Password
//       </label>
//       <input
//         id="password"
//         type="password"
//         value={password}
//         onChange={(e) => handlePasswordChange(e.target.value)}
//         className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
//         style={{ width: '414.92px', minWidth: '414.92px' }}
//         required
//       />
//       {strength && (
//         <span
//           className={`text-xs mb-2 ${strength === 'Strong' ? 'text-green-500' : strength === 'Medium' ? 'text-yellow-400' : 'text-red-500'}`}
//         >
//           Password strength: {strength}
//         </span>
//       )}
//       <label className="text-lg text-white font-medium mt-4 mb-2" htmlFor="confirm">
//         Confirm Password
//       </label>
//       <input
//         id="confirm"
//         type="password"
//         value={confirm}
//         onChange={(e) => handleConfirmChange(e.target.value)}
//         className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
//         style={{ width: '414.92px', minWidth: '414.92px' }}
//         required
//       />
//       {passwordMatch === 'match' && (
//         <span className="text-green-500 text-xs mb-2">Passwords match</span>
//       )}
//       {passwordMatch === 'no-match' && (
//         <span className="text-red-500 text-xs mb-2">Passwords do not match</span>
//       )}
//       {signupError && <span className="text-red-500 text-xs mb-2">{signupError}</span>}
//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg text-white font-bold text-lg mb-8"
//         style={{ width: '414.92px', minWidth: '414.92px' }}
//       >
//         {loading ? 'Signing up...' : 'SIGNUP'}
//       </button>
//     </form>
//   );
// };

// export default SignupForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import callimg from './icons/call.png';
import fbimg from './icons/fb.png';
import googleimg from './icons/google.png';
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3

const passwordStrength = (password) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score <= 2) return 'Weak';
<<<<<<< HEAD
  if (score === 3 || score === 4) return 'Medium';
  return 'Strong';
};

const SignupForm = () => {
  const [username, setUserName] = useState('');
=======
  if (score <= 4) return 'Medium';
  return 'Strong';
};

const SignupForm = ({ setActiveTab }) => {
  // const [username, setUserName] = useState('');
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');
  const [strength, setStrength] = useState('');
  const [signupError, setSignupError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handlePasswordChange = (val) => {
    setPassword(val);
    setStrength(passwordStrength(val));
    setPasswordMatch(val === confirm ? 'match' : confirm ? 'no-match' : '');
  };

  const handleConfirmChange = (val) => {
    setConfirm(val);
    setPasswordMatch(password === val ? 'match' : val ? 'no-match' : '');
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupError('');
<<<<<<< HEAD
    // if (!validateEmail(email)) {
    //   setEmailError('Invalid email');
    //   return;
    // }
    if (!username) {
      setSignupError('username is required');
      return;
    }
    // if (password !== confirm) {
    //   setSignupError('Passwords do not match');
    //   return;
    // }
=======

    // if (!username) {
    //   setSignupError('Username is required');
    //   return;
    // }

    if (!validateEmail(email)) {
      setEmailError('Invalid email');
      return;
    }

    if (password !== confirm) {
      setSignupError('Passwords do not match');
      return;
    }

>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
    // if (passwordStrength(password) === 'Weak') {
    //   setSignupError('Password is too weak');
    //   return;
    // }
<<<<<<< HEAD
    // setLoading(true);
    // ('');

    // try {
    //   const res = await fetch("/api/user/users/register", {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, email, password }),
    //   });
    // //   const data = await res.json();
    //   if (res.ok ) {
    //     const data = await res.json();

    //     if(data && data.token)
    //     {
    //        console.log(data);
    //        localStorage.setItem("token",data.token);
    //     }
    //     else
    //     {
    //       console.log("token not found");
    //       return ;
    //     }
    //     //     // Save userId or temp token if needed, then navigate
    //     // navigate('/otppage', { state: { userId: data.userId || data.tempId, email } });
    //     console.log("fetching success");
        navigate('/otppage');
    //   } else {
    //     console.log("response failed");
    //     setSignupError('Signup failed');
    //   }
    // } catch (err) {
    //     console.log("fetching failed",err);
    //   setSignupError('Network error');
    // } finally {
    //   setLoading(false);
    // }

  };

  return (
    <form
      onSubmit={handleSignup}
      className="bg-[#232323]/90 rounded-[18px] shadow-lg flex flex-col px-10 py-12"
      style={{ width: '496px', minWidth: '496px' }}
    >
      <span className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">SIGNUP</span>
      <label className="text-lg text-white font-medium mb-2" htmlFor="username">
        User Name
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
        style={{ width: '414.92px', minWidth: '414.92px' }}
        required
      />
      <label className="text-lg text-white font-medium mb-2" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError('');
        }}
        className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
        style={{ width: '414.92px', minWidth: '414.92px' }}
        required
      />
      {emailError && <span className="text-red-500 text-xs mb-2">{emailError}</span>}
      <label className="text-lg text-white font-medium mt-4 mb-2" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
        className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
        style={{ width: '414.92px', minWidth: '414.92px' }}
        required
      />
      {strength && (
        <span
          className={`text-xs mb-2 ${strength === 'Strong' ? 'text-green-500' : strength === 'Medium' ? 'text-yellow-400' : 'text-red-500'}`}
        >
          Password strength: {strength}
        </span>
      )}
      <label className="text-lg text-white font-medium mt-4 mb-2" htmlFor="confirm">
        Confirm Password
      </label>
      <input
        id="confirm"
        type="password"
        value={confirm}
        onChange={(e) => handleConfirmChange(e.target.value)}
        className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
        style={{ width: '414.92px', minWidth: '414.92px' }}
        required
      />
      {passwordMatch === 'match' && (
        <span className="text-green-500 text-xs mb-2">Passwords match</span>
      )}
      {passwordMatch === 'no-match' && (
        <span className="text-red-500 text-xs mb-2">Passwords do not match</span>
      )}
      {signupError && <span className="text-red-500 text-xs mb-2">{signupError}</span>}
      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg text-white font-bold text-lg mb-8"
        style={{ width: '414.92px', minWidth: '414.92px' }}
      >
        {loading ? 'Signing up...' : 'SIGNUP'}
      </button>
=======

    setLoading(true);

    const now = new Date().toISOString();

    const submitBody = {
      userId: 0,
      password: password,
      userEmail: email,
      roles: ["user"],
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      active: true,
    };

    try {
      const res = await fetch('/api/user/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitBody),
      });

      if(!res.ok){
        console.log("response not fetched in signupform");
        setSignupError('Signup failed');
        return ;
      }
      const data = await res.json();

      if(!data)
      {
         console.log("data not received in signupform");
         return ;
      }

      console.log("data received is:", data);
      console.log("token is:", data.data.token);

      navigate('/otppage');

      // if (res.ok) {
      //   const data = await res.json();
      //   if (data && data.token) {
      //     localStorage.setItem('token', data.token);
      //     navigate('/otppage');
      //   } else {
      //     setSignupError('Token not received');
      //   }
      // } else {
      //   setSignupError('Signup failed');
      // }
    } catch (err) {
      setSignupError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSignup}>
      <h2 className="text-white text-3xl font-bold mb-8">SIGN UP</h2>
      <div className="space-y-4">
        {/* <div>
          <label className="block text-white text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-white/20 focus:border-[#22e6ce] focus:outline-none transition"
            placeholder="Your name"
          />
        </div> */}

        <div>
          <label className="block text-white text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-white/20 focus:border-[#22e6ce] focus:outline-none transition"
            placeholder="username@gmail.com"
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-white/20 focus:border-[#22e6ce] focus:outline-none transition"
            placeholder="Password"
          />
          {strength && (
            <p
              className={`text-xs mt-1 ${strength === 'Strong' ? 'text-green-500' : strength === 'Medium' ? 'text-yellow-400' : 'text-red-500'}`}
            >
              Password strength: {strength}
            </p>
          )}
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => handleConfirmChange(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-white/20 focus:border-[#22e6ce] focus:outline-none transition"
            placeholder="Confirm Password"
          />
          {passwordMatch === 'match' && <p className="text-green-500 text-xs">Passwords match</p>}
          {passwordMatch === 'no-match' && (
            <p className="text-red-500 text-xs">Passwords do not match</p>
          )}
        </div>

        {signupError && <p className="text-red-500 text-xs">{signupError}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-[#3479ff] to-[#22e6ce] text-white font-bold text-lg shadow-lg transition hover:scale-[1.02] disabled:opacity-60"
        >
          {loading ? 'Signing up...' : 'SIGN UP'}
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-white/20"></div>
          <span className="mx-4 text-white/60 text-sm">or continue with</span>
          <div className="flex-1 border-t border-white/20"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center hover:bg-gray-100 transition"
          >
            <img src={googleimg} alt="google-img" />
          </button>
          <button
            type="button"
            className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center hover:bg-gray-100 transition"
          >
            <img src={callimg} alt="call-img" />
          </button>
          <button
            type="button"
            className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center hover:bg-gray-100 transition"
          >
            <img src={fbimg} alt="fb-img" />
          </button>
        </div>

        <div className="text-white/80 text-sm text-center">
          Already a user?
          <button type="button" onClick={() => setActiveTab('login')}>
            <span className="p-2 underline">LOGIN</span>
          </button>
        </div>
      </div>
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
    </form>
  );
};

export default SignupForm;
