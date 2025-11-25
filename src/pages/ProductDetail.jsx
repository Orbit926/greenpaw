import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button, Chip, Rating, Divider, IconButton } from '@mui/material';
import { Add, Remove, ArrowBack } from '@mui/icons-material';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';
import { motion } from 'framer-motion';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, openCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const product = productsData.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h4">Producto no encontrado</Typography>
                <Button onClick={() => navigate('/products')} sx={{ mt: 2 }}>Volver al catálogo</Button>
            </Container>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        openCart();
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Helmet>
                <title>{product.title} | Greenpaw</title>
                <meta name="description" content={product.description} />
            </Helmet>

            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} sx={{ mb: 4 }}>
                Volver
            </Button>

            <Grid container spacing={6}>
                {/* Images */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <Box
                            component="img"
                            src={product.images[0]}
                            alt={product.title}
                            sx={{
                                width: '100%',
                                borderRadius: 4,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                        />
                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            {product.images.map((img, index) => (
                                <Box
                                    key={index}
                                    component="img"
                                    src={img}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 2,
                                        cursor: 'pointer',
                                        border: index === 0 ? '2px solid #4CAF50' : 'none'
                                    }}
                                />
                            ))}
                        </Box>
                    </motion.div>
                </Grid>

                {/* Info */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <Typography variant="overline" color="text.secondary" fontSize="1rem">
                                {product.category}
                            </Typography>
                            {product.ecoScore >= 95 && <Chip label="Eco Choice" color="primary" />}
                        </Box>

                        <Typography variant="h3" fontWeight="bold" gutterBottom>
                            {product.title}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                            <Rating value={4.8} readOnly precision={0.5} />
                            <Typography variant="body2" color="text.secondary">(120 reviews)</Typography>
                        </Box>

                        <Typography variant="h4" color="primary.dark" fontWeight="bold" sx={{ mb: 3 }}>
                            ${product.price}
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                            {product.description}
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Características:</Typography>
                            <ul style={{ paddingLeft: 20 }}>
                                {product.features.map((feature, index) => (
                                    <li key={index}><Typography variant="body2">{feature}</Typography></li>
                                ))}
                            </ul>
                        </Box>

                        <Divider sx={{ mb: 4 }} />

                        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: 2 }}>
                                <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                    <Remove />
                                </IconButton>
                                <Typography sx={{ px: 2, fontWeight: 'bold' }}>{quantity}</Typography>
                                <IconButton onClick={() => setQuantity(quantity + 1)}>
                                    <Add />
                                </IconButton>
                            </Box>
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                onClick={handleAddToCart}
                                sx={{ py: 1.5 }}
                            >
                                Agregar al Carrito
                            </Button>
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetail;
