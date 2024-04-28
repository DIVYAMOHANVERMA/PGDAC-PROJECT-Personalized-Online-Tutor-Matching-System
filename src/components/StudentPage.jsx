import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


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

  // Function to handle forgot password form submission
  const handleForgotPassword = (email) => {
    // Implement the logic to handle forgot password
    console.log("Forgot password submitted for email:", email);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-center mb-4">Student Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
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
                    className="form-control"
                    required
                  />
                </div>
                <div className='d-flex justify-content-center mt-3 mb-2'>
                  <button type="submit" className="btn btn-primary w-25 fs-5" >
                    {notification.message ? (
                      <span className={`spinner-border spinner-border-sm mr-2  ${notification.type === 'success' ? 'text-success' : 'text-danger'}`} role="status" aria-hidden="true"></span>
                    ) : null}
                    Login 
                  </button>
                </div>
                <div className='d-flex justify-content-between'>
                  {/* Link to the forgot password page */}
                  <Link to="/forgotpassword" className='btn btn-link justify-center'>Forgot Password?</Link>
                  <Link to="/studentregister" className="btn btn-link">Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
