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
          images(first: 1) {
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

export async function getProducts(first = 20) {
  const response = await shopifyClient.query(GET_PRODUCTS_QUERY, { first });
  return response.data.products.edges.map(edge => edge.node);
}

export async function getProductById(id) {
  const GET_PRODUCT_QUERY = `
    query GetProduct($id: ID!) {
      product(id: $id) {
        id
        handle
        title
        description
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
  return response.data.product;
}
