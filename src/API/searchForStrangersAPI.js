import http from './index.js';

async function searchForStrangersAPI(userId,params) {
    const res = await http.post(`user/${userId}/searchUser/1`,params);
    // console.log(res)
    return res;
}

export { searchForStrangersAPI };