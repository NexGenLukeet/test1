<script setup>
import searchicon from '../../components/mainPageComponents/searchicon.vue';
import videochange from '../../components/mainPageComponents/videochange.vue';
</script>

<template>
    <!-- 这里一个搜索页面，一个主要内容的展示 -->
    <div class="searchviewcontainer">
        <searchicon></searchicon>
    </div>
    <div class="mainshowvideocontainer">
        <videochange></videochange>
    </div>
</template>

<style>
.searchviewcontainer{
    height: 50px;
    width:100vw;
}
.mainshowvideocontainer{
    /* 这里减去的是底部导航的大小 */
    height: calc(100vh - 50px - 50px);
    width: 100vw;
    position: relative;
}
</style>