locals {
  app_env  = terraform.workspace
  app_name = "${var.app_group}-${var.app_name}"
}
