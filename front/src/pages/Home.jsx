import React, { useState } from 'react';
import { Container, Box, Typography, Paper, Grid2 } from '@mui/material';
import FileUpload from '../components/FileUpload';
import FileList from '../components/FileList';
import Navbar from '../components/Navbar';

function Home() {

  const handleUpload = (file) => {
    
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />

      <Container sx={{ flex: 1, mt: 3 }}>
        <Grid2 container spacing={3}>
          <Grid2 item xs={12} md={6}>

            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Subir archivo
              </Typography>
              <FileUpload onUpload={handleUpload} />
            </Paper>
          </Grid2>
          <Grid2 item xs={12} md={6}>

            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Archivos
              </Typography>
              <FileList />
            </Paper>
          </Grid2>
        </Grid2>

      </Container>
    </Box>
  );
}

export default Home;
