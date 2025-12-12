import React, { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Success = () => {
    const [searchParams] = useSearchParams();
    const { clearCart, cart } = useCart();
    
    // Obtener el ID de orden de los parámetros URL de Shopify
    // Shopify puede enviar: order_id, order_number, o checkout_session_id
    const orderId = searchParams.get('order_id') 
        || searchParams.get('order_number') 
        || searchParams.get('checkout_session_id')
        || null;

    useEffect(() => {
        document.title = '¡Gracias! | Greenpaw';
        
        // Limpiar el carrito local después de una compra exitosa
        if (cart.length > 0) {
            clearCart();
        }
    }, [clearCart, cart.length]);

    return (
        <Container maxWidth="sm" sx={{ py: 12, textAlign: 'center' }}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
                <CheckCircle sx={{ fontSize: 100, color: 'success.main', mb: 4 }} />
            </motion.div>

            <Typography variant="h3" fontWeight="bold" gutterBottom>
                ¡Gracias por tu compra!
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: orderId ? 2 : 6 }}>
                Tu pedido ha sido confirmado y está siendo procesado.
                Recibirás un correo electrónico con los detalles.
            </Typography>

            {orderId && (
                <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, mb: 6, display: 'inline-block' }}>
                    <Typography variant="subtitle2" color="text.secondary">
                        ID de Pedido:
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" color="primary">
                        #{orderId}
                    </Typography>
                </Box>
            )}

            <Box>
                <Button component={Link} to="/" variant="contained" size="large">
                    Volver al Inicio
                </Button>
            </Box>
        </Container>
    );
};

export default Success;
