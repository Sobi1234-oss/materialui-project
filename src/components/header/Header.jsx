import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Button,
    Badge,
    InputBase,
    Menu,
    MenuItem,
    Paper
} from '@mui/material';
import { ShoppingCart, Search, ExpandMore } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; // Make sure this path is correct

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Services',
            submenu: [
                { label: 'All', path: '/services' },
                { label: 'Solar Energy', path: '/services/solar-energy' },
                { label: 'Wind Power', path: '/services/wind-power' },
                { label: 'Electrician', path: '/services/electrician' }
            ]
        },
        { name: 'Contact', path: '/contact' }
    ];

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            color="default"
            elevation={0}
            sx={{
                height: 120,
                backgroundColor: '#ffffff',
                paddingX: 4,
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 1000
            }}
        >
            <Toolbar
                sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                {/* Logo + Nav Links */}
                <Box display="flex" alignItems="center" gap={6}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            height: 60,
                            objectFit: 'contain',
                            cursor: 'pointer'
                        }}
                        onClick={() => navigate('/')}
                    />

                    <Box display="flex" gap={4}>
                        {navItems.map((item) => (
                            <Box key={item.name} position="relative">
                                <Button
                                    onClick={(e) =>
                                        item.submenu
                                            ? handleOpenMenu(e)
                                            : navigate(item.path)
                                    }
                                    sx={{
                                        color: location.pathname === item.path ? '#35c115' : '#333',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s ease-in-out',
                                        transform: location.pathname === item.path ? 'scale(1.1)' : 'none',
                                        '&:hover': {
                                            color: '#35c115',
                                            backgroundColor: '#f5f5f5',
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                >
                                    {item.name}
                                    {item.submenu && <ExpandMore sx={{ fontSize: '1rem', ml: 0.5 }} />}
                                </Button>

                                {item.submenu && (
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseMenu}
                                        PaperProps={{
                                            style: {
                                                marginTop: '8px',
                                                boxShadow: '0px 4px 20px rgba(0,0,0,0.1)'
                                            }
                                        }}
                                    >
                                        {item.submenu.map((subItem) => (
                                            <MenuItem
                                                key={subItem.label}
                                                onClick={() => {
                                                    navigate(subItem.path);
                                                    handleCloseMenu();
                                                }}
                                                sx={{
                                                    minWidth: 200,
                                                    '&:hover': {
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#35c115'
                                                    }
                                                }}
                                            >
                                                {subItem.label}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Right Side: Search, Cart, Sign In */}
                <Box display="flex" alignItems="center" gap={3}>
                    {/* Search Bar */}
                    {searchOpen ? (
                        <Paper
                            component="form"
                            sx={{
                                p: '2px 16px',
                                display: 'flex',
                                alignItems: 'center',
                                width: 250,
                                boxShadow: 'none',
                                border: '1px solid #e0e0e0',
                                borderRadius: '50px'
                            }}
                        >
                            <InputBase
                                autoFocus
                                fullWidth
                                placeholder="Search..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                sx={{ ml: 1, flex: 1 }}
                            />
                            <IconButton
                                type="button"
                                onClick={() => setSearchOpen(false)}
                                sx={{ p: '10px', color: '#666' }}
                            >
                                <Search />
                            </IconButton>
                        </Paper>
                    ) : (
                        <IconButton
                            onClick={() => setSearchOpen(true)}
                            sx={{
                                color: '#333',
                                '&:hover': {
                                    backgroundColor: 'rgba(53, 193, 21, 0.1)',
                                    color: '#35c115'
                                }
                            }}
                        >
                            <Search />
                        </IconButton>
                    )}

                    {/* Cart Icon */}
                    <IconButton
                        sx={{
                            color: '#333',
                            '&:hover': {
                                backgroundColor: 'rgba(53, 193, 21, 0.1)',
                                color: '#35c115'
                            }
                        }}
                    >
                        <Badge badgeContent={3} color="error">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    {/* Sign In */}
                    <Button
                        variant="contained"
                        disableElevation
                        sx={{
                            backgroundColor: '#35c115',
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            px: 3,
                            py: 1,
                            borderRadius: '50px',
                            '&:hover': {
                                backgroundColor: '#2da512'
                            }
                        }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
