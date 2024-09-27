app_name  = "handsoffate-fe"
app_group = "hof"
prefix    = "tmd-"

route53_hosted_zone_id = {
  "dev"  = ["Z0198746GX8PPG66VRQF","Z02096491MNU25VMUVW40"]
  "prod" = ["Z0198746GX8PPG66VRQF","Z02096491MNU25VMUVW40"]
}

route53_hosted_zone_base_name = {
  "dev"  = ["dev.handsoffatesandwiches.com", "dev.handsoffatecoffee.com"]
  "prod" = ["handsoffatesandwiches.com", "handsoffatecoffee.com"]
}

cloudfront_domain_cert_arn = {
  "dev"  = "arn:aws:acm:us-east-1:223651443348:certificate/3a5d40de-0a24-497d-9cb0-ba8e8e9fba40"
  "prod" = "arn:aws:acm:us-east-1:223651443348:certificate/3a5d40de-0a24-497d-9cb0-ba8e8e9fba40"
}
