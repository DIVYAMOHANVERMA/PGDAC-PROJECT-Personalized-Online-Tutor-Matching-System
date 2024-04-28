import React from 'react';
// import './HomePage.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function HomePage() {
    return (
      <>
        <div id="container">
          <h1 className="text-center">Welcome to the Personalized Online Tutor Matching System</h1>
        <div className='navbar-div'>
          <div className='buttonleft'>
          <button className='homeBtn'>Home</button>
          <Link to="/overview"><button className='overviewBtn'>Overview</button></Link>
          <Link to="/allcourses"><button className='coursesBtn'>Courses</button></Link>
          </div>
          <div className='buttonright'>
          <Link to="/studentpage"><button className='studentBtn'>Student Login</button></Link>
        <Link to="/teacherpage"><button className='teacherBtn'>Teacher Login</button></Link>
        <Link to="/adminpage"><button className='adminBtn'>AdminLogin</button></Link>
          </div>

        {/* <button>Demo Videos</button>
        <button>Updates</button> */}

      </div>
      <div className='body-container'>
        {/* <h2 className='aboutus'>About Us:</h2> */}
        {/* <h3>Welcome to our Online Tutor Management System! Our platform aims to bridge the gap between students and teachers, providing a seamless learning experience for all. Whether you're a student seeking knowledge or a teacher eager to share expertise, our platform offers a dynamic environment where learning thrives. With a focus on accessibility and collaboration, students can explore a vast library of educational videos created by dedicated teachers. Meanwhile, teachers have the opportunity to contribute their expertise by uploading engaging and informative content. Together, we strive to cultivate a community of lifelong learners, empowering individuals to achieve their educational goals. Join us on this journey of knowledge and discovery!</h3> */}
      </div>
      <div className='notices'>
        <div className='noticestitle'>
        Notices:-
        </div>
        <h3 className='marquee'><marquee>!!NEW UPDATE!! !!NEW UPDATE!! !!NEW UPDATE!! </marquee></h3>
        <h1> New Course is going to be launched next month on ROBOTICS...</h1>
      </div>
      <Footer/>
      </div>
      </>
      );
}

export default HomePage;

