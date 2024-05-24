import request from './request.js'

const http = {
    get(url, params) {
        const config = {
            method: 'get',
            url: url
        }
        if (params) config.params = params
        return request(config)
    },
    post(url, params) {
        const config = {
            method: 'post',
            url
        }
        if (params) config.data = params;
        console.log('post请求触发')
        return request(config)
    },
    put(url, params) {
        const config = {
            method: 'put',
            url
        }
        if (params) config.params = params
        return request(config)
    },
}

export default http