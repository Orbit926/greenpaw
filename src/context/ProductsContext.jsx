import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProducts } from '../services';
import productsData from '../data/products.json';
import siteConfig from '../config/siteConfig';

const ProductsContext = createContext();

// Producto especial virtual para sanitarios a medida
const CUSTOM_MODULE_PRODUCT = {
    id: 'custom-module',
    title: 'Sanitario Greenpaw a medida',
    description: 'Pide tu sanitario con medidas personalizadas. Ideal para espacios específicos o necesidades particulares de tu mascota.',
    price: 0, // No tiene precio fijo
    images: ['/img/products/modulo_especial.jpeg'],
    category: 'personalizado',
    ecoScore: 100,
    isCustom: true,
    tags: ['personalizado', 'a-medida']
};

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

            let shopifyProducts = [];

            if (USE_SHOPIFY) {
                // Cargar desde Shopify
                shopifyProducts = await getProducts();
            } else {
                // Usar productos locales (JSON)
                shopifyProducts = productsData;
            }

            // Inyectar el producto especial al inicio del array
            setProducts([CUSTOM_MODULE_PRODUCT, ...shopifyProducts]);
        } catch (err) {
            console.error('Error loading products:', err);
            setError(err.message);
            // Fallback a productos locales si Shopify falla, pero siempre incluir producto custom
            setProducts([CUSTOM_MODULE_PRODUCT, ...productsData]);
        } finally {
            setLoading(false);
        }
    };

    const getProductById = (id) => {
        // Manejar el producto custom que tiene ID string
        if (id === 'custom-module') {
            return products.find(p => p.id === 'custom-module');
        }
        // IDs numéricos de Shopify
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
