
// function Home() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <h2>Welcome to the PMSSS Scholarship Portal</h2>
//         <p>
//           This portal helps you manage your scholarship documents, check their status, and
//           receive updates.
//         </p>
//       </main>
//       <Footer />
//     </div>
//   );
// }


import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Welcome to the PMSSS Scholarship Portal</Typography>
            <Typography variant="body1">
              Manage your scholarship documents, check their status, and receive updates.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src="scholarship.jpg" alt="Scholarship" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
