import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, CalendarMonth, Explore, ArrowForward } from '@mui/icons-material';

const CTASection = () => {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    top: '-200px',
                    right: '-150px'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    bottom: '-100px',
                    left: '-50px'
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: '2rem', md: '3.5rem' },
                                mb: 3,
                                lineHeight: 1.2
                            }}
                        >
                            Transforma la Vida de tu Mascota
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                maxWidth: '700px',
                                mx: 'auto',
                                opacity: 0.95,
                                lineHeight: 1.8,
                                fontWeight: 400,
                                fontSize: { xs: '1.1rem', md: '1.25rem' }
                            }}
                        >
                            Dale a tu perro el espacio natural que merece mientras cuidas el planeta.
                            Inicia hoy con Greenpaw.
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={3} sx={{ mb: 6 }}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Box
                                component={Link}
                                to="/products"
                                sx={{
                                    display: 'block',
                                    p: 4,
                                    borderRadius: 3,
                                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(10px)',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: 'white',
                                    transition: 'all 0.3s',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.25)',
                                        transform: 'translateY(-8px)'
                                    }
                                }}
                            >
                                <ShoppingCart sx={{ fontSize: 50, mb: 2 }} />
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    Comprar Ahora
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                    Explora nuestro catálogo completo
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Box
                                sx={{
                                    display: 'block',
                                    p: 4,
                                    borderRadius: 3,
                                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(10px)',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: 'white',
                                    transition: 'all 0.3s',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.25)',
                                        transform: 'translateY(-8px)'
                                    }
                                }}
                            >
                                <CalendarMonth sx={{ fontSize: 50, mb: 2 }} />
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    Agendar Servicio
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                    Mantenimiento profesional
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Box
                                component={Link}
                                to="/products"
                                sx={{
                                    display: 'block',
                                    p: 4,
                                    borderRadius: 3,
                                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(10px)',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: 'white',
                                    transition: 'all 0.3s',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.25)',
                                        transform: 'translateY(-8px)'
                                    }
                                }}
                            >
                                <Explore sx={{ fontSize: 50, mb: 2 }} />
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    Ver Catálogo
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                    Encuentra tu modelo ideal
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Main CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            component={Link}
                            to="/products"
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForward />}
                            sx={{
                                bgcolor: 'white',
                                color: 'primary.main',
                                px: 6,
                                py: 2,
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                borderRadius: 3,
                                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                                '&:hover': {
                                    bgcolor: 'grey.100',
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 16px 50px rgba(0, 0, 0, 0.4)'
                                },
                                transition: 'all 0.3s'
                            }}
                        >
                            Comenzar Ahora
                        </Button>
                    </Box>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Grid
                        container
                        spacing={4}
                        sx={{
                            mt: 8,
                            textAlign: 'center',
                            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                            pt: 6
                        }}
                    >
                        <Grid size={{ xs: 6, md: 3 }}>
                            <Typography variant="h3" fontWeight="bold">
                                100%
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                                Eco-Friendly
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 6, md: 3 }}>
                            <Typography variant="h3" fontWeight="bold">
                                1,500+
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                                Clientes Felices
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 6, md: 3 }}>
                            <Typography variant="h3" fontWeight="bold">
                                5.0
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                                Calificación Promedio
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 6, md: 3 }}>
                            <Typography variant="h3" fontWeight="bold">
                                24/7
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                                Soporte al Cliente
                            </Typography>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default CTASection;
