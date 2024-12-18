import http from './index.js';

async function fansStrangersAPI(userId) {
    const res = await http.get(`user/${userId}/Followers/page/1/${userId}`);
    return res;
}

export { fansStrangersAPI };