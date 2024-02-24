import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const TeacherOnboard = () => {
  return (
    <>
        <div id="container">
    <h1 className="text-center">Teacher Dashboard Page</h1>
    <Link to="/teacherpage"><button className='signoutBtn'>Sign Out</button></Link>

<div className='navbar-div'>
<div className='buttonleft'>
<Link to="/"><button className='homeBtn'>Home</button></Link>
<Link to="/overview"><button className='overviewBtn'>Overview</button></Link>
<Link to="/allcourses"><button className='coursesBtn'>Courses</button></Link>
<Link to="/teacherprofile"><button className='overviewBtn'>Teacher Profile</button></Link>

<button className='overviewBtn'>Notes</button>

</div>
<div className='buttonright'>
<button className='overviewBtn'>Live Videos</button>
<button className='overviewBtn'>Upload Lectures </button>

</div>

</div>
</div>
<Footer/>
    </>

  );
}

export default TeacherOnboard;
