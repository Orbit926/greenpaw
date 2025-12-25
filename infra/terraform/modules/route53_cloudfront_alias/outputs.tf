output "record_fqdns" {
  description = "Map of domain names to their FQDNs."
  value = {
    for k, r in aws_route53_record.cloudfront_alias :
    k => r.fqdn
  }
}

output "record_names" {
  description = "List of created record names."
  value       = [for r in aws_route53_record.cloudfront_alias : r.name]
}
