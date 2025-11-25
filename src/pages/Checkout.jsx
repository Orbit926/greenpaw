import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Paper, CircularProgress } from '@mui/material';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { goToShopifyCheckout } from '../services/checkout';

const Checkout = () => {
    const { cart, cartTotal } = useCart();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        
        try {
            // Redirigir a Shopify para completar el pago
            await goToShopifyCheckout(cart);
            // El usuario será redirigido automáticamente
            // No llegará aquí porque la página cambia
        } catch (err) {
            console.error('Error al crear checkout:', err);
            setError(err.message || 'Hubo un problema al procesar tu pedido. Por favor intenta de nuevo.');
            setLoading(false);
        }
    };

    useEffect(() => {
        document.title = 'Checkout | Greenpaw';
    }, []);

    if (cart.length === 0) {
        navigate('/cart');
        return null;
    }

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                Finalizar Compra
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
                Serás redirigido a nuestro checkout seguro para completar tu compra
            </Typography>

            <Paper sx={{ p: 4, bgcolor: 'primary.dark', color: 'white' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Resumen del Pedido
                </Typography>
                
                <Box sx={{ my: 4 }}>
                    {cart.map((item) => (
                        <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, pb: 2, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <Box>
                                <Typography variant="body1" fontWeight="bold">{item.title}</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8 }}>Cantidad: {item.quantity}</Typography>
                            </Box>
                            <Typography variant="body1" fontWeight="bold">
                                ${(item.price * item.quantity).toFixed(2)}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, pt: 3, borderTop: '2px solid rgba(255,255,255,0.3)' }}>
                    <Typography variant="h4" fontWeight="bold">Total</Typography>
                    <Typography variant="h4" fontWeight="bold">${cartTotal.toFixed(2)}</Typography>
                </Box>

                {error && (
                    <Typography color="error" variant="body2" sx={{ mb: 2, bgcolor: 'white', p: 2, borderRadius: 1 }}>
                        {error}
                    </Typography>
                )}

                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    size="large"
                    disabled={loading}
                    sx={{ 
                        bgcolor: 'white', 
                        color: 'primary.dark', 
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        '&:hover': { bgcolor: 'grey.100' } 
                    }}
                >
                    {loading ? <CircularProgress size={24} /> : 'Proceder al Pago'}
                </Button>

                <Typography variant="caption" sx={{ display: 'block', mt: 2, textAlign: 'center', opacity: 0.8 }}>
                    Pago seguro procesado por Shopify
                </Typography>
            </Paper>
        </Container>
    );
};

export default Checkout;
