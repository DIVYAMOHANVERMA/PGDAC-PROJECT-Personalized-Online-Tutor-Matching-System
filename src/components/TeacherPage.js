import React, { useState } from 'react';
import './TeacherPage.css';
import { Link, useNavigate } from 'react-router-dom';




const TeacherPage = () => {
  const Navigate=useNavigate();
const[email ,setEmail] = useState(''); 
const [password, setPassword] = useState(''); 

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = { email, password};
    try {
      const response = await fetch('http://localhost:9091/loginTeacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('User registered successfully');
        Navigate("/TeacherOnboard")
      
      } else {
        console.error('Registration failed');
       
      }
    } catch (error) {
      console.error('Error during registration:', error);
      
    }
  };

    return (
      <div className='nav'>
        <h1 className='head'>Teacher Login</h1>
        <div id='form'>
          <form onSubmit={handleLogin}>
          <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value= {password}
          onChange = {(e)=>{setPassword(e.target.value)}}

          required
        />
      </div>
      <button type="submit" className='signinBtn'>Sign In</button>
      
      
          </form>
          <Link to="/Teacherregister"><button className='signupBtn'>Sign Up</button></Link>
          
        </div>
      </div>
    );
}

export default TeacherPage;


