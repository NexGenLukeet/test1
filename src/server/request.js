import axios from 'axios';


const service = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/',
    timeout:5 * 1000,
    withCredentials:true,
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