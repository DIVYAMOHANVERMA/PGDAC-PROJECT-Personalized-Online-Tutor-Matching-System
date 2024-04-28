import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './HomePage';
import Overview from './Overview';
import Courses from './Courses';
import TeacherList from './TeacherList';
import StudentList from './StudentList';
import StudentMessages from './StudentMessages';
import TeacherBookingSession from './TeacherBookingSession';
const StudentOnboard = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Overview": 
        return <Overview />;
      case "Courses":
        return <Courses/>;  
      case "Teacher List":
        return <TeacherList />;
      case "StudentList":
        return <StudentList/>;   
      case "StudentBookingSession":
        return <TeacherBookingSession />;  
      case "StudentMessages":
        return <StudentMessages/>;  
      case "Live Videos":
          // Embed the YouTube video using an iframe
          return (
            <div >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EOZQKh892nU"
                title="Live Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          );
       case "Recorded Lectures":  
       return (
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/shorts/Hvcw88S9W9U"
            title="Live Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      );

      default:
        return <Overview />;
    }
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">Student Dashboard Page</h1>
        <Navbar onSelect={handleOptionSelect} />
        <div className='sudhir ' style={{marginLeft:'350px',marginBottom:'100px',marginTop:'50px'}}>
        {renderContent()}
        </div>
        <div className="col-md-4">
          {/* <h3>Shopping Cart</h3> */}
          {/* Bootstrap shopping cart icon */}
          <a href="#">
            <i className="bi bi-cart-fill fa-2x"></i>
          </a>
        </div>

        <div className="d-flex justify-content-center">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ width: '40%', height: '20%' }} // Changed height to 50%
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://blog.imaginext.co.in/content/images/2023/06/beautiful-background-scenery-kerala-india_674045-3-transformed.jpeg"
                  className="d-block w-100"
                  alt="Slide 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="bottom-0 " style={{maxHeight: '20px'}}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default StudentOnboard;
