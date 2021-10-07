const withImages = require('next-images')


module.exports = withImages({
  esModule: true,
  images: {
    domains: ['http://localhost:3333'],
  },
})
