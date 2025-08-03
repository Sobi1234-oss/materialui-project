import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const services = [
  {
    title: 'Solar Energy',
    image: 'src/assets/images/solar.jpg'
  },
  {
    title: 'Wind Turbine',
    image: 'src/assets/images/wind.jpg'
  },
  {
    title: 'Electrification',
    image: 'src/assets/images/electric.jpg'
  },
  {
    title: 'Engineering',
    image: 'src/assets/images/eng.jpg'
  }
];

const Servicescomp = () => {
  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', py: 8, px: 2, mt: 20 }}>
      {/* Top Text */}
      <Typography
        variant="h6"
        sx={{
          color: '#35c115',
          fontWeight: 600,
          textAlign: 'center',
          mb: 1,
          textTransform: 'uppercase',
          letterSpacing: 1
        }}
      >
        What We Offer
      </Typography>

      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          mb: 5
        }}
      >
        Leading Solar Panels in Industries
      </Typography>

      {/* Service Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', },
          gap: 7
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              height: 450,
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '0px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                borderTop: '1px solid black'
              },
              '&:hover .overlay': {
                opacity: 1,
                transform: 'translateY(0)'
              },
              mt: 10
            }}
          >
            {/* Overlay Title */}
            <Box
              className="overlay"
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                background: 'rgba(205, 197, 197, 0.6)',
                color: '#fff',
                textAlign: 'center',
                py: 1.5,
                fontWeight: 600,
                fontSize: '1.1rem',
                transition: '0.3s ease',
                opacity: 1,
                transform: 'translateY(0)'
              }}
            >
              {service.title}
            </Box>
          </Box>
        ))}
      </Box>
      {/* About Us Button */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#35c115',
            transition: 'all 0.3s ease',
            fontSize:14,
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundColor: '#35c115', // keep the same color on hover
            }
          }}
        >
          About Us
        </Button>
      </Box>
    </Box>
  );
};

export default Servicescomp;
