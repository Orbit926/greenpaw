variable "zone_id" {
  description = "Route 53 Hosted Zone ID where the records will be created."
  type        = string
}

variable "apex_domain" {
  description = "Apex domain name (e.g., greenpaw.mx)."
  type        = string
  default     = "greenpaw.mx"
}

variable "shopify_apex_ip" {
  description = "IP address for the A record pointing to Shopify."
  type        = string
  default     = "23.227.38.65"
}

variable "ttl_apex" {
  description = "TTL in seconds for the apex A record."
  type        = number
  default     = 60
}

variable "www_subdomain" {
  description = "Subdomain prefix for www (e.g., www)."
  type        = string
  default     = "www"
}

variable "shopify_cname_target" {
  description = "CNAME target for www subdomain pointing to Shopify."
  type        = string
  default     = "shops.myshopify.com"
}

variable "ttl_www" {
  description = "TTL in seconds for the www CNAME record."
  type        = number
  default     = 3600
}

variable "create_apex_record" {
  description = "Flag to enable/disable creation of apex A record."
  type        = bool
  default     = true
}

variable "create_www_record" {
  description = "Flag to enable/disable creation of www CNAME record."
  type        = bool
  default     = true
}

variable "create_shopify_email_records" {
  description = "Crea los CNAME de verificación DKIM/sender para Shopify Email."
  type        = bool
  default     = true
}

variable "ttl_shopify_email" {
  description = "TTL para los registros CNAME de Shopify Email."
  type        = number
  default     = 3600
}

variable "shopify_email_cnames" {
  description = "Mapa host->target para los CNAME de Shopify Email (sin el dominio, ej: o93._domainkey)."
  type        = map(string)
  default = {
    "o93._domainkey"  = "dkim1.225ed52197a3.p262.email.myshopify.com"
    "o932._domainkey" = "dkim2.225ed52197a3.p262.email.myshopify.com"
    "o933._domainkey" = "dkim3.225ed52197a3.p262.email.myshopify.com"
    "mailero93"       = "225ed52197a3.p262.email.myshopify.com"
  }
}
