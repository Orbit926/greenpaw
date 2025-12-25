provider "aws" {
  region  = var.aws_region
  profile = "greenpaw"

  default_tags {
    tags = var.tags
  }
}

provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
  profile = "greenpaw"

  default_tags {
    tags = var.tags
  }
}
