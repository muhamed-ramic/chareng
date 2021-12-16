const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
    loader: 'akamai',
    path: '',
  },
};

module.exports = withPlugins([withVideos], nextConfig);
