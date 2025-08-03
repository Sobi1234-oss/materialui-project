import React from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // STEP 1

// Replace these with actual image imports
import energyImg from '../../assets/images/cat1logo.png';
import globalImg from '../../assets/images/cat2logo.png';
import commercialImg from '../../assets/images/cat3logo.png';

const Categories = () => {
  const navigate = useNavigate(); // STEP 2

  const categories = [
    {
      image: energyImg,
      title: 'Energy Solutions',
      text: 'Solar energy is a great alternative for anyone who values independence.',
      path: '/services/solar-energy' // STEP 3
    },
    {
      image: globalImg,
      title: 'Global Expertise',
      text: 'Customized design of photovoltaic systems to offset electrical bill.',
      path: '/services/wind-power'
    },
    {
      image: commercialImg,
      title: 'Commercial Use',
      text: 'Solar power is affordable, accessible and prevalent as never before.',
      path: '/services/commercial-use'
    }
  ];

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '70px auto',
        padding: '0 20px',
        borderBottom: '1px solid #ccc',
        mt: 20,
        mb: 10
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: '100px',
          textAlign: 'center'
        }}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            onClick={() => navigate(category.path)} // STEP 4
            sx={{
              px: 3,
              py: 4,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-6px)'
              }
            }}
          >
            <Box
              component="img"
              src={category.image}
              alt={category.title}
              sx={{
                height: 80,
                margin: '0 auto 20px',
                objectFit: 'contain'
              }}
            />

            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              {category.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: '#555', mb: 2 }}
            >
              {category.text}
            </Typography>

            <ArrowForward sx={{ color: '#000', fontSize: '1.2rem' }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
