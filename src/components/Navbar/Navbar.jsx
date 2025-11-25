import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box, Container } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon, Pets } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { cartCount, openCart } = useCart();
    const navigate = useNavigate();

    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid rgba(0,0,0,0.05)', backdropFilter: 'blur(20px)', backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'primary.main' }}>
                        <Pets sx={{ mr: 1, fontSize: 32 }} />
                        <Typography variant="h5" fontWeight="700" color="primary.dark">
                            Greenpaw
                        </Typography>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                        <Button component={Link} to="/" color="inherit" sx={{ fontSize: '1rem' }}>Inicio</Button>
                        <Button component={Link} to="/products" color="inherit" sx={{ fontSize: '1rem' }}>Productos</Button>
                        <Button component={Link} to="/products?cat=about" color="inherit" sx={{ fontSize: '1rem' }}>Nosotros</Button>
                    </Box>

                    {/* Actions */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton onClick={openCart} color="primary">
                            <Badge badgeContent={cartCount} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        <IconButton sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
