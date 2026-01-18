/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aswami',
  assetPrefix: '/aswami/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
