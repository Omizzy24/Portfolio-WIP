variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "S3 bucket name for portfolio"
  type        = string
}

variable "sender_email" {
  description = "Verified SES sender email"
  type        = string
}

variable "recipient_email" {
  description = "Email to receive contact form submissions"
  type        = string
}
