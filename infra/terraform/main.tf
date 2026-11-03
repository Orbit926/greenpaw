/* Route 53 records for Shopify and email. */

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

module "cloudfront_dns" {
  source = "./modules/route53_cloudfront_alias"

  zone_id                   = "Z0440699OJXI4EVAZIXF"
  domain_names              = []
  cloudfront_domain_name    = "d3s585os3pitlt.cloudfront.net"
  cloudfront_hosted_zone_id = "Z2FDTNDATAQYW2"

}

module "shopify_dns" {
  source = "./modules/route53_shopify_records"

  zone_id              = "Z0440699OJXI4EVAZIXF"
  apex_domain          = "greenpaw.mx"
  shopify_apex_ip      = "23.227.38.65"
  shopify_cname_target = "shops.myshopify.com"
  ttl_apex             = 60
  ttl_www              = 3600

  create_apex_record = true
  create_www_record  = true

  # Shopify Email (DKIM/sender) permanece HABILITADO
  create_shopify_email_records = true

  # El A de www debe eliminarse antes de crear el CNAME del mismo nombre.
  depends_on = [module.cloudfront_dns]
}

# Conserva la identidad del registro A del apex para actualizar el alias existente.
moved {
  from = module.cloudfront_dns.aws_route53_record.cloudfront_alias["greenpaw.mx"]
  to   = module.shopify_dns.aws_route53_record.apex[0]
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
