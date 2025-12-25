/*
Architecture
- S3 bucket (private) stores the SPA build artifacts.
- CloudFront distribution serves the SPA globally.
- CloudFront uses Origin Access Control (OAC) to access the bucket privately.
- CloudFront custom error responses rewrite 403/404 to /index.html (HTTP 200) to support SPA routes.
- A local file (stack-outputs.txt) is generated after apply with key outputs.

How to use
- Configure aws_region and project_name.
- Run terraform init/plan/apply from this folder.
*/

module "static_site" {
  source = "./modules/static_site"

  # Uses a reusable module that provisions:
  # - Private S3 bucket for SPA assets
  # - CloudFront distribution in front of S3
  # - SPA-friendly error handling (403/404 => /index.html)
  project_name = local.name_prefix
  aws_region   = var.aws_region
  tags         = var.tags
}

module "shopify_dns" {
  source = "./modules/route53_shopify_records"

  zone_id              = "Z0440699OJXI4EVAZIXF"
  apex_domain          = "greenpaw.mx"
  shopify_apex_ip      = "23.227.38.65"
  shopify_cname_target = "shops.myshopify.com"
  ttl_apex             = 60
  ttl_www              = 3600
}

resource "local_file" "stack_outputs" {
  # Writes key outputs to a local file in the same folder where Terraform is executed.
  filename = "${path.module}/stack-outputs.txt"

  content = <<-EOT
cloudfront_distribution_id = ${module.static_site.cloudfront_distribution_id}
cloudfront_domain_name     = ${module.static_site.cloudfront_domain_name}
s3_website_endpoint        = ${module.static_site.s3_website_endpoint}
EOT
}
