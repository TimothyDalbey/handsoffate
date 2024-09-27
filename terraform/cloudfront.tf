locals {
  s3_react_origin_id = "${var.prefix}${var.app_name}-react-${terraform.workspace}"
}

resource "aws_cloudfront_origin_access_control" "react" {
  name                              = "${var.prefix}${var.app_name}-react-${terraform.workspace}"
  description                       = "Cloudfront S3 Access"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "react" {
  origin {
    domain_name = aws_s3_bucket.react.bucket_regional_domain_name
    origin_id   = local.s3_react_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.react.id
  }
  enabled             = true
  is_ipv6_enabled     = true
  comment             = ""
  default_root_object = "index.html"
  aliases             = var.route53_hosted_zone_base_name[terraform.workspace]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.s3_react_origin_id
    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
    compress               = true
    viewer_protocol_policy = "redirect-to-https"

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.react-vr.arn
    }

  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.cloudfront_domain_cert_arn[terraform.workspace]
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1"
  }

  custom_error_response {
    error_code         = "404"
    response_code      = "200"
    response_page_path = "/index.html"
  }

}

resource "aws_cloudfront_function" "react-vr" {
  name    = "${var.prefix}${var.app_name}-vr-${terraform.workspace}"
  runtime = "cloudfront-js-1.0"
  comment = "Viewer Request Function"
  publish = true
  code    = file("${path.module}/cf-function/function.js")
}
