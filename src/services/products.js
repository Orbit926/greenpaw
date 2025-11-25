import { shopifyClient } from './shopify.js';

const GET_PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          tags
          images(first: 10) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
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

// Función para transformar producto de Shopify al formato de la app
function transformShopifyProduct(shopifyProduct) {
  const numericId = parseInt(shopifyProduct.id.split('/').pop());
  const variant = shopifyProduct.variants.edges[0]?.node;
  const images = shopifyProduct.images.edges.map(edge => edge.node.url);
  
  // Detectar categoría basada en el título
  let category = 'Productos';
  if (shopifyProduct.title.toLowerCase().includes('repuesto') || 
      shopifyProduct.title.toLowerCase().includes('mantenimiento')) {
    category = 'Mantenimiento';
  } else if (shopifyProduct.title.toLowerCase().includes('rueda') || 
             shopifyProduct.title.toLowerCase().includes('llanta')) {
    category = 'Accesorios';
  } else if (shopifyProduct.title.toLowerCase().includes('módulo') || 
             shopifyProduct.title.toLowerCase().includes('modulo')) {
    category = 'Módulos';
  }
  
  return {
    id: numericId,
    title: shopifyProduct.title,
    price: parseFloat(variant?.price.amount || 0),
    description: shopifyProduct.description || '',
    tags: shopifyProduct.tags || [],
    images: images.length > 0 ? images : ['https://via.placeholder.com/400'],
    variantId: variant?.id, // Necesario para agregar al carrito de Shopify
    currency: variant?.price.currencyCode || 'MXN',
    handle: shopifyProduct.handle,
    stock: 100, // Shopify Storefront API no devuelve inventario
    category: category,
    ecoScore: 95, // Valor por defecto para todos los productos
    features: [], // Shopify no tiene features en Storefront API
    sizes: ['Único'], // Valores por defecto
  };
}

export async function getProducts(first = 20) {
  const response = await shopifyClient.query(GET_PRODUCTS_QUERY, { first });
  const shopifyProducts = response.data.products.edges.map(edge => edge.node);
  return shopifyProducts.map(transformShopifyProduct);
}

export async function getProductById(id) {
  const GET_PRODUCT_QUERY = `
    query GetProduct($id: ID!) {
      product(id: $id) {
        id
        handle
        title
        description
        tags
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
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
  `;
  
  const response = await shopifyClient.query(GET_PRODUCT_QUERY, { id });
  return transformShopifyProduct(response.data.product);
}
