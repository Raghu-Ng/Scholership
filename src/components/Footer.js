import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <footer>
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="inherit">
          &copy; 2024 PMSSS Scholarship. All rights reserved.
        </Typography>
      </Container>
    </Box>
    </footer>
  );
}

export default Footer;
