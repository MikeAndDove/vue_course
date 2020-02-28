const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'

module.exports = {
  publicPath: PUBLIC_PATH,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  devServer: {
    proxy: ''
  }
}