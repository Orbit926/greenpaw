# Migración de Checkout API → Cart API

## 🔄 Cambios Realizados

### ❌ API Viejo (Deprecado)
```graphql
# ANTES - checkoutCreate
mutation {
  checkoutCreate(input: {}) {
    checkout {
      id
      webUrl
      lineItems { ... }
    }
  }
}

# ANTES - checkoutLineItemsAdd
mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
  checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
    checkout { ... }
  }
}
```

### ✅ API Nuevo (2024-2025)
```graphql
# AHORA - cartCreate
mutation {
  cartCreate(input: {}) {
    cart {
      id
      checkoutUrl
      lines { ... }
    }
  }
}

# AHORA - cartLinesAdd
mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart { ... }
  }
}
```

---

## 📊 Tabla de Equivalencias

| Concepto | API Viejo | Cart API |
|----------|-----------|----------|
| **Crear** | `checkoutCreate` | `cartCreate` |
| **Agregar** | `checkoutLineItemsAdd` | `cartLinesAdd` |
| **Actualizar** | `checkoutLineItemsUpdate` | `cartLinesUpdate` |
| **Remover** | `checkoutLineItemsRemove` | `cartLinesRemove` |
| **ID** | `checkoutId` | `cartId` |
| **Items** | `lineItems` | `lines` |
| **Producto ID** | `variantId` | `merchandiseId` |
| **URL** | `webUrl` | `checkoutUrl` |
| **Errores** | `checkoutUserErrors` | `userErrors` |

---

## 🔧 Cambios en el Código

### `services/cart.js`

**Funciones Renombradas:**
- ❌ `createCheckout()` → ✅ `createCart()`
- ❌ `addToCheckout()` → ✅ `addCartLines()`
- ❌ `updateCheckoutItems()` → ✅ `updateCartLines()`
- ❌ `removeFromCheckout()` → ✅ `removeCartLines()`

**Cambios en Parámetros:**
```javascript
// ANTES
addToCheckout(checkoutId, lineItems)
lineItems = [{ variantId: "...", quantity: 1 }]

// AHORA
addCartLines(cartId, lines)
lines = [{ merchandiseId: "...", quantity: 1 }]
```

### `services/checkout.js`

**Cambios en goToShopifyCheckout():**
```javascript
// ANTES
const checkout = await createCheckout();
const lineItems = cartItems.map(item => ({
  variantId: item.variantId,
  quantity: item.quantity
}));
const updatedCheckout = await addToCheckout(checkout.id, lineItems);
window.location.href = updatedCheckout.webUrl;

// AHORA
const cart = await createCart();
const lines = cartItems.map(item => ({
  merchandiseId: item.variantId,
  quantity: item.quantity
}));
const updatedCart = await addCartLines(cart.id, lines);
window.location.href = updatedCart.checkoutUrl;
```

---

## ⚠️ Importante

### Estructura de Respuesta Diferente

**API Viejo:**
```json
{
  "checkout": {
    "id": "gid://shopify/Checkout/...",
    "webUrl": "https://...",
    "lineItems": {
      "edges": [
        {
          "node": {
            "variant": { "id": "..." }
          }
        }
      ]
    }
  }
}
```

**Cart API:**
```json
{
  "cart": {
    "id": "gid://shopify/Cart/...",
    "checkoutUrl": "https://...",
    "lines": {
      "edges": [
        {
          "node": {
            "merchandise": { "id": "..." }
          }
        }
      ]
    }
  }
}
```

---

## ✅ Beneficios del Cart API

1. **Más moderno** - Soportado hasta 2025+
2. **Mejor rendimiento** - Optimizado para casos de uso modernos
3. **Más flexible** - Soporta subscripciones y bundles
4. **Mejor manejo de errores** - `userErrors` más descriptivos
5. **Compatible con Shopify Functions** - Permite descuentos personalizados

---

## 📚 Referencias

- [Shopify Cart API Docs](https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate)
- [Migration Guide](https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api/cart)
