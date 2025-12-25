output "apex_record_fqdn" {
  description = "Fully qualified domain name of the apex A record."
  value       = var.create_apex_record ? aws_route53_record.apex[0].fqdn : null
}

output "www_record_fqdn" {
  description = "Fully qualified domain name of the www CNAME record."
  value       = var.create_www_record ? aws_route53_record.www[0].fqdn : null
}

output "applied_targets" {
  description = "Map of DNS records and their target values."
  value = {
    apex_ip     = var.create_apex_record ? var.shopify_apex_ip : "not_created"
    www_cname   = var.create_www_record ? var.shopify_cname_target : "not_created"
  }
}

output "zone_id_used" {
  description = "Route 53 Hosted Zone ID used for these records."
  value       = var.zone_id
}

output "shopify_email_records" {
  value = {
    for k, r in aws_route53_record.shopify_email_cnames :
    k => r.fqdn
  }
}

