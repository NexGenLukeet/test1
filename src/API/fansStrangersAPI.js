import http from './index.js';

async function fansStrangersAPI(userId) {
    const res = await http.get(`user/${userId}/Fans/page/1/${userId}`);
    return res;
}

export { fansStrangersAPI };