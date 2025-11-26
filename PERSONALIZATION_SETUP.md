# Configuración de Productos para Sistema de Personalización

Este documento explica cómo configurar productos en Shopify para que funcionen correctamente con el sistema de personalización por texto.

## Producto: Plaquita Personalizable

### Tags Requeridas en Shopify

Para que una plaquita sea personalizable y se asocie correctamente como complemento, debe tener **al menos** estas tags:

```
personalizable-texto
complemento
complemento-modulo
```

#### Explicación de las Tags

1. **`personalizable-texto`** ✅ CRÍTICO
   - Esta tag activa el sistema de personalización
   - Cuando un producto con esta tag se agrega al carrito, se abre el modal de personalización
   - El sistema detecta automáticamente esta tag y genera los campos de texto necesarios

2. **`complemento`** (recomendado)
   - Marca el producto como un complemento general
   - Útil para filtrar complementos en otras partes de la aplicación

3. **`complemento-modulo`** (o `complemento-{nombre-categoria}`)
   - Asocia el complemento con productos de una categoría específica
   - En este caso, la plaquita se mostrará como complemento de productos con tag `modulo`
   - Puedes crear tags como `complemento-mascota`, `complemento-jardin`, etc.

### Ejemplo de Producto en Shopify

**Nombre del Producto**: Plaquita con Nombre para Módulo

**Descripción**:
```
Plaquita personalizable grabada con el nombre de tu mascota. 
Fabricada en plástico reciclado de alta calidad.
Dimensiones: 5cm x 2cm
```

**Precio**: $50.00

**Tags**:
```
personalizable-texto, complemento, complemento-modulo
```

**Notas importantes**:
- El tag debe ser exactamente `personalizable-texto` (sin mayúsculas, con guión)
- Las tags están separadas por comas
- No uses espacios extras antes o después de las comas

---

## Productos Principales (Módulos)

Los productos principales que puedan tener complementos personalizables deben tener tags correspondientes.

### Ejemplo: Módulo de Pasto Reciclado

**Tags**:
```
modulo, producto-principal, eco-friendly
```

**Relación con Complementos**:
- Como tiene la tag `modulo`, los productos con tag `complemento-modulo` se mostrarán como complementos disponibles
- La lógica está en `ProductDetail.jsx` líneas 112-143

---

## Configuración Actual del Sistema

### Límites de Personalización

Por defecto, el sistema tiene los siguientes límites (configurables en `personalizationEngine.js`):

```javascript
{
  maxLength: 20,        // Máximo 20 caracteres
  required: true,       // El campo es obligatorio
  key: 'Texto personalizado'  // Nombre de la property en Shopify
}
```

### Cómo Modificar los Límites

Edita `src/personalization/personalizationEngine.js`:

```javascript
if (tags.includes('personalizable-texto')) {
  configs.push({
    type: 'text',
    key: 'Texto personalizado',
    fieldComponent: 'TextPersonalizationField',
    maxLength: 30,  // <-- CAMBIA AQUÍ para más caracteres
    required: true,
    label: 'Nombre para grabar',  // <-- CAMBIA AQUÍ el label
    placeholder: 'Ej: Max, Bella, Rocky...',  // <-- CAMBIA AQUÍ el placeholder
  });
}
```

---

## Validación del Setup

### Checklist para Verificar Configuración Correcta

- [ ] Producto tiene tag `personalizable-texto`
- [ ] Producto tiene tag de complemento relacionada (ej: `complemento-modulo`)
- [ ] Producto tiene variante con precio configurado
- [ ] Producto tiene al menos una imagen
- [ ] El producto principal tiene tag correspondiente (ej: `modulo`)

### Cómo Probar

1. En el frontend, navega al detalle de un producto principal (módulo)
2. Verifica que la plaquita aparezca en la sección de "Complementos"
3. Marca el checkbox de la plaquita
4. Click en "Agregar al Carrito"
5. **Debe abrirse el modal de personalización** ✅

Si el modal NO se abre:
- Verifica que el producto tenga exactamente la tag `personalizable-texto`
- Revisa la consola del navegador por errores
- Verifica que `getPersonalizationConfigForProduct()` retorne una configuración no vacía

---

## Estructura de Properties en Shopify

Cuando un cliente confirma un texto personalizado, el carrito local guarda:

```javascript
{
  id: "plaquita-product-id",
  title: "Plaquita con Nombre",
  price: 50,
  quantity: 1,
  properties: {
    "Texto personalizado": "Firulais"  // <-- Esto se enviará a Shopify
  }
}
```

Cuando integres con Shopify Cart API, deberás enviar:

```javascript
{
  merchandiseId: "gid://shopify/ProductVariant/...",
  quantity: 1,
  attributes: [
    {
      key: "Texto personalizado",
      value: "Firulais"
    }
  ]
}
```

En las órdenes de Shopify Admin, verás:

```
Order #1001
├── Módulo Greenpaw x2
└── Plaquita con Nombre x2
    ├── Texto personalizado: Firulais
    └── Texto personalizado: Luna
```

---

## Extensión: Otros Tipos de Personalización

### Ejemplo: Personalización por Color

Si en el futuro quieres agregar productos personalizables por color:

1. **Agregar tag en Shopify**: `personalizable-color`

2. **Actualizar `personalizationEngine.js`**:
```javascript
if (tags.includes('personalizable-color')) {
  configs.push({
    type: 'color',
    key: 'Color personalizado',
    fieldComponent: 'ColorPersonalizationField',
    required: true,
    options: ['Verde', 'Azul', 'Rojo', 'Negro']
  });
}
```

3. **Crear componente `ColorPersonalizationField.jsx`**:
```jsx
// Select o RadioGroup de MUI con las opciones de color
```

4. **Actualizar `PersonalizationModal.jsx`** para renderizar el componente apropiado según el tipo

---

## FAQ

### ¿Puedo tener un producto con múltiples tipos de personalización?

Sí! El sistema soporta múltiples configuraciones. Por ejemplo, un producto con tags:
```
personalizable-texto, personalizable-color
```

Mostrará 2 campos en el modal: uno de texto y uno de color.

### ¿Cómo cambio el límite de caracteres solo para ciertos productos?

Actualmente, el límite es global (20 caracteres). Para hacerlo específico por producto, necesitarás:

1. Agregar tags como `personalizable-texto-largo` o `personalizable-texto-corto`
2. Actualizar `personalizationEngine.js` para detectar estas variaciones
3. Retornar diferentes `maxLength` según la tag

### ¿Las properties se sincronizan con Shopify automáticamente?

No todavía. Actualmente las properties se guardan solo en el carrito local (localStorage). 

Para sincronizar con Shopify:
1. Implementa el servicio de Cart API en `src/services/shopify.js`
2. Mapea las properties a `attributes` en el formato de Shopify
3. Llama al API cuando se agregue al carrito

Ver `implementation_plan.md` sección "Shopify Integration" para más detalles.

---

## Recursos

- [Shopify Cart API - Line Item Properties](https://shopify.dev/api/storefront/latest/objects/CartLine)
- [Código del Motor de Personalización](file:///Users/gabrielgarciacortes/Desktop/greenpaw/src/personalization/personalizationEngine.js)
- [Walkthrough Completo](file:///Users/gabrielgarciacortes/.gemini/antigravity/brain/ae214918-a37b-4a7c-8598-e4c5015f269e/walkthrough.md)
