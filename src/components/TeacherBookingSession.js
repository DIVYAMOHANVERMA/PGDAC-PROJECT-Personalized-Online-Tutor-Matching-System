import React, { useState } from 'react';

const TeacherBookingSession = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleAvailability = () => {
    // Implement availability setting logic here
    console.log("Setting availability for", selectedDate, "at", selectedTime);
  };

  return (
    <div>
      <h2>Set Availability</h2>
      <div>
        <label>Select Date:</label>
        <input type="date" onChange={(e) => handleDateChange(e.target.value)} />
      </div>
      <div>
        <label>Select Time:</label>
        <input type="time" onChange={(e) => handleTimeChange(e.target.value)} />
      </div>
      <button onClick={handleAvailability}>Set Availability</button>
    </div>
  );
};

export default TeacherBookingSession;
