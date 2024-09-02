import React, { useState } from 'react';
import { Button, Snackbar, TextField, Box, Typography } from '@mui/material';

function DocumentUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [open, setOpen] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Simulate file upload and show notification
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="File uploaded successfully"
      />
    </Box>
  );
}

export default DocumentUpload;
