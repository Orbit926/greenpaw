import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ height: '100%' }}
        >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'visible' }}>
                {product.ecoScore >= 95 && (
                    <Chip
                        label="Eco Choice"
                        color="primary"
                        size="small"
                        sx={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}
                    />
                )}
                <CardMedia
                    component="img"
                    height="240"
                    image={product.images[0]}
                    alt={product.title}
                    sx={{ borderRadius: '16px 16px 0 0', objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="overline" color="text.secondary">
                        {product.category}
                    </Typography>
                    <Typography variant="h6" component="div" fontWeight="bold">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                        {product.description.substring(0, 80)}...
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                        <Typography variant="h6" color="primary.dark" fontWeight="bold">
                            ${product.price}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button
                                component={Link}
                                to={`/products/${product.id}`}
                                variant="outlined"
                                size="small"
                            >
                                Ver
                            </Button>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => addToCart(product)}
                                disableElevation
                            >
                                Agregar
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProductCard;
