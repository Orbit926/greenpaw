import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Instagram, Twitter, Pets } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 6, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Pets sx={{ mr: 1, fontSize: 28 }} />
                            <Typography variant="h6" fontWeight="bold">
                                Greenpaw
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                            Pasto para mascotas ecológico, hecho con plástico 100% reciclado. Cuidamos a tu mascota y al planeta.
                        </Typography>
                        <Box>
                            <IconButton color="inherit"><Facebook /></IconButton>
                            <IconButton color="inherit"><Instagram /></IconButton>
                            <IconButton color="inherit"><Twitter /></IconButton>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Enlaces
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link to="/" style={{ color: 'white', opacity: 0.8 }}>Inicio</Link>
                            <Link to="/products" style={{ color: 'white', opacity: 0.8 }}>Productos</Link>
                            <Link to="/cart" style={{ color: 'white', opacity: 0.8 }}>Carrito</Link>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Soporte
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link to="#" style={{ color: 'white', opacity: 0.8 }}>FAQ</Link>
                            <Link to="#" style={{ color: 'white', opacity: 0.8 }}>Envíos</Link>
                            <Link to="#" style={{ color: 'white', opacity: 0.8 }}>Devoluciones</Link>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Contacto
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Email: contacto@greenpaw.com<br />
                            Tel: +52 55 1234 5678<br />
                            CDMX, México
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 2, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ opacity: 0.6 }}>
                        © {new Date().getFullYear()} Greenpaw. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
