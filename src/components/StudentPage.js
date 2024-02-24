import React, { useState } from 'react';
import './StudentPage.css';
import { Link, useNavigate } from 'react-router-dom';

const StudentPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    try {
      const response = await fetch('http://localhost:9091/loginStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('User logged in successfully');
        // Store email in local storage after successful login
        localStorage.setItem('studentEmail', email);
        setNotification({ message: 'Login successful', type: 'success' });
        navigate("/studentonboard");
      } else {
        console.error('Login failed');
        setNotification({ message: 'Login failed', type: 'error' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      setNotification({ message: 'Error during login', type: 'error' });
    }
  };

  return (
    <div className='nav'>
      <h1 className='head'>Student Login</h1>
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <div id='form'>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='signinBtn'>Sign In</button>
        </form>
        <Link to="/Studentregister"><button className='signupBtn'>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default StudentPage;
