import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const ReviewSection = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                backgroundColor: '#111827',
                color: 'white',
                py: 8,
                px: 4,
                alignItems: 'center'
            }}
        >
            {/* Left Side - Testimonial */}
            <Box sx={{ textAlign: 'center', px: 2 }}>
                <Typography variant="body2" sx={{ color: '#9CA3AF', mb: 1, textTransform: 'uppercase', letterSpacing: 2 }}>
                    Testimonials
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    What They Say
                </Typography>

                <Typography sx={{ fontSize: '1rem', mb: 4, maxWidth: 500, mx: 'auto', color: '#D1D5DB' }}>
                    Everyone, from the first phone call to the last, has been a pleasure to deal with.
                    All of our requests were taken into account and incorporated into the project.
                    The installation process was astonishingly smooth. I would recommend you to all my friends.
                </Typography>

                <Avatar
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    sx={{ width: 56, height: 56, mx: 'auto', mb: 1 }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Linda Moore
                </Typography>
            </Box>

            {/* Right Side - YouTube Video */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, height: 600 }}>
                <Box
                    component="iframe"
                    width="100%"
                    height="550"
                    src="https://www.youtube.com/embed/5L7JN3nIyDc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sx={{ borderRadius: '8px', maxWidth: 700 }} // wider video too
                />
            </Box>
        </Box>
    );
};

export default ReviewSection;
