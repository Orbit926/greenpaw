variable "aws_region" {
  description = "AWS region where the stack will be created."
  type        = string
}

variable "project_name" {
  description = "Base name used to name AWS resources."
  type        = string
}

variable "tags" {
  description = "Tags applied to all resources via the AWS provider default_tags."
  type        = map(string)
  default     = {}
}
