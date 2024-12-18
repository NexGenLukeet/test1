import http from './index.js';

async function getcontractAPI(userId='0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060') {
    // let result = await http.get('/user/{0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060}/getContact')
    // console.log(result);

    // const data = [
    //     {
    //         "userId": "76321f63-022d-4e06-a5bf-69e136cb784c",
    //         "userAvatar": "/assets/avatar/76321f63-022d-4e06-a5bf-69e136cb784c.png",
    //         "userNickname": "混的狼人",
    //         "userDesc": "物以类聚,人以群分"
    //     },
    //     {
    //         "userId": "355575df-c6ef-453f-b471-7d2bb13b859b",
    //         "userAvatar": "/assets/avatar/355575df-c6ef-453f-b471-7d2bb13b859b.png",
    //         "userNickname": "炒饼丝的祖宗(铁牛版)",
    //         "userDesc": "请设置个性签66名"
    //     },
    //     {
    //         "userId": "76e19120-6411-4b45-b9cc-029713c506c2",
    //         "userAvatar": "/assets/avatar/76e19120-6411-4b45-b9cc-029713c506c2.png",
    //         "userNickname": "金思延啊",
    //         "userDesc": "请设置个性签名"
    //     },
    //     {
    //         "userId": "dd573ad5-105c-4eda-9779-66cf163c801f",
    //         "userAvatar": "/assets/avatar/dd573ad5-105c-4eda-9779-66cf163c801f.png",
    //         "userNickname": "早起一杯温开水",
    //         "userDesc": "1"
    //     },
    //     {
    //         "userId": "0faf2133-a522-4b79-bcd1-117401995ab1",
    //         "userAvatar": "http://43.138.15.137:3000blob:http://localhost:3000/f26998b9-e27a-48fa-bdc0-8e48619b6f87",
    //         "userNickname": "孟太子",
    //         "userDesc": "已读且并不想回复"
    //     },
    //     {
    //         "userId": "5a544ec7-0301-46b6-96df-0a033fd0cf1c",
    //         "userAvatar": "/assets/avatar/5a544ec7-0301-46b6-96df-0a033fd0cf1c.png",
    //         "userNickname": "小漂亮",
    //         "userDesc": "我爸是王云飞"
    //     },
    //     {
    //         "userId": "01eca0e4-97ee-4f36-a7a8-fbc4bcf779c8",
    //         "userAvatar": "/assets/avatar/01eca0e4-97ee-4f36-a7a8-fbc4bcf779c8.png",
    //         "userNickname": "秀儿",
    //         "userDesc": "请设置个性签名"
    //     },
    //     {
    //         "userId": "8ad18c23-2010-43a1-9f9d-a65030ce442b",
    //         "userAvatar": "/assets/avatar/8ad18c23-2010-43a1-9f9d-a65030ce442b.png",
    //         "userNickname": "最帅阳弟",
    //         "userDesc": "我阳弟是最帅的不接受任何反驳"
    //     },
    //     {
    //         "userId": "f5840d3a-f668-4da7-b24d-2d945bb9354d",
    //         "userAvatar": "/assets/avatar/f5840d3a-f668-4da7-b24d-2d945bb9354d.png",
    //         "userNickname": "用户f5840d",
    //         "userDesc": "请设置个性11签名"
    //     },
    //     {
    //         "userId": "c829d1f6-627c-4a03-9b61-88dd4bf5a75e",
    //         "userAvatar": "/assets/avatar/c829d1f6-627c-4a03-9b61-88dd4bf5a75e.png",
    //         "userNickname": "哦哦哦哦哦哦",
    //         "userDesc": "薄冰哥"
    //     },
    //     {
    //         "userId": "8421b83c-15da-41dd-a7be-ac7f925d8c6b",
    //         "userAvatar": "/assets/avatar/8421b83c-15da-41dd-a7be-ac7f925d8c6b.png",
    //         "userNickname": "晶晶",
    //         "userDesc": "请设置个性签名"
    //     },
    //     {
    //         "userId": "74c6279b-3c47-4ca7-aed6-c65b2198e2c3",
    //         "userAvatar": "/assets/avatar/74c6279b-3c47-4ca7-aed6-c65b2198e2c3.png",
    //         "userNickname": "君莫问",
    //         "userDesc": "好人"
    //     },
    //     {
    //         "userId": "8ca240a7-7fc6-4bfd-b7c6-238e6aed0192",
    //         "userAvatar": "/assets/avatar/8ca240a7-7fc6-4bfd-b7c6-238e6aed0192.png",
    //         "userNickname": "俗人",
    //         "userDesc": "请设置个签"
    //     },
    //     {
    //         "userId": "24d27267-3ba6-4526-b521-dd8f57d2feec",
    //         "userAvatar": "/assets/avatar/default.png",
    //         "userNickname": "小崔同学",
    //         "userDesc": "爱学习"
    //     },
    //     {
    //         "userId": "3eedef69-0130-4647-9bda-08ceb22c7233",
    //         "userAvatar": "/assets/avatar/3eedef69-0130-4647-9bda-08ceb22c7233.png",
    //         "userNickname": "兰子",
    //         "userDesc": "我这人走的很慢，但是我不会停"
    //     },
    //     {
    //         "userId": "0a6a2d04-c986-47ec-b02f-968fbb4159aa",
    //         "userAvatar": "/assets/avatar/0a6a2d04-c986-47ec-b02f-968fbb4159aa.png",
    //         "userNickname": "橘",
    //         "userDesc": "风还在吹"
    //     }
    // ];
    // return data;

    let result = await http.get(`/user/${userId}/getContact`)
    return result.data.data
}
export default getcontractAPI;