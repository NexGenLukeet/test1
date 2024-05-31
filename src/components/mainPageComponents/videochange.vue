<script setup>
import { ref, onMounted, watch, unref } from 'vue'
import { useTouchSpeed } from '../../hooks/useTouchSpeed.js'
import svgheart from '../svgicon/svgheart.vue';
import svgtalk from '../svgicon/svgtalk.vue';
import svglink from '../svgicon/svglink.vue';

// 这是所有的视频数据。
const prop = defineProps(['videosrcandpopular'])
// console.log(prop.videosrcandpopular)
const emit = defineEmits('seecomment');

const seemessage = () => {
    emit('seecomment')
}

/**
 * 用数据进行控制。
 *  这是无限滚动的数据。
 */

const srcdata = ref(prop.videosrcandpopular.map(ele => ele.Video.videoPath))
// watch(prop.videosrcandpopular,()=>{
//     if(prop.videosrcandpopular.length)
// })


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
watch(ychange, () => {
    if (ychange.value === 0) {
        controlmovemooth.value = 'top 0.2s linear';
        // 这里有三种，一种是加，一种是减，一种是不变
        // 看一看时间；
        isfast.value = timechange.value < 100 ? true : false;
        changeIndex();
        endState();

        for (let i = 0; i < 10; i++) {
            dragcontainer.value.children[i].style.opacity = 1;
        }
        for (let i = 0; i < 10; i++) {
            if (((i - (showIndex.value - 4)) % 10 + 10) % 10 == 4) {
                dragcontainer.value.children[i].children[0].play()
                isPlaying.value[i] = false;
            } else {
                dragcontainer.value.children[i].children[0].pause()
                isPlaying.value[i] = true;
            }
        }
        // dragcontainer.value.children[0].children[0].pause()
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
        ismorehalf.value =
            Math.abs(ychange.value) > 50
                ? true : false;
        ismovedown.value = ychange.value < 0 ? true : false;



        for (let i = 0; i < 10; i++) {
            if (((i - (showIndex.value - 4)) % 10 + 10) % 10 == 4) {
                dragcontainer.value.children[i].style.opacity = 1 + ychange.value / 100;
                dragcontainer.value.children[(i + 1) % 10].style.opacity = - ychange.value / 100;
            }
        }


    }
})


const playIndex = function (event, index) {
    if (event.target.tagName == 'VIDEO') {
        const videoElement = event.target;
        if (videoElement.paused) {
            videoElement.play()
                .then(() => {
                    isPlaying.value[index] = false;
                })
                .catch(error => {
                    console.error("Error attempting to play video:", error);
                });
        } else {
            videoElement.pause();
            isPlaying.value[index] = true;
        }
    }
}
const islike = ref(false);
const isPlaying = ref([true, true, true, true, true, true, true, true, true, true])

// const isAutoPlay = ref([true, false, false, false, false, false, false, false, false, false])
// const isMuted = ref([true, false, false, false, false, false, false, false, false, false])



</script>

<template>
    <div class="videoviewcontainer" ref="dragcontainer">
        <div class="onevideocontainer" :style="{ top: `${toptrans[index]}%`, transition: controlmovemooth }"
            v-for="item, index in 10" @click="playIndex($event, index)">
            <video class="videoclass" :src="srcdata[index]" width="100%" height="300px"></video>
            <div class="iconcontainer">
                <div style="width: 40px; height: 40px;border-radius: 50%;overflow: hidden;border: 2px solid white;"><img style="width: 100%;height: 100%;" :src="'http://43.138.15.137:3000'+ prop.videosrcandpopular[index].Video.userAvatar" alt=""></div>
                <svgheart v-model="islike" @click.stop="islike = !islike"></svgheart>
                <div>{{ prop.videosrcandpopular[index].WSLCNum.likeNum }}</div>
                <svgtalk @click.stop="seemessage"></svgtalk>
                <div>{{ prop.videosrcandpopular[index].WSLCNum.commentNum }}</div>
                <svglink></svglink>
                <div>{{ prop.videosrcandpopular[index].WSLCNum.shareNum }}</div>
            </div>
            <div class="playcontainer" v-if="isPlaying[index]">
                <svg t="1716798834057" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="8830" width="48" height="48">
                    <path
                        d="M882.734114 459.147258l0.024559-0.024559L244.016061 21.12718l-0.199545 0.188288C230.582097 8.748245 212.62819 1.014096 192.840518 1.014096c-40.704051 0-73.699536 32.66905-73.699536 72.996524 0 22.148439-0.954745 65.513086 0 64.572668l0 373.422851 0 393.071354c0 0.325411 0 25.249057 0 44.935422 0 40.302915 32.995485 72.972988 73.699536 72.972988 19.862373 0 37.892005-7.78429 51.125401-20.466124l0.050142 0.025583 638.742613-437.982216-0.024559-0.038886c13.886265-13.270235 22.549575-31.889291 22.549575-52.531424 0-0.050142 0-0.088004 0-0.150426 0-0.050142 0-0.11154 0-0.149403C905.28369 491.048829 896.620379 472.41647 882.734114 459.147258z"
                        p-id="8831" fill="#dbdbdb"></path>
                </svg>
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
    height: 250px;
    width: 50px;
    right: 0;
    bottom: 50px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    color:white;
    align-items: center;
}

.playcontainer {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 60px;
    height: 60px;

}
</style>
