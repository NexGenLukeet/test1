import http from './index.js';

async function postlogin(data) {
    const res = await http.post('/common/user/loginByPassword', {
        email: "583514368@qq.com",
        password: "123456"
    });

    console.log(res);

}

export { postlogin };