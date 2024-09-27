locals {
  react_bucket_name = "${var.prefix}${var.app_name}-react-${terraform.workspace}"
}

data "aws_iam_policy_document" "react_s3_policy" {
  statement {
    actions   = ["s3:Get*", "s3:List*"]
    resources = [
      "arn:aws:s3:::${local.react_bucket_name}",
      "arn:aws:s3:::${local.react_bucket_name}/*"
    ]
    principals {
      type = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    condition {
      test = "StringEquals"
      variable = "AWS:SourceArn"
      values = ["arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${aws_cloudfront_distribution.react.id}"]
    }
  }
}

resource "aws_s3_bucket_policy" "react" {
  bucket = aws_s3_bucket.react.id
  policy = data.aws_iam_policy_document.react_s3_policy.json
}

resource "aws_s3_bucket" "react" {
  bucket = local.react_bucket_name
}

resource "aws_s3_bucket_versioning" "react" {
  bucket = aws_s3_bucket.react.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_public_access_block" "react" {
  bucket                  = aws_s3_bucket.react.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

#resource "aws_s3_bucket_acl" "react" {
# bucket = aws_s3_bucket.react.id
#  acl    = "private"
#}
