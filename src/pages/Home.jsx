import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import Hero from '../components/Hero/Hero';
import CategoryBanner from '../components/CategoryBanner/CategoryBanner';
import ProductCard from '../components/ProductCard/ProductCard';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import products from '../data/products.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const reviews = [
    { id: 1, name: "Ana G.", rating: 5, comment: "Increíble calidad, mi perro lo ama." },
    { id: 2, name: "Carlos M.", rating: 5, comment: "Se ve muy real y es fácil de limpiar." },
    { id: 3, name: "Sofia L.", rating: 4, comment: "Excelente servicio y envío rápido." }
];

const Home = () => {
    const featuredProducts = products.slice(0, 3);

    useEffect(() => {
        document.title = 'Greenpaw | Pasto Ecológico para Mascotas';
    }, []);

    return (
        <>
            <Hero />

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
                        Categorías
                    </Typography>
                    <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                        Encuentra el modelo perfecto para tu espacio
                    </Typography>
                    <CategoryBanner />
                </motion.div>
            </Container>

            <Box sx={{ bgcolor: 'background.paper', py: 10 }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Destacados
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                        <Typography variant="body1" color="text.secondary">
                            Los favoritos de nuestros clientes
                        </Typography>
                        <Button component={Link} to="/products" variant="text" color="primary">
                            Ver todos
                        </Button>
                    </Box>
                    <Grid container spacing={4}>
                        {featuredProducts.map((product) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
                    Lo que dicen nuestros clientes
                </Typography>
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {reviews.map((review) => (
                        <Grid size={{ xs: 12, md: 4 }} key={review.id}>
                            <ReviewCard review={review} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Home;
