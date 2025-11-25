# Configuración de Shopify

## ⚠️ Error Actual

Si ves este error:
```
Cannot read properties of undefined (reading 'checkoutCreate')
```

Significa que **no tienes configuradas las credenciales de Shopify** en tu archivo `.env`.

---

## 📋 Pasos para Configurar Shopify

### 1. Obtener Credenciales de Shopify

1. Ve a tu **Admin de Shopify**: `https://tu-tienda.myshopify.com/admin`
2. Ve a **Configuración → Apps y canales de ventas**
3. Click en **Desarrollar apps**
4. Click en **Crear una app**
5. Dale un nombre (ej: "GreenPaw Web")
6. Ve a la pestaña **Configuración de la API**

7. En **Storefront API**, click en **Configurar**
8. Activa estos permisos:
   - ✅ `unauthenticated_read_product_listings`
   - ✅ `unauthenticated_write_checkouts`
   - ✅ `unauthenticated_read_checkouts`

9. Click en **Guardar**
10. Ve a **Tokens de acceso de la API**
11. Copia el **Storefront Access Token** (empieza con algo como `shpat_...`)

### 2. Configurar el archivo `.env`

1. Crea un archivo `.env` en la raíz del proyecto (si no existe)
2. Copia este contenido y reemplaza con tus datos:

```env
# Shopify Configuration
VITE_SHOPIFY_STORE_DOMAIN=greenpaw  # Solo el nombre, sin .myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=shpat_tu_token_aqui  # Token que copiaste
VITE_SHOPIFY_VERSION=2024-01

# Activar Shopify
VITE_USE_SHOPIFY=true
```

**Ejemplo real:**
```env
VITE_SHOPIFY_STORE_DOMAIN=greenpaw
VITE_SHOPIFY_STOREFRONT_TOKEN=shpat_abc123def456ghi789
VITE_SHOPIFY_VERSION=2024-01
VITE_USE_SHOPIFY=true
```

### 3. Reiniciar el Servidor

```bash
# Detén el servidor (Ctrl+C)
# Vuelve a iniciar
npm run dev
```

---

## ✅ Verificar que Funciona

1. Ve a `/products` - Deberías ver tus productos de Shopify
2. Agrega un producto al carrito
3. Ve a `/checkout`
4. Click en "Proceder al Pago"
5. Deberías ser redirigido a: `https://greenpaw.myshopify.com/checkouts/...`

---

## 🐛 Solución de Problemas

### Error: "No se recibió respuesta de Shopify"
- ❌ Verifica que el token sea correcto
- ❌ Verifica que el dominio sea solo el nombre (sin .myshopify.com)
- ❌ Verifica que reiniciaste el servidor después de editar .env

### Error: "Productos sin variantId"
- ❌ Asegúrate de que `VITE_USE_SHOPIFY=true`
- ❌ Los productos deben venir de Shopify, no del JSON local

### Error de CORS
- ❌ Verifica que estés usando el **Storefront API**, NO el Admin API
- ❌ El Storefront Access Token debe tener permisos configurados

---

## 📝 Notas

- El **Storefront API** es público y seguro para usar en el frontend
- Nunca uses el **Admin API Token** en el frontend (es privado)
- El token `shpat_` es diferente al token `shpss_` (Admin)
- Puedes tener múltiples apps con diferentes tokens

---

## 🔄 Modo de Desarrollo (sin Shopify)

Si quieres desarrollar sin Shopify:

```env
VITE_USE_SHOPIFY=false
```

Esto usará los productos del archivo `/src/data/products.json`
