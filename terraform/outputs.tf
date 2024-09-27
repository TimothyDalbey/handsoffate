output "cloudfront_distribution_id" {
    value = aws_cloudfront_distribution.react.id
}

output "s3_source_bucket" {
    value = aws_s3_bucket.react.id
}