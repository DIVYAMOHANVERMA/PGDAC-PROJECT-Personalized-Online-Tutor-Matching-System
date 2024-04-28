import React from 'react';
import { Link } from 'react-router-dom';

const NavbarH = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-3">
          <form className="d-flex col-md-6" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
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
                <Link to="/overview" className="nav-link">Overview</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCourses" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownCourses">
                  <li className="nav-item dropdown">
                    <div className="btn-group">
                      <a className="nav-link dropdown-toggle" id="navbarDropdownWorkingProfessionals" data-bs-toggle="dropdown" aria-expanded="false">
                        For Working Professionals &raquo;
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li><Link to="/courses/c/working-professional" className="dropdown-item">C</Link></li>
                        <li><Link to="/courses/cpp/working-professional" className="dropdown-item">C++</Link></li>
                        <li><Link to="/courses/java/working-professional" className="dropdown-item">Java</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCollegeStudents" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      For College Students
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/courses/btech/college-students" className="dropdown-item">B.Tech</Link></li>
                      <li><Link to="/courses/mba/college-students" className="dropdown-item">MBA</Link></li>
                      <li><Link to="/courses/ma/college-students" className="dropdown-item">MA</Link></li>
                      <li><Link to="/courses/bca/college-students" className="dropdown-item">BCA</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSchoolStudents" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      For School Students
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/courses/physics/school-students" className="dropdown-item">Physics</Link></li>
                      <li><Link to="/courses/chemistry/school-students" className="dropdown-item">Chemistry</Link></li>
                      <li><Link to="/courses/maths/school-students" className="dropdown-item">Maths</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/allcourses" className="dropdown-item">All Courses</Link></li>
                </ul>
              </li>
              {/* Add more navigation links here if needed */}
            </ul>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                My Account
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/studentpage" className='dropdown-item'>Student Login</Link></li>
                <li><Link to="/teacherpage" className='dropdown-item'>Teacher Login</Link></li>
                <li><Link to="/Adminlogin" className='dropdown-item'>Admin Login</Link></li>
                {/* Add more options here if needed */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarH;
