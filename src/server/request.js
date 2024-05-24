import axios from 'axios';

const service = axios.create({
    baseURL:process.env.VUE_APP_SERVE,
    timeout:5 * 1000
})

// 请求拦截器
service.interceptors.request.use(config => {
    // config.headers['Authorization'] = localStorage.getItem('token')
    return config 
})

// 响应拦截器

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
       
    }
)

export default service