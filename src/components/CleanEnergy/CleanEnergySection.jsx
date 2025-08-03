import React from 'react';
import { Box, Typography, Grid, CircularProgress, Avatar } from '@mui/material';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

const CircleProgressItem = ({ icon, value, label }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 2, mb: 2 }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant="determinate"
                value={value}
                size={70}
                thickness={5}
                sx={{
                    color: '#35c115',
                }}
            />
            <Avatar
                sx={{
                    bgcolor: '#F3F4F6',
                    color: '#35c115',
                    width: 32,
                    height: 32,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {icon}
            </Avatar>
        </Box>
        <Typography sx={{ mt: 1, fontWeight: 'bold', color: '#111827' }}>{label}</Typography>
        <Typography variant="caption" sx={{ color: '#6B7280' }}>{value}%</Typography>
    </Box>
);

const CleanEnergySection = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                color: '#111827',
                py: 6,
                px: { xs: 3, md: 8 },
                textAlign: 'center',
            }}
        >
            {/* Image Centered */}
            <Box
                component="img"
                src="src/assets/images/new.jpg" // Make sure path is correct
                alt="Clean Energy"
                sx={{
                    width: { xs: '50%' },
                    height: 400,
                    mx: 'auto',
                    mb: 4,
                    borderRadius: 2,
                    boxShadow: 2,
                    transition: 'transform 0.3s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                }}
            />


            {/* Text Content */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    fontSize: { xs: '1.6rem', md: '2rem' },
                }}
            >
                Use Clean Energy to Save the Planet
            </Typography>

            <Typography
                sx={{
                    color: '#4B5563',
                    mb: 4,
                    fontSize: '1rem',
                    maxWidth: '600px',
                    mx: 'auto',
                }}
            >
                Solar energy is a great alternative for anyone who values independence and efficiency.
                Start using flexible, lightweight solar now.
            </Typography>

            {/* Progress Circles */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    mt: 2,
                }}
            >
                <CircleProgressItem icon={<SolarPowerIcon />} value={90} label="Efficiency" />
                <CircleProgressItem icon={<BatteryChargingFullIcon />} value={80} label="Storage" />
                <CircleProgressItem icon={<EmojiNatureIcon />} value={70} label="Eco-Friendly" />
            </Box>
        </Box>
    );
};

export default CleanEnergySection;
