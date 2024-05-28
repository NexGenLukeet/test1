import http from './index.js';

async function getcomment(data) {
    const res = await http.get('/video/{212c2e1c-0c0d-4c9f-84e8-2a0f48a90794}/getVideoComment/page/1');
    console.log(res)
}

export { getcomment };