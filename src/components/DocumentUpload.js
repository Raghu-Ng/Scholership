import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

function DocumentUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Implement the file upload logic here
    alert(`File uploaded: ${selectedFile.name}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Upload Documents
      </Typography>
      <TextField
        type="file"
        onChange={handleFileChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!selectedFile}
      >
        Upload
      </Button>
    </Box>
  );
}

export default DocumentUpload;
