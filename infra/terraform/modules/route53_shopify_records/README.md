# Route 53 Shopify Records Module

Este módulo Terraform crea registros DNS en Route 53 para configurar un dominio con Shopify.

## Descripción

Crea dos registros DNS específicos para Shopify:
1. **A record (apex)**: Apunta el dominio raíz a la IP de Shopify
2. **CNAME record (www)**: Apunta el subdominio www a shops.myshopify.com

Ambos registros pueden habilitarse/deshabilitarse independientemente mediante flags, permitiendo flexibilidad para futuras migraciones (por ejemplo, si el apex eventualmente apunta a CloudFront).

## Características

- ✅ Registros DNS no-alias (simple routing)
- ✅ TTLs configurables por registro
- ✅ Flags para habilitar/deshabilitar cada registro
- ✅ No depende de data sources internos
- ✅ Outputs útiles para integración con otros módulos

## Requisitos

- Terraform >= 1.5.0
- AWS Provider ~> 5.0
- Hosted Zone ID existente en Route 53

## Uso

### Ejemplo básico

```hcl
module "shopify_dns" {
  source = "./modules/route53_shopify_records"

  zone_id              = "Z0440699OJXI4EVAZIXF"
  apex_domain          = "greenpaw.mx"
  shopify_apex_ip      = "23.227.38.65"
  shopify_cname_target = "shops.myshopify.com"
}
```

### Ejemplo con TTLs personalizados

```hcl
module "shopify_dns" {
  source = "./modules/route53_shopify_records"

  zone_id              = "Z0440699OJXI4EVAZIXF"
  apex_domain          = "greenpaw.mx"
  shopify_apex_ip      = "23.227.38.65"
  shopify_cname_target = "shops.myshopify.com"
  ttl_apex             = 60
  ttl_www              = 3600
}
```

### Ejemplo deshabilitando apex (para CloudFront)

```hcl
module "shopify_dns" {
  source = "./modules/route53_shopify_records"

  zone_id              = "Z0440699OJXI4EVAZIXF"
  apex_domain          = "greenpaw.mx"
  shopify_apex_ip      = "23.227.38.65"
  shopify_cname_target = "shops.myshopify.com"
  
  # Deshabilita el registro apex si ya tienes CloudFront apuntando ahí
  create_apex_record   = false
  create_www_record    = true
}
```

## Variables

| Nombre | Descripción | Tipo | Default | Requerido |
|--------|-------------|------|---------|-----------|
| `zone_id` | Route 53 Hosted Zone ID | `string` | - | ✅ |
| `apex_domain` | Dominio apex (ej: greenpaw.mx) | `string` | `"greenpaw.mx"` | ❌ |
| `shopify_apex_ip` | IP de Shopify para el A record | `string` | `"23.227.38.65"` | ❌ |
| `ttl_apex` | TTL del A record en segundos | `number` | `60` | ❌ |
| `www_subdomain` | Prefijo del subdominio www | `string` | `"www"` | ❌ |
| `shopify_cname_target` | Target del CNAME para www | `string` | `"shops.myshopify.com"` | ❌ |
| `ttl_www` | TTL del CNAME record en segundos | `number` | `3600` | ❌ |
| `create_apex_record` | Crear el registro A para apex | `bool` | `true` | ❌ |
| `create_www_record` | Crear el registro CNAME para www | `bool` | `true` | ❌ |

## Outputs

| Nombre | Descripción |
|--------|-------------|
| `apex_record_fqdn` | FQDN del registro A del apex |
| `www_record_fqdn` | FQDN del registro CNAME de www |
| `applied_targets` | Map con los targets aplicados |
| `zone_id_used` | Zone ID usado para los registros |

## Importar registros existentes

Si los registros ya existen en Route 53, impórtalos antes de ejecutar `terraform apply`:

```bash
# Formato: ZONEID_recordname_type
# Para el apex A record:
terraform import 'module.shopify_dns.aws_route53_record.apex[0]' Z0440699OJXI4EVAZIXF_greenpaw.mx_A

# Para el www CNAME record:
terraform import 'module.shopify_dns.aws_route53_record.www[0]' Z0440699OJXI4EVAZIXF_www.greenpaw.mx_CNAME
```

## Notas

- Los registros NO usan alias (son registros simples con valores explícitos)
- Si deshabilitas un registro con `create_*_record = false`, el output correspondiente será `null`
- El módulo no modifica ni consulta la Hosted Zone, solo requiere el ID
