/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_NHOST_BACKEND: process.env.NEXT_PUBLIC_NHOST_BACKEND
  },
  webp: {
    preset: "default",
    quality: 100,
  },
  images: {
    domains: [
      'images.unsplash.com'
    ]
  }
}

module.exports = nextConfig
