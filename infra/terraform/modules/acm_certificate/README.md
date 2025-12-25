# ACM Certificate Module

Crea y valida automáticamente un certificado SSL/TLS en AWS Certificate Manager (ACM) usando validación DNS en Route 53.

## Características

- ✅ Certificado en us-east-1 (requisito para CloudFront)
- ✅ Validación DNS automática
- ✅ Soporta SANs (Subject Alternative Names)
- ✅ Espera validación completa antes de retornar el ARN

## Uso

```hcl
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

module "certificate" {
  source = "./modules/acm_certificate"

  providers = {
    aws.us_east_1 = aws.us_east_1
  }

  domain_name               = "greenpaw.mx"
  subject_alternative_names = ["www.greenpaw.mx"]
  zone_id                   = "Z0440699OJXI4EVAZIXF"
}
```

## Variables

| Nombre | Descripción | Tipo | Default | Requerido |
|--------|-------------|------|---------|-----------|
| `domain_name` | Dominio principal | `string` | - | ✅ |
| `subject_alternative_names` | Dominios adicionales | `list(string)` | `[]` | ❌ |
| `zone_id` | Route 53 Zone ID | `string` | - | ✅ |
| `tags` | Tags | `map(string)` | `{}` | ❌ |

## Outputs

| Nombre | Descripción |
|--------|-------------|
| `certificate_arn` | ARN del certificado validado |
| `certificate_id` | ID del certificado |
| `domain_name` | Dominio principal |
| `validation_fqdns` | FQDNs de validación |
