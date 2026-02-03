# Vercel Deployment Guide for Space Portfolio

This guide will help you deploy your full-stack portfolio to Vercel.

## Prerequisites

- GitHub account with the repository pushed
- Vercel account (free at https://vercel.com)
- Environment variables ready (see below)

## Step 1: Push to GitHub

Your project has been configured and is ready to push to GitHub. The repository structure is optimized for Vercel deployment.

**Key Configuration Files:**
- `vercel.json` - Vercel deployment configuration
- `.vercelignore` - Files to exclude from deployment
- `package.json` - Build and dev commands configured
- `vite.config.ts` - Frontend build configuration

## Step 2: Connect to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Vercel will auto-detect the project as a Vite + Node.js project

## Step 3: Configure Environment Variables

In Vercel dashboard, go to **Settings → Environment Variables** and add:

### Required Variables:
```
DATABASE_URL=mysql://user:password@host:3306/database
JWT_SECRET=your-secret-key
VITE_APP_ID=your-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
OWNER_OPEN_ID=your-owner-id
OWNER_NAME=Your Name
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your-api-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=your-frontend-key
```

### Optional Variables:
```
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
VITE_APP_TITLE=Yeasin's Portfolio
VITE_APP_LOGO=/images/logo.png
```

## Step 4: Deploy

1. Click "Deploy"
2. Vercel will build your project using the commands in `vercel.json`
3. Your site will be live at `https://your-project.vercel.app`

## Build Process

Vercel will execute:
- **Install:** `pnpm install`
- **Build:** `pnpm build` (builds both frontend and backend)
- **Start:** `pnpm start` (runs the production server)

## Project Structure

```
space-portfolio/
├── client/              # React frontend
│   ├── public/         # Static assets
│   └── src/            # React components & pages
├── server/             # Express backend
│   ├── _core/          # Core server logic
│   └── routes/         # API routes
├── drizzle/            # Database schema & migrations
├── shared/             # Shared types & constants
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies & scripts
```

## Important Notes

1. **Database:** Make sure your MySQL database is accessible from Vercel (check firewall/IP allowlist)
2. **File Storage:** Files are stored in the `/uploads` directory on the server
3. **Build Time:** First build might take 2-3 minutes
4. **Cold Starts:** Serverless functions may have initial cold start delays

## Troubleshooting

### Build Fails
- Check that all environment variables are set
- Verify `pnpm install` completes successfully locally
- Check build logs in Vercel dashboard

### Runtime Errors
- Check server logs in Vercel dashboard
- Verify database connection string
- Ensure all required environment variables are present

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check if Vercel IP is whitelisted in database firewall
- Test connection locally first

## Custom Domain

To add a custom domain:
1. Go to Vercel project settings
2. Click "Domains"
3. Add your domain and follow DNS instructions

## Monitoring & Logs

- **Build Logs:** Vercel Dashboard → Deployments
- **Runtime Logs:** Vercel Dashboard → Functions
- **Analytics:** Vercel Dashboard → Analytics

## Rollback

If deployment has issues:
1. Go to Vercel Dashboard → Deployments
2. Click on previous deployment
3. Click "Redeploy"

## Support

For Vercel-specific issues: https://vercel.com/support
For project issues: Check the GitHub repository
