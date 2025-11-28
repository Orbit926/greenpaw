import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Pets, EmojiNature, Home } from '@mui/icons-material';

const AboutSection = () => {
    const features = [
        {
            icon: <Pets sx={{ fontSize: 48 }} />,
            title: 'Para tu Mascota',
            description: 'Un espacio natural y cómodo donde tu perro puede hacer sus necesidades, imitando el entorno exterior.'
        },
        {
            icon: <Home sx={{ fontSize: 48 }} />,
            title: 'Para tu Hogar',
            description: 'Diseño elegante y discreto que se integra perfectamente con la decoración de tu espacio.'
        },
        {
            icon: <EmojiNature sx={{ fontSize: 48 }} />,
            title: 'Para el Planeta',
            description: 'Fabricado con materiales reciclados, contribuyendo a un futuro más sostenible.'
        }
    ];

    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                    {/* Image */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box
                                component="img"
                                src="/img/landing/about/about.jpeg"
                                alt="Greenpaw - Sanitario con pasto"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 4,
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </motion.div>
                    </Grid>

                    {/* Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'primary.main',
                                    fontWeight: 600,
                                    letterSpacing: 2,
                                    fontSize: '0.95rem'
                                }}
                            >
                                Quiénes Somos
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '2rem', md: '3rem' },
                                    mb: 3,
                                    mt: 1,
                                    color: 'primary.dark'
                                }}
                            >
                                Bienestar Natural
                                <Box component="span" sx={{ display: 'block', color: 'primary.main' }}>
                                    para tu Mascota
                                </Box>
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    color: 'text.secondary',
                                    lineHeight: 1.8,
                                    fontSize: { xs: '1rem', md: '1.1rem' }
                                }}
                            >
                                En <strong>Greenpaw</strong>, creemos que cada mascota merece un espacio natural
                                y cómodo dentro del hogar. Nuestros sanitarios combinan pasto real con tierra,
                                creando una experiencia auténtica y saludable.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    color: 'text.secondary',
                                    lineHeight: 1.8,
                                    fontSize: { xs: '1rem', md: '1.1rem' }
                                }}
                            >
                                Diseñados pensando en la comodidad de tu perro y la estética de tu hogar,
                                nuestros productos eco-friendly transforman la rutina diaria en una
                                experiencia más natural y sostenible.
                            </Typography>

                            {/* Feature Cards */}
                            <Box sx={{ mt: 5 }}>
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                                mb: 3,
                                                alignItems: 'flex-start'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: 'primary.main',
                                                    bgcolor: 'primary.50',
                                                    p: 1.5,
                                                    borderRadius: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                {feature.icon}
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                    {feature.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {feature.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutSection;
