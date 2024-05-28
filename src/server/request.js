import axios from 'axios';


const service = axios.create({
    baseURL: '/api/api',
    timeout:5 * 1000,
    // withCredentials: true 
})

// 请求拦截器
service.interceptors.request.use(config => {
    
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