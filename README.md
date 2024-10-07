# lambda_createPdfReport


# Steps:
1) Create lambda function manually in AWS cloud
2) Attach API Gateway Trigger
3) Create Github repository
4) Download Git in local machine
5) Download VS Code
6) Download Nodejs 18.x
7) Clone the repository in local machine
8) create index.mjs file and copy the content from AWS cloud
9) Add Package.json file
10) Run : npm install

11) Create .github/workflows directories and added deployment.yaml file for CI/CD
12) We need AWS ARN for the lambda and update the deployment script with that

13) We need AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY 
    13.1) Go to IAM --> Create a new user and and go to "security credentials" and "create access keys"
    13.2) Add these keys to Github repository settings --> secrets and variables --> actions --> and "new repo secrets"
    13.3) We need to attach lambda execution policies/role in the user

