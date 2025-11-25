# Integración con Shopify

## Configuración

### 1. Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con:

```env
# Shopify Configuration
VITE_SHOPIFY_STORE_DOMAIN=tu-tienda
VITE_SHOPIFY_STOREFRONT_TOKEN=tu-token-storefront
VITE_SHOPIFY_VERSION=2024-01

# Activar Shopify (false = usa JSON local)
VITE_USE_SHOPIFY=false
```

### 2. Obtener Credenciales de Shopify

1. Ve a tu Admin de Shopify
2. Configuración → Apps y canales de ventas
3. Desarrollar apps → Crear una app
4. Configura permisos de Storefront API:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_write_checkouts`
5. Copia el **Storefront Access Token**

## Uso

### Modo JSON Local (Desarrollo)
```env
VITE_USE_SHOPIFY=false
```
Los productos se cargan desde `/src/data/products.json`

### Modo Shopify (Producción)
```env
VITE_USE_SHOPIFY=true
```
Los productos se cargan desde tu tienda de Shopify

## Transformación de Datos

Los productos de Shopify se transforman automáticamente al formato de la app:

**Shopify Response:**
```json
{
  "id": "gid://shopify/Product/7482897858700",
  "title": "Modulo Mediano",
  "variants": {
    "edges": [{ "node": { "price": { "amount": "2000.0" }}}]
  },
  "images": {
    "edges": [{ "node": { "url": "..." }}]
  }
}
```

**Formato App:**
```json
{
  "id": 7482897858700,
  "title": "Modulo Mediano",
  "price": 2000.0,
  "images": ["..."],
  "category": "Módulos",
  "variantId": "gid://shopify/ProductVariant/42040335270028"
}
```

## Categorías Auto-detectadas

- **Módulos**: Si el título incluye "módulo"
- **Mantenimiento**: Si incluye "repuesto" o "mantenimiento"
- **Accesorios**: Si incluye "rueda" o "llanta"
- **Productos**: Por defecto

## Archivos Modificados

- `src/services/products.js` - Transformación de datos
- `src/context/ProductsContext.jsx` - Gestión de estado
- `src/App.jsx` - Provider agregado

## Testing

1. **Modo Local**: Verifica que funcione con JSON
2. **Modo Shopify**: Cambia la variable y prueba con tu tienda
3. **Fallback**: Si Shopify falla, automáticamente usa JSON local
