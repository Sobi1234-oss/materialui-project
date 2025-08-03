import React from 'react';
import { Box, Grid, Typography, TextField, Button, Checkbox, Link, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'; // used as Dribbble placeholder

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#111827', color: '#fff', p: 6 ,mt:10}}>
      <Grid container spacing={4}>
        {/* Left Section - Logo & Newsletter */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Geya
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Newsletter Signup
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <TextField
              placeholder="Enter Your Email Address"
              variant="standard"
              fullWidth
              InputProps={{ disableUnderline: true, sx: { color: '#fff' } }}
              sx={{ backgroundColor: 'transparent', borderBottom: '1px solid #444' }}
            />
            <Button sx={{ minWidth: 0, ml: 1 }}>
              <ArrowForwardIcon sx={{ color: '#fff' }} />
            </Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Checkbox sx={{ color: '#fff' }} />
            <Typography variant="caption">
              I agree to the <Link href="#" underline="hover">Privacy Policy</Link>.
            </Typography>
          </Box>
        </Grid>

        {/* Center - Tagline */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Quality solar panels for <br /> home and business
          </Typography>
        </Grid>

        {/* Right - Links */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Socials</Typography>
              <Box>
                <IconButton href="#" sx={{ color: '#fff', transition: '0.3s', '&:hover': { color: '#35c115', transform: 'scale(1.1)' } }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton href="#" sx={{ color: '#fff', transition: '0.3s', '&:hover': { color: '#35c115', transform: 'scale(1.1)' } }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton href="#" sx={{ color: '#fff', transition: '0.3s', '&:hover': { color: '#35c115', transform: 'scale(1.1)' } }}>
                  <SportsBasketballIcon /> {/* Dribbble */}
                </IconButton>
                <IconButton href="#" sx={{ color: '#fff', transition: '0.3s', '&:hover': { color: '#35c115', transform: 'scale(1.1)' } }}>
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Menu</Typography>
              {['Home', 'Services', 'About Us', 'Features', 'Contacts'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    display: 'block',
                    color: '#fff',
                    mb: 0.5,
                    transition: '0.3s',
                    '&:hover': { color: '#35c115', pl: 1 }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Grid>

            <Grid item xs={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Say Hello</Typography>
              <Link href="mailto:info@email.com" underline="none" sx={{ color: '#fff', '&:hover': { color: '#35c115' } }}>
                info@email.com
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="caption" sx={{ mt: 4, display: 'block', textAlign: 'center', color: '#9CA3AF' }}>
        Geya © 2025. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
