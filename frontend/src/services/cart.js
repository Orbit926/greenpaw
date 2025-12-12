import { shopifyClient } from './shopify.js';

// Crear un nuevo carrito (Cart API moderna)
export async function createCart() {
  const CREATE_CART_MUTATION = `
    mutation {
      cartCreate(input: {}) {
        cart {
          id
          checkoutUrl
          lines(first: 250) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    product {
                      title
                    }
                  }
                }
              }
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  `;
  
  const response = await shopifyClient.query(CREATE_CART_MUTATION);
  
  // Validar respuesta
  if (!response || !response.data) {
    console.error('Respuesta de Shopify:', response);
    throw new Error('No se recibió respuesta de Shopify. Verifica tus credenciales en .env');
  }
  
  // Verificar errores de Shopify
  if (response.data.cartCreate?.userErrors?.length > 0) {
    const errors = response.data.cartCreate.userErrors;
    console.error('Errores de Shopify:', errors);
    throw new Error(`Error de Shopify: ${errors[0].message}`);
  }
  
  return response.data.cartCreate.cart;
}

// Agregar productos al carrito (Cart API moderna)
export async function addCartLines(cartId, lines) {
  const ADD_LINES_MUTATION = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 250) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    product {
                      title
                    }
                  }
                }
              }
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  `;
  
  const response = await shopifyClient.query(ADD_LINES_MUTATION, {
    cartId,
    lines
  });
  
  // Verificar errores
  if (response.data.cartLinesAdd?.userErrors?.length > 0) {
    const errors = response.data.cartLinesAdd.userErrors;
    console.error('Errores al agregar líneas:', errors);
    throw new Error(`Error de Shopify: ${errors[0].message}`);
  }
  
  return response.data.cartLinesAdd.cart;
}

// Actualizar cantidades en el carrito (Cart API moderna)
export async function updateCartLines(cartId, lines) {
  const UPDATE_LINES_MUTATION = `
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 250) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  `;
  
  const response = await shopifyClient.query(UPDATE_LINES_MUTATION, {
    cartId,
    lines
  });
  
  // Verificar errores
  if (response.data.cartLinesUpdate?.userErrors?.length > 0) {
    const errors = response.data.cartLinesUpdate.userErrors;
    console.error('Errores al actualizar líneas:', errors);
    throw new Error(`Error de Shopify: ${errors[0].message}`);
  }
  
  return response.data.cartLinesUpdate.cart;
}

// Remover productos del carrito (Cart API moderna)
export async function removeCartLines(cartId, lineIds) {
  const REMOVE_LINES_MUTATION = `
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
          checkoutUrl
          lines(first: 250) {
            edges {
              node {
                id
                quantity
              }
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  `;
  
  const response = await shopifyClient.query(REMOVE_LINES_MUTATION, {
    cartId,
    lineIds
  });
  
  // Verificar errores
  if (response.data.cartLinesRemove?.userErrors?.length > 0) {
    const errors = response.data.cartLinesRemove.userErrors;
    console.error('Errores al remover líneas:', errors);
    throw new Error(`Error de Shopify: ${errors[0].message}`);
  }
  
  return response.data.cartLinesRemove.cart;
}