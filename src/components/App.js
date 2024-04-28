import React from 'react';
// import '../App.css'; // Import your custom CSS file

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#" role="button" id="dropdownSubmenu" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">
                    Submenu
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownSubmenu">
                    <li><a className="dropdown-item" href="#">Submenu item 1</a></li>
                    <li><a className="dropdown-item" href="#">Submenu item 2</a></li>
                    <li><a className="dropdown-item" href="#">Submenu item 3</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;