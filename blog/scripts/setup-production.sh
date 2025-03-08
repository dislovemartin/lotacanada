#!/bin/bash

# Script to set up production environment for the blog application

# Check if required environment variables are set
if [ -z "$POSTGRES_PASSWORD" ] || [ -z "$NEXTAUTH_SECRET" ] || [ -z "$GITHUB_CLIENT_ID" ] || [ -z "$GITHUB_CLIENT_SECRET" ]; then
  echo "Error: Required environment variables are not set."
  echo "Please set the following environment variables:"
  echo "- POSTGRES_PASSWORD: Password for the PostgreSQL database"
  echo "- NEXTAUTH_SECRET: Secret key for NextAuth.js"
  echo "- GITHUB_CLIENT_ID: GitHub OAuth client ID"
  echo "- GITHUB_CLIENT_SECRET: GitHub OAuth client secret"
  exit 1
fi

# Create production .env file from template
envsubst < .env.production > .env.production.local

echo "Production environment variables have been set up successfully."

# Run database migrations for production
echo "Running database migrations..."
npx prisma migrate deploy

echo "Production setup completed successfully!"
