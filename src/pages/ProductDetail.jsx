import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Button, Chip, Rating, Divider, IconButton, Checkbox, FormControlLabel, Avatar, Card } from '@mui/material';
import { Add, Remove, ArrowBack, WhatsApp } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import siteConfig from '../config/siteConfig';

// Componente para cada item de complemento
const ComplementItem = ({ complement, selected, onToggle }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 1.5,
                mb: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: selected ? 'primary.main' : 'grey.300',
                bgcolor: selected ? 'primary.50' : 'grey.50',
                transition: 'all 0.2s',
                cursor: 'pointer',
                '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: selected ? 'primary.100' : 'grey.100'
                }
            }}
            onClick={onToggle}
        >
            <FormControlLabel
                control={
                    <Checkbox
                        checked={selected}
                        onChange={onToggle}
                        onClick={(e) => e.stopPropagation()}
                        size="small"
                    />
                }
                label=""
                sx={{ m: 0 }}
            />
            <Avatar
                src={complement.imageUrl}
                alt={complement.title}
                variant="rounded"
                sx={{ width: 50, height: 50 }}
            />
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 1 }}>
                    <Typography variant="body2" fontWeight="bold" noWrap sx={{ flex: 1 }}>
                        {complement.title}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold" color="primary.dark" sx={{ whiteSpace: 'nowrap' }}>
                        +${complement.price?.toFixed(2) || '0.00'}
                    </Typography>
                </Box>
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {complement.description}
                </Typography>
            </Box>
        </Box>
    );
};

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, openCart } = useCart();
    const { getProductById, products } = useProducts();
    const [quantity, setQuantity] = useState(1);
    const [selectedComplements, setSelectedComplements] = useState([]);

    const product = getProductById(id);
    
    // Detectar si es el producto especial a medida
    const isCustom = product && (product.isCustom || product.id === 'custom-module');
    
    // Generar link de WhatsApp para cotización
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        `Hola, quiero cotizar un módulo Greenpaw a medida con dimensiones personalizadas. Vengo de la tienda en línea.`
    )}`;
    
    const handleWhatsAppClick = () => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    useEffect(() => {
        if (product) {
            document.title = `${product.title} | Greenpaw`;
        }
    }, [product?.title]);
    
    // Obtener complementos filtrando por tags "complemento-{tag-del-producto}"
    const complementProducts = React.useMemo(() => {
        if (!products || !product || !product.tags) return [];
        
        // Buscar tags del producto actual que NO empiecen con "complemento-"
        const productTags = product.tags.filter(tag => !tag.startsWith('complemento-'));
        
        // Filtrar productos que tengan tags "complemento-{tag-del-producto-actual}"
        return products
            .filter(p => {
                // No incluir el producto actual
                if (p.id === product.id) return false;
                
                // Verificar si tiene alguna tag "complemento-{tag}"
                return p.tags?.some(tag => {
                    if (!tag.startsWith('complemento-')) return false;
                    
                    // Extraer el tag sin el prefijo "complemento-"
                    const complementTag = tag.replace('complemento-', '');
                    
                    // Verificar si coincide con alguna tag del producto actual
                    return productTags.includes(complementTag);
                });
            })
            .map(p => ({
                id: p.id,
                title: p.title,
                description: p.description,
                imageUrl: p.images[0],
                price: p.price,
                variantId: p.variantId
            }));
    }, [products, product]);

    if (!product) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h4">Producto no encontrado</Typography>
                <Button onClick={() => navigate('/products')} sx={{ mt: 2 }}>Volver al catálogo</Button>
            </Container>
        );
    }

    const handleAddToCart = () => {
        // Agregar producto principal
        addToCart(product, quantity);
        
        // Agregar complementos seleccionados con la misma cantidad que el producto principal
        selectedComplements.forEach(complementId => {
            const complement = complementProducts.find(c => c.id === complementId);
            if (complement) {
                addToCart({
                    ...complement,
                    images: [complement.imageUrl]
                }, quantity);  // Usa la misma cantidad que el producto principal
            }
        });
        
        openCart();
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
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

                        {!isCustom && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                <Rating value={4.8} readOnly precision={0.5} />
                                <Typography variant="body2" color="text.secondary">(120 reviews)</Typography>
                            </Box>
                        )}

                        {!isCustom ? (
                            <Typography variant="h4" color="primary.dark" fontWeight="bold" sx={{ mb: 3 }}>
                                ${product.price}
                            </Typography>
                        ) : (
                            <Chip 
                                label="Precio por cotización" 
                                color="success" 
                                sx={{ mb: 3, fontSize: '1rem', py: 2.5, px: 1 }} 
                            />
                        )}

                        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                            {product.description}
                        </Typography>
                        
                        {isCustom && (
                            <Box 
                                sx={{ 
                                    mb: 4, 
                                    p: 3, 
                                    bgcolor: 'success.50', 
                                    borderRadius: 2,
                                    border: '2px solid',
                                    borderColor: 'success.main'
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" gutterBottom color="success.dark">
                                    ¿Cómo funciona?
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    1. Haz clic en "Cotizar por WhatsApp"
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    2. Nos compartes las medidas exactas que necesitas
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    3. Te enviamos una cotización personalizada
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    4. Fabricamos tu módulo a medida
                                </Typography>
                            </Box>
                        )}

                        {/* Sección de Complementos - Solo para productos normales */}
                        {!isCustom && complementProducts && complementProducts.length > 0 && (
                            <Card
                                sx={{
                                    mb: 4,
                                    p: 3,
                                    bgcolor: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'grey.200'
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    Complementos
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                    Mejora tu experiencia con estos productos
                                </Typography>

                                <Box>
                                    {complementProducts.map((complement) => (
                                        <ComplementItem
                                            key={complement.id}
                                            complement={complement}
                                            selected={selectedComplements.includes(complement.id)}
                                            onToggle={() => {
                                                setSelectedComplements(prev =>
                                                    prev.includes(complement.id)
                                                        ? prev.filter(id => id !== complement.id)
                                                        : [...prev, complement.id]
                                                );
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Card>
                        )}

                        {/* Resumen de precio total - Solo para productos normales */}
                        {!isCustom && selectedComplements.length > 0 && (
                            <Box sx={{ mb: 3, p: 2, bgcolor: 'success.50', borderRadius: 2, border: '1px solid', borderColor: 'success.200' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Producto principal (x{quantity})
                                    </Typography>
                                    <Typography variant="body2" fontWeight="medium">
                                        ${(product.price * quantity).toFixed(2)}
                                    </Typography>
                                </Box>
                                {complementProducts
                                    .filter(c => selectedComplements.includes(c.id))
                                    .map(complement => (
                                        <Box key={complement.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography variant="body2" color="text.secondary">
                                                {complement.title} (x{quantity})
                                            </Typography>
                                            <Typography variant="body2" fontWeight="medium">
                                                +${(complement.price * quantity).toFixed(2)}
                                            </Typography>
                                        </Box>
                                    ))
                                }
                                <Divider sx={{ my: 1 }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        Total
                                    </Typography>
                                    <Typography variant="subtitle1" fontWeight="bold" color="primary.dark">
                                        ${(
                                            product.price * quantity +
                                            complementProducts
                                                .filter(c => selectedComplements.includes(c.id))
                                                .reduce((sum, c) => sum + (c.price * quantity), 0)
                                        ).toFixed(2)}
                                    </Typography>
                                </Box>
                            </Box>
                        )}

                        <Divider sx={{ mb: 4 }} />

                        {!isCustom ? (
                            // Selector de cantidad y botón para productos normales
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
                        ) : (
                            // Botón de WhatsApp para producto a medida
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                fullWidth
                                onClick={handleWhatsAppClick}
                                startIcon={<WhatsApp />}
                                sx={{ 
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold'
                                }}
                            >
                                Cotizar por WhatsApp
                            </Button>
                        )}
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetail;
