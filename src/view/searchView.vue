<script setup>
import { watch,ref } from 'vue'
import searchheader from '../components/searchComponents/searchheader.vue';
import searchbody from '../components/searchComponents/searchbody.vue';
import searchIndex from '../components/searchComponents/searchIndex.vue';

import userlist from '../components/common/userlist.vue';

// 网络请求部分；
import {searchForStrangersAPI}from '../API/searchForStrangersAPI.js';


// 搜索的用户结果
const userListNetwork = ref([{
    userId:'',
    userNichname:'',
    userAvatar:'',
    userDesc:'',
    myRelation:'',
}])
const usersearch = (key)=>{
    searchForStrangersAPI('0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060',{key:key.value}).then(res => {
        userListNetwork.value = res.data.data;
    })
}

</script>

<template>
    <div class="searchheader">
        <searchheader @usersearch="usersearch"></searchheader>
    </div>
    <div class="searchindex">
        <searchIndex></searchIndex>
    </div>
    <div class="searchbody">
        <userlist :datalist="userListNetwork"></userlist>
      
    </div>
</template>

<style>
.searchheader {
    height: 50px;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.searchindex {
    height: 50px;
    background-color: black;
}

.searchbody {
    height: calc(100vh - 100px);
    background-color: black;
}
</style>
