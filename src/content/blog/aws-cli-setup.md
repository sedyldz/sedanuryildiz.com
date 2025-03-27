---
title: "Setting Up AWS CLI"
description: "Safe and simple guide to install AWS CLI - perfect for careful developers"
date: "2024-03-21"
lastModified: "2024-03-21"
slug: "aws"
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

# AWS CLI Setup: Get Control Over What You Deploy

AWS can seem intimidating, especially if you're a vibe coder who doesn't want to end up with a huge bill. But having control over what you deploy to AWS starts with using the **AWS CLI**. Don't worry—setting it up is easier than you think! Let's get you started.

## Creating AWS Access Keys

Before installing AWS CLI, you need to create access keys:

1. Sign in to the AWS Management Console
2. Click your username at the top right
3. Select "Security credentials"
4. Scroll to "Access keys"
5. Click "Create access key"
6. Choose "Command Line Interface (CLI)"
7. Click "Next"
8. Add a description (e.g., "Local development")
9. Click "Create access key"
10. **Important**: Save both the Access Key ID and Secret Access Key somewhere safe
    - You won't be able to see the Secret Access Key again
    - If you lose it, you'll need to create new keys

> ⚠️ Never share or commit your access keys. They give direct access to your AWS account.

## What You Need
- An **AWS account** (already set up)
- **Terminal (Mac/Linux)** or **Command Prompt (Windows)**
- **AWS Access Key ID & Secret Access Key** (created above)

## Step 1: Install AWS CLI
First, let's install the AWS CLI tool on your machine.

### For Mac/Linux:
Run the following commands:

```sh
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

### For Windows:
1. Go to the [AWS CLI Download](https://aws.amazon.com/cli/).
2. Download the **Windows** version.
3. Follow the installation steps.

## Step 2: Configure AWS CLI
Once it's installed, open your terminal or command prompt and run:

```sh
aws configure
```

You'll be asked for:
- **AWS Access Key ID** (you can find it in your AWS Console)
- **AWS Secret Access Key**
- **Default region name** (e.g., `us-west-2`)
- **Default output format** (choose `json`)

## Step 3: Test Your Setup
To confirm everything's working, try running this command:

```sh
aws s3 ls
```

If it's all set up right, you'll see a list of your S3 buckets (or a blank result if you haven't created any yet).

## Step 4: Use AWS CLI for Deployments
Now that AWS CLI is set up, you can use it to manage your AWS services directly from your terminal. Deploying a React app or managing your database becomes super easy.

### Example: Deploy to S3
1. Build your React app: `npm run build`
2. Deploy it to your S3 bucket with:

```sh
aws s3 sync build/ s3://your-bucket-name --delete
```

This will upload your React app's build folder to S3.

## Conclusion
Setting up AWS CLI is a simple and effective way to gain control over your AWS resources. It puts you in the driver's seat when deploying your apps—without worrying about the costs spiraling out of control.

Now you're ready to deploy your side project with AWS, keeping everything simple and cost-effective. 🚀

---

Let me know if you want to add or tweak anything!