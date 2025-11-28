import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { FormatQuote } from '@mui/icons-material';
import siteConfig from '../config/siteConfig';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'María González',
            location: 'Guadalajara, Jal.',
            rating: 5,
            comment: 'Mi perro Max está encantado con su nuevo espacio. El módulo se ve increíble en mi terraza y es muy fácil de mantener. ¡100% recomendado!',
            avatar: 'https://i.pravatar.cc/150?img=1'
        },
        {
            id: 2,
            name: 'Carlos Ramírez',
            location: 'Ciudad de México',
            rating: 5,
            comment: 'Excelente calidad y el servicio de envío fue rapidísimo. Me sorprendió lo natural que se ve el pasto. Mi familia está feliz con la compra.',
            avatar: 'https://i.pravatar.cc/150?img=12'
        },
        {
            id: 3,
            name: 'Ana Patricia López',
            location: 'Monterrey, N.L.',
            rating: 5,
            comment: 'Además de ser funcional, es hermoso. Me encanta que sea eco-friendly. El kit de mantenimiento llegó perfecto y fue súper fácil de usar.',
            avatar: 'https://i.pravatar.cc/150?img=5'
        },
        {
            id: 4,
            name: 'Roberto Sánchez',
            location: 'Zapopan, Jal.',
            rating: 5,
            comment: 'El servicio a domicilio es increíble. El técnico fue muy profesional y dejó todo impecable. Definitivamente vale cada peso.',
            avatar: 'https://i.pravatar.cc/150?img=8'
        },
        {
            id: 5,
            name: 'Sofía Hernández',
            location: 'Querétaro, Qro.',
            rating: 5,
            comment: 'Como diseñadora de interiores, valoro mucho la estética. Greenpaw se integra perfectamente con cualquier espacio. ¡Mis clientes lo adoran!',
            avatar: 'https://i.pravatar.cc/150?img=9'
        },
        {
            id: 6,
            name: 'Luis Alberto Torres',
            location: 'Guadalajara, Jal.',
            rating: 5,
            comment: 'Tengo tres módulos en mi casa. La calidad es excepcional y saber que están hechos con materiales reciclados me hace sentir bien.',
            avatar: 'https://i.pravatar.cc/150?img=13'
        }
    ];

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                // Replaced hardcoded gradient with theme-based colors
                background: (theme) => `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 100%)`
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                letterSpacing: 2,
                                fontSize: '0.95rem'
                            }}
                        >
                            Testimonios
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '2rem', md: '3rem' },
                                mt: 1,
                                mb: 3,
                                color: 'primary.dark'
                            }}
                        >
                            Lo que Dicen Nuestros Clientes
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'text.secondary',
                                maxWidth: '700px',
                                mx: 'auto',
                                lineHeight: 1.8,
                                fontWeight: 400
                            }}
                        >
                            Miles de familias ya confían en Greenpaw para el bienestar de sus mascotas
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={testimonial.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                style={{ height: '100%' }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 3,
                                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                                        transition: 'all 0.3s',
                                        position: 'relative',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{
                                        p: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexGrow: 1
                                    }}>
                                        {/* Quote Icon */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 20,
                                                right: 20,
                                                color: 'primary.main',
                                                opacity: 0.1
                                            }}
                                        >
                                            <FormatQuote sx={{ fontSize: 60 }} />
                                        </Box>

                                        {/* Rating */}
                                        <Rating
                                            value={testimonial.rating}
                                            readOnly
                                            precision={0.5}
                                            sx={{ mb: 2 }}
                                        />

                                        {/* Comment */}
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                mb: 3,
                                                color: 'text.primary',
                                                lineHeight: 1.7,
                                                fontStyle: 'italic',
                                                flexGrow: 1
                                            }}
                                        >
                                            "{testimonial.comment}"
                                        </Typography>

                                        {/* Author */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                                            <Avatar
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                sx={{ width: 50, height: 50 }}
                                            />
                                            <Box>
                                                <Typography variant="subtitle1" fontWeight="bold">
                                                    {testimonial.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {testimonial.location}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Box
                        sx={{
                            mt: 8,
                            p: 4,
                            borderRadius: 3,
                            bgcolor: 'success.50',
                            border: '2px dashed',
                            borderColor: 'primary.dark',
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.dark">
                            {siteConfig.stats.happyCustomers} Familias Felices
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Únete a la comunidad {siteConfig.company.name} y transforma la vida de tu mascota
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default TestimonialsSection;
