import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './TeacherProfile.css';

const TeacherProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch student profile data from backend API
    const fetchTeacherProfile = async () => {
      try {
        // Assuming you have stored the student's email in local storage
        const teacherEmail = localStorage.getItem('teacherEmail'); // Retrieving email from local storage
        const response = await fetch(`http://localhost:9091/teacherprofile?email=${teacherEmail}`); // Pass the student email in the URL as a query parameter
        const data = await response.json();
      
        setName(data.name);
        setEmail(data.email);
        setBirthday(data.birthday);
        setPhone(data.phone);
        // Exclude setting password if you don't want to show it
      } catch (error) {
        console.error('Error fetching teacher profile:', error);
      }
    };

    fetchTeacherProfile();
  }, []);


  return (
    <>
      <div id="container">
        <h1 className="text-center">Teacher Profile</h1>

        <div className='registration-form'>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="birthday">Birthday:</label>
              <input type="date" id="birthday" name="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} readOnly />
            </div>
            {/* Exclude password field if you don't want to show it */}
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} readOnly />
            </div>
            <div className="form-group">
              <Link to="/teacherprofile/update"><button className='updateBtn'>Update Profile</button></Link> {/* Add link to profile update page */}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TeacherProfile;
