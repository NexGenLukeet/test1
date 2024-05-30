import http from './index.js';

async function getcomment(data) {
    // const res = await http.get('/video/{212c2e1c-0c0d-4c9f-84e8-2a0f48a90794}/getVideoComment/page/1');
    // console.log(res)
    const data1 = [
        {
            "Comment": {
                "commentId": "d0317bc0-cb40-476f-acbf-d8371b3195fb",
                "videoId": "0a2bca4b-4180-4dcc-a497-67bba2d96aa6",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545633345471,
                "userId": "99bf8fbf-9012-446d-b4dd-2c610256a468",
                "userNickname": "哈皮",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "8"
        },
        {
            "Comment": {
                "commentId": "6034029c-6b76-4e1f-a215-4d55c13c70ad",
                "videoId": "0a2bca4b-4180-4dcc-a497-67bba2d96aa6",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634143812,
                "userId": "4d56ee75-0393-482f-acfa-30bad6fabba8",
                "userNickname": "393-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "7"
        },
        {
            "Comment": {
                "commentId": "50fd8222-893e-49d8-b46f-0645a5815e5c",
                "videoId": "0a2bca4b-4180-4dcc-a497-67bba2d96aa6",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545633339976,
                "userId": "63e4dcc0-cc09-4e93-a279-7b1d27bc4f40",
                "userNickname": "c09-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "6"
        },
        {
            "Comment": {
                "commentId": "6031027e-1420-4e14-9ba0-c30bd57749b5",
                "commentContent": "123",
                "commentReplyID": "",
                "createdAt": 1717031885904,
                "userId": "0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060",
                "userNickname": "范思哲",
                "userAvatar": "/assets/avatar/0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060.png"
            },
            "likeNum": "0"
        },
        {
            "Comment": {
                "commentId": "26e8dbc0-d18f-4edd-b9da-f6937c6e0988",
                "commentContent": "444444",
                "commentReplyID": "",
                "createdAt": 1716979991475,
                "userId": "0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060",
                "userNickname": "范思哲",
                "userAvatar": "/assets/avatar/0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060.png"
            },
            "likeNum": "0"
        },
        {
            "Comment": {
                "commentId": "8d8fd353-b1c3-43f7-88d5-b2aef425cfaf",
                "commentContent": "1",
                "commentReplyID": "",
                "createdAt": 1716865841063,
                "userId": "0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060",
                "userNickname": "范思哲",
                "userAvatar": "/assets/avatar/0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060.png"
            },
            "likeNum": "0"
        },
        {
            "Comment": {
                "commentId": "9103c1af-85b8-467e-b9e3-f60c59900bd7",
                "commentContent": "",
                "commentReplyID": "",
                "createdAt": 1697686415435,
                "userId": "72a56b55-2503-4f1e-a05b-c320c1e2c63b",
                "userNickname": "503-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "0"
        },
        {
            "Comment": {
                "commentId": "fcd40727-13d6-4ca5-9a7c-ed3b8766d2f4",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634144119,
                "userId": "8f3409cb-1d66-4111-81e3-a18d3eacfcfa",
                "userNickname": "d66-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "1"
        },
        {
            "Comment": {
                "commentId": "833c44f5-a737-40d4-b557-aee8af82fd81",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634143890,
                "userId": "ac9369c6-180c-4476-922a-edea8868fe93",
                "userNickname": "80c-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "5"
        },
        {
            "Comment": {
                "commentId": "6034029c-6b76-4e1f-a215-4d55c13c70ad",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634143812,
                "userId": "4d56ee75-0393-482f-acfa-30bad6fabba8",
                "userNickname": "393-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "7"
        },
        {
            "Comment": {
                "commentId": "dd0827f5-f398-4d2d-b6ad-d36bc4f74a3a",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634142581,
                "userId": "4617f00b-295d-48b4-8d06-70a92b5e32e5",
                "userNickname": "95d-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "1"
        },
        {
            "Comment": {
                "commentId": "69034ba0-c06f-453e-87fc-cab4f184392c",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634142335,
                "userId": "a4fd4df2-bb07-4bea-a4fc-379b14fb0a68",
                "userNickname": "b07-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "4"
        },
        {
            "Comment": {
                "commentId": "f427a552-5d46-4363-9f25-e2c03931e0cb",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634142259,
                "userId": "fe03c35e-9a5e-42dd-903d-86a8473f935c",
                "userNickname": "a5e-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "1"
        },
        {
            "Comment": {
                "commentId": "a86439ad-4d1b-438e-aff3-2f5a63079301",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634141887,
                "userId": "2a41cb9e-685b-499b-b19f-7e67006eddb8",
                "userNickname": "85b-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "3"
        },
        {
            "Comment": {
                "commentId": "a2c58305-9574-46a6-8a32-373c8202c5b8",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634140768,
                "userId": "9e487c01-fb06-4be5-adb6-98fa2eb6221b",
                "userNickname": "b06-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "4"
        },
        {
            "Comment": {
                "commentId": "e7208d2c-e34f-4854-abea-8b07638333a1",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634140539,
                "userId": "70b61fb3-64e0-43d1-889c-e2483fa112e3",
                "userNickname": "4e0-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "1"
        },
        {
            "Comment": {
                "commentId": "29eabd0b-b64a-4a46-aa93-cd34721cb9f4",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634140381,
                "userId": "9e487c01-fb06-4be5-adb6-98fa2eb6221b",
                "userNickname": "b06-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "4"
        },
        {
            "Comment": {
                "commentId": "eddf9545-940f-4a6a-aa7c-fc57fc96b75e",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634140035,
                "userId": "2c67812c-f016-47cb-9f4a-8667940b7ac6",
                "userNickname": "016-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "1"
        },
        {
            "Comment": {
                "commentId": "4c50597e-6606-4963-addc-c61116b6df12",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634139742,
                "userId": "0a08560f-27bc-4d0e-af46-a7ae8aa9e7a7",
                "userNickname": "7bc-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "2"
        },
        {
            "Comment": {
                "commentId": "248c92b3-f08a-4e25-a454-1bf0e485dfa1",
                "commentContent": "comment test",
                "commentReplyID": "",
                "createdAt": 1545634139516,
                "userId": "0d629f0a-1c67-407d-b641-7189ee5836b9",
                "userNickname": "c67-4",
                "userAvatar": "/assets/avatar/default.png"
            },
            "likeNum": "4"
        }
    ];

    const result = await JSON.parse(data1)
    return result;
}

export { getcomment };