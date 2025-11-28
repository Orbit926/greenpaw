import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box, Container, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon, Close } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { cartCount, openCart } = useCart();
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleNavigation = (path) => {
        setDrawerOpen(false);
        navigate(path);
    };

    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid rgba(0,0,0,0.05)', backdropFilter: 'blur(20px)', backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img
                            src="/img/logos/logo_color.PNG"
                            alt="Greenpaw"
                            style={{ height: '50px' }}
                        />
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                        <Button component={Link} to="/" color="inherit" sx={{ fontSize: '1rem' }}>Inicio</Button>
                        <Button component={Link} to="/products" color="inherit" sx={{ fontSize: '1rem' }}>Productos</Button>
                    </Box>

                    {/* Actions */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton onClick={openCart} color="primary">
                            <Badge badgeContent={cartCount} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        <IconButton
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            onClick={toggleDrawer(true)}
                            color="primary"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 280 }}
                    role="presentation"
                >
                    {/* Header */}
                    <Box sx={{
                        p: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid rgba(0,0,0,0.1)'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src="/img/logos/logo_color.PNG"
                                alt="Greenpaw"
                                style={{ height: '40px' }}
                            />
                        </Box>
                        <IconButton onClick={toggleDrawer(false)} size="small">
                            <Close />
                        </IconButton>
                    </Box>

                    {/* Navigation Links */}
                    <List sx={{ pt: 2 }}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('/')}>
                                <ListItemText
                                    primary="Inicio"
                                    primaryTypographyProps={{
                                        fontWeight: 500,
                                        fontSize: '1.1rem'
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleNavigation('/products')}>
                                <ListItemText
                                    primary="Productos"
                                    primaryTypographyProps={{
                                        fontWeight: 500,
                                        fontSize: '1.1rem'
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Divider sx={{ my: 2 }} />

                    {/* Footer */}
                    <Box sx={{ p: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                            Greenpaw - Solución Ecológica
                        </Typography>
                    </Box>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
