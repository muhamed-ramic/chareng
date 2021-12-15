const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
    loader: 'akamai',
    path: '',
  },
  // i18n: {
  //   locales: ['en-US', 'fi', 'bs'],
  //   defaultLocale: 'en-US',
  // },
};

module.exports = withPlugins([withVideos], nextConfig);
