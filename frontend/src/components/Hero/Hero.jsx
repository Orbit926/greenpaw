import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <Box sx={{
            height: '100vh',
            bgcolor: 'background.default',
            py: { xs: 8, md: 12 },
            overflow: 'hidden',
            position: 'relative',
        }}>
            <Container maxWidth="lg" sx={{ height: '100%' }}>
                <Grid container spacing={6} alignItems="center" sx={{ height: '100%' }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="overline" color="primary" fontWeight="bold" letterSpacing={2}>
                                100% RECICLADO
                            </Typography>
                            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 2, lineHeight: 1.1 }}>
                                Pasto ecológico para tu mejor amigo
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
                                Soluciones sostenibles, higiénicas y de diseño para mascotas modernas.
                                Transforma tu espacio con Greenpaw.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button
                                    component={Link}
                                    to="/products"
                                    variant="contained"
                                    size="large"
                                    sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
                                >
                                    Ver Catálogo
                                </Button>
                                <Button
                                    component={Link}
                                    to="/products?cat=about"
                                    variant="outlined"
                                    size="large"
                                    sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
                                >
                                    Cómo funciona
                                </Button>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop"
                                alt="Perro feliz en pasto"
                                sx={{
                                    width: '100%',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    transform: 'rotate(2deg)'
                                }}
                            />
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
