import http from './index.js';

async function postlogin(url) {
    const res = await http.post(url)
    console.log(res)
    return res;
}

export { postlogin };