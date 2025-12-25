output "certificate_arn" {
  description = "ARN of the validated ACM certificate."
  value       = aws_acm_certificate_validation.this.certificate_arn
}

output "certificate_id" {
  description = "ID of the ACM certificate."
  value       = aws_acm_certificate.this.id
}

output "domain_name" {
  description = "Primary domain name covered by the certificate."
  value       = aws_acm_certificate.this.domain_name
}

output "validation_fqdns" {
  description = "FQDNs of validation records."
  value       = [for record in aws_route53_record.validation : record.fqdn]
}
