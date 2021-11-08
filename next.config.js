/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')
 
module.exports = withVideos()

module.exports = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
}
}
