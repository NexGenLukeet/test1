<script setup>
import { reactive, ref } from 'vue';
import searchicon from '../../components/mainPageComponents/searchicon.vue';
import comment from '../../components/mainPageComponents/comment.vue';
import { defineAsyncComponent } from 'vue';
const videochange = defineAsyncComponent(() => import('../../components/mainPageComponents/videochange.vue'))

let videodata = ref([])
// 获取请求数据；这里一次性请求了20条，所以是存在问题的。把这些数据传递到内层；
import { getvideos } from '../../API/getVideo.js';
getvideos(1).then(res => {
    videodata.value = res;
});


import { getcomment } from '../../API/getcomment.js';
let commentShow = ref(false);
const getcommentpage = () => {
    console.log('asd;fkk;')
    getcomment()
}

</script>

<template>
    <!-- 这里一个搜索页面，一个主要内容的展示 -->
    <div class="searchviewcontainer">
        <searchicon></searchicon>
    </div>
    <div class="mainshowvideocontainer">
        <videochange v-if="videodata.length > 0" :videosrcandpopular="videodata" @seecomment="commentShow = true">
        </videochange>
    </div>
    <Transition name="fade">
        <div class="commentcontainer" v-if="commentShow" @click="commentShow = false">
            <comment @changecomment="getcommentpage"></comment>
        </div>
    </Transition>

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

.commentcontainer {
    width: 100vw;
    /* height: 50vh; */
    background-color: white;
    position: absolute;
    bottom: 0px;
}

.fade-enter-from {
    transform: translateY(100%);
    opacity: 0;
}

.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.fade-enter-from {
    transform: translateY(0);
}

.fade-leave-to {
    transform: translateY(100%);
}
</style>