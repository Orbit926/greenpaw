import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

const HeroSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: { xs: '85vh', md: '90vh' },
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                overflow: 'hidden'
            }}
        >
            {/* Decorative circles */}
            <Box
                sx={{
                    position: 'absolute',
                    width: { xs: '300px', md: '600px' },
                    height: { xs: '300px', md: '600px' },
                    borderRadius: '50%',
                    background: 'rgba(46, 125, 50, 0.05)',
                    top: '-150px',
                    right: '-150px',
                    zIndex: 0
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: { xs: '200px', md: '400px' },
                    height: { xs: '200px', md: '400px' },
                    borderRadius: '50%',
                    background: 'rgba(102, 187, 106, 0.05)',
                    bottom: '-100px',
                    left: '-100px',
                    zIndex: 0
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: { xs: 4, md: 8 }
                    }}
                >
                    {/* Text Content */}
                    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'primary.main',
                                    fontWeight: 600,
                                    letterSpacing: 2,
                                    fontSize: { xs: '0.875rem', md: '1rem' }
                                }}
                            >
                                Solución Ecológica
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                                    lineHeight: 1.1,
                                    mb: 3,
                                    color: 'primary.dark',
                                    mt: 1
                                }}
                            >
                                Naturaleza en
                                <Box component="span" sx={{ display: 'block', color: 'success.main' }}>
                                    Tu Hogar
                                </Box>
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 4,
                                    color: 'text.secondary',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    maxWidth: '600px',
                                    mx: { xs: 'auto', md: 0 },
                                    fontSize: { xs: '1rem', md: '1.25rem' }
                                }}
                            >
                                Módulos de pasto natural eco-friendly para el bienestar de tu mascota.
                                Fabricados con plásticos reciclados, entregando confort y sostenibilidad.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    justifyContent: { xs: 'center', md: 'flex-start' }
                                }}
                            >
                                <Button
                                    component={Link}
                                    to="/products"
                                    variant="contained"
                                    size="large"
                                    endIcon={<ArrowForward />}
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        borderRadius: 3,
                                        boxShadow: '0 8px 24px rgba(46, 125, 50, 0.25)',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 12px 32px rgba(46, 125, 50, 0.35)'
                                        },
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    Explorar Productos
                                </Button>
                                <Button
                                    component={Link}
                                    to="#mantenimiento"
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        borderRadius: 3,
                                        borderWidth: 2,
                                        '&:hover': {
                                            borderWidth: 2,
                                            transform: 'translateY(-2px)'
                                        },
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    Mantenimiento
                                </Button>
                            </Box>
                        </motion.div>
                    </Box>

                    {/* Image */}
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            style={{ width: '100%', maxWidth: '600px' }}
                        >
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800"
                                alt="Greenpaw - Módulo ecológico"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 4,
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                                    objectFit: 'cover'
                                }}
                            />
                        </motion.div>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
