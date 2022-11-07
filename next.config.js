/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["metadata.y00ts.com"]
  }
}

module.exports = nextConfig
