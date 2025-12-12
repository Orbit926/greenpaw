output "s3_website_endpoint" {
  description = "S3 static website endpoint (note: bucket access is private when using OAC)."
  value       = module.static_site.s3_website_endpoint
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID."
  value       = module.static_site.cloudfront_distribution_id
}

output "cloudfront_domain_name" {
  description = "CloudFront domain name (default)."
  value       = module.static_site.cloudfront_domain_name
}
