import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);  // Store the selected file
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!file) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      setResponse(result);  // Store the response data
      console.log(result);   // Log the response for debugging
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>

      {response && (
        <div>
          <h3>Server Response:</h3>
          <p>{response.message}</p>
          <p>Word Count: {response.word_count}</p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
