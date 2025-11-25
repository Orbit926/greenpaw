import React, { useState, useMemo, useEffect } from 'react';
import { Box, Container, Typography, Grid, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import ProductCard from '../components/ProductCard/ProductCard';
import productsData from '../data/products.json';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../services';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category') || 'all';

    const [sortBy, setSortBy] = useState('featured');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = useMemo(() => {
        let result = [...productsData];

        // Filter by category
        if (categoryParam !== 'all') {
            result = result.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
        }

        // Filter by search term
        if (searchTerm) {
            result = result.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        // Sort
        if (sortBy === 'price-asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [categoryParam, searchTerm, sortBy]);

    const handleCategoryChange = (event) => {
        const value = event.target.value;
        if (value === 'all') {
            searchParams.delete('category');
            setSearchParams(searchParams);
        } else {
            setSearchParams({ category: value });
        }
    };

    useEffect(() => {
        document.title = 'Catálogo | Greenpaw';
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Catálogo
            </Typography>

            {/* Filters */}
            <Box sx={{ mb: 6, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TextField
                    label="Buscar"
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ minWidth: 200 }}
                />

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Categoría</InputLabel>
                    <Select
                        value={categoryParam}
                        label="Categoría"
                        onChange={handleCategoryChange}
                    >
                        <MenuItem value="all">Todas</MenuItem>
                        <MenuItem value="interiores">Interiores</MenuItem>
                        <MenuItem value="exteriores">Exteriores</MenuItem>
                        <MenuItem value="viaje">Viaje</MenuItem>
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Ordenar por</InputLabel>
                    <Select
                        value={sortBy}
                        label="Ordenar por"
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <MenuItem value="featured">Destacados</MenuItem>
                        <MenuItem value="price-asc">Precio: Menor a Mayor</MenuItem>
                        <MenuItem value="price-desc">Precio: Mayor a Menor</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Grid */}
            <Grid container spacing={4}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))
                ) : (
                    <Grid size={{ xs: 12 }}>
                        <Box sx={{ textAlign: 'center', py: 8 }}>
                            <Typography variant="h6" color="text.secondary">
                                No se encontraron productos.
                            </Typography>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default Products;
