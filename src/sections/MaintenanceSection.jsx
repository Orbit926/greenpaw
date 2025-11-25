import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { HomeRepairService, LocalShipping, CalendarMonth, LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const MaintenanceSection = () => {
    return (
        <Box
            id="mantenimiento"
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: 'background.paper',
                position: 'relative'
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
                            Servicio Premium
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
                            Mantenimiento Profesional
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
                            Mantén tu módulo Greenpaw siempre fresco y renovado con nuestro
                            servicio especializado de cambio de tierra y pasto.
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={4}>
                    {/* Servicio a Domicilio - ZMG */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: 4,
                                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
                                    border: '2px solid',
                                    borderColor: 'primary.main',
                                    position: 'relative',
                                    overflow: 'visible',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)'
                                    }
                                }}
                            >
                                <Chip
                                    label="POPULAR"
                                    color="primary"
                                    size="small"
                                    sx={{
                                        position: 'absolute',
                                        top: -12,
                                        right: 20,
                                        fontWeight: 'bold'
                                    }}
                                />
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            p: 2,
                                            borderRadius: 3,
                                            bgcolor: 'primary.50',
                                            color: 'primary.main',
                                            mb: 3
                                        }}
                                    >
                                        <HomeRepairService sx={{ fontSize: 48 }} />
                                    </Box>

                                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                                        Servicio a Domicilio
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                        <LocationOn sx={{ fontSize: 20, color: 'error.main' }} />
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ color: 'text.secondary', fontWeight: 500 }}
                                        >
                                            Solo Zona Metropolitana de Guadalajara
                                        </Typography>
                                    </Box>

                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}
                                    >
                                        Un técnico especializado acude a tu hogar para realizar el
                                        cambio completo de tierra y pasto de tu módulo Greenpaw.
                                    </Typography>

                                    <Box sx={{ mb: 4 }}>
                                        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                                            ¿Qué incluye?
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                                            <li>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    Retiro de tierra y pasto usado
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    Instalación de tierra nueva de calidad
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    Colocación de pasto natural fresco
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    Limpieza del módulo
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body2" color="text.secondary">
                                                    Revisión y ajustes necesarios
                                                </Typography>
                                            </li>
                                        </Box>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        startIcon={<CalendarMonth />}
                                        sx={{
                                            py: 1.5,
                                            borderRadius: 2,
                                            fontWeight: 600,
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Agendar Mantenimiento
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                    {/* Servicio Nacional - Kit */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: 4,
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                                    border: '1px solid',
                                    borderColor: 'grey.200',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.1)'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            p: 2,
                                            borderRadius: 3,
                                            bgcolor: 'success.50',
                                            color: 'success.main',
                                            mb: 3
                                        }}
                                    >
                                        <LocalShipping sx={{ fontSize: 48 }} />
                                    </Box>

                                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                                        Kit de Mantenimiento
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                        <LocationOn sx={{ fontSize: 20, color: 'success.main' }} />
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ color: 'text.secondary', fontWeight: 500 }}
                                        >
                                            Envío a toda la República Mexicana
                                        </Typography>
                                    </Box>

                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}
                                    >
                                        Si vives fuera de Guadalajara, te enviamos todo lo necesario
                                        para que renueves tu módulo tú mismo, de manera fácil y rápida.
                                    </Typography>

                                    <Box sx={{ mb: 4 }}>
                                        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                                            ¿Qué incluye el kit?
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                                            <li>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    Tierra de calidad premium
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    Pasto natural fresco
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    Guía de instalación paso a paso
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    Tips de mantenimiento
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body2" color="text.secondary">
                                                    Soporte en línea incluido
                                                </Typography>
                                            </li>
                                        </Box>
                                    </Box>

                                    <Button
                                        component={Link}
                                        to="/products"
                                        variant="outlined"
                                        fullWidth
                                        size="large"
                                        startIcon={<LocalShipping />}
                                        sx={{
                                            py: 1.5,
                                            borderRadius: 2,
                                            fontWeight: 600,
                                            fontSize: '1rem',
                                            borderWidth: 2,
                                            '&:hover': {
                                                borderWidth: 2
                                            }
                                        }}
                                    >
                                        Comprar Kit de Mantenimiento
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Info Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Box
                        sx={{
                            mt: 6,
                            p: 4,
                            borderRadius: 3,
                            bgcolor: 'info.50',
                            border: '1px solid',
                            borderColor: 'info.200',
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold" gutterBottom color="info.dark">
                            ¿Con qué frecuencia debo hacer mantenimiento?
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Recomendamos cambiar la tierra y el pasto cada 2-3 meses para mantener
                            tu módulo Greenpaw en óptimas condiciones de higiene y frescura.
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default MaintenanceSection;
