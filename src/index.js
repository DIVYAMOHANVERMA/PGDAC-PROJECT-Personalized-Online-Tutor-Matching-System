import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import StudentPage from './components/StudentPage';

import  App  from './App';
// import App from './components/App';
// import TeacherOnboard from './components/TeacherOnboard'
// import StudentRegistrationForm from './components/SR';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
