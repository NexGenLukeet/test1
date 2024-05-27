import http from './index.js';

async function postlogin(data) {
    console.log('登录')
    const res = await http.post('/common/user/login', {
        email: "583514368@qq.com",
        // email:'admin',
        "password": "123456"
        // "password": "000000"
    });
    console.log(res)
    // const res = await http.post(url)
    // console.log(res)
    // return res;
}

export { postlogin };