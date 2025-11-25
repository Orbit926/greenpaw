import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import EcoFriendlySection from '../sections/EcoFriendlySection';
import MaintenanceSection from '../sections/MaintenanceSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection from '../sections/CTASection';

const Home = () => {
    useEffect(() => {
        document.title = 'Greenpaw | Solución Ecológica para Mascotas';
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>
            <HeroSection />
            <AboutSection />
            <EcoFriendlySection />
            <MaintenanceSection />
            <TestimonialsSection />
            <CTASection />
        </Box>
    );
};

export default Home;
