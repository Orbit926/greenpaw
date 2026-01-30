import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { FormatQuote } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import siteConfig from '../config/siteConfig';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sofía y Martina',
            location: '',
            rating: 5,
            comment: 'Los mejores pastos y el mejor servicio, compré el primero hace 3 años y medio, dos días antes de que llegara mi perrita y fue un éxito nunca hizo fuera del jardín!! Desde bebé se acostumbró a él y solo hizo ahí, y para los que vivimos en depa es una maravilla!! Duran mil y aparte tienen excelente servicio para el mantenimiento y repuestos. La verdad suuuuupeer recomendados!!',
            avatar: '/img/landing/reviews/resena_1.jpeg'
        },
        {
            id: 2,
            name: 'Anastasia y Sof',
            location: '',
            rating: 5,
            comment: 'Mi experiencia personal ha sido increíble, lo compré desde antes de que recibiera a mi perrita entonces ella solo conoce ese pasto y es en el único lugar donde hace ya sabe buscarlo por que supongo se huele a ella misma. Yo estuve buscando muchas opciones incluso uno de fibra de coco pero me decidí por este y no me arrepiento. La atención ha sido excelente y me encanta que les graban su propia plaquita.',
            avatar: '/img/landing/reviews/resena_2.jpeg'
        },
        {
            id: 3,
            name: 'Maggie y Mojito',
            location: '',
            rating: 5,
            comment: 'Tenemos una hembra de 3 años, un macho de 6 y un viejito de 15. A la hembra le decimos simplemente "baño!" y corre a la caja a hacer pis ... y haciendo ella por supuesto van los machos a "firmar" de cualquier manera los sacamos a caminar al menos 3 veces en el día pero la caja es una buenísima opción para la primera pipí de la mañana y urgencias!',
            avatar: '/img/landing/reviews/resena_3.jpeg'
        }
    ];

    // Para que el loop sea suave incluso con pocas reseñas (ej. 3), duplicamos internamente.
    // Esto permite un carrusel continuo tipo “marquesina” sin saltos perceptibles.
    const carouselItems = testimonials.length < 6
        ? [...testimonials, ...testimonials]
        : testimonials;

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

                <Box sx={{ overflow: 'hidden' }}>
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        allowTouchMove={false}
                        grabCursor={false}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false
                        }}
                        speed={6500}
                        spaceBetween={24}
                        slidesPerView={3}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            600: { slidesPerView: 2 },
                            900: { slidesPerView: 3 }
                        }}
                    >
                        {carouselItems.map((testimonial, index) => (
                            <SwiperSlide key={`${testimonial.id}-${index}`} style={{ height: 'auto' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
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
                                            {/* Carrusel “premium”: continuo, sin controles, sin drag */}
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

                                            <Rating
                                                value={testimonial.rating}
                                                readOnly
                                                precision={0.5}
                                                sx={{ mb: 2 }}
                                            />

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

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                                                <Avatar
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    sx={{ width: 64, height: 64 }}
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>

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
