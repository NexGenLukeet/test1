<script setup>
import { ref, onMounted, watch, unref } from 'vue'
import { useTouchSpeed } from '../../hooks/useTouchSpeed.js'
import svgheart from '../svgicon/svgheart.vue';
import svgtalk from '../svgicon/svgtalk.vue';
import svglink from '../svgicon/svglink.vue';

// 这是所有的视频数据。
const prop = defineProps(['videosrcandpopular'])
// console.log(prop.videosrcandpopular)

/**
 * 用数据进行控制。
 *  这是无限滚动的数据。
 */

const srcdata = ref(prop.videosrcandpopular.map(ele => ele.Video.videoPath))
// console.log(srcdata.value)

/**
 * 交互：
 * 1.可以无限下滑，但是不能存在无数个div。按照20个，那么一次最多允许出现10个div;缓存5个，加载5个，展示缓存的最后一个
 * 2.有一张是要展示的，并且展示时自动播放。
 * 3.滑动速度快，直接切换下一张。
 * 4.滑动速度慢，判断，如果滑动距离超过一半，切换到下一张，否则返回原位置。
 */
const showIndex = ref(0);
const dragcontainer = ref(null);
const { ychange, timechange } = useTouchSpeed(dragcontainer);

const toptrans = ref(new Array(10).fill(0).map((ele, index) => index * 100));

const isfast = ref(false);
const ismorehalf = ref(false);
const ismovedown = ref(false);

const changeIndex = () => {
    if (isfast.value) {
        if (ismovedown.value) {
            showIndex.value = showIndex.value + 1;
        } else {
            showIndex.value = showIndex.value - 1;
        }
    } else {
        if (ismovedown.value) {
            if (ismorehalf.value) {
                showIndex.value = showIndex.value + 1;
            }
        } else {
            if (ismorehalf.value) {
                showIndex.value = showIndex.value - 1;
            }
        }
    }
}

const endState = () => {
    if (showIndex.value < 4) {
        toptrans.value = new Array(10).fill(0).map((ele, index) => index * 100 - showIndex.value * 100);
    } else {
        toptrans.value = new Array(10).fill(0)
            .map((ele, index) => index * 100 - 4 * 100)
            .map((ele, index, array) => array[((index - (showIndex.value - 4)) % 10 + 10) % 10])
            .map((ele) => ele);

       



    }
  
}
/**
 * 效果部分：
 * 使用top来控制位置移动
 * 拿到滑动对应的距离来控制移动
 * 切换到下一张。使用js + requestframe 实现过渡效果。
 */
let controlmovemooth = ref('');//动态设置过渡效果。
// let temchange = ref(new Array(10).fill(0));
watch(ychange, () => {
    if (ychange.value === 0) {
        controlmovemooth.value = 'top 0.2s linear';
        // 这里有三种，一种是加，一种是减，一种是不变
        // 看一看时间；
        isfast.value = timechange.value < 100 ? true : false;
        changeIndex();
        endState();

        for(let i = 0;i<10;i++){
            dragcontainer.value.children[i].style.opacity = 1;
        }

    } else {
        controlmovemooth.value = 'none';

        if (showIndex.value < 4) {
            toptrans.value = new Array(10).fill(0).map((ele, index) => index * 100 - showIndex.value * 100 + ychange.value);
        } else {
            toptrans.value = new Array(10).fill(0)
                .map((ele, index) => index * 100 - 4 * 100)
                .map((ele, index, array) => array[((index - (showIndex.value - 4)) % 10 + 10) % 10])
                .map((ele) => ele + ychange.value);
        };
        ismorehalf.value = Math.abs(ychange.value) > 50 ? true : false;
        ismovedown.value = ychange.value < 0 ? true : false;


        for(let i = 0;i<10;i++){
            if(((i - (showIndex.value - 4)) % 10 + 10) % 10 == 4){
                // 这是正在显示的元素
                // console.log( dragcontainer.value.children[i])
                // console.log( 1 - ychange.value/100)
                // dragcontainer.value.children[i-1].style.opacity = 1 + ychange.value/100;
                dragcontainer.value.children[i].style.opacity = 1 + ychange.value/100;
                dragcontainer.value.children[(i+1)%10].style.opacity = - ychange.value/100;
            }
        }
       
    }
})


const playIndex = function (event, index) {
    console.log(event.target.play())
}
const islike = ref(false);

</script>

<template>
    <div class="videoviewcontainer" ref="dragcontainer">
        <div class="onevideocontainer" :style="{ top: `${toptrans[index]}%`, transition: controlmovemooth }"
            v-for="item, index in 10">
            <video class="videoclass" :src="srcdata[index]" width="100%" height="300px"
                @click="playIndex($event, index)"></video>
            <div class="iconcontainer" @click="islike = !islike">
                <svgheart v-model="islike"></svgheart>
                <svgtalk></svgtalk>
                <svglink></svglink>
            </div>
        </div>

    </div>
</template>

<style>
.videoviewcontainer {
    height: 100%;
    width: 100vw;
    background-color: black;
    position: relative;
    overflow: hidden;
}

.onevideocontainer {
    position: absolute;
    left: 0;
    top: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.iconcontainer {
    position: absolute;
    height: 200px;
    width: 50px;
    right: 0;
    bottom: 0;
}
</style>
