/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_API: process.env.APP_API,
    APP_DOMAIN: process.env.APP_DOMAIN,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    return config
  },
  images: {
    domains: ['craftwork-strapi.hardart.cz', 'craftwork-strapi-copy.hardart.cz', 'localhost'],
  },
}

module.exports = nextConfig
