/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a static HTML/CSS/JS bundle to the /out folder
  images: {
    unoptimized: true, // GitHub Pages does not support default Next.js server-side image optimization
  },
  // IMPORTANT: Un-comment and configure below if your site is NOT on a custom domain
  // basePath: '/your-repository-name', 
};

module.exports = nextConfig;