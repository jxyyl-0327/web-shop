module.exports = {
    devServer: {
        port: 8888,
        proxy: {
            '/soso': {
                // 目标服务器地址
                target: 'https://c.y.qq.com',
                // 是否变更来源
                ws:true,
                changeOrigin: true,
               
            }
        }
    }
}