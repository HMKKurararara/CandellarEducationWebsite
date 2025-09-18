const withNextIntl = require('next-intl/plugin')(
  './lib/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  outputFileTracingRoot: __dirname,
};

module.exports = withNextIntl(nextConfig);
