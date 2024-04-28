import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './TeacherRegister.css';

const TeacherRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (phoneError) {
      return; // Don't proceed with registration if there's a phone number error
    }
    const formData = { name, email, password, birthday, phoneNumber };
    console.log(formData);
    try {
      const response = await fetch('http://localhost:9091/registerTeacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Teacher registered successfully');
        navigate("/teacherpage");
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="teacher-wrapper">
      <div className="teacher-form-wrapper">
        <h2 className="teacher-h2">Teacher Registration</h2>
        <form onSubmit={handleRegistration}>
          <div className="teacher-input-group">
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="teacher-input-group">
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="teacher-input-group">
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label htmlFor="password">Password</label>
          </div>
          <div className="teacher-input-group">
            <input type="date" id="birthday" name="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
            <label htmlFor="birthday">DOB</label>
          </div>
          <div className="teacher-input-group">
            <input
              type="number"
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={(e) => {
                const inputPhone = e.target.value;
                // Check if the input contains only digits and if its length is within the valid range
                if (/^\d+$/.test(inputPhone) && inputPhone.length <= 10) {
                  setPhone(inputPhone);
                  setPhoneError(inputPhone.length < 10 ? 'Please enter a 10-digit phone number.' : '');
                } else {
                  setPhoneError('Please enter a valid 10-digit phone number containing only digits.');
                }
              }}
              required
            />
            <label htmlFor="phone">Phone Number</label>
            {phoneError && (
              <p className="teacher-error">{phoneError}</p>
            )}
          </div>
          <button type="submit" className="teacher-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default TeacherRegister;
