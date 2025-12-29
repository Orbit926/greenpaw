/*
Architecture
- S3 bucket (private) stores the SPA build artifacts.
- CloudFront distribution serves the SPA globally.
- CloudFront uses Origin Access Control (OAC) to access the bucket privately.
- CloudFront custom error responses rewrite 403/404 to /index.html (HTTP 200) to support SPA routes.
- A local file (stack-outputs.txt) is generated after apply with key outputs.

How to use
- Configure aws_region and project_name.
- Run terraform init/plan/apply from this folder.
*/

module "acm_certificate" {
  source = "./modules/acm_certificate"

  providers = {
    aws.us_east_1 = aws.us_east_1
  }

  domain_name               = "greenpaw.mx"
  subject_alternative_names = ["www.greenpaw.mx"]
  zone_id                   = "Z0440699OJXI4EVAZIXF"
  tags                      = var.tags
}

module "apex_redirect" {
  source = "./modules/cloudfront_apex_redirect"

  function_name = "${var.project_name}-apex-redirect"
  apex_domain   = "greenpaw.mx"
  www_domain    = "www.greenpaw.mx"
  redirect_type = 301
}

module "static_site" {
  source = "./modules/static_site"

  # Uses a reusable module that provisions:
  # - Private S3 bucket for SPA assets
  # - CloudFront distribution in front of S3
  # - SPA-friendly error handling (403/404 => /index.html)
  project_name = local.name_prefix
  aws_region   = var.aws_region
  tags         = var.tags

  # Custom domain configuration
  custom_domain_aliases  = ["greenpaw.mx", "www.greenpaw.mx"]
  acm_certificate_arn    = module.acm_certificate.certificate_arn
  cloudfront_function_arn = module.apex_redirect.function_arn

  depends_on = [module.acm_certificate]
}

module "cloudfront_dns" {
  source = "./modules/route53_cloudfront_alias"

  zone_id                   = "Z0440699OJXI4EVAZIXF"
  domain_names              = ["greenpaw.mx", "www.greenpaw.mx"]
  cloudfront_domain_name    = module.static_site.cloudfront_domain_name
  cloudfront_hosted_zone_id = module.static_site.cloudfront_hosted_zone_id

  depends_on = [module.static_site]
}

module "shopify_dns" {
  # ⚠️ IMPORTANTE: Si tienes registros DNS apuntando a Shopify creados MANUALMENTE,
  # debes eliminarlos ANTES de aplicar esta configuración, de lo contrario habrá conflicto.
  #
  # Dos opciones para eliminar registros manuales:
  # A) Eliminarlos manualmente en AWS Console (Route 53 → Hosted Zone → Delete records)
  # B) Importarlos temporalmente y dejar que Terraform los destruya:
  #    1. Cambia create_apex_record y create_www_record a "true" temporalmente
  #    2. Ejecuta:
  #       terraform import 'module.shopify_dns.aws_route53_record.apex[0]' Z0440699OJXI4EVAZIXF_greenpaw.mx_A
  #       terraform import 'module.shopify_dns.aws_route53_record.www[0]' Z0440699OJXI4EVAZIXF_www.greenpaw.mx_CNAME
  #    3. Vuelve a cambiar a "false" y ejecuta terraform apply (los destruirá)
  #
  # Los registros de Shopify Email (DKIM) permanecen activos y no se eliminan.

  source = "./modules/route53_shopify_records"

  zone_id              = "Z0440699OJXI4EVAZIXF"
  apex_domain          = "greenpaw.mx"
  shopify_apex_ip      = "23.227.38.65"
  shopify_cname_target = "shops.myshopify.com"
  ttl_apex             = 60
  ttl_www              = 3600

  # Apex y www DESHABILITADOS: ahora apuntan a CloudFront (ver module.cloudfront_dns arriba)
  create_apex_record = false
  create_www_record  = false

  # Shopify Email (DKIM/sender) permanece HABILITADO
  create_shopify_email_records = true
}

module "zoho_mail" {
  source = "./modules/route53_zoho_mail"

  zone_id     = "Z0440699OJXI4EVAZIXF"
  domain_name = "greenpaw.mx"

  zoho_verification_code = "zoho-verification=zb67062440.zmverify.zoho.com"
  ttl                    = 300

  create_mx_records   = true
  ttl_mx              = 300
  
  create_spf_record   = true
  spf_record          = "v=spf1 include:zohomail.com ~all"
  
  create_dkim_records = true
  dkim_records = {
    "zmail._domainkey" = "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCEt1cRVTqf+vmgDMTbjvwfJTPpRk6N7gZKmJAkT+ecEWdCeQDAm5rGkz7HU6ShL9XyJCL9nv5Oo0dRdnWrW1CnaKLNnBk5tf+fwrWG0EaKXluMq5bzGq3tixO6GG40/6Xb4dJNav46z18I7VFHKejUH1nwec3P5XsxcVfXgM7QMQIDAQAB"
  }
  ttl_dkim            = 300
}

resource "local_file" "stack_outputs" {
  # Writes key outputs to a local file in the same folder where Terraform is executed.
  filename = "${path.module}/stack-outputs.txt"

  content = <<-EOT
cloudfront_distribution_id = ${module.static_site.cloudfront_distribution_id}
cloudfront_domain_name     = ${module.static_site.cloudfront_domain_name}
s3_website_endpoint        = ${module.static_site.s3_website_endpoint}
EOT
}
