# Deployment Guide for Lota Canada Applications

This guide provides instructions for deploying the Blog and LotaXsolnAI applications in a production environment. Both applications have been configured with proper environment variables, database connections, and authentication mechanisms.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Blog Application Deployment](#blog-application-deployment)
3. [LotaXsolnAI Application Deployment](#lotaxsolnai-application-deployment)
4. [Monitoring and Maintenance](#monitoring-and-maintenance)

## Prerequisites

Before deploying the applications, ensure you have the following:

- Node.js 16.x or higher
- PostgreSQL database for the Blog application
- Upstash Redis account (optional for LotaXsolnAI)
- GitHub OAuth credentials for Blog authentication
- Environment variables as specified in the deployment scripts

## Blog Application Deployment

### Step 1: Set Required Environment Variables

Set the following environment variables on your production server:

```bash
export POSTGRES_PASSWORD="your-secure-password"
export NEXTAUTH_SECRET="your-random-secure-string"
export GITHUB_CLIENT_ID="your-github-oauth-client-id"
export GITHUB_CLIENT_SECRET="your-github-oauth-client-secret"
```

### Step 2: Run the Production Setup Script

```bash
cd /path/to/blog
./scripts/setup-production.sh
```

This script will:
- Validate required environment variables
- Create a production-specific .env file
- Run database migrations

### Step 3: Build and Start the Application

```bash
npm run build
npm start
```

The blog application will be available at http://localhost:3000 by default.

## LotaXsolnAI Application Deployment

### Step 1: Set Required Environment Variables (Optional for Redis)

Set the following environment variables on your production server:

```bash
export UPSTASH_REDIS_REST_URL="your-upstash-redis-url"
export UPSTASH_REDIS_REST_TOKEN="your-upstash-redis-token"
export NEXT_PUBLIC_UMAMI_ID="your-umami-analytics-id"
export NEXT_PUBLIC_UMAMI_URL="your-umami-analytics-url"
```

Note: If Redis environment variables are not set, the application will run in mock mode for Redis operations.

### Step 2: Run the Production Setup Script

```bash
cd /path/to/LotaXsolnAI
./scripts/setup-production.sh
```

This script will:
- Check for Redis environment variables
- Create a production-specific .env file
- Build the application for production

### Step 3: Start the Application

```bash
npm start
```

The LotaXsolnAI application will be available at http://localhost:3000 by default.

## Monitoring and Maintenance

### Health Checks

Implement health check endpoints for both applications to monitor their status:

- Blog: `/api/health`
- LotaXsolnAI: `/api/health`

### Database Backups

For the Blog application, set up regular PostgreSQL database backups:

```bash
pg_dump -U postgres -d blog > blog_backup_$(date +%Y%m%d).sql
```

### Redis Monitoring

If using Redis with LotaXsolnAI, monitor Redis usage through the Upstash dashboard.

### Logs

Both applications use standard output for logging. In a production environment, consider using a log aggregation service like ELK Stack or Datadog.

## Troubleshooting

### Blog Application

- **Database Connection Issues**: Verify PostgreSQL credentials and connectivity
- **Authentication Errors**: Check GitHub OAuth configuration

### LotaXsolnAI Application

- **Redis Connection Issues**: Verify Upstash credentials or check if the application is running in mock mode
- **Build Errors**: Check for missing environment variables

## Security Considerations

- Both applications use environment variables for sensitive configuration
- Authentication is handled securely with NextAuth.js in the Blog application
- Redis connections are secured with authentication tokens
- Error handling is implemented to prevent information leakage

---

For additional support, please contact the Lota Canada development team.
