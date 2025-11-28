import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection = () => {
    // Array de imágenes - puedes agregar más imágenes aquí fácilmente
    const heroImages = [
        {
            src: '/landing/hero/hero-1.jpeg',
            alt: 'Greenpaw - Módulo ecológico 1'
        },
        {
            src: '/landing/hero/hero-2.jpeg',
            alt: 'Greenpaw - Módulo ecológico 2'
        }
    ];

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: { xs: '85vh', md: '90vh' },
                display: 'flex',
                alignItems: 'center',
                // Replaced hardcoded gradient with theme-based colors
                background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.light}30 0%, ${theme.palette.primary.light}60 100%)`,
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
                    // Replaced hardcoded rgba with theme primary.dark
                    background: (theme) => `${theme.palette.primary.dark}15`,
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
                    // Replaced hardcoded rgba with theme primary.light
                    background: (theme) => `${theme.palette.primary.light}20`,
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
                                        // Replaced hardcoded shadow with theme primary.main
                                        boxShadow: (theme) => `0 8px 24px ${theme.palette.primary.main}40`,
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: (theme) => `0 12px 32px ${theme.palette.primary.main}55`
                                        },
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    Explorar Productos
                                </Button>
                                <Button
                                    component="a"
                                    href="#mantenimiento"
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

                    {/* Image Carousel */}
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            style={{ width: '100%', maxWidth: '600px' }}
                        >
                            <Swiper
                                modules={[Pagination, Autoplay, EffectFade]}
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true
                                }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                effect="fade"
                                fadeEffect={{
                                    crossFade: true
                                }}
                                loop={heroImages.length > 1}
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                                }}
                            >
                                {heroImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <Box
                                            component="img"
                                            src={image.src}
                                            alt={image.alt}
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                display: 'block',
                                                minHeight: { xs: '300px', md: '400px' },
                                                maxHeight: { xs: '400px', md: '500px' },
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </Box>
                </Box>
            </Container>

            {/* Custom styles for Swiper pagination */}
            <style>
                {`
                    .swiper-pagination-bullet {
                        /* Replaced hardcoded color with theme primary.main */
                        background: #5bc4c3 !important;
                        opacity: 0.5;
                        transition: all 0.3s;
                    }

                    .swiper-pagination-bullet-active {
                        opacity: 1;
                        transform: scale(1.2);
                    }

                    .swiper-pagination {
                        bottom: 20px !important;
                    }
                `}
            </style>
        </Box>
    );
};

export default HeroSection;
