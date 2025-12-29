output "root_txt_record_fqdn" {
  description = "Fully qualified domain name of the root TXT record (verification + SPF)."
  value       = aws_route53_record.zoho_root_txt.fqdn
}

output "root_txt_record_values" {
  description = "Values of the root TXT record."
  value       = aws_route53_record.zoho_root_txt.records
}

output "mx_records_fqdn" {
  description = "Fully qualified domain name of the MX records."
  value       = var.create_mx_records ? aws_route53_record.zoho_mx[0].fqdn : null
}

output "dkim_records" {
  description = "Map of DKIM selector to FQDN."
  value = {
    for k, r in aws_route53_record.zoho_dkim :
    k => r.fqdn
  }
}

output "zone_id_used" {
  description = "Route 53 Hosted Zone ID used for these records."
  value       = var.zone_id
}
