import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Recycling, WaterDrop, Forest, Public } from '@mui/icons-material';

const EcoFriendlySection = () => {
    const ecoFeatures = [
        {
            icon: <Recycling sx={{ fontSize: 50 }} />,
            title: 'Plásticos Reciclados',
            description: 'Fabricamos nuestros módulos con plásticos reciclados: tapas de shampoo, botellas PET y otros plásticos rescatados del desecho.'
        },
        {
            icon: <WaterDrop sx={{ fontSize: 50 }} />,
            title: 'Reducción de Residuos',
            description: 'Cada módulo Greenpaw evita que aproximadamente 2kg de plástico terminen en vertederos o en el océano.'
        },
        {
            icon: <Forest sx={{ fontSize: 50 }} />,
            title: 'Proceso Sostenible',
            description: 'Utilizamos métodos de producción eficientes que minimizan el consumo energético y la huella de carbono.'
        },
        {
            icon: <Public sx={{ fontSize: 50 }} />,
            title: 'Impacto Positivo',
            description: 'Al elegir Greenpaw, contribuyes activamente a la economía circular y al cuidado del planeta.'
        }
    ];

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                // Replaced hardcoded gradient with theme-based colors
                background: (theme) => `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light}20 100%)`,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    // Replaced hardcoded rgba with theme primary.light
                    background: (theme) => `radial-gradient(circle, ${theme.palette.primary.light}25 0%, transparent 70%)`,
                    zIndex: 0
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
                                color: 'success.main',
                                fontWeight: 600,
                                letterSpacing: 2,
                                fontSize: '0.95rem'
                            }}
                        >
                            Compromiso Ambiental
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
                            100% Eco-Friendly
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'text.secondary',
                                maxWidth: '800px',
                                mx: 'auto',
                                lineHeight: 1.8,
                                fontWeight: 400
                            }}
                        >
                            Transformamos residuos plásticos en soluciones sustentables para el bienestar
                            de tu mascota y del planeta.
                        </Typography>
                    </Box>
                </motion.div>

                {/* Feature Cards */}
                <Grid container spacing={4}>
                    {ecoFeatures.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
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
                                        textAlign: 'center',
                                        borderRadius: 3,
                                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                                        transition: 'all 0.3s',
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
                                        <Box
                                            sx={{
                                                display: 'inline-flex',
                                                p: 2,
                                                borderRadius: '50%',
                                                bgcolor: 'success.50',
                                                color: 'success.main',
                                                mb: 3,
                                                mx: 'auto'
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            gutterBottom
                                            sx={{ mb: 2 }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ lineHeight: 1.7, flexGrow: 1 }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Box
                        sx={{
                            mt: { xs: 6, md: 10 },
                            p: { xs: 4, md: 6 },
                            borderRadius: 4,
                            bgcolor: 'primary.main',
                            color: 'white',
                            textAlign: 'center'
                        }}
                    >
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>
                                    2kg+
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                    Plástico reciclado por módulo
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>
                                    100%
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                    Materiales reciclados
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>
                                    0%
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                    Plástico nuevo utilizado
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default EcoFriendlySection;
