---
title: "Host Your React Website on AWS for (Almost) Free"
description: "A step-by-step guide to hosting a Vite + React website on AWS S3 and CloudFront"
date: "2024-03-21"
lastModified: "2024-03-21"
slug: "host-react-aws"
author:
  name: "Sedanur Yıldız"
  image: "/seda.jpg"
keywords:
  - AWS
  - React
  - Vite
  - S3
  - CloudFront
  - Web Hosting
image: "/images/posts/your-post-image.jpg"

--- 

# Host Your React Website on AWS for (Almost) Free

I'm using **AWS S3 and CloudFront** to host my personal website, and the cost is almost free. It's a great way to host a static website with excellent performance and global delivery. Let me show you how I set it up.

## What You Need
- An **AWS account**
- **AWS CLI** installed and configured on your local machine
- A **Vite + React** project

## Step 1: Configure Your Project
Ensure your `package.json` has the necessary build and deploy scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "deploy": "vite build && aws s3 sync dist/ s3://your-bucket-name --delete",
    "invalidate-cache": "aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths \"/*\""
  }
}
```

The scripts do the following:
- `build`: Compiles TypeScript and builds the production version of your site
- `deploy`: Builds the project and syncs the `dist` folder with your S3 bucket
- `invalidate-cache`: Clears the CloudFront cache to ensure visitors see your latest changes

> Note: Replace `your-bucket-name` with your S3 bucket name and `YOUR_DISTRIBUTION_ID` with your CloudFront distribution ID.

## Step 2: Set Up S3 for Hosting
1. Create an **S3 bucket** with your desired name

2. Enable **Static website hosting**:
   - Go to bucket properties
   - Scroll to "Static website hosting"
   - Click "Edit"
   - Enable "Static website hosting"
   - Set "Index document" to 'index.html'
   - Set "Error document" to 'index.html' (for SPA routing)

3. Update bucket permissions:
   - Go to bucket "Permissions" tab
   - Disable "Block all public access"
   - Update the bucket policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

> **Important**: Replace `your-bucket-name` with your actual bucket name in the policy.

4. **Verify S3 Setup**:
   - The bucket should be publicly accessible
   - You should be able to access files directly via the S3 website endpoint
   - If you see "403 Forbidden", check:
     - Bucket policy is correctly applied
     - "Block all public access" is disabled
     - Files have been uploaded successfully

## Step 3: Build and Deploy
1. Build and deploy to S3:
```sh
npm run deploy
```

2. After deploying, invalidate the CloudFront cache:
```sh
npm run invalidate-cache
```

> Tip: You don't need to invalidate the cache every time you deploy. Only do it when you need your changes to be immediately visible to all users.

## Step 4: Set Up CloudFront for HTTPS and Better Performance
1. Create a new **CloudFront distribution**
2. Set the origin domain to your S3 website endpoint
3. Configure:
   - Redirect HTTP to HTTPS
   - Default root object: `index.html`
   - Custom error response for 403/404 to redirect to `index.html` (for SPA routing)

## Step 5: Connect Your Custom Domain

> ⚠️ **Important**: When requesting an SSL certificate for CloudFront:
> - Create the certificate in the `us-east-1` (N. Virginia) region
> - CloudFront only works with certificates from this region
> - Wait for the certificate to show "Issued" status before proceeding
> - If you can't see your certificate in CloudFront, check these two points first!

1. **Request an SSL Certificate**:
   - Go to AWS Certificate Manager
   - Click "Request certificate"
   - Choose "Request a public certificate"
   - Add your domain name (e.g., `example.com`)
   - Add `*.example.com` if you want to cover subdomains
   - Choose DNS validation
   - Follow the validation steps by adding the CNAME records to your DNS provider

2. **Update CloudFront Distribution**:
   - Go to your CloudFront distribution
   - Click on "Edit" under "General"
   - Under "Alternate domain names (CNAMEs)", add your domain
   - Under "Custom SSL Certificate", select your newly created certificate
   - Save changes and wait for deployment (can take up to 15 minutes)

3. **Update DNS Settings**:
   - Go to your domain registrar's DNS settings
   - You'll need to add TWO different types of CNAME records:
     1. Certificate validation CNAME (from AWS Certificate Manager)
        - Copy the exact Name and Value from ACM
        - This validates your SSL certificate ownership
     2. Domain CNAME (for CloudFront)
        - Type: CNAME
        - Name: www (or @ for root domain)
        - Value: Your CloudFront distribution domain (e.g., `d1234abcd.cloudfront.net`)

4. **Verify Configuration**:
   - Wait for certificate validation (check status in ACM)
   - Wait for DNS propagation (can take 15-48 hours)
   - Check both CNAMEs are correctly set up
   - Verify CloudFront distribution status is "Deployed"

> **Troubleshooting Tips**:
> - If the site doesn't work immediately, wait for DNS propagation
> - Verify all CNAME records are exactly as provided by AWS
> - Check CloudFront distribution status
> - Ensure certificate is "Issued" in ACM
> - Clear your browser cache or try in incognito mode

## Cost Breakdown
- **S3**: ~$0.023 per GB/month for storage
- **CloudFront**: First 1TB/month free
- **Data Transfer**: First 100GB/month free
- **Route 53**: $0.50/hosted zone/month (if using custom domain)

For a typical personal website, you'll likely stay within the free tier limits or pay just a few cents per month.

### Tips
- Use the `--delete` flag in the S3 sync command to remove old files
- Consider setting up a CI/CD pipeline for automated deployments
- Enable CloudFront compression for better performance
- Use environment variables for bucket names in different environments

This setup provides a reliable, scalable, and cost-effective way to host your React application. The combination of S3 and CloudFront ensures your website is fast and secure! 🚀

