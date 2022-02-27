/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader: 'imgix',
    path: 'image.tmdb.org',
    domains:['image.tmdb.org'],
  }
}

module.exports = nextConfig
