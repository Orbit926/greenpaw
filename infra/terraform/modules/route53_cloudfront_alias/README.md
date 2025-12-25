# Route 53 CloudFront Alias Records Module

Crea registros ALIAS en Route 53 apuntando a una distribución de CloudFront.

## Características

- ✅ Alias records (no cobran por consultas DNS)
- ✅ Soporte para múltiples dominios
- ✅ Compatible con apex y subdominios

## Uso

```hcl
module "dns_alias" {
  source = "./modules/route53_cloudfront_alias"

  zone_id                   = "Z0440699OJXI4EVAZIXF"
  domain_names              = ["greenpaw.mx", "www.greenpaw.mx"]
  cloudfront_domain_name    = module.static_site.cloudfront_domain_name
  cloudfront_hosted_zone_id = module.static_site.cloudfront_hosted_zone_id
}
```

## Variables

| Nombre | Descripción | Tipo | Requerido |
|--------|-------------|------|-----------|
| `zone_id` | Route 53 Zone ID | `string` | ✅ |
| `domain_names` | Lista de dominios | `list(string)` | ✅ |
| `cloudfront_domain_name` | Domain name de CloudFront | `string` | ✅ |
| `cloudfront_hosted_zone_id` | Zone ID de CloudFront | `string` | ✅ |

## Outputs

| Nombre | Descripción |
|--------|-------------|
| `record_fqdns` | Map de dominios a FQDNs |
| `record_names` | Lista de nombres creados |
