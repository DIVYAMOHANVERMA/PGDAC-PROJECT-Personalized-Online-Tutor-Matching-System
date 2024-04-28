import React, { useState } from 'react';

const ForgotPasswordForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Send the reset password link request to the backend
      const response = await fetch('http://localhost:9091/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        // Reset link sent successfully
        // You may want to redirect the user to a confirmation page or display a success message
        console.log('Reset link sent successfully');
      } else {
        // Reset link sending failed
        // Extract error message from response and set error state
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error sending reset link:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container-fluid col-sm-9'>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        {/* Close the div for form-group here */}
        <button type="submit" className="btn btn-primary">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
