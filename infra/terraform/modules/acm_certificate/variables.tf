variable "domain_name" {
  description = "Primary domain name for the certificate."
  type        = string
}

variable "subject_alternative_names" {
  description = "Additional domain names to include in the certificate."
  type        = list(string)
  default     = []
}

variable "zone_id" {
  description = "Route 53 Hosted Zone ID for DNS validation records."
  type        = string
}

variable "tags" {
  description = "Tags to apply to the certificate."
  type        = map(string)
  default     = {}
}
