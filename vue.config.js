// Vue.config.js 配置选项
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    publicPath: "./",
    //  构建时的输出目录
    outputDir: "dist",
    //  放置静态资源的目录
    assetsDir: "static",
    transpileDependencies: [ /* string or regex */ ],
    //  是否为生产环境构建生成 source map？
    productionSourceMap: false,
    devServer: {
        open: false,
        host: 'localhost',
        port: 8081,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: { //配置跨域
            '/api': {
                target: 'http://localhost:8088', //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changeOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api/': '/' //请求的时候使用这个api就可以
                }
            },
            '/kp': {
                target: 'http://localhost:8088', //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changeOrigin: true, //允许跨域
                pathRewrite: {
                    '^/kp': '' //请求的时候使用这个api就可以
                }
            }
        }

    },
    configureWebpack: { //移除已从cdn引入的组件，不打包以下命名的内容
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'element-ui': 'ELEMENT',
            'echarts': 'echarts',
            'VueCookies': 'VueCookies',
            'axios': 'axios',
        },
    },
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
        config.resolve.alias.set('@', resolve('src')) 
    },

}