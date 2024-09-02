// import React from 'react';
// import { Typography, Box, CircularProgress } from '@mui/material';

// function DocumentStatus() {
//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h5" gutterBottom>
//         Check Document Status
//       </Typography>
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <CircularProgress />
//         <Typography variant="body1" sx={{ ml: 2 }}>
//           Document verification is in progress...
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default DocumentStatus;


import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';

function DocumentStatus() {
  const [status, setStatus] = useState('Document verification is in progress...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('Document verification completed! Payment processing...');
    }, 5000); // Simulate a delay of 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Check Document Status
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ ml: 2 }}>
          {status}
        </Typography>
      </Box>
    </Box>
  );
}

export default DocumentStatus;
