# 📋 Configuración del Sitio Greenpaw

Este directorio contiene la configuración centralizada del sitio web.

## 📁 Archivo: `siteConfig.js`

Contiene toda la información de contacto, redes sociales, horarios y estadísticas del sitio.

---

## 🔧 Cómo Usar

### **1. Importar la configuración**

```javascript
import siteConfig from '../config/siteConfig';
```

### **2. Acceder a los datos**

```javascript
// Nombre de la empresa
{siteConfig.company.name}

// Email de contacto
{siteConfig.contact.email}

// WhatsApp
{siteConfig.contact.whatsapp}

// Redes sociales
{siteConfig.social.facebook}
{siteConfig.social.instagram}

// Estadísticas
{siteConfig.stats.happyCustomers}
{siteConfig.stats.ecoFriendlyPercentage}
```

---

## 📦 Estructura del Objeto

### **company**
- `name` - Nombre de la empresa
- `slogan` - Eslogan
- `description` - Descripción breve
- `founded` - Año de fundación
- `location` - Ubicación

### **contact**
- `email` - Email principal
- `phone` - Teléfono con formato
- `whatsapp` - WhatsApp (sin espacios ni guiones)
- `address` - Objeto con dirección completa

### **social**
- `facebook` - URL completa
- `instagram` - URL completa
- `twitter` - URL completa
- `tiktok` - URL completa
- `youtube` - URL completa
- `linkedin` - URL completa

### **schedule**
- `weekdays` - Horario entre semana
- `saturday` - Horario sábado
- `sunday` - Horario domingo

### **serviceArea**
- `homeService` - Configuración de servicio a domicilio
- `shipping` - Configuración de envíos

### **stats**
- `happyCustomers` - Número de clientes
- `recycledPlasticPerProduct` - Kg de plástico reciclado
- `ecoFriendlyPercentage` - Porcentaje eco-friendly
- `averageRating` - Calificación promedio
- `supportHours` - Horario de soporte

---

## 🎯 Ejemplos de Uso

### **Footer con redes sociales**

```javascript
import siteConfig from '../../config/siteConfig';

<IconButton 
    component="a" 
    href={siteConfig.social.facebook} 
    target="_blank"
>
    <Facebook />
</IconButton>
```

### **WhatsApp Link**

```javascript
<Button 
    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
    target="_blank"
>
    Contactar
</Button>
```

### **Mostrar estadísticas**

```javascript
<Typography variant="h3">
    {siteConfig.stats.happyCustomers}
</Typography>
<Typography variant="body1">
    Clientes Felices
</Typography>
```

### **Email Link**

```javascript
<Link href={`mailto:${siteConfig.contact.email}`}>
    {siteConfig.contact.email}
</Link>
```

---

## ✅ Componentes Actualizados

Los siguientes componentes ya están usando `siteConfig`:

- ✅ `/components/Footer/Footer.jsx`
  - Redes sociales
  - Información de contacto
  - Horarios
  - Copyright

- ✅ `/sections/CTASection.jsx`
  - Estadísticas de impacto

- ✅ `/sections/TestimonialsSection.jsx`
  - Trust badge con número de clientes

---

## 🔄 Cómo Actualizar

### **Cambiar redes sociales:**

1. Abre `src/config/siteConfig.js`
2. Modifica la sección `social`:

```javascript
social: {
    facebook: 'https://facebook.com/TU_PAGINA',
    instagram: 'https://instagram.com/TU_CUENTA',
    // ...
}
```

### **Cambiar email o teléfono:**

```javascript
contact: {
    email: 'nuevo@email.com',
    phone: '+52 33 XXXX XXXX',
    whatsapp: '+5233XXXXXXXX',  // Sin espacios
    // ...
}
```

### **Actualizar estadísticas:**

```javascript
stats: {
    happyCustomers: '2,000+',  // Actualiza cuando crezcas
    averageRating: 4.9,
    // ...
}
```

---

## 🚀 Ventajas

### **Centralizado:**
- ✅ Un solo lugar para actualizar datos
- ✅ No buscar en múltiples archivos

### **Consistencia:**
- ✅ Mismos datos en todo el sitio
- ✅ No hay discrepancias

### **Mantenimiento:**
- ✅ Fácil de actualizar
- ✅ Menos errores

### **Escalabilidad:**
- ✅ Agregar nuevos datos es simple
- ✅ Estructura clara y organizada

---

## 📝 Notas

- **WhatsApp:** El número debe estar sin espacios, guiones ni paréntesis
- **URLs:** Siempre incluir `https://`
- **Email:** Formato válido
- **Estadísticas:** Usar formato legible (1,500+ en vez de 1500)

---

## 🔒 Seguridad

**NO incluyas en este archivo:**
- ❌ API Keys
- ❌ Tokens de acceso
- ❌ Contraseñas
- ❌ Credenciales privadas

Para datos sensibles usa **variables de entorno** (`.env`).

---

## 💡 Tips

1. **Actualiza regularmente** las estadísticas conforme crezcas
2. **Verifica los links** antes de publicar cambios
3. **Mantén el formato** consistente
4. **Documenta** cambios importantes en git commits

---

**Última actualización:** Noviembre 2024
