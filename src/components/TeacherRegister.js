import React, { useState } from 'react';
import './TeacherRegister.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const TeacherRegister = () => {
  const Navigate=useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();
    const formData = { name, email, birthday, phone ,password};
    try {
      const response = await fetch('http://localhost:9091/registerTeacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('User registered successfully');
        Navigate("/TeacherPage")
        
      } else {
        console.error('Registration failed');
      
      }
    } catch (error) {
      console.error('Error during registration:', error);
     
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Student Registration</h2>
        <form onSubmit={handleRegistration}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>


          {error && <div className="error">{error}</div>}
          <button type="submit" className='registerBtn'>Register</button>
        </form>
      </div>
      <div className="image-container">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Student Image" />
      </div>
    </div>
  );
}

export default TeacherRegister;
