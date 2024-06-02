<script setup>
import { ref } from 'vue';
import { fansStrangersAPI } from '../../API/fansStrangersAPI.js';
fansStrangersAPI("0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060").then(res => {
    datalist.value =  res.data.data
})

import userlist from '../common/userlist.vue';
const datalist = ref([{
    userId: '',
    userNichname: '',
    userAvatar: '',
    userDesc: '',
    myRelation: '',
}])
</script>
<template>
    <div class="fansstangerlistcontainer">
        <userlist :datalist="datalist"></userlist>
    </div>
</template>

<style>
.fansstangerlistcontainer {
    height: calc(100vh - 50px);
    overflow: scroll;
}
</style>