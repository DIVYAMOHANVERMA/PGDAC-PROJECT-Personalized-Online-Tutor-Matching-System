import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentPage from './components/StudentPage';
import StudentRegister from './components/StudentRegister';
import TeacherPage from './components/TeacherPage';
import TeacherRegister from './components/TeacherRegister';
import StudentOnboard from './components/StudentOnboard';
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
import PaymentPage from'./components/PaymentPage';
import PaymentRecipt from './components/PaymentRecipt';
import AddToCart from './AddToCart';
import StudentProfile from './components/StudentProfile';
import TeacherProfile from './components/TeacherProfile';
import TeacherBookingSession from './components/TeacherBookingSession';
import StudentList from './components/StudentList';
import StudentBookingSession from './components/StudentBookingSession';
import Adminlogin from './components/Adminlogin'
import AdminPage from './components/AdminPage';
import TeacherList from './components/TeacherList';
import UploadLectures from './components/UploadLectures';
import Note from './components/Note';
import StudentMessages from './components/StudentMessages';
import TeacherMessages from './components/TeacherMessages';
import HomePageDashboard from './components/HomePage';
import ForgotPasswordForm from './components/ForgotPassword';
function App () {
  return (
         <>
            
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<HomePageDashboard/>}
                    />

                    <Route
                        exact
                        path="/forgotpassword"
                        element={<ForgotPasswordForm/>}
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
                        path="/teacheronboard"
                        element={<TeacherOnboard/>}
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
                        path='/TeacherMessages'
                        element={<TeacherMessages/>}
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
                        path="/PaymentPage"
                        element={<PaymentPage/>}
                    />
                    <Route
                        path="/PaymentRecipt"
                        element={<PaymentRecipt/>}
                    />
                    <Route
                        path="/AddToCart"
                        element={<AddToCart/>}
                    />
                    <Route
                        path="/studentprofile"
                        element={<StudentProfile/>}
                    />
                    <Route 
                        path="/teacherprofile"
                        element={<TeacherProfile/>}
                    />  
                    <Route
                        path="/TeacherBookingSession"
                        element={<TeacherBookingSession/>}
                    />
                    <Route
                        path="/StudentBookingSession"  
                        element={<StudentBookingSession/>}
                    />    
                    <Route 
                        path="/studentlist"
                        element={<StudentList/>}
                    /> 
                     <Route path="/Adminlogin"
                         element={<Adminlogin/>} 
                    />
                    
                    <Route path="/admindashboard"
                         element={<AdminPage/>}
                    />     
                     <Route path="/teacherlist"
                          element={<TeacherList/>}
                     /> 
                     <Route path="/uploadlectures"   
                          element={<UploadLectures/>}
                      />   
                      <Route path="/StudentMessages" 
                          element={<StudentMessages/>}
                       />   
                      <Route path="/notes"
                          element={<Note/>}
                       />   
                </Routes>
            
        </>
  );
}

export default App;
