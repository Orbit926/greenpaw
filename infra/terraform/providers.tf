provider "aws" {
  region = var.aws_region
  profile = "greenpaw"

  default_tags {
    tags = var.tags
  }
}
