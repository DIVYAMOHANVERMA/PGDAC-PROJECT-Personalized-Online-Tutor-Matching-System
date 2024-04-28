import React, { useState } from 'react';
// import './UploadLectures.css'; // Assuming you have a CSS file for styling

const UploadLectures = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!videoFile) {
      console.error('No video file selected.');
      return;
    }

    // Create a FormData object to append the file
    const formData = new FormData();
    formData.append('video', videoFile);

    // Make a POST request to your backend to upload the video file
    fetch('http://localhost:9091/uploadvideo', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to upload video');
      }
      return response.json();
    })
    .then(data => {
      console.log('Video uploaded successfully:', data);
      // Handle success, maybe show a success message to the user
    })
    .catch(error => {
      console.error('Error uploading video:', error);
      // Handle error, show an error message to the user
    });
  };

  return (
    <div className="upload-container">
      <h2>Upload Lectures</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="video-input"
      />
      <button onClick={handleUpload} className="upload-btn">
        Upload Video
      </button>
    </div>
  );
};

export default UploadLectures;
