/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dnlipko.github.io',
  assetPrefix: '/dnlipko.github.io',
}

module.exports = nextConfig 