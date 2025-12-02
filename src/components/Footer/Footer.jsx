import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import siteConfig from '../../config/siteConfig';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 6, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ mb: 2 }}>
                            <img
                                src="/img/logos/nombre/logoblanco_greenpaw.png"
                                alt={siteConfig.company.name}
                                style={{ height: '50px' }}
                            />
                        </Box>
                        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                            {siteConfig.company.description}
                        </Typography>
                        <Box>
                            <IconButton
                                color="inherit"
                                component="a"
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                component="a"
                                href={siteConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                component="a"
                                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsApp />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                component="a"
                                href={siteConfig.social.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTiktok />
                            </IconButton>
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

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Contacto
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography
                                component="a"
                                href={`mailto:${siteConfig.contact.email}`}
                                variant="body2"
                                sx={{ opacity: 0.8, color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                            >
                                Email: {siteConfig.contact.email}
                            </Typography>
                            <Typography
                                component="a"
                                href={`tel:${siteConfig.contact.phone}`}
                                variant="body2"
                                sx={{ opacity: 0.8, color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                            >
                                Tel: {siteConfig.contact.phone}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    mt: 4,
                    pt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2
                }}>
                    <Typography
                        component="a"
                        href="https://www.orbit.com.mx"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body2"
                        sx={{
                            opacity: 0.5,
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'opacity 0.2s',
                            '&:hover': {
                                opacity: 0.8,
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        Desarrollado por Orbit
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.6 }}>
                        © {new Date().getFullYear()} {siteConfig.company.name}. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
