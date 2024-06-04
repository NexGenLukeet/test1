import http from './index.js';

async function followTriggerAPI(userId, otherUserId) {
    const res = await http.get(`user/${userId}/triggerFollow/${otherUserId}`);
    return res;
}

export { followTriggerAPI };