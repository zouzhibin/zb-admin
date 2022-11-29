const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = {
  lintOnSave: false,
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('static', resolve('public/static'))
    config.module.rules.delete('svg') // 重点：删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/index.scss";`
      }
    }
  }

}
