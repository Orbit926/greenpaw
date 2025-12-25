variable "zone_id" {
  description = "Route 53 Hosted Zone ID."
  type        = string
}

variable "domain_names" {
  description = "List of domain names to create alias records for."
  type        = list(string)
}

variable "cloudfront_domain_name" {
  description = "CloudFront distribution domain name."
  type        = string
}

variable "cloudfront_hosted_zone_id" {
  description = "CloudFront distribution hosted zone ID."
  type        = string
}
