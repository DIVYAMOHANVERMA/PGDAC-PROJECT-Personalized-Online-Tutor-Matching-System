import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentMessages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null); // Define error state

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
        setError('Failed to fetch teachers'); // Set error message
      }
    } catch (error) {
      setError('Error fetching teachers'); // Set error message
    }
  };

  useEffect(() => {
    fetch('/api/messages/student')
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  const handleSendMessage = () => {
    // Implement logic to send message
    console.log('Sending message:', newMessage, 'to', selectedTeacher);
    // Reset message input and selected teacher after sending
    setNewMessage('');
    setSelectedTeacher('');
  };

  const handleEditMessage = (messageId) => {
    // Implement logic to edit message with ID messageId
    console.log('Editing message with ID:', messageId);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Write Message To Your Teacher</h2>
      <div className="row">
        {/* Display messages */}
        {messages.map((message, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '18px', color: '#333' }}>From: {message.sender}</h5>
                <p className="card-text" style={{ fontSize: '16px', color: '#666' }}>{message.text}</p>
                <button className="btn btn-primary" onClick={() => handleEditMessage(message.id)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Write and send message */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="teacherSelect" className="form-label">Select Teacher:</label>
            <select
              id="teacherSelect"
              className="form-select"
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
            >
              <option value="">Select Teacher</option>
              {teachers && teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.name}>{teacher.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="messageInput" className="form-label">Write Message:</label>
            <textarea
              id="messageInput"
              className="form-control"
              rows="3"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleSendMessage}>Send Message</button>
          <button className="btn btn-primary" style={{ marginLeft: "50%" }} onClick={handleEditMessage}>Edit Message</button>
        </div>
      </div>
    </div>
  );
};

export default StudentMessages;
