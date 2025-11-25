# Sección de Complementos - Inline

## ✅ Implementación Completada y Conectada

La sección de **Complementos** ahora aparece dentro de la columna principal del producto, reemplazando la antigua sección de "Características".

**ACTUALIZACIÓN:** Los complementos ahora se cargan **dinámicamente desde Shopify** usando el contexto de productos.

---

## 📍 Ubicación

**Posición en el layout:**
```
[Título del producto]
[Rating]
[Precio]
[Descripción]
    ↓
┌─────────────────────────┐
│   COMPLEMENTOS          │  ← AQUÍ (inline)
│  ☐ [img] Producto 1     │
│  ☑ [img] Producto 2     │
│  ☐ [img] Producto 3     │
└─────────────────────────┘
    ↓
[Divider]
[Selector de cantidad]
[Botón Agregar al Carrito]
```

---

## 🎨 Características Visuales

### Card contenedor:
- Background blanco (`background.paper`)
- Border gris claro
- Padding de 24px
- Border radius 8px

### Cada item de complemento:
- **Layout horizontal**: `[checkbox] [imagen] [texto + precio]`
- **Imagen**: Avatar 50x50px, bordes redondeados
- **Checkbox**: Tamaño small, a la izquierda
- **Título**: Body2, bold, sin wrap
- **Precio**: Body2, bold, verde oscuro, con símbolo "+" (ej: +$15.99)
- **Descripción**: Caption, gris, truncada a 2 líneas
- **Interacción**:
  - Todo el item es clickeable
  - Hover effect (border verde + background más claro)
  - Seleccionado: border verde + background verde muy claro

### Resumen de precio total:
- Aparece solo cuando hay complementos seleccionados
- Background verde claro con border
- Muestra:
  - Producto principal (x cantidad)
  - Cada complemento seleccionado
  - Divider
  - **Total** en negrita

---

## 🔧 Sistema de Tags (Implementado)

### Cómo Funciona:

**1. Producto principal tiene tags normales:**
```javascript
product.tags = ["modulo-mediano", "exterior", "premium"]
```

**2. Productos complemento tienen tags con prefijo:**
```javascript
complementProduct.tags = ["complemento-modulo-mediano", "limpieza"]
```

**3. Filtrado automático:**
```javascript
const complementProducts = React.useMemo(() => {
  // Obtener tags del producto actual (sin "complemento-")
  const productTags = product.tags.filter(tag => 
    !tag.startsWith('complemento-')
  );
  // Ej: ["modulo-mediano", "exterior", "premium"]
  
  // Buscar productos con "complemento-{tag}"
  return products.filter(p => 
    p.tags?.some(tag => {
      const complementTag = tag.replace('complemento-', '');
      return productTags.includes(complementTag);
    })
  );
}, [products, product]);
```

### Ejemplo Real:

**Producto: "Módulo Mediano"**
- Tags: `["modulo-mediano", "exterior"]`

**Complementos que aparecerán:**
- "Limpiador" con tag `complemento-modulo-mediano` ✅
- "Kit Mantenimiento" con tag `complemento-exterior` ✅
- "Spray" con tag `complemento-modulo-grande` ❌

---

## 🚀 Integración Completada

### 1. Obtener `products` del contexto:

```javascript
const { getProductById, products } = useProducts();
```

### 2. Cantidad de complementos:

**IMPORTANTE:** Los complementos se agregan con la **misma cantidad** que el producto principal.

**Ejemplo:**
- Usuario selecciona: Módulo x2 + Rueditas
- Se agrega al carrito: 2 Módulos + 2 Rueditas ✅

```javascript
const handleAddToCart = () => {
  addToCart(product, quantity);
  
  selectedComplements.forEach(complementId => {
    const complement = complementProducts.find(c => c.id === complementId);
    if (complement) {
      addToCart(complement, quantity);  // ← Misma cantidad
    }
  });
};
```

### 3. Filtrar complementos por tags:

```javascript
const complementProducts = useMemo(() => {
  if (!products || !product) return [];
  
  return products
    .filter(p => 
      p.tags?.some(tag => tag.startsWith("complemento-")) &&
      p.id !== product.id
    )
    .map(p => ({
      id: p.id,
      title: p.title,
      description: p.description,
      imageUrl: p.images[0],
      price: p.price,
      variantId: p.variantId
    }));
}, [products, product]);
```

### 3. Agregar complementos al carrito:

```javascript
const handleAddToCart = () => {
  // Producto principal
  addToCart(product, quantity);
  
  // Complementos seleccionados
  selectedComplements.forEach(complementId => {
    const complement = complementProducts.find(c => c.id === complementId);
    if (complement) {
      addToCart({
        ...complement,
        images: [complement.imageUrl]
      }, 1);
    }
  });
  
  openCart();
};
```

---

## 📋 Tags en Shopify

Para que un producto sea complemento:

**Format:** `complemento-[tipo]`

**Ejemplos:**
- `complemento-limpieza`
- `complemento-mantenimiento`
- `complemento-accesorio`

**Cómo agregar en Shopify:**
1. Admin → Productos
2. Selecciona el producto
3. Sección "Tags" → Agregar `complemento-limpieza`
4. Guardar

---

## 🎯 Comportamiento Actual

- ✅ Sección se muestra solo si `complementProducts.length > 0`
- ✅ Checkboxes funcionales con estado local
- ✅ Selección múltiple permitida
- ✅ Visual feedback al seleccionar
- ❌ No conectado al carrito todavía (solo UI)

---

## 🔄 Diferencias con Implementación Anterior

### Antes (Panel Lateral):
```
[Producto] | [Complementos Panel]
```

### Ahora (Inline):
```
[Producto]
   ↓
[Complementos Card]
   ↓
[Agregar al Carrito]
```

---

## ✅ Checklist

- [x] Eliminar sección de "Características"
- [x] Agregar sección de "Complementos" inline
- [x] Componente `ComplementItem` creado
- [x] Checkboxes funcionales
- [x] Layout responsive
- [x] Conectar con `products` de ProductsContext
- [x] Filtrar por tags "complemento-{tag-producto}"
- [x] Agregar complementos al carrito
- [x] Sistema de tags implementado
- [x] Mostrar precio de cada complemento
- [x] Mostrar resumen de precio total
- [x] Complementos se agregan con misma cantidad que producto principal
- [ ] Testing con productos reales de Shopify

---

## 🔝 Scroll To Top en Navegación

**Problema:** Al cambiar de página, el scroll se mantenía en la posición anterior.

**Solución:** Componente `ScrollToTop` global que resetea el scroll en cada cambio de ruta.

### Implementación:

**Archivo:** `/src/components/ScrollToTop.jsx`
```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
```

**Integrado en:** `/src/router/AppRouter.jsx`
```javascript
<Box>
    <ScrollToTop />  {/* ← Se ejecuta en cada cambio de ruta */}
    <Navbar />
    <Routes>...</Routes>
    <Footer />
</Box>
```

✅ **Beneficios:**
- Funciona automáticamente en todas las rutas
- No se requiere código en cada página individual
- Mejora la UX al empezar desde arriba

---

## 📚 Archivos Modificados

- `src/pages/ProductDetail.jsx` - Sección de complementos inline
- `src/components/ScrollToTop.jsx` - Componente de scroll automático
- `src/router/AppRouter.jsx` - Integración de ScrollToTop

**Líneas clave:**
- L10-69: Componente `ComplementItem`
- L77: Estado `selectedComplements`
- L83-102: Mock data `complementProducts`
- L189-223: Card de complementos en el JSX
