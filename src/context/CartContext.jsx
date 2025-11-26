import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const localData = localStorage.getItem('greenpaw_cart');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error('Error reading cart from localStorage', error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('greenpaw_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1, properties = null) => {
        setCart((prevCart) => {
            // Generar un ID único que considere las properties
            // Si dos productos tienen diferentes properties, son items diferentes en el carrito
            const uniqueId = properties
                ? `${product.id}-${JSON.stringify(properties)}`
                : product.id;

            const existingItem = prevCart.find((item) => item.uniqueId === uniqueId);

            if (existingItem) {
                // Si ya existe un item con el mismo ID y properties, incrementar cantidad
                return prevCart.map((item) =>
                    item.uniqueId === uniqueId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            // Agregar nuevo item con uniqueId y properties
            return [...prevCart, {
                ...product,
                uniqueId,
                quantity,
                properties
            }];
        });
    };

    const removeFromCart = (uniqueId) => {
        setCart((prevCart) => prevCart.filter((item) => item.uniqueId !== uniqueId));
    };

    const updateQuantity = (uniqueId, quantity) => {
        if (quantity < 1) return;
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.uniqueId === uniqueId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                cartCount,
                isCartOpen,
                openCart,
                closeCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
