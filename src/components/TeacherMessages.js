import React, { useState, useEffect } from 'react';

const TeacherMessages = () => {
  const [messages, setMessages] = useState([]);

  // Fetch messages from the server when the component mounts
  useEffect(() => {
    // Example fetch request to retrieve messages
    fetch('/api/messages/teacher')
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      <div>
        {/* Display messages */}
        {messages.map((message, index) => (
          <div key={index}>
            <p>From: {message.sender}</p>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherMessages;
