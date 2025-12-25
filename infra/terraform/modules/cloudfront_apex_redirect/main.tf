resource "aws_cloudfront_function" "apex_redirect" {
  name    = var.function_name
  runtime = "cloudfront-js-2.0"
  comment = "Redirects apex domain (${var.apex_domain}) to www subdomain (${var.www_domain})"
  publish = true
  code    = <<-EOT
function handler(event) {
    var request = event.request;
    var host = request.headers.host.value;
    
    if (host === '${var.apex_domain}') {
        return {
            statusCode: ${var.redirect_type},
            statusDescription: '${var.redirect_type == 301 ? "Moved Permanently" : "Found"}',
            headers: {
                'location': { value: 'https://${var.www_domain}' + request.uri }
            }
        };
    }
    
    return request;
}
EOT
}
