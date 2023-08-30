import {  Typography, Container, Stack, Button,} from '@mui/material';
import { useState } from 'react';
import newURLServices from '../services/newURL';

const Instructions = () => {
  const [url, setURL] = useState("");
  
  const baseUrl = 'http://localhost:3001/w/';

  const handleButtonClick = async (event) => {
    const path = await newURLServices.getNewURL();
    setURL(baseUrl + path);
  }

  return (
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Request Warehouse
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Welcome to Request Warehouse. Click the button below to generate your new webhook endpoint URL. 
      </Typography>
      <Stack
        // sx={{ pt: 4 }}
        // direction="row"
        // spacing={2}
        justifyContent="center"
      >
        <Button variant="contained" onClick={handleButtonClick}>get a url</Button>
        {url ? <Typography variant="p">{url}</Typography> : <Typography></Typography>}
      </Stack>
    </Container>
  )
}

export default Instructions;