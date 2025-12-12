// Configuración global del sitio Greenpaw
// Actualiza estos valores según tus datos reales

const siteConfig = {
    // Información de la empresa
    company: {
        name: 'Greenpaw',
        slogan: 'Solución Ecológica para Mascotas',
        description: 'Sanitarios eco-friendly fabricados con plásticos reciclados para el bienestar de tu mascota y del planeta.',
        founded: '2020',
        location: 'Guadalajara, Jalisco, México'
    },

    // Información de contacto
    contact: {
        email: 'greenpaw@gmail.com',
        phone: '+52 1 33 1845 6588',
        whatsapp: '+5213318456588', // Sin espacios ni guiones
        address: {
            street: 'Av. Ejemplo #123',
            neighborhood: 'Colonia Centro',
            city: '',
            state: '',
            zipCode: '44100',
            country: 'México'
        }
    },

    // Redes sociales
    social: {
        facebook: 'https://www.facebook.com/profile.php?id=100083410129188',
        instagram: 'https://www.instagram.com/greenpawmx',
        tiktok: 'https://www.tiktok.com/@greenpawmx',
    },

    // Horarios de atención
    schedule: {
        weekdays: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
        saturday: 'Sábado: 10:00 AM - 2:00 PM',
        sunday: 'Domingo: Cerrado'
    },

    // URLs importantes
    urls: {
        website: 'https://greenpaw.com',
        shop: 'https://greenpaw.com/products',
        blog: 'https://greenpaw.com/blog',
        support: 'https://greenpaw.com/soporte'
    },

    // Área de servicio
    serviceArea: {
        homeService: {
            enabled: true,
            area: 'Zona Metropolitana de Guadalajara',
            cities: ['Guadalajara', 'Zapopan', 'Tlaquepaque', 'Tonalá', 'Tlajomulco']
        },
        shipping: {
            enabled: true,
            coverage: 'Nacional',
            description: 'Enviamos a toda la República Mexicana'
        }
    },

    // SEO y Meta tags
    seo: {
        defaultTitle: 'Greenpaw | Solución Ecológica para Mascotas',
        titleTemplate: '%s | Greenpaw',
        description: 'Sanitarios eco-friendly para mascotas fabricados con plásticos reciclados. Pasto natural, tierra de calidad y diseño sustentable.',
        keywords: ['greenpaw', 'mascotas', 'eco-friendly', 'plástico reciclado', 'pasto para perros', 'sanitarios sustentables', 'guadalajara'],
        author: 'Greenpaw',
        ogImage: '/og-image.jpg', // Imagen para compartir en redes sociales
        twitterHandle: '@greenpaw'
    },

    // Información legal
    legal: {
        privacyPolicy: '/politica-de-privacidad',
        termsAndConditions: '/terminos-y-condiciones',
        shippingPolicy: '/politica-de-envios',
        returnPolicy: '/politica-de-devoluciones'
    },

    // Estadísticas del sitio
    stats: {
        happyCustomers: '1,500+',
        recycledPlasticPerProduct: '2kg+',
        ecoFriendlyPercentage: '100%',
        newPlasticPercentage: '0%',
        averageRating: 5.0,
        supportHours: '24/7'
    }
};

export default siteConfig;
