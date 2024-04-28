import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentBookingSession = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [error,setError] = useState([null]);
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('http://localhost:9091/teachers');
      if (response.ok) {
        const data = await response.json();
        setTeachers(data);
      } else {
        setError('Failed to fetch teachers');
      }
    } catch (error) {
      setError('Error fetching teachers');
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleTeacherChange = (value, name) => {
    setSelectedTeacher(value);
    console.log(`Selected teacher: ${name}`);
  };

  const handleBooking = () => {
    // Implement booking logic here
    console.log("Booking session for", selectedTeacher, "on", selectedDate, "at", selectedTime);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Book a Tutoring Session</h2>
      {error && (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
      )}
      <div className="mb-3">
        <label htmlFor="teacherSelect" className="form-label">Select Teacher:</label>
        <select
          id="teacherSelect"
          className="form-select"
          value={selectedTeacher}  B
          onChange={(e) => handleTeacherChange(e.target.value, e.target.selectedOptions[0].text)}
        >
          <option value="">Select Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher.id} value={teacher.name}>{teacher.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="dateInput" className="form-label">Select Date:</label>
        <input
          type="date"
          id="dateInput"
          className="form-control"
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="timeInput" className="form-label">Select Time:</label>
        <input
          type="time"
          id="timeInput"
          className="form-control"
          onChange={(e) => handleTimeChange(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleBooking}>Book Session</button>
    </div>
  );
};

export default StudentBookingSession;
