module.exports = {
    devServer: {
        proxy: {// 当你请求是以/v2开头的接口，则我帮你代理访问到https://api.douban.com
            '/v2/*': {
              target: 'https://api.douban.com', // 你接口的域名
              secure: false, // 如果是https接口，需要配置这个参数
              changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
            }
          },
    }
  }