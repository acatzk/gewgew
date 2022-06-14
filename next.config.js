/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_NHOST_BACKEND: process.env.NEXT_PUBLIC_NHOST_BACKEND,
    FACEBOOK_ID: process.env.FACEBOOK_ID,
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  },
  webp: {
    preset: "default",
    quality: 100,
  },
  images: {
    domains: [
      'images.unsplash.com',
      's.gravatar.com',
      'miro.medium.com',
      'encrypted-tbn0.gstatic.com',
      'p16-sign-va.tiktokcdn.com',
      'p16-sign-sg.tiktokcdn.com'
    ]
  }
}

module.exports = nextConfig
