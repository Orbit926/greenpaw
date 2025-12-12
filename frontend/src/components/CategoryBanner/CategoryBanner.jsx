import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 'interiores',
        title: 'Interiores',
        image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop',
        description: 'Perfecto para departamentos'
    },
    {
        id: 'exteriores',
        title: 'Exteriores',
        image: 'https://images.unsplash.com/photo-1558909612-e2967d8fbdd2?q=80&w=1000&auto=format&fit=crop',
        description: 'Resistente al clima'
    },
    {
        id: 'viaje',
        title: 'Viaje',
        image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1000&auto=format&fit=crop',
        description: 'Llévalo contigo'
    }
];

const CategoryBanner = () => {
    return (
        <Box sx={{ py: 8 }}>
            <Grid container spacing={4}>
                {categories.map((cat, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={cat.id}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Paper
                                component={Link}
                                to={`/products?category=${cat.id}`}
                                sx={{
                                    position: 'relative',
                                    height: 300,
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    p: 4,
                                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), transparent), url(${cat.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                            >
                                <Box>
                                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                                        {cat.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                        {cat.description}
                                    </Typography>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CategoryBanner;
