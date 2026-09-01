/** @type {import('Next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs static HTML/CSS/JS assets
  images: {
    unoptimized: true, // Required for static exports
  },
  // If deploying to a project page (e.g., username.github.io/kanji-app), set basePath:
  // basePath: '/kanji-app',
};

module.exports = nextConfig;
