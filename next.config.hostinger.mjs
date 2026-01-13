/** @type {import('next').NextConfig} */
/**
 * Hostinger Static Export Configuration
 * 
 * Use this configuration for static export deployment on Hostinger shared hosting.
 * 
 * To use:
 * 1. Rename this file to next.config.mjs (backup the original first)
 * 2. Run: npm run build
 * 3. Upload the 'out' folder contents to Hostinger public_html
 */
const nextConfig = {
  output: 'export', // Enable static export for Hostinger
  images: {
    unoptimized: true, // Required for static export (no Next.js Image Optimization API)
  },
  trailingSlash: true, // Better compatibility with Hostinger servers
  // TypeScript errors should be fixed, not ignored
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
}

export default nextConfig

