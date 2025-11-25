import { shopifyClient } from './shopify.js';

// Crear un nuevo checkout
export async function createCheckout() {
  const CREATE_CHECKOUT_MUTATION = `
    mutation {
      checkoutCreate(input: {}) {
        checkout {
          id
          webUrl
          lineItems(first: 250) {
            edges {
              node {
                id
                title
                quantity
                variant {
                  id
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
    }
  `;
  
  const response = await shopifyClient.query(CREATE_CHECKOUT_MUTATION);
  return response.data.checkoutCreate.checkout;
}

// Agregar producto al checkout
export async function addToCheckout(checkoutId, lineItems) {
  const ADD_TO_CART_MUTATION = `
    mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
      checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
        checkout {
          id
          webUrl
          lineItems(first: 250) {
            edges {
              node {
                id
                title
                quantity
                variant {
                  id
                  price {
                    amount
                  }
                }
              }
            }
          }
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;
  
  const response = await shopifyClient.query(ADD_TO_CART_MUTATION, {
    checkoutId,
    lineItems
  });
  
  return response.data.checkoutLineItemsAdd.checkout;
}

// Actualizar cantidades
export async function updateCheckoutItems(checkoutId, lineItems) {
  const UPDATE_CART_MUTATION = `
    mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
      checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
        checkout {
          id
          lineItems(first: 250) {
            edges {
              node {
                id
                quantity
              }
            }
          }
        }
      }
    }
  `;
  
  const response = await shopifyClient.query(UPDATE_CART_MUTATION, {
    checkoutId,
    lineItems
  });
  
  return response.data.checkoutLineItemsUpdate.checkout;
}

// Remover productos
export async function removeFromCheckout(checkoutId, lineItemIds) {
  const REMOVE_FROM_CART_MUTATION = `
    mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
      checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
        checkout {
          id
          lineItems(first: 250) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  `;
  
  const response = await shopifyClient.query(REMOVE_FROM_CART_MUTATION, {
    checkoutId,
    lineItemIds
  });
  
  return response.data.checkoutLineItemsRemove.checkout;
}