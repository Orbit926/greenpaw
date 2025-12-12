import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Success from '../pages/Success';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Box } from '@mui/material';

const AppRouter = () => {
    const location = useLocation();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ScrollToTop />
            <Navbar />
            <Box sx={{ flexGrow: 1 }}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/success" element={<Success />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
            </Box>
            <Footer />
        </Box>
    );
};

export default AppRouter;
