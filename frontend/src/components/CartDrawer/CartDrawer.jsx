import React from 'react';
import { Drawer, Box, Typography, IconButton, Button, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Close, Add, Remove, Delete } from '@mui/icons-material';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
    const { isCartOpen, closeCart, cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        closeCart();
        navigate('/checkout');
    };

    return (
        <Drawer
            anchor="right"
            open={isCartOpen}
            onClose={closeCart}
            PaperProps={{
                sx: { width: { xs: '100%', sm: 400 }, borderRadius: '20px 0 0 20px' }
            }}
        >
            <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h5" fontWeight="bold">Tu Carrito</Typography>
                    <IconButton onClick={closeCart}>
                        <Close />
                    </IconButton>
                </Box>
                <Divider sx={{ mb: 2 }} />

                {cart.length === 0 ? (
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: 0.6 }}>
                        <Typography variant="h6">El carrito está vacío</Typography>
                        <Typography variant="body2">¡Agrega algunos productos!</Typography>
                    </Box>
                ) : (
                    <List sx={{ flexGrow: 1, overflow: 'auto' }}>
                        {cart.map((item) => (
                            <ListItem key={item.uniqueId} alignItems="flex-start" sx={{ px: 0 }}>
                                <ListItemAvatar>
                                    <Avatar src={item.images[0]} variant="rounded" sx={{ width: 80, height: 80, mr: 2 }} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {item.title}
                                        </Typography>
                                    }
                                    secondary={
                                        <Box>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                                ${item.price}
                                            </Typography>
                                            {item.properties && Object.keys(item.properties).length > 0 && (
                                                <Typography variant="caption" color="primary.main" sx={{ display: 'block', mb: 1, fontWeight: 'bold' }}>
                                                    {Object.entries(item.properties).map(([key, value]) => `${key}: ${value}`).join(', ')}
                                                </Typography>
                                            )}
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <IconButton size="small" onClick={() => updateQuantity(item.uniqueId, item.quantity - 1)} disabled={item.quantity <= 1}>
                                                    <Remove fontSize="small" />
                                                </IconButton>
                                                <Typography variant="body2">{item.quantity}</Typography>
                                                <IconButton size="small" onClick={() => updateQuantity(item.uniqueId, item.quantity + 1)}>
                                                    <Add fontSize="small" />
                                                </IconButton>
                                                <IconButton size="small" color="error" onClick={() => removeFromCart(item.uniqueId)} sx={{ ml: 'auto' }}>
                                                    <Delete fontSize="small" />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                )}

                <Box sx={{ mt: 'auto', pt: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="h6">Total:</Typography>
                        <Typography variant="h6" fontWeight="bold">${cartTotal.toFixed(2)}</Typography>
                    </Box>
                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={cart.length === 0}
                        onClick={handleCheckout}
                    >
                        Proceder al Pago
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default CartDrawer;
