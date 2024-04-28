import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeacherPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    try {
      const response = await fetch('http://localhost:9091/loginTeacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('User logged in successfully');
        // Store email in local storage after successful login
        localStorage.setItem('teacherEmail', email);
        setNotification({ message: 'Login successful', type: 'success' });
        navigate("/teacheronboard");
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
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-center mb-4">Teacher Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control" // Apply Bootstrap form-control class
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
                    className="form-control" // Apply Bootstrap form-control class
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  {notification.message ? (
                    <span className={`spinner-border spinner-border-sm mr-2 ${notification.type === 'success' ? 'text-success' : 'text-danger'}`} role="status" aria-hidden="true"></span>
                  ) : null}
                  Sign In
                </button>
                <Link to="/teacherregister" className="btn btn-secondary btn-block mt-2" style={{ marginLeft: '60%' }}>Sign Up</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;
