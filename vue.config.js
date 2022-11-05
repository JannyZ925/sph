/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
}) */

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js'
    },
  },
  lintOnSave: false, //关闭语法检查

  devServer: {//
    proxy: {
      'api': {
        target: 'http://gmall-h5-api.atguigu.cn',
      }
    }
  }
}
