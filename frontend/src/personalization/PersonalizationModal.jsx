import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    Typography,
    Avatar,
    Divider,
    Alert,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import TextPersonalizationField from './fields/TextPersonalizationField';
import { validateText } from './validators/textValidator';

/**
 * Modal de personalización para productos
 * 
 * @param {Object} props
 * @param {boolean} props.open - Si el modal está abierto
 * @param {Array} props.itemsToPersonalize - Items que necesitan personalización
 * @param {Function} props.onCancel - Callback para cancelar
 * @param {Function} props.onConfirm - Callback con valores de personalización
 */
const PersonalizationModal = ({
    open = false,
    itemsToPersonalize = [],
    onCancel,
    onConfirm,
}) => {
    // Estado para los valores de texto de cada item
    const [values, setValues] = useState({});

    // Estado para los errores de validación
    const [errors, setErrors] = useState({});

    // Inicializar valores cuando cambian los items
    useEffect(() => {
        if (open && itemsToPersonalize.length > 0) {
            const initialValues = {};
            const initialErrors = {};

            itemsToPersonalize.forEach((item) => {
                initialValues[item.lineId] = '';
                initialErrors[item.lineId] = '';
            });

            setValues(initialValues);
            setErrors(initialErrors);
        }
    }, [open, itemsToPersonalize]);

    // Manejar cambio de valor en un campo
    const handleValueChange = (lineId, newValue) => {
        setValues((prev) => ({
            ...prev,
            [lineId]: newValue,
        }));

        // Limpiar error al empezar a escribir
        if (errors[lineId]) {
            setErrors((prev) => ({
                ...prev,
                [lineId]: '',
            }));
        }
    };

    // Validar todos los campos
    const validateAllFields = () => {
        const newErrors = {};
        let hasErrors = false;

        itemsToPersonalize.forEach((item) => {
            const config = item.personalizationConfig[0]; // Asumimos un solo config por item por ahora
            const value = values[item.lineId] || '';

            const error = validateText(value, {
                required: config.required,
                maxLength: config.maxLength,
            });

            if (error) {
                newErrors[item.lineId] = error;
                hasErrors = true;
            }
        });

        setErrors(newErrors);
        return !hasErrors;
    };

    // Manejar confirmación
    const handleConfirm = () => {
        if (!validateAllFields()) {
            return;
        }

        // Construir array de personalizationValues
        const personalizationValues = itemsToPersonalize.map((item) => {
            const config = item.personalizationConfig[0];
            const value = values[item.lineId]?.trim() || '';
            
            // Si el campo es opcional y está vacío, no agregar la propiedad
            // Si tiene valor, agregarlo
            const properties = {};
            if (value) {
                properties[config.key] = value;
            }
            
            return {
                lineId: item.lineId,
                properties,
            };
        });

        onConfirm(personalizationValues);
    };

    // Manejar cancelación
    const handleCancel = () => {
        setValues({});
        setErrors({});
        onCancel();
    };

    if (!open || itemsToPersonalize.length === 0) {
        return null;
    }

    return (
        <Dialog
            open={open}
            onClose={handleCancel}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 3,
                },
            }}
        >
            <DialogTitle sx={{ pb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle color="primary" />
                    <Typography variant="h6" fontWeight="bold">
                        Personaliza tus productos
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Ingresa el texto que se grabará en cada producto
                </Typography>
            </DialogTitle>

            <Divider />

            <DialogContent sx={{ py: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {itemsToPersonalize.map((item, index) => {
                        const config = item.personalizationConfig[0]; // Primer config
                        const product = item.product;

                        return (
                            <Box key={item.lineId}>
                                {/* Header del producto */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                    <Avatar
                                        src={product.images?.[0]}
                                        alt={product.title}
                                        variant="rounded"
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="body1" fontWeight="bold">
                                            {product.title}
                                        </Typography>
                                        {itemsToPersonalize.length > 1 && (
                                            <Typography variant="caption" color="text.secondary">
                                                Producto {index + 1} de {itemsToPersonalize.length}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>

                                {/* Campo de personalización */}
                                <TextPersonalizationField
                                    label={config.label || 'Texto personalizado'}
                                    placeholder={config.placeholder || 'Ingresa el texto...'}
                                    maxLength={config.maxLength || 20}
                                    value={values[item.lineId] || ''}
                                    onChange={(newValue) => handleValueChange(item.lineId, newValue)}
                                    error={!!errors[item.lineId]}
                                    helperText={errors[item.lineId] || config.helpText || ''}
                                    required={config.required !== false}
                                />

                                {/* Divider entre items (excepto el último) */}
                                {index < itemsToPersonalize.length - 1 && (
                                    <Divider sx={{ mt: 3 }} />
                                )}
                            </Box>
                        );
                    })}
                </Box>

                {/* Mensaje informativo */}
                <Alert severity="info" sx={{ mt: 3 }}>
                    El texto personalizado aparecerá en tu pedido y será grabado en el producto.
                </Alert>
            </DialogContent>

            <Divider />

            <DialogActions sx={{ p: 2.5, gap: 1 }}>
                <Button
                    onClick={handleCancel}
                    variant="outlined"
                    size="large"
                    sx={{ px: 3 }}
                >
                    Cancelar
                </Button>
                <Button
                    onClick={handleConfirm}
                    variant="contained"
                    size="large"
                    sx={{ px: 3 }}
                >
                    Confirmar y agregar al carrito
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PersonalizationModal;
