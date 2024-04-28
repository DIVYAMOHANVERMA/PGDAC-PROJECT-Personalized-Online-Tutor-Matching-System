import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PasswordResetPage = () => {
  const { token } = useParams(); // Get token from URL params
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send password reset request to backend
    try {
      const response = await fetch('http://localhost:9091/resetpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });
      if (response.ok) {
        // Password reset successful
        // Redirect user to login page or display success message
      } else {
        // Password reset failed
        // Handle error case
      }
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className='container-fluid col-sm-9'>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default PasswordResetPage;
