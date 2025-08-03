import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const GeyaSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const contentRef = useRef(null);
  const images = [
    '/src/assets/images/slider2.jpg',
    '/src/assets/images/slider1.jpg',
    '/src/assets/images/slider3.jpg'
  ];
  const slides = [
    {
      title: "Welcome to our Platform",
      subtitle: "Discover Our Collection",
      description: "High quality solar for your home and office",
      buttonText: "Shop Now"
    },
    {
      title: "Summer Sale",
      subtitle: "Up to 50% Off",
      description: "Limited time offer on selected items",
      buttonText: "View Deals"
    },
    {
      title: "New Arrivals",
      subtitle: "Fresh From Designers",
      description: "Latest trends in home pannels",
      buttonText: "Explore"
    }
  ];

  // Auto-play and animation setup
  useGSAP(() => {
    // Initial animation
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Slide change animation
    gsap.to(sliderRef.current.children[currentSlide], {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out"
    });
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    gsap.to(sliderRef.current.children[currentSlide], {
      opacity: 0,
      scale: 1.1,
      duration: 1.5,
      ease: "power3.out",
      onComplete: () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    });
  };

  const prevSlide = () => {
    gsap.to(sliderRef.current.children[currentSlide], {
      opacity: 0,
      scale: 1.1,
      duration: 1.5,
      ease: "power3.out",
      onComplete: () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    });
  };

  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      height: '90vh',
      overflow: 'hidden'
    }}>
      {/* Background Slides */}
      <Box ref={sliderRef}>
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${img})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              opacity: index === 0 ? 1 : 0,
              transform: index === 0 ? 'scale(1)' : 'scale(1.1)',
              transition: 'opacity 1.5s ease, transform 1.5s ease',
              willChange: 'opacity, transform'
            }}
          />
        ))}
      </Box>

      {/* Overlay Content */}
      <Box
        ref={contentRef}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: 'white',
          padding: { xs: '0 20px', md: '0 100px' },
          backgroundColor: 'rgba(0,0,0,0.2)',
          zIndex: 2
        }}
      >
        <Typography variant="h5" sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          fontWeight: 500,
          letterSpacing: '3px',
          marginBottom: '10px',
          textTransform: 'uppercase',
          color:'black'
        }}>
          {slides[currentSlide].subtitle}
        </Typography>

        <Typography variant="h1" sx={{
          fontSize: { xs: '2.5rem', md: '4.5rem' },
          fontWeight: 700,
          marginBottom: '20px',
          lineHeight: 1.2,
          
        }}>
          {slides[currentSlide].title}
        </Typography>

        <Typography variant="body1" sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          maxWidth: '600px',
          marginBottom: '30px'
        }}>
          {slides[currentSlide].description}
        </Typography>

        <Button variant="contained" sx={{
          backgroundColor: '#267030ff',
          color: 'white',
          padding: '12px 30px',
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: 0,
          '&:hover': {
            backgroundColor: '#b8915a'
          }
        }}>
          {slides[currentSlide].buttonText}
        </Button>
      </Box>

      {/* Navigation Arrows */}
      <IconButton onClick={prevSlide} sx={{
        position: 'absolute',
        left: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.2)',
        zIndex: 3,
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.4)'
        }
      }}>
        <ArrowLeft fontSize="large" />
      </IconButton>

      <IconButton onClick={nextSlide} sx={{
        position: 'absolute',
        right: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.2)',
        zIndex: 3,
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.4)'
        }
      }}>
        <ArrowRight fontSize="large" />
      </IconButton>

      {/* Pagination Dots */}
      <Box sx={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 3
      }}>
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              gsap.to(sliderRef.current.children[currentSlide], {
                opacity: 0,
                scale: 1.1,
                duration: 1.5,
                ease: "power3.out",
                onComplete: () => {
                  setCurrentSlide(index);
                }
              });
            }}
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: index === currentSlide ? '#c8a165' : 'white',
              opacity: index === currentSlide ? 1 : 0.5,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GeyaSlider;