import http from './index.js';

async function userTextAPI(userId) {
    const res = await http.get(`user/${userId}/getUserInfo/undefined`);
    // console.log(res)
    return res;
}

export { userTextAPI };