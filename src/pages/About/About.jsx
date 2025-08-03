import React from 'react';
import { Box, Typography, Grid, Avatar, Button ,IconButton} from '@mui/material';
import energyImg from '../../assets/images/aboutpic.jpg'; // ✅ update this path if needed
import janeImg from '../../assets/images/ceo.jpg';
import johnImg from '../../assets/images/manager.jpg';
import aliceImg from '../../assets/images/mech.jpeg';
import Servicescomp from '../../components/services/Servicescomp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const team = [
    { name: 'Jane Doe', role: 'Founder & CEO', img: janeImg },
    { name: 'John Smith', role: 'Chief Engineer', img: johnImg },
    { name: 'Alice Johnson', role: 'Sustainability Lead', img: aliceImg },
];

const About = () => (
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3, py: 6 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: '600',
                    mb: 2,
                    fontFamily: 'inherit',
                    textAlign: 'center',
                    display: 'inline-block',
                }}
            >
                About
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
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, mt: 5 }}>
                Geya Energy House
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
                Leading provider of sustainable renewable energy solutions
                <br /><br />
                Mon-Fri: 9 AM – 22 PM
                <br />
                Saturday: 9 AM – 20 PM
            </Typography>
            <Box
                component="img"
                src={energyImg}
                alt="Renewable Energy"
                sx={{ width: '90%', borderRadius: 2, boxShadow: 3, height: 700, objectFit: 'cover' }}
            />
        </Box>

        {/* Mission Section */}
        <Box sx={{ mb: 8, alignItems: 'center', textAlign: 'center', borderBottom: '1px solid #ccc', pb: 15, }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Our Mission & Story
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Geya is committed to delivering credible and sustainable solar, wind and electrification solutions.
                Founded with a vision for independent clean energy access, we blend innovation with practicality
                to deliver scalable results. Our values are rooted in transparency, efficiency, and responsibility.
            </Typography>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8, borderBottom: '1px solid #ccc', pb: 15, }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, textAlign: 'center', mt: 20 }}>
                Meet the Team
            </Typography>
            <Grid container spacing={22} sx={{ padding: 20 }}>
                {team.map((person) => (
                    <Grid key={person.name} item xs={12} sm={6} md={4}>
                        <Box sx={{
                            textAlign: 'center', transition: 'transform 0.2s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}>
                            <Avatar
                                src={person.img}
                                alt={person.name}
                                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                            />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                {person.name}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                {person.role}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>


        <Servicescomp />
        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Want to learn more?
            </Typography>
            <Button variant="contained" color="success" size="large">
                Contact Us
            </Button>
        </Box>
    </Box>
);

export default About;
