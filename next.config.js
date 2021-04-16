const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['images.prismic.io', 'colegioalamovalinhos.cdn.prismic.io', 'i.ytimg.com'],
  },
}

module.exports = withPlugins([[withImages]], nextConfig)
