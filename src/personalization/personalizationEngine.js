/**
 * Motor de personalización para productos de Shopify
 * 
 * Detecta qué tipo de personalización necesita un producto basándose en sus tags
 * y retorna la configuración necesaria para renderizar los campos apropiados.
 */

/**
 * Obtiene la configuración de personalización para un producto
 * @param {Object} product - Producto con estructura { id, title, tags, ... }
 * @returns {Array} Array de objetos de configuración de personalización
 */
export function getPersonalizationConfigForProduct(product) {
    if (!product || !product.tags) {
        return [];
    }

    const tags = product.tags;
    const configs = [];

    // Detectar personalización por texto
    if (tags.includes('personalizable-texto')) {
        configs.push({
            type: 'text',
            key: 'Texto personalizado',
            fieldComponent: 'TextPersonalizationField',
            maxLength: 20,
            required: true,
            label: 'Texto personalizado',
            placeholder: 'Ej: Firulais, Luna, Max...',
        });
    }

    // Extensible para futuros tipos de personalización:
    // if (tags.includes('personalizable-color')) {
    //   configs.push({
    //     type: 'color',
    //     key: 'Color personalizado',
    //     fieldComponent: 'ColorPersonalizationField',
    //     required: true,
    //   });
    // }

    return configs;
}

/**
 * Verifica si un producto necesita personalización
 * @param {Object} product - Producto a verificar
 * @returns {boolean} true si necesita personalización
 */
export function productNeedsPersonalization(product) {
    return getPersonalizationConfigForProduct(product).length > 0;
}
