variable "app_name" {
  description = "Global Name for the application"
  type        = string
}

variable "app_group" {
  description = "Group name with ownership of the application"
  type        = string
}

variable "prefix" {
  description = "Global naming prefix"
  type        = string
}

variable "route53_hosted_zone_id" {
  type = map(list(string))
}

variable "route53_hosted_zone_base_name" {
  type = map(list(string))
}

variable "cloudfront_domain_cert_arn" {
  type = map(string)
}
