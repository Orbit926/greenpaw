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
