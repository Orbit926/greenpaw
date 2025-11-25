import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('card');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            clearCart();
            navigate('/success');
        }, 1500);
    };

    useEffect(() => {
        document.title = 'Checkout | Greenpaw';
    }, []);

    if (cart.length === 0) {
        navigate('/cart');
        return null;
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
                Finalizar Compra
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Paper sx={{ p: 4, mb: 4 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>Información de Envío</Typography>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="Nombre" fullWidth required />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="Apellido" fullWidth required />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField label="Dirección" fullWidth required />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="Ciudad" fullWidth required />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField label="Código Postal" fullWidth required />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField label="Teléfono" fullWidth required />
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper sx={{ p: 4 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>Método de Pago</Typography>
                            <FormControl>
                                <RadioGroup
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                >
                                    <FormControlLabel value="card" control={<Radio />} label="Tarjeta de Crédito / Débito" />
                                    <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                                </RadioGroup>
                            </FormControl>

                            {paymentMethod === 'card' && (
                                <Grid container spacing={3} sx={{ mt: 2 }}>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField label="Número de Tarjeta" fullWidth required />
                                    </Grid>
                                    <Grid size={{ xs: 6 }}>
                                        <TextField label="Fecha Exp." placeholder="MM/YY" fullWidth required />
                                    </Grid>
                                    <Grid size={{ xs: 6 }}>
                                        <TextField label="CVC" fullWidth required />
                                    </Grid>
                                </Grid>
                            )}
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper sx={{ p: 4, position: 'sticky', top: 100, bgcolor: 'primary.dark', color: 'white' }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>Resumen del Pedido</Typography>
                            <Box sx={{ mb: 4 }}>
                                {cart.map((item) => (
                                    <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, opacity: 0.9 }}>
                                        <Typography variant="body2">{item.quantity}x {item.title}</Typography>
                                        <Typography variant="body2">${(item.price * item.quantity).toFixed(2)}</Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, pt: 2, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                                <Typography variant="h5" fontWeight="bold">Total</Typography>
                                <Typography variant="h5" fontWeight="bold">${cartTotal.toFixed(2)}</Typography>
                            </Box>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                fullWidth
                                size="large"
                                sx={{ bgcolor: 'white', color: 'primary.dark', '&:hover': { bgcolor: 'grey.100' } }}
                            >
                                Pagar Ahora
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Checkout;
