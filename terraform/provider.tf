terraform {
  required_version = "= 1.6.3"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.65.0"
    }
  }

  backend "s3" {
    bucket               = "tmd-big-idea-terraform"
    workspace_key_prefix = "handsoffate"
    key                  = "fe.tfstate"
    region               = "us-west-2"
  }

}

provider "aws" {
  region = "us-west-2"
}
