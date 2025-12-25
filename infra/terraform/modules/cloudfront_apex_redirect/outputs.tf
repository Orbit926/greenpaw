output "function_arn" {
  description = "ARN of the CloudFront Function."
  value       = aws_cloudfront_function.apex_redirect.arn
}

output "function_name" {
  description = "Name of the CloudFront Function."
  value       = aws_cloudfront_function.apex_redirect.name
}

output "function_etag" {
  description = "ETag of the CloudFront Function."
  value       = aws_cloudfront_function.apex_redirect.etag
}
