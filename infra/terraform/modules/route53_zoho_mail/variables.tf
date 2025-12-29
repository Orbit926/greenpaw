variable "zone_id" {
  description = "Route 53 Hosted Zone ID where the records will be created."
  type        = string
}

variable "domain_name" {
  description = "Domain name for Zoho Mail configuration (e.g., greenpaw.mx)."
  type        = string
}

variable "zoho_verification_code" {
  description = "Zoho domain verification TXT record value (e.g., zoho-verification=zb67062440.zmverify.zoho.com)."
  type        = string
  default     = "zoho-verification=zb67062440.zmverify.zoho.com"
}

variable "ttl" {
  description = "TTL in seconds for TXT records (verification, SPF, DKIM)."
  type        = number
  default     = 300
}

variable "create_mx_records" {
  description = "Flag to enable/disable creation of MX records for Zoho Mail."
  type        = bool
  default     = false
}

variable "ttl_mx" {
  description = "TTL in seconds for MX records."
  type        = number
  default     = 300
}

variable "create_spf_record" {
  description = "Flag to enable/disable creation of SPF TXT record."
  type        = bool
  default     = false
}

variable "spf_record" {
  description = "SPF record value for Zoho Mail."
  type        = string
  default     = "v=spf1 include:zohomail.com ~all"
}

variable "create_dkim_records" {
  description = "Flag to enable/disable creation of DKIM TXT records."
  type        = bool
  default     = false
}

variable "dkim_records" {
  description = "Map of DKIM selector to DKIM record value (e.g., {'zmail._domainkey': 'v=DKIM1; k=rsa; p=...'})."
  type        = map(string)
  default     = {
    "zmail._domainkey" = "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCEt1cRVTqf+vmgDMTbjvwfJTPpRk6N7gZKmJAkT+ecEWdCeQDAm5rGkz7HU6ShL9XyJCL9nv5Oo0dRdnWrW1CnaKLNnBk5tf+fwrWGOEaKXlUhMq5bzGq3tixO6GG40/6Xb4dJNav46z18I7VFHKejUH1nwec3P5XsxcVfXgM7QMQIDAQAB"
  }
}

variable "ttl_dkim" {
  description = "TTL in seconds for DKIM records."
  type        = number
  default     = 300
}
