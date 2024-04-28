import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeacherProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherProfile = async () => {
      try {
        const teacherEmail = localStorage.getItem('teacherEmail');
        const response = await fetch(`http://localhost:9091/teacherprofile?email=${teacherEmail}`);
        const data = await response.json();
      
        setName(data.name);
        setEmail(data.email);
        setBirthday(data.birthday);
        setPhoneNumber(data.phoneNumber);
      } catch (error) {
        console.error('Error fetching teacher profile:', error);
        setError('Error fetching profile. Please try again.');
      }
    };

    fetchTeacherProfile();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch('http://localhost:9091/updateteacherprofile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          birthday,
          phoneNumber,
          password,
        }),
      });
      const data = await response.json();
      console.log('Profile updated successfully:', data);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating teacher profile:', error);
      setError('Error updating profile. Please try again.');
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Teacher Profile</h1>
    
        <div className="registration-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} readOnly={!editMode} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} readOnly={!editMode} />
            </div>
            <div className="form-group">
              <label htmlFor="birthday">Birthday:</label>
              <input type="date" id="birthday" className="form-control" value={birthday} onChange={(e) => setBirthday(e.target.value)} readOnly={!editMode} />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} readOnly={!editMode} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} readOnly={!editMode} />
            </div>
            {editMode ? (
              <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save Profile</button>
              </div>
            ) : (
              <div className="form-group">
                <button type="button" className="btn btn-secondary" onClick={handleEdit}>Edit Profile</button>
                <Link to="/teacherpage" className="btn btn-danger" style={{marginLeft:'50%'}}>Sign Out</Link>
              </div>
            )}
          </form>
        </div>
      </div>
 
    </>
  );
}

export default TeacherProfile;
