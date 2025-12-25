variable "function_name" {
  description = "Name of the CloudFront Function."
  type        = string
  default     = "apex-to-www-redirect"
}

variable "apex_domain" {
  description = "Apex domain to redirect from (e.g., greenpaw.mx)."
  type        = string
}

variable "www_domain" {
  description = "WWW domain to redirect to (e.g., www.greenpaw.mx)."
  type        = string
}

variable "redirect_type" {
  description = "HTTP redirect status code (301 for permanent, 302 for temporary)."
  type        = number
  default     = 301

  validation {
    condition     = contains([301, 302], var.redirect_type)
    error_message = "redirect_type must be either 301 or 302."
  }
}
