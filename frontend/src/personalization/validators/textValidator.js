/**
 * Validador para campos de texto personalizado
 */

/**
 * Valida un valor de texto personalizado
 * @param {string} value - Valor a validar
 * @param {Object} options - Opciones de validación
 * @param {boolean} options.required - Si el campo es requerido
 * @param {number} options.maxLength - Longitud máxima permitida
 * @returns {string|null} Mensaje de error o null si es válido
 */
export function validateText(value, { required = true, maxLength = 20 } = {}) {
    // Validar campo requerido
    if (required && (!value || value.trim() === '')) {
        return 'Por favor ingresa el texto para personalizar.';
    }

    // Validar longitud máxima
    if (value && value.length > maxLength) {
        return `Máximo ${maxLength} caracteres.`;
    }

    // Validación exitosa
    return null;
}
