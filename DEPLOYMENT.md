# GitHub Pages Deployment Guide

This guide explains how to deploy the LinkHub application to GitHub Pages.

## Prerequisites

- GitHub account
- Repository named `thisiskushal31.github.io` (or your username + `.github.io`)
- Node.js and npm installed locally

## Deployment Steps

### 1. Build the Application

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist` folder with the production-ready files.

### 2. Configure GitHub Pages

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click on "Settings" tab

2. **Enable GitHub Pages**
   - Scroll down to "Pages" section in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch
   - Select "/docs" or "/dist" as the folder
   - Click "Save"

### 3. Deploy Options

#### Option A: Deploy from `/dist` folder (Recommended)

```bash
# Build the project
npm run build

# Copy dist contents to docs folder (GitHub Pages requirement)
cp -r dist/* docs/

# Commit and push
git add docs/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

#### Option B: Use GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 4. Verify Deployment

After deployment, your site will be available at:
- **Main Page**: `https://thisiskushal31.github.io/link/`

## Configuration Notes

### Vite Configuration
The application is configured without a base path in `vite.config.ts`:

```typescript
export default defineConfig({
  // No base path - serves from root
  server: {
    host: "::",
    port: 8080,
  },
  // ... other config
});
```

### HashRouter Configuration
The application uses **HashRouter** for GitHub Pages compatibility:

```typescript
// In App.tsx
<HashRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</HashRouter>
```

This ensures that:
- URLs work as `https://domain.com/links/` for the main page
- Internal routing uses `#/` fragments (e.g., `/#/route-name`)
- No server-side routing configuration is required
- All routes are client-side handled

### Asset Paths
All assets (images, icons) should be referenced relative to the root:
- Profile image: `/profile.jpeg` (will be served from `/profile.jpeg`)
- Favicon: `/favicon.ico` (will be served from `/favicon.ico`)

### Environment Variables
No environment variables are required for this deployment.

## Troubleshooting

### Common Issues

1. **404 Errors**
   - Check that all asset paths are relative to root
   - Verify HashRouter is being used (not BrowserRouter)

2. **Routing Issues**
   - Make sure you're using HashRouter, not BrowserRouter
   - Check that internal routes include the `#/` fragment
   - Verify routes are defined correctly in App.tsx

3. **Styling Issues**
   - Clear browser cache
   - Verify CSS is being served correctly

4. **Build Failures**
   - Check Node.js version (requires 16+)
   - Ensure all dependencies are installed

### Performance Optimization

- The build process optimizes assets automatically
- Images are optimized for web delivery
- CSS and JS are minified for production

## Custom Domain (Optional)

To use a custom domain:

1. **Add Custom Domain**
   - Go to repository Settings > Pages
   - Enter your custom domain
   - Save the changes

2. **Update Configuration**
   - Update `package.json` homepage
   - Update meta tags in `index.html`

3. **DNS Configuration**
   - Add CNAME record pointing to `username.github.io`
   - Wait for DNS propagation (up to 24 hours)

## Security

The application includes:
- Content Security Policy (CSP) headers
- Secure external link handling
- XSS protection measures

All security features are automatically applied during deployment.

## URL Structure

With HashRouter, your URLs will be structured as:

```
https://thisiskushal31.github.io/link/
├── Main page: /link/
└── 404 page: /link/#/not-found
```

This structure ensures compatibility with GitHub Pages static hosting.

---

**Live Demo**: [https://thisiskushal31.github.io/links/](https://thisiskushal31.github.io/links/) 