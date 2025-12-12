output "s3_bucket_name" {
  description = "Name of the S3 bucket hosting the SPA assets."
  value       = aws_s3_bucket.site.bucket
}

output "s3_website_endpoint" {
  description = "S3 website endpoint (configured for index/error documents)."
  value       = aws_s3_bucket_website_configuration.site.website_endpoint
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID."
  value       = aws_cloudfront_distribution.this.id
}

output "cloudfront_domain_name" {
  description = "CloudFront domain name."
  value       = aws_cloudfront_distribution.this.domain_name
}
