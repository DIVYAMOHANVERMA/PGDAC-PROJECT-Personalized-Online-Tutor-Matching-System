import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentPage from './components/StudentPage';
import StudentRegister from './components/StudentRegister';
import TeacherPage from './components/TeacherPage';
import TeacherRegister from './components/TeacherRegister';
import StudentOnboard from './components/StudentOnboard';
import StudentProfile from './components/studentprofile';
import TeacherProfile from './components/TeacherProfile';
import TeacherOnboard from './components/TeacherOnboard';
import Courses from './components/Courses';
import EnglishPage from './components/EnglishPage';
import Overview from './components/Overview';
import DemoVideos from './components/DemoVideos';
import SciencePage from './components/Science';
import MathsPage from './components/Maths';
import FundamentalComputerPage from './components/FundamentalComputerPage';
import ReasoningPage from './components/ReasoningPage';
import AptitudePage from './components/AptitudePage';
import PersonalityDevelopmentPage from './components/PersonalityDevelopmentPage';
import BusinessCommunication from './components/BusinessCommunication';
import Finance from './components/Finance';

function App () {
  return (
         <>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<HomePage />}
                    />

                    <Route
                        path="/studentpage"
                        element={<StudentPage />}
                    />
 
                    <Route
                        path="/studentregister"
                        element={<StudentRegister />}
                    />
                    <Route
                        path="/teacherpage"
                        element={<TeacherPage/>}
                    />
                     <Route
                        path="/teacherregister"
                        element={<TeacherRegister/>}
                    />
                     <Route
                        path="/studentonboard"
                        element={<StudentOnboard/>}
                    />
                    <Route
                        path="/studentprofile"
                       element={<StudentProfile />}
                     />

                     <Route
                        path="/teacheronboard"
                        element={<TeacherOnboard/>}
                    />
                      <Route
                        path="/teacherprofile"
                       element={<TeacherProfile />}
                     />
                     <Route
                        path="/allcourses"
                        element={<Courses/>}
                    />
                        <Route
                        path="/englishpage"
                        element={<EnglishPage/>}
                    />
                         <Route
                        path="/overview"
                        element={<Overview/>}
                    />
                       <Route
                        path="/demovideos"
                        element={<DemoVideos/>}
                    />
                    <Route
                        path="/sciencepage"
                        element={<SciencePage/>}
                    />
                    <Route
                        path="/mathspage"
                        element={<MathsPage/>}
                    />
                    <Route
                        path="/FundamentalComputerPage"
                        element={<FundamentalComputerPage/>}
                    />
                     <Route
                        path="/ReasoningPage"
                        element={<ReasoningPage/>}
                    />
                     <Route
                        path="/AptitudePage"
                        element={<AptitudePage/>}
                    />
                    <Route
                        path="/PersonalityDevelopmentPage"
                        element={<PersonalityDevelopmentPage/>}
                    />
                    <Route
                        path="/BusinessCommunication"
                        element={<BusinessCommunication/>}
                    />
                    <Route
                        path="/Finance"
                        element={<Finance/>}
                    />
                
                    <Route
                      path='/studentpage'
                      element={<signout/>}
                      />
                    
                </Routes>
            </Router>
        </>
  );
}

export default App;
