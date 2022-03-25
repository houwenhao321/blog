
// const testServer = `http://192.168.1.31:3000` //node 服务器
// const javaServer = `http://192.168.1.31:8080` //java服务器

// const wxServe = `http://127.0.0.1:3000`
const api = `http://192.168.1.31:8080`

module.exports = {
    lintOnSave: false,
    devServer: {
        // 可以被外网访问
        disableHostCheck: true, 
        // host: '0.0.0.0',
        overlay: {
            warnings: false,
            errors: false,
        },

        proxy: {
            '/api': {                      // backend  原先的写法
                target: api,
                changeOrigin: true,
                pathRewrite: { '/api': '' },
            }, 
        },
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/assets/scss/clear.scss";',
            },
        },
    },

    // 第三方插件配置
    pluginOptions: {
        'process.env': {
            NODE_ENV: '"development"',
        },
        // mock: { entry: './mock/myMock.ts', debug: true },
    },
    
    // publicPath: '/demo/',
    publicPath: '/Blog/',

    // chainWebpack: config => {
    //     // 生产环境配置
    //     if (isProduction) {
    //         // 生产环境注入cdn
    //         config.plugin('html')
    //             .tap(args => {
    //                 args[0].cdn = cdn;
    //                 return args;
    //             });
    //     }
    // },
    // configureWebpack: config => {
    //     if (isProduction) {
    //         // 用cdn方式引入
    //         config.externals = {
    //             'vue': 'Vue',
    //             'vue-router': 'VueRouter',
    //         }
    //     }
    // },
}


