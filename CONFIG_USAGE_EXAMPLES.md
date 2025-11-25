# 🎯 Ejemplos de Uso de siteConfig

Guía completa de cómo usar la configuración centralizada en diferentes partes del sitio.

---

## 📍 Ubicación del Archivo

```
/src/config/siteConfig.js
```

---

## 🔥 Ejemplos Prácticos

### **1. Footer con Redes Sociales**

```javascript
import siteConfig from '../../config/siteConfig';
import { Facebook, Instagram, WhatsApp, YouTube } from '@mui/icons-material';

// En el JSX
<Box>
    <IconButton 
        component="a" 
        href={siteConfig.social.facebook} 
        target="_blank"
        rel="noopener noreferrer"
    >
        <Facebook />
    </IconButton>
    
    <IconButton 
        component="a" 
        href={siteConfig.social.instagram} 
        target="_blank"
        rel="noopener noreferrer"
    >
        <Instagram />
    </IconButton>
    
    <IconButton 
        component="a" 
        href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
        target="_blank"
        rel="noopener noreferrer"
    >
        <WhatsApp />
    </IconButton>
</Box>
```

---

### **2. Botón de Contacto por WhatsApp**

```javascript
import siteConfig from '../config/siteConfig';

<Button
    variant="contained"
    color="success"
    startIcon={<WhatsApp />}
    component="a"
    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hola, me interesa conocer más sobre Greenpaw`}
    target="_blank"
    rel="noopener noreferrer"
>
    Contactar por WhatsApp
</Button>
```

---

### **3. Información de Contacto**

```javascript
import siteConfig from '../config/siteConfig';

<Box>
    <Typography variant="h6">Contáctanos</Typography>
    
    <Typography variant="body2">
        📧 Email: 
        <Link href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
        </Link>
    </Typography>
    
    <Typography variant="body2">
        📱 Teléfono: 
        <Link href={`tel:${siteConfig.contact.phone}`}>
            {siteConfig.contact.phone}
        </Link>
    </Typography>
    
    <Typography variant="body2">
        📍 Ubicación: {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
    </Typography>
</Box>
```

---

### **4. Horarios de Atención**

```javascript
import siteConfig from '../config/siteConfig';

<Card>
    <CardContent>
        <Typography variant="h6" gutterBottom>
            Horarios de Atención
        </Typography>
        
        <Typography variant="body2">
            {siteConfig.schedule.weekdays}
        </Typography>
        
        <Typography variant="body2">
            {siteConfig.schedule.saturday}
        </Typography>
        
        <Typography variant="body2">
            {siteConfig.schedule.sunday}
        </Typography>
    </CardContent>
</Card>
```

---

### **5. Estadísticas de Impacto**

```javascript
import siteConfig from '../config/siteConfig';

<Grid container spacing={3}>
    <Grid item xs={6} md={3}>
        <Typography variant="h3" fontWeight="bold">
            {siteConfig.stats.ecoFriendlyPercentage}
        </Typography>
        <Typography variant="body2">
            Eco-Friendly
        </Typography>
    </Grid>
    
    <Grid item xs={6} md={3}>
        <Typography variant="h3" fontWeight="bold">
            {siteConfig.stats.happyCustomers}
        </Typography>
        <Typography variant="body2">
            Clientes Felices
        </Typography>
    </Grid>
    
    <Grid item xs={6} md={3}>
        <Typography variant="h3" fontWeight="bold">
            {siteConfig.stats.recycledPlasticPerProduct}
        </Typography>
        <Typography variant="body2">
            Plástico Reciclado por Producto
        </Typography>
    </Grid>
    
    <Grid item xs={6} md={3}>
        <Typography variant="h3" fontWeight="bold">
            {siteConfig.stats.averageRating}
        </Typography>
        <Typography variant="body2">
            Calificación Promedio
        </Typography>
    </Grid>
</Grid>
```

---

### **6. Meta Tags para SEO**

```javascript
import { Helmet } from 'react-helmet-async';
import siteConfig from '../config/siteConfig';

<Helmet>
    <title>{siteConfig.seo.defaultTitle}</title>
    <meta name="description" content={siteConfig.seo.description} />
    <meta name="keywords" content={siteConfig.seo.keywords.join(', ')} />
    <meta name="author" content={siteConfig.seo.author} />
    
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={siteConfig.seo.defaultTitle} />
    <meta property="og:description" content={siteConfig.seo.description} />
    <meta property="og:image" content={siteConfig.seo.ogImage} />
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={siteConfig.seo.defaultTitle} />
    <meta name="twitter:description" content={siteConfig.seo.description} />
    <meta name="twitter:creator" content={siteConfig.seo.twitterHandle} />
</Helmet>
```

---

### **7. Área de Servicio**

```javascript
import siteConfig from '../config/siteConfig';

<Box>
    {siteConfig.serviceArea.homeService.enabled && (
        <Card>
            <CardContent>
                <Typography variant="h6">
                    Servicio a Domicilio
                </Typography>
                <Typography variant="body2">
                    Cobertura: {siteConfig.serviceArea.homeService.area}
                </Typography>
                <Typography variant="caption">
                    Ciudades: {siteConfig.serviceArea.homeService.cities.join(', ')}
                </Typography>
            </CardContent>
        </Card>
    )}
    
    {siteConfig.serviceArea.shipping.enabled && (
        <Card>
            <CardContent>
                <Typography variant="h6">
                    Envíos
                </Typography>
                <Typography variant="body2">
                    {siteConfig.serviceArea.shipping.description}
                </Typography>
            </CardContent>
        </Card>
    )}
</Box>
```

---

### **8. Copyright en Footer**

```javascript
import siteConfig from '../config/siteConfig';

<Typography variant="body2" sx={{ opacity: 0.6 }}>
    © {new Date().getFullYear()} {siteConfig.company.name}. Todos los derechos reservados.
</Typography>
```

---

### **9. Botón "Compartir en Redes Sociales"**

```javascript
import siteConfig from '../config/siteConfig';

const shareUrl = window.location.href;
const shareText = `¡Mira este producto en ${siteConfig.company.name}!`;

<Box>
    <IconButton
        component="a"
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
    >
        <Facebook />
    </IconButton>
    
    <IconButton
        component="a"
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
        target="_blank"
    >
        <Twitter />
    </IconButton>
    
    <IconButton
        component="a"
        href={`https://wa.me/?text=${shareText} ${shareUrl}`}
        target="_blank"
    >
        <WhatsApp />
    </IconButton>
</Box>
```

---

### **10. Dirección Completa Formateada**

```javascript
import siteConfig from '../config/siteConfig';

const { street, neighborhood, city, state, zipCode, country } = siteConfig.contact.address;

<Typography variant="body1">
    {street}<br />
    {neighborhood}<br />
    {city}, {state} {zipCode}<br />
    {country}
</Typography>

// O más compacto:
<Typography variant="body2">
    {`${street}, ${neighborhood}, ${city}, ${state} ${zipCode}, ${country}`}
</Typography>
```

---

## 🎨 Usos Avanzados

### **Validación Condicional**

```javascript
import siteConfig from '../config/siteConfig';

// Solo mostrar WhatsApp si está configurado
{siteConfig.contact.whatsapp && (
    <IconButton href={`https://wa.me/${siteConfig.contact.whatsapp}`}>
        <WhatsApp />
    </IconButton>
)}

// Solo mostrar servicio a domicilio si está habilitado
{siteConfig.serviceArea.homeService.enabled && (
    <ServiceCard {...siteConfig.serviceArea.homeService} />
)}
```

---

### **Construcción Dinámica de Links**

```javascript
import siteConfig from '../config/siteConfig';

const socialLinks = Object.entries(siteConfig.social).map(([platform, url]) => ({
    platform,
    url,
    icon: getSocialIcon(platform) // Función helper
}));

// Renderizar dinámicamente
{socialLinks.map(({ platform, url, icon }) => (
    <IconButton key={platform} href={url} target="_blank">
        {icon}
    </IconButton>
))}
```

---

### **Formulario de Contacto Pre-llenado**

```javascript
import siteConfig from '../config/siteConfig';

const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Hola ${siteConfig.company.name}, me gustaría obtener más información sobre...`
});
```

---

## ✅ Checklist de Actualización

Cuando actualices `siteConfig.js`, verifica estos componentes:

- [ ] Footer
- [ ] Navbar (si tiene contacto)
- [ ] Landing Page (Hero, CTA, Stats)
- [ ] About Page
- [ ] Contact Page
- [ ] Meta Tags (SEO)
- [ ] Shared Components (Social Buttons, Contact Info)

---

## 🚀 Tips Pro

1. **Crear Helpers:**
   ```javascript
   // utils/socialHelpers.js
   import siteConfig from '../config/siteConfig';
   
   export const getWhatsAppLink = (message = '') => 
       `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
   
   export const getEmailLink = (subject = '', body = '') => 
       `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
   ```

2. **TypeScript Support:**
   Si usas TypeScript, crea un archivo `siteConfig.d.ts` con los tipos.

3. **Validación:**
   Valida URLs y formatos antes de usar en producción.

---

**¡Ahora todo el sitio usa configuración centralizada!** 🎉
