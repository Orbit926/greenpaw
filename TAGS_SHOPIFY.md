# Configuración de Tags en Shopify

## 🎯 Sistema de Complementos por Tags

Los complementos se relacionan automáticamente con los productos usando un sistema de tags.

---

## 📝 Formato de Tags

### Producto Principal
```
Tags: modulo-mediano, exterior, premium
```

### Producto Complemento
```
Tags: complemento-modulo-mediano, limpieza
```

**Regla:** Un complemento aparecerá si tiene `complemento-{tag}` donde `{tag}` es cualquier tag del producto actual.

---

## 🛠️ Cómo Configurar en Shopify

### Paso 1: Identificar el Producto Principal

1. Ve a **Admin de Shopify** → **Productos**
2. Selecciona el producto principal (ej: "Módulo Mediano")
3. Revisa sus **Tags actuales**
4. Identifica el tag principal (ej: `modulo-mediano`)

### Paso 2: Agregar Tags a los Complementos

1. Ve al producto complemento (ej: "Limpiador Ecológico")
2. En la sección **Tags**, agrega: `complemento-modulo-mediano`
3. Guarda el producto

### Paso 3: Verificar

1. Ve a tu app en desarrollo
2. Abre el producto principal
3. Verifica que el complemento aparezca en la sección de complementos

---

## 📊 Ejemplos Reales

### Ejemplo 1: Módulos

**Producto: "Módulo Mediano"**
```
Tags: modulo-mediano, exterior
```

**Complementos:**
- "Limpiador Especializado" → `complemento-modulo-mediano` ✅
- "Kit de Mantenimiento" → `complemento-modulo-mediano` ✅
- "Ruedas Extra" → `complemento-exterior` ✅
- "Spray Neutralizador" → `complemento-modulo-grande` ❌

### Ejemplo 2: Accesorios

**Producto: "Ruedas Premium"**
```
Tags: ruedas, accesorio
```

**Complementos:**
- "Lubricante para Ruedas" → `complemento-ruedas` ✅
- "Kit de Instalación" → `complemento-accesorio` ✅
- "Limpiador" → `complemento-modulo-mediano` ❌

---

## 🔄 Lógica de Filtrado

```javascript
// El sistema automáticamente:
1. Toma los tags del producto actual (sin "complemento-")
   → ["modulo-mediano", "exterior"]

2. Busca productos con tags que empiecen con "complemento-"
   → "complemento-modulo-mediano"
   → "complemento-exterior"

3. Extrae el tag sin el prefijo
   → "modulo-mediano"
   → "exterior"

4. Compara con los tags del producto actual
   → ✅ "modulo-mediano" está en la lista
   → ✅ "exterior" está en la lista
```

---

## ⚡ Tips y Mejores Prácticas

### 1. Usa tags descriptivos
```
✅ modulo-mediano
✅ exterior-resistente
✅ premium-eco

❌ m1
❌ prod123
❌ test
```

### 2. Mantén consistencia
```
✅ modulo-mediano → complemento-modulo-mediano
✅ exterior → complemento-exterior

❌ modulo-mediano → complemento-modulomediano
❌ exterior → complemento-ext
```

### 3. Un complemento puede tener múltiples tags
```
Tags: complemento-modulo-mediano, complemento-modulo-grande, limpieza

Aparecerá para:
- Productos con tag "modulo-mediano"
- Productos con tag "modulo-grande"
```

### 4. Productos pueden tener múltiples complementos
```
Producto: modulo-mediano, exterior, premium

Complementos que aparecerán:
- Todos con "complemento-modulo-mediano"
- Todos con "complemento-exterior"
- Todos con "complemento-premium"
```

---

## 🎨 Estructura Recomendada

### Categorías de Productos

```
modulos/
  - modulo-pequeño
  - modulo-mediano
  - modulo-grande

accesorios/
  - ruedas
  - bases
  - soportes

mantenimiento/
  - limpieza
  - reparacion
```

### Categorías de Complementos

```
complementos/
  - complemento-modulo-pequeño
  - complemento-modulo-mediano
  - complemento-modulo-grande
  - complemento-ruedas
  - complemento-limpieza
```

---

## ✅ Checklist de Configuración

Para cada producto principal:
- [ ] Identificar tags principales
- [ ] Crear/identificar productos complemento
- [ ] Agregar tags `complemento-{tag}` a los complementos
- [ ] Verificar en la app que aparezcan correctamente
- [ ] Probar agregar al carrito

---

## 🧪 Testing

### Verificar en Desarrollo:

1. **Sin complementos:**
   - Producto sin tags → No muestra sección
   - Producto con tags pero sin complementos → No muestra sección

2. **Con complementos:**
   - Producto con tag `modulo-mediano`
   - Complemento con tag `complemento-modulo-mediano`
   - Resultado: Complemento aparece ✅

3. **Agregar al carrito:**
   - Seleccionar complemento
   - Click "Agregar al Carrito"
   - Verificar que ambos productos estén en el carrito

---

## 🐛 Troubleshooting

### Complementos no aparecen

**1. Verificar tags del producto:**
```javascript
console.log('Product tags:', product.tags);
// Debe mostrar: ["modulo-mediano", "exterior"]
```

**2. Verificar tags del complemento:**
```javascript
console.log('Complement tags:', complementProduct.tags);
// Debe mostrar: ["complemento-modulo-mediano", "limpieza"]
```

**3. Verificar VITE_USE_SHOPIFY:**
```env
VITE_USE_SHOPIFY=true  # Debe estar en true
```

### Complementos incorrectos aparecen

- Revisa que los tags del complemento coincidan exactamente
- Verifica que no haya typos en los tags
- Asegúrate de usar el prefijo `complemento-` correctamente

---

## 📚 Recursos

- Archivo: `src/pages/ProductDetail.jsx` (líneas 87-119)
- Documentación: `COMPLEMENTOS_INLINE.md`
- Shopify Admin: Tags management
