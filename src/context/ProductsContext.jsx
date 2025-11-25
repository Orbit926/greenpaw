import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProducts } from '../services';
import productsData from '../data/products.json';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Cambiar a true cuando quieras usar Shopify
    const USE_SHOPIFY = import.meta.env.VITE_USE_SHOPIFY === 'true';

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            setLoading(true);
            setError(null);
            
            if (USE_SHOPIFY) {
                // Cargar desde Shopify
                const data = await getProducts();
                setProducts(data);
            } else {
                // Usar productos locales (JSON)
                setProducts(productsData);
            }
        } catch (err) {
            console.error('Error loading products:', err);
            setError(err.message);
            // Fallback a productos locales si Shopify falla
            setProducts(productsData);
        } finally {
            setLoading(false);
        }
    };

    const getProductById = (id) => {
        return products.find(p => p.id === parseInt(id));
    };

    const value = {
        products,
        loading,
        error,
        refetch: loadProducts,
        getProductById,
    };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts must be used within ProductsProvider');
    }
    return context;
};
