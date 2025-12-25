variable "project_name" {
  description = "Base name used to name resources."
  type        = string
}

variable "aws_region" {
  description = "AWS region where the resources will be created."
  type        = string
}

variable "tags" {
  description = "Tags to apply to resources."
  type        = map(string)
  default     = {}
}

variable "custom_domain_aliases" {
  description = "List of custom domain names to associate with CloudFront distribution."
  type        = list(string)
  default     = []
}

variable "acm_certificate_arn" {
  description = "ARN of ACM certificate for custom domains (must be in us-east-1)."
  type        = string
  default     = null
}

variable "cloudfront_function_arn" {
  description = "ARN of CloudFront Function to associate with viewer request."
  type        = string
  default     = null
}
