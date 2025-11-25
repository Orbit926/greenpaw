const SHOPIFY_STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;
const SHOPIFY_STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_VERSION = import.meta.env.VITE_SHOPIFY_VERSION;

export const shopifyClient = {
  async query(query, variables = {}) {
    const response = await fetch(`https://${SHOPIFY_STORE_DOMAIN}.myshopify.com/api/${SHOPIFY_VERSION}/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Shopify API error: ${response.statusText}`);
    }

    return response.json();
  }
};