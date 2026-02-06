

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!username || !password) {
      setMessage("Please fill in both fields.");
      return;
    }

    if (!/\d/.test(password)) {
      setMessage("Password must contain at least one number.");
      return;
    }

    const dummyUser = { username: "kaif", password: "kaif123" };

    if (username === dummyUser.username && password === dummyUser.password) {
      setMessage(`Welcome, ${username}! Login successful.`);
    } else {
      setMessage("Invalid credentials.");
    }
  };

  return (
    <div className='form'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='text'>
          <label htmlFor="text">Username</label>
          <input
            id='text'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your name'
          />

          <div className='passy'>
            <label htmlFor="pass">Password</label>
            <input
              type= {showPassword ? "text" : "password"}
              id='pass'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
            />
          </div>
            {/* Show Password Toggle */}
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>

          <button type='submit'>Submit</button>

          
          {message && <p style={{ marginTop: '10px', color: 'blue' }}>{message}</p>}
        </div>
      </form>
    </div>
  );
}

export default App;
