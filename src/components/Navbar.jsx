import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSelect }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-3">
          <form className="d-flex col-md-6" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <div onClick={() => onSelect('Overview')}>Overview</div>
              </li>
              <li className="nav-item">
                <div onClick={() => onSelect('Courses')}>Courses</div>
              </li>
              <li className="nav-item">
                <div onClick={() => onSelect('Teacher List')}>TeacherList</div>
              </li>
              <li className="nav-item">
                <div onClick={() => onSelect('StudentList')}>StudentList</div>
              </li>
              <li className="nav-item">
                 <div onClick={() => onSelect('StudentBookingSession')}>StudentBookingSession</div>
              </li>
              <li className="nav-item">
              <div onClick={() => onSelect('StudentMessages')}>StudentMessages</div>
              </li>
              <li className="nav-item">
              <div onClick={() => onSelect('Live Videos')}>Live Videos</div>
              </li>
              <li className="nav-item">
              <div onClick={() => onSelect('Recorded Lectures')}>Recorded Lectures</div>  
               
              </li>
            </ul>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Account
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/studentprofile" className='dropdown-item'>View Profile</Link></li>
                <li><Link to="/studentpage" className='dropdown-item'>Sign Out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
