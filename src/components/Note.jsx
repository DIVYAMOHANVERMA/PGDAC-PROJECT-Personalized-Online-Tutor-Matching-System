import React, { useState } from 'react';
// import './Note.css'; // Assuming you have a CSS file for styling

const Note = () => {
  const [noteContent, setNoteContent] = useState('');

  const handleNoteChange = (e) => {
    setNoteContent(e.target.value);
  };

  const handleNoteSubmit = () => {
    // Create a FormData object to append the note content
    const formData = new FormData();
    formData.append('content', noteContent);

    // Make a POST request to the backend endpoint to save the note content
    fetch('http://localhost:9091/notes', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit note');
      }
      console.log('Note submitted successfully.');
      // You can handle success here, such as showing a success message
    })
    .catch(error => {
      console.error('Error submitting note:', error);
      // You can handle errors here, such as showing an error message
    });

    // Clear the note content after submission
    setNoteContent('');
  };

  return (
    <div className="note-container">
      <h2>Take Notes</h2>
      <textarea
        className="note-textarea"
        value={noteContent}
        onChange={handleNoteChange}
        placeholder="Write your note here..."
      />
      <button onClick={handleNoteSubmit} className="note-submit-btn">
        Submit Note
      </button>
    </div>
  );
};

export default Note;
