const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  // outputDir: "./build",
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: "@/component"
  //     }
  //   }
  // }
  // configureWebpack: config => {
  //   config.resolve.alias = {
  //     "@": Path2D.resolve(__dirname, "src")
  //   }
  // }
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('components', '@/components')
  }
})
