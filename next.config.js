/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  excludeFile: (str) => /\*.cy.{js,ts}/.test(str),
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
  sentry: { hideSourceMaps: true },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
