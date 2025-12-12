import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Button, IconButton, Divider, Paper } from '@mui/material';
import { Add, Remove, Delete, ArrowBack } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart = () => {
    const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Carrito | Greenpaw';
    }, []);

    if (cart.length === 0) {
        return (
            <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>Tu carrito está vacío</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Parece que aún no has agregado productos.
                </Typography>
                <Button component={Link} to="/products" variant="contained" size="large">
                    Ir a comprar
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Carrito de Compras
            </Typography>

            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {cart.map((item) => (
                            <motion.div layout key={item.uniqueId}>
                                <Paper sx={{ p: 2 }}>
                                    {/* Layout para desktop */}
                                    <Box sx={{ 
                                        display: { xs: 'none', sm: 'flex' }, 
                                        gap: 2, 
                                        alignItems: 'center' 
                                    }}>
                                        <Box
                                            component="img"
                                            src={item.images[0]}
                                            alt={item.title}
                                            sx={{ width: 100, height: 100, borderRadius: 2, objectFit: 'cover' }}
                                        />
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                                            <Typography variant="body2" color="text.secondary">${item.price}</Typography>
                                            {item.properties && Object.keys(item.properties).length > 0 && (
                                                <Typography variant="caption" color="primary.main" sx={{ display: 'block', mt: 0.5, fontWeight: 'bold' }}>
                                                    {Object.entries(item.properties).map(([key, value]) => `${key}: ${value}`).join(', ')}
                                                </Typography>
                                            )}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <IconButton onClick={() => updateQuantity(item.uniqueId, item.quantity - 1)} disabled={item.quantity <= 1}>
                                                <Remove />
                                            </IconButton>
                                            <Typography fontWeight="bold">{item.quantity}</Typography>
                                            <IconButton onClick={() => updateQuantity(item.uniqueId, item.quantity + 1)}>
                                                <Add />
                                            </IconButton>
                                        </Box>
                                        <Typography variant="h6" fontWeight="bold" sx={{ minWidth: 80, textAlign: 'right' }}>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </Typography>
                                        <IconButton color="error" onClick={() => removeFromCart(item.uniqueId)}>
                                            <Delete />
                                        </IconButton>
                                    </Box>

                                    {/* Layout para móvil */}
                                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                            <Box
                                                component="img"
                                                src={item.images[0]}
                                                alt={item.title}
                                                sx={{ width: 80, height: 80, borderRadius: 2, objectFit: 'cover' }}
                                            />
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="subtitle1" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">${item.price}</Typography>
                                                {item.properties && Object.keys(item.properties).length > 0 && (
                                                    <Typography variant="caption" color="primary.main" sx={{ display: 'block', mt: 0.5, fontWeight: 'bold' }}>
                                                        {Object.entries(item.properties).map(([key, value]) => `${key}: ${value}`).join(', ')}
                                                    </Typography>
                                                )}
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <IconButton size="small" onClick={() => updateQuantity(item.uniqueId, item.quantity - 1)} disabled={item.quantity <= 1}>
                                                    <Remove fontSize="small" />
                                                </IconButton>
                                                <Typography fontWeight="bold" sx={{ mx: 1 }}>{item.quantity}</Typography>
                                                <IconButton size="small" onClick={() => updateQuantity(item.uniqueId, item.quantity + 1)}>
                                                    <Add fontSize="small" />
                                                </IconButton>
                                            </Box>
                                            <Typography variant="h6" fontWeight="bold">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </Typography>
                                            <IconButton color="error" size="small" onClick={() => removeFromCart(item.uniqueId)}>
                                                <Delete fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Paper>
                            </motion.div>
                        ))}
                    </Box>
                    <Button startIcon={<ArrowBack />} onClick={() => navigate('/products')} sx={{ mt: 4 }}>
                        Continuar comprando
                    </Button>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ p: 4, position: 'sticky', top: 100 }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>Resumen</Typography>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography>Subtotal</Typography>
                            <Typography>${cartTotal.toFixed(2)}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography>Envío</Typography>
                            <Typography color="success.main">Gratis</Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                            <Typography variant="h6" fontWeight="bold">Total</Typography>
                            <Typography variant="h6" fontWeight="bold">${cartTotal.toFixed(2)}</Typography>
                        </Box>
                        <Button
                            component={Link}
                            to="/checkout"
                            variant="contained"
                            fullWidth
                            size="large"
                        >
                            Proceder al Pago
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cart;
