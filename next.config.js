/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images:{
    domains : ['cdn.shopify.com', 'ae01.alicdn.com',],
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig