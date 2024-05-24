<script setup>
</script>

<template>
    <!-- 这里一个搜索页面，一个主要内容的展示 -->
    <div class="searchviewcontainer"></div>
    <div class="mainshowvideocontainer"></div>
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