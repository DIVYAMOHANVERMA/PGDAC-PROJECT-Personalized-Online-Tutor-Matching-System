import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const StudentProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const studentEmail = localStorage.getItem('studentEmail');
        const response = await fetch(`http://localhost:9091/studentprofile?email=${studentEmail}`);
        const data = await response.json();
      
        setName(data.name);
        setEmail(data.email);
        setBirthday(data.birthday);
        setPhoneNumber(data.phoneNumber);
        setPassword(data.password);
      } catch (error) {
        console.error('Error fetching student profile:', error);
        setError('Error fetching profile. Please try again.');
      }
    };

    fetchStudentProfile();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch('http://localhost:9091/updatestudentprofile', {
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
      console.error('Error updating student profile:', error);
      setError('Error updating profile. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Student Profile</h1>
     
      <div className="registration-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} readOnly={!editMode} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} readOnly={!editMode} />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday:</label>
            <input type="date" className="form-control" id="birthday" name="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} readOnly={!editMode} />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} readOnly={!editMode} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} readOnly={!editMode} />
          </div>
          {editMode ? (
            <div className="form-group">
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save Profile</button>
            </div>
          ) : (
            <div className="form-group">
              <button type="button" className="btn btn-info" onClick={handleEdit}>Edit Profile</button>
              <Link to="/studentpage" className="btn btn-danger signout-btn" style={{marginLeft:'50%'}} >Sign Out</Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default StudentProfile;
