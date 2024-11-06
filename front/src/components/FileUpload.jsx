import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';

function FileUpload({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Subir archivo
      </Button>
    </div>
  );
}

export default FileUpload;
