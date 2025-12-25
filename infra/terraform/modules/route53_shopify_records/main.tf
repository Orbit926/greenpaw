resource "aws_route53_record" "apex" {
  count = var.create_apex_record ? 1 : 0

  zone_id = var.zone_id
  name    = var.apex_domain
  type    = "A"
  ttl     = var.ttl_apex
  records = [var.shopify_apex_ip]
}

resource "aws_route53_record" "www" {
  count = var.create_www_record ? 1 : 0

  zone_id = var.zone_id
  name    = "${var.www_subdomain}.${var.apex_domain}"
  type    = "CNAME"
  ttl     = var.ttl_www
  records = [var.shopify_cname_target]
}

# DKIM / sender records (Shopify email)
resource "aws_route53_record" "shopify_email_cnames" {
  for_each = var.create_shopify_email_records ? var.shopify_email_cnames : {}

  zone_id = var.zone_id
  name    = "${each.key}.${var.apex_domain}"
  type    = "CNAME"
  ttl     = var.ttl_shopify_email
  records = [each.value]
}

