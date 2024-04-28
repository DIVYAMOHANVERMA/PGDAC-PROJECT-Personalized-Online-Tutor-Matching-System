import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Adminlogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = { username, password };
    try {
      const response = await fetch('http://localhost:9091/loginAdmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Admin logged in successfully');
        localStorage.setItem('adminUsername', username);
        navigate("/admindashboard");
      } else {
        console.error('Login failed');
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Error during login. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Admin Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                {error && <div className="alert alert-danger" >{error}</div>}
                <div className="Mohan mt-4">
                <button type="submit" className="btn btn-primary btn-block ">Sign In</button>
                <Link to="/adminregister" className="btn btn-secondary btn-block " style={{marginLeft:'68%' }}>Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
