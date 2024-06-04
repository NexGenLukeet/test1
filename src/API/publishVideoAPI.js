import http from './index.js';

async function publishVideoAPI(params) {
    const res = await http.post('/user/uploadFile', params);
    return res;
}
async function publishCoverAPI(params){
    const res = await http.post('/user/uploadCover',params);
    return res;
}

async function publishEndAPI(params,userId){
    const res = await http.post(`/user/${userId}/publishVideo`,params)
}

export { publishVideoAPI,publishCoverAPI,publishEndAPI };