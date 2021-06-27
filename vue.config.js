const path = require('path');

//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}
//
module.exports = {
  //解决定义的@ 路径问题
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@static', resolve('src/static'))
  },
  //解决跨域问题
  lintOnSave: true,
  devServer: {
    port: 9999,
    //此处的api和 http.js的axios的默认路径对应
    proxy: {
      '/api': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: 'http://localhost:9000/xcJ',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}

