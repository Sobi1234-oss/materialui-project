import React from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Category } from '@mui/icons-material';
import Servicescomp from '../../components/services/Servicescomp';
import Categories from '../../components/Categories/Categories';
import {  Typography, Grid } from '@mui/material';
import img1 from '../../assets/images/wind.jpg'; // ✅ Replace with your image path
import img2 from '../../assets/images/solar.jpg'; // ✅ Replace with your image path

const Servicespage = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 8 ,mb:20}}>
      {/* Page Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'serif',
          mb: 2,
        }}
      >
        Our Services
      </Typography>

      {/* Down Arrow */}
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
      <Categories/>
       <Box
      sx={{
        width: '100%',
        height: 700,
        px: { xs: 3, md: 10 },
        py: 6,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* LEFT TEXT SIDE */}
      <Box sx={{ flex: 1 ,mt:10 }}>
        {/* Section 1 */}
        <Box mb={4}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'gray' }}>
            Featured Projects
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
            Produce Your Own Clean Energy
          </Typography>
          <Typography sx={{ mt: 1, color: 'text.secondary' }}>
            Our clients choose us and our products because they know we're the best.
            We appreciate your trust.
          </Typography>
        </Box>

        {/* Section 2 */}
        <Box mb={4}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'gray' }}>
            What We Do
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
            Top Quality Solar Panels for Business
          </Typography>
          <Typography sx={{ mt: 1, color: 'text.secondary' }}>
            We appreciate your trust. Our clients choose us and our products
            because they know we're the best.
          </Typography>
        </Box>

        {/* Section 3 */}
        <Box>
         
        </Box>
      </Box>

      {/* RIGHT IMAGES SIDE */}
      <Box sx={{ flex: 1, display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Box
          component="img"
          src={img1}
          alt="Project 1"
          sx={{
            width: '100%',
            maxWidth: 450,
            height: 300,
            borderRadius: 2,
            boxShadow: 3,
            objectFit: 'cover',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Box
          component="img"
          src={img2}
          alt="Project 2"
          sx={{
            width: '100%',
            maxWidth: 450,
            height: 300,
            borderRadius: 2,
            boxShadow: 3,
            objectFit: 'cover',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Box>
    </Box>
      <Servicescomp/>
    </Box>
  );
};

export default Servicespage;
