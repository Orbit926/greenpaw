# CloudFront Apex Redirect Function

CloudFront Function que redirige el dominio apex (greenpaw.mx) al subdominio www (www.greenpaw.mx).

## Características

- ✅ Función JavaScript ligera ejecutada en edge locations
- ✅ Redirección 301 (permanente) o 302 (temporal)
- ✅ Preserva la URI original en la redirección
- ✅ Latencia mínima (CloudFront Functions son más rápidas que Lambda@Edge)

## Uso

```hcl
module "apex_redirect" {
  source = "./modules/cloudfront_apex_redirect"

  function_name   = "greenpaw-apex-redirect"
  apex_domain     = "greenpaw.mx"
  www_domain      = "www.greenpaw.mx"
  redirect_type   = 301
}
```

## Variables

| Nombre | Descripción | Tipo | Default | Requerido |
|--------|-------------|------|---------|-----------|
| `function_name` | Nombre de la función | `string` | `"apex-to-www-redirect"` | ❌ |
| `apex_domain` | Dominio apex | `string` | - | ✅ |
| `www_domain` | Dominio www | `string` | - | ✅ |
| `redirect_type` | Código HTTP (301/302) | `number` | `301` | ❌ |

## Outputs

| Nombre | Descripción |
|--------|-------------|
| `function_arn` | ARN de la función |
| `function_name` | Nombre de la función |
| `function_etag` | ETag de la función |

## Comportamiento

Cuando un usuario accede a `https://greenpaw.mx/path?query=value`:
1. CloudFront ejecuta esta función en el viewer request
2. La función detecta el host `greenpaw.mx`
3. Retorna una respuesta HTTP 301/302 con `Location: https://www.greenpaw.mx/path?query=value`
4. El navegador redirige automáticamente

## Notas

- La función se ejecuta en **viewer request** (antes de acceder al cache)
- No genera costos adicionales significativos
- CloudFront Functions son más baratas y rápidas que Lambda@Edge
