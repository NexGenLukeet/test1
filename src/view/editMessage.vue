<script setup>

import editheader from '../components/editMessageComponents/editheader.vue'
import editimg from '../components/editMessageComponents/editimg.vue'
import editform from '../components/editMessageComponents/editform.vue';
import crippingimg from '../components/editMessageComponents/crippingimg.vue'
import { ref } from 'vue'

const isshowcanvans = ref(false)
const changeimg = function (data) {
    baseurl.value = data;
    isshowcanvans.value = true;
}

const editedimg = function(data){
    // console.log('修改后的图片url',data)
    isshowcanvans.value = false;
    imgsrc.value = data;
}
const imgsrc = ref('http://43.138.15.137:3000/assets/avatar/0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060.png?v=0.22886957901838545')

const baseurl = ref(null)
</script>
<template>
    <div class="editmsgcontainerheader">
        <editheader></editheader>
    </div>
    <div class="eidtmsgconainerimg">
        <editimg @changeimg="changeimg" :imgsrc="imgsrc"></editimg>
    </div>
    <div class="editformcontainermsg">
        <editform></editform>
    </div>
    <!-- 定位，全屏布局 -->
    <div v-if="isshowcanvans" class="changeimgincircle">
        <crippingimg :imgbaseurl="baseurl" @editedimg="editedimg" ></crippingimg>
    </div>
</template>

<style>
.editmsgcontainerheader {
    height: 50px;
    background-color: black;
    color: white;
    position: relative;
}

.eidtmsgconainerimg {
    height: 200px;
}

.editformcontainermsg {
    height: calc(100vh - 250px);
    background-color: black;
    color: white;
}

.changeimgincircle {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
}
</style>