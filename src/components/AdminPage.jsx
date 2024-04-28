import React, { useState } from 'react';
import CourseList from './CourseList';
import CourseForm from './CourseForm'; // Import CourseForm component
import TeacherList from './TeacherList';
import StudentList from './StudentList';
import TeacherRegister from './TeacherRegister'; // Import TeacherRegister component
import StudentRegister from './StudentRegister'; // Import StudentRegister component
// import './AdminPage.css';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="admin-page">
      <h1>Welcome to Admin Panel</h1>
      <div className="tab-menu">
        <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>Courses</button>
        <button className={activeTab === 'teachers' ? 'active' : ''} onClick={() => setActiveTab('teachers')}>Teachers</button>
        <button className={activeTab === 'students' ? 'active' : ''} onClick={() => setActiveTab('students')}>Students</button>
        <button className={activeTab === 'teacher-register' ? 'active' : ''} onClick={() => setActiveTab('teacher-register')}>Teacher Register</button>
        <button className={activeTab === 'student-register' ? 'active' : ''} onClick={() => setActiveTab('student-register')}>Student Register</button>
        <button className={activeTab === 'course-form' ? 'active' : ''} onClick={() => setActiveTab('course-form')}>CourseForm</button>
        {/* Add more buttons for other tabs */}
      </div>
      <div className="tab-content">
        {activeTab === 'courses' && <CourseList />}
        {activeTab === 'teachers' && <TeacherList />}
        {activeTab === 'students' && <StudentList />}
        {activeTab === 'teacher-register' && <TeacherRegister />}
        {activeTab === 'student-register' && <StudentRegister />}
        {activeTab === 'course-form' && <CourseForm />} {/* Conditional rendering for CourseForm */}
        {/* Add more tab content based on activeTab state */}
      </div>
    </div>
  );
};

export default AdminPage;


