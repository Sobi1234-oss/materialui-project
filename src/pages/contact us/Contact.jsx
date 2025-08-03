import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Paper,
 
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Contact = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3, py: 6 }}>
      {/* Title Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', fontFamily: 'serif', mb: 1 }}
        >
          Contact Us
          
        </Typography>
         <Box sx={{ mt: 1 }}>
                   <IconButton
                           sx={{
                             transition: 'transform 0.3s',
                             '&:hover': {
                               transform: 'scale(1.3)',
                               color: 'primary.main',
                             },
                           }}
                         >
                           <KeyboardArrowDownIcon fontSize="large" />
                         </IconButton>
                </Box>
        <Typography sx={{ color: 'text.secondary' }}>
          We'd love to hear from you! Reach out to us using any of the methods below.
        </Typography>
      </Box>

      {/* Grid Section */}
      <Grid container spacing={6} >
        {/* Contact Details */}
        <Grid item xs={12} md={6} sx={{paddingTop:10,paddingLeft:45}}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Contact Information
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <IconButton color="primary">
                <EmailIcon />
              </IconButton>
              <Typography sx={{ ml: 1 }}>info@geyaenergy.com</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <IconButton color="primary">
                <PhoneIcon />
              </IconButton>
              <Typography sx={{ ml: 1 }}>+92 300 1234567</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <IconButton color="primary">
                <LocationOnIcon />
              </IconButton>
              <Typography sx={{ ml: 1 }}>
                123 Solar Street, Lahore, Pakistan
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6} >
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Send Us a Message
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundColor: '#2da20f',
                    },
                    fontSize:15
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
