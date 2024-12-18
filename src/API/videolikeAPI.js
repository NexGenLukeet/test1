import http from './index.js';

async function videolikeAPI(userId) {
    const res = await http.get(`user/${userId}/Likes/page/1`);
    return res;
}

export { videolikeAPI };