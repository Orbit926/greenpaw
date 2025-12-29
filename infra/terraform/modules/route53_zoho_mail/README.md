# Route53 Zoho Mail Module

Este módulo de Terraform gestiona los registros DNS de Route 53 necesarios para configurar Zoho Mail en un dominio.

## Características

- ✅ **Registro TXT de verificación**: Verifica la propiedad del dominio ante Zoho
- 🔒 **Flexible y escalable**: Soporta registros MX, SPF y DKIM opcionales
- 🎯 **Sin duplicados**: Diseñado para evitar conflictos con registros existentes
- 📝 **Buenas prácticas**: No añade comillas manuales (Terraform lo gestiona automáticamente)

## Uso

### Configuración mínima (solo verificación)

```hcl
module "zoho_mail" {
  source = "./modules/route53_zoho_mail"

  zone_id     = "Z0440699OJXI4EVAZIXF"
  domain_name = "greenpaw.mx"
}
```

### Configuración completa (verificación + MX + SPF)

```hcl
module "zoho_mail" {
  source = "./modules/route53_zoho_mail"

  zone_id     = "Z0440699OJXI4EVAZIXF"
  domain_name = "greenpaw.mx"

  # Verificación de dominio
  zoho_verification_code = "zoho-verification=zb67062440.zmverify.zoho.com"
  
  # Habilitar MX records para recibir correos
  create_mx_records = true
  
  # Habilitar SPF para autorizar servidores de envío
  create_spf_record = true
  spf_record        = "v=spf1 include:zoho.com ~all"
  
  # Habilitar DKIM (cuando Zoho proporcione las claves)
  create_dkim_records = true
  dkim_records = {
    "zoho._domainkey" = "v=DKIM1; k=rsa; p=MIGfMA0GCS..."
  }
}
```

## Variables de entrada

| Variable | Descripción | Tipo | Por defecto | Requerido |
|----------|-------------|------|-------------|-----------|
| `zone_id` | ID de la Hosted Zone de Route 53 | `string` | - | ✅ |
| `domain_name` | Nombre del dominio (ej: greenpaw.mx) | `string` | - | ✅ |
| `zoho_verification_code` | Código de verificación TXT de Zoho | `string` | `zoho-verification=zb67062440.zmverify.zoho.com` | ❌ |
| `ttl` | TTL para registros TXT (segundos) | `number` | `300` | ❌ |
| `create_mx_records` | Crear registros MX de Zoho | `bool` | `false` | ❌ |
| `ttl_mx` | TTL para registros MX (segundos) | `number` | `3600` | ❌ |
| `create_spf_record` | Crear registro SPF | `bool` | `false` | ❌ |
| `spf_record` | Valor del registro SPF | `string` | `v=spf1 include:zoho.com ~all` | ❌ |
| `create_dkim_records` | Crear registros DKIM | `bool` | `false` | ❌ |
| `dkim_records` | Mapa de selectores DKIM y sus valores | `map(string)` | `{}` | ❌ |
| `ttl_dkim` | TTL para registros DKIM (segundos) | `number` | `3600` | ❌ |

## Outputs

| Output | Descripción |
|--------|-------------|
| `verification_record_fqdn` | FQDN del registro TXT de verificación |
| `verification_record_value` | Valor del registro TXT de verificación |
| `mx_records_fqdn` | FQDN de los registros MX (si están habilitados) |
| `spf_record_fqdn` | FQDN del registro SPF (si está habilitado) |
| `dkim_records` | Mapa de selectores DKIM a FQDN |
| `zone_id_used` | ID de la Hosted Zone utilizada |

## Recursos creados

### Siempre creados
- `aws_route53_record.zoho_verification` - Registro TXT de verificación en el dominio raíz

### Condicionales (deshabilitados por defecto)
- `aws_route53_record.zoho_mx` - Registros MX para recibir correos
- `aws_route53_record.zoho_spf` - Registro TXT SPF para autorización de envío
- `aws_route53_record.zoho_dkim` - Registros TXT DKIM para autenticación de mensajes

## Notas importantes

1. **Registro TXT de verificación**: Se crea automáticamente en el dominio raíz (`@`)
2. **Sin comillas manuales**: Terraform gestiona automáticamente el formato correcto de los registros TXT
3. **Múltiples TXT records**: El módulo soporta múltiples registros TXT (SPF, DKIM) sin conflictos
4. **TTL recomendado**: 300 segundos para verificación, 3600 para MX/SPF/DKIM

## Flujo de implementación recomendado

1. **Fase 1 - Verificación**: Aplicar solo el registro de verificación
   ```bash
   terraform apply
   ```

2. **Fase 2 - Verificar en Zoho**: Confirmar que Zoho ha verificado el dominio

3. **Fase 3 - MX y SPF**: Habilitar `create_mx_records` y `create_spf_record`
   ```bash
   terraform apply
   ```

4. **Fase 4 - DKIM** (opcional): Configurar DKIM en Zoho y añadir las claves
   ```bash
   terraform apply
   ```

## Ejemplo de integración en main.tf

```hcl
module "zoho_mail" {
  source = "./modules/route53_zoho_mail"

  zone_id     = "Z0440699OJXI4EVAZIXF"
  domain_name = "greenpaw.mx"
  
  # Solo verificación en la primera fase
  zoho_verification_code = "zoho-verification=zb67062440.zmverify.zoho.com"
  
  # Descomentar cuando Zoho esté verificado:
  # create_mx_records = true
  # create_spf_record = true
}
```
