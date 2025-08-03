import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import solar1 from '../../assets/images/solarenergy.jpg';
import solar2 from '../../assets/images/mech.jpeg';
import solar3 from '../../assets/images/wind.jpg';

const SolarService = () => {
    return (
        <Box sx={{ maxWidth: '1200px', mx: 'auto', py: 8, px: 2 }}>
            {/* Title */}
            <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: 'revert', textAlign: 'center' }}>
                Solar Energy
            </Typography>

            {/* Hero Image */}
            <Box
                component="img"
                src={solar1}
                alt="Solar Energy"
                sx={{ width: '100%', height: 500, objectFit: 'contain', borderRadius: 2, mt: 6 }}
            />

            {/* Description Section */}
            <Box textAlign="center" mt={6} mb={4}>
                <Typography variant="body1" sx={{ color: '#555', maxWidth: 800, mx: 'auto' }}>
                    Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris
                    sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim
                    volutpat. Ut vel placerat eros, eu tincidunt velit.
                </Typography>

                <Typography variant="h6" sx={{ color: 'black', mt: 6 }}>
                    Sed ut perspiciatis unde omnis iste natus et
                </Typography>

                <Typography variant="body1" sx={{ color: '#555', mt: 2, maxWidth: 800, mx: 'auto' }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    <br /><br />
                    Aliquam laoreet sed neque ac vehicula. Cras congue eros nec quam laoreet, in viverra erat bibendum.
                </Typography>
            </Box>

            {/* Dual Cards Row */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 3,
                    mt: 4,
                }}
            >
                {/* Box 1 */}
                <Box sx={{ flex: 1, p: 2 }}>
                    <Box
                        component="img"
                        src={solar3}
                        alt="Residential Solar"
                        sx={{
                            width: '100%',
                            height: 250,
                            objectFit: 'cover',
                            borderRadius: 2,
                            mb: 2,
                        }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Residential Solar Systems
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                        Tailored installations to maximize your home's energy output and savings.
                    </Typography>
                </Box>

                {/* Box 2 */}
                <Box sx={{ flex: 1, p: 2 }}>
                    <Box
                        component="img"
                        src={solar2}
                        alt="Commercial Solar"
                        sx={{
                            width: '100%',
                            height: 250,
                            objectFit: 'cover',
                            borderRadius: 2,
                            mb: 2,
                        }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Commercial Solar Installations
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                        High-capacity solutions for businesses, campuses & industrial projects.
                    </Typography>
                </Box>
            </Box>

            {/* Lower Text */}
            <Box mt={10} textAlign="center">
                <Typography variant="h5" sx={{ color: 'black', mb: 2 }}>
                    Aliquam quis lobortis quam
                </Typography>

                <Typography variant="body2" sx={{ color: '#666', maxWidth: 800, mx: 'auto' }}>
                    Curabitur pellentesque odio magna, id malesuada arcu sodales ut. Sed sed quam ut ex bibendum
                    commodo id id magna. Aliquam sed ligula sed ante blandit volutpat. Ut bibendum, nisi et mattis
                    vulputate, odio arcu aliquet metus, nec dapibus risus risus quis lectus.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua.
                </Typography>
            </Box>

            {/* Call-To-Action Button */}
            <Box textAlign="center" mt={6}>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: '#35c115',
                        color: 'white',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: '50px',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#2da512',
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
    );
};

export default SolarService;
