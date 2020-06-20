const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir)
};

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // src目录的映射关系
  },

  productionSourceMap: false,
  devServer: {
    open: true,
    disableHostCheck: false,
    // 处理跨域请求
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
};
