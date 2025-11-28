import React from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Instagram, Twitter, WhatsApp, YouTube, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import siteConfig from '../../config/siteConfig';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 6, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ mb: 2 }}>
                            <img
                                src="/logos/logo_color.PNG"
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
                                href={siteConfig.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter />
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
                                href={siteConfig.social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <YouTube />
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
                            Email: {siteConfig.contact.email}<br />
                            Tel: {siteConfig.contact.phone}<br />
                            {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, mt: 2 }}>
                            {siteConfig.schedule.weekdays}<br />
                            {siteConfig.schedule.saturday}
                        </Typography>
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
