import React, { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Home, ShoppingBag, SentimentDissatisfied } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    useEffect(() => {
        document.title = 'Página no encontrada | Greenpaw';
    }, []);

    return (
        <Container maxWidth="sm" sx={{ py: 12, textAlign: 'center' }}>
            <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
                <SentimentDissatisfied sx={{ fontSize: 120, color: 'primary.main', mb: 2 }} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Typography variant="h1" fontWeight="bold" color="primary.dark" sx={{ mb: 1 }}>
                    404
                </Typography>

                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    ¡Ups! Página no encontrada
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
                    La página que buscas no existe o fue movida.
                    No te preocupes, puedes volver al inicio o explorar nuestros productos.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        size="large"
                        startIcon={<Home />}
                    >
                        Ir al Inicio
                    </Button>
                    <Button
                        component={Link}
                        to="/products"
                        variant="outlined"
                        size="large"
                        startIcon={<ShoppingBag />}
                    >
                        Ver Productos
                    </Button>
                </Box>
            </motion.div>
        </Container>
    );
};

export default NotFound;
