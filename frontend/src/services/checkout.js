import { shopifyClient } from './shopify.js';
import { createCart, addCartLines } from './cart.js';

export async function goToShopifyCheckout(cartItems) {
  // Validar que Shopify esté configurado
  const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;
  const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
  
  if (!SHOPIFY_TOKEN || !SHOPIFY_DOMAIN || SHOPIFY_TOKEN === 'tu-token-aqui') {
    throw new Error(
      'Shopify no está configurado. Por favor configura VITE_SHOPIFY_STOREFRONT_TOKEN y VITE_SHOPIFY_STORE_DOMAIN en tu archivo .env'
    );
  }
  
  // Validar que los productos tengan variantId (merchandiseId)
  const missingVariants = cartItems.filter(item => !item.variantId);
  if (missingVariants.length > 0) {
    console.error('Productos sin variantId:', missingVariants);
    throw new Error(
      'Algunos productos no tienen variantId. Asegúrate de que VITE_USE_SHOPIFY=true para cargar productos desde Shopify.'
    );
  }
  
  try {
    // 1. Crear carrito vacío (Cart API moderna)
    const cart = await createCart();
    
    // 2. Agregar productos del carrito local al Cart de Shopify
    // Nota: Cart API usa "merchandiseId" en lugar de "variantId"
    // También incluye "attributes" para propiedades personalizadas
    const lines = cartItems.map(item => {
      const line = {
        merchandiseId: item.variantId,
        quantity: item.quantity
      };
      
      // Si el item tiene propiedades (personalizaciones), convertirlas a attributes
      if (item.properties && Object.keys(item.properties).length > 0) {
        line.attributes = Object.entries(item.properties).map(([key, value]) => ({
          key,
          value
        }));
      }
      
      return line;
    });
    
    const updatedCart = await addCartLines(cart.id, lines);
    
    // 3. Redirigir al checkout de Shopify agregando return_to en la URL
    const returnUrl = encodeURIComponent('https://www.greenpaw.mx/success');
    window.location.href = `${updatedCart.checkoutUrl}?return_to=${returnUrl}`;
  } catch (error) {
    console.error('Error al crear checkout:', error);
    throw error;
  }
}