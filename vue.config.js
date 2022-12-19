const { defineConfig } = require('@vue/cli-service')
const UnoCSS = require('@unocss/webpack').default

// https://staven630.github.io/vue-cli4-config/
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: (config) => {
    config.plugins = [...config.plugins, new UnoCSS()]
  },
})
