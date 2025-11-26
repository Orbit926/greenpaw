import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

/**
 * Campo de texto reutilizable para personalización
 * 
 * @param {Object} props
 * @param {string} props.label - Etiqueta del campo
 * @param {string} props.placeholder - Placeholder
 * @param {number} props.maxLength - Límite de caracteres (default: 20)
 * @param {string} props.value - Valor actual
 * @param {Function} props.onChange - Callback cuando cambia el valor
 * @param {boolean} props.error - Si hay error
 * @param {string} props.helperText - Texto de ayuda/error
 */
const TextPersonalizationField = ({
    label = 'Texto personalizado',
    placeholder = 'Ingresa el texto...',
    maxLength = 20,
    value = '',
    onChange,
    error = false,
    helperText = '',
}) => {
    const handleChange = (e) => {
        const newValue = e.target.value;
        // Limitar longitud en el input
        if (newValue.length <= maxLength) {
            onChange(newValue);
        }
    };

    const characterCount = value.length;
    const isNearLimit = characterCount >= maxLength * 0.8; // 80% del límite

    return (
        <Box>
            <TextField
                fullWidth
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                error={error}
                helperText={helperText}
                variant="outlined"
                inputProps={{
                    maxLength: maxLength,
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: error ? 'error.main' : 'primary.main',
                        },
                    },
                }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 0.5 }}>
                <Typography
                    variant="caption"
                    color={isNearLimit ? 'warning.main' : 'text.secondary'}
                    sx={{ fontSize: '0.75rem' }}
                >
                    {characterCount}/{maxLength} caracteres
                </Typography>
            </Box>
        </Box>
    );
};

export default TextPersonalizationField;
