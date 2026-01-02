#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const baseUrl = 'https://thisiskushal31.github.io/link';
const currentDate = new Date().toISOString().split('T')[0];

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  // For bio link pages, the homepage is the main entry point
  // All content is on a single page with hash-based navigation
  // Clean URLs will redirect to hash URLs via the redirect script in index.html

  sitemap += `
</urlset>`;

  return sitemap;
}

// Generate and write sitemap
const sitemap = generateSitemap();
fs.writeFileSync('sitemap.xml', sitemap);

console.log(`✅ Generated sitemap for link project`);
console.log(`📄 Sitemap saved to: sitemap.xml`);
console.log(`🔗 Base URL: ${baseUrl}`);
console.log(`📅 Generated on: ${currentDate}`);
