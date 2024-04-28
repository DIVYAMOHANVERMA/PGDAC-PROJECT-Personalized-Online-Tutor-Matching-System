import React from 'react';

import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className='navbar-div'>
        <Link to="/"><button className='studentBtn'>Home</button></Link>
        <Link to="/overview"><button className='studentBtn'>Overview</button></Link>
        <Link to="/allcourses"><button className='studentBtn'>Course</button></Link>
        <Link to="/demovideos"><button className='studentBtn'>Demo Lectures</button></Link>
        <button>Live Session</button>
  
      </div>
    )
}

export default Header;