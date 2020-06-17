// 引入axios
import axios from 'axios'

let baseUrl_dev = 'http://localhost:8080' //开发环境

// 创建axios实例
const fetch = axios.create({
    baseUrl: baseUrl_dev,
    timeout: 7000, //超时设置
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// 封装请求拦截器
fetch.interceptors.request.use((config) => {
    // 在这里做检测或者包装等处理
    console.log('请求拦截', config)
    // 添加token令牌
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config
})

// 封装响应拦截器
fetch.interceptors.response.use((response) => {
        // 请求成功
        console.log('响应拦截', response)
        // 数据过滤，根据后端表示字符进行数据
        if (response.data && response.data.code == 0) {
            return response.data.data
        } else {
            console.log('网络异步，请稍后重试')
        }
    },
    (error) => {
        // 请求失败
        return Promise.reject(error)
    })

export default fetch