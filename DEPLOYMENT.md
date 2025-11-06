# GitHub Pages Deployment Guide

## Step 1: Install Dependencies (if not already done)
```bash
npm install
```

## Step 2: Build Your Project
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Push the build folder to GitHub Pages
- Make your site live at: `https://tinat10.github.io/portfolio`

## Step 4: Enable GitHub Pages (if not already enabled)

1. Go to your GitHub repository: https://github.com/tinat10/portfolio
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**

## Step 5: Wait for Deployment

GitHub Pages usually takes 1-2 minutes to deploy. You'll see a green checkmark when it's ready.

## Your Site URL

Once deployed, your portfolio will be available at:
**https://tinat10.github.io/portfolio**

## Updating Your Site

Every time you make changes:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. Deploy the changes:
   ```bash
   npm run deploy
   ```

## Troubleshooting

- **404 Error**: Make sure GitHub Pages is enabled and pointing to the `gh-pages` branch
- **Images not loading**: Check that image paths use `${process.env.PUBLIC_URL}` (already done)
- **Blank page**: Check browser console for errors, ensure `homepage` in package.json matches your repo

## Custom Domain (Optional)

If you want to use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update the `homepage` field in `package.json` to your custom domain

