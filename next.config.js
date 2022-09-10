/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  excludeFile: (str) => /\*.cy.ts/.test(str),
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
        pathname: '/ipfs/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sentry: { hideSourceMaps: false },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
