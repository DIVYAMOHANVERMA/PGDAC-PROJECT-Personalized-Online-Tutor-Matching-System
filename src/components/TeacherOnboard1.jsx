import React from 'react';
 import { Link } from 'react-router-dom';
 import Footer from './Footer';
//  import './TeacherOnboard.css';

const TeacherOnboard = () => {
   return (
     <>
         <div id="container">
     <h1 className="text-center">Teacher Dashboard Page</h1>
     
     <Link to="/teacherpage"> <h3 className='outbtn'>Sign Out</h3></Link>
 <div className='navbar-div'>
 
 <div className='buttonleft'>
 <Link to="/"><button className='homeBtn'>Home</button></Link>
 <Link to="/overview"><button className='overviewBtn'>Overview</button></Link>
 <Link to="/allcourses"><button className='coursesBtn'>Courses</button></Link>
 <Link to="/notes"><button className='overview'>Note</button></Link>
 <Link to="/studentlist"><button className='coursesBtn'>StudentList</button></Link>
 <Link to="/TeacherBookingSession"><button className='TeacherBook'>TeacherBookingSession</button></Link>
 <Link to="/TeacherMessages"><button className='TeacherMessage'>TeacherMessages</button></Link>

 </div>
 <div className='buttonright'>
<Link to="/teacherprofile"><h3 button className='proBtn'>View Profile</h3></Link>
 <a href="https://studio.youtube.com/channel/UCE7gvQSqowj5VaFRrSPYITA/livestreaming"><button className='overviewBtn'>Live Videos</button></a>
<Link to="/uploadlectures"> <button className='overviewBtn'>UploadLectures </button></Link>

 </div>

 </div>
 </div>
 <Footer/>
     </>

   );
 }

 export default TeacherOnboard;