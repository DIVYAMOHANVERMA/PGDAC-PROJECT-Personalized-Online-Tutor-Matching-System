import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './StudentOnboard.css';

const StudentOnboard = () => {
  return (
    <>
      <div id="container">
        <h1 className="text-center">Student Dashboard Page</h1>
        
        
        <div className='navbar-div'>
          <div className='buttonleft'>
            <Link to="/"><button className='homeBtn'>Home</button></Link>
            <Link to="/overview"><button className='overviewBtn'>Overview</button></Link>
            <Link to="/allcourses"><button className='coursesBtn'>Courses</button></Link>
            <Link to="/studentprofile"><button className='overviewBtn'>Student Profile</button></Link>
            <Link to="/studentpage"><button className='signoutBtn'>Sign Out</button></Link>
          </div>
          <div className='buttonright'>
            <button className='overviewBtn'>Live Videos</button>
            <button className='overviewBtn'>Recorded Lectures </button>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default StudentOnboard;

