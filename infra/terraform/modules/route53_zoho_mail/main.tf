resource "aws_route53_record" "zoho_root_txt" {
  zone_id = var.zone_id
  name    = var.domain_name
  type    = "TXT"
  ttl     = 300

  records = [
    var.zoho_verification_code,
    var.spf_record
  ]
}

resource "aws_route53_record" "zoho_mx" {
  count = var.create_mx_records ? 1 : 0

  zone_id = var.zone_id
  name    = var.domain_name
  type    = "MX"
  ttl     = var.ttl_mx

  records = [
    "10 mx.zoho.com",
    "20 mx2.zoho.com",
    "50 mx3.zoho.com"
  ]
}

resource "aws_route53_record" "zoho_dkim" {
  for_each = var.create_dkim_records ? var.dkim_records : {}

  zone_id = var.zone_id
  name    = "${each.key}.${var.domain_name}"
  type    = "TXT"
  ttl     = var.ttl_dkim

  records = [each.value]
}
