import React from 'react';
import { Box, Button } from '@mui/material';

const navLinks = ['Home', 'About', 'Services', 'Contact'];

const Navbar = () => {
  return (
    <Box display="flex" gap={2}>
      {navLinks.map((link) => (
        <Button
          key={link}
          color="inherit"
          sx={{
            position: 'relative',
            color: '#333',
            fontWeight: 500,
            fontSize: '1rem',
            textTransform: 'none',
            '&:hover::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: -4,
              width: '100%',
              height: '2px',
              backgroundColor: '#1976d2',
              transition: 'width 0.3s ease',
            },
            '&:hover': {
              color: '#1976d2',
              backgroundColor: 'transparent',
            },
          }}
        >
          {link}
        </Button>
      ))}
    </Box>
  );
};

export default Navbar;
