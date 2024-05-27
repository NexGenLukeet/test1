<script setup>
import { reactive, ref } from 'vue';
import searchicon from '../../components/mainPageComponents/searchicon.vue';
import videochange from '../../components/mainPageComponents/videochange.vue';


let videodata = ref([])
// 获取请求数据；这里一次性请求了20条，所以是存在问题的。把这些数据传递到内层；
import { getvideos } from '../../API/getVideo.js';
getvideos(1).then(res => {
    videodata.value = res;
    console.log(videodata.value)
});

</script>

<template>
    <!-- 这里一个搜索页面，一个主要内容的展示 -->
    <div class="searchviewcontainer">
        <searchicon></searchicon>
    </div>
    <div class="mainshowvideocontainer">
        <videochange v-if="videodata.length > 0" :videosrcandpopular="videodata"></videochange>
    </div>
</template>

<style>
.searchviewcontainer {
    height: 50px;
    width: 100vw;
    background-color: black;
}

.mainshowvideocontainer {
    /* 这里减去的是底部导航的大小 */
    height: calc(100vh - 50px - 50px);
    width: 100vw;
    position: relative;
}
</style>