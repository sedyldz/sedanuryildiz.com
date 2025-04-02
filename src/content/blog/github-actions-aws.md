---
title: "Automate AWS Deployments with GitHub Actions"
description: "Set up CI/CD pipeline for your React application using GitHub Actions to deploy to AWS S3 and CloudFront"
date: "2025-04-02"
lastModified: "2024-04-02"
slug: "github-actions-aws"
author:
  name: "Sedanur Yıldız"
  image: "/seda.jpg"
keywords:
  - GitHub Actions
  - AWS
  - CI/CD
  - React
  - S3
  - CloudFront
  - DevOps
image: "/images/posts/your-post-image.jpg"
---

# Automate Your AWS Deployments with GitHub Actions

After setting up your React website on AWS S3 and CloudFront (if you haven't done that yet, check out my [previous post](/blog/host-your-react-website-on-aws-for-almost-free)), the next step is automating your deployments. Let's set up a CI/CD pipeline using GitHub Actions that will automatically test, build, and deploy your site whenever you push to main.

## What's CI/CD and Why Should You Care?

Think of CI/CD as your personal robot assistant that takes care of all the boring stuff:

- **CI (Continuous Integration)**: Automatically checks if your code works with the existing codebase by running tests and builds
- **CD (Continuous Deployment)**: Automatically deploys working code to production

Together, they make sure your website is always up to date without you having to do the repetitive work.

## What You'll Need

- A **GitHub repository** with your React project
- **AWS S3** bucket and **CloudFront** distribution already set up
- **AWS IAM** access keys with appropriate permissions

## Step 1: Create AWS IAM User for GitHub Actions

First, create an IAM user that GitHub Actions will use to deploy your site:

1. Go to AWS IAM Console
2. Create a new user with programmatic access
3. Create a new policy with these permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:ListBucket",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation"],
      "Resource": ["arn:aws:cloudfront::your-account-id:distribution/*"]
    }
  ]
}
```

> ⚠️ **Important**: Replace `your-bucket-name` and `your-account-id` with your actual values.

## Step 2: Add GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

1. `AWS_ACCESS_KEY_ID`: Your IAM user's access key
2. `AWS_SECRET_ACCESS_KEY`: Your IAM user's secret key
3. `S3_BUCKET`: Your S3 bucket name
4. `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

> 🔒 Never commit these values directly to your code!

## Step 3: Create GitHub Actions Workflow

Create a new file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Build project
        run: npm run build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Deploy to S3
        run: aws s3 sync dist/ s3://${{ secrets.S3_BUCKET }} --delete

      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
```

This workflow:

1. Triggers on pushes to main and pull requests
2. Sets up Node.js and caches dependencies
3. Installs dependencies using `npm ci` (more reliable than `npm install`)
4. Runs linting checks
5. Builds the project
6. Deploys to S3
7. Invalidates CloudFront cache

## Understanding npm ci vs npm install

In the workflow, we use `npm ci` instead of `npm install`. Here's why:

- `npm ci` is specifically designed for CI/CD environments
- It's stricter and more consistent than `npm install`
- Requires `package-lock.json` and fails if it's out of sync
- Deletes `node_modules` before installing
- Faster in CI environments because it installs packages all at once

## Cost Considerations

GitHub Actions is free for:

- Public repositories: Unlimited minutes
- Private repositories: 2,000 minutes/month free

The typical workflow run takes 2-3 minutes, so you're unlikely to exceed the free tier limits for a personal project.

## Best Practices

1. **Cache Dependencies**

```yaml
- uses: actions/setup-node@v4
  with:
    cache: "npm"
```

2. **Skip CI for Minor Changes**
   Add `[skip ci]` to your commit message when making minor changes like updating docs.

3. **Branch Protection**
   Enable branch protection rules for `main`:

- Require status checks to pass before merging
- Require pull request reviews
- Do not allow bypassing the above settings

## Troubleshooting

If your workflow fails, check:

1. GitHub Secrets are correctly set
2. IAM user has correct permissions
3. S3 bucket name and CloudFront distribution ID are correct
4. Branch protection rules aren't blocking the workflow

## That's It!

Now you can:

1. Push your changes to GitHub
2. Take a break
3. Come back to find your site automatically updated

Sure, we already had a nice `npm run ship` command that made deploying and invalidating cache pretty straightforward. But now it's completely hands-free! Your deployment process is automated, consistent, and reliable.

## What's Next?

While automatic deployments to production are cool, you might want to be a bit more careful with your changes. In my next post, I'll show you how to set up staging and production environments, so you can:

- Test your changes in a safe environment first
- Use different S3 buckets for staging and production
- Automatically deploy to staging, but require approval for production
- Share preview links with your team before going live

Stay tuned for that! Until then, happy coding! 🚀

---

Having trouble getting this set up? Drop me a comment, and I'll help you out! And don't forget to check out my other posts about [AWS CLI setup](/blog/aws) and [hosting on AWS](/blog/host-your-react-website-on-aws-for-almost-free) if you need more AWS goodness.
