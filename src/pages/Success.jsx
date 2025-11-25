import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Success = () => {
    const orderId = Math.floor(Math.random() * 1000000);

    return (
        <Container maxWidth="sm" sx={{ py: 12, textAlign: 'center' }}>
            <Helmet><title>¡Gracias! | Greenpaw</title></Helmet>

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

            <Typography variant="body1" color="text.secondary" paragraph>
                Tu pedido ha sido confirmado y está siendo procesado.
                Recibirás un correo electrónico con los detalles.
            </Typography>

            <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, mb: 6, display: 'inline-block' }}>
                <Typography variant="subtitle2" color="text.secondary">
                    ID de Pedido:
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="primary">
                    #{orderId}
                </Typography>
            </Box>

            <Box>
                <Button component={Link} to="/" variant="contained" size="large">
                    Volver al Inicio
                </Button>
            </Box>
        </Container>
    );
};

export default Success;
