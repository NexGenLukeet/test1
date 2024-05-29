<script setup>
import { watch } from 'vue'
import searchheader from '../components/searchComponents/searchheader.vue';
import searchbody from '../components/searchComponents/searchbody.vue';
import searchIndex from '../components/searchComponents/searchIndex.vue';

import useAsyncState from '../hooks/useAsyncState.js';

// 网络请求部分；
import { searchAPI } from '../API/searchAPI.js';

const { responsedata,isdone } = useAsyncState(searchAPI());


</script>

<template>
    <div class="searchheader">
        <searchheader></searchheader>
    </div>
    <div class="searchindex">
        <searchIndex></searchIndex>
    </div>
    <div class="searchbody" v-if="isdone">
        <searchbody :data="responsedata"></searchbody>
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
}
</style>
