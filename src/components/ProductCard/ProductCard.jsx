import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { WhatsApp } from '@mui/icons-material';
import siteConfig from '../../config/siteConfig';
import { productNeedsPersonalization } from '../../personalization/personalizationEngine';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    // Detectar si es el producto especial a medida
    const isCustom = product.isCustom || product.id === 'custom-module';
    
    // Detectar si necesita personalización (ej: productos con tag "modulo")
    const needsPersonalization = productNeedsPersonalization(product);

    // Generar link de WhatsApp para cotización
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        'Hola, quiero cotizar un sanitario Greenpaw a medida con dimensiones personalizadas. Vengo de la tienda en línea.'
    )}`;

    const handleWhatsAppClick = () => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

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
                        {!isCustom ? (
                            <>
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
                                        onClick={() => {
                                            if (needsPersonalization) {
                                                // Redirigir a detalle para personalizar
                                                navigate(`/products/${product.id}`);
                                            } else {
                                                addToCart(product);
                                            }
                                        }}
                                        disableElevation
                                    >
                                        Agregar
                                    </Button>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Typography variant="subtitle1" color="text.secondary" fontWeight="500">
                                    Precio por cotización
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
                                        onClick={handleWhatsAppClick}
                                        disableElevation
                                        startIcon={<WhatsApp sx={{ fontSize: 18 }} />}
                                    >
                                        Cotizar
                                    </Button>
                                </Box>
                            </>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProductCard;
