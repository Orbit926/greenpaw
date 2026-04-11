<div align="center">
  <h1>🌿 Greenpaw</h1>
  <p><strong>Sanitarios ecológicos de pasto natural para mascotas</strong></p>
  <p>
    <a href="https://greenpaw.mx">🌐 Sitio Web</a> •
    <a href="#características">✨ Características</a> •
    <a href="#tecnologías">🛠️ Stack Tecnológico</a> •
    <a href="#arquitectura">🏗️ Arquitectura</a>
  </p>
</div>

---

## 📋 Descripción del Proyecto

**Greenpaw** es una plataforma e-commerce completa para la venta de sanitarios ecológicos fabricados con pasto natural y plásticos reciclados. El proyecto incluye una landing page moderna, integración con Shopify para gestión de productos y pagos, y una infraestructura cloud escalable en AWS.

### 🎯 Objetivos del Proyecto

- Ofrecer una experiencia de usuario excepcional con diseño moderno y responsivo
- Integración fluida con Shopify para gestión de inventario y procesamiento de pagos
- Infraestructura cloud automatizada con Terraform
- Optimización de rendimiento y SEO
- Sistema de email corporativo con Zoho Mail

---

## ✨ Características

### 🎨 Frontend Moderno

- **Landing Page Inmersiva**: Hero section full-viewport en mobile con overlay y animaciones
- **Carrusel de Testimonios**: Sistema de reseñas con autoplay inteligente y navegación táctil
- **Diseño Responsivo**: Optimizado para mobile-first con breakpoints adaptativos
- **Animaciones Fluidas**: Implementadas con Framer Motion para transiciones suaves
- **Componentes Reutilizables**: Arquitectura modular con Material-UI

### 🛒 E-commerce

- **Integración Shopify**: API completa para productos, variantes y checkout
- **Carrito de Compras**: Sistema de carrito con persistencia y gestión de complementos
- **Personalización de Productos**: Sistema de tags para opciones personalizables
- **Proceso de Checkout**: Flujo optimizado con redirección a Shopify

### ☁️ Infraestructura Cloud

- **AWS CloudFront**: CDN global para distribución de contenido
- **S3 Static Hosting**: Hosting optimizado para SPA
- **Route 53**: Gestión de DNS con registros automatizados
- **ACM Certificates**: SSL/TLS automático para HTTPS
- **Terraform IaC**: Infraestructura como código completamente automatizada

### 📧 Email Corporativo

- **Zoho Mail**: Configuración completa con módulo Terraform
- **Registros DNS**: SPF, DKIM, MX automatizados
- **Dominio Verificado**: `info@greenpaw.mx`

---

## 🛠️ Tecnologías

### Frontend

```json
{
  "framework": "React 19",
  "build-tool": "Vite 7",
  "ui-library": "Material-UI 7",
  "animations": "Framer Motion 12",
  "carousel": "Swiper 12",
  "routing": "React Router 7",
  "icons": "MUI Icons + React Icons"
}
```

### Backend & E-commerce

- **Shopify Storefront API**: Gestión de productos y checkout
- **Shopify Admin API**: Gestión de inventario y pedidos

### Infraestructura

```hcl
# AWS Services
- CloudFront (CDN)
- S3 (Static Hosting)
- Route 53 (DNS)
- ACM (SSL/TLS Certificates)

# IaC
- Terraform 1.x
- Modular Architecture
```

### DevOps & Deployment

- **CI/CD**: Automatización de builds y deploys
- **Optimización**: Code splitting y lazy loading
- **Monitoreo**: CloudFront metrics y S3 analytics

---

## 🏗️ Arquitectura

### Estructura del Proyecto

```
greenpaw/
├── frontend/                 # Aplicación React
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── sections/        # Secciones de la landing page
│   │   ├── pages/           # Páginas de la aplicación
│   │   ├── config/          # Configuración del sitio
│   │   ├── services/        # Servicios (Shopify API)
│   │   └── utils/           # Utilidades y helpers
│   ├── public/              # Assets estáticos
│   └── vite.config.js       # Configuración de Vite
│
└── infra/                   # Infraestructura
    └── terraform/
        ├── main.tf          # Configuración principal
        └── modules/         # Módulos reutilizables
            ├── static_site/
            ├── cloudfront_dns/
            ├── acm_certificate/
            ├── apex_redirect/
            ├── route53_zoho_mail/
            └── route53_shopify_records/
```

### Flujo de Datos

```
Usuario → CloudFront CDN → S3 Static Site
                ↓
         React SPA (Frontend)
                ↓
         Shopify Storefront API
                ↓
         Checkout & Payment
```

### Optimizaciones Implementadas

#### Code Splitting
```javascript
// vite.config.js
manualChunks: {
  'react-vendor': ['react', 'react-dom', 'react-router-dom'],
  'mui-vendor': ['@mui/material', '@mui/icons-material'],
  'ui-vendor': ['framer-motion', 'swiper', 'react-icons']
}
```

#### Responsive Design
- Mobile-first approach
- Breakpoints: 0px (mobile), 600px (tablet), 900px (desktop)
- Viewport units (`100dvh`) para mobile
- Touch-enabled carousels

---

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+
- npm o yarn
- Cuenta de Shopify
- AWS Account (para infraestructura)
- Terraform 1.x

### Configuración Local

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/greenpaw.git
cd greenpaw/frontend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de Shopify

# Iniciar servidor de desarrollo
npm run dev
```

### Build de Producción

```bash
# Generar build optimizado
npm run build

# Preview del build
npm run preview
```

### Deploy de Infraestructura

```bash
cd infra/terraform

# Inicializar Terraform
terraform init

# Planear cambios
terraform plan

# Aplicar infraestructura
terraform apply
```

---

## 📊 Características Técnicas Destacadas

### Performance

- ⚡ **Vite Build Tool**: Builds ultra-rápidos con HMR
- 📦 **Code Splitting**: Chunks optimizados (< 300KB)
- 🖼️ **Lazy Loading**: Carga diferida de imágenes
- 🚀 **CDN Global**: CloudFront para latencia mínima

### UX/UI

- 📱 **Mobile-First**: Diseño optimizado para dispositivos móviles
- 🎭 **Animaciones**: Transiciones suaves con Framer Motion
- ♿ **Accesibilidad**: Componentes MUI con ARIA labels
- 🎨 **Theming**: Sistema de diseño consistente

### SEO

- 🔍 **Meta Tags**: Optimización para motores de búsqueda
- 🌐 **Sitemap**: Generación automática
- 📊 **Analytics Ready**: Preparado para Google Analytics
- 🔗 **Canonical URLs**: URLs limpias y semánticas

---

## 📝 Documentación Adicional

- [🛒 Integración con Shopify](./SHOPIFY_INTEGRATION.md)
- [🏷️ Sistema de Tags](./TAGS_SHOPIFY.md)
- [🎨 Landing Page](./LANDING_PAGE.md)
- [⚙️ Configuración](./CONFIG_USAGE_EXAMPLES.md)
- [🔄 Migración Cart API](./CART_API_MIGRATION.md)

---

## 👨‍💻 Desarrollado por

**Gabriel García Cortés**

Desarrollador Full Stack especializado en:
- ⚛️ React & Modern Frontend
- ☁️ Cloud Infrastructure (AWS)
- 🏗️ Infrastructure as Code (Terraform)
- 🛒 E-commerce Solutions

---

## 📄 Licencia

Este proyecto es privado y confidencial.

---

<div align="center">
  <p>Hecho con 💚 para Greenpaw</p>
  <p><sub>© 2026 Greenpaw. Todos los derechos reservados.</sub></p>
</div>
